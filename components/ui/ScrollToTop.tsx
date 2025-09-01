'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center cursor-pointer shadow-scroll-button transition-all duration-default hover:bg-brand-blue-hover hover:shadow-scroll-button-hover z-50"
      aria-label="Прокрутить вверх"
    >
      <ChevronUp size={24} className="text-white" />
    </button>
  );
};

export default ScrollToTop;
