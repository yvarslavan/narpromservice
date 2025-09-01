'use client';

import React from 'react';
import Card from '../ui/Card';
import { Zap, Building2, Wrench, Hammer, Flame, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Электромонтажные работы',
      description: 'Это комплексные услуги по проектированию, монтажу, пусконаладке и обслуживанию электрических сетей и оборудования. Они включают установку распределительных щитов, прокладку кабельных линий, монтаж систем освещения, заземления, молниезащиты и автоматики.',
      icon: <Zap size={24} />,
      image: '/images/services/electrical-works.jpg',
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Изготовление металлоконструкций для строительства и производства',
      description: 'Эта сфера охватывает полный цикл производства изделий из металла, от разработки чертежей до финишной сборки. Сюда входит изготовление каркасов зданий, ферм, колонн, балок, ограждений, а также специализированных конструкций для машиностроения.',
      icon: <Building2 size={24} />,
      image: '/images/services/metal-structures.jpg',
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Работы по монтажу и сервисному обслуживанию',
      description: 'Это направление специализируется на установке и последующем техническом сопровождении сложного технологического оборудования и систем. Это может быть монтаж конвейерных линий, вентиляционных систем, промышленных станков или климатического оборудования.',
      icon: <Wrench size={24} />,
      image: '/images/services/installation-service.jpg',
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Токарно-фрезерные услуги',
      description: 'Это высокоточные механические операции по обработке заготовок, позволяющие создавать детали сложной формы. Токарные работы используются для изготовления деталей вращения, а фрезерные — для обработки плоских и фасонных поверхностей, создания пазов и отверстий.',
      icon: <Settings size={24} />,
      image: '/images/services/lathe-milling.jpg',
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Сварочные работы',
      description: 'Это процесс неразъёмного соединения металлических элементов с помощью плавления или пластической деформации. Профессиональные сварочные работы требуют глубоких знаний различных технологий, таких как ручная дуговая сварка, полуавтоматическая в среде защитных газов или аргонодуговая сварка.',
      icon: <Flame size={24} />,
      image: '/images/services/welding-works.jpg',
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Сопровождение модернизации оборудования',
      description: 'Эта услуга заключается в повышении производительности и функциональности существующего оборудования путём его обновления. Модернизация может включать замену устаревших компонентов, внедрение систем автоматизации и программного управления.',
      icon: <Hammer size={24} />,
      image: '/images/services/equipment-modernization.jpg',
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
                description={service.description}
                variant="service"
                icon={service.icon}
                iconButton={service.iconButton}
                image={service.image}
                className="h-auto min-h-[500px] flex flex-col justify-between pb-16"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
