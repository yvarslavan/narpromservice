import React from 'react';
import Card from '../ui/Card';
import { Factory, Wheat, Building } from 'lucide-react';

const CompanyGroupSection: React.FC = () => {
  const companies = [
    {
      title: 'Промышленность',
      description: 'Производство продукции электротехнического назначения, изделий из пластмасс, производство упаковочных материалов',
      icon: <Factory size={24} />,
      link: 'Подробнее'
    },
    {
      title: 'Сельское хозяйство',
      description: 'Производство мяса, молока, зерновых культур. Племенной завод по разведению коров черно пестрой породы',
      icon: <Wheat size={24} />,
      link: 'Подробнее'
    },
    {
      title: 'Девелопмент',
      description: 'Промышленный парк «Калуга», индустриальный парк «Ревдестр», аренда жилья и промышленных объектов, продажа земельных участков',
      icon: <Building size={24} />,
      link: 'Подробнее'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-text-heading uppercase tracking-wider">
            Группа компаний
          </h2>
        </div>

        {/* Сетка карточек компаний */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <Card
              key={index}
              title={company.title}
              description={company.description}
              variant="service"
              icon={company.icon}
              iconButton={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyGroupSection;
