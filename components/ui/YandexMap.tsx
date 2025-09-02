'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface YandexMapProps {
  address: string;
  className?: string;
}

const YandexMap: React.FC<YandexMapProps> = ({ address, className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapInstance, setMapInstance] = useState<any>(null);

  useEffect(() => {
    // Проверяем, загружен ли API Яндекс.Карт
    if (typeof window !== 'undefined' && window.ymaps && window.ymaps.Map) {
      initMap();
    } else {
      // Если API не загружен, загружаем его
      loadYandexMapsAPI();
    }

    return () => {
      // Очистка при размонтировании
      if (mapInstance) {
        mapInstance.destroy();
      }
    };
  }, [address]);

  const loadYandexMapsAPI = () => {
    // Проверяем, не загружается ли уже API
    if (document.querySelector('script[src*="api-maps.yandex.ru"]')) {
      // Если скрипт уже загружается, ждем его загрузки
      const checkAPI = setInterval(() => {
        if (window.ymaps && window.ymaps.Map) {
          clearInterval(checkAPI);
          initMap();
        }
      }, 100);
      return;
    }

    // Загружаем API
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    script.async = true;
    script.onload = () => {
      // Ждем полной инициализации API
      const checkReady = setInterval(() => {
        if (window.ymaps && window.ymaps.ready) {
          clearInterval(checkReady);
          window.ymaps.ready(() => {
            initMap();
          });
        }
      }, 100);
    };
    script.onerror = () => {
      // Если не удалось загрузить, показываем статичную карту
      showStaticMap();
    };
    document.head.appendChild(script);
  };

  const showStaticMap = () => {
    if (mapRef.current) {
      setIsLoading(false);
      mapRef.current.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
            </div>
            <p class="text-lg font-semibold text-gray-700 mb-2">Статичная карта</p>
            <p class="text-sm text-gray-500 mb-4">Координаты: 55.326066, 36.746521</p>
            <a href="https://yandex.ru/maps/?pt=55.326066,36.746521&z=15&l=map"
               target="_blank"
               class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Открыть в Яндекс.Картах
            </a>
          </div>
        </div>
      `;
    }
  };

  const initMap = () => {
    if (!mapRef.current || !window.ymaps || !window.ymaps.Map) {
      console.warn('Yandex Maps API не готов');
      return;
    }

    try {
      // Координаты для компании "Элинар" в с. Атепцево
      const coordinates = [55.326066, 36.746521];

      const map = new window.ymaps.Map(mapRef.current, {
        center: coordinates,
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl']
      });

      // Добавляем метку на карту
      const placemark = new window.ymaps.Placemark(coordinates, {
        balloonContent: address
      }, {
        preset: 'islands#blueStretchyIcon',
        iconColor: '#3B82F6'
      });

      map.geoObjects.add(placemark);

      // Стилизация карты
      map.behaviors.disable('scrollZoom');
      map.controls.get('zoomControl').options.set('position', { right: 10, top: 50 });
      map.controls.get('fullscreenControl').options.set('position', { right: 10, top: 10 });

      setMapInstance(map);
      setIsLoading(false);
    } catch (error) {
      console.error('Ошибка инициализации карты:', error);
      showStaticMap();
    }
  };

  return (
    <motion.div
      ref={mapRef}
      className={`w-full h-96 rounded-2xl overflow-hidden shadow-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Заглушка пока карта загружается */}
      {isLoading && (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <p className="text-lg font-semibold text-gray-700 mb-2">Загрузка карты...</p>
            <p className="text-sm text-gray-500">Подождите немного</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Объявляем глобальные типы для TypeScript
declare global {
  interface Window {
    ymaps: any;
  }
}

export default YandexMap;
