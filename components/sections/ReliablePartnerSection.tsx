import React from 'react';
import Button from '../ui/Button';

const ReliablePartnerSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - контент */}
          <div className="space-y-8">
            <h2 className="text-h1 font-bold text-text-heading uppercase tracking-wider leading-tight">
              Мы — надежный<br />
              подрядчик<br />
              с подтвержденной<br />
              репутацией
            </h2>

            <div className="space-y-4">
              <p className="text-body font-bold text-text-heading">
                Подробнее в открытых базах контрагентов.
              </p>

              <p className="text-body font-bold text-text-heading">
                Нам доверяют ключевые проекты!
              </p>
            </div>

            {/* Информационная карточка */}
            <div className="bg-bg-light-blue rounded-large p-6 border-l-4 border-brand-blue">
              <p className="text-body font-bold text-text-heading mb-2">
                ПО ДАННЫМ ИЗ<br />
                ОФИЦИАЛЬНЫХ<br />
                ИСТОЧНИКОВ У НАС:
              </p>
              <p className="text-small text-text-body">
                Высокий показатель надежности<br />
                и положительная кредитная история
              </p>
            </div>
          </div>

          {/* Правая часть - макет ноутбука */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Макет ноутбука */}
              <div className="bg-gray-800 rounded-large p-4 shadow-laptop">
                {/* Экран ноутбука */}
                <div className="bg-white rounded-medium p-4 w-80 h-48">
                  {/* Заглушка для контента экрана */}
                  <div className="space-y-3">
                    <div className="h-4 bg-brand-blue rounded w-3/4"></div>
                    <div className="h-3 bg-neutral-medium rounded w-full"></div>
                    <div className="h-3 bg-neutral-medium rounded w-5/6"></div>
                    <div className="h-3 bg-neutral-medium rounded w-4/5"></div>

                    <div className="mt-6 space-y-2">
                      <div className="h-3 bg-neutral-light rounded w-full"></div>
                      <div className="h-3 bg-neutral-light rounded w-3/4"></div>
                    </div>

                    <div className="mt-4">
                      <div className="h-8 bg-brand-blue rounded w-32"></div>
                    </div>
                  </div>
                </div>

                {/* Клавиатура ноутбука */}
                <div className="mt-2 h-16 bg-gray-700 rounded-medium flex items-center justify-center">
                  <div className="grid grid-cols-12 gap-1 w-full px-4">
                    {Array.from({ length: 36 }, (_, i) => (
                      <div key={i} className="h-2 bg-gray-600 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliablePartnerSection;
