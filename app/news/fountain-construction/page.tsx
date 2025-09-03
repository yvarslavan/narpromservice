'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, X } from 'lucide-react';
import Link from 'next/link';

const FountainConstructionPage: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const videos = [
    {
      id: 1,
      title: 'Монтаж чаши и гидротехнического оборудования',
      description: 'Установка герметичной чаши и монтаж сложной системы насосов, форсунок и коммуникаций',
      src: '/videos/fountain-construction-1.mp4'
    },
    {
      id: 2,
      title: 'Укладка декоративной решетки',
      description: 'Установка прочной металлической решетки для безопасного передвижения по фонтану',
      src: '/videos/fountain-construction-2.mp4'
    },
    {
      id: 3,
      title: 'Благоустройство прилегающей территории',
      description: 'Укладка тротуарной плитки и благоустройство зоны вокруг фонтана',
      src: '/videos/fountain-construction-3.mp4'
    },
    {
      id: 4,
      title: 'Система управления фонтаном',
      description: 'Монтаж высокотехнологичного программируемого контроллера для управления водными струями',
      src: '/videos/fountain-construction-4.mp4'
    },
    {
      id: 5,
      title: 'Пусконаладочные работы и тестирование',
      description: 'Тестирование всех систем фонтана для гарантии бесперебойной работы',
      src: '/videos/fountain-construction-5.mp4'
    }
  ];

  const handleVideoChange = (index: number) => {
    setCurrentVideo(index);
    setIsPlaying(false);
  };

  const handleVideoClick = (index: number) => {
    setCurrentVideo(index);
    setIsVideoModalOpen(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Header с кнопкой возврата */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-container mx-auto px-4 py-4">
          <Link
            href="/#news"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Вернуться к новостям
          </Link>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 py-12">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6">
            Восстановление и модернизация пешеходного фонтана
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Мы рады сообщить об успешном завершении работ по восстановлению и модернизации городского пешеходного фонтана, который находился в нерабочем состоянии более двух лет.
          </p>
        </motion.div>

        {/* Описание проекта */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-text-heading mb-6">
            Особенности проекта и выполненные работы
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Изначально объект был построен с многочисленными нарушениями, что привело к выходу из строя всей системы. Наша команда взяла на себя задачу не просто отремонтировать фонтан, но и полностью устранить все системные недоработки.
            </p>

            <p className="text-gray-700 mb-6">
              В ходе работ наша бригада провела полный комплекс восстановительных мероприятий:
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Диагностика и ремонт:</strong> Были выявлены и заменены поврежденные участки подающих трубопроводов и автоматика, полностью вышедшая из строя.
                </div>
              </li>

              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Полная гидроизоляция:</strong> Мы произвели полную герметизацию кессона и чаши фонтана, что критически важно для его долговечной и безопасной работы.
                </div>
              </li>

              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Разработка и монтаж новой системы управления:</strong> Наши специалисты собрали и запрограммировали новый шкаф управления. Чтобы предотвратить повторные поломки, мы вынесли его из-под земли на поверхность, обеспечив надёжную защиту от влаги и удобство обслуживания.
                </div>
              </li>

              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Внедрение аварийных систем:</strong> Были установлены дренажная и аварийная системы откачки воды, которые полностью отсутствовали в изначальном проекте, что исключает риск затопления и повреждения оборудования.
                </div>
              </li>
            </ul>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
              <p className="text-gray-700">
                Сейчас объект находится на стадии пусконаладочных работ, и скоро жители смогут наслаждаться новым, безопасным и современным фонтаном, созданным с учётом всех необходимых стандартов.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Галерея видео */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-text-heading mb-8 text-center">
            Видеоматериалы проекта
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="cursor-pointer group"
                onClick={() => handleVideoClick(index)}
              >
                <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                  <video
                    src={video.src}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    muted
                    loop
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
                  />

                  {/* Overlay с информацией */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">Нажмите для просмотра</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="font-semibold text-gray-800 mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Модальное окно для просмотра видео */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          {/* Кнопка закрытия */}
          <button
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Видео */}
          <div className="relative max-w-[95vw] max-h-[95vh] bg-white rounded-3xl overflow-hidden shadow-2xl">
            <video
              src={videos[currentVideo].src}
              className="w-full h-auto max-h-[85vh]"
              muted={isMuted}
              loop
              autoPlay
              ref={(el) => {
                if (el) {
                  if (isPlaying) {
                    el.play().catch(() => {});
                  } else {
                    el.pause();
                  }
                }
              }}
            />

            {/* Контролы видео */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center space-x-4">
              <button
                onClick={togglePlayPause}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              <button
                onClick={toggleMute}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* Информация о видео */}
            <div className="absolute top-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">{videos[currentVideo].title}</h3>
              <p className="text-sm opacity-90">{videos[currentVideo].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FountainConstructionPage;
