'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, User, AlertCircle, CheckCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  onSubmit?: (data: { name: string; phone: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const getCheckboxClasses = () => {
    if (errors.consent) return 'border-red-400 bg-red-50';
    if (consentChecked) return 'border-blue-500 bg-blue-500';
    return 'border-gray-300 bg-white hover:border-blue-400';
  };

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    general: '',
    consent: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const validateForm = () => {
    const newErrors = { name: '', phone: '', general: '', consent: '' };
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

    if (!consentChecked) {
      newErrors.consent = 'Необходимо согласие на обработку персональных данных';
      isValid = false;
    }

    if (!isValid) {
      newErrors.general = 'Пожалуйста, заполните все обязательные поля и дайте согласие';
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
      setErrors({ name: '', phone: '', general: '', consent: '' });

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
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
                {/* Логотип */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/logos/narprom-logo.jpg"
                alt="НарПромСервис"
                width={80}
                height={80}
                className="rounded-3xl shadow-xl border-4 border-white"
              />
              {/* Градиентное свечение */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              {/* Анимированное кольцо */}
              <motion.div
                className="absolute -inset-1 border-2 border-transparent bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl"
                style={{ backgroundClip: 'padding-box' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Заголовок и описание */}
        <div className="space-y-3">
          <motion.h2
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Свяжитесь с нами
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Мы ответим в течение 24 часов и предложим лучшее решение для вашего проекта
          </motion.p>

          {/* Статус онлайн */}
          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-green-600 bg-green-50 px-4 py-2 rounded-full mx-auto w-fit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Онлайн консультация</span>
          </motion.div>
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
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Ваше имя *
        </label>
        <div className="relative group">
          <motion.div
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 z-10 ${
              errors.name ? 'text-red-500' : 'text-gray-400 group-focus-within:text-blue-500'
            }`}
            whileFocus={{ scale: 1.1, x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <User size={20} />
          </motion.div>

          <motion.input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Введите ваше полное имя"
            className={`w-full px-4 py-5 pl-12 pr-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium ${
              errors.name
                ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-4 focus:ring-red-100 shadow-lg shadow-red-100/50'
                : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 group-hover:border-blue-300 hover:shadow-lg focus:shadow-xl shadow-blue-100/50'
            }`}
            whileFocus={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          />

          {/* Декоративная подчеркивающая линия */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 ${
              errors.name ? 'bg-red-400' : 'bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500'
            }`}
            initial={{ scaleX: 0 }}
            whileFocus={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <AnimatePresence>
          {errors.name && (
            <motion.div
              className="flex items-center gap-2 text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg border border-red-200"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <AlertCircle size={14} />
              <span>{errors.name}</span>
            </motion.div>
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
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Номер телефона *
        </label>
        <div className="relative group">
          <motion.div
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 z-10 ${
              errors.phone ? 'text-red-500' : 'text-gray-400 group-focus-within:text-green-500'
            }`}
            whileFocus={{ scale: 1.1, x: 2, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
          >
            <Phone size={20} />
          </motion.div>

          <motion.input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="+7 (999) 123-45-67"
            className={`w-full px-4 py-5 pl-12 pr-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium ${
              errors.phone
                ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-4 focus:ring-red-100 shadow-lg shadow-red-100/50'
                : 'border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 group-hover:border-green-300 hover:shadow-lg focus:shadow-xl shadow-green-100/50'
            }`}
            whileFocus={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          />

          {/* Декоративная подчеркивающая линия */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 ${
              errors.phone ? 'bg-red-400' : 'bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500'
            }`}
            initial={{ scaleX: 0 }}
            whileFocus={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <AnimatePresence>
          {errors.phone && (
            <motion.div
              className="flex items-center gap-2 text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg border border-red-200"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <AlertCircle size={14} />
              <span>{errors.phone}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Кнопка отправки */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-2"
      >
        <motion.button
          type="submit"
          disabled={isSubmitting || !consentChecked}
          className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:grayscale group shadow-xl hover:shadow-2xl focus:shadow-2xl"
          whileHover={!consentChecked ? {} : {
            scale: 1.02,
            y: -2,
            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
          }}
          whileTap={!consentChecked ? {} : { scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {/* Блестящий эффект */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={!consentChecked ? {} : { x: '100%' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Фоновый эффект свечения */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

          {/* Содержимое кнопки */}
          <div className="relative z-10 flex items-center justify-center gap-3">
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full" />
                </motion.div>
                <span>Отправляем заявку...</span>
              </>
            ) : (
              <>
                <motion.div
                  whileHover={!consentChecked ? {} : { scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <Send size={22} />
                </motion.div>
                <span>Отправить заявку</span>
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </>
            )}
          </div>

          {/* Ripple эффект при клике */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-2xl"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 1, opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>

        {/* Подсказка когда кнопка недоступна */}
        <AnimatePresence>
          {!consentChecked && (
            <motion.div
              className="text-center mt-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                Для отправки заявки необходимо дать согласие на обработку персональных данных
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Согласие с политикой */}
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-start gap-3">
          <motion.div
            className="relative mt-1"
            whileTap={{ scale: 0.95 }}
          >
            <input
              type="checkbox"
              id="consent"
              checked={consentChecked}
              onChange={(e) => {
                setConsentChecked(e.target.checked);
                if (e.target.checked && errors.consent) {
                  setErrors(prev => ({ ...prev, consent: '' }));
                }
              }}
              className="sr-only"
            />
            <motion.label
              htmlFor="consent"
              className={`flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer transition-all duration-300 ${getCheckboxClasses()}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence>
                {consentChecked && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle size={12} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.label>
          </motion.div>

          <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
            Я соглашаюсь с{' '}
            <a
              href="#privacy"
              className="text-blue-600 hover:text-blue-700 underline hover:no-underline transition-colors duration-200 font-medium"
            >
              политикой конфиденциальности
            </a>
            {' '}и даю согласие на обработку персональных данных
          </label>
        </div>

        <AnimatePresence>
          {errors.consent && (
            <motion.div
              className="flex items-center gap-2 text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg border border-red-200"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <AlertCircle size={14} />
              <span>{errors.consent}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
