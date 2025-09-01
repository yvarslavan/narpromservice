import React from 'react';
import Card from '../ui/Card';
import { FileText, MapPin, Calculator, FileCheck } from 'lucide-react';

const StepsSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Обсуждение проекта',
      description: 'Оставьте заявку и наш менеджер свяжется с вами для обсуждения всех деталей работы',
      icon: <FileText size={24} />
    },
    {
      number: '02',
      title: 'Выезд на объект',
      description: 'Наши специалисты приедут к вам на объект для оценки и расчета стоимости',
      icon: <MapPin size={24} />
    },
    {
      number: '03',
      title: 'Составить смету',
      description: 'Менеджер рассчитает вам полную смету под ваш объект',
      icon: <Calculator size={24} />
    },
    {
      number: '04',
      title: 'Заключить договор',
      description: 'Подписать договор и приступить к работе на объекте',
      icon: <FileCheck size={24} />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        {/* Заголовок секции - стили из дизайн-системы */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-text-heading uppercase tracking-wider mb-4">
            4 этапа для начала работ
          </h2>
        </div>

        {/* Сетка карточек этапов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              title={step.title}
              description={step.description}
              variant="feature"
              number={step.number}
              icon={step.icon}
              className="text-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
