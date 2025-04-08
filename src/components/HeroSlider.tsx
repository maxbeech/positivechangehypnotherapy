'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Define the media files in the home_hero_slider folder
const sliderMedia = [
  {
    type: 'video',
    src: '/media/home_hero_slider/7183783_Woman_At Home_1280x720.mp4',
    alt: 'Woman relaxing at home'
  },
  {
    type: 'video',
    src: '/media/home_hero_slider/1111630_Serene_Closed-eyes_1280x720.mp4',
    alt: 'Person with closed eyes in a serene state'
  },
  {
    type: 'video',
    src: '/media/home_hero_slider/6035309_Woman_People_1280x720.mp4',
    alt: 'Woman in peaceful state'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  // Handle automatic slide transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderMedia.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle video playback when slide changes
  useEffect(() => {
    // Pause all videos
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.currentTime = 0;
          video.play().catch(() => {
            // Handle autoplay issues (often blocked by browsers)
            console.log('Autoplay prevented by browser');
          });
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-pattern z-10 opacity-30 pointer-events-none">
        <Image 
          src="/media/pattern.svg" 
          alt="Background pattern" 
          fill 
          className="object-cover mix-blend-overlay"
        />
      </div>
      
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
      
      {/* Media slides */}
      <div className="relative h-full w-full">
        {sliderMedia.map((media, index) => (
          <AnimatePresence key={media.src} initial={false}>
            {index === currentSlide && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 h-full w-full"
              >
                {media.type === 'video' ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={media.src}
                    className="object-cover h-full w-full"
                    autoPlay
                    muted
                    playsInline
                    loop
                    aria-label={media.alt}
                  />
                ) : (
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
      
      {/* Hero content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Hero content will be passed as children */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider; 