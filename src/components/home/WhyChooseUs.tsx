'use client';

import {
  HiOutlineCurrencyRupee,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
} from 'react-icons/hi';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Transparent Costing',
      points: [
        'Real-time pricing aligned with truck mileage and fuel costs',
        'Month-on-month adjustments based on actual data',
        'Full visibility into every cost component',
      ],
      icon: HiOutlineCurrencyRupee,
    },
    {
      title: '24/7 GPS Tracking',
      points: [
        'Real-time monitoring of all shipments',
        'Complete visibility throughout transportation',
        'Peace of mind with live location updates',
      ],
      icon: HiOutlineLocationMarker,
    },
    {
      title: 'Operational Team',
      points: [
        'Highly trained and professional operations staff',
        'Ensures smooth truck movement at every stage of the process',
        'Proactive monitoring and quick resolution of operational issues',
      ],

      icon: HiOutlineUserGroup,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Surya Transport
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <Icon className="text-5xl mb-4 text-blue-600 dark:text-blue-400" />

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>

                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <HiOutlineCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
