import petHeroImage from '../assets/PetHero.webp';

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-100 via-background-secondary to-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left z-10">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🎉 Trusted by 10,000+ Pet Families
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Perfect
              <span className="text-primary-600 block mt-2"> Companion</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Discover loving pets and premium pet supplies all in one place.
              Your journey to pet parenthood starts here.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#pets"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-primary-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Explore Pets 🐾
              </a>
              <a
                href="#products"
                className="bg-white hover:bg-gray-50 text-primary-600 font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary-600 transform hover:-translate-y-1"
              >
                Shop Products
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Pets Available</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600">1000+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Image - 3D Effect */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-primary-600 rounded-[3rem] blur-3xl opacity-20 animate-pulse-slow"></div>

            {/* 3D Card Container */}
            <div className="relative animate-float">
              <div className="relative transform hover:scale-105 transition-all duration-500 ease-out group">
                {/* Main Image Card with 3D effect */}
                <div className="relative bg-gradient-to-br from-white to-primary-50 p-8 rounded-[3rem] shadow-3d backdrop-blur-sm border-4 border-white hover:shadow-primary-400/50 transition-all duration-500">
                  {/* Decorative corner accents */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-primary-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary-400 rounded-full opacity-20 animate-pulse delay-150"></div>

                  {/* Pet Image */}
                  <img
                    src={petHeroImage}
                    alt="Happy Pet"
                    className="relative z-10 rounded-3xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating badge */}
                  <div className="absolute -top-4 -left-4 bg-primary-600 text-white px-6 py-3 rounded-2xl shadow-xl transform rotate-[-5deg] group-hover:rotate-[-8deg] transition-transform duration-300 animate-pulse">
                    <div className="text-2xl font-bold">Premium</div>
                    <div className="text-xs">Quality Assured</div>
                  </div>

                  {/* Bottom floating element */}
                  <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-2xl transform rotate-[5deg] group-hover:rotate-[8deg] transition-transform duration-300 border-2 border-primary-200 animate-pulse">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">⭐</span>
                      <div>
                        <div className="font-bold text-primary-600">5.0</div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional decorative elements */}
                <div className="absolute -z-10 top-10 -left-10 w-40 h-40 bg-primary-300 rounded-full opacity-30 blur-2xl"></div>
                <div className="absolute -z-10 bottom-10 -right-10 w-32 h-32 bg-primary-400 rounded-full opacity-30 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section - Moved below */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Healthy Pets</h3>
            <p className="text-gray-600">All pets are vet-checked and healthy</p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100">
            <div className="text-4xl mb-3">💝</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Caring Support</h3>
            <p className="text-gray-600">Expert guidance for pet care</p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100">
            <div className="text-4xl mb-3">🎁</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Quality Products</h3>
            <p className="text-gray-600">Premium supplies for your pets</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
