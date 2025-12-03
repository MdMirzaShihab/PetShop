import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { petCategories, availablePets, productsByPet, careGuides, breedInfo } from '../data/mockData';
import { useCart } from '../context/CartContext';

function CategoryPage() {
  const { category } = useParams();
  const [activeTab, setActiveTab] = useState('feeding');
  const { addToCart } = useCart();

  // Find the category data
  const categoryData = petCategories.find(cat => cat.slug === category);

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/" className="text-primary-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const pets = availablePets[categoryData.name] || [];
  const products = productsByPet[categoryData.name] || [];
  const care = careGuides[categoryData.name];
  const breeds = breedInfo[categoryData.name] || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-background-secondary py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 flex items-center justify-center mb-8">
            <img
              src={categoryData.image}
              alt={categoryData.name}
              className="w-3/4 h-auto object-contain max-h-96"
            />
          </div>
          <div className="text-center">
            <div className="text-7xl mb-4">{categoryData.icon}</div>
            <h1 className="text-6xl font-bold mb-4 text-gray-900">{categoryData.name}</h1>
            <p className="text-2xl mb-6 text-gray-700">{categoryData.tagline}</p>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm justify-center text-gray-600">
              <Link to="/" className="hover:underline hover:text-primary-600">Home</Link>
              <span>/</span>
              <span>Pets</span>
              <span>/</span>
              <span className="font-semibold text-primary-600">{categoryData.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Available Pets Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Available {categoryData.name} for Adoption
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Find your perfect companion from our loving {categoryData.name.toLowerCase()}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Pet Image Placeholder */}
                <Link to={`/pets/${category}/${pet.id}`}>
                  <div className="h-64 flex items-center justify-center text-9xl cursor-pointer hover:scale-105 transition-transform duration-300">
                    {pet.imagePlaceholder}
                  </div>
                </Link>

                {/* Pet Info */}
                <div className="p-6 bg-gradient-to-b from-transparent via-background-secondary to-primary-100">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <Link to={`/pets/${category}/${pet.id}`}>
                        <h3 className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
                          {pet.name}
                        </h3>
                      </Link>
                      <p className="text-primary-600 font-semibold">{pet.breed}</p>
                    </div>
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                      {pet.price}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <div>Age: <span className="font-semibold">{pet.age}</span></div>
                    <div>Sex: <span className="font-semibold">{pet.sex}</span></div>
                  </div>

                  <p className="text-gray-700 mb-4">{pet.description}</p>

                  {/* Personality Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pet.personality.map((trait, index) => (
                      <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {trait}
                      </span>
                    ))}
                  </div>

                  {/* Status Badges */}
                  <div className="flex gap-3 mb-4 text-sm">
                    {pet.vaccinated && (
                      <span className="flex items-center gap-1 text-green-600">
                        ✓ Vaccinated
                      </span>
                    )}
                    {pet.trained && (
                      <span className="flex items-center gap-1 text-blue-600">
                        ✓ Trained
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/pets/${category}/${pet.id}`}
                    className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Essential Products for {categoryData.name}
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Everything your {categoryData.name.toLowerCase().slice(0, -1)} needs for a happy, healthy life
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
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
                </div>

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
                      onClick={() => addToCart(product)}
                      className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/#products" className="inline-block bg-white hover:bg-gray-50 text-primary-600 font-semibold px-8 py-3 rounded-lg border-2 border-primary-600 transition-colors duration-200">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Care Guide Section */}
      {care && (
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              {categoryData.name} Care Guide
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Expert tips for keeping your {categoryData.name.toLowerCase().slice(0, -1)} happy and healthy
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.keys(care).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 capitalize ${
                    activeTab === tab
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-background-secondary text-gray-700 hover:bg-primary-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-background-secondary rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {care[activeTab].title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {care[activeTab].content}
              </p>
              <h4 className="font-semibold text-gray-900 mb-3">Key Tips:</h4>
              <ul className="space-y-2">
                {care[activeTab].tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Breed Information Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Popular {categoryData.name} Breeds
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Learn about different breeds and find the perfect match for you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {breeds.map((breed) => (
              <div key={breed.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 bg-gradient-to-b from-transparent via-background-secondary to-primary-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{breed.name}</h3>

                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div><span className="font-semibold">Size:</span> {breed.size}</div>
                    <div><span className="font-semibold">Lifespan:</span> {breed.lifespan}</div>
                    <div><span className="font-semibold">Temperament:</span> {breed.temperament}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {breed.characteristics.map((char, index) => (
                      <span key={index} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Welcome a {categoryData.name.slice(0, -1)} Home?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Our team is here to help you find the perfect companion and provide ongoing support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Contact Us
            </button>
            <Link
              to="/"
              className="bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-800 transition-colors duration-200"
            >
              Browse All Pets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryPage;
