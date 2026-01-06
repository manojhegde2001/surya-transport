import Link from 'next/link';

const ServiceTiles = () => {
  const services = [
    {
      id: 1,
      title: 'Long Distance Transport',
      description: 'Reliable transportation across states with GPS tracking',
      icon: '🚛',
    },
    {
      id: 2,
      title: 'Warehousing Solutions',
      description: 'Secure storage facilities with 24/7 monitoring',
      icon: '🏭',
    },
    {
      id: 3,
      title: 'Express Delivery',
      description: 'Fast and efficient delivery services for urgent cargo',
      icon: '⚡',
    },
    {
      id: 4,
      title: 'Container Services',
      description: 'Full and part container load services nationwide',
      icon: '📦',
    },
    {
      id: 5,
      title: 'Vehicle Maintenance',
      description: 'In-house workshop with expert technicians',
      icon: '🔧',
    },
    {
      id: 6,
      title: 'Fleet Management',
      description: 'Comprehensive fleet management and tracking systems',
      icon: '📊',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTiles;
