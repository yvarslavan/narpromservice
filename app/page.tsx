import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import StepsSection from '../components/sections/StepsSection';
import NewsSection from '../components/sections/NewsSection';
import CompanyGroupSection from '../components/sections/CompanyGroupSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import ReliablePartnerSection from '../components/sections/ReliablePartnerSection';
import ContactsSection from '../components/sections/ContactsSection';

export default function HomePage() {
  return (
    <>
      {/* Главный баннер с анимацией */}
      <HeroSection />

      {/* 4 этапа работ */}
      <StepsSection />

      {/* О компании с изображением и статистикой */}
      <AboutSection />

      {/* Группа компаний */}
      <CompanyGroupSection />

      {/* Реализованные проекты */}
      <ProjectsSection />

      {/* Направления деятельности и услуги */}
      <ServicesSection />

      {/* Надежный подрядчик с макетом ноутбука */}
      <ReliablePartnerSection />

      {/* Новости */}
      <NewsSection />

      {/* Контакты с картой */}
      <ContactsSection />
    </>
  );
}
