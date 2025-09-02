'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NewsFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  filters: Array<{
    id: string;
    label: string;
    count?: number;
  }>;
}

const NewsFilter: React.FC<NewsFilterProps> = ({
  activeFilter,
  onFilterChange,
  filters
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;

        return (
          <motion.button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`
              relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300
              ${isActive
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }
            `}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: filters.indexOf(filter) * 0.1
            }}
          >
            {/* Активный индикатор */}
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl"
                layoutId="activeFilter"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}

            {/* Контент кнопки */}
            <span className="relative z-10 flex items-center gap-2">
              {filter.label}
              {filter.count !== undefined && (
                <span className={`
                  px-2 py-1 rounded-full text-xs font-semibold
                  ${isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600'
                  }
                `}>
                  {filter.count}
                </span>
              )}
            </span>

            {/* Тень для активной кнопки */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-700/20 blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default NewsFilter;
