'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const ReliablePartnerSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-orange-100/30 to-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-100/30 to-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-50/20 to-blue-50/20 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Левая часть - контент */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {/* Заголовок */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-black text-gray-800 leading-tight">
                  <span className="block">МЫ — ВАШ</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700">
                    НАДЁЖНЫЙ ПАРТНЁР
                  </span>
                  <span className="block text-2xl lg:text-3xl font-bold text-gray-600 mt-2">
                    С ГАРАНТИЕЙ КАЧЕСТВА И ПРОВЕРЕННОЙ РЕПУТАЦИЕЙ
                  </span>
                </h2>
              </div>

              {/* Основной текст */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border-l-4 border-orange-500 shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Наша компания заслужила доверие благодаря многолетнему опыту, строгому соблюдению сроков и неизменно высокому уровню выполнения работ.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Подтверждённая репутация отражена в открытых официальных базах и положительных отзывах наших ключевых заказчиков.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border-l-4 border-orange-500 shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Мы реализовали ключевые проекты, заслужив доверие крупнейших заказчиков.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Партнёрство с НарПромСервис — это уверенность в качестве, сроках и полной прозрачности сотрудничества.
                  </p>
                </div>
              </div>

              {/* Дополнительная информация */}
              <motion.div
                className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-orange-200" />
                  <h3 className="text-xl font-bold">
                    Открытая информация
                  </h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Подробнее о нашей надёжности и истории успешных проектов можно узнать в открытых источниках.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Правая часть - стильный ноутбук с изображением */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Декоративные элементы */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>

              {/* Макет ноутбука */}
              <div className="relative transform group-hover:scale-105 transition-transform duration-500">
                {/* Тень ноутбука */}
                <div className="absolute -bottom-6 left-6 right-6 h-12 bg-black/30 rounded-full blur-2xl"></div>

                {/* Ноутбук */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
                  {/* Экран ноутбука */}
                  <div className="bg-white rounded-2xl p-6 w-96 h-64 overflow-hidden shadow-inner">
                    {!imageError ? (
                      <div className="w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src="/images/laptop-screen.jpg"
                          alt="Экран ноутбука с приложением"
                          width={384}
                          height={256}
                          className="w-full h-full object-cover"
                          onError={() => setImageError(true)}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-orange-50 to-blue-100 rounded-xl flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="text-4xl mb-3">💻</div>
                          <div className="text-sm font-medium mb-2">Экран ноутбука</div>
                          <div className="text-xs">Разместите изображение по пути:</div>
                          <div className="text-xs font-mono bg-white/50 px-2 py-1 rounded mt-1">
                            /images/laptop-screen.jpg
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Клавиатура ноутбука */}
                  <div className="mt-6 h-24 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center p-6 border border-gray-600">
                    <div className="grid grid-cols-12 gap-1 w-full">
                      {Array.from({ length: 36 }, (_, i) => (
                        <div
                          key={i}
                          className="h-4 bg-gray-600 rounded-sm hover:bg-gray-500 transition-colors duration-200"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Дополнительные декоративные элементы */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-500/20 rounded-full backdrop-blur-sm animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/30 rounded-full backdrop-blur-sm animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReliablePartnerSection;
