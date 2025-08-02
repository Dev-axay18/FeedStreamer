import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FeedScrollProps, ImageItem } from '../types';
import ImageCard from './ImageCard';
import ShimmerLoader from './ShimmerLoader';

const FeedScroll: React.FC<FeedScrollProps> = ({
  images,
  onReachEnd,
  layout = 'grid',
  theme = 'light',
  loading = false,
  className = '',
  threshold = 0.1,
  pageSize = 12,
  autoLoad = true,
  showStats = true,
  enablePin = true,
  enableComments = false,
  onImageClick,
  onPinImage,
  onLikeImage,
}) => {
  const [displayedImages, setDisplayedImages] = useState<ImageItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize displayed images
  useEffect(() => {
    const initialImages = images.slice(0, pageSize);
    setDisplayedImages(initialImages);
    setCurrentPage(1);
    setHasReachedEnd(images.length <= pageSize);
  }, [images, pageSize]);

  // Load more images function
  const loadMoreImages = useCallback(async () => {
    if (isLoadingMore || hasReachedEnd) return;

    setIsLoadingMore(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newImages = images.slice(startIndex, endIndex);

    if (newImages.length > 0) {
      setDisplayedImages(prev => [...prev, ...newImages]);
      setCurrentPage(nextPage);
      setHasReachedEnd(endIndex >= images.length);
      onReachEnd?.();
    } else {
      setHasReachedEnd(true);
    }

    setIsLoadingMore(false);
  }, [currentPage, pageSize, images, isLoadingMore, hasReachedEnd, onReachEnd]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!autoLoad || !observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoadingMore && !hasReachedEnd) {
          loadMoreImages();
        }
      },
      { threshold }
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [autoLoad, threshold, isLoadingMore, hasReachedEnd, loadMoreImages]);

  // Get layout classes
  const getLayoutClasses = () => {
    switch (layout) {
      case 'masonry':
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4';
      case 'fullwidth':
        return 'grid grid-cols-1 gap-4';
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4';
    }
  };

  // Get theme classes
  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'vintage':
        return 'bg-vintage-50 text-vintage-900';
      case 'glass':
        return 'bg-gradient-to-br from-glass-50 to-glass-100 backdrop-blur-sm';
      default:
        return 'bg-gray-50 text-gray-900';
    }
  };

  // Render shimmer loaders
  const renderShimmerLoaders = () => {
    const loaders = Array.from({ length: 6 }, (_, i) => (
      <ShimmerLoader key={`shimmer-${i}`} layout={layout} theme={theme} />
    ));

    return (
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={getLayoutClasses()}
          >
            {loaders}
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen p-4 ${getThemeClasses()} ${className}`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-bold mb-2">Infinite Feed Gallery</h1>
        <p className="text-lg opacity-75">
  {(displayedImages?.length ?? 0)} of {(images?.length ?? 0)} images loaded
</p>


      </motion.div>

      {/* Images Grid */}
      <div className="space-y-8">
        {/* Main Images */}
        <motion.div
          layout
          className={getLayoutClasses()}
        >
          <AnimatePresence>
            {(displayedImages ?? []).map((image, index) => (
 
              <motion.div
                key={image.id || `${image.url}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={layout === 'masonry' ? 'break-inside-avoid mb-4' : ''}
              >
                <ImageCard
                  image={image}
                  index={index}
                  layout={layout}
                  theme={theme}
                  showStats={showStats}
                  enablePin={enablePin}
                  enableComments={enableComments}
                  onImageClick={onImageClick}
                  onPinImage={onPinImage}
                  onLikeImage={onLikeImage}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Loading State */}
        {renderShimmerLoaders()}

        {/* Load More Trigger */}
        {autoLoad && !hasReachedEnd && (
          <div
            ref={observerRef}
            className="h-20 flex items-center justify-center"
          >
            {isLoadingMore && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-2"
              >
                <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <span>Loading more images...</span>
              </motion.div>
            )}
          </div>
        )}

        {/* Manual Load More Button */}
        {!autoLoad && !hasReachedEnd && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <button
              onClick={loadMoreImages}
              disabled={isLoadingMore}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoadingMore ? 'Loading...' : 'Load More Images'}
            </button>
          </motion.div>
        )}

        {/* End Message */}
        {hasReachedEnd && displayedImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <p className="text-lg opacity-75">🎉 You've reached the end!</p>
            <p className="text-sm opacity-50 mt-2">
              {displayedImages.length} images loaded
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FeedScroll; 