import React from 'react';
import { ArrowLeft, Cookie, Shield, BarChart3, Target, Settings } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/ui/Button';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md-2">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200">
                <ArrowLeft className="w-4 h-4" />
                На главную
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              Политика использования файлов cookie
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-md-4 p-8 space-y-8">

          {/* Introduction */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Что такое файлы cookie?</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве
              при посещении веб-сайтов. Они помогают сайтам запоминать информацию о ваших предпочтениях
              и обеспечивают более персонализированный опыт использования.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Типы используемых файлов cookie</h2>

            {/* Necessary Cookies */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Необходимые файлы cookie</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Всегда включены
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Эти файлы cookie необходимы для базовой функциональности сайта и не могут быть отключены.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Назначение:</span>
                  <span className="text-gray-600">Аутентификация, безопасность, основные функции</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Срок хранения:</span>
                  <span className="text-gray-600">Сессия или до 1 года</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Примеры:</span>
                  <span className="text-gray-600">PHPSESSID, csrf_token, user_preferences</span>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Аналитические файлы cookie</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Опционально
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Помогают нам понять, как посетители взаимодействуют с сайтом, какие страницы наиболее популярны.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Назначение:</span>
                  <span className="text-gray-600">Анализ трафика, статистика посещений</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Срок хранения:</span>
                  <span className="text-gray-600">До 2 лет</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Примеры:</span>
                  <span className="text-gray-600">_ga, _gid, _gat (Google Analytics)</span>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Маркетинговые файлы cookie</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                  Опционально
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Используются для показа релевантной рекламы и отслеживания эффективности рекламных кампаний.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Назначение:</span>
                  <span className="text-gray-600">Персонализированная реклама, ретаргетинг</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Срок хранения:</span>
                  <span className="text-gray-600">До 1 года</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Примеры:</span>
                  <span className="text-gray-600">_fbp, _gcl_au, ads_prefs</span>
                </div>
              </div>
            </div>

            {/* Preferences Cookies */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Файлы cookie предпочтений</h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                  Опционально
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Запоминают ваши настройки и предпочтения для персонализации опыта использования сайта.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Назначение:</span>
                  <span className="text-gray-600">Языковые настройки, тема оформления</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Срок хранения:</span>
                  <span className="text-gray-600">До 1 года</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Примеры:</span>
                  <span className="text-gray-600">language, theme, user_preferences</span>
                </div>
              </div>
            </div>
          </div>

          {/* Management */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Управление файлами cookie</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-3">Как управлять согласием</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Вы можете изменить свои предпочтения в любое время, нажав на ссылку "Управление cookie" в футере сайта</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Большинство браузеров позволяют управлять файлами cookie через настройки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Отключение некоторых файлов cookie может повлиять на функциональность сайта</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Правовая основа</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-gray-600 leading-relaxed">
                Использование файлов cookie регулируется Федеральным законом от 27.07.2006 № 152-ФЗ
                "О персональных данных" и другими нормативными актами Российской Федерации.
                Мы обеспечиваем прозрачность и контроль пользователей над их персональными данными.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Контакты</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                Если у вас есть вопросы относительно использования файлов cookie,
                свяжитесь с нами:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span>maletskii@elinar.ru
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Телефон:</span> +7 (XXX) XXX-XX-XX
                </p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
