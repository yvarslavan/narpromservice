'use client';

import React, { useState } from 'react';
import { Phone, Search, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollEffect } from '../hooks/useScrollEffect';

// Конфигурация языков
const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

// Пункты навигации
const navigationItems = [
  { href: '#about', label: 'О компании' },
  { href: '#projects', label: 'Проекты' },
  { href: '#services', label: 'Услуги' },
  { href: '#news', label: 'Новости' },
  { href: '#contacts', label: 'Контакты' },
];

const Header: React.FC = () => {
  const { isScrolled } = useScrollEffect(20);
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
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-100/95 via-gray-50/95 to-gray-100/95 backdrop-blur-sm transition-all duration-300 -mb-px"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
      >
      <div className="max-w-container mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-3'
          }`}>

            {/* Логотипы */}
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
            <div className="flex items-center gap-4">
              {/* Логотип НарПромСервис */}
              <div className="h-12 flex items-center justify-center">
                  <motion.a
                    href="/"
                    className="block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                  <img
                    src="https://optim.tildacdn.com/tild6237-6261-4663-b064-336361316438/-/resize/249x/-/format/webp/LOGOTYPE_NAR_PROM_SE.png.webp"
                    alt="НарПромСервис"
                      className="h-10 w-auto object-contain transition-all duration-300"
                  />
                  </motion.a>
              </div>

              {/* Разделитель */}
                <div className="w-px h-8 bg-gradient-to-b from-gray-200 to-gray-400" />

              {/* Логотип ELINAR */}
              <div className="h-12 flex items-center justify-center">
                  <motion.a
                    href="https://elinar.ru/"
                    target="_blank"
                    rel="noopener"
                    className="block"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                  <img
                    src="https://optim.tildacdn.com/tild6637-3532-4263-b061-653564373337/-/resize/104x/-/format/webp/logo-en_1.png.webp"
                    alt="ELINAR"
                      className="h-8 w-auto object-contain transition-all duration-300"
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Десктопная навигация */}
            <nav className="hidden lg:flex items-center gap-1 flex-nowrap">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                                    <a
                    href={item.href}
                    className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 rounded-lg hover:text-orange-500 group overflow-hidden block"
                  >
                    <span className="relative z-10 transition-colors duration-300">{item.label}</span>

                                                                                                                                                                                    {/* Яркая подчеркивающая линия */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full z-20"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />

                    {/* Блестящий эффект */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/30 to-transparent rounded-lg z-10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Правая часть */}
            <div className="flex items-center gap-4">

              {/* Языковой переключатель */}
              <div className="relative hidden md:block">
                <motion.button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-cyan-500 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md relative overflow-hidden group"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.95)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Яркая подчеркивающая линия */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Блестящий эффект */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent rounded-xl"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />

                  <div className="relative z-10 flex items-center gap-2">
                    <span className="text-lg">{currentLanguage.flag}</span>
                    <span className="text-sm font-semibold">{currentLanguage.code.toUpperCase()}</span>
                  </div>

                  <motion.div
                    animate={{ rotate: isLanguageDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <ChevronDown size={14} />
                  </motion.div>
                </motion.button>

                {/* Языковой dropdown */}
                <AnimatePresence>
                  {isLanguageDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 overflow-hidden min-w-[140px] z-50"
                    >
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang)}
                          className="w-full text-left px-4 py-3 hover:bg-cyan-50 transition-all duration-200 flex items-center gap-3 group relative overflow-hidden"
                          whileHover={{ backgroundColor: '#f0f9ff' }}
                        >
                          {/* Блестящий эффект для элементов */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          />

                          <span className="text-lg relative z-10">{lang.flag}</span>
                          <div className="relative z-10 flex flex-col">
                            <span className="text-sm font-semibold text-gray-800">{lang.code.toUpperCase()}</span>
                            <span className="text-xs text-gray-500">{lang.name}</span>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

                            {/* Иконки поиска и звонка */}
              <div className="flex items-center gap-2">
                <motion.button
                  className="w-11 h-11 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-full flex items-center justify-center shadow-md-2 group relative overflow-hidden"
                  whileHover={{
                    scale: 1.2,
                    rotate: 15,
                    boxShadow: "0 0 30px rgba(25, 118, 210, 0.6)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Пульсирующий эффект */}
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <Search size={18} className="text-white group-hover:scale-125 transition-transform duration-300 relative z-10" />
                </motion.button>

                <motion.button
                  className="w-11 h-11 bg-gradient-to-br from-accent-cyan to-accent-cyan-end rounded-full flex items-center justify-center shadow-md-2 group relative overflow-hidden"
                  whileHover={{
                    scale: 1.2,
                    rotate: -15,
                    boxShadow: "0 0 30px rgba(0, 188, 212, 0.6)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Пульсирующий эффект */}
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  <Phone size={18} className="text-white group-hover:scale-125 transition-transform duration-300 relative z-10" />
                </motion.button>
              </div>

              {/* Мобильное бургер-меню */}
              <motion.button
                onClick={toggleMobileMenu}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Затемняющий overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Выезжающее меню */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-md-24 z-50 lg:hidden overflow-y-auto"
            >
              {/* Заголовок мобильного меню */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">Меню</h3>
                <button
                  onClick={closeMobileMenu}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X size={20} />
              </button>
            </div>

              {/* Мобильная навигация */}
              <nav className="p-6 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block px-4 py-3 text-gray-700 font-medium hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-all duration-200 relative group"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-blue to-accent-indigo rounded-r"
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Мобильный языковой переключатель */}
              <div className="p-6 border-t border-gray-100">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Язык</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang)}
                        className={`text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                          currentLanguage.code === lang.code
                            ? 'bg-blue-50 text-brand-blue border border-blue-200'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </motion.button>
                    ))}
            </div>
          </div>
              </div>

              {/* Мобильные контактные иконки */}
              <div className="p-6 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Контакты</h4>
                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 h-12 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-lg flex items-center justify-center gap-3 shadow-md-2"
                    whileHover={{ scale: 1.02, rotate: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Search size={18} className="text-white" />
                    <span className="text-white font-medium text-sm">Поиск</span>
                  </motion.button>

                  <motion.button
                    className="flex-1 h-12 bg-gradient-to-br from-accent-cyan to-accent-cyan-end rounded-lg flex items-center justify-center gap-3 shadow-md-2"
                    whileHover={{ scale: 1.02, rotate: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={18} className="text-white" />
                    <span className="text-white font-medium text-sm">Звонок</span>
                  </motion.button>
        </div>
      </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer для fixed header */}
      <div className="h-20" />

      {/* Click outside handler для языкового dropdown */}
      {isLanguageDropdownOpen && (
        <button
          className="fixed inset-0 z-30 bg-transparent border-none cursor-default"
          onClick={() => setIsLanguageDropdownOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsLanguageDropdownOpen(false);
            }
          }}
          aria-label="Закрыть языковое меню"
        />
      )}
    </>
  );
};

export default Header;
