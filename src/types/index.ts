export interface ImageItem {
  url: string;
  alt?: string;
  likes?: number;
  views?: number;
  shares?: number;
  id?: string;
  title?: string;
  description?: string;
}

export type LayoutType = 'grid' | 'masonry' | 'fullwidth';
export type ThemeType = 'light' | 'dark' | 'vintage' | 'glass';

export interface FeedScrollProps {
  images: ImageItem[];
  onReachEnd?: () => void;
  layout?: LayoutType;
  theme?: ThemeType;
  loading?: boolean;
  className?: string;
  threshold?: number;
  pageSize?: number;
  autoLoad?: boolean;
  showStats?: boolean;
  enablePin?: boolean;
  enableComments?: boolean;
  onImageClick?: (image: ImageItem, index: number) => void;
  onPinImage?: (image: ImageItem) => void;
  onLikeImage?: (image: ImageItem, index: number) => void;
}

export interface ImageCardProps {
  image: ImageItem;
  index: number;
  layout: LayoutType;
  theme: ThemeType;
  showStats: boolean;
  enablePin: boolean;
  enableComments: boolean;
  onImageClick?: (image: ImageItem, index: number) => void;
  onPinImage?: (image: ImageItem) => void;
  onLikeImage?: (image: ImageItem, index: number) => void;
}

export interface ShimmerLoaderProps {
  layout: LayoutType;
  theme: ThemeType;
}

export interface StatsOverlayProps {
  likes?: number;
  views?: number;
  shares?: number;
  theme: ThemeType;
  visible: boolean;
} 