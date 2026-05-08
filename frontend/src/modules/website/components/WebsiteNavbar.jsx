import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WebsiteNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Loan Products', href: '/#loan-products' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Security', href: '/#security' },
    { name: 'About', href: '/about' },
  ];

  const handleLogoClick = () => {
    if (window.location.pathname === '/' || window.location.pathname === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-primary-light/98 backdrop-blur-lg shadow-soft py-4' 
          : 'bg-primary-light/65 backdrop-blur-md py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
          <img src="/image.png" alt="creditU" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary font-semibold hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-6">
          
          {/* Language Selector Desktop */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors py-2">
              <Globe size={20} />
              {language === 'EN' ? 'English' : 'हिंदी'}
            </button>
            <div className="absolute top-full right-0 mt-2 w-36 bg-white rounded-xl shadow-soft border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 overflow-hidden">
              <button 
                onClick={() => setLanguage('EN')}
                className={`w-full text-left px-5 py-3 text-sm font-semibold hover:bg-slate-50 transition-colors ${language === 'EN' ? 'text-primary bg-slate-50/80 border-l-2 border-primary' : 'text-slate-600 border-l-2 border-transparent'}`}
              >
                English
              </button>
              <button 
                onClick={() => setLanguage('HI')}
                className={`w-full text-left px-5 py-3 text-sm font-semibold hover:bg-slate-50 transition-colors ${language === 'HI' ? 'text-primary bg-slate-50/80 border-l-2 border-primary' : 'text-slate-600 border-l-2 border-transparent'}`}
              >
                हिंदी (Hindi)
              </button>
            </div>
          </div>

          <button 
            onClick={() => navigate('/user')}
            className="btn-premium btn-primary-website py-3 px-6 shadow-gold hover:shadow-gold-lg"
          >
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-primary hover:bg-slate-50 rounded-full transition-colors z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} className="opacity-0" /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col md:hidden overflow-hidden"
          >
            {/* Background with blur */}
            <div className="absolute inset-0 bg-white/98 backdrop-blur-2xl -z-10" />

            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <img src="/image.png" alt="creditU" className="h-10 w-auto" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 text-slate-600 hover:text-primary bg-slate-50 hover:bg-slate-100 rounded-full transition-colors shadow-sm"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 pb-12 flex flex-col items-center justify-center">
              <div className="flex flex-col gap-8 w-full max-w-sm items-center text-center mt-[-40px]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-3xl text-slate-800 font-extrabold hover:text-primary transition-all group relative inline-block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gold transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </a>
                ))}
              </div>

              <div className="w-full max-w-sm mt-16 flex flex-col gap-8">
                {/* Language Selector */}
                <div className="flex flex-col gap-4 items-center">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                    <Globe size={16} /> Language
                  </p>
                  <div className="flex bg-slate-100/80 rounded-2xl p-1.5 shadow-inner w-full">
                    <button 
                      onClick={() => setLanguage('EN')}
                      className={`flex-1 py-3.5 rounded-xl text-base font-bold transition-all ${language === 'EN' ? 'bg-white text-primary shadow-soft border border-slate-100' : 'text-slate-500 hover:text-primary'}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => setLanguage('HI')}
                      className={`flex-1 py-3.5 rounded-xl text-base font-bold transition-all ${language === 'HI' ? 'bg-white text-primary shadow-soft border border-slate-100' : 'text-slate-500 hover:text-primary'}`}
                    >
                      हिंदी
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate('/download');
                  }}
                  className="btn-premium btn-primary-website py-4 w-full text-lg shadow-gold hover:shadow-gold-lg flex items-center justify-center gap-2 rounded-2xl mt-4"
                >
                  Get Started <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default WebsiteNavbar;
