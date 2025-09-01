'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Cog, Shield, Award, Users, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  const handleNewsClick = () => {
    // Прокрутка к секции новостей
    const newsSection = document.getElementById('news');
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      {/* Геометрические фоновые элементы */}
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
            {/* Заголовок */}
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

            {/* Основной текст */}
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">
                Наша компания предоставляет <span className="font-semibold text-blue-600">полный спектр услуг</span> — от проектирования и производства до монтажа оборудования и металлоконструкций. Мы разрабатываем и внедряем графики планово-предупредительного обслуживания (ППО) и планово-предупредительных ремонтов (ППР), обеспечивая бесперебойную и надёжную работу ваших объектов.
              </p>

              <p className="text-lg">
                Мы выполняем <span className="font-semibold text-purple-600">модернизацию и реконструкцию</span> производственных участков, а также оказываем услуги токарной и фрезерной обработки деталей по чертежам и эскизам заказчиков. <span className="font-semibold text-indigo-600">Качество исполнения</span> — наш главный приоритет, а опытные специалисты гарантируют высокие стандарты на каждом этапе работ, включая все виды сварочных операций.
              </p>

              <p className="text-lg">
                Кроме серийного производства, мы создаём <span className="font-semibold text-blue-600">индивидуальные решения</span>, адаптированные под конкретные задачи клиентов. <span className="font-bold text-purple-600">Ваш проект — наша ответственность и главный приоритет!</span>
              </p>
            </motion.div>

            {/* Особенности компании */}
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

            {/* CTA кнопка */}
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
                {/* Shimmer эффект */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Фоновое свечение */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

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
                className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/project-1.jpg"
                  alt="Производственные мощности"
                  className="w-full h-80 object-cover rounded-2xl"
                />

                {/* Градиентный overlay */}
                <div className="absolute inset-8 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>

                {/* Текст поверх изображения */}
                <div className="absolute bottom-12 left-12 text-white">
                  <h3 className="text-2xl font-bold mb-2">Современное производство</h3>
                  <p className="text-sm opacity-90">Высокотехнологичное оборудование</p>
                </div>
              </motion.div>

              {/* Декоративные элементы */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-3xl backdrop-blur-sm"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-indigo-400/40 to-cyan-500/40 rounded-2xl backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Статистика в карточках */}
              <motion.div
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
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
                className="absolute bottom-16 right-16 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
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
    </section>
  );
};

export default AboutSection;
