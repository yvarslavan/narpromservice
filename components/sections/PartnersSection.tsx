'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PartnersSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Логотипы партнёров (используем существующие из скриншота)
  const partners = [
    { name: "Элинар", logo: "https://elinar.ru/wp-content/uploads/2017/10/logo-en.png" },
    { name: "НарПромСервис", logo: "/logos/narprom-logo.jpg" },
    { name: "Горхимпром", logo: "/logos/narprom-logo.jpg" },
    { name: "Елагин", logo: "/logos/elinar-logo.jpg" },
    { name: "Партнер 5", logo: "/logos/narprom-logo.jpg" },
    { name: "ПК", logo: "/logos/elinar-logo.jpg" },
    { name: "ЭКО", logo: "/logos/narprom-logo.jpg" },
    { name: "Элинар", logo: "https://elinar.ru/wp-content/uploads/2017/10/logo-en.png" },
    { name: "НарПромСервис", logo: "/logos/narprom-logo.jpg" },
    { name: "Горхимпром", logo: "/logos/narprom-logo.jpg" },
    { name: "Елагин", logo: "/logos/elinar-logo.jpg" },
    { name: "Партнер 5", logo: "/logos/narprom-logo.jpg" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Геометрические фоновые элементы */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-100/5 to-blue-100/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Наши партнёры
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Мы сотрудничаем с ведущими компаниями отрасли
          </motion.p>
        </motion.div>

        {/* Бесконечная карусель логотипов */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Градиентные маски по краям */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          {/* Первая строка - движется влево */}
          <div
            className="overflow-hidden py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={isPaused ? {} : { x: [0, -100 * partners.length] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Дублируем партнёров для бесконечной прокрутки */}
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-32 h-24 bg-white rounded-2xl shadow-lg border border-gray-200/50 flex items-center justify-center p-4 group cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    rotateX: 10,
                    rotateY: 10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:brightness-110"
                  />

                  {/* Hover glow эффект */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-indigo-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-indigo-400/10 rounded-2xl transition-all duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Вторая строка - движется вправо */}
          <div
            className="overflow-hidden py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={isPaused ? {} : { x: [-100 * partners.length, 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Дублируем партнёров для бесконечной прокрутки в обратную сторону */}
              {[...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, index) => (
                <motion.div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-32 h-24 bg-white rounded-2xl shadow-lg border border-gray-200/50 flex items-center justify-center p-4 group cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    rotateX: -10,
                    rotateY: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:brightness-110"
                  />

                  {/* Hover glow эффект */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-cyan-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 max-w-4xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  50+
                </motion.div>
                <p className="text-gray-600 font-medium">Надёжных партнёров</p>
              </div>

              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  15+
                </motion.div>
                <p className="text-gray-600 font-medium">Лет сотрудничества</p>
              </div>

              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  100%
                </motion.div>
                <p className="text-gray-600 font-medium">Качество работ</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
