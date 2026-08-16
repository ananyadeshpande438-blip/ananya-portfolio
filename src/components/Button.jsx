import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const Button = React.forwardRef(({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  leftIcon, 
  rightIcon, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-500 to-[#F59E0B] text-white hover:shadow-lg hover:shadow-brand-500/30 focus:ring-brand-500",
    secondary: "bg-surface text-white hover:bg-surface-hover border border-white/10 focus:ring-slate-400",
    outline: "border-2 border-brand-500 text-brand-500 hover:bg-brand-500/10 focus:ring-brand-500",
    ghost: "text-slate-300 hover:text-white hover:bg-[#FEF8EC]/5 focus:ring-slate-400",
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-2.5 gap-2",
    lg: "text-lg px-8 py-3.5 gap-3",
    icon: "p-2.5",
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
