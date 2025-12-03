import { Link } from 'react-router-dom';
import { petCategories } from '../data/mockData';

function PetCategories() {
  return (
    <section id="pets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Our Pets Available
          </h2>
          <p className="text-xl text-gray-600">
            Find the perfect pet companion for your family
          </p>
        </div>

        {/* Pet Categories Grid - 3x2 for 6 categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {petCategories.map((category) => (
            <Link
              key={category.id}
              to={`/pets/${category.slug}`}
              className="group block bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Category Image */}
              <div className="relative overflow-hidden p-6 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-4/5 h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Category Info */}
              <div className="p-6 text-center bg-gradient-to-b from-transparent via-background-secondary to-primary-100">
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-700 mb-3 text-lg">
                  {category.description}
                </p>
                <p className="text-sm text-primary-600 font-semibold mb-4">
                  {category.count}
                </p>
                <div className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-block">
                  Explore {category.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PetCategories;
