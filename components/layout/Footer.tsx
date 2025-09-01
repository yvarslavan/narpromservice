'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-footer text-white py-8">
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Логотип и описание */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-medium flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <div className="text-white font-bold text-lg">НарПромСервис</div>
            </div>
            <p className="text-sm text-white opacity-90">
              Полный комплекс услуг по проектированию, производству, монтажу оборудования и металлоконструкций.
            </p>
          </div>

          {/* Навигационные ссылки */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Навигация</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-white hover:text-opacity-80 transition-all duration-default hover:underline">
                О компании
              </a>
              <a href="#projects" className="block text-sm text-white hover:text-opacity-80 transition-all duration-default hover:underline">
                Проекты
              </a>
              <a href="#services" className="block text-sm text-white hover:text-opacity-80 transition-all duration-default hover:underline">
                Услуги
              </a>
              <a href="#news" className="block text-sm text-white hover:text-opacity-80 transition-all duration-default hover:underline">
                Новости
              </a>
              <a href="#contacts" className="block text-sm text-white hover:text-opacity-80 transition-all duration-default hover:underline">
                Контакты
              </a>
            </div>
          </div>

          {/* Контактная информация */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Контакты</h4>
            <div className="space-y-2 text-sm">
              <p className="text-white opacity-90">+7 (495) 509-03-16</p>
              <p className="text-white opacity-90">maletskii@elinar.ru</p>
              <p className="text-white opacity-90">Пн-Пт с 08:00 до 17:00</p>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white opacity-80">
              © Copyright. Все права защищены 2024
            </div>
            <div className="text-sm flex flex-wrap gap-4">
              <a href="#privacy" className="text-white hover:text-opacity-80 transition-all duration-default hover:underline">
                Политика конфиденциальности
              </a>
              <a href="/cookie-policy" className="text-white hover:text-opacity-80 transition-all duration-default hover:underline">
                Политика cookie
              </a>
              <button
                onClick={() => {
                  localStorage.removeItem('cookieConsent');
                  window.location.reload();
                }}
                className="text-white hover:text-opacity-80 transition-all duration-default hover:underline"
              >
                Управление cookie
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
