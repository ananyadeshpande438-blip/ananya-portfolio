import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const SectionHeading = ({ title, subtitle, className, center = false }) => {
  return (
    <div className={cn("mb-12", center && "text-center", className)}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-brand-500 font-mono text-sm md:text-base font-semibold tracking-wider uppercase mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-heading font-bold text-[#171717] tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "60px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn("h-1 bg-gradient-to-r from-brand-500 to-[#F59E0B] mt-6 rounded-full", center && "mx-auto")}
      />
    </div>
  );
};

export default SectionHeading;
