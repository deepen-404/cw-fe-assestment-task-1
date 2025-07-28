import { cn } from '@/shared/lib/utils';
import { useState, type ImgHTMLAttributes } from 'react';

interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Whether to load image immediately (bypasses lazy loading) */
  isPriority?: boolean;
  /** Fallback image URL when main image fails to load */
  fallback?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Enhanced Image component with automatic fallback and smooth loading transitions
 *
 * @param src - Image source URL
 * @param alt - Alt text for accessibility
 * @param isPriority - Load immediately instead of lazy loading (default: false)
 * @param fallback - Fallback URL when main image fails (default: empty)
 * @param className - Additional CSS classes
 * @param props - Additional HTML img attributes
 *
 * @example
 * ```tsx
 * <Image
 *   src="/hero.jpg"
 *   alt="Hero banner"
 *   isPriority
 *   fallback="/placeholder.jpg"
 * />
 * ```
 */
function Image({
  src,
  alt,
  isPriority = false,
  fallback = '',
  className = '',
  ...props
}: ImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>(
    'loading'
  );
  const [imgSrc, setImgSrc] = useState(src);

  /**
   * Handles successful image load
   */
  function handleLoad() {
    setStatus('loaded');
  }

  /**
   * Handles image load error with fallback logic
   */
  function handleError() {
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
      setStatus('loading');
    } else {
      setStatus('error');
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={isPriority ? 'eager' : 'lazy'}
      className={cn(
        'transition-opacity duration-300',
        status === 'loaded' ? 'opacity-100' : 'opacity-0',
        className
      )}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
}

export default Image;
