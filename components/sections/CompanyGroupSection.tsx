'use client';

import React from 'react';
import Card from '../ui/Card';
import { Factory, Wheat, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const CompanyGroupSection: React.FC = () => {
  const companies = [
    {
      title: 'Промышленность',
      description: 'Производство продукции электротехнического назначения, изделий из пластмасс, производство упаковочных материалов',
      icon: <Factory size={24} />,
      link: 'Подробнее'
    },
    {
      title: 'Сельское хозяйство',
      description: 'Производство мяса, молока, зерновых культур. Племенной завод по разведению коров черно пестрой породы',
      icon: <Wheat size={24} />,
      link: 'Подробнее'
    },
    {
      title: 'Девелопмент',
      description: 'Промышленный парк «Калуга», индустриальный парк «Ревдестр», аренда жилья и промышленных объектов, продажа земельных участков',
      icon: <Building size={24} />,
      link: 'Подробнее'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 uppercase tracking-wider mb-4">
            Группа компаний
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Сетка карточек компаний */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company, index) => (
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
                title={company.title}
                description={company.description}
                variant="service"
                icon={company.icon}
                iconButton={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
                className="h-full pb-16"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyGroupSection;
