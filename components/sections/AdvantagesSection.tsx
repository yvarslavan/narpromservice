'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, Cpu, Layers, Star, FileCheck, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import ContactForm from '../forms/ContactForm';

const AdvantagesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    handleCloseModal();
  };

  const advantages = [
    {
      icon: Shield,
      title: '15+ лет опыта',
      description: 'Более 15 лет успешной работы в сфере промышленного оборудования и металлоконструкций',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Wrench,
      title: 'Полный цикл производства',
      description: 'От проектирования и производства до монтажа оборудования и металлоконструкций - все под одной крышей',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Cpu,
      title: 'Современные технологии',
      description: 'Токарная и фрезерная обработка деталей на высокоточном оборудовании с ЧПУ',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Layers,
      title: 'Модернизация и реконструкция',
      description: 'Выполняем модернизацию и реконструкцию производственных участков любой сложности',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Star,
      title: '500+ успешных проектов',
      description: 'Реализовали более 500 проектов в области промышленного оборудования и металлоконструкций',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: FileCheck,
      title: 'Техническое обслуживание',
      description: 'Комплексное техническое обслуживание промышленного оборудования и работа во взрывоопасной среде',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    }
  ];

  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-100/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/10 to-orange-50/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            itemProp="name"
          >
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 bg-clip-text text-transparent">
              Наши преимущества
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            itemProp="description"
          >
            Полный спектр услуг по промышленному оборудованию и металлоконструкциям
          </motion.p>
        </motion.div>

        {/* Сетка преимуществ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;

            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
              >
                {/* Декоративный элемент */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${advantage.bgColor} rounded-bl-3xl opacity-20`}></div>

                {/* Иконка */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, -3, 3, 0],
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent size={28} className="text-white" />
                </motion.div>

                {/* Контент */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {advantage.description}
                  </p>
                </div>

                {/* Анимированная полоска внизу */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.color} rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA кнопка */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="primary"
              onClick={handleOpenModal}
              className="relative bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white px-12 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden group"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

              {/* Button text */}
              <span className="relative z-10 flex items-center gap-3">
                <span>Получить консультацию</span>
                <ArrowRight
                  size={20}
                  className="transform group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Модальное окно с формой */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ContactForm onSubmit={handleFormSubmit} />
      </Modal>
    </section>
  );
};

export default AdvantagesSection;
