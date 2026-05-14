import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-cream border-b border-navy/10 py-4 md:py-6 relative">
      <div className="max-container px-8 md:px-16 flex items-center justify-center h-16 md:h-20">
        {/* Logo + Nav + CTA semua di tengah */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Jennie Wolff" className="h-14 w-auto object-contain" />
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 relative group ${
                location.pathname === link.path ? 'text-terracotta' : 'text-navy/60 hover:text-navy'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              <span className={`absolute bottom-0 left-0 w-full h-px bg-terracotta transition-transform duration-500 ${
                location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          ))}
          <Link to="/contact" className="bg-terracotta text-white py-2.5 px-6 text-xs rounded-full font-medium hover:opacity-90 transition-all uppercase tracking-widest">
            Request a Session
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden ml-auto">
          <button className="p-2 text-navy/70" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-cream border-t border-navy/10 overflow-hidden"
          >
            <div className="flex flex-col space-y-10 py-16 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-3xl font-serif italic ${
                    location.pathname === link.path ? 'text-terracotta' : 'text-navy/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 px-10">
                <Link to="/contact" className="bg-terracotta text-white w-full py-5 text-lg rounded-full font-medium hover:opacity-90 transition-all block text-center">
                  Request a Session
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FooterMarquee = () => (
  <div className="w-full overflow-hidden bg-navy border-b border-white/10 py-5">
    <div className="marquee-track">
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="marquee-item flex-shrink-0 flex items-center gap-8"
          style={{ animationDelay: `${i * 0.35}s` }}
        >
          <img
            src="/logo.png"
            alt="Jennie Wolff"
            className="h-10 md:h-14 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }}
          />
          <span className="text-3xl md:text-5xl font-serif italic">Jennie Wolff</span>
          <span className="text-white/20 text-xl">✦</span>
        </span>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blush/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-container px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24 mb-20">
          <div className="md:col-span-2 flex flex-col items-center text-center">
            <Link to="/" className="flex flex-col items-center mb-8">
              <img src="/logo2.png" alt="Jennie Wolff" className="h-28 md:h-36 w-auto object-contain" />
              <span className="text-xs uppercase tracking-[0.4em] text-white/50 font-bold mt-3">Holistic Brand &amp; Leadership Coaching</span>
            </Link>
            <p className="text-white/60 text-lg italic max-w-sm leading-relaxed">
              Helping founders and teams build brands and lives they actually want to live inside of. Based in Denver, working everywhere.
            </p>
          </div>
          
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-bold">Navigation</h4>
            <div className="flex flex-col space-y-4 font-serif text-xl italic text-white/80">
              <Link to="/" className="hover:text-terracotta transition-colors">Home</Link>
              <Link to="/about" className="hover:text-terracotta transition-colors">About</Link>
              <Link to="/services" className="hover:text-terracotta transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-terracotta transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-bold">Connect</h4>
              <a href="mailto:jennie@thejenniewolff.com" className="text-lg text-white/80 hover:text-terracotta transition-colors block italic border-b border-white/10 pb-4">
                jennie@thejenniewolff.com
              </a>
              <div className="flex space-x-6">
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 text-white/70 flex items-center justify-center hover:bg-terracotta hover:text-white transition-all duration-500"><Instagram size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 text-white/70 flex items-center justify-center hover:bg-terracotta hover:text-white transition-all duration-500"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
          <div className="text-center md:text-left mb-6 md:mt-0">
            <p>© {new Date().getFullYear()} JOYOUS WOLF CONSULTING LLC • ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex space-x-10 text-center md:text-right">
            <Link to="#" className="hover:text-terracotta transition-colors">Privacy Policy</Link>
            <span className="opacity-40">Prepared by The MLH Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col selection:bg-blush selection:text-terracotta">
      {/* Navbar hanya muncul di halaman non-home; Home punya navbar sendiri di dalam hero */}
      {!isHome && (
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
      )}
      <main className="flex-grow">
        {children}
      </main>
      <FooterMarquee />
      <Footer />
    </div>
  );
};
