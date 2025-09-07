'use client';

import { useEffect, useState } from 'react';

interface StatisticItem {
  id: number;
  value: string;
  label: string;
  icon: string;
  suffix?: string;
}

const statistics: StatisticItem[] = [
  {
    id: 1,
    value: '15',
    label: 'Лет на рынке',
    icon: '📅',
    suffix: '+'
  },
  {
    id: 2,
    value: '500',
    label: 'Завершённых проектов',
    icon: '🏗️',
    suffix: '+'
  },
  {
    id: 3,
    value: '50',
    label: 'Довольных клиентов',
    icon: '😊',
    suffix: '+'
  },
  {
    id: 4,
    value: '24',
    label: 'Часа поддержки',
    icon: '🕐',
    suffix: '/7'
  }
];

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({});

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Запускаем анимацию счётчиков
        statistics.forEach((stat) => {
          const numericValue = parseInt(stat.value);
          if (!isNaN(numericValue)) {
            animateCounter(stat.id, numericValue);
          }
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });

    const element = document.getElementById('statistics-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const animateCounter = (id: number, targetValue: number) => {
    const duration = 2000; // 2 секунды
    const steps = 60;
    const stepValue = targetValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentValue = Math.min(Math.floor(stepValue * currentStep), targetValue);

      setAnimatedValues(prev => ({
        ...prev,
        [id]: currentValue
      }));

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues(prev => ({
          ...prev,
          [id]: targetValue
        }));
      }
    }, duration / steps);
  };

  return (
    <section
      id="statistics-section"
      className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наши достижения в цифрах
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            За годы работы мы накопили богатый опыт и достигли впечатляющих результатов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className={`text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${stat.id * 0.2}s`
              }}
            >
              <div className="text-4xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {isVisible ? (
                  <>
                    {animatedValues[stat.id] || 0}
                    {stat.suffix}
                  </>
                ) : (
                  '0' + stat.suffix
                )}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Почему выбирают нас?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Гарантия качества
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  Все работы выполняются в соответствии с ГОСТ и техническими требованиями
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Быстрые сроки
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  Оптимизированные процессы позволяют выполнять проекты в срок
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Надёжность
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  Проверенные решения и долгосрочные гарантии на все виды работ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
