import React from 'react';

/**
 * AmbientShapes Component
 * 
 * Renders 4 responsive, asynchronously positioned floating geometric glowing orbs / polygons.
 * - Palette: Vibrant cyan (#00f2fe) and indigo (#4facfe)
 * - Heavy CSS blur (filter: blur(100px)) & 15-20% opacity as atmospheric ambient light
 * - Slow infinite floating keyframes (11-15s) with gentle X/Y translation
 * - Z-index: Above wave canvas (z-0) and strictly behind text/cards (z-10) -> z-[1]
 * - Mobile optimized (< 768px): Scaled down by 50% and slowed down to 24-30s to conserve battery
 * - Zero horizontal scroll (bounded inside overflow-hidden parent)
 */
export default function AmbientShapes({ className = '', style = {} }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden z-[1] select-none ${className}`}
      aria-hidden="true"
      style={style}
    >
      {/* Shape 1: Top-Right Glowing Orb - Vibrant Cyan (#00f2fe) */}
      <div
        className="ambient-shape ambient-shape-1 rounded-full -top-12 -right-12 sm:top-[2%] sm:right-[4%] w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]"
        style={{
          background: 'radial-gradient(circle, #00f2fe 0%, rgba(0, 242, 254, 0.4) 65%, transparent 75%)',
          opacity: 0.18,
        }}
      />

      {/* Shape 2: Middle-Left Glowing Orb - Deep Vibrant Indigo (#4facfe) */}
      <div
        className="ambient-shape ambient-shape-2 rounded-full top-[32%] -left-14 sm:top-[36%] sm:left-[2%] w-80 h-80 sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px]"
        style={{
          background: 'radial-gradient(circle, #4facfe 0%, rgba(79, 172, 254, 0.45) 60%, transparent 75%)',
          opacity: 0.19,
        }}
      />

      {/* Shape 3: Bottom-Center Floating Gradient Orb - Cyan to Indigo */}
      <div
        className="ambient-shape ambient-shape-3 rounded-full bottom-[-20px] left-[20%] sm:bottom-[4%] sm:left-[35%] w-72 h-72 sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px]"
        style={{
          background: 'radial-gradient(circle, #00f2fe 0%, #4facfe 50%, transparent 75%)',
          opacity: 0.17,
        }}
      />

      {/* Shape 4: Asymmetric Abstract Polygon / Rounded Diamond - Middle-Right */}
      <div
        className="ambient-shape ambient-shape-4 top-[65%] right-[-10px] sm:top-[68%] sm:right-[6%] w-64 h-64 sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.8) 0%, rgba(79, 172, 254, 0.9) 100%)',
          borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%',
          opacity: 0.15,
        }}
      />
    </div>
  );
}

