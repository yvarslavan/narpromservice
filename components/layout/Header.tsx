'use client';

import React, { useState } from 'react';
import { Phone, Search, Menu, X, ChevronDown, Home, FolderOpen, Settings, Newspaper, ArrowRight, MapPin, Users } from 'lucide-react';

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

// Данные для поиска по сайту
const searchData = [
  // О компании
  {
    title: 'О компании НарПромСервис',
    content: 'Производство и модернизация промышленного оборудования, металлоконструкций, сварочные работы',
    section: 'О компании',
    href: '#about',
    icon: Home,
    tags: ['производство', 'оборудование', 'металлоконструкции', 'сварка']
  },
  {
    title: 'Группа компаний',
    content: 'НарПромСервис входит в группу компаний ELINAR, специализирующуюся на промышленном оборудовании',
    section: 'О компании',
    href: '#about',
    icon: Users,
    tags: ['группа компаний', 'ELINAR', 'промышленное оборудование']
  },

  // Проекты
  {
    title: 'Промышленные проекты',
    content: 'Реализация проектов по производству и модернизации промышленного оборудования',
    section: 'Проекты',
    href: '#projects',
    icon: FolderOpen,
    tags: ['проекты', 'промышленное оборудование', 'модернизация']
  },
  {
    title: 'Металлоконструкции',
    content: 'Изготовление металлоконструкций для промышленных объектов',
    section: 'Проекты',
    href: '#projects',
    icon: FolderOpen,
    tags: ['металлоконструкции', 'изготовление', 'промышленные объекты']
  },

  // Услуги
  {
    title: 'Электромонтажные работы',
    content: 'Выполнение электромонтажных работ на промышленных объектах',
    section: 'Услуги',
    href: '#services',
    icon: Settings,
    tags: ['электромонтаж', 'электрика', 'промышленные объекты']
  },
  {
    title: 'Сварочные работы',
    content: 'Профессиональные сварочные работы любой сложности',
    section: 'Услуги',
    href: '#services',
    icon: Settings,
    tags: ['сварка', 'сварочные работы', 'металл']
  },
  {
    title: 'Модернизация оборудования',
    content: 'Модернизация и ремонт промышленного оборудования',
    section: 'Услуги',
    href: '#services',
    icon: Settings,
    tags: ['модернизация', 'ремонт', 'оборудование']
  },
  {
    title: 'Токарно-фрезерные работы',
    content: 'Токарные и фрезерные работы на современном оборудовании',
    section: 'Услуги',
    href: '#services',
    icon: Settings,
    tags: ['токарные работы', 'фрезерные работы', 'обработка металла']
  },

  // Новости
  {
    title: 'Новости компании',
    content: 'Актуальные новости о проектах и достижениях НарПромСервис',
    section: 'Новости',
    href: '#news',
    icon: Newspaper,
    tags: ['новости', 'проекты', 'достижения']
  },

  // Контакты
  {
    title: 'Контакты НарПромСервис',
    content: 'Свяжитесь с нами для обсуждения ваших проектов и получения консультации',
    section: 'Контакты',
    href: '#contacts',
    icon: MapPin,
    tags: ['контакты', 'связь', 'консультация', 'проекты']
  },
  {
    title: 'Телефон: +7 (495) 509-03-16',
    content: 'Основной телефон для связи с НарПромСервис',
    section: 'Контакты',
    href: '#contacts',
    icon: Phone,
    tags: ['телефон', 'звонок', 'связь']
  }
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof searchData>([]);
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setCurrentLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
      setSearchResults([]);
      setIsSearchResultsOpen(false);
    }
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  // Функция поиска
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearchResultsOpen(false);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = searchData.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.content.toLowerCase().includes(lowerQuery) ||
      item.section.toLowerCase().includes(lowerQuery) ||
      item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );

    setSearchResults(results);
    setIsSearchResultsOpen(true);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    performSearch(value);
  };

  const handleResultClick = (href: string) => {
    setIsSearchOpen(false);
    setIsSearchResultsOpen(false);
    setSearchQuery('');
    setSearchResults([]);

    // Плавная прокрутка к секции
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeSearchResults = () => {
    setIsSearchResultsOpen(false);
  };

  return (
    <>
      {/* Основной хедер */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">

            {/* Логотипы */}
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6 min-w-[200px] md:min-w-[320px]">
              <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
                {/* Логотип НарПромСервис */}
                <div className="h-12 md:h-16 flex items-center justify-center">
                  <a href="/" className="block group">
                    <img
                      src="/logos/narprom-logo.jpg"
                      alt="НарПромСервис"
                      className="h-8 md:h-10 lg:h-12 w-auto object-contain group-hover:scale-110 group-hover:drop-shadow-xl transition-all duration-500 ease-out filter group-hover:brightness-110"
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
                    <div className="hidden h-8 md:h-10 lg:h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xs md:text-sm rounded-lg px-2 md:px-3 group-hover:scale-110 group-hover:drop-shadow-xl transition-all duration-500 ease-out shadow-lg">
                      НарПромСервис
                    </div>
                  </a>
                </div>

                {/* Разделитель - скрыт на мобильных */}
                <div className="hidden md:block w-px h-8 md:h-12 bg-gray-300" />

                {/* Логотип ELINAR - скрыт на мобильных */}
                <div className="hidden md:flex h-12 md:h-16 items-center justify-center">
                  <a
                    href="https://elinar.ru/"
                    target="_blank"
                    rel="noopener"
                    className="block group"
                  >
                    <img
                      src="/logos/elinar-logo.jpg"
                      alt="ELINAR"
                      className="h-8 md:h-10 w-auto object-contain group-hover:scale-110 group-hover:drop-shadow-xl transition-all duration-500 ease-out filter group-hover:brightness-110"
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
                    <div className="hidden h-8 md:h-10 flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold text-xs md:text-sm rounded-lg px-2 md:px-3 group-hover:scale-110 group-hover:drop-shadow-xl transition-all duration-500 ease-out shadow-lg">
                      ELINAR
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Десктопная навигация - современный стиль */}
            <nav className="hidden lg:flex items-center gap-2 ml-8">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                // Современные цвета для каждой иконки
                const iconColors = [
                  'from-orange-500 to-orange-600', // О компании - оранжевый
                  'from-blue-500 to-blue-600', // Проекты - синий
                  'from-emerald-500 to-emerald-600', // Услуги - зеленый
                  'from-purple-500 to-purple-600', // Новости - фиолетовый
                  'from-cyan-500 to-cyan-600', // Контакты - циан
                ];

                return (
                  <div key={item.href} className="relative group">
                    <a
                      href={item.href}
                      className="flex items-center gap-3 px-5 py-3 text-gray-700 font-medium text-sm transition-all duration-300 rounded-xl hover:text-white hover:shadow-lg group overflow-hidden relative"
                    >
                      {/* Фоновый градиент при hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${iconColors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>

                      {/* Иконка */}
                      {IconComponent && (
                        <div className={`w-8 h-8 bg-gradient-to-r ${iconColors[index]} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative z-10`}>
                          <IconComponent size={16} className="text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      )}

                      {/* Текст */}
                      <span className="relative z-10 whitespace-nowrap font-semibold group-hover:text-white transition-colors duration-300">
                        {item.label}
                      </span>

                      {/* Подчеркивание при hover */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full"></div>
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Правая часть */}
            <div className="flex items-center gap-2 md:gap-3">

              {/* Языковой переключатель - скрыт на мобильных */}
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

              {/* Иконки поиска и звонка - скрыты на мобильных */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={toggleSearch}
                  className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <Search size={18} className="text-white" />
                </button>

                <button
                  onClick={toggleContact}
                  className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-600 transition-colors duration-300"
                >
                  <Phone size={18} className="text-white" />
                </button>
              </div>

              {/* Мобильное бургер-меню - УЛУЧШЕННЫЙ */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden w-12 h-12 flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-400 hover:border-blue-500"
              >
                {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
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
          <div className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
            {/* Заголовок мобильного меню */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Меню</h3>
              <button
                onClick={closeMobileMenu}
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Мобильная навигация - современный стиль */}
            <nav className="p-4 sm:p-6 space-y-2">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                // Современные цвета для каждой иконки
                const iconColors = [
                  'from-orange-500 to-orange-600', // О компании - оранжевый
                  'from-blue-500 to-blue-600', // Проекты - синий
                  'from-emerald-500 to-emerald-600', // Услуги - зеленый
                  'from-purple-500 to-purple-600', // Новости - фиолетовый
                  'from-cyan-500 to-cyan-600', // Контакты - циан
                ];

                return (
                  <div key={item.href} className="relative group">
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 text-gray-700 font-semibold text-sm sm:text-base transition-all duration-300 rounded-xl hover:text-white hover:shadow-lg group overflow-hidden relative"
                    >
                      {/* Фоновый градиент при hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${iconColors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>

                      {/* Иконка */}
                      {IconComponent && (
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${iconColors[index]} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative z-10`}>
                          <IconComponent size={16} className="sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      )}

                      {/* Текст */}
                      <span className="relative z-10 whitespace-nowrap group-hover:text-white transition-colors duration-300">
                        {item.label}
                      </span>

                      {/* Стрелка */}
                      <div className="ml-auto relative z-10">
                        <ArrowRight size={14} className="sm:w-4 sm:h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Мобильный языковой переключатель */}
            <div className="p-4 sm:p-6 border-t border-gray-200">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wide">Язык</h4>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang)}
                      className={`text-left px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-200 flex items-center gap-3 sm:gap-4 ${
                        currentLanguage.code === lang.code
                          ? 'bg-cyan-50 text-cyan-600 border-2 border-cyan-200'
                          : 'hover:bg-gray-50 text-gray-800 border-2 border-transparent'
                      }`}
                    >
                      <span className="text-lg sm:text-xl">{lang.flag}</span>
                      <span className="font-bold text-sm sm:text-base">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Мобильные контактные иконки */}
            <div className="p-4 sm:p-6 border-t border-gray-200">
              <h4 className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wide mb-3 sm:mb-4">Контакты</h4>
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    closeMobileMenu();
                    toggleSearch();
                  }}
                  className="flex-1 h-12 sm:h-14 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <Search size={18} className="sm:w-5 sm:h-5 text-white" />
                  <span className="text-white font-bold text-sm sm:text-base">Поиск</span>
                </button>

                <button
                  onClick={() => {
                    closeMobileMenu();
                    // Инициализация телефонного звонка
                    window.location.href = 'tel:+74955090316';
                  }}
                  className="flex-1 h-12 sm:h-14 bg-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:bg-cyan-600 transition-colors duration-300"
                >
                  <Phone size={18} className="sm:w-5 sm:h-5 text-white" />
                  <span className="text-white font-bold text-sm sm:text-base">Звонок</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer для fixed header */}
      <div className="h-24" />

      {/* Строка поиска */}
      {isSearchOpen && (
        <div className="fixed top-24 left-0 right-0 z-40 bg-white shadow-lg border-b border-gray-200 animate-in slide-in-from-top-2 duration-300">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  placeholder="Поиск по сайту..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm"
                  autoFocus
                />
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold text-sm"
              >
                Найти
              </button>
              <button
                type="button"
                onClick={toggleSearch}
                className="px-4 py-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-300 text-sm"
              >
                Отмена
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Модальное окно контактов */}
      {isContactOpen && (
        <>
          {/* Затемняющий overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleContact}
          />

          {/* Модальное окно */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Контакты</h3>
              <button
                onClick={toggleContact}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Телефон */}
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Телефон</p>
                  <p className="text-lg font-bold text-gray-800">+7 (495) 509-03-16</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-lg font-bold text-gray-800">info@narpromservice.ru</p>
                </div>
              </div>

              {/* Адрес */}
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Адрес</p>
                  <p className="text-lg font-bold text-gray-800">г. Москва, ул. Примерная, 123</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={toggleContact}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-semibold"
              >
                Закрыть
              </button>
              <button
                onClick={() => {
                  // Инициализация телефонного звонка
                  window.location.href = 'tel:+74955090316';
                  toggleContact();
                }}
                className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold"
              >
                Позвонить
              </button>
            </div>
          </div>
        </>
      )}

      {/* Модальное окно результатов поиска */}
      {isSearchResultsOpen && (
        <>
          {/* Затемняющий overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-30"
            onClick={closeSearchResults}
          />

          <div className="fixed top-24 left-0 right-0 z-40 bg-white shadow-xl border-b border-gray-200 animate-in slide-in-from-top-2 duration-300 max-h-[70vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Search size={24} className="text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Результаты поиска: "{searchQuery}"
                  </h3>
                </div>
                <button
                  onClick={closeSearchResults}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>

              {searchResults.length === 0 ? (
                <div className="text-center py-12">
                  <Search size={48} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">По вашему запросу ничего не найдено</p>
                  <p className="text-gray-400 text-sm">Попробуйте изменить поисковый запрос</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {searchResults.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                        onClick={() => handleResultClick(item.href)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">
                            <IconComponent size={24} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                              {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                              {item.content}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-gray-500 text-xs">
                                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                                  {item.section}
                                </span>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-500">
                                  {item.tags.slice(0, 3).join(', ')}
                                  {item.tags.length > 3 && '...'}
                                </span>
                              </div>
                              <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-gray-500 text-sm text-center">
                  Найдено результатов: {searchResults.length}
                </p>
              </div>
            </div>
          </div>
        </>
      )}

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
