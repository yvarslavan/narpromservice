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
    <section id="contacts" className="py-20 bg-neutral-light">
      <div className="max-w-container mx-auto px-4">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 uppercase tracking-wider mb-4">
            Контакты
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
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
