'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, User, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  onSubmit?: (data: { name: string; phone: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    general: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = { name: '', phone: '', general: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Обязательное поле';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Обязательное поле';
      isValid = false;
    } else if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(formData.phone)) {
      newErrors.phone = 'Неверный формат номера';
      isValid = false;
    }

    if (!isValid) {
      newErrors.general = 'Пожалуйста, заполните все обязательные поля';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Очищаем ошибку при изменении поля
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    let formattedNumbers = numbers.startsWith('8') ? '7' + numbers.slice(1) : numbers;

    if (!formattedNumbers.startsWith('7')) {
      formattedNumbers = '7' + formattedNumbers;
    }

    formattedNumbers = formattedNumbers.slice(0, 11);

    if (formattedNumbers.length <= 1) {
      return '+7 (';
    }

    const parts = [
      '+7',
      formattedNumbers.slice(1, 4),
      formattedNumbers.slice(4, 7),
      formattedNumbers.slice(7, 9),
      formattedNumbers.slice(9, 11)
    ];

    let result = parts[0];
    if (parts[1]) result += ' (' + parts[1];
    if (parts[2]) result += ') ' + parts[2];
    if (parts[3]) result += '-' + parts[3];
    if (parts[4]) result += '-' + parts[4];

    return result;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    handleInputChange('phone', formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Имитация отправки данных
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (onSubmit) {
        onSubmit(formData);
      }

      // Сброс формы
      setFormData({ name: '', phone: '' });
      setErrors({ name: '', phone: '', general: '' });

    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setErrors(prev => ({
        ...prev,
        general: 'Произошла ошибка при отправке заявки'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Заголовок */}
      <motion.div
        className="text-center space-y-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
                {/* Заголовок с логотипом */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <Image
            src="/logos/narprom-logo.jpg"
            alt="НарПромСервис"
            width={48}
            height={48}
            className="rounded-xl shadow-md"
          />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Заполните данные
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-xs text-gray-500">НарПромСервис</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-1">
          Наш менеджер свяжется с вами в ближайшее время
        </p>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Онлайн консультация</span>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </motion.div>

      {/* Общая ошибка */}
      {errors.general && (
        <div className="bg-red-500 text-white px-4 py-3 rounded-lg flex items-center gap-2">
          <AlertCircle size={16} />
          <span className="text-sm">{errors.general}</span>
        </div>
      )}

      {/* Поле имени */}
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="relative group">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Ваше имя"
            className={`w-full px-4 py-4 pl-12 border-2 rounded-xl focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm ${
              errors.name
                ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 group-hover:border-blue-300'
            }`}
          />
          <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
            errors.name ? 'text-red-500' : 'text-gray-400 group-focus-within:text-blue-500'
          }`}>
            <User size={20} />
          </div>
          {/* Декоративная полоска */}
          <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
            errors.name
              ? 'bg-red-500'
              : 'bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-focus-within:scale-x-100'
          }`} />
        </div>
        <AnimatePresence>
          {errors.name && (
            <motion.p
              className="text-red-500 text-sm flex items-center gap-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <AlertCircle size={14} />
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Поле телефона */}
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="relative group">
          <input
            type="tel"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="+7 (000) 000-00-00"
            className={`w-full px-4 py-4 pl-12 border-2 rounded-xl focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm ${
              errors.phone
                ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 group-hover:border-blue-300'
            }`}
          />
          <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
            errors.phone ? 'text-red-500' : 'text-gray-400 group-focus-within:text-blue-500'
          }`}>
            <Phone size={20} />
          </div>
          {/* Декоративная полоска */}
          <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
            errors.phone
              ? 'bg-red-500'
              : 'bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-focus-within:scale-x-100'
          }`} />
        </div>
        <AnimatePresence>
          {errors.phone && (
            <motion.p
              className="text-red-500 text-sm flex items-center gap-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <AlertCircle size={14} />
              {errors.phone}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Кнопка отправки */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full relative overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Блестящий эффект */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />

          {/* Содержимое кнопки */}
          <div className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                </motion.div>
                Отправляем...
              </>
            ) : (
              <>
                <CheckCircle size={20} />
                Оставить заявку
              </>
            )}
          </div>
        </motion.button>
      </motion.div>

      {/* Согласие с политикой */}
      <motion.p
        className="text-xs text-gray-500 text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Нажимая на кнопку "Оставить заявку" вы соглашаетесь с{' '}
        <a
          href="#privacy"
          className="underline hover:no-underline text-blue-500 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          политикой конфиденциальности
        </a>
      </motion.p>
    </motion.form>
  );
};

export default ContactForm;
