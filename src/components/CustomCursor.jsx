import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnter = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(true);
      }
    };
    
    const mouseLeave = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    document.body.addEventListener('mouseover', mouseEnter);
    document.body.addEventListener('mouseout', mouseLeave);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.body.removeEventListener('mouseover', mouseEnter);
      document.body.removeEventListener('mouseout', mouseLeave);
    };
  }, []);
  
  const cursorVariants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      height: 16,
      width: 16,
      backgroundColor: '#ca8a04',
      mixBlendMode: 'difference'
    },
    hover: {
      x: position.x - 24,
      y: position.y - 24,
      height: 48,
      width: 48,
      backgroundColor: '#fff',
      mixBlendMode: 'difference'
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      variants={cursorVariants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};