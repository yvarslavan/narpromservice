import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  metadata?: string;
  image?: string;
  variant?: 'default' | 'service' | 'feature';
  iconButton?: React.ReactNode;
  number?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  metadata,
  image,
  variant = 'default',
  iconButton,
  number,
  icon,
  onClick,
  className = ''
}) => {
  // Базовые стили из дизайн-системы
  const baseClasses = 'bg-white transition-all duration-smooth hover-lift cursor-pointer';

  // Варианты карточек
  const variantClasses = {
    default: 'rounded-medium shadow-card p-lg mb-5 hover:shadow-card-hover',
    service: 'rounded-medium shadow-service-card p-5 relative overflow-hidden hover:shadow-service-card-hover',
    feature: 'rounded-large shadow-medium p-lg relative'
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {/* Изображение для обычных карточек */}
      {image && variant === 'default' && (
        <div className="mb-md">
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="w-full h-auto rounded-t-medium"
          />
        </div>
      )}

      {/* Номер для карточек функций */}
      {number && variant === 'feature' && (
        <div className="absolute top-3 right-5 text-6xl font-bold text-gray-200">
          {number}
        </div>
      )}

      {/* Контейнер иконки для карточек функций */}
      {icon && variant === 'feature' && (
        <div className="w-10 h-10 rounded-full bg-bg-light-blue flex items-center justify-center mb-4">
          <div className="text-brand-blue text-xl">
            {icon}
          </div>
        </div>
      )}

      {/* Заголовок - используем стили из дизайн-системы */}
      <h3 className="text-h3 font-bold text-text-heading mb-2">
        {title}
      </h3>

      {/* Описание */}
      <p className="text-body text-text-body mb-3">
        {description}
      </p>

      {/* Метаданные */}
      {metadata && (
        <p className="text-small text-text-body">
          {metadata}
        </p>
      )}

      {/* Интерактивная иконка-кнопка для сервисных карточек */}
      {iconButton && variant === 'service' && (
        <div className="absolute -bottom-5 right-5 w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center shadow-medium hover-scale cursor-pointer">
          {iconButton}
        </div>
      )}
    </div>
  );
};

export default Card;
