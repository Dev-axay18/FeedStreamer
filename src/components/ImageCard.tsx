import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageCardProps } from '../types';
import StatsOverlay from './StatsOverlay';

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  index,
  layout,
  theme,
  showStats,
  enablePin,
  enableComments,
  onImageClick,
  onPinImage,
  onLikeImage,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const isGif = image.url.toLowerCase().endsWith('.gif');

  useEffect(() => {
    // Check if image is already pinned in localStorage
    const pinnedImages = JSON.parse(localStorage.getItem('pinnedImages') || '[]');
    setIsPinned(pinnedImages.some((pinned: any) => pinned.url === image.url));
  }, [image.url]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handlePinClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newPinnedState = !isPinned;
    setIsPinned(newPinnedState);
    
    const pinnedImages = JSON.parse(localStorage.getItem('pinnedImages') || '[]');
    if (newPinnedState) {
      pinnedImages.push(image);
    } else {
      const index = pinnedImages.findIndex((pinned: any) => pinned.url === image.url);
      if (index > -1) pinnedImages.splice(index, 1);
    }
    localStorage.setItem('pinnedImages', JSON.stringify(pinnedImages));
    
    onPinImage?.(image);
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLikeImage?.(image, index);
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-900 border-gray-700 text-white';
      case 'vintage':
        return 'bg-vintage-50 border-vintage-200 text-vintage-900';
      case 'glass':
        return 'bg-glass-100 border-glass-200 backdrop-blur-sm text-white';
      default:
        return 'bg-white border-gray-200 text-gray-900';
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

  const getGifClasses = () => {
    if (!isGif) return '';
    return 'animate-pulse-glow ring-2 ring-blue-400/50';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={`relative overflow-hidden rounded-lg border shadow-lg cursor-pointer ${getThemeClasses()} ${getLayoutClasses()} ${getGifClasses()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onImageClick?.(image, index)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        {/* Blurred Placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        
        {/* Main Image */}
        <img
          ref={imgRef}
          src={image.url}
          alt={image.alt || 'Gallery image'}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={handleImageLoad}
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Action Buttons */}
        <div className={`absolute top-3 right-3 flex space-x-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {enablePin && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePinClick}
              className={`p-2 rounded-full shadow-lg ${
                isPinned 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
            >
              📌
            </motion.button>
          )}
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLikeClick}
            className="p-2 rounded-full bg-white/90 text-gray-700 shadow-lg hover:bg-white"
          >
            ❤️
          </motion.button>
        </div>

        {/* Stats Overlay */}
        {showStats && (
          <StatsOverlay
            likes={image.likes}
            views={image.views}
            shares={image.shares}
            theme={theme}
            visible={isHovered}
          />
        )}

        {/* Comments Section */}
        {enableComments && showComments && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 bg-white/95 p-3 rounded-t-lg"
          >
            <div className="text-sm text-gray-600">
              <div className="font-semibold">Trending Comments</div>
              <div className="mt-1 space-y-1">
                <div>🔥 Amazing shot!</div>
                <div>✨ Love the composition</div>
                <div>🌟 Beautiful colors</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* GIF Indicator */}
      {isGif && (
        <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
          GIF
        </div>
      )}
    </motion.div>
  );
};

export default ImageCard; 