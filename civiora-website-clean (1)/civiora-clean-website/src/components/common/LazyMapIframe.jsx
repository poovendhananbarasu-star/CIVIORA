import { useState, useEffect, useRef } from 'react';

/**
 * LazyMapIframe Component
 * Uses IntersectionObserver to strictly defer loading Google Maps until the
 * container is within 250px of the viewport. Prevents map subresources (~1.5 MB)
 * from competing for critical bandwidth during initial LCP and FCP.
 */
export default function LazyMapIframe({
  src,
  title,
  width = '100%',
  height = '100%',
  className = '',
  style = { border: 0 }
}) {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Only load when within 250px of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {shouldLoad ? (
        <iframe
          title={title}
          src={src}
          width={width}
          height={height}
          style={style}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className={className}
        />
      ) : (
        <div 
          className="w-full h-full flex flex-col items-center justify-center bg-navy-950/20 text-navy-400 text-xs font-body select-none"
          aria-hidden="true"
        >
          <span className="opacity-60">Civiora Office Location Map</span>
        </div>
      )}
    </div>
  );
}

