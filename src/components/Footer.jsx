function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">
              🐾 PetStore
            </h3>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect pet companion and premium pet supplies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#pets" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Browse Pets
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Shop Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 123 Gulshan Avenue, Dhaka 1212</li>
              <li>📞 +880 1712-345678</li>
              <li>✉️ info@petstore.com.bd</li>
              <li>🕐 Sat-Thu: 10AM - 8PM</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary-600 hover:bg-primary-700 p-3 rounded-full transition-colors duration-200"
              >
                📘
              </a>
              <a
                href="#"
                className="bg-primary-600 hover:bg-primary-700 p-3 rounded-full transition-colors duration-200"
              >
                📷
              </a>
              <a
                href="#"
                className="bg-primary-600 hover:bg-primary-700 p-3 rounded-full transition-colors duration-200"
              >
                🐦
              </a>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none flex-1"
                />
                <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PetStore. All rights reserved. Made with ❤️ for pets and their owners.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
