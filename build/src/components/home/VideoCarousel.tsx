'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { VideoData } from '@/lib/types';
import Image from 'next/image';

interface VideoCarouselProps {
  videos?: VideoData[];
  isBackground?: boolean;
}

const VideoCarousel = ({ videos = [], isBackground = false }: VideoCarouselProps) => {
  console.log(videos);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  // Check if URL is from Google Drive
  const isGoogleDrive = (url: string): boolean => {
    return url.includes('drive.google.com');
  };

  // Check if URL is from YouTube
  const isYouTube = (url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  // Get Google Drive embed URL (must use iframe, not video tag)
  const getGoogleDriveEmbedUrl = (url: string): string => {
    const fileMatch = url.match(/\/file\/d\/([^\/]+)/);
    if (fileMatch && fileMatch[1]) {
      // Use /preview endpoint for iframe embedding
      return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
    }
    return url;
  };

  // Get YouTube embed URL
  const getYouTubeEmbedUrl = (url: string): string => {
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      const controls = isBackground ? '&controls=0&showinfo=0&disablekb=1&modestbranding=1' : '';
      return videoId 
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}${controls}` 
        : url;
    }

    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      const controls = isBackground ? '&controls=0&showinfo=0&disablekb=1&modestbranding=1' : '';
      return videoId 
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}${controls}` 
        : url;
    }

    return url;
  };

  const handleVideoLoaded = useCallback((index: number) => {
    setLoadedVideos((prev) => new Set(prev).add(index));
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    if (videos.length <= 1 || !isVisible) return;
    
    stopAutoPlay();
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 60000);
  }, [videos.length, isVisible, stopAutoPlay]);

  // Auto-play current video when index changes (for non-iframe videos)
  useEffect(() => {
    if (isBackground && isVisible && videoRefs.current[currentIndex]) {
      const videoElement = videoRefs.current[currentIndex];
      if (videoElement) {
        videoElement.play().catch((error) => {
          console.log('Autoplay prevented:', error);
        });
      }
    }
  }, [currentIndex, isBackground, isVisible]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting && isBackground && videoRefs.current[currentIndex]) {
          videoRefs.current[currentIndex]?.play().catch((error) => {
            console.log('Autoplay prevented:', error);
          });
        }
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
  }, [isBackground, currentIndex]);

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
      <div className="relative w-full h-full">
        {videos.map((video: any, index) => {
          const isDrive = isGoogleDrive(video.url);
          const isYT = isYouTube(video.url);
          const isIframeVideo = isDrive || isYT;
          
          const embedUrl = isDrive 
            ? getGoogleDriveEmbedUrl(video.url)
            : isYT 
            ? getYouTubeEmbedUrl(video.url)
            : '';
            
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
              {/* Thumbnail - only show when not loaded and not in background mode */}
              {!isLoaded && thumbnailUrl && !isBackground && (
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                </div>
              )}

              {/* Video Element - Use iframe for Google Drive and YouTube */}
              {isIframeVideo ? (
                isActive && isVisible ? (
                  <iframe
                    key={`iframe-${video.id}-${index}-${isActive}`}
                    src={embedUrl}
                    className={`w-full h-full transition-opacity duration-500 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    } ${isBackground ? 'pointer-events-none' : ''}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={!isBackground}
                    style={{ border: 'none' }}
                    title={video.title}
                    onLoad={() => {
                      handleVideoLoaded(index);
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-black" />
                )
              ) : (
                // Regular video file (direct MP4, etc.)
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={video.url}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  autoPlay={isVisible && isBackground}
                  muted
                  loop
                  playsInline
                  controls={!isBackground}
                  preload={isBackground ? 'auto' : 'metadata'}
                  onLoadedData={() => handleVideoLoaded(index)}
                  onCanPlayThrough={() => handleVideoLoaded(index)}
                  style={{ display: isActive ? 'block' : 'none' }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {videos.length > 1 && !isBackground && (
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
      {videos.length > 1 && !isBackground && (
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
      {!isBackground && (
        <div className="absolute bottom-12 md:bottom-16 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 md:px-6 py-3 md:py-4 pointer-events-none">
          <h3 className="text-white text-base md:text-lg font-semibold">
            {videos[currentIndex].title}
          </h3>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
