'use client';

const CompanyDescription = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-6 border border-purple-200 dark:border-purple-800">
            <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
            20+ Years of Excellence
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Welcome to
            <br />
            <span className="text-purple-600 dark:text-purple-400">Surya Transport</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Revolutionizing logistics with cutting-edge technology and 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> 20+ years</span> of industry expertise
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {/* Large Stats Card */}
          <div className="md:col-span-4 md:row-span-2 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-semibold mb-4 border border-purple-200 dark:border-purple-800">
                  Our Story
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Trusted by <span className="text-purple-600 dark:text-purple-400">1000+</span> Businesses
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  With over two decades of excellence, we've become India's most 
                  <span className="text-gray-900 dark:text-white font-semibold"> reliable logistics partner</span>, 
                  delivering comprehensive solutions that drive business growth through innovation, 
                  safety, and unmatched customer satisfaction.
                </p>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">500K+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Deliveries</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">99.8%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">On-Time</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">24/7</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Safe & Secure Card */}
          <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 border border-purple-200 dark:border-purple-800">
              <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Safe & Secure</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">GPS tracking with real-time monitoring</p>
          </div>

          {/* 24/7 Support Card */}
          <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 border border-purple-200 dark:border-purple-800">
              <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Always here when you need us</p>
          </div>

          {/* Fast Delivery Card */}
          <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 border border-purple-200 dark:border-purple-800">
              <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Guaranteed on-time delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;
