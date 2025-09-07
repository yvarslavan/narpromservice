'use client';

import React, { useState } from 'react';
import { Factory, Wheat, Building, ArrowRight, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CompanyGroupSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const companies = [
    {
      title: 'Промышленность',
      description: 'Производство продукции электротехнического назначения, изделий из пластмасс, производство упаковочных материалов',
      icon: Factory,
      link: '#',
      onClick: () => setIsModalOpen(true)
    },
    {
      title: 'Сельское хозяйство',
      description: 'Производство мяса, молока, зерновых культур. Племенной завод по разведению коров черно-пестрой породы',
      icon: Wheat,
      link: '#'
    },
    {
      title: 'Девелопмент',
      description: 'Промышленный округ «Котово», индустриальный парк «Рождество», аренда жилых и промышленных объектов, продажа земельных участков',
      icon: Building,
      link: '#'
    }
  ];

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute -top-10 md:-top-20 -right-10 md:-right-20 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-br from-orange-100/30 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-tr from-blue-100/30 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-r from-orange-50/20 to-blue-50/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Заголовок секции - ГРАДИЕНТНЫЙ */}
          <motion.div
            className="text-center mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                ГРУППА КОМПАНИЙ
              </span>
            </h2>
          </motion.div>

          {/* Сетка карточек компаний */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {companies.map((company, index) => {
              const IconComponent = company.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  className="group"
                >
                  <div
                    className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-orange-200 cursor-pointer"
                    onClick={company.onClick}
                  >
                    {/* Иконка - КРУПНАЯ И ЗАМЕТНАЯ */}
                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent size={24} className="md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>

                    {/* Заголовок */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {company.title}
                    </h3>

                    {/* Описание */}
                    <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-xs md:text-sm">
                      {company.description}
                    </p>

                    {/* Ссылка "Подробнее" */}
                    <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-xs md:text-sm transition-colors duration-300 group/link">
                      Подробнее
                      <ArrowRight size={14} className="md:w-4 md:h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Модальное окно для промышленности */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            {/* Кнопка закрытия */}
            <motion.button
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              onClick={() => setIsModalOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            {/* Контент модального окна */}
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mx-2 md:mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Заголовок модального окна */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 md:p-6 lg:p-8 text-white">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center">
                    <Factory size={24} className="md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Промышленность</h3>
                    <p className="text-orange-100 mt-1 md:mt-2 text-sm md:text-base">Предприятия группы компаний</p>
                  </div>
                </div>
              </div>

              {/* Контент */}
              <div className="p-4 md:p-6 lg:p-8 max-h-[60vh] overflow-y-auto">
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-4 border-orange-500">
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                      ООО «Завод электроизоляционных материалов «Элинар»
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                      ЗЭИМ «Элинар» расположен в Наро-Фоминском городском округе Московской области. Завод является единственным предприятием в России и странах СНГ, которое имеет уникальное производство слюдяных бумаг.
                    </p>
                    <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300 group/link text-sm md:text-base">
                      Перейти на сайт
                      <ExternalLink size={14} className="md:w-4 md:h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-4 border-orange-500">
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                      ПАО «Астраханское стекловолокно»
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                      «АСВ»-российское предприятие по производству тонких стеклянных тканей электротехнического назначения, стеклонитей для кабельной промышленности.
                    </p>
                    <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300 group/link text-sm md:text-base">
                      Перейти на сайт
                      <ExternalLink size={14} className="md:w-4 md:h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-4 border-orange-500">
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                      ООО «Элинар Пласт»
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                      Российско-германское предприятие по производству полимерных профилей. «Элинар Пласт» осуществляет 2 вида производства изделий из пластмасс: экструзионное и литьевое.
                    </p>
                    <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300 group/link text-sm md:text-base">
                      Перейти на сайт
                      <ExternalLink size={14} className="md:w-4 md:h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-4 border-orange-500">
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                      ООО «Деталь-Комплект»
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                      Новое производственное направление группы компаний «Элинар» по изготовлению деталей из слюды, полимерных материалов и слоистых пластиков.
                    </p>
                    <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300 group/link text-sm md:text-base">
                      Перейти на сайт
                      <ExternalLink size={14} className="md:w-4 md:h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-4 border-orange-500">
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                      ООО «Владимирский завод пленочных материалов»
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                      Основная деятельность «Владимирского завода пленочных материалов» – выпуск и реализация полиэтилентерефталатных пленок толщиной от 10 мкм до 70 мкм для электротехнической промышленности и упаковки.
                    </p>
                    <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300 group/link text-sm md:text-base">
                      Перейти на сайт
                      <ExternalLink size={14} className="md:w-4 md:h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CompanyGroupSection;
