import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171717] text-[#737373] py-12 relative border-t-4 border-[#F97316]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8 border-b border-[#262626] pb-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-btn flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Ananya.
              </span>
            </div>
            <p className="text-[#737373] text-sm text-center md:text-left max-w-xs mt-2">
              Building data-driven solutions and crafting beautiful frontend experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-all">
              <FiLinkedin size={18} />
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-all">
              <Mail size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-all">
              <FiGithub size={18} />
            </a>
          </div>

          {/* Back to top */}
          <div className="flex justify-center md:justify-end">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors bg-[#262626] px-4 py-2 rounded-full"
            >
              Back to top <ArrowUp size={16} />
            </button>
          </div>
          
        </div>

        <div className="text-center text-[#737373] text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}
