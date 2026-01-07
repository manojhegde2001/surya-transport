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
  HiSparkles,
  HiLightningBolt
} from 'react-icons/hi';

const TransportLogo = () => (
  <svg 
    width="52" 
    height="52" 
    viewBox="0 0 52 52" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 drop-shadow-2xl"
  >
    {/* Glowing effect behind truck */}
    <circle cx="26" cy="26" r="24" fill="url(#glow)" opacity="0.4" className="animate-pulse" />
    
    {/* Truck body with gradient */}
    <path 
      d="M6 20h26v16H6z" 
      fill="url(#gradient1)"
      className="transition-all duration-500"
    />
    
    {/* Truck cabin */}
    <path 
      d="M32 20h9l5 7v9h-14v-16z" 
      fill="url(#gradient2)"
      className="transition-all duration-500"
    />
    
    {/* Front wheel with animated glow */}
    <circle cx="14" cy="40" r="5" fill="url(#wheelGradient)" className="animate-pulse" />
    <circle cx="14" cy="40" r="2.5" fill="white" />
    
    {/* Rear wheel */}
    <circle cx="36" cy="40" r="5" fill="url(#wheelGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
    <circle cx="36" cy="40" r="2.5" fill="white" />
    
    {/* Window with shine effect */}
    <rect x="34" y="23" width="7" height="7" fill="rgba(255,255,255,0.3)" rx="1" />
    <rect x="34" y="23" width="3" height="3" fill="rgba(255,255,255,0.6)" rx="0.5" />
    
    {/* Animated motion lines */}
    <g className="motion-lines">
      <path 
        d="M2 16h6M3 12h5" 
        stroke="url(#lineGradient)" 
        strokeWidth="3" 
        strokeLinecap="round"
        className="animate-slide"
      />
    </g>
    
    {/* Cargo detail lines */}
    <line x1="10" y1="28" x2="28" y2="28" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
    <line x1="10" y1="32" x2="28" y2="32" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    
    {/* Gradients definitions */}
    <defs>
      <linearGradient id="glow" x1="0" y1="0" x2="52" y2="52">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#818CF8" />
      </linearGradient>
      
      <linearGradient id="gradient1" x1="6" y1="20" x2="32" y2="36">
        <stop offset="0%" stopColor="#DBEAFE" />
        <stop offset="100%" stopColor="#BFDBFE" />
      </linearGradient>
      
      <linearGradient id="gradient2" x1="32" y1="20" x2="46" y2="36">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#60A5FA" />
      </linearGradient>
      
      <radialGradient id="wheelGradient">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </radialGradient>
      
      <linearGradient id="lineGradient" x1="0" y1="0" x2="8" y2="0">
        <stop offset="0%" stopColor="rgba(96, 165, 250, 0)" />
        <stop offset="100%" stopColor="rgba(96, 165, 250, 1)" />
      </linearGradient>
    </defs>
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
    { name: 'About Us', href: '/about', icon: HiInformationCircle, color: 'from-blue-500 to-cyan-500' },
    { name: 'Services', href: '/services', icon: HiCog, color: 'from-indigo-500 to-purple-500' },
    { name: 'Facility', href: '/facility', icon: HiOfficeBuilding, color: 'from-cyan-500 to-blue-500' },
    { name: 'Contact Us', href: '/contact', icon: HiMail, color: 'from-blue-500 to-indigo-500' },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes slide {
          0%, 100% { transform: translateX(0px); opacity: 1; }
          50% { transform: translateX(4px); opacity: 0.5; }
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(96, 165, 250, 0.5); }
          50% { box-shadow: 0 0 40px rgba(96, 165, 250, 0.8), 0 0 60px rgba(129, 140, 248, 0.4); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes fade-slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes menu-item-enter {
          from { opacity: 0; transform: translateX(-30px) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide {
          animation: slide 2s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .motion-lines {
          animation: slide 1.5s ease-in-out infinite;
        }

        .glass-dark {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(96, 165, 250, 0.2);
        }

        .glass-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(16px) saturate(150%);
          -webkit-backdrop-filter: blur(16px) saturate(150%);
          border: 1px solid rgba(96, 165, 250, 0.15);
        }

        .nav-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          animation: shimmer 3s infinite;
        }

        .mobile-menu-item {
          animation: menu-item-enter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .mobile-menu-item:nth-child(1) { animation-delay: 0.05s; }
        .mobile-menu-item:nth-child(2) { animation-delay: 0.1s; }
        .mobile-menu-item:nth-child(3) { animation-delay: 0.15s; }
        .mobile-menu-item:nth-child(4) { animation-delay: 0.2s; }
        .mobile-menu-item:nth-child(5) { animation-delay: 0.25s; }

        .fade-slide-down {
          animation: fade-slide-down 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'glass-dark shadow-2xl border-b border-blue-500/30' 
            : 'bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950'
        }`}
      >
        {/* Animated gradient border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse" />
        
        {/* Floating orbs background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center gap-4 group relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative">
                  <TransportLogo />
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-black text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text tracking-tight transition-all duration-500 group-hover:scale-105">
                  Surya Transport
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <HiLightningBolt className="w-3 h-3 text-cyan-400 animate-pulse" />
                  <span className="text-xs lg:text-sm text-blue-200/90 font-semibold tracking-wide">
                    Next-Gen Logistics
                  </span>
                  <div className="flex gap-0.5">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative group px-5 py-3 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105"
                  >
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl`} />
                    <div className="absolute inset-0 glass-card opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 nav-shimmer rounded-xl" />
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-2.5 z-10">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-br ${link.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-bold text-blue-100 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                    </div>
                    
                    {/* Bottom glow indicator */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full group-hover:w-3/4 transition-all duration-500 shadow-lg shadow-cyan-400/50" />
                  </Link>
                );
              })}
              
              {/* Enhanced CTA Button */}
              <div className="ml-2 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-glow-pulse" />
                <Link
                  href="/quote"
                  className="relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  {/* Animated shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  <HiSparkles className="w-5 h-5 relative z-10 group-hover:rotate-180 transition-transform duration-700" />
                  <span className="relative z-10">Get Quote</span>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden relative p-3 rounded-xl transition-all duration-500 ${
                isMenuOpen 
                  ? 'glass-card scale-95' 
                  : 'glass-dark hover:scale-105'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <HiMenu 
                  className={`w-6 h-6 text-white absolute transition-all duration-500 ${
                    isMenuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <HiX 
                  className={`w-6 h-6 text-white absolute transition-all duration-500 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
                  }`} 
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="lg:hidden fixed inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-indigo-950/95 backdrop-blur-xl -z-10 fade-slide-down"
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Animated background orbs */}
                <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              
              {/* Menu Content */}
              <div className="lg:hidden mt-6 pb-6 fade-slide-down">
                <div className="glass-card rounded-3xl p-4 shadow-2xl border-2 border-blue-500/20">
                  {/* Menu Items */}
                  <div className="space-y-2">
                    {navLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="mobile-menu-item relative group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {/* Animated background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl`} />
                          <div className="absolute inset-0 glass-card opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                          
                          {/* Icon container */}
                          <div className={`relative p-3 bg-gradient-to-br ${link.color} rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          
                          {/* Text */}
                          <span className="relative font-bold text-lg text-blue-100 group-hover:text-white transition-colors z-10">
                            {link.name}
                          </span>
                          
                          {/* Arrow */}
                          <svg 
                            className="relative w-5 h-5 ml-auto text-blue-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-10" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      );
                    })}
                  </div>
                  
                  {/* Mobile CTA */}
                  <div className="mobile-menu-item mt-4 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-glow-pulse" />
                    <Link
                      href="/quote"
                      className="relative flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-lg text-white shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105 overflow-hidden"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {/* Animated shine */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      
                      <HiSparkles className="w-6 h-6 relative z-10 group-hover:rotate-180 transition-transform duration-700" />
                      <span className="relative z-10">Get Quote Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
