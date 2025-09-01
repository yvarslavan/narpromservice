'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Award, TrendingUp } from 'lucide-react';

const ReliablePartnerSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Левая часть - контент */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 uppercase tracking-wider leading-tight">
                МЫ — НАДЕЖНЫЙ<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  ПОДРЯДЧИК
                </span><br />
                С ПОДТВЕРЖДЁННОЙ<br />
                РЕПУТАЦИЕЙ
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Подробнее в открытых базах контрагентов.
                </p>

                <p className="text-xl font-semibold text-gray-800">
                  Нам доверяют ключевые проекты!
                </p>
              </div>
            </div>

            {/* Информационная карточка */}
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-blue-200" />
                  <h3 className="text-xl font-bold">
                    Согласно официальным данным, мы обеспечиваем:
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                    <p className="text-lg">
                      <span className="font-semibold">Высокую надежность</span> — проверенную временем репутацию и стабильность
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0" />
                    <p className="text-lg">
                      <span className="font-semibold">Сильные конкурентные преимущества</span> — опыт, технологии и качество
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                    <p className="text-lg">
                      <span className="font-semibold">Отсутствие критических недостатков</span> — безупречную работу и результат
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Правая часть - ноутбук с изображением */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Макет ноутбука */}
              <div className="relative">
                {/* Тень ноутбука */}
                <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 rounded-full blur-xl"></div>

                {/* Ноутбук */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl">
                  {/* Экран ноутбука */}
                  <div className="bg-white rounded-xl p-4 w-96 h-64 overflow-hidden">
                    {!imageError ? (
                      <div className="w-full h-full rounded-lg overflow-hidden">
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
                      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
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
                  <div className="mt-4 h-20 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center p-4">
                    <div className="grid grid-cols-12 gap-1 w-full">
                      {Array.from({ length: 36 }, (_, i) => (
                        <div
                          key={i}
                          className="h-3 bg-gray-600 rounded-sm hover:bg-gray-500 transition-colors duration-200"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Декоративные элементы */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full backdrop-blur-sm animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-indigo-500/30 rounded-full backdrop-blur-sm animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReliablePartnerSection;
