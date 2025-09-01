'use client';

import React, { useState } from 'react';
import Navigation from '../ui/Navigation';

const ProjectsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Монтаж оборудования ОПО под ключ с дальнейшим сервисным обслуживанием',
      description: 'Комплексное решение для обеспечения безопасности и надежности эксплуатации вашего предприятия.',
      features: [
        'Мы предлагаем полный цикл услуг от проектирования и монтажа до пуско-наладочной и регулярного технического обслуживания.',
        'Обратитесь к нам, чтобы обеспечить надежную работу вашего оборудования и минимизировать риски аварийных ситуаций!'
      ],
      image: '/images/project-1.jpg'
    },
    // Можно добавить больше проектов
  ];

  const totalSlides = projects.length;

  const handlePrevious = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => Math.min(totalSlides - 1, prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="projects" className="py-20 bg-neutral-light">
      <div className="max-w-container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-text-heading uppercase tracking-wider">
            Реализованные проекты
          </h2>
          <p className="text-lg text-text-body mt-4">
            За долгие годы работы мы смогли реализовать 100+ объектов
          </p>
        </div>

        {/* Контент проекта */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - описание */}
          <div className="space-y-6">
            <h3 className="text-h2 font-bold text-text-heading leading-tight">
              {projects[currentSlide].title}
            </h3>

            <p className="text-body font-bold text-text-heading">
              {projects[currentSlide].description}
            </p>

            <div className="space-y-4">
              {projects[currentSlide].features.map((feature, index) => (
                <p key={index} className="text-body text-text-body">
                  {feature}
                </p>
              ))}
            </div>
          </div>

          {/* Правая часть - изображение */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Изображение проекта */}
              <div className="w-full max-w-md h-80 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/images/project-main.jpg"
                  alt="Монтаж оборудования ОПО"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Навигация */}
        <div className="flex justify-center mt-12">
          <Navigation
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onDotClick={handleDotClick}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
