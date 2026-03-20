'use client';
import SystemTextInput from '@/components/SystemTextInput';
import GeneratedImage from '@/components/GeneratedImage';
import classes from './style.module.css';
import { useRef, useEffect, useState } from 'react';

import 'glightbox/dist/css/glightbox.min.css';

export default function Home() {
  const [phrase, setPhrase] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [imagesCount, setImagesCount] = useState(3);
  const [refreshGlightBox, setrefreshGlightBox] = useState(0);

  const glightboxRef = useRef<{ destroy?: () => void } | null>(null);

  const prev = useRef(3);
  let prevImagesCount = prev.current;

  useEffect(() => {
    prevImagesCount = prev.current;
    prev.current = imagesCount;
    //console.log(prevImagesCount + ' ' + imagesCount);
  }, [imagesCount, phrase, aspectRatio]);

  useEffect(() => {
    import('glightbox').then(({ default: GLightbox }) => {
      if (glightboxRef.current && glightboxRef.current.destroy) glightboxRef.current.destroy();
      glightboxRef.current = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        zoomable: true,
        closeButton: true,
        openEffect: 'zoom',
        slideEffect: 'slide',
      });
    });
    return () => {
      if (glightboxRef.current && glightboxRef.current.destroy) glightboxRef.current.destroy();
    };
  }, [refreshGlightBox, phrase, imagesCount]);

  return (
    <div className={classes.appContainer}>
      {/* Logo */}
      <div className={classes.logo}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle cx="20" cy="20" r="20" fill="url(#gradient)" />

          {/* Neural Network Nodes */}
          <circle cx="12" cy="12" r="2.5" fill="white" fillOpacity="0.9" />
          <circle cx="28" cy="12" r="2.5" fill="white" fillOpacity="0.9" />
          <circle cx="20" cy="20" r="3" fill="white" fillOpacity="0.95" />
          <circle cx="12" cy="28" r="2.5" fill="white" fillOpacity="0.9" />
          <circle cx="28" cy="28" r="2.5" fill="white" fillOpacity="0.9" />

          {/* Neural Network Connections */}
          <line
            x1="12"
            y1="12"
            x2="20"
            y2="20"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <line
            x1="28"
            y1="12"
            x2="20"
            y2="20"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <line
            x1="20"
            y1="20"
            x2="12"
            y2="28"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <line
            x1="20"
            y1="20"
            x2="28"
            y2="28"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <line
            x1="12"
            y1="12"
            x2="28"
            y2="12"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <line
            x1="12"
            y1="28"
            x2="28"
            y2="28"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.3"
          />

          {/* AI Spark Effect */}
          <path
            d="M20 8 L21 11 L24 10 L22 13 L25 14 L22 15 L23 18 L20 16 L17 18 L18 15 L15 14 L18 13 L16 10 L19 11 Z"
            fill="white"
            fillOpacity="0.8"
          />

          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="50%" stopColor="#764ba2" />
              <stop offset="100%" stopColor="#f093fb" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className={classes.mainContent}>
        <SystemTextInput
          phrase={phrase}
          setPhrase={setPhrase}
          aspectRatio={aspectRatio}
          setAspectRatio={setAspectRatio}
          imagesCount={imagesCount}
          setImagesCount={setImagesCount}
        />

        {/* Images Grid */}
        <div className={classes.imagesGrid}>
          {[...Array(imagesCount)].map((_, idx) => (
            <GeneratedImage
              key={`${idx}${prevImagesCount < idx + 1 ? Math.random() : ''}`}
              phrase={phrase}
              aspectRatio={aspectRatio}
              setrefreshGlightBox={setrefreshGlightBox}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
