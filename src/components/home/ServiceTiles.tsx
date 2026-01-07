import Link from 'next/link';
import { 
  FaTruckMoving, 
  FaWarehouse, 
  FaBolt, 
  FaBoxes, 
  FaTools, 
  FaChartLine 
} from 'react-icons/fa';

const ServiceTiles = () => {
  const services = [
    {
      id: 1,
      title: 'Long Distance Transport',
      description: 'Reliable transportation across states with real-time GPS tracking and 24/7 monitoring',
      icon: FaTruckMoving,
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-600/10 to-cyan-600/10',
      borderColor: 'border-blue-500/30 hover:border-cyan-400/60',
      size: 'large'
    },
    {
      id: 2,
      title: 'Warehousing Solutions',
      description: 'State-of-the-art storage with climate control and security',
      icon: FaWarehouse,
      gradient: 'from-indigo-600 to-purple-600',
      bgGradient: 'from-indigo-600/10 to-purple-600/10',
      borderColor: 'border-indigo-500/30 hover:border-purple-400/60',
      size: 'medium'
    },
    {
      id: 3,
      title: 'Express Delivery',
      description: 'Lightning-fast delivery for time-sensitive cargo',
      icon: FaBolt,
      gradient: 'from-cyan-600 to-blue-600',
      bgGradient: 'from-cyan-600/10 to-blue-600/10',
      borderColor: 'border-cyan-500/30 hover:border-blue-400/60',
      size: 'medium'
    },
    {
      id: 4,
      title: 'Container Services',
      description: 'Full and part container load services nationwide',
      icon: FaBoxes,
      gradient: 'from-blue-600 to-indigo-600',
      bgGradient: 'from-blue-600/10 to-indigo-600/10',
      borderColor: 'border-blue-500/30 hover:border-indigo-400/60',
      size: 'medium'
    },
    {
      id: 5,
      title: 'Vehicle Maintenance',
      description: 'Expert technicians with in-house workshop facilities',
      icon: FaTools,
      gradient: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-600/10 to-indigo-600/10',
      borderColor: 'border-purple-500/30 hover:border-indigo-400/60',
      size: 'small'
    },
    {
      id: 6,
      title: 'Fleet Management',
      description: 'Comprehensive tracking and management systems',
      icon: FaChartLine,
      gradient: 'from-indigo-600 to-blue-600',
      bgGradient: 'from-indigo-600/10 to-blue-600/10',
      borderColor: 'border-indigo-500/30 hover:border-blue-400/60',
      size: 'small'
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-50 via-blue-50/50 to-indigo-50/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating shapes */}
      <div className="absolute top-40 left-20 w-20 h-20 bg-cyan-400/20 rounded-2xl rotate-45 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-bold mb-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            What We Offer
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            End-to-end logistics solutions powered by <span className="text-blue-600 font-bold">innovation</span> and <span className="text-indigo-600 font-bold">reliability</span>
          </p>
        </div>
        
        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Large Featured Card (spans 2x2) */}
          <div className={`lg:col-span-2 lg:row-span-2 group relative bg-gradient-to-br ${services[0].bgGradient} backdrop-blur-xl rounded-3xl p-8 border ${services[0].borderColor} transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 overflow-hidden shadow-xl hover:shadow-2xl`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${services[0].gradient} rounded-2xl shadow-2xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <FaTruckMoving className="text-4xl text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {services[0].title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {services[0].description}
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-indigo-700 font-bold text-lg group/link"
              >
                <span>Explore Service</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Medium Cards (2 cards in right column) */}
          {services.slice(1, 3).map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`lg:col-span-2 group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl rounded-3xl p-6 border ${service.borderColor} transition-all duration-500 hover:scale-105 overflow-hidden shadow-lg hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    
                    <Link
                      href="/services"
                      className="inline-flex items-center text-blue-600 hover:text-indigo-700 font-semibold text-sm group/link"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Small Cards (4 compact cards) */}
          {services.slice(3).map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`lg:col-span-2 group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl rounded-3xl p-6 border ${service.borderColor} transition-all duration-500 hover:scale-105 hover:rotate-1 overflow-hidden shadow-lg hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                    <IconComponent className="text-xl text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  
                  <Link
                    href="/services"
                    className="inline-flex items-center text-blue-600 hover:text-indigo-700 font-semibold text-sm group/link"
                  >
                    <span>View</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA with Animated Background */}
        <div className="text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
            <Link
              href="/services"
              className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>View All Services</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTiles;
