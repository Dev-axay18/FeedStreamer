import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StatsOverlayProps } from '../types';

const StatsOverlay: React.FC<StatsOverlayProps> = ({ 
  likes, 
  views, 
  shares, 
  theme, 
  visible 
}) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-black/80 text-white';
      case 'vintage':
        return 'bg-vintage-900/90 text-vintage-50';
      case 'glass':
        return 'bg-glass-400/80 backdrop-blur-md text-white';
      default:
        return 'bg-white/90 text-gray-900';
    }
  };

  const stats = [
    { icon: '❤️', value: likes, label: 'Likes' },
    { icon: '👁️', value: views, label: 'Views' },
    { icon: '🔗', value: shares, label: 'Shares' },
  ].filter(stat => stat.value !== undefined);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`absolute inset-0 flex items-end justify-center p-4 ${getThemeClasses()} rounded-lg`}
        >
          <div className="flex space-x-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center space-y-1"
              >
                <span className="text-lg">{stat.icon}</span>
                <span className="text-sm font-semibold">{stat.value}</span>
                <span className="text-xs opacity-75">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StatsOverlay; 