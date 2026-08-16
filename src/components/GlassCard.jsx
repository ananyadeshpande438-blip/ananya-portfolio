import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const GlassCard = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div
      className={cn(
        "bg-surface backdrop-blur-xl border border-white/10 rounded-2xl p-6",
        hover && "hover:bg-surface-hover hover:border-white/20 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
