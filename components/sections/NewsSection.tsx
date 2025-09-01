'use client';

import React, { useState } from 'react';
import Card from '../ui/Card';
import Navigation from '../ui/Navigation';
import Button from '../ui/Button';

const NewsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      title: 'Экологическая акция «Чистый лес»',
      description: '21 сентября команда в Наро-Фоминской Каменоломне провела экологическую акцию «Чистый лес».',
      date: '24.09.2024',
      image: '/images/news-1.jpg' // Заглушка для изображения
    },
    {
      title: 'Высадка деревьев',
      description: 'По сложившейся традиции, группа активных сотрудников «Элинар» провела активные работы по высадке деревьев.',
      date: '18.09.2024',
      image: '/images/news-2.jpg' // Заглушка для изображения
    },
    {
      title: 'Визит заместителя Министра сельского хозяйства РФ на предприятие «Элинар»',
      description: 'Представители группы компаний «Элинар» посетили стенд секретаря.',
      date: '08.04.2024',
      image: '/images/news-3.jpg' // Заглушка для изображения
    },
    {
      title: 'Семинар «Снижаемые условия растениеводства Калужской области в современных условиях»',
      description: '2 апреля состоялся семинар «Снижаемые условия растениеводства Калужской области»',
      date: '03.04.2024',
      image: '/images/news-4.jpg' // Заглушка для изображения
    },
    {
      title: 'Десятиклассники на заводе «Элинар»',
      description: 'Ученики 10 класса МБОУ Наро-Фоминской СОШ № 5 с углубленным изучением отдельных предметов отправились в экскурсию.',
      date: '14.03.2024',
      image: '/images/news-5.jpg' // Заглушка для изображения
    },
    {
      title: 'Открытая Зимняя спартакиада-2024',
      description: '2 марта на стадионе МГСЦ «Задира» с. Атепцево, ул. Лесобережная, состоялась Открытая Зимняя спартакиада 2024.',
      date: '02.03.2024',
      image: '/images/news-6.jpg' // Заглушка для изображения
    }
  ];

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(newsItems.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => Math.min(totalSlides - 1, prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const currentItems = newsItems.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  return (
    <section id="news" className="py-20 bg-neutral-light">
      <div className="max-w-container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-text-heading uppercase tracking-wider mb-8">
            Новости
          </h2>

          {/* Фильтры новостей */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="active" size="small">Все</Button>
            <Button variant="secondary" size="small">Здоровый образ жизни</Button>
            <Button variant="secondary" size="small">События</Button>
            <Button variant="secondary" size="small">Социальная ответственность</Button>
            <Button variant="secondary" size="small">Экология</Button>
          </div>
        </div>

        {/* Сетка новостей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentItems.map((item, index) => (
            <Card
              key={currentSlide * itemsPerPage + index}
              title={item.title}
              description={item.description}
              metadata={item.date}
              image={item.image}
              variant="default"
              className="h-full"
            />
          ))}
        </div>

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
    </section>
  );
};

export default NewsSection;
