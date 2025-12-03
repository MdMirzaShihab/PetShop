import petVideo from '../assets/PetVideo.mp4';

function VideoSection() {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Video Background Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Video */}
          <div className="relative aspect-video w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={petVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                Where Pets Find Their
                <span className="text-primary-400 block mt-2">Forever Families</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 drop-shadow-lg">
                Experience the joy of welcoming a new companion into your life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pets"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-primary-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Start Your Journey
                </a>
                <a
                  href="#products"
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl shadow-xl border-2 border-white/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-20 h-20 bg-primary-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-primary-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-white">Award Winning</div>
            <div className="text-sm text-white/70">Best Pet Store 2024</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
            <div className="text-4xl mb-2">💚</div>
            <div className="text-2xl font-bold text-white">Certified Care</div>
            <div className="text-sm text-white/70">Licensed Professionals</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
            <div className="text-4xl mb-2">🌟</div>
            <div className="text-2xl font-bold text-white">10K+ Happy</div>
            <div className="text-sm text-white/70">Pet Families</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
            <div className="text-4xl mb-2">📞</div>
            <div className="text-2xl font-bold text-white">24/7 Support</div>
            <div className="text-sm text-white/70">Always Here for You</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
