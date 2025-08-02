import React from 'react';
import { motion } from 'framer-motion';
import { ShimmerLoaderProps } from '../types';

const ShimmerLoader: React.FC<ShimmerLoaderProps> = ({ layout, theme }) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-800 border-gray-700';
      case 'vintage':
        return 'bg-vintage-100 border-vintage-200';
      case 'glass':
        return 'bg-glass-100 border-glass-200 backdrop-blur-sm';
      default:
        return 'bg-gray-100 border-gray-200';
    }
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case 'masonry':
        return 'w-full h-64 md:h-80 lg:h-96';
      case 'fullwidth':
        return 'w-full h-48 md:h-64';
      default:
        return 'w-full h-48 md:h-64 lg:h-80';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`relative overflow-hidden rounded-lg border ${getThemeClasses()} ${getLayoutClasses()}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
        <div className="h-3 bg-white/20 rounded animate-pulse" />
        <div className="h-2 bg-white/10 rounded w-2/3 animate-pulse" />
      </div>
    </motion.div>
  );
};

export default ShimmerLoader; 