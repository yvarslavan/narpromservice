'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

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
  onImageClick?: () => void;
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
  onImageClick,
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);

  // Базовые стили из дизайн-системы
  const baseClasses = 'bg-white transition-all duration-300 cursor-pointer';

  // Варианты карточек
  const variantClasses = {
    default: 'rounded-2xl shadow-lg p-6 mb-5 hover:shadow-xl hover:scale-105 hover:-translate-y-1',
    service: 'rounded-2xl shadow-lg p-6 relative bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 border border-gray-100 hover:border-blue-200',
    feature: 'rounded-2xl shadow-lg p-6 relative bg-gradient-to-br from-white to-blue-50'
  };

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Декоративная фоновая иконка для сервисных карточек */}
      {variant === 'service' && icon && (
        <div className="absolute top-4 right-4 opacity-5 text-6xl text-blue-600 pointer-events-none">
          {icon}
        </div>
      )}

      {/* Изображение для обычных карточек */}
      {image && variant === 'default' && (
        <div className="mb-4">
          {onImageClick ? (
            <div
              className="cursor-pointer group relative rounded-xl overflow-hidden"
              onClick={onImageClick}
            >
              <Image
                src={image}
                alt={title}
                width={400}
                height={200}
                className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
              />

              {/* Иконка увеличения */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Maximize2 size={24} className="text-white" />
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={image}
              alt={title}
              width={400}
              height={200}
              className="w-full h-auto rounded-xl"
            />
          )}
        </div>
      )}

      {/* Изображение для сервисных карточек */}
      {image && variant === 'service' && (
        <div className="mb-4 relative">
          {!imageError ? (
            <div
              className="w-full h-48 rounded-xl overflow-hidden cursor-pointer group relative"
              onClick={onImageClick}
            >
              <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => setImageError(true)}
              />

              {/* Иконка увеличения */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Maximize2 size={24} className="text-white" />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📷</div>
                <div className="text-sm font-medium">Фото: {title}</div>
                <div className="text-xs mt-1 text-gray-400">Изображение не найдено</div>
                <div className="text-xs mt-2 bg-gray-100 px-2 py-1 rounded font-mono">
                  {image}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Номер для карточек функций */}
      {number && variant === 'feature' && (
        <div className="absolute top-4 right-6 text-6xl font-bold text-gray-200">
          {number}
        </div>
      )}

      {/* Контейнер иконки для карточек функций */}
      {icon && variant === 'feature' && (
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="text-white text-xl">
            {icon}
          </div>
        </motion.div>
      )}

      {/* Заголовок с современным стилем */}
      <motion.h3
        className="text-xl font-bold text-gray-800 mb-3 relative group"
        whileHover={{ color: '#3B82F6' }}
      >
        {title}
        {/* Подчеркивание при hover */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full"></div>
      </motion.h3>

      {/* Описание */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Метаданные */}
      {metadata && (
        <p className="text-sm text-gray-500 mb-4">
          {metadata}
        </p>
      )}

      {/* Интерактивная иконка-кнопка для сервисных карточек */}
      {iconButton && variant === 'service' && (
        <motion.div
          className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg hover:shadow-xl"
          whileHover={{
            scale: 1.1,
            x: 4,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ x: 2, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            {iconButton}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
