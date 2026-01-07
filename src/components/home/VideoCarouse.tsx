'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { VideoData } from '@/lib/types';
import Image from 'next/image';

interface VideoCarouselProps {
  videos?: VideoData[];
}

const VideoCarousel = ({ videos = [] }: VideoCarouselProps) => {
  console.log(videos);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Convert Google Drive thumbnail URLs to direct image format
  const getThumbnailUrl = (url: string): string => {
    if (!url) return '';
    
    if (url.includes('drive.google.com')) {
      const fileMatch = url.match(/\/file\/d\/([^\/]+)/);
      if (fileMatch && fileMatch[1]) {
        return `https://drive.google.com/uc?export=view&id=${fileMatch[1]}`;
      }
    }
    return url;
  };

  // Convert Google Drive URLs to embed format
  const getEmbedUrl = (url: string): string => {
    if (url.includes('drive.google.com')) {
      const fileMatch = url.match(/\/file\/d\/([^\/]+)/);
      if (fileMatch) {
        return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
      }
    }

    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return videoId 
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}` 
        : url;
    }

    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return videoId 
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}` 
        : url;
    }

    return url;
  };

  const isEmbeddableVideo = (url: string): boolean => {
    return url.includes('youtube.com') || 
           url.includes('youtu.be') || 
           url.includes('drive.google.com');
  };

  // Handle video loaded state
  const handleVideoLoaded = useCallback((index: number) => {
    setLoadedVideos((prev) => new Set(prev).add(index));
  }, []);

  // Stop auto-play
  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Start auto-play
  const startAutoPlay = useCallback(() => {
    if (videos.length <= 1 || !isVisible) return;
    
    stopAutoPlay();
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 60000);
  }, [videos.length, isVisible, stopAutoPlay]);

  // Intersection Observer to detect when carousel enters viewport
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, options);

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Start/stop autoplay based on visibility
  useEffect(() => {
    if (isVisible) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [isVisible, startAutoPlay, stopAutoPlay]);

  // Navigation handlers
  const goToPrevious = () => {
    stopAutoPlay();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
    setTimeout(() => startAutoPlay(), 100);
  };

  const goToNext = () => {
    stopAutoPlay();
    setCurrentIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => startAutoPlay(), 100);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    stopAutoPlay();
    setCurrentIndex(index);
    setTimeout(() => startAutoPlay(), 100);
  };

  if (videos.length === 0) {
    return (
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-200 flex items-center justify-center rounded-lg">
        <p className="text-gray-500">No videos available</p>
      </div>
    );
  }

  return (
    <div 
      ref={carouselRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-black rounded-lg overflow-hidden"
    >
      {/* Video Slides */}
      <div className="relative w-full h-full">
        {videos.map((video:any, index) => {
          const isEmbedded = isEmbeddableVideo(video.url);
          const embedUrl = isEmbedded ? getEmbedUrl(video.url) : video.url;
          const thumbnailUrl = getThumbnailUrl(video.thumbnail);
          const isActive = index === currentIndex;
          const isLoaded = loadedVideos.has(index);

          return (
            <div
              key={`${video.id}-${index}`}
              className={`absolute inset-0 transition-opacity duration-700 ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Thumbnail Placeholder - Only render if thumbnail URL exists */}
              {!isLoaded && thumbnailUrl && (
                <div className="absolute inset-0 z-20">
                  <Image
                    src={thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Loading Spinner */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                </div>
              )}

              {/* Video Element - Conditionally render based on active state */}
              {isEmbedded ? (
                isActive && isVisible ? (
                  <iframe
                    src={embedUrl}
                    className={`w-full h-full transition-opacity duration-500 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 'none' }}
                    title={video.title}
                    onLoad={() => handleVideoLoaded(index)}
                  />
                ) : (
                  <div className="w-full h-full bg-black" />
                )
              ) : (
                isActive && (
                  <video
                    src={video.url}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    autoPlay={isVisible}
                    muted
                    loop
                    playsInline
                    controls
                    preload="auto"
                    onLoadedData={() => handleVideoLoaded(index)}
                    onCanPlayThrough={() => handleVideoLoaded(index)}
                  />
                )
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {videos.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2.5 md:p-3 rounded-full transition-all duration-200"
            aria-label="Previous video"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2.5 md:p-3 rounded-full transition-all duration-200"
            aria-label="Next video"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {videos.length > 1 && (
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8 md:w-10 h-2.5'
                  : 'bg-white/50 hover:bg-white/75 w-2.5 h-2.5'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Video Title Overlay */}
      <div className="absolute bottom-12 md:bottom-16 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 md:px-6 py-3 md:py-4 pointer-events-none">
        <h3 className="text-white text-base md:text-lg font-semibold">
          {videos[currentIndex].title}
        </h3>
      </div>
    </div>
  );
};

export default VideoCarousel;
