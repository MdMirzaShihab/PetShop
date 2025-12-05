import { useParams, Link, useNavigate } from 'react-router-dom';
import { petCategories, availablePets } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

function PetDetailPage() {
  const { category, petId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdoptClick = () => {
    addToCart(pet);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

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
  const pet = pets.find(p => p.id === parseInt(petId));

  if (!pet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pet Not Found</h1>
          <Link to={`/pets/${category}`} className="text-primary-600 hover:underline">
            Back to {categoryData.name}
          </Link>
        </div>
      </div>
    );
  }

  const renderAnimalDetails = () => {
    const commonDetails = [
      { label: 'Breed', value: pet.breed },
      { label: 'Age', value: pet.age },
      { label: 'Sex', value: pet.sex },
    ];

    let specificDetails = [];

    if (categoryData.slug === 'dogs' || categoryData.slug === 'cats') {
      specificDetails = [
        { label: 'Hair Length', value: pet.hairLength },
        { label: 'Size', value: pet.size },
        { label: 'Weight', value: pet.weight },
      ];
    } else if (categoryData.slug === 'birds') {
      specificDetails = [
        { label: 'Size', value: pet.size },
        { label: 'Tame Status', value: pet.tameStatus },
      ];
    } else if (categoryData.slug === 'fish') {
      specificDetails = [
        { label: 'Length', value: pet.length },
        { label: 'Water Type', value: pet.waterType },
        { label: 'Tank Size', value: pet.tankSize },
      ];
    } else if (categoryData.slug === 'reptiles') {
      specificDetails = [
        { label: 'Length', value: pet.length },
        { label: 'Temperature', value: pet.temperature },
        { label: 'Diet', value: pet.diet },
      ];
    } else if (categoryData.slug === 'small-animals') {
      specificDetails = [
        { label: 'Fur Type', value: pet.furType },
        { label: 'Size', value: pet.size },
        { label: 'Weight', value: pet.weight },
      ];
    }

    return [...commonDetails, ...specificDetails];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-background-secondary py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:underline hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link to={`/pets/${category}`} className="hover:underline hover:text-primary-600">
              {categoryData.name}
            </Link>
            <span>/</span>
            <span className="font-semibold text-primary-600">{pet.name}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2"
          >
            ← Back to {categoryData.name}
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image */}
            <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-100 rounded-2xl flex items-center justify-center p-8">
              {pet.image ? (
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-9xl lg:text-[12rem]">{pet.imagePlaceholder}</div>
              )}
            </div>

            {/* Right Column - Details */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">{pet.name}</h1>
              <p className="text-2xl text-primary-600 font-semibold mb-6">{pet.breed}</p>

              {/* Price Badge */}
              <div className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg text-2xl font-bold mb-8">
                {pet.price}
              </div>

              {/* Adoption Info Banner */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-xl">💡</div>
                  <div className="text-sm text-gray-700">
                    <strong>Adoption Process:</strong> Add to cart and enter coupon code at checkout to see the adoption fee and complete your adoption.
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{pet.description}</p>

              {/* Personality Traits */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personality</h3>
                <div className="flex flex-wrap gap-3">
                  {pet.personality.map((trait, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-base font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animal Details */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {renderAnimalDetails().map((detail, index) => (
                    <div key={index} className="bg-background-secondary rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">{detail.label}</div>
                      <div className="text-base font-semibold text-gray-900">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Badges */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Health & Training</h3>
                <div className="flex gap-4 text-base">
                  {pet.vaccinated && (
                    <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
                      ✓ Vaccinated
                    </span>
                  )}
                  {pet.trained && (
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium">
                      ✓ Trained
                    </span>
                  )}
                  {!pet.vaccinated && (
                    <span className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-medium">
                      Not Vaccinated
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAdoptClick}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200 text-lg"
                >
                  {addedToCart ? '✓ Added to Cart!' : 'Add to Cart - Adopt Me'}
                </button>
                <button className="flex-1 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-4 rounded-lg transition-colors duration-200 text-lg">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-background-secondary rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About {pet.name}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                {pet.name} is a wonderful {pet.breed.toLowerCase()} looking for a loving home.
                {pet.trained && ' This pet has been trained and is ready to join your family.'}
                {pet.vaccinated && ' All vaccinations are up to date.'}
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you're interested in meeting {pet.name}, please contact us to schedule a visit.
                We encourage potential adopters to spend time with our animals to ensure a perfect match.
                The price is negotiable, and we prioritize finding the right home over the adoption fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Pets Section */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More {categoryData.name} Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pets
              .filter(p => p.id !== pet.id)
              .slice(0, 3)
              .map((similarPet) => (
                <Link
                  key={similarPet.id}
                  to={`/pets/${category}/${similarPet.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-100 flex items-center justify-center p-4">
                    {similarPet.image ? (
                      <img
                        src={similarPet.image}
                        alt={similarPet.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="text-7xl">{similarPet.imagePlaceholder}</div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{similarPet.name}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{similarPet.breed}</p>
                    <div className="flex flex-wrap gap-2">
                      {similarPet.personality.slice(0, 2).map((trait, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to={`/pets/${category}`}
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              View All {categoryData.name}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PetDetailPage;
