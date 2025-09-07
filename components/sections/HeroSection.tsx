'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import ContactForm from '../forms/ContactForm';
import ImageModal from '../ui/ImageModal';

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    handleCloseModal();
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-new-cover.jpg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center'
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen px-4 md:px-8 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            {/* Main Title - Более жирный и заметный */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-white leading-tight mb-6">
              <span className="block mb-3 font-black text-shadow-lg">
                Полный цикл услуг:
              </span>
              <span className="block text-orange-400 font-black text-shadow-lg mb-2">
                от проектирования до сервисного обслуживания
              </span>
              <span className="block font-black text-shadow-lg">
                промышленного оборудования и металлоконструкций
              </span>
            </h1>

            {/* Subtitle and CTA Button - Side by Side */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 max-w-5xl">
              {/* Text Block */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-l-4 border-orange-400 flex-1">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                  Проектирование, изготовление, модернизация, монтаж и техническое обслуживание.
                </p>
                <p className="text-lg md:text-xl text-blue-700 font-semibold mt-2">
                  Собственная производственная база с токарным и фрезерным оборудованием
                </p>
              </div>

              {/* Animated CTA Button */}
              <div className="flex-shrink-0">
                <Button
                  variant="primary"
                  onClick={handleOpenModal}
                  className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden group"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Pulsing ring effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-orange-300 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                  {/* Button text */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Получить консультацию</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mt-8">
            {/* Card 01 */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-white text-lg font-bold">01</span>
                </div>
                <h3 className="text-lg text-white font-semibold">Собственное производство</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Полный производственный цикл на собственных мощностях: от проектирования до финальной сборки с использованием современного токарного и фрезерного оборудования.
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-5 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-white text-lg font-bold">02</span>
                </div>
                <h3 className="text-lg text-white font-semibold">Гарантия качества решений</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Разрабатываем уникальные технические решения под специфику вашего производства с гарантией качества и соблюдением всех технических требований.
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-5 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-white text-lg font-bold">03</span>
                </div>
                <h3 className="text-lg text-white font-semibold">Комплексное сопровождение</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Берем на себя весь процесс: от первичного анализа потребностей до постгарантийного обслуживания. Один подрядчик - полная ответственность за результат.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <div className="w-16 h-1 bg-orange-400 rounded"></div>
            <div className="w-8 h-1 bg-blue-500 rounded"></div>
            <div className="w-4 h-1 bg-emerald-500 rounded"></div>
          </div>
        </div>
      </div>

      {/* Модальное окно с формой */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ContactForm onSubmit={handleFormSubmit} />
      </Modal>

      {/* Модальное окно для просмотра изображения */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc="/images/hero-industrial.jpg"
        mediaAlt="Промышленное оборудование"
        title="Промышленные мощности"
        description="Современное промышленное оборудование и технические мощности нашей компании"
      />
    </section>
  );
};

export default HeroSection;
