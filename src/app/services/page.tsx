import { HiCog, HiTruck, HiClipboardList, HiAdjustments } from 'react-icons/hi';

export const metadata = {
  title: 'Services | Surya Transport',
};

const services = [
  {
    title: 'Contract Transportation',
    icon: HiTruck,
    points: [
      'Long-term contractual operations',
      'Dedicated fleet for OEMs',
      'Transparent costing model',
    ],
  },
  {
    title: 'Long-Term OEM Contract Logistics',
    icon: HiClipboardList,
    points: [
      'Factory-aligned SOPs',
      'Sequence supply for production lines',
      'Zero disruption focus',
    ],
  },
  {
    title: 'In-Plant Movement',
    icon: HiCog,
    points: [
      'Safety-compliant operations',
      'Supervisor-controlled movements',
      'Optimized for zero downtime',
    ],
  },
  {
    title: 'Customized Container Solutions',
    icon: HiAdjustments,
    points: [
      'Vehicle/container customization',
      'Route and load optimization',
      'Flexible for different OEM needs',
    ],
  },
];

const extraServices = [
  'Dedicated Fleet Operations',
  'Staff Transportation (as per contract)',
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <section className="max-w-5xl mx-auto">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
            Services
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            OEM-grade logistics for critical manufacturing operations
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
            Structured, long-term transport services designed around factory schedules,
            zero production stoppage, and transparent costing.
          </p>
        </header>

        <section className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-10 sm:mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="h-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 shadow-sm hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-200 p-5 sm:p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>

        <section className="mb-10 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Additional services
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2 text-sm text-gray-600 dark:text-gray-300">
            {extraServices.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 px-3 py-2.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-dashed border-gray-200 dark:border-gray-800 pt-6 sm:pt-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            Industries served
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            We currently support passenger vehicle OEMs, commercial vehicle OEMs, auto component
            manufacturers, and contract staff transportation requirements.
          </p>
        </section>
      </section>
    </main>
  );
}
