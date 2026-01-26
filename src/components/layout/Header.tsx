"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  HiX,
  HiInformationCircle,
  HiCog,
  HiOfficeBuilding,
  HiMail,
  HiDocumentText,
} from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const HamburgerIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

// Reusable logo
const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg
      viewBox="0 0 793.05005 774.80762"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="layer1" transform="translate(1635.5812,233.99443)">
        <path
          style={{
            fill: "currentColor",
            fillOpacity: 1,
            stroke: "none",
          }}
          d="m -1317.1631,-42.593048 v 0.264583 c -9.1179,2.10898 -18.1199,5.627629 -26.9875,8.594889 -20.6076,6.895638 -41.276,14.481157 -60.0604,25.5392032 -8.9295,5.256655 -24.4182,16.169103 -17.3398,28.3075728 6.5419,11.218372 22.7582,16.072533 34.2732,20.071578 31.2762,10.861934 64.5755,16.14798 97.102,21.798733 39.5293,6.867281 79.4427,11.758712 118.7979,19.631872 12.2009,2.44081 24.1145,5.97283 36.248,8.55665 47.1858,10.048287 94.7598,22.365557 138.11246,44.041887 18.47846,9.23923 36.09509,20.26381 51.40449,34.20191 8.16746,7.43592 15.38446,16.01039 21.39165,25.26403 18.88476,29.0906 19.64383,64.83202 10.35977,97.36666 -3.65708,12.81556 -9.41377,25.15467 -15.35727,37.04167 -17.32291,34.64581 -40.44617,65.82065 -64.89436,95.69971 -18.46584,22.56787 -38.53384,43.92671 -59.23844,64.44219 -16.942,16.78722 -34.2723,33.85568 -53.4679,48.08517 1.8259,0.073 3.8463,-1.21949 5.5562,-1.80738 4.8242,-1.65855 9.5936,-3.60456 14.2875,-5.60095 17.1126,-7.27824 33.7663,-15.40164 49.7417,-24.94105 69.85549,-41.71315 125.00819,-103.44542 159.17729,-177.20061 39.42247,-85.0948 46.03615,-185.06415 19.83335,-274.902071 -11.16753,-38.288488 -28.16759,-74.572577 -49.9724,-107.949997 -28.92433,-44.275592 -67.52753,-82.096412 -111.31224,-111.565992 -32.7682,-22.05486 -69.461,-39.2175 -107.4198,-50.17142 -39.1979,-11.31152 -80.117,-17.058 -120.9145,-16.05871 -104.3895,2.55708 -205.4818,46.60116 -277.8021,122.23362 -28.8875,30.210498 -52.9147,65.042479 -71.1149,102.6583342 -21.1882,43.7911238 -32.9403,90.9178988 -37.5944,139.1708258 -1.4834,15.38013 -1.2857,30.86905 -1.1022,46.30208 0.2141,18.00162 2.5264,36.35224 5.6573,54.08727 14.7716,83.67292 55.7752,159.5785 116.6811,218.69814 17.3866,16.87675 36.6094,32.08228 56.9358,45.26784 4.8388,3.13889 9.7102,6.18664 14.6644,9.14324 1.5594,0.93063 4.2219,3.30051 6.0854,3.27054 1.6462,-0.0265 3.832,-2.78859 5.0271,-3.81915 4.3717,-3.76979 8.7302,-7.58151 12.9646,-11.50562 16.7703,-15.54182 33.8322,-30.68082 50.0062,-46.85477 11.3041,-11.30409 22.1797,-22.96642 33.3375,-34.39583 9.4194,-9.64863 18.0749,-20.27085 26.6209,-30.69166 6.0469,-7.37358 11.8311,-14.954 17.4267,-22.67762 4.7413,-6.54457 9.2596,-13.18124 13.7195,-19.9203 4.2218,-6.3792 7.9989,-13.11658 11.6354,-19.84375 16.4951,-30.51448 28.8915,-69.25113 13.3094,-102.65833 -3.4988,-7.50122 -7.9205,-14.29686 -13.2424,-20.6375 -17.3386,-20.65752 -42.8602,-34.56203 -67.0882,-45.51569 -9.6048,-4.34237 -18.9083,-9.15649 -28.8396,-12.77326 -37.9579,-13.82338 -77.5814,-22.44837 -116.1521,-34.30869 -19.0117,-5.846017 -37.8286,-11.887447 -56.0917,-19.825137 -10.6493,-4.62853 -22.1751,-10.30299 -30.2737,-18.855441 -1.8668,-1.971327 -3.6115,-4.164798 -4.8842,-6.56969 -9.7653,-18.452813 13.2831,-30.613053 25.8975,-38.894588 3.339,-2.192114 6.9939,-4.151232 10.5833,-5.901449 3.7149,-1.8113228 7.3425,-3.8537048 11.1125,-5.5460428 43.9605,-19.7335502 90.3599,-32.8258382 137.848,-40.7897572 21.5569,-3.615219 43.5199,-6.620655 65.352,-7.557743"
        />
      </g>
    </svg>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Services", href: "/services", icon: HiCog },
    { name: "Facility", href: "/facility", icon: HiOfficeBuilding },
    { name: "About Us", href: "/about", icon: HiInformationCircle },
    { name: "Business Background", href: "/business-background", icon: HiDocumentText },
    { name: "Contact Us", href: "/contact", icon: HiMail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-800"
            : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 relative z-[60]"
            >
              <Logo className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-900 dark:text-white transition-all duration-300" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                  Surya Transport
                </span>
                <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">
                  Since 1986
                </span>
              </div>
            </Link>

            {/* Desktop Navigation + ThemeToggle */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}

              {/* ThemeToggle in desktop nav */}
              <div className="ml-3 flex items-center">
                <ThemeToggle />
              </div>

              <Link
                href="/contact"
                className="ml-3 px-5 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-lg font-medium transition-colors duration-200 text-sm whitespace-nowrap"
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0 relative z-[60] text-gray-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <HamburgerIcon />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Drawer Header with Logo */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-16 sm:h-18 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2 sm:gap-3">
              <Logo className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 dark:text-white" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  Surya Transport
                </span>
                <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">
                  Since 1986
                </span>
              </div>
            </div>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="px-4 sm:px-6 py-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:bg-gray-200 dark:active:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* ThemeToggle in mobile drawer */}
            <div className="mt-4 flex items-center justify-center">
              <ThemeToggle />
            </div>

            <Link
              href="/contact"
              className="mt-6 block w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 text-center rounded-lg font-medium transition-colors active:bg-gray-700 dark:active:bg-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
