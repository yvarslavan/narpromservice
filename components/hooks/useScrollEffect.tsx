'use client';

import { useState, useEffect } from 'react';

interface ScrollState {
  isScrolled: boolean;
  scrollY: number;
}

export const useScrollEffect = (threshold: number = 50): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isScrolled: false,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > threshold;

      setScrollState({
        isScrolled,
        scrollY: currentScrollY,
      });
    };

    // Добавляем слушатель скролла
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Вызываем сразу для начального состояния
    handleScroll();

    // Очистка при размонтировании
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollState;
};
