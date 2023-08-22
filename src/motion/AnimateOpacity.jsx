 import React from 'react'
import { motion } from 'framer-motion';

const AnimateOpacity = ({ children }) => {
const Opacity = {
    initial: {
    opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
          duration: 1.6,
          delay: 0.5 
        },
    },
};
  return (
    <div>
        <motion.div 
        initial="initial"
        animate="animate"
        transition="transition"
        variants={Opacity} 
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() => document.body.classList.remove("overflow-hidden")}
        >
        {children}
        </motion.div>
    </div>
  );
};

export default AnimateOpacity;