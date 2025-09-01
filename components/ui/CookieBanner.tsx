'use client';

import React, { useState, useEffect } from 'react';
import { X, Settings, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

interface CookieBannerProps {
  onAcceptAll?: () => void;
  onRejectAll?: () => void;
  onSettings?: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({
  onAcceptAll,
  onRejectAll,
  onSettings
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true, // Всегда включены
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Проверяем, есть ли сохраненное согласие
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const settings = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    setIsVisible(false);
    onAcceptAll?.();
  };

  const handleRejectAll = () => {
    const settings = {
      necessary: true, // Всегда включены
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    setIsVisible(false);
    onRejectAll?.();
  };

  const handleSaveSettings = () => {
    const settings = {
      ...cookieSettings,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSettingsChange = (type: keyof typeof cookieSettings) => {
    if (type === 'necessary') return; // Нельзя отключить необходимые cookies

    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md-24 border border-gray-200 p-6">
          {!showSettings ? (
            // Основной баннер
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Использование файлов cookie
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Мы используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента.
                  Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
                  <a
                    href="/cookie-policy"
                    className="text-brand-blue hover:underline font-medium"
                  >
                    Политикой использования файлов cookie
                  </a>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button
                  onClick={handleRejectAll}
                  className="px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-all duration-200"
                >
                  Отклонить
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-2 text-brand-blue bg-blue-50 hover:bg-blue-100 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Настроить
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-gradient-primary hover:bg-gradient-primary-hover text-white rounded-lg font-medium transition-all duration-200 shadow-md-2 hover:shadow-md-4"
                >
                  Принять все
                </Button>
              </div>
            </div>
          ) : (
            // Настройки cookies
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Настройки файлов cookie
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Необходимые cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Необходимые</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Эти файлы cookie необходимы для работы сайта и не могут быть отключены.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-500">Всегда включены</span>
                  </div>
                </div>

                {/* Аналитические cookies */}
                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Аналитические</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Помогают нам понять, как посетители взаимодействуют с сайтом.
                    </p>
                  </div>
                  <button
                    onClick={() => handleSettingsChange('analytics')}
                    className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                      cookieSettings.analytics ? 'bg-brand-blue' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                        cookieSettings.analytics ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>

                {/* Маркетинговые cookies */}
                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Маркетинговые</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Используются для показа релевантной рекламы и отслеживания эффективности кампаний.
                    </p>
                  </div>
                  <button
                    onClick={() => handleSettingsChange('marketing')}
                    className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                      cookieSettings.marketing ? 'bg-brand-blue' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                        cookieSettings.marketing ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>

                {/* Предпочтения */}
                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Предпочтения</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Запоминают ваши настройки и предпочтения для персонализации опыта.
                    </p>
                  </div>
                  <button
                    onClick={() => handleSettingsChange('preferences')}
                    className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                      cookieSettings.preferences ? 'bg-brand-blue' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                        cookieSettings.preferences ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <Button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-all duration-200"
                >
                  Отмена
                </Button>
                <Button
                  onClick={handleSaveSettings}
                  className="px-6 py-2 bg-gradient-primary hover:bg-gradient-primary-hover text-white rounded-lg font-medium transition-all duration-200 shadow-md-2 hover:shadow-md-4"
                >
                  Сохранить настройки
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
