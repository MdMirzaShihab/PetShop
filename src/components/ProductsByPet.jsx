import { useState } from 'react';
import { productsByPet } from '../data/mockData';
import { useCart } from '../context/CartContext';

function ProductsByPet() {
  const [selectedPet, setSelectedPet] = useState('Dogs');
  const petTypes = ['Dogs', 'Cats', 'Birds', 'Fish', 'Reptiles', 'Small Animals'];
  const { addToCart } = useCart();

  return (
    <section id="products" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop Products by Pet
          </h2>
          <p className="text-xl text-gray-600">
            Premium supplies tailored for your pet's needs
          </p>
        </div>

        {/* Pet Type Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {petTypes.map((petType) => (
            <button
              key={petType}
              onClick={() => setSelectedPet(petType)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedPet === petType
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary-100 hover:text-primary-600'
              }`}
            >
              {petType}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsByPet[selectedPet].map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden p-6 flex items-center justify-center h-48">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-4/5 h-auto object-contain max-h-full"
                  />
                ) : (
                  <div className="text-6xl">
                    {product.category === 'Food' && '🍽️'}
                    {product.category === 'Toys' && '🎾'}
                    {product.category === 'Housing' && '🏠'}
                    {product.category === 'Accessories' && '🎀'}
                    {product.category === 'Equipment' && '⚙️'}
                    {product.category === 'Hygiene' && '🧼'}
                    {product.category === 'Furniture' && '🛋️'}
                  </div>
                )}
                {product.rating && (
                  <div className="absolute top-2 right-2 bg-primary-100 rounded-full px-2 py-1 text-xs font-semibold flex items-center gap-1">
                    ⭐ {product.rating}
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5 bg-gradient-to-b from-transparent via-background-secondary to-primary-100">
                <span className="text-xs text-primary-600 font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {product.price}
                  </span>
                  <button
                    onClick={() => product.inStock && addToCart(product)}
                    className={`font-semibold px-4 py-2 rounded-lg transition-colors duration-200 ${
                      product.inStock
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Sold Out'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsByPet;
