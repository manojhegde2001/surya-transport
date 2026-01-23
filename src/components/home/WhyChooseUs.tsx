'use client';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Zero Production Disruption',
      points: [
        '24+ years with automobile manufacturers',
        'No production stoppage caused by logistics',
      ],
      icon: '🛡️',
    },
    {
      title: 'Cost Transparency & Flexibility',
      points: [
        'Variable cost adjustment (diesel, tyre, battery)',
        'Real-time costing calculator (future-ready)',
      ],
      icon: '💰',
    },
    {
      title: 'Fast Recovery During Breakdowns',
      points: [
        '24/7 workshop',
        'Standby trucks',
        'On-site supervisors',
      ],
      icon: '⚡',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Businesses Choose Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proven reliability and operational excellence for factory-focused logistics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-2">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
