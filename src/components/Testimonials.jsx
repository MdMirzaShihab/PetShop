import { testimonials } from '../data/mockData';

function Testimonials() {
  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Pet Owners Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our happy customers and their beloved pets
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 bg-gradient-to-b from-transparent via-background-secondary to-primary-100">
                {/* Rating */}
                <div className="text-2xl mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center mt-4">
                  <div className="text-4xl mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary-600">
                      {testimonial.petType} Owner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
