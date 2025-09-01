import React from 'react';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-accent">
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - контент */}
          <div className="space-y-8">
            {/* Заголовок - стили из дизайн-системы для темного фона */}
            <h2 className="text-h1 font-bold text-white uppercase tracking-wider leading-tight">
              Полный спектр услуг<br />
              по изготовлению, монтажу<br />
              и сервисному обслуживанию<br />
              оборудования.<br />
              Изготовление<br />
              металлоконструкций.
            </h2>

            <div className="space-y-4 text-white">
              <p className="text-lg opacity-90">
                Опыт работы на беспилотных консультациях,
                работа с объектами с взрывоопасной средой.
              </p>

              <div className="space-y-2">
                <p className="font-bold">Мы предлагаем полный цикл услуг:</p>
                <p>от проектирования и монтажа до пуско-наладочной и регулярного технического обслуживания.</p>
                <p>Обратитесь к нам, чтобы обеспечить надежную работу вашего оборудования и минимизировать риски аварийных ситуаций!</p>
              </div>
            </div>

            <Button variant="secondary" className="bg-white text-brand-blue hover:bg-neutral-light">
              Получить консультацию
            </Button>
          </div>

          {/* Правая часть - изображение */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Заглушка для изображения */}
              <div className="w-full max-w-lg h-96 rounded-large overflow-hidden shadow-md-8">
                <img
                  src="/images/project-1.jpg"
                  alt="Изображение производства"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-medium mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">01</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Опыт работы</h4>
            <p className="text-white opacity-80">
              Более 15 лет успешной работы в сфере промышленного оборудования
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-medium mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">02</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Системная работа и результат</h4>
            <p className="text-white opacity-80">
              Четкое планирование и профессиональное исполнение проектов
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-medium mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">03</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Индивидуальный подход</h4>
            <p className="text-white opacity-80">
              Разработка решений под каждый конкретный объект и задачу
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
