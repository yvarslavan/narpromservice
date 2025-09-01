'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.button
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-black/60 backdrop-blur-md w-full h-full border-0 p-0 cursor-default"
            onClick={onClose}
            aria-label="Закрыть модальное окно"
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl shadow-2xl max-w-md w-full border border-white/20 backdrop-blur-sm overflow-hidden"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 50,
              rotateX: -15
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              rotateX: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 50,
              rotateX: 15
            }}
            transition={{
              duration: 0.4,
              ease: [0.645, 0.045, 0.355, 1],
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {/* Декоративный градиент сверху */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

            {/* Header with logo and close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100/50">
              <div className="flex items-center gap-3">
                <Image
                  src="/logos/narprom-logo.jpg"
                  alt="НарПромСервис"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-sm"
                />
                {title && (
                  <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                )}
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-gray-100/50 rounded-full transition-all duration-200 group"
                aria-label="Закрыть"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} className="text-gray-500 group-hover:text-gray-700 transition-colors duration-200" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
