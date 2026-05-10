import React from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = ({ progress }) => {
  return (
    <motion.div 
      className="scroll-progress"
      style={{
        scaleX: progress / 100,
        transformOrigin: 'left'
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      transition={{ type: 'spring', stiffness: 100 }}
    />
  );
};

export default ScrollProgress;