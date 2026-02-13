import { HiCog, HiTruck, HiLocationMarker, HiClipboardList, HiHome } from 'react-icons/hi';

export const metadata = {
  title: 'Services | Surya Transport',
};

const services = [
  {
    title: 'In-Plant Movement',
    icon: HiCog,
    points: [
      'Seamless transport of materials within your factory',
      'Minimized production delays through optimized internal logistics',
      'Supports lean manufacturing and efficient workflows',
      'Improves overall operational efficiency and productivity',
    ],
  },
  {
    title: 'Inter SIPCOT – Local',
    icon: HiLocationMarker,
    points: [
      'Frequent back-and-forth transport between nearby sites',
      'Quick and reliable shuttle-run service for industrial clusters',
      'Reduces waiting times and keeps operations running smoothly',
      'Flexible trips to adapt to daily business needs',
    ],
  },
  {
    title: 'State to State (Full Truck Load)',
    icon: HiTruck,
    points: [
      'Dedicated full-truck transport across states',
      'Secure, timely, and cost-effective bulk shipments',
      'Flexible scheduling to meet business priorities',
      'Ideal for moving large volumes safely and efficiently',
    ],
  },
  {
    title: 'Sequence Transport',
    icon: HiClipboardList,
    points: [
      'Just-in-time delivery of spare parts to assembly lines',
      'Ensures uninterrupted production and line efficiency',
      'Minimizes inventory holding costs and storage needs',
      'Keeps production planning and operations seamless',
    ],
  },
  {
    title: 'Warehousing',
    icon: HiHome,
    points: [
      'Safe, organized storage for materials and finished goods',
      'Real-time inventory tracking and management',
      'Flexible solutions for short-term or long-term storage',
      'Facilitates quick and efficient order dispatch',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <section className="max-w-5xl mx-auto">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
            Services
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            End-to-End Logistics Solutions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
            Structured to support factory operations, from inbound transportation to in-plant movement,
            ensuring continuity, precision, and cost clarity.
          </p>
        </header>

        <section className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-10 sm:mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 shadow-sm hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-200 p-5 sm:p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>

        <section className="border-t border-dashed border-gray-200 dark:border-gray-800 pt-6 sm:pt-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Industries We Serve
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            We currently support passenger vehicle OEMs, commercial vehicle OEMs, auto component
            manufacturers across South India, delivering seamless, time-critical transportation
            for major automobile manufacturers.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 hover:bg-black dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium transition-colors shadow-sm"
          >
            Discuss Your Requirements
          </a>
        </section>
      </section>
    </main>
  );
}
