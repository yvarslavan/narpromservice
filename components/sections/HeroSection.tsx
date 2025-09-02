'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import ContactForm from '../forms/ContactForm';
import { Briefcase, Settings, Headphones, Maximize2 } from 'lucide-react';
import ImageModal from '../ui/ImageModal';

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleImageClick = useCallback(() => {
    setIsImageModalOpen(true);
  }, []);
  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    handleCloseModal();
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden -mt-20 pt-20">
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10">
        <div className="flex-1 flex items-center py-20">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Левая часть - место для картинки */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                                     <div className="w-80 h-96 relative">
                     {!imageError ? (
                       <div className="w-full h-full rounded-3xl overflow-hidden cursor-pointer group" onClick={handleImageClick}>
                         <Image
                           src="/images/hero-engineer.jpg"
                           alt="Инженерные мощности компании"
                           width={320}
                           height={384}
                           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                           onError={() => setImageError(true)}
                         />

                         {/* Иконка увеличения */}
                         <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                           <Maximize2 size={24} />
                         </div>
                       </div>
                     ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-indigo-500/30 to-purple-600/20 rounded-3xl backdrop-blur-sm border-2 border-white/20 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-6xl mb-4">👷‍♂️</div>
                          <div className="text-lg font-semibold mb-2">Инженерные мощности</div>
                          <div className="text-sm opacity-80">Разместите изображение по пути:</div>
                          <div className="text-xs font-mono bg-white/10 px-3 py-2 rounded-lg mt-2">
                            /images/hero-engineer.jpg
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Декоративные элементы поверх картинки */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/30 rounded-2xl backdrop-blur-sm animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-indigo-500/40 rounded-xl backdrop-blur-sm animate-bounce"></div>
                  </div>
                </div>
              </div>

              {/* Правая часть - текст и кнопка */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Комплексные услуги по изготовлению, монтажу и сервисному обслуживанию оборудования, включая производство металлоконструкций</h1>

                  <p className="text-xl text-white opacity-90 max-w-lg">
                    Оставьте заявку на бесплатную консультацию, и мы свяжемся с вами в ближайшее время.
                  </p>
                </div>

                <div>
                  <Button
                    variant="primary"
                    onClick={handleOpenModal}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    Получить консультацию
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть с тремя карточками */}
        <div className="relative z-10 pb-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Карточка 1 - Material Design */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-blue-600">01</div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-md">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">Опыт работы</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Более 10 лет успешного опыта в области технического обслуживания и эксплуатации производственного оборудования
                    </p>
                  </div>
                </div>
              </div>

              {/* Карточка 2 - Material Design */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-indigo-600">02</div>
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-md">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">Системный подход к решению задач</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Обеспечим эффективность и устойчивость принятых решений.
                    </p>
                  </div>
                </div>
              </div>

              {/* Карточка 3 - Material Design */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-purple-600">03</div>
                    <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center shadow-md">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">Индивидуальный подход к каждому заказу</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Учитываем специфику объекта и персональные пожелания клиента.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
         imageSrc="/images/hero-engineer.jpg"
         imageAlt="Инженерные мощности компании"
         title="Инженерные мощности"
         description="Современное инженерное оборудование и технические мощности нашей компании"
       />
     </section>
   );
 };

export default HeroSection;
