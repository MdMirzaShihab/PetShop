import { createContext, useContext, useState, useEffect } from 'react';
import { couponConfig, discountCoupons } from '../data/mockData';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage on initialization
    const savedCart = localStorage.getItem('petStoreCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [appliedCoupon, setAppliedCoupon] = useState(() => {
    const savedCoupon = localStorage.getItem('petStoreCoupon');
    return savedCoupon || null;
  });
  const [couponError, setCouponError] = useState('');

  const [appliedDiscountCoupon, setAppliedDiscountCoupon] = useState(() => {
    const savedDiscountCoupon = localStorage.getItem('petStoreDiscountCoupon');
    return savedDiscountCoupon || null;
  });
  const [discountAmount, setDiscountAmount] = useState(0);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('petStoreCart', JSON.stringify(cartItems));
    localStorage.setItem('petStoreCoupon', appliedCoupon || '');
    localStorage.setItem('petStoreDiscountCoupon', appliedDiscountCoupon || '');
  }, [cartItems, appliedCoupon, appliedDiscountCoupon]);

  // One-time migration to detect and clear corrupted cart data
  useEffect(() => {
    if (cartItems.length === 0) return;

    // Check for duplicate IDs (indicates corrupted data from the bug)
    const idCounts = {};
    cartItems.forEach(item => {
      idCounts[item.id] = (idCounts[item.id] || 0) + 1;
    });

    const hasDuplicates = Object.values(idCounts).some(count => count > 1);

    if (hasDuplicates) {
      console.warn('Corrupted cart data detected - clearing cart');
      setCartItems([]);
      localStorage.removeItem('petStoreCart');
    }
  }, []); // Run only once on component mount

  // Helper function to generate unique cart item key
  const getCartItemKey = (item) => {
    const itemType = item.type === 'animal' ? 'animal' : 'product';
    return `${itemType}-${item.id}`;
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const productKey = getCartItemKey(product);
      const existingItem = prevItems.find((item) => getCartItemKey(item) === productKey);

      if (existingItem) {
        // Increase quantity if item already exists
        return prevItems.map((item) =>
          getCartItemKey(item) === productKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId, itemType) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => {
        const itemKey = getCartItemKey(item);
        const targetKey = `${itemType === 'animal' ? 'animal' : 'product'}-${productId}`;
        return itemKey !== targetKey;
      })
    );
  };

  const updateQuantity = (productId, quantity, itemType) => {
    if (quantity <= 0) {
      removeFromCart(productId, itemType);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) => {
        const itemKey = getCartItemKey(item);
        const targetKey = `${itemType === 'animal' ? 'animal' : 'product'}-${productId}`;
        return itemKey === targetKey ? { ...item, quantity } : item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Helper to parse prices with different currency symbols
  const parsePrice = (priceString) => {
    if (typeof priceString !== 'string') return 0;
    // Remove currency symbols (৳, $) and commas, then parse
    return parseFloat(priceString.replace(/[৳$,\s]/g, '')) || 0;
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.type === 'animal') {
        // Only count pets if coupon is applied
        if (appliedCoupon && item.hiddenPrice) {
          return total + (item.hiddenPrice * item.quantity);
        }
        return total; // Don't count pets without coupon
      } else {
        // Regular products - handle both ৳ and $
        const price = parsePrice(item.price);
        return total + (price * item.quantity);
      }
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const hasPetsInCart = () => {
    return cartItems.some(item => item.type === 'animal');
  };

  const hasProductsInCart = () => {
    return cartItems.some(item => item.type !== 'animal');
  };

  const getPetTotal = () => {
    if (!appliedCoupon) return 0;
    return cartItems
      .filter(item => item.type === 'animal')
      .reduce((total, item) => {
        return total + ((item.hiddenPrice || 0) * item.quantity);
      }, 0);
  };

  const getProductTotal = () => {
    return cartItems
      .filter(item => item.type !== 'animal')
      .reduce((total, item) => {
        const price = parsePrice(item.price);
        return total + (price * item.quantity);
      }, 0);
  };

  // Calculate discount based on coupon type and cart state
  const calculateDiscount = (couponCode) => {
    const coupon = discountCoupons[couponCode];
    if (!coupon) return 0;

    // Determine what the discount applies to based on cart state
    let discountBase = 0;

    if (hasPetsInCart()) {
      if (appliedCoupon) {
        // Reveal code applied → discount applies to ENTIRE ORDER
        discountBase = getCartTotal(); // pets + products
      } else {
        // No reveal code → discount applies to PRODUCTS ONLY
        discountBase = getProductTotal();
      }
    } else {
      // No pets in cart → discount applies to all products
      discountBase = getCartTotal();
    }

    // Check minimum order value against the discount base
    if (discountBase < coupon.minOrderValue) return 0;

    // Check conditions for pet-specific coupons (e.g., BUNDLE20 needs 2+ pets AND reveal code)
    if (coupon.appliesTo === 'pets') {
      const petCount = cartItems.filter(i => i.type === 'animal').length;
      if (petCount < 2) return 0; // BUNDLE20 needs 2+ pets
      if (!appliedCoupon) return 0; // Need reveal code for pet discounts
    }

    // Calculate discount amount
    if (coupon.type === 'percentage') {
      return Math.round((discountBase * coupon.value) / 100);
    } else if (coupon.type === 'fixed') {
      return Math.min(coupon.value, discountBase);
    }

    return 0;
  };

  // Get subtotal (what discount applies to)
  const getDiscountableTotal = () => {
    if (hasPetsInCart() && appliedCoupon) {
      // Both pets and reveal code → entire order
      return getCartTotal();
    } else if (hasPetsInCart() && !appliedCoupon) {
      // Pets but no reveal → products only
      return getProductTotal();
    } else {
      // No pets → all products
      return getCartTotal();
    }
  };

  // Get final total with discount
  const getFinalTotal = () => {
    const discountableAmount = getDiscountableTotal();
    const discount = appliedDiscountCoupon ? calculateDiscount(appliedDiscountCoupon) : 0;
    return Math.max(0, discountableAmount - discount);
  };

  const applyCoupon = (code) => {
    const trimmedCode = code.trim().toUpperCase();

    if (!trimmedCode) {
      setCouponError('Please enter a coupon code');
      return { success: false, error: 'Please enter a coupon code' };
    }

    // Check if it's the price reveal coupon
    if (trimmedCode === couponConfig.validCoupon) {
      if (!hasPetsInCart()) {
        setCouponError('Coupon only applies to pet adoptions');
        return { success: false, error: 'This coupon only applies to pet adoptions' };
      }
      setAppliedCoupon(trimmedCode);
      setCouponError('');

      // IMPORTANT: Recalculate discount if one is already applied
      // because discount base changes when reveal code is applied
      if (appliedDiscountCoupon) {
        const newDiscount = calculateDiscount(appliedDiscountCoupon);
        setDiscountAmount(newDiscount);
      }

      return { success: true, message: 'Pet prices revealed!' };
    }

    // Check if it's a discount coupon
    if (discountCoupons[trimmedCode]) {
      const coupon = discountCoupons[trimmedCode];

      // Calculate the base amount for validation
      const discountBase = hasPetsInCart() && appliedCoupon
        ? getCartTotal()
        : hasPetsInCart()
          ? getProductTotal()
          : getCartTotal();

      // Validate minimum order value
      if (discountBase < coupon.minOrderValue) {
        setCouponError(`Minimum order value of ৳${coupon.minOrderValue.toLocaleString('en-BD')} required`);
        return {
          success: false,
          error: `Minimum order value of ৳${coupon.minOrderValue.toLocaleString('en-BD')} required`
        };
      }

      // Special validation for pet-specific coupons
      if (coupon.appliesTo === 'pets' && hasPetsInCart() && !appliedCoupon) {
        setCouponError('Please apply price reveal code first for pet discounts');
        return {
          success: false,
          error: 'Please apply price reveal code first for pet discounts'
        };
      }

      // Apply discount
      setAppliedDiscountCoupon(trimmedCode);
      const discount = calculateDiscount(trimmedCode);
      setDiscountAmount(discount);
      setCouponError('');

      // Info message varies based on cart state
      let message = coupon.description;
      if (hasPetsInCart() && !appliedCoupon) {
        message += ' (applies to products only)';
      }

      return {
        success: true,
        message: message
      };
    }

    setCouponError('Invalid coupon code');
    return { success: false, error: 'Invalid coupon code' };
  };

  const removeCoupon = (type = 'price') => {
    if (type === 'price') {
      setAppliedCoupon(null);

      // Recalculate discount to apply to products only now
      if (appliedDiscountCoupon && hasPetsInCart()) {
        const newDiscount = calculateDiscount(appliedDiscountCoupon);
        setDiscountAmount(newDiscount);
      }
    } else if (type === 'discount') {
      setAppliedDiscountCoupon(null);
      setDiscountAmount(0);
    }
    setCouponError('');
  };

  const removePetsFromCart = () => {
    const petsToRemove = cartItems.filter(item => item.type === 'animal');
    setCartItems(prevItems => prevItems.filter(item => item.type !== 'animal'));
    return petsToRemove;
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    // Price reveal coupon system
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    couponError,
    // Discount coupon system
    appliedDiscountCoupon,
    discountAmount,
    calculateDiscount,
    getDiscountableTotal,
    getFinalTotal,
    // Helper functions
    hasPetsInCart,
    hasProductsInCart,
    getPetTotal,
    getProductTotal,
    removePetsFromCart,
    parsePrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
