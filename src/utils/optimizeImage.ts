
/**
 * Utility function to optimize image loading
 * Uses browser's loading="lazy" and modern image formats when available
 */

interface ImageOptions {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: boolean;
}

// Small transparent data URL to use as placeholder while loading
const PLACEHOLDER_DATA_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * Function that generates optimized image attributes
 */
export const optimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = true,
}: ImageOptions) => {
  // Define props for the image
  const imgProps = {
    src,
    alt,
    width,
    height,
    className,
    loading: priority ? 'eager' : 'lazy' as const,
    decoding: priority ? 'sync' as const : 'async' as const,
    fetchPriority: priority ? 'high' as const : 'auto' as const,
    // Use placeholder as needed
    ...(placeholder && !priority ? { "data-src": src, src: PLACEHOLDER_DATA_URL } : { src }),
    onLoad: (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (placeholder && !priority && e.currentTarget.dataset.src) {
        // Replace placeholder with actual image
        e.currentTarget.src = e.currentTarget.dataset.src;
      }
      
      // Mark image loading in performance timeline
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.performance.mark(`image-loaded:${src.substring(0, 100)}`);
      }
    }
  };

  return imgProps;
};

/**
 * Lazy load an image and return a promise that resolves when the image is loaded
 */
export const lazyLoadImage = (imageSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Skip loading for data URLs
    if (imageSrc.startsWith('data:')) {
      resolve(imageSrc);
      return;
    }
    
    const img = new Image();
    img.src = imageSrc;
    
    img.onload = () => {
      // Mark successful image load in performance metrics
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.performance.mark(`image-successful:${imageSrc.substring(0, 100)}`);
      }
      resolve(imageSrc);
    };
    
    img.onerror = () => {
      // Log image load errors
      if (typeof window !== 'undefined' && 'console' in window) {
        console.warn(`Failed to load image: ${imageSrc}`);
      }
      reject(new Error(`Failed to load image: ${imageSrc}`));
    };
  });
};

/**
 * Preload critical images ahead of time
 */
export const preloadCriticalImages = (imagePaths: string[]) => {
  if (typeof window === 'undefined') return;
  
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      for (const path of imagePaths) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = path;
        document.head.appendChild(link);
      }
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      for (const path of imagePaths) {
        const img = new Image();
        img.src = path;
      }
    }, 300);
  }
};
