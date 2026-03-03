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

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Dot follows cursor instantly
  const dotSpringConfig = { damping: 35, stiffness: 500, mass: 0.3 };
  const dotXSpring = useSpring(cursorX, dotSpringConfig);
  const dotYSpring = useSpring(cursorY, dotSpringConfig);

  // Ring follows with delay for smooth trailing effect
  const ringSpringConfig = { damping: 20, stiffness: 150, mass: 0.8 };
  const ringXSpring = useSpring(cursorX, ringSpringConfig);
  const ringYSpring = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for data-cursor-text attribute
      const cursorTextEl = target.closest('[data-cursor-text]') as HTMLElement;
      if (cursorTextEl) {
        setHoverText(cursorTextEl.dataset.cursorText || '');
        setIsHoveringLink(true);
      }
      
      // Check for interactive elements
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
      {/* Outer Ring - follows with smooth delay */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: ringXSpring,
          y: ringYSpring,
        }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full border-2 border-white"
          animate={{
            width: isHoveringLink ? 120 : isHovering ? 60 : 40,
            height: isHoveringLink ? 120 : isHovering ? 60 : 40,
            x: isHoveringLink ? -60 : isHovering ? -30 : -20,
            y: isHoveringLink ? -60 : isHovering ? -30 : -20,
            scale: isHovering || isHoveringLink ? 1.1 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-xs font-medium uppercase tracking-wider text-foreground"
            >
              {hoverText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner Dot - follows cursor more directly */}
      <motion.div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotXSpring,
          y: dotYSpring,
        }}
      >
        <motion.div
          className="rounded-full bg-white"
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