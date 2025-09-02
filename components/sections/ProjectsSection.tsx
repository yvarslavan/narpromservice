'use client';

import React, { useState, useCallback } from 'react';
import Navigation from '../ui/Navigation';
import ImageModal from '../ui/ImageModal';

const ProjectsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const projects = [
    {
      title: 'Монтаж оборудования ОПО под ключ с дальнейшим сервисным обслуживанием',
      description: 'Комплексное решение для обеспечения безопасности и надежности эксплуатации вашего предприятия.',
      features: [
        {
          text: 'Мы предлагаем **полный цикл услуг**: от проектирования и монтажа до пусконаладки и регулярного технического обслуживания.',
          accent: 'полный цикл услуг'
        },
        {
          text: 'Обратитесь к нам, чтобы обеспечить **надежную работу вашего оборудования и минимизировать риски аварийных ситуаций**!',
          accent: 'надежную работу вашего оборудования и минимизировать риски аварийных ситуаций'
        }
      ],
      image: '/images/project-1.jpg'
    },
    {
      title: 'Производство пропитывающих материалов: от идеи до реализации',
      description: 'Инновационные решения для производства высококачественных материалов.',
      features: [
        {
          text: '**Выбор оборудования:** подбор производственных линий, способных обеспечить требуемое качество продукции.',
          accent: 'Выбор оборудования'
        },
        {
          text: '**Оптимизация процессов:** внедрение технологий, минимизирующих затраты и повышающих производительность.',
          accent: 'Оптимизация процессов'
        },
        {
          text: '**Подготовка технической документации:** создание инструкций и стандартов для обеспечения стабильного качества.',
          accent: 'Подготовка технической документации'
        }
      ],
      image: '/images/project-main.jpg'
    },
    {
      title: 'Установка, пуск и наладка оборудования Биогран',
      description: 'Комплексная установка и настройка специализированного оборудования для переработки органических отходов.',
      features: [
        {
          text: 'Наши специалисты оказали **комплексную услугу** установки, запуска и настройки специализированного оборудования для переработки органических отходов методом биоферментации.',
          accent: 'комплексную услугу'
        },
        {
          text: 'Мы провели монтаж оборудования согласно проекту, подключили необходимые коммуникации, выполнили тестирование всех компонентов и запустили систему в эксплуатацию.',
          accent: ''
        },
        {
          text: 'В процессе наладки были **оптимизированы** параметры работы установки для достижения **максимальной эффективности** переработки сырья.',
          accent: ['оптимизированы', 'максимальной эффективности']
        }
      ],
      image: '/images/project-3.jpg'
    }
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

  const handleImageClick = useCallback(() => {
    setIsImageModalOpen(true);
  }, []);

  const renderAccentedText = (text: string, accent: string | string[]) => {
    if (typeof accent === 'string') {
      // Ищем текст в звездочках и заменяем его на акцентный стиль
      const accentPattern = new RegExp(`\\*\\*([^*]+)\\*\\*`, 'g');
      const htmlText = text.replace(accentPattern, (match, capturedText) => {
        return `<span class="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">${capturedText}</span>`;
      });

      return (
        <span dangerouslySetInnerHTML={{ __html: htmlText }} />
      );
    } else if (Array.isArray(accent)) {
      // Если массив акцентов, применяем стиль ко всем
      let htmlText = text;
      accent.forEach(accentText => {
        if (accentText) {
          const accentPattern = new RegExp(`\\*\\*${accentText}\\*\\*`, 'g');
          htmlText = htmlText.replace(accentPattern, `<span class="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">${accentText}</span>`);
        }
      });

      return (
        <span dangerouslySetInnerHTML={{ __html: htmlText }} />
      );
    }
    return text;
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
                <p key={index} className="text-body text-text-body leading-relaxed">
                  {renderAccentedText(feature.text, feature.accent)}
                </p>
              ))}
            </div>
          </div>

          {/* Правая часть - изображение */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Изображение проекта */}
              <div
                className="w-full max-w-md h-80 bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-3xl transition-all duration-300"
                onClick={handleImageClick}
              >
                <img
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay с иконкой увеличения */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
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

      {/* Модальное окно для просмотра изображения проекта */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc={projects[currentSlide].image}
        imageAlt={projects[currentSlide].title}
        title={projects[currentSlide].title}
        description={projects[currentSlide].description}
      />
    </section>
  );
};

export default ProjectsSection;
