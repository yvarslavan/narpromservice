import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../ui/Button';

const ContactsSection: React.FC = () => {
  return (
    <section id="contacts" className="py-20 bg-neutral-light">
      <div className="max-w-container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-text-heading uppercase tracking-wider">
            Контакты
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая часть - карта */}
          <div className="space-y-6">
            {/* Заглушка для карты */}
            <div className="w-full h-80 bg-bg-card rounded-large shadow-card flex items-center justify-center">
              <div className="text-center text-text-body opacity-60">
                <MapPin size={48} className="mx-auto mb-4 text-brand-blue" />
                <p className="text-lg font-semibold">Интерактивная карта</p>
                <p className="text-sm">Яндекс.Карты или Google Maps</p>
              </div>
            </div>

            {/* Адрес */}
            <div className="bg-white rounded-medium shadow-card p-6">
              <h4 className="text-h3 font-bold text-text-heading mb-4">Адрес:</h4>
              <p className="text-body text-text-body">
                143302, Московская область, г. Наро-<br />
                Фоминск, с. Атепцево, пер. Мичуринский д.1<br />
                Атепцево, влад.1
              </p>
            </div>
          </div>

          {/* Правая часть - контактная информация */}
          <div className="space-y-6">
            {/* Телефон */}
            <div className="bg-white rounded-medium shadow-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-bg-light-blue rounded-medium flex items-center justify-center">
                  <Phone size={24} className="text-brand-blue" />
                </div>
                <h4 className="text-h3 font-bold text-text-heading">Телефон</h4>
              </div>
              <p className="text-lg font-bold text-text-heading">+7 (495) 509-03-16</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-medium shadow-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-bg-light-blue rounded-medium flex items-center justify-center">
                  <Mail size={24} className="text-brand-blue" />
                </div>
                <h4 className="text-h3 font-bold text-text-heading">Email</h4>
              </div>
              <p className="text-lg font-bold text-text-heading">maletskii@elinar.ru</p>
            </div>

            {/* Режим работы */}
            <div className="bg-white rounded-medium shadow-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-bg-light-blue rounded-medium flex items-center justify-center">
                  <Clock size={24} className="text-brand-blue" />
                </div>
                <h4 className="text-h3 font-bold text-text-heading">Режим работы</h4>
              </div>
              <p className="text-lg font-bold text-text-heading">Пн-Пт с 08:00 до 17:00</p>
            </div>

            {/* Кнопка связи */}
            <div className="pt-4">
              <Button variant="primary" className="w-full">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
