'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Navigation from '../ui/Navigation';
import NewsFilter from '../ui/NewsFilter';
import ImageModal from '../ui/ImageModal';

const NewsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedNewsItem, setSelectedNewsItem] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const newsItems = [
    {
      title: 'Экологическая акция «Чистый лес»',
      description: '21 сентября команда в Наро-Фоминской Каменоломне провела экологическую акцию «Чистый лес».',
      date: '24.09.2024',
      image: '/images/news-1.jpg',
      category: 'ecology'
    },
    {
      title: 'Высадка деревьев',
      description: 'По сложившейся традиции, группа активных сотрудников «Элинар» провела активные работы по высадке деревьев.',
      date: '18.09.2024',
      image: '/images/news-2.jpg',
      category: 'ecology'
    },
    {
      title: 'Визит заместителя Министра сельского хозяйства РФ на предприятие «Элинар»',
      description: 'Представители группы компаний «Элинар» посетили стенд секретаря.',
      date: '08.04.2024',
      image: '/images/news-3.jpg',
      category: 'events'
    },
    {
      title: 'Семинар «Снижаемые условия растениеводства Калужской области в современных условиях»',
      description: '2 апреля состоялся семинар «Снижаемые условия растениеводства Калужской области»',
      date: '03.04.2024',
      image: '/images/news-4.jpg',
      category: 'events'
    },
    {
      title: 'Десятиклассники на заводе «Элинар»',
      description: 'Ученики 10 класса МБОУ Наро-Фоминской СОШ № 5 с углубленным изучением отдельных предметов отправились в экскурсию.',
      date: '14.03.2024',
      image: '/images/news-5.jpg',
      category: 'social-responsibility'
    },
    {
      title: 'Открытая Зимняя спартакиада-2024',
      description: '2 марта на стадионе МГСЦ «Задира» с. Атепцево, ул. Лесобережная, состоялась Открытая Зимняя спартакиада 2024.',
      date: '02.03.2024',
      image: '/images/news-6.jpg',
      category: 'healthy-lifestyle'
    }
  ];

  const itemsPerPage = 3;

  const handlePrevious = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => Math.min(totalSlides - 1, prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleImageClick = useCallback((newsItem: any) => {
    setSelectedNewsItem(newsItem);
    setIsImageModalOpen(true);
  }, []);

  const handleFilterChange = useCallback((filterId: string) => {
    setActiveFilter(filterId);
    setCurrentSlide(0); // Сбрасываем слайд при смене фильтра
  }, []);

  const filters = [
    { id: 'all', label: 'Все', count: newsItems.length },
    { id: 'healthy-lifestyle', label: 'Здоровый образ жизни', count: newsItems.filter(item => item.category === 'healthy-lifestyle').length },
    { id: 'events', label: 'События', count: newsItems.filter(item => item.category === 'events').length },
    { id: 'social-responsibility', label: 'Социальная ответственность', count: newsItems.filter(item => item.category === 'social-responsibility').length },
    { id: 'ecology', label: 'Экология', count: newsItems.filter(item => item.category === 'ecology').length }
  ];

  // Фильтрация новостей
  const filteredNews = activeFilter === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === activeFilter);

  const totalSlides = Math.ceil(filteredNews.length / itemsPerPage);

  const currentItems = filteredNews.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  return (
    <section id="news" className="py-24 bg-gray-50 relative overflow-hidden">
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
              Новости
            </span>
          </h2>

          {/* Фильтры новостей */}
          <NewsFilter
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            filters={filters}
          />
        </div>

        {/* Сетка новостей */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          key={activeFilter} // Ключ для анимации при смене фильтра
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={`${activeFilter}-${currentSlide}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}
            >
              <Card
                title={item.title}
                description={item.description}
                metadata={item.date}
                image={item.image}
                variant="default"
                onImageClick={() => handleImageClick(item)}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Навигация - используем компонент Navigation */}
        <div className="flex justify-center">
          <Navigation
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onDotClick={handleDotClick}
          />
        </div>
      </div>

      {/* Модальное окно для просмотра изображения новости */}
      {selectedNewsItem && (
        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          imageSrc={selectedNewsItem.image}
          videoSrc={selectedNewsItem.video}
          mediaAlt={selectedNewsItem.title}
          title={selectedNewsItem.title}
          description={selectedNewsItem.description}
        />
      )}
    </section>
  );
};

export default NewsSection;
