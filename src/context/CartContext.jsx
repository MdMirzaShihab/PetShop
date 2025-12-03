import { createContext, useContext, useState, useEffect } from 'react';

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

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('petStoreCart', JSON.stringify(cartItems));
    localStorage.setItem('petStoreCoupon', appliedCoupon || '');
  }, [cartItems, appliedCoupon]);

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

  const applyCoupon = (code) => {
    const trimmedCode = code.trim().toUpperCase();

    if (!trimmedCode) {
      setCouponError('Please enter a coupon code');
      return { success: false, error: 'Please enter a coupon code' };
    }

    if (trimmedCode !== 'PETADOPT2024') {
      setCouponError('Invalid coupon code');
      return { success: false, error: 'Invalid coupon code' };
    }

    if (!hasPetsInCart()) {
      setCouponError('Coupon only applies to pet adoptions');
      return { success: false, error: 'This coupon only applies to pet adoptions' };
    }

    setAppliedCoupon(trimmedCode);
    setCouponError('');
    return { success: true };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
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
    // New additions for coupon system
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    couponError,
    hasPetsInCart,
    hasProductsInCart,
    getPetTotal,
    getProductTotal,
    removePetsFromCart,
    parsePrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
