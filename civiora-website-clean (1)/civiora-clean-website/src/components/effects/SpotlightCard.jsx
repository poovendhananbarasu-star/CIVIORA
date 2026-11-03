import { useState, useRef, forwardRef } from 'react';

/**
 * 3D Spotlight & Tilt Hover Effects for Cards
 * - Calculates local cursor mouse coordinates (x, y)
 * - Renders dynamic radial-gradient spotlight highlight that tracks the cursor
 * - Applies subtle 3D perspective tilt (rotateX, rotateY) on hover
 * - Smooth transition on mouseleave
 */
const SpotlightCard = forwardRef(function SpotlightCard(
  {
    children,
    className = '',
    maxTilt = 6,
    spotlightColor = 'rgba(0, 242, 254, 0.16)',
    spotlightSize = 340,
    as: Tag = 'div',
    style: customStyle = {},
    ...props
  },
  forwardedRef
) {
  const internalRef = useRef(null);
  const cardRef = forwardedRef || internalRef;

  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    // Respect user's reduced-motion preference or mobile screens
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.012, 1.012, 1.012)`,
      transition: 'transform 0.08s ease-out',
    });

    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <Tag
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...customStyle,
        ...tiltStyle,
      }}
      className={`spotlight-card relative overflow-hidden will-change-transform ${className}`}
      {...props}
    >
      {/* Dynamic radial-gradient cursor spotlight highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(circle ${spotlightSize}px at ${spotlight.x}px ${spotlight.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </Tag>
  );
});

export default SpotlightCard;
