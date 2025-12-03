import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    hasPetsInCart,
    parsePrice,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState('');

  const handleApplyCoupon = () => {
    const result = applyCoupon(couponInput.trim().toUpperCase());
    if (result.success) {
      setCouponMessage('✓ Coupon applied! Pet adoption fees revealed.');
      setTimeout(() => setCouponMessage(''), 3000);
    } else {
      setCouponMessage(result.error);
      setTimeout(() => setCouponMessage(''), 3000);
    }
  };

  const handleQuantityChange = (productId, newQuantity, itemType) => {
    const quantity = parseInt(newQuantity);
    if (quantity > 0 && quantity <= 99) {
      updateQuantity(productId, quantity, itemType);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-9xl mb-6">🛒</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-600 mb-8">
              Start shopping to add items to your cart
            </p>
            <Link
              to="/"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {cartItems.map((item) => (
                <div
                  key={`${item.type === 'animal' ? 'animal' : 'product'}-${item.id}`}
                  className="flex flex-col sm:flex-row gap-4 p-6 border-b border-gray-200 last:border-b-0"
                >
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-4"
                      />
                    ) : (
                      <div className="text-5xl">
                        {item.category === 'Food' && '🍽️'}
                        {item.category === 'Toys' && '🎾'}
                        {item.category === 'Housing' && '🏠'}
                        {item.category === 'Accessories' && '🎀'}
                        {item.category === 'Equipment' && '⚙️'}
                        {item.category === 'Hygiene' && '🧼'}
                        {item.category === 'Furniture' && '🛋️'}
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.type === 'animal' ? 'animal' : 'product')}
                        className="text-red-600 hover:text-red-700 font-semibold text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">{item.description}</p>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3">
                        <label className="text-sm font-semibold text-gray-700">Quantity:</label>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.type === 'animal' ? 'animal' : 'product')}
                            className="px-3 py-1 hover:bg-gray-100 font-bold text-gray-700"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            max="99"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value, item.type === 'animal' ? 'animal' : 'product')}
                            className="w-16 text-center border-x border-gray-300 py-1 focus:outline-none"
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.type === 'animal' ? 'animal' : 'product')}
                            className="px-3 py-1 hover:bg-gray-100 font-bold text-gray-700"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-sm text-gray-600">
                          {item.type === 'animal' ? (
                            appliedCoupon ? `৳${item.hiddenPrice.toLocaleString('en-BD')}` : 'Negotiable'
                          ) : (
                            item.price
                          )} × {item.quantity}
                        </div>
                        <div className="text-xl font-bold text-primary-600">
                          {item.type === 'animal' ? (
                            appliedCoupon ? (
                              `৳${(item.hiddenPrice * item.quantity).toLocaleString('en-BD')}`
                            ) : (
                              <span className="text-gray-500 text-base">Requires Coupon</span>
                            )
                          ) : (
                            `৳${(parsePrice(item.price) * item.quantity).toLocaleString('en-BD')}`
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping Button */}
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-background-secondary rounded-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">৳{getCartTotal().toLocaleString('en-BD')}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">৳100</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax (10%)</span>
                  <span className="font-semibold">৳{(getCartTotal() * 0.1).toLocaleString('en-BD')}</span>
                </div>
                <div className="border-t border-gray-300 pt-3">
                  <div className="flex justify-between text-gray-900">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary-600">
                      ৳{(getCartTotal() + 100 + getCartTotal() * 0.1).toLocaleString('en-BD')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Coupon Section - Only show if pets in cart */}
              {hasPetsInCart() && (
                <div className="border-t border-gray-300 pt-4 mt-4 mb-6">
                  {!appliedCoupon ? (
                    <>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Pet Adoption Coupon Code
                      </label>
                      <div className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                          placeholder="PETADOPT2024"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                        />
                        <button
                          onClick={handleApplyCoupon}
                          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      {couponMessage && (
                        <p className={`text-sm mb-2 ${couponMessage.includes('✓') ? 'text-green-600' : 'text-red-600'}`}>
                          {couponMessage}
                        </p>
                      )}
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <p className="text-xs text-amber-800">
                          ⚠️ Pet adoptions require a valid coupon code to proceed with checkout
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                      <span className="text-sm text-green-700 font-semibold">
                        ✓ Coupon Applied: {appliedCoupon}
                      </span>
                      <button
                        onClick={removeCoupon}
                        className="text-red-600 hover:text-red-700 text-sm font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200 mb-3"
              >
                Proceed to Checkout
              </button>

              <div className="text-center text-sm text-gray-600">
                <p className="mb-2">Secure Checkout</p>
                <div className="flex justify-center gap-2 text-2xl">
                  💳 🔒
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
