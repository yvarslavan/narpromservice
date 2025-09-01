import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSlide?: number;
  totalSlides?: number;
  onPrevious?: () => void;
  onNext?: () => void;
  onDotClick?: (index: number) => void;
  showDots?: boolean;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSlide = 0,
  totalSlides = 1,
  onPrevious,
  onNext,
  onDotClick,
  showDots = true,
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {/* Стрелка назад - стили из дизайн-системы */}
      <button
        onClick={onPrevious}
        className="w-9 h-9 rounded-full bg-white border border-brand-blue flex items-center justify-center cursor-pointer transition-all duration-default hover:bg-brand-blue hover:text-white"
        disabled={currentSlide === 0}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Точки навигации */}
      {showDots && (
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => onDotClick?.(index)}
              className={`w-2 h-2 rounded-full transition-all duration-default cursor-pointer ${
                index === currentSlide
                  ? 'bg-brand-blue'
                  : 'bg-text-body-tertiary hover:bg-brand-blue'
              }`}
            />
          ))}
        </div>
      )}

      {/* Стрелка вперед */}
      <button
        onClick={onNext}
        className="w-9 h-9 rounded-full bg-white border border-brand-blue flex items-center justify-center cursor-pointer transition-all duration-default hover:bg-brand-blue hover:text-white"
        disabled={currentSlide === totalSlides - 1}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Navigation;
