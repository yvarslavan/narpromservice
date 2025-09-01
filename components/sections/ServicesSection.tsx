'use client';

import React from 'react';
import Card from '../ui/Card';
import { Zap, Building2, Wrench, Hammer, Flame, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Электромонтажные работы',
      icon: <Zap size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Изготовление металлоконструкций для строительства и производства',
      icon: <Building2 size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Работы по монтажу и сервисному обслуживанию',
      icon: <Wrench size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Токарно - фрезерные услуги',
      icon: <Settings size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Сварочные работы',
      icon: <Flame size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Сопровождение модернизации оборудования',
      icon: <Hammer size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 uppercase tracking-wider mb-4">
            Направления<br />
            деятельности и услуги
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <Card
                title={service.title}
                description=""
                variant="service"
                icon={service.icon}
                iconButton={service.iconButton}
                className="h-64 flex flex-col justify-between pb-16"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
