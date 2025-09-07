'use client';

import React, { useState, useCallback } from 'react';
import Navigation from '../ui/Navigation';
import ImageModal from '../ui/ImageModal';

const ProjectsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const projects = [
    {
      title: 'Восстановление и модернизация пешеходного фонтана',
      description: 'Успешное завершение работ по восстановлению и модернизации городского пешеходного фонтана, который находился в нерабочем состоянии более двух лет.',
      features: [
        {
          text: '**Комплексный подход**: выполнили полный цикл работ от диагностики до запуска в эксплуатацию.',
          accent: 'Комплексный подход'
        },
        {
          text: '**Современные технологии**: применили передовые методы восстановления и модернизации гидротехнических сооружений.',
          accent: 'Современные технологии'
        },
        {
          text: '**Результат**: фонтан успешно восстановлен и работает в штатном режиме, радуя жителей города.',
          accent: 'Результат'
        }
      ],
      image: '/images/project-1.jpg',
      video: '/videos/fountain-construction-1.mp4'
    },
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
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-100/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
              Реализованные проекты
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            За долгие годы работы мы смогли реализовать 100+ объектов
          </p>
        </div>

        {/* Контент проекта */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - описание */}
          <div className="space-y-8">
            {/* Заголовок проекта с декоративными элементами */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight pl-6">
                <span className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
                  {projects[currentSlide].title}
                </span>
              </h3>
              <div className="mt-2 w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </div>

            {/* Описание проекта в стильной рамке */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border-l-4 border-orange-500 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  {projects[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Особенности проекта в стильных карточках */}
            <div className="space-y-4">
              {projects[currentSlide].features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      {/* Номер особенности */}
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>

                      {/* Текст особенности */}
                      <div className="flex-1">
                        <div className="text-gray-800 leading-relaxed">
                          {renderAccentedText(feature.text, feature.accent)}
                        </div>
                      </div>

                      {/* Декоративная иконка */}
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Анимированная полоска */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>

            {/* Статистика проекта */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white text-center shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">Качество</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white text-center shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Поддержка</div>
              </div>
            </div>
          </div>

          {/* Правая часть - медиа (изображение или видео) */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Медиа контент проекта */}
              <div
                className="w-full max-w-lg h-96 bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-3xl transition-all duration-300"
                onClick={handleImageClick}
              >
                {projects[currentSlide].video ? (
                  <video
                    src={projects[currentSlide].video}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={projects[currentSlide].image}
                    alt={projects[currentSlide].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Overlay с иконкой увеличения */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    {projects[currentSlide].video ? (
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    ) : (
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
                    )}
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

      {/* Модальное окно для просмотра медиа проекта */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc={projects[currentSlide].image}
        videoSrc={projects[currentSlide].video}
        mediaAlt={projects[currentSlide].title}
        title={projects[currentSlide].title}
        description={projects[currentSlide].description}
      />
    </section>
  );
};

export default ProjectsSection;
