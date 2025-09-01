'use client';

import React from 'react';

const TestHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">ТЕСТОВЫЙ ХЕДЕР</div>
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#about" className="hover:text-yellow-300">О компании</a>
            <a href="#projects" className="hover:text-yellow-300">Проекты</a>
            <a href="#services" className="hover:text-yellow-300">Услуги</a>
            <a href="#news" className="hover:text-yellow-300">Новости</a>
            <a href="#contacts" className="hover:text-yellow-300">Контакты</a>
          </nav>
          <div className="text-sm">Язык: RU</div>
        </div>
      </div>
    </header>
  );
};

export default TestHeader;
