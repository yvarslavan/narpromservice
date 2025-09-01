import React from 'react';
import Card from '../ui/Card';
import { Zap, Building2, Wrench, Hammer, Flame, Settings } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Электромонтажные работы',
      icon: <Zap size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Изготовление металлоконструкций для строительства и производства',
      icon: <Building2 size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Работы по монтажу и сервисному обслуживанию',
      icon: <Wrench size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Токарно - фрезерные услуги',
      icon: <Settings size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Сварочные работы',
      icon: <Flame size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Сопровождение модернизации оборудования',
      icon: <Hammer size={24} />,
      iconButton: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-text-heading uppercase tracking-wider">
            Направления<br />
            деятельности и услуги
          </h2>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description=""
              variant="service"
              icon={service.icon}
              iconButton={service.iconButton}
              className="h-48 flex flex-col justify-between"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
