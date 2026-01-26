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
    },
    {
      id: 2,
      title: 'Warehousing Solutions',
      description: 'State-of-the-art storage with climate control and security',
      icon: FaWarehouse,
    },
    {
      id: 3,
      title: 'Express Delivery',
      description: 'Lightning-fast delivery for time-sensitive cargo',
      icon: FaBolt,
    },
    {
      id: 4,
      title: 'Container Services',
      description: 'Full and part container load services nationwide',
      icon: FaBoxes,
    },
    {
      id: 5,
      title: 'Vehicle Maintenance',
      description: 'Expert technicians with in-house workshop facilities',
      icon: FaTools,
    },
    {
      id: 6,
      title: 'Fleet Management',
      description: 'Comprehensive tracking and management systems',
      icon: FaChartLine,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-6 border border-purple-200 dark:border-purple-800">
            <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
            What We Offer
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Services
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            End-to-end logistics solutions powered by innovation and reliability
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Large Featured Card */}
          <div className="lg:col-span-2 lg:row-span-2 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 border border-purple-200 dark:border-purple-800">
                  <FaTruckMoving className="text-3xl text-purple-600 dark:text-purple-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {services[0].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                  {services[0].description}
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold"
              >
                <span>Explore Service</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Medium Cards */}
          {services.slice(1, 3).map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center border border-purple-200 dark:border-purple-800">
                    <IconComponent className="text-xl text-purple-600 dark:text-purple-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                    
                    <Link
                      href="/services"
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-sm"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Small Cards */}
          {services.slice(3).map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 border border-purple-200 dark:border-purple-800">
                  <IconComponent className="text-lg text-purple-600 dark:text-purple-400" />
                </div>
                
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                
                <Link
                  href="/services"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-sm"
                >
                  <span>View</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-semibold rounded-xl transition-colors"
          >
            <span>View All Services</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceTiles;
