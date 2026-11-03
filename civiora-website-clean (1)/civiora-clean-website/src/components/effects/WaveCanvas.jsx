import { useEffect, useRef } from 'react';

/**
 * Dynamic Animated Wave Background
 * - Pinned behind hero content (id="wave-canvas", z-index: 0, opacity ~0.45)
 * - Layered smooth animated sine waves / mesh bezier undulation in deep navy (#0B2A54) and vibrant cyan/indigo (#00f2fe to #4facfe)
 * - Undulation gently responds to mouse coordinates with a smooth dampening easing function
 */
export default function WaveCanvas({ className = '', opacity = 0.45, blendMode = 'normal' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let step = 0;

    // Mouse coordinates with dampening easing (lerp)
    let mouse = { x: 0.5, y: 0.5 };
    let targetMouse = { x: 0.5, y: 0.5 };

    const handleResize = () => {
      const parent = canvas.parentElement;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetMouse.x = Math.max(0, Math.min(1, x));
      targetMouse.y = Math.max(0, Math.min(1, y));
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleResize();

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Layered waves featuring deep navy (#0B2A54) and vibrant cyan/indigo (#00f2fe to #4facfe)
    const waveLayers = [
      {
        baseY: 0.65,
        speed: 0.012,
        amplitude: 36,
        frequency: 0.0032,
        colorStart: 'rgba(11, 42, 84, 0.55)', // deep navy
        colorEnd: 'rgba(79, 172, 254, 0.35)', // indigo-cyan
      },
      {
        baseY: 0.73,
        speed: -0.015,
        amplitude: 44,
        frequency: 0.0024,
        colorStart: 'rgba(0, 242, 254, 0.40)', // vibrant cyan
        colorEnd: 'rgba(79, 172, 254, 0.45)', // indigo
      },
      {
        baseY: 0.82,
        speed: 0.018,
        amplitude: 50,
        frequency: 0.0038,
        colorStart: 'rgba(11, 42, 84, 0.70)', // deep navy anchor
        colorEnd: 'rgba(0, 242, 254, 0.30)', // cyan shimmer
      },
    ];

    const render = () => {
      // Smooth dampening easing function (lerp)
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      step += prefersReducedMotion ? 0.002 : 0.024;

      waveLayers.forEach((layer, idx) => {
        ctx.save();

        const grad = ctx.createLinearGradient(0, height * 0.4, width, height);
        grad.addColorStop(0, layer.colorStart);
        grad.addColorStop(1, layer.colorEnd);
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(0, height);

        // Undulation gently responds to mouse coordinates
        const mouseAmpFactor = 1 + (mouse.y - 0.5) * 0.4;
        const mouseFreqShift = (mouse.x - 0.5) * 0.001;

        // Draw smooth sine-wave ribbon
        for (let x = 0; x <= width; x += 8) {
          const angle =
            x * (layer.frequency + mouseFreqShift) +
            step * (layer.speed * 42) +
            idx * 1.5;

          const y =
            height * layer.baseY +
            Math.sin(angle) * (layer.amplitude * mouseAmpFactor) +
            Math.cos(angle * 0.45 + step * 0.8) * 14;

          if (x === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      id="wave-canvas"
      ref={canvasRef}
      style={{ opacity, mixBlendMode: blendMode }}
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}
