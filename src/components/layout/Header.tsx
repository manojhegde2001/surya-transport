'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  HiMenu, 
  HiX, 
  HiInformationCircle, 
  HiCog, 
  HiOfficeBuilding, 
  HiMail,
} from 'react-icons/hi';

const TransportLogo = () => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 52 52" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="transition-all duration-300"
  >
    <path d="M6 20h26v16H6z" fill="#9333EA" />
    <path d="M32 20h9l5 7v9h-14v-16z" fill="#7C3AED" />
    <circle cx="14" cy="40" r="5" fill="#581C87" />
    <circle cx="14" cy="40" r="2.5" fill="white" />
    <circle cx="36" cy="40" r="5" fill="#581C87" />
    <circle cx="36" cy="40" r="2.5" fill="white" />
    <rect x="34" y="23" width="7" height="7" fill="rgba(255,255,255,0.3)" rx="1" />
    <line x1="10" y1="28" x2="28" y2="28" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
    <line x1="10" y1="32" x2="28" y2="32" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About Us', href: '/about', icon: HiInformationCircle },
    { name: 'Services', href: '/services', icon: HiCog },
    { name: 'Facility', href: '/facility', icon: HiOfficeBuilding },
    { name: 'Contact Us', href: '/contact', icon: HiMail },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-800' 
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <TransportLogo />
            
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                Surya Transport
              </span>
              <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium">
                Next-Gen Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              );
            })}
            
            {/* CTA Button */}
            <Link
              href="/quote"
              className="ml-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
              
              <Link
                href="/quote"
                className="mt-4 block w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-center rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
