'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

interface ContactInfoProps {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  onContactClick?: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  address,
  phone,
  email,
  workingHours,
  onContactClick
}) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
    if (onContactClick) {
      onContactClick();
    }
  };

  const contactItems = [
    {
      icon: <MapPin size={24} className="text-blue-600" />,
      title: 'Адрес',
      content: address,
      action: () => window.open('https://yandex.ru/maps', '_blank'),
      actionText: 'Открыть в картах',
      actionIcon: <ExternalLink size={16} />
    },
    {
      icon: <Phone size={24} className="text-blue-600" />,
      title: 'Телефон',
      content: phone,
      action: () => window.open(`tel:${phone}`, '_self'),
      actionText: 'Позвонить',
      actionIcon: <Phone size={16} />
    },
    {
      icon: <Mail size={24} className="text-blue-600" />,
      title: 'Email',
      content: email,
      action: () => window.open(`mailto:${email}`, '_self'),
      actionText: 'Написать',
      actionIcon: <Mail size={16} />
    },
    {
      icon: <Clock size={24} className="text-blue-600" />,
      title: 'Режим работы',
      content: workingHours,
      action: null,
      actionText: '',
      actionIcon: null
    }
  ];

  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -4 }}
        >
          <div className="p-6">
            <div className="flex items-start gap-4">
              {/* Иконка */}
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {item.icon}
              </motion.div>

              {/* Контент */}
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {item.content}
                </p>

                {/* Кнопка действия */}
                {item.action && (
                  <motion.button
                    onClick={item.action}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200 font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.actionIcon}
                    {item.actionText}
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Кнопка "Связаться с нами" */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="text-xl font-bold mb-3">Нужна консультация?</h3>
        <p className="text-blue-100 mb-6 text-sm">
          Оставьте заявку, и наш специалист свяжется с вами в течение 24 часов
        </p>
        <motion.button
          onClick={handleContactClick}
          className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Связаться с нами
        </motion.button>
      </motion.div>

      {/* Модальное окно с формой */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default ContactInfo;
