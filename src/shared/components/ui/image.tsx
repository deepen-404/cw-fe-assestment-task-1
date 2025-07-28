import { cn } from '@/shared/lib/utils';
import { useState, type ImgHTMLAttributes } from 'react';

interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  src: string;
  alt: string;
  isPriority?: boolean;
  fallback?: string;
  className?: string;
}

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

  function handleLoad() {
    setStatus('loaded');
  }

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
