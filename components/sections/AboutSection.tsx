'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Cog, Shield, Award, Users, TrendingUp, Maximize2 } from 'lucide-react';
import ImageModal from '../ui/ImageModal';

const AboutSection: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleNewsClick = () => {
    const newsSection = document.getElementById('news');
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const handleImageClick = useCallback(() => {
    setIsImageModalOpen(true);
  }, []); // Убираем зависимость!

  const features = [
    { icon: Factory, text: "Полный цикл производства" },
    { icon: Cog, text: "Техническое обслуживание" },
    { icon: Shield, text: "Работа во взрывоопасной среде" },
    { icon: Award, text: "15+ лет опыта" },
    { icon: Users, text: "Команда профессионалов" },
    { icon: TrendingUp, text: "500+ успешных проектов" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Левая часть - контент */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                О компании
              </h2>
              <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.div>

            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">
                Наша компания предоставляет <span className="font-semibold text-blue-600">полный спектр услуг</span> — от проектирования и производства до монтажа оборудования и металлоконструкций.
              </p>
              <p className="text-lg">
                Мы выполняем <span className="font-semibold text-purple-600">модернизацию и реконструкцию</span> производственных участков, а также оказываем услуги токарной и фрезерной обработки деталей.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={handleNewsClick}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex items-center gap-3">
                  <span>Новости компании</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Правая часть - визуальные элементы */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Основное изображение */}
              <motion.div
                className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl cursor-pointer group"
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={handleImageClick}
              >
                <div className="relative overflow-hidden rounded-2xl">
                                     <img
                     src="/images/hero-industrial.jpg"
                     alt="Промышленные мощности компании"
                     className="w-full h-[600px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                   />

                  {/* Градиентный overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>

                  {/* Кнопка увеличения */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <Maximize2 size={24} />
                  </div>

                  {/* Текст поверх изображения */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Современное производство</h3>
                    <p className="text-sm opacity-90">Высокотехнологичное оборудование</p>
                  </div>
                </div>
              </motion.div>

              {/* Декоративные элементы */}
              <motion.div
                className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-3xl backdrop-blur-sm"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-indigo-400/40 to-cyan-500/40 rounded-2xl backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Статистика в карточках */}
              <motion.div
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-xs text-gray-600 font-medium">Проектов</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-xs text-gray-600 font-medium">Лет опыта</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Модальное окно для просмотра изображения */}
             <ImageModal
         isOpen={isImageModalOpen}
         onClose={() => setIsImageModalOpen(false)}
         imageSrc="/images/hero-industrial.jpg"
         mediaAlt="Промышленные мощности компании"
         title="Промышленные мощности"
         description="Современное производственное оборудование и промышленные мощности нашей компании"
       />
    </section>
  );
};

export default AboutSection;
