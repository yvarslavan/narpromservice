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
    <div className={`flex items-center justify-center gap-6 ${className}`}>
      {/* Стрелка назад - современный стиль */}
      <button
        onClick={onPrevious}
        className="w-12 h-12 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:border-blue-200"
        disabled={currentSlide === 0}
      >
        <ChevronLeft size={20} className="text-gray-600" />
      </button>

      {/* Точки навигации - стильные точки */}
      {showDots && (
        <div className="flex items-center gap-3">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => onDotClick?.(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide
                  ? 'bg-blue-500 scale-125 shadow-lg shadow-blue-500/30'
                  : 'bg-gray-300 hover:bg-blue-300 hover:scale-110'
              }`}
            />
          ))}
        </div>
      )}

      {/* Стрелка вперед - современный стиль */}
      <button
        onClick={onNext}
        className="w-12 h-12 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:border-blue-200"
        disabled={currentSlide === totalSlides - 1}
      >
        <ChevronRight size={20} className="text-gray-600" />
      </button>
    </div>
  );
};

export default Navigation;
