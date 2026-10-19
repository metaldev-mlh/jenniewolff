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
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-cream/90 backdrop-blur-md border-b border-steel/10 relative">
      <div className="max-container px-8 md:px-16 flex items-center h-24">
        {/* Mobile: logo kiri, hamburger kanan */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Link to="/" className="flex-shrink-0">
            <img src="/LogoJW.png" alt="Jennie Wolff" className="h-16 w-auto object-contain" />
          </Link>
          <button className="p-2 text-charcoal/70" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop: Logo + Nav + CTA semua di tengah */}
        <div className="hidden md:flex items-center gap-8 w-full justify-center">
          <Link to="/" className="flex-shrink-0">
            <img src="/LogoJW.png" alt="Jennie Wolff" className="h-20 w-auto object-contain" />
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 relative group ${
                location.pathname === link.path ? 'text-terracotta' : 'text-charcoal/50 hover:text-charcoal'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              <span className={`absolute bottom-0 left-0 w-full h-px bg-terracotta transition-transform duration-500 ${
                location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          ))}
          <Link to="/contact" className="terracotta-button text-xs uppercase tracking-widest">
            Let's Connect
          </Link>
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
                    location.pathname === link.path ? 'text-terracotta' : 'text-charcoal/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 px-10">
                <Link to="/contact" className="terracotta-button w-full py-5 text-lg block text-center">
                  Let's Connect
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Footer = () => {
  return (
    <footer className="bg-steel border-t border-white/10 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-steel to-charcoal/90 pointer-events-none" />

      <div className="max-container px-8 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <Link to="/" className="shrink-0">
              <img src="/LogoJW.png" alt="Jennie Wolff" className="h-32 w-auto object-contain" />
            </Link>
            <div className="flex flex-col gap-2">
              <p className="text-white/50 text-xs uppercase tracking-[0.3em]">Holistic Brand &amp; Leadership Coaching</p>
              <p className="text-white/65 text-base italic max-w-xs leading-relaxed">
                Helping ambitious people create clarity around the vision they're building, and find balance as they bring it to life. Based in Denver, working everywhere.
              </p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-1">Navigation</p>
            {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/testimonials', 'Testimonials'], ['/contact', 'Contact']].map(([path, label]) => (
              <Link key={path} to={path} className="font-serif italic text-white/75 hover:text-gold transition-colors text-lg">{label}</Link>
            ))}
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold">Connect</p>
            <a href="mailto:jennie@thejenniewolff.com" className="text-base text-white/70 hover:text-gold transition-colors italic">
              jennie@thejenniewolff.com
            </a>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/jenniethewolff/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 text-white/60 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"><Instagram size={16} /></a>
              <a href="https://www.linkedin.com/in/jenniewolff/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 text-white/60 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/35 font-medium">
          <p>© {new Date().getFullYear()} Joyous Wolf Consulting LLC · All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span>Prepared by The MLH Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blush selection:text-terracotta">
      {/* One consistent navbar across every page, including Home */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
