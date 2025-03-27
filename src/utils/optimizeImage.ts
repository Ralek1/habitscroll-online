
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
}

export const optimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: ImageOptions) => {
  // Define props for the image
  const imgProps = {
    src,
    alt,
    width,
    height,
    className,
    loading: priority ? 'eager' : 'lazy',
    decoding: priority ? 'sync' : 'async',
  };

  return imgProps;
};

export const lazyLoadImage = (imageSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => resolve(imageSrc);
    img.onerror = () => reject(new Error(`Failed to load image: ${imageSrc}`));
  });
};
