import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, Mail, LogOut } from 'lucide-react';
import { FiLinkedin } from 'react-icons/fi';
import { cn } from '../utils/cn';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Tools', href: '#tools' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" onClick={(e) => scrollTo(e, '#home')}>
          <div className="w-10 h-10 rounded bg-gradient-btn flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
          <span className="font-heading font-bold text-xl text-slate-800">
            Ananya.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-slate-600 hover:text-[#F97316] font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 rounded"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="px-4 py-2 rounded-full bg-gradient-btn text-white text-sm font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2"
            aria-label="Connect with me - go to contact section"
          >
            Connect With Me
          </a>
        </nav>

        {/* Profile Dropdown / Top Right Badge */}
        <div className="hidden md:flex items-center" ref={profileRef}>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-[#FEF8EC]/50 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2"
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            aria-label="Profile menu"
            aria-expanded={profileDropdownOpen}
            aria-haspopup="true"
          >
            <div className="w-7 h-7 rounded-full bg-[#F97316] text-white flex items-center justify-center text-xs font-bold">
              A
            </div>
            <span className="text-sm font-medium text-slate-700">Ananya</span>
            <ChevronDown size={16} className={`text-slate-400 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Profile Dropdown */}
          <AnimatePresence>
            {profileDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden z-50"
              >
                {/* Profile Header */}
                <div className="bg-gradient-to-r from-[#F97316] to-[#F59E0B] p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                      A
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{portfolioData.personal.name}</h4>
                      <p className="text-sm opacity-90">{portfolioData.personal.role}</p>
                    </div>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="p-4 space-y-3">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Quick Actions</div>
                  
                  <a
                    href="#contact"
                    onClick={(e) => scrollTo(e, '#contact')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FEF8EC] transition-colors text-slate-700 hover:text-[#F97316]"
                  >
                    <Mail size={18} className="text-[#F97316]" />
                    <span className="text-sm font-medium">Contact Me</span>
                  </a>

                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FEF8EC] transition-colors text-slate-700 hover:text-[#F97316]"
                  >
                    <FiLinkedin size={18} className="text-[#F97316]" />
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </a>

                  <div className="border-t border-slate-200 pt-3 mt-3">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Information</div>
                    
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-start gap-2">
                        <User size={16} className="text-slate-400 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-700">Education</p>
                          <p className="text-xs">MCA (Pursuing) • B.Sc. Computer Science</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-3 mt-3">
                    <button
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors text-slate-700 hover:text-red-600 w-full text-left"
                      disabled
                      title="Authentication not implemented"
                    >
                      <LogOut size={18} />
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                    <p className="text-xs text-slate-400 mt-1 text-center">Login required for logout</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-600 hover:text-[#F97316] transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FEF8EC]/95 backdrop-blur-md border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-slate-600 font-medium text-lg border-b border-slate-100 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="mt-4 px-4 py-3 rounded-full bg-gradient-btn text-white text-center font-medium"
              >
                Connect With Me
              </a>
              
              {/* Mobile Profile Section */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{portfolioData.personal.name}</p>
                    <p className="text-xs text-slate-500">{portfolioData.personal.role}</p>
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2 text-slate-600 hover:text-[#F97316]"
                  >
                    <FiLinkedin size={18} />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
