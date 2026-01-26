import { HiDocumentText, HiGlobe, HiCheckCircle } from 'react-icons/hi';

export const metadata = {
  title: 'Business Background | Surya Transport',
};

const regions = ['Tamil Nadu', 'Kerala', 'Puducherry', 'Andhra Pradesh', 'Karnataka', 'Telangana'];

export default function BusinessBackgroundPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <section className="max-w-4xl mx-auto">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
            Business Background
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Company background for procurement teams
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
            Summary for audit and vendor onboarding teams evaluating long-term contract logistics partners.
          </p>
        </header>

        <section className="mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 p-5 sm:p-6 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <HiDocumentText className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Company overview
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Surya Transport is a contract-based OEM logistics specialist focused on factory
                  supply, in-plant movement, and long-term lane commitments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/70 p-4 sm:p-5 shadow-sm">
            <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase mb-1">
              Operational scale
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Approx. 220 trucks and around 1,500 trips per day across multiple OEM and supplier
              locations in South India.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/70 p-4 sm:p-5 shadow-sm">
            <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase mb-1">
              Contract model
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Primarily long-term contracts with OEMs and tier suppliers with fixed and variable
              components, aligned to production.
            </p>
          </div>
        </section>

        <section className="mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 p-5 sm:p-6 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4 mb-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <HiGlobe className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  Regions served
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Operations currently span key manufacturing belts across South India.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/70 px-3 py-1 text-xs sm:text-sm text-gray-700 dark:text-gray-200"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/70 p-5 sm:p-6 shadow-sm">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
              <HiCheckCircle className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Compliance and philosophy
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                  <span>GST registered, with invoicing aligned to contract terms.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                  <span>Operational philosophy centered on zero disruption and transparent costing.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                  <span>Documented SOPs and on-site supervision at critical OEM locations.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
