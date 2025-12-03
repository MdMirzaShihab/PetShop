import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Checkout() {
  const navigate = useNavigate();
  const {
    cartItems,
    getCartTotal,
    clearCart,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    hasPetsInCart,
    hasProductsInCart,
    removePetsFromCart,
    getPetTotal,
    getProductTotal,
  } = useCart();

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState('');
  const [checkoutWarning, setCheckoutWarning] = useState('');

  const [formData, setFormData] = useState({
    // Contact Information
    email: '',
    phone: '',

    // Shipping Address
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Bangladesh',

    // Payment Information
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate: if pets in cart, must have valid coupon
    if (hasPetsInCart() && !appliedCoupon) {
      // Remove pets and show warning
      const removedPets = removePetsFromCart();
      const petNames = removedPets.map(p => p.name).join(', ');
      setCheckoutWarning(
        `Unable to adopt pets without a valid coupon code. ${removedPets.length} pet(s) (${petNames}) have been removed from your cart. Proceeding with product purchases only.`
      );

      // If cart is now empty, redirect to cart
      if (!hasProductsInCart()) {
        setTimeout(() => navigate('/cart'), 2000);
        return;
      }
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();

    // Redirect to success page after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (cartItems.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }

  const subtotal = getCartTotal();
  const shipping = 100;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <div className="text-5xl">✓</div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. Your order has been confirmed and will be shipped soon.
          </p>
          <div className="bg-background-secondary rounded-lg p-6 mb-6">
            <p className="text-gray-700">
              A confirmation email has been sent to <strong>{formData.email}</strong>
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

        {checkoutWarning && (
          <div className="bg-amber-100 border-2 border-amber-400 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚠️</div>
              <p className="text-amber-900 font-semibold">{checkoutWarning}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="+880 1712-345678"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="House 123, Road 5, Banani"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                        placeholder="e.g., Dhaka"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        District *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                        placeholder="e.g., Dhaka"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                        placeholder="e.g., 1212"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      maxLength="19"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        placeholder="MM/YY"
                        maxLength="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        maxLength="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🔒</div>
                      <div className="text-sm text-gray-700">
                        Your payment information is secure and encrypted. We never store your full card details.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-background-secondary rounded-lg p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-white rounded flex items-center justify-center flex-shrink-0">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                        ) : (
                          <div className="text-2xl">
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
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        <p className="text-sm font-bold text-primary-600">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coupon Section */}
                {hasPetsInCart() && (
                  <div className="border-t border-gray-300 pt-4 mt-4">
                    {!appliedCoupon ? (
                      <>
                        <label className="text-sm font-semibold text-gray-900 mb-2 block">
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
                            type="button"
                            onClick={() => {
                              const result = applyCoupon(couponInput.trim());
                              setCouponMessage(result.success ? '✓ Coupon applied!' : result.error);
                              setTimeout(() => setCouponMessage(''), 3000);
                            }}
                            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm"
                          >
                            Apply
                          </button>
                        </div>
                        {couponMessage && (
                          <p className={`text-xs mb-2 ${couponMessage.includes('✓') ? 'text-green-600' : 'text-red-600'}`}>
                            {couponMessage}
                          </p>
                        )}
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                          <p className="text-xs text-amber-800">
                            ⚠️ Pet adoption requires a valid coupon code. Pets will be removed if you proceed without a coupon.
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                        <span className="text-sm text-green-700 font-semibold">
                          ✓ Coupon: {appliedCoupon}
                        </span>
                        <button
                          type="button"
                          onClick={removeCoupon}
                          className="text-red-600 hover:text-red-700 text-xs font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pt-6 border-t border-gray-300">
                  {hasProductsInCart() && (
                    <div className="flex justify-between text-gray-700">
                      <span>Products Subtotal</span>
                      <span className="font-semibold">৳{getProductTotal().toLocaleString('en-BD')}</span>
                    </div>
                  )}

                  {hasPetsInCart() && appliedCoupon && (
                    <div className="flex justify-between text-gray-700">
                      <span>Adoption Fees</span>
                      <span className="font-semibold">৳{getPetTotal().toLocaleString('en-BD')}</span>
                    </div>
                  )}

                  {hasPetsInCart() && !appliedCoupon && (
                    <div className="flex justify-between text-amber-700">
                      <span className="text-sm">Pets (requires coupon)</span>
                      <span className="font-semibold italic text-sm">Pending</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">৳{shipping.toLocaleString('en-BD')}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (10%)</span>
                    <span className="font-semibold">৳{tax.toLocaleString('en-BD')}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3">
                    <div className="flex justify-between text-gray-900">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-2xl font-bold text-primary-600">
                        ৳{total.toLocaleString('en-BD')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </span>
                  ) : (
                    `Pay ৳${total.toLocaleString('en-BD')}`
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center mt-4">
                  By placing your order, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
