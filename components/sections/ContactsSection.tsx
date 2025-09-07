'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import YandexMap from '../ui/YandexMap';
import ContactInfo from '../ui/ContactInfo';

const ContactsSection: React.FC = () => {
  const contactData = {
    address: '143302, Московская область, г. Наро-Фоминск, с. Атепцево, пер. Мичуринский д.1, Атепцево, влад.1',
    phone: '+7 (495) 509-03-16',
    email: 'maletskii@elinar.ru',
    workingHours: 'Пн–Пт с 08:00 до 17:00'
  };

  return (
    <section id="contacts" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-100/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
              Контакты
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы и помочь в решении задач.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая часть - интерактивная карта */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <YandexMap
              address={contactData.address}
              className="mb-6"
            />

            {/* Дополнительная информация о местоположении */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                <MapPin size={24} className="text-blue-600" />
                Как добраться
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Мы находимся в живописном селе Атепцево, в 15 минутах езды от центра Наро-Фоминска.
                Удобная транспортная доступность и парковка для посетителей.
              </p>
            </motion.div>
          </motion.div>

          {/* Правая часть - контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactInfo
              address={contactData.address}
              phone={contactData.phone}
              email={contactData.email}
              workingHours={contactData.workingHours}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
