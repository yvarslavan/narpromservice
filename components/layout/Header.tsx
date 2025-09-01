'use client';

import React, { useState } from 'react';
import { Phone, Search, Menu, X, ChevronDown, Home, FolderOpen, Settings, Newspaper } from 'lucide-react';

// Конфигурация языков
const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

// Пункты навигации с иконками
const navigationItems = [
  { href: '#about', label: 'О компании', icon: Home },
  { href: '#projects', label: 'Проекты', icon: FolderOpen },
  { href: '#services', label: 'Услуги', icon: Settings },
  { href: '#news', label: 'Новости', icon: Newspaper },
  { href: '#contacts', label: 'Контакты', icon: Phone },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setCurrentLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <>
      {/* Основной хедер */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">

            {/* Логотипы */}
            <div className="flex items-center gap-6 min-w-[260px]">
              <div className="flex items-center gap-6">
                {/* Логотип НарПромСервис */}
                <div className="h-16 flex items-center justify-center">
                  <a href="/" className="block group">
                    <img
                      src="/logos/narprom-logo.jpg"
                      alt="НарПромСервис"
                      className="h-12 w-auto object-contain group-hover:scale-105 transition-all duration-300 filter group-hover:drop-shadow-lg"
                      onError={(e) => {
                        console.log('Ошибка загрузки логотипа НарПромСервис, пробуем внешний URL');
                        e.currentTarget.src = "https://optim.tildacdn.com/tild6237-6261-4663-b064-336361316438/-/resize/249x/-/format/webp/LOGOTYPE_NAR_PROM_SE.png.webp";
                        e.currentTarget.onerror = () => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'block';
                          }
                        };
                      }}
                    />
                    <div className="hidden h-12 flex items-center justify-center bg-blue-600 text-white font-bold text-sm rounded-lg px-3 group-hover:scale-105 transition-all duration-300">
                      НарПромСервис
                    </div>
                  </a>
                </div>

                {/* Разделитель */}
                <div className="w-px h-12 bg-gray-300" />

                {/* Логотип ELINAR */}
                <div className="h-16 flex items-center justify-center">
                  <a
                    href="https://elinar.ru/"
                    target="_blank"
                    rel="noopener"
                    className="block group"
                  >
                    <img
                      src="/logos/elinar-logo.jpg"
                      alt="ELINAR"
                      className="h-10 w-auto object-contain group-hover:scale-105 transition-all duration-300 filter group-hover:drop-shadow-lg"
                      onError={(e) => {
                        console.log('Ошибка загрузки логотипа ELINAR, пробуем внешний URL');
                        e.currentTarget.src = "https://elinar.ru/wp-content/uploads/2017/10/logo-en.png";
                        e.currentTarget.onerror = () => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'block';
                          }
                        };
                      }}
                    />
                    <div className="hidden h-10 flex items-center justify-center bg-orange-600 text-white font-bold text-sm rounded-lg px-3 group-hover:scale-105 transition-all duration-300">
                      ELINAR
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Десктопная навигация */}
            <nav className="hidden lg:flex items-center gap-4 ml-6">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                // Цвета для каждой иконки
                const iconColors = [
                  'from-orange-500 to-red-500', // О компании - оранжевый
                  'from-blue-500 to-indigo-500', // Проекты - синий
                  'from-green-500 to-emerald-500', // Услуги - зеленый
                  'from-purple-500 to-pink-500', // Новости - фиолетовый
                  'from-cyan-500 to-blue-500', // Контакты - циан
                ];

                return (
                  <div key={item.href} className="relative group">
                    <a
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 text-gray-800 font-semibold text-sm transition-all duration-300 rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 group overflow-hidden"
                    >
                      {IconComponent && (
                        <div className={`w-6 h-6 bg-gradient-to-r ${iconColors[index]} rounded-md flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <IconComponent size={14} className="text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      )}
                      <span className="hidden xl:inline">{item.label}</span>
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Правая часть */}
            <div className="flex items-center gap-3">

              {/* Языковой переключатель */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 text-gray-800 bg-gray-100 hover:bg-cyan-500 hover:text-white rounded-lg transition-all duration-300"
                >
                  <span className="text-lg">{currentLanguage.flag}</span>
                  <span className="text-sm font-bold">{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDown size={14} />
                </button>

                {/* Языковой dropdown */}
                {isLanguageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden min-w-[140px] z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang)}
                        className="w-full text-left px-4 py-3 hover:bg-cyan-50 transition-all duration-200 flex items-center gap-3"
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-800">{lang.code.toUpperCase()}</span>
                          <span className="text-xs text-gray-500">{lang.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Иконки поиска и звонка */}
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors duration-300">
                  <Search size={18} className="text-white" />
                </button>

                <button className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-600 transition-colors duration-300">
                  <Phone size={18} className="text-white" />
                </button>
              </div>

              {/* Мобильное бургер-меню */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-200"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <>
          {/* Затемняющий overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
            onClick={closeMobileMenu}
          />

          {/* Выезжающее меню */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
            {/* Заголовок мобильного меню */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">Меню</h3>
              <button
                onClick={closeMobileMenu}
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Мобильная навигация */}
            <nav className="p-6 space-y-3">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                // Цвета для каждой иконки (те же, что и в десктопе)
                const iconColors = [
                  'from-orange-500 to-red-500', // О компании - оранжевый
                  'from-blue-500 to-indigo-500', // Проекты - синий
                  'from-green-500 to-emerald-500', // Услуги - зеленый
                  'from-purple-500 to-pink-500', // Новости - фиолетовый
                  'from-cyan-500 to-blue-500', // Контакты - циан
                ];

                return (
                  <div key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-4 px-6 py-4 text-gray-800 font-semibold text-base hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 rounded-xl transition-all duration-200"
                    >
                      {IconComponent && (
                        <div className={`w-10 h-10 bg-gradient-to-r ${iconColors[index]} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-3`}>
                          <IconComponent size={20} className="text-white hover:scale-110 transition-transform duration-300" />
                        </div>
                      )}
                      <span>{item.label}</span>
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Мобильный языковой переключатель */}
            <div className="p-6 border-t border-gray-200">
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wide">Язык</h4>
                <div className="grid grid-cols-1 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang)}
                      className={`text-left px-6 py-4 rounded-xl transition-all duration-200 flex items-center gap-4 ${
                        currentLanguage.code === lang.code
                          ? 'bg-cyan-50 text-cyan-600 border-2 border-cyan-200'
                          : 'hover:bg-gray-50 text-gray-800 border-2 border-transparent'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-bold text-base">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Мобильные контактные иконки */}
            <div className="p-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-4">Контакты</h4>
              <div className="flex gap-3">
                <button className="flex-1 h-14 bg-blue-500 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:bg-blue-600 transition-colors duration-300">
                  <Search size={20} className="text-white" />
                  <span className="text-white font-bold text-base">Поиск</span>
                </button>

                <button className="flex-1 h-14 bg-cyan-500 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:bg-cyan-600 transition-colors duration-300">
                  <Phone size={20} className="text-white" />
                  <span className="text-white font-bold text-base">Звонок</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer для fixed header */}
      <div className="h-32" />

      {/* Click outside handler для языкового dropdown */}
      {isLanguageDropdownOpen && (
        <button
          className="fixed inset-0 z-30 bg-transparent border-none cursor-default"
          onClick={() => setIsLanguageDropdownOpen(false)}
          aria-label="Закрыть языковое меню"
        />
      )}
    </>
  );
};

export default Header;
