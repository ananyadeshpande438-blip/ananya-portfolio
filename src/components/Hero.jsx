import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const TYPING_SPEED = 250;
const DELETING_SPEED = 125;
const DELAY_BETWEEN_WORDS = 3000;

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Data Analyst', 'Frontend Developer', 'Software Enthusiast'];

  useEffect(() => {
    let timeout;
    
    const currentWord = words[wordIndex];

    if (isDeleting) {
      setTypedText((prev) => currentWord.substring(0, prev.length - 1));
      if (typedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      setTypedText((prev) => currentWord.substring(0, prev.length + 1));
      if (typedText === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), DELAY_BETWEEN_WORDS);
        return () => clearTimeout(timeout);
      }
    }

    timeout = setTimeout(() => {}, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

  // Using a simpler typing approach for cleaner code that doesn't rely heavily on complex state
  useEffect(() => {
    const handleTyping = () => {
      const i = wordIndex % words.length;
      const fullText = words[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      let typeSpeed = isDeleting ? DELETING_SPEED : TYPING_SPEED;

      if (!isDeleting && typedText === fullText) {
        typeSpeed = DELAY_BETWEEN_WORDS;
        setIsDeleting(true);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
        typeSpeed = 500; // Pause before next word
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);


  const [firstName, ...lastNameParts] = portfolioData.personal.name.split(' ');
  const lastName = lastNameParts.join(' ');

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
      
      {/* Background decorations could be added here if needed, but index.css handles the main radial gradients */}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto flex flex-col items-center z-10"
      >
        {/* Open to work badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEF8EC]/50 border border-[#FFEDD5] text-[#F97316] text-sm font-medium mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Open to Work
        </div>

        <h3 className="text-xl md:text-2xl text-slate-500 mb-2 font-mono">
          Hi there 👋 I'm
        </h3>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
          <span className="text-slate-900">{firstName}</span>{' '}
          <span className="text-gradient-purple">{lastName}</span>
        </h1>

        <div className="text-xl md:text-3xl font-medium text-slate-600 mb-8 h-10">
          Building things as a <span className="text-[#F97316] font-bold">{typedText}</span>
          <span className="animate-pulse font-light text-slate-400">|</span>
        </div>

        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          I build modern applications with clean code and great user experiences. Passionate about software engineering, data analytics, and eager to join innovative teams.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          {portfolioData.personal.stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl md:text-5xl font-black text-[#F97316] mb-1">{stat.value}</span>
              <span className="text-xs md:text-sm font-bold text-slate-400 tracking-wider uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-btn flex items-center justify-center gap-2 font-medium">
            View My Work <ArrowRight size={18} />
          </a>
          
          <a href="/resume.pdf" download="Ananya_Deshpande_Resume.pdf" className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-slate-200 text-slate-700 hover:border-[#F97316] hover:text-[#F97316] transition-colors flex items-center justify-center gap-2 font-medium bg-[#FEF8EC]/50">
            <Download size={18} /> Download CV
          </a>
          
          <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-slate-200 text-slate-700 hover:border-[#F97316] hover:text-[#F97316] transition-colors flex items-center justify-center gap-2 font-medium bg-[#FEF8EC]/50">
            <Mail size={18} /> Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
