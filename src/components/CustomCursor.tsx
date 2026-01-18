import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface CustomCursorProps {
  cursorText?: string;
}

const CustomCursor = ({ cursorText }: CustomCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isOnDarkBg, setIsOnDarkBg] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Dot follows cursor instantly
  const dotSpringConfig = { damping: 35, stiffness: 500, mass: 0.3 };
  const dotXSpring = useSpring(cursorX, dotSpringConfig);
  const dotYSpring = useSpring(cursorY, dotSpringConfig);

  // Ring follows with delay
  const ringSpringConfig = { damping: 20, stiffness: 150, mass: 0.8 };
  const ringXSpring = useSpring(cursorX, ringSpringConfig);
  const ringYSpring = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // detect background brightness
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      if (!el) return;

      const bg = window.getComputedStyle(el).backgroundColor;
      if (!bg || bg === 'rgba(0, 0, 0, 0)') return;

      const rgb = bg.match(/\d+/g);
      if (!rgb) return;

      const [r, g, b] = rgb.map(Number);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      setIsOnDarkBg(brightness < 120);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const cursorTextEl = target.closest('[data-cursor-text]') as HTMLElement;
      if (cursorTextEl) {
        setHoverText(cursorTextEl.dataset.cursorText || '');
        setIsHoveringLink(true);
      }

      if (target.closest('a, button, [role="button"], .cursor-hover')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest('[data-cursor-text]')) {
        setHoverText('');
        setIsHoveringLink(false);
      }

      if (target.closest('a, button, [role="button"], .cursor-hover')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* OUTER RING */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: ringXSpring, y: ringYSpring }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full border-2"
          animate={{
            width: isHoveringLink ? 120 : isHovering ? 60 : 40,
            height: isHoveringLink ? 120 : isHovering ? 60 : 40,
            x: isHoveringLink ? -60 : isHovering ? -30 : -20,
            y: isHoveringLink ? -60 : isHovering ? -30 : -20,
            borderColor:
              isHoveringLink || isHovering
                ? 'hsl(var(--primary))'
                : isOnDarkBg
                ? '#ffffff'
                : 'hsl(var(--foreground) / 0.5)',
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: isOnDarkBg ? '#ffffff' : 'hsl(var(--foreground))' }}
            >
              {hoverText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* INNER DOT */}
      <motion.div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: dotXSpring, y: dotYSpring }}
      >
        <motion.div
          className="rounded-full"
          style={{
            backgroundColor: isOnDarkBg
              ? '#ffffff'
              : 'hsl(var(--foreground))',
          }}
          animate={{
            width: isHoveringLink ? 8 : isHovering ? 6 : 8,
            height: isHoveringLink ? 8 : isHovering ? 6 : 8,
            x: isHoveringLink ? -4 : isHovering ? -3 : -4,
            y: isHoveringLink ? -4 : isHovering ? -3 : -4,
            opacity: isHoveringLink ? 0 : 1,
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
