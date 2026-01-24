'use client';

import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section className="relative h-[500px] sm:h-[550px] md:h-[580px] lg:h-[600px] xl:h-[620px] w-full overflow-hidden bg-gray-900">
      {/* Local Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="/truck-video-poster.jpg"
        >
          <source src="/truck-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-4 lg:py-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-3 lg:mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-xs sm:text-sm font-medium">38+ Years of Trusted Service</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white mb-3 lg:mb-4 leading-tight">
            Your reliable partner in<br />transportation <span className="text-gray-300">since 1986</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-300 mb-4 lg:mb-6 max-w-2xl">
            Factory-focused, 24/7 logistics with zero production disruption
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors duration-200 text-sm lg:text-base"
            >
              Enquire for Contract Transportation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 bg-transparent hover:bg-white/10 text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-200 text-sm lg:text-base"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
