
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
 * Sanitize image source to prevent XSS attacks
 */
const sanitizeImageSrc = (src: string): string => {
  // Allow only relative paths, absolute paths, or data URLs
  if (src.startsWith('./') || src.startsWith('/') || src.startsWith('data:image/')) {
    return src;
  }
  
  // Allow only specific domains
  const allowedDomains = ['lovable.dev', 'example.com']; // Add more as needed
  try {
    const url = new URL(src);
    if (allowedDomains.some(domain => url.hostname.includes(domain))) {
      return src;
    }
  } catch (e) {
    // Invalid URL
    console.warn('Invalid image URL:', src);
  }
  
  return PLACEHOLDER_DATA_URL;
};

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
  // Sanitize src for security
  const sanitizedSrc = sanitizeImageSrc(src);
  
  // Define props for the image
  const imgProps = {
    src: placeholder && !priority ? PLACEHOLDER_DATA_URL : sanitizedSrc,
    alt,
    width,
    height,
    className,
    loading: priority ? 'eager' : 'lazy' as const,
    decoding: priority ? 'sync' as const : 'async' as const,
    fetchPriority: priority ? 'high' as const : 'auto' as const,
    crossOrigin: 'anonymous' as const, // Enhance security
    // Use placeholder as needed
    ...(placeholder && !priority ? { "data-src": sanitizedSrc } : {}),
    onLoad: (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (placeholder && !priority && e.currentTarget.dataset.src) {
        // Replace placeholder with actual image
        e.currentTarget.src = e.currentTarget.dataset.src;
      }
      
      // Mark image loading in performance timeline
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.performance.mark(`image-loaded:${sanitizedSrc.substring(0, 100)}`);
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
    
    // Sanitize source
    const sanitizedSrc = sanitizeImageSrc(imageSrc);
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = sanitizedSrc;
    
    img.onload = () => {
      // Mark successful image load in performance metrics
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.performance.mark(`image-successful:${sanitizedSrc.substring(0, 100)}`);
      }
      resolve(sanitizedSrc);
    };
    
    img.onerror = () => {
      // Log image load errors
      if (typeof window !== 'undefined' && 'console' in window) {
        console.warn(`Failed to load image: ${sanitizedSrc}`);
      }
      reject(new Error(`Failed to load image: ${sanitizedSrc}`));
    };
  });
};

/**
 * Preload critical images ahead of time
 */
export const preloadCriticalImages = (imagePaths: string[]) => {
  if (typeof window === 'undefined') return;
  
  // Sanitize all paths first
  const sanitizedPaths = imagePaths.map(sanitizeImageSrc);
  
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      for (const path of sanitizedPaths) {
        if (path !== PLACEHOLDER_DATA_URL) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = path;
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
      }
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      for (const path of sanitizedPaths) {
        if (path !== PLACEHOLDER_DATA_URL) {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.src = path;
        }
      }
    }, 300);
  }
};
