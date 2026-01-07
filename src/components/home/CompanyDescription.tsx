'use client';
const CompanyDescription = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      {/* Animated background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl animate-ping" style={{ animationDuration: '3s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Badge with Floating Animation */}
        <div className="flex justify-center mb-8 animate-float">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
            <span className="relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-bold shadow-2xl">
              <svg className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="bg-white/20 px-3 py-1 rounded-full">20+</span>
              Years of Excellence
            </span>
          </div>
        </div>

        {/* Kinetic Typography Hero */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight">
            <span className="block text-white mb-2 animate-slide-down">Welcome to</span>
            <span className="relative inline-block animate-slide-up">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 blur-2xl opacity-50 animate-pulse" />
              <span className="relative bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Surya Transport
              </span>
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Revolutionizing logistics with cutting-edge technology and 
            <span className="text-cyan-400 font-bold"> 20+ years</span> of industry expertise
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {/* Large Stats Card */}
          <div className="md:col-span-4 md:row-span-2 group relative bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-semibold mb-4 border border-cyan-400/30">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  Our Story
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Trusted by <span className="text-cyan-400">1000+</span> Businesses
                </h3>
                
                <p className="text-blue-200 text-lg leading-relaxed mb-6">
                  With over two decades of excellence, we've become India's most 
                  <span className="text-white font-semibold"> reliable logistics partner</span>, 
                  delivering comprehensive solutions that drive business growth through innovation, 
                  safety, and unmatched customer satisfaction.
                </p>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="text-3xl font-black text-cyan-400 mb-1">500K+</div>
                  <div className="text-xs text-blue-200">Deliveries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="text-3xl font-black text-indigo-400 mb-1">99.8%</div>
                  <div className="text-xs text-blue-200">On-Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="text-3xl font-black text-blue-400 mb-1">24/7</div>
                  <div className="text-xs text-blue-200">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Safe & Secure Card */}
          <div className="md:col-span-2 group relative bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:rotate-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-2xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Safe & Secure</h3>
              <p className="text-blue-200 text-sm">GPS tracking with real-time monitoring</p>
            </div>
          </div>

          {/* 24/7 Support Card */}
          <div className="md:col-span-2 group relative bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-6 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500 hover:scale-105 hover:-rotate-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-blue-200 text-sm">Always here when you need us</p>
            </div>
          </div>

          {/* Fast Delivery Card */}
          <div className="md:col-span-2 group relative bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-6 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-blue-200 text-sm">Guaranteed on-time delivery</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slide-down { animation: slide-down 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out 0.2s both; }
        .animate-fade-in { animation: fade-in 1s ease-out 0.4s both; }
        .bg-grid-white\/\[0\.02\] { background-image: linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px); }
      `}</style>
    </section>
  );
};

export default CompanyDescription;
