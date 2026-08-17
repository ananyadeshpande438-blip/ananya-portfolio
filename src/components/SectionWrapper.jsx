import { motion } from 'framer-motion';

export default function SectionWrapper({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {subtitle && (
              <span className="text-[#F97316] font-semibold tracking-wider uppercase text-sm mb-2 block">
                {subtitle}
              </span>
            )}
            <h2 className="text-3xl md:text-5xl font-black text-[#171717] relative inline-block">
              {title}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-[#F97316] to-[#F59E0B] rounded-full"></div>
            </h2>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
        
      </div>
    </section>
  );
}
