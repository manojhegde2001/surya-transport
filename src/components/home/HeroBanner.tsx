'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set muted properties on the DOM element for browser autoplay compliance
    video.defaultMuted = true;
    video.muted = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch((err) => {
          // Autoplay was blocked (e.g., low battery mode / power saving)
          console.warn('Hero background video autoplay prevented:', err);
        });
      }
    };

    playVideo();

    // Auto-resume playback if tab is switched back or gains focus
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        playVideo();
      }
    };

    // If browser initially restricted autoplay, trigger on first user interaction
    const handleFirstInteraction = () => {
      if (video.paused) {
        playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('click', handleFirstInteraction, { once: true, passive: true });

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  return (
    <section className="relative h-[500px] sm:h-[550px] md:h-[580px] lg:h-[600px] xl:h-[620px] w-full overflow-hidden bg-gray-900 dark:bg-gray-950">
      {/* Local Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          className="bg-video w-full h-full object-cover pointer-events-none select-none opacity-100 dark:opacity-80"
        >
          <source src="/logistics_hub.mp4" type="video/mp4" />
          <source src="/truck-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent dark:from-black dark:via-black/90 dark:to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-4 lg:py-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full mb-3 lg:mb-4">
            <span className="w-2 h-2 bg-green-400 dark:bg-green-500 rounded-full animate-pulse" />
            <span className="text-white dark:text-gray-100 text-xs sm:text-sm font-medium">
              40 Years of Delivering Discipline & Reliability
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white dark:text-gray-50 mb-3 lg:mb-4 leading-tight">
            Reliability isn’t a promise we make.
            It’s a habit we’ve built since 1986.
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-300 dark:text-gray-400 mb-4 lg:mb-6 max-w-2xl">
            Round the clock logistics solutions ensuring seamless operations with transparent costing
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 bg-white hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-white text-gray-900 dark:text-gray-950 font-semibold rounded-lg transition-colors duration-200 text-sm lg:text-base"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 bg-transparent hover:bg-white/10 dark:hover:bg-white/5 text-white dark:text-gray-100 font-semibold rounded-lg border-2 border-white/30 dark:border-white/20 hover:border-white/50 dark:hover:border-white/40 transition-all duration-200 text-sm lg:text-base"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
