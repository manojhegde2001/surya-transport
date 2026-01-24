'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Facility', href: '/facility' },
    { name: 'About Us', href: '/about' },
    { name: 'Business Background', href: '/business-background' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const serviceRegions = [
    'Tamil Nadu',
    'Kerala',
    'Puducherry',
    'Andhra Pradesh',
    'Karnataka',
    'Telangana',
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <div className="mb-4">
              <Image
                src="/surya-trasport-logo.svg"
                alt="Surya Transport Logo"
                width={160}
                height={60}
                priority
              />
            </div>

            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">
              Surya Transport
            </h3>

            <p className="text-sm mb-4">
              Your reliable partner in transportation since 1986
            </p>

            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full" />
              <span className="text-green-600 dark:text-green-400 font-medium">
                38+ Years of Experience
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Regions */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">
              Service Regions
            </h4>
            <ul className="space-y-2">
              {serviceRegions.map((region) => (
                <li key={region} className="text-sm">
                  {region}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Business Hours:</li>
              <li className="text-gray-900 dark:text-white font-medium">
                10 AM – 6 PM (Working days)
              </li>
              <li className="mt-4">GST Registered</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Surya Transport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
