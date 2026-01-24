import { HiUserCircle, HiFlag, HiTrendingUp, HiUsers } from 'react-icons/hi';

export const metadata = {
  title: 'About Us | Surya Transport',
};

const teamAreas = ['Operations', 'Legal', 'On-site Supervisors', 'Vehicle Maintenance Supervisors', 'Admin & Finance'];

const futurePlans = [
  'Fleet expansion for more OEM capacity',
  'More tech-driven, data-visible operations',
  'Further reduction in downtime',
  'Higher flexibility in routes and configurations',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <section className="max-w-4xl mx-auto">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
            About Us
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            38 years of reliable OEM logistics
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
            Surya Transport was built to bring discipline, reliability, and transparency to factory-focused transportation.
          </p>
        </header>

        <section className="mb-8 sm:mb-10">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 p-5 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <HiUserCircle className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Founder story
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Founded by Selvaraj, Surya Transport started with a clear goal: solve unreliable
                  logistics and the lack of accountability that impacted factory production.
                </p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  From a small fleet, we grew to over 200 trucks by consistently aligning our
                  operations to OEM discipline and zero disruption expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 mb-8 sm:mb-10">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/70 p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <HiFlag className="w-5 h-5" />
              </span>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Vision</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              To be the most reliable and disciplined logistics partner for OEMs across South India.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/70 p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <HiTrendingUp className="w-5 h-5" />
              </span>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Mission</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              To deliver factory-focused 24/7 logistics with transparent costing and zero
              disruption to production lines.
            </p>
          </div>
        </section>

        <section className="mb-8 sm:mb-10">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 p-5 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <HiUsers className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Team structure
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  We keep our structure simple and aligned to daily operations rather than showing
                  headcount numbers.
                </p>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-gray-600 dark:text-gray-300">
                  {teamAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 rounded-lg bg-gray-50 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 px-3 py-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-dashed border-gray-200 dark:border-gray-800 pt-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Future direction
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            {futurePlans.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 sm:mt-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Partner with us
          </a>
        </section>
      </section>
    </main>
  );
}
