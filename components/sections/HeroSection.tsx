'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import ContactForm from '../forms/ContactForm';
import { Briefcase, Settings, Headphones } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data: { name: string; phone: string }) => {
    console.log('Form submitted:', data);
    // Здесь можно добавить логику отправки данных
    setIsModalOpen(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden -mt-20 pt-20">
      {/* Material Design градиентный фон */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20"></div>
        {/* Геометрические элементы */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full backdrop-blur-sm animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Верхняя часть с рабочим и текстом */}
        <div className="flex-1 flex items-center py-20">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Левая часть - современная иллюстрация */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-80 h-96 relative">
                    {/* Современная геометрическая композиция */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/30 to-purple-600/20 rounded-3xl backdrop-blur-sm"></div>

                    {/* Центральная иконка промышленности */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                        <Settings className="w-16 h-16 text-white" />
                      </div>
                    </div>

                    {/* Material Design floating elements */}
                    <div className="absolute top-8 right-8 w-20 h-20 bg-blue-500/30 rounded-2xl backdrop-blur-sm animate-pulse"></div>
                    <div className="absolute bottom-8 left-8 w-16 h-16 bg-indigo-500/40 rounded-xl backdrop-blur-sm animate-bounce"></div>
                    <div className="absolute top-1/3 left-4 w-12 h-12 bg-purple-500/25 rounded-full backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>

              {/* Правая часть - текст и кнопка */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Полный спектр услуг по изготовлению, монтажу и сервисному обслуживанию оборудования. Изготовление металлоконструкций.
                  </h1>

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-16">
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
    </section>
  );
};

export default HeroSection;
