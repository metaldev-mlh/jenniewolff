import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <div>
      {/*
        HERO + NAVBAR sebagai satu unit sticky.
        sticky top-0 → hero nempel di atas saat scroll.
        Section 2+ punya background solid → otomatis nutup hero saat scroll masuk.
        Tidak perlu z-index tricks — normal document flow sudah cukup.
      */}
      <section className="bg-cream sticky top-0 h-screen flex flex-col overflow-hidden" style={{ zIndex: 0, isolation: 'isolate' }}>

        {/* ── NAVBAR di dalam hero ── */}
        <nav className="relative z-20 w-full px-8 md:px-16 py-3 flex items-center justify-center border-b border-navy/10">
          {/* Logo + Nav links + CTA semua di tengah */}
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
                {link.name}
                <span className={`absolute -bottom-0.5 left-0 w-full h-px bg-terracotta transition-transform duration-500 ${
                  location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            <Link to="/contact" className="bg-terracotta text-white py-2.5 px-6 text-xs rounded-full font-medium hover:opacity-90 transition-all uppercase tracking-widest">
              Request a Session
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden ml-auto p-2 text-navy/70" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="relative z-20 bg-cream border-t border-navy/10 overflow-hidden"
            >
              <div className="flex flex-col space-y-8 py-12 text-center">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} className="text-2xl font-serif italic text-navy/70 hover:text-terracotta transition-colors">
                    {link.name}
                  </Link>
                ))}
                <div className="px-10">
                  <Link to="/contact" className="bg-terracotta text-white w-full py-4 rounded-full font-medium block text-center">
                    Request a Session
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Hero content: foto | nama brand | logo ── */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-16 pb-0">
          <div className="flex flex-row items-end gap-4 md:gap-8 w-full max-w-6xl">

            {/* Kiri: foto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center flex-shrink-0"
              style={{ alignSelf: 'flex-end' }}
            >
              <img
                src="/Jennie.png"
                alt="Jennie Wolff"
                className="w-[130px] sm:w-[200px] md:w-[340px] lg:w-[400px] object-cover object-top block"
                style={{ maxHeight: '65vh' }}
              />
              {/* CTA di bawah foto — desktop only */}
              <div className="hidden md:flex w-full px-6 py-5 flex-col items-center gap-3" style={{ marginTop: '-20px' }}>
                <Link
                  to="/contact"
                  className="w-full text-center bg-terracotta text-white py-4 px-8 rounded-full font-medium hover:opacity-90 transition-all text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  Request a Clarity Session <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="text-navy/50 text-xs uppercase tracking-widest hover:text-navy transition-colors">
                  See how we work together
                </Link>
              </div>
              {/* CTA di bawah foto — mobile only */}
              <div className="flex md:hidden flex-col items-center gap-2 mt-3 w-full">
                <Link
                  to="/contact"
                  className="bg-terracotta text-white py-2 px-4 rounded-full font-medium hover:opacity-90 transition-all text-[9px] uppercase tracking-widest flex items-center gap-1"
                >
                  Request a Session <ArrowRight size={10} />
                </Link>
                <Link to="/services" className="text-navy/50 text-[9px] uppercase tracking-widest hover:text-navy transition-colors">
                  See how we work
                </Link>
              </div>
            </motion.div>

            {/* Tengah: nama brand + sub-headline + CTA mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-end flex-1 pb-4 md:pb-16"
            >
              <h1
                className="font-serif font-bold leading-none uppercase tracking-tight brand-name-glow"
                style={{ fontSize: 'clamp(36px, 10vw, 160px)' }}
              >
                Jennie<br />Wolff
              </h1>
              <p className="text-navy/60 text-xs sm:text-sm md:text-lg mt-3 md:mt-6 max-w-sm leading-relaxed">
                I help founders, leaders, and teams grow brands and careers they actually want to live inside — by blending coaching, consulting, and ritual.
              </p>
            </motion.div>

            {/* Kanan: logo — desktop only */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden md:flex flex-col justify-end pb-4 md:pb-16 flex-shrink-0"
            >
              <img src="/logo.png" alt="Jennie Wolff" className="w-44 lg:w-56 object-contain" />
            </motion.div>

          </div>
        </div>

        {/* Logo mobile — di bawah hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex md:hidden justify-end px-6 pb-4"
        >
          <img src="/logo.png" alt="Jennie Wolff" className="w-14 object-contain" />
        </motion.div>

      </section>

      {/* ════════════════════════════════════════
          Section 2+ — normal flow, background solid.
          Otomatis nutup hero saat scroll karena
          document flow normal (bukan z-index tricks).
      ════════════════════════════════════════ */}

      {/* 03 INTRO */}
      <section className="bg-navy py-10 px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed max-w-5xl mx-auto">
            "Before we dig into the strategy, the launch plan, and the team dynamic, we drop in.
            Phones down. One breath. Then we begin. That small shift is where everything else gets easier."
          </p>
        </div>
      </section>

      {/* 04 WHO I WORK WITH */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="bg-terracotta overflow-hidden" style={{ position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <div className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-3xl md:text-5xl font-serif text-center text-white"
            >
              Who I Work With
            </motion.h2>
          </div>
        </div>

        {/* Marquee — full bleed */}
        <div className="w-full overflow-hidden border-y border-white/20 py-5">
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

        {/* Cards */}
        <div className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Founders & entrepreneurs", desc: "You're building something that matters, and you don't want to burn out doing it. We get clear on the vision, the offer, and the version of you that gets to lead it." },
              { title: "Brand & marketing leaders", desc: "You can run the playbook in your sleep. What's missing is the soul, the story, the point of difference, the magic that makes your brand feel like a place people want to belong to." },
              { title: "Teams in transition", desc: "Growth, restructuring, a new chapter. I work with leadership teams to rebuild trust, sharpen voice, and turn a group of high performers back into a wolffpack." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                viewport={{ once: false }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-8 bg-white/10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full mb-8 flex items-center justify-center text-white font-serif text-xl italic">
                  {i === 0 ? "01" : i === 1 ? "02" : "03"}
                </div>
                <h3 className="text-2xl font-serif mb-6 text-white">{item.title}</h3>
                <p className="text-white/80 leading-relaxed md:text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </motion.section>

      {/* 05 THREE WAYS */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="section-padding bg-cream" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-serif mb-16 text-center text-navy"
          >
            Three Ways to Work Together
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { title: "1:1 Coaching Containers", desc: "Three months of coaching, consulting, and ritual designed around your one big build.", items: ["75-minute sessions on a cadence that fits your life", "Strategic advising + somatic coaching", "A closing ritual to mark what you've built"], cta: "Request a Clarity Session" },
              { title: "Team & Leadership Sessions", desc: "Monthly sessions that develop your leaders and your culture in the same room.", items: ["Group leadership sessions and 1:1 coaching", "Practical tools for boundaries and confidence", "Built to fit a fast-moving operating company"], cta: "Inquire for Your Team" },
              { title: "Brand Strategy & Storytelling", desc: "Brand foundation work for emerging companies that need to find their point of difference.", items: ["Story, positioning, and brand foundation", "Experience design for launches and photo shoots", "Drawn from a decade leading high-growth brands"], cta: "Book a Brand Consult" }
            ].map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: false }}
                className="bg-white p-10 md:p-12 border border-navy/10 rounded-[2.5rem] flex flex-col group hover:shadow-xl transition-all duration-700"
              >
                <h3 className="text-3xl font-serif mb-6 text-navy group-hover:text-terracotta transition-colors">{svc.title}</h3>
                <p className="text-sage mb-4 text-lg italic">{svc.desc}</p>
                <ul className="text-sm space-y-4 mb-10 text-sage/80 border-t border-navy/10 pt-6">
                  {svc.items.map((item, j) => (
                    <li key={j} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta/60 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="terracotta-button w-full text-center py-4 text-lg mt-auto">{svc.cta}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 06 THE APPROACH */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="section-padding bg-terracotta text-white" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-container text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-sm uppercase tracking-widest opacity-80 font-semibold mb-6 block">
            The Approach
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif mb-20 max-w-4xl mx-auto leading-tight">
            Heal the system, not the symptom.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { step: "Drop In", text: "We start with breath, presence, and what's alive for you today." },
              { step: "Go Deep", text: "We work the real issue — brand, business, or self — with the right tool for the moment." },
              { step: "Take One Small Step", text: "You leave with one action. Small steps lead to big change." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.2 }} viewport={{ once: false }} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 border border-white/30 rounded-full flex items-center justify-center mb-8 text-xl font-serif italic">{i + 1}</div>
                <h4 className="text-2xl font-serif mb-4">{item.step}</h4>
                <p className="text-white/80 max-w-[280px] leading-relaxed italic">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 07 TESTIMONIAL */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="section-padding bg-cream" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-container text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: false }} className="max-w-3xl mx-auto">
            <p className="text-3xl md:text-5xl font-serif italic mb-12 leading-tight text-terracotta">
              "TEST CONTENT TO BE PROVIDED BY JENNIE"
            </p>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-sage/20 rounded-full overflow-hidden flex items-center justify-center">
                <span className="text-sage text-xs uppercase tracking-widest font-bold">Photo</span>
              </div>
              <div>
                <p className="font-serif text-xl text-charcoal">[Client Name]</p>
                <p className="text-xs uppercase tracking-widest text-sage font-bold">[Position, Company]</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 08 ABOUT SHORT */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="section-padding bg-cream" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: false }} className="order-2 md:order-1">
            <div className="aspect-square rounded-[3rem] overflow-hidden group border border-blush">
              <img src="/Jennie2.png" alt="Jennie at work" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: false }} className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-navy">
              A practice built on <span className="italic">two decades</span> of doing the work.
            </h2>
            <p className="text-xl text-sage mb-10 leading-relaxed italic">
              I spent nearly a decade building the Sola Salon Studios brand as CMO. Today, I use all of that brand-building methodology and pair it with somatic coaching to help you build something that lasts.
            </p>
            <Link to="/about" className="group text-terracotta text-lg font-medium inline-flex items-center">
              <span className="border-b border-terracotta/0 group-hover:border-terracotta transition-all">Read My Story</span>
              <ArrowRight size={22} className="ml-3 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 09 NEWSLETTER */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="section-padding bg-terracotta overflow-hidden" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-container max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Join the wolffpack.</h2>
            <p className="text-lg text-white/80 mb-12 italic">
              Occasional notes on building brave brands, leading with breathing room, and finding the small rituals that hold it all together. No pitch, no cadence pressure — just the good stuff.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Email address" className="flex-grow bg-white/20 border border-white/30 rounded-full px-8 py-4 focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder:text-white/60" required />
              <button className="bg-navy text-white whitespace-nowrap px-10 py-4 text-lg rounded-full font-medium hover:opacity-90 transition-all">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default Home;
