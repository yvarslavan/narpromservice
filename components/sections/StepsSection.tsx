'use client';

import React, { useState } from 'react';
import { FileText, MapPin, Calculator, FileCheck, Wrench, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../ui/Modal';
import ContactForm from '../forms/ContactForm';

const StepsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data: { name: string; phone: string }) => {
    console.log('Form submitted from StepsSection:', data);
    // Здесь можно добавить логику отправки данных
    setIsModalOpen(false);
  };

  const steps = [
    {
      number: '01',
      title: 'Обсуждение проекта',
      description: 'Оставьте заявку и наш менеджер свяжется с вами для обсуждения всех деталей работы',
      icon: FileText,
      color: 'blue'
    },
    {
      number: '02',
      title: 'Выезд на объект',
      description: 'Наши специалисты приедут к вам на объект для оценки и расчета стоимости',
      icon: MapPin,
      color: 'indigo'
    },
    {
      number: '03',
      title: 'Составить смету',
      description: 'Менеджер рассчитает вам полную смету под ваш объект',
      icon: Calculator,
      color: 'purple'
    },
    {
      number: '04',
      title: 'Заключить договор',
      description: 'Подписать договор и приступить к работе на объекте',
      icon: FileCheck,
      color: 'pink'
    },
    {
      number: '05',
      title: 'Производство и монтаж',
      description: 'Изготовление оборудования и металлоконструкций, выполнение монтажных работ',
      icon: Wrench,
      color: 'cyan'
    },
    {
      number: '06',
      title: 'Сдача проекта',
      description: 'Финальная проверка качества, сдача объекта и предоставление гарантии',
      icon: CheckCircle,
      color: 'green'
    }
  ];

  // Функция для получения цветов по типу
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        number: 'text-orange-600',
        icon: 'text-orange-500',
        iconBg: 'bg-orange-100',
        border: 'border-orange-200',
        hoverBorder: 'hover:border-orange-400',
        hoverNumber: 'group-hover:text-orange-700',
        hoverIcon: 'group-hover:text-orange-600',
        progress: 'bg-orange-500'
      },
      indigo: {
        number: 'text-blue-600',
        icon: 'text-blue-500',
        iconBg: 'bg-blue-100',
        border: 'border-blue-200',
        hoverBorder: 'hover:border-blue-400',
        hoverNumber: 'group-hover:text-blue-700',
        hoverIcon: 'group-hover:text-blue-600',
        progress: 'bg-blue-500'
      },
      purple: {
        number: 'text-emerald-600',
        icon: 'text-emerald-500',
        iconBg: 'bg-emerald-100',
        border: 'border-emerald-200',
        hoverBorder: 'hover:border-emerald-400',
        hoverNumber: 'group-hover:text-emerald-700',
        hoverIcon: 'group-hover:text-emerald-600',
        progress: 'bg-emerald-500'
      },
      pink: {
        number: 'text-orange-600',
        icon: 'text-orange-500',
        iconBg: 'bg-orange-100',
        border: 'border-orange-200',
        hoverBorder: 'hover:border-orange-400',
        hoverNumber: 'group-hover:text-orange-700',
        hoverIcon: 'group-hover:text-orange-600',
        progress: 'bg-orange-500'
      },
      cyan: {
        number: 'text-blue-600',
        icon: 'text-blue-500',
        iconBg: 'bg-blue-100',
        border: 'border-blue-200',
        hoverBorder: 'hover:border-blue-400',
        hoverNumber: 'group-hover:text-blue-700',
        hoverIcon: 'group-hover:text-blue-600',
        progress: 'bg-blue-500'
      },
      green: {
        number: 'text-emerald-600',
        icon: 'text-emerald-500',
        iconBg: 'bg-emerald-100',
        border: 'border-emerald-200',
        hoverBorder: 'hover:border-emerald-400',
        hoverNumber: 'group-hover:text-emerald-700',
        hoverIcon: 'group-hover:text-emerald-600',
        progress: 'bg-emerald-500'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Фоновые геометрические элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-100/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-50/20 to-blue-50/20 rounded-full blur-3xl"></div>
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
          >
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
              Этапы работы
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Полный цикл работ от первичной консультации до сдачи готового объекта
          </motion.p>
        </motion.div>

        {/* Сетка карточек этапов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color);
            const IconComponent = step.icon;

            return (
              <motion.div
                key={step.number}
                className={`group relative bg-white rounded-2xl p-8 border-2 ${colors.border} ${colors.hoverBorder} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                {/* Прогресс линия для desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 z-0">
                    <motion.div
                      className={`h-full ${colors.progress} rounded-full`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: (index + 1) * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                )}

                {/* Номер этапа */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className={`text-6xl font-bold ${colors.number} ${colors.hoverNumber} transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Иконка */}
                  <motion.div
                    className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                    whileHover={{
                      rotate: [0, -10, 10, -5, 5, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent
                      size={28}
                      className={`${colors.icon} ${colors.hoverIcon} transition-colors duration-300`}
                    />
                  </motion.div>
                </div>

                {/* Контент */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Декоративный элемент */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.progress} rounded-b-2xl`}
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
          <motion.button
            onClick={handleOpenModal}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Блестящий эффект */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <span className="relative z-10">Начать проект</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Модальное окно с формой */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ContactForm onSubmit={handleFormSubmit} />
      </Modal>
    </section>
  );
};

export default StepsSection;
