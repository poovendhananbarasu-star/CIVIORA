import { useEffect, useState, useRef } from 'react';

/**
 * Responsive Glowing Magnetic Cursor
 * - Fluid central dot + trailing glowing aura circle
 * - On desktop, hides system cursor on interactive elements
 * - Magnetic snap effect on buttons, cards, links, navigation items
 * - Scales up outer ring with backdrop blend mode and cyan/gold aura
 * - Automatically disabled on mobile touch screens (< 768px)
 */
export default function MagneticCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });
  const magneticTarget = useRef(null);

  useEffect(() => {
    // Only enable on desktop screens with fine pointer support
    const checkIsDesktop = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      const isWideEnough = window.innerWidth >= 768;
      setEnabled(!isTouch && isWideEnough);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let animId;

    const onMouseMove = (e) => {
      setIsVisible(true);
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Magnetic snap calculation when hovering interactive targets
      if (magneticTarget.current) {
        try {
          const rect = magneticTarget.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          // Apply magnetic snap: 45% pull towards the center of the hovered element
          targetPos.current.x = mousePos.current.x + (centerX - mousePos.current.x) * 0.45;
          targetPos.current.y = mousePos.current.y + (centerY - mousePos.current.y) * 0.45;
        } catch {
          targetPos.current.x = mousePos.current.x;
          targetPos.current.y = mousePos.current.y;
        }
      } else {
        targetPos.current.x = mousePos.current.x;
        targetPos.current.y = mousePos.current.y;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e) => {
      const target = e.target.closest(
        'button, a, input[type="submit"], input[type="button"], [role="button"], [data-magnetic="true"], .spotlight-card, nav a, header a'
      );
      if (target) {
        setIsHovered(true);
        magneticTarget.current = target;
      } else {
        setIsHovered(false);
        magneticTarget.current = null;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    // Smooth physics loop with spring lerp
    const render = () => {
      // Small central dot tracks instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Outer ring trails with fluid dampening
      ringPos.current.x += (targetPos.current.x - ringPos.current.x) * 0.2;
      ringPos.current.y += (targetPos.current.y - ringPos.current.y) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Central crisp dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 rounded-full bg-gold-400 shadow-[0_0_10px_#C9962A] will-change-transform z-50 pointer-events-none"
      />

      {/* Trailing glowing aura circle with backdrop blend mode */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border will-change-transform pointer-events-none transition-[width,height,border-color,background-color,transform] duration-200 ease-out z-40 flex items-center justify-center ${
          isHovered
            ? 'w-16 h-16 -ml-8 -mt-8 bg-cyan-400/15 border-cyan-400/90 shadow-[0_0_24px_rgba(0,242,254,0.5)] backdrop-blur-[1px] mix-blend-difference scale-110'
            : isClicking
            ? 'w-7 h-7 -ml-3.5 -mt-3.5 bg-gold-400/30 border-gold-400 shadow-[0_0_12px_#C9962A] scale-90'
            : 'w-10 h-10 -ml-5 -mt-5 border-gold-400/50 bg-gold-400/5 shadow-[0_0_12px_rgba(201,150,42,0.2)]'
        }`}
      />
    </div>
  );
}
