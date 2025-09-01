/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Цвета из дизайн-системы
      colors: {
        // Основные цвета бренда
        'brand-blue': '#1976D2',
        'brand-blue-hover': '#1565C0',
        'brand-blue-dark': '#0D47A1',
        'brand-blue-darker': '#205A90',

        // Акцентные цвета Material Design
        'accent-cyan': '#00BCD4',
        'accent-cyan-end': '#0097A7',
        'accent-indigo': '#3F51B5',
        'accent-purple': '#9C27B0',

        // Текстовые цвета
        'text-heading': '#333333',
        'text-heading-primary': '#2C3E50',
        'text-heading-secondary': '#212529',
        'text-body': '#666666',
        'text-body-secondary': '#495057',
        'text-body-tertiary': '#ADB5BD',
        'text-inverted': '#FFFFFF',
        'text-placeholder': '#999999',
        'text-link': '#85C1E9',

        // Нейтральные цвета
        'neutral-light': '#F0F0F0',
        'neutral-medium': '#DDDDDD',
        'neutral-dark': '#CCCCCC',

        // Фоновые цвета
        'bg-card': '#F8F9FA',
        'bg-light-blue': '#E3F2FD',
        'bg-dark': '#34495E',

        // Специальные цвета
        'special-red': '#FF0000',
        'special-yellow': '#FFD700',
        'special-lime': '#CCFF00',
      },

      // Material Design градиенты
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1976D2, #1565C0)',
        'gradient-primary-hover': 'linear-gradient(135deg, #1565C0, #0D47A1)',
        'gradient-accent': 'linear-gradient(135deg, #00BCD4, #0097A7)',
        'gradient-footer': 'linear-gradient(135deg, #0D47A1, #0A3D91)',
        'gradient-hero': 'linear-gradient(135deg, #1976D2 0%, #3F51B5 50%, #9C27B0 100%)',
      },

      // Material Design Elevation тени
      boxShadow: {
        'md-1': '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        'md-2': '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        'md-4': '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        'md-6': '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        'md-8': '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
        'md-12': '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',
        'md-16': '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)',
        'md-24': '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
      },

      // Радиусы скругления
      borderRadius: {
        'small': '4px',
        'medium': '8px',
        'large': '10px',
      },

      // Шрифты
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'fallback': ['Arial', 'sans-serif'],
      },

      // Размеры шрифтов
      fontSize: {
        'h1': ['40px', { lineHeight: '1.2', letterSpacing: '0.05em' }],
        'h2': ['32px', { lineHeight: '1.3' }],
        'h3': ['20px', { lineHeight: '1.4' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'small': ['14px', { lineHeight: '1.5' }],
        'button': ['16px', { lineHeight: '1.2' }],
      },

      // Отступы из дизайн-системы
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },

      // Максимальная ширина контейнера
      maxWidth: {
        'container': '1200px',
      },

      // Анимации
      transitionDuration: {
        'default': '200ms',
        'smooth': '300ms',
      },
    },
  },
  plugins: [],
}
