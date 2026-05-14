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
      <section className="bg-navy sticky top-0 h-screen flex flex-col overflow-hidden" style={{ zIndex: 0, isolation: 'isolate' }}>

        {/* ── NAVBAR di dalam hero ── */}
        <nav className="relative z-20 w-full px-8 md:px-16 py-3 flex items-center justify-center">
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
                  location.pathname === link.path ? 'text-terracotta' : 'text-white/70 hover:text-white'
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
          <button className="md:hidden ml-auto p-2 text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
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
              className="relative z-20 bg-navy border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col space-y-8 py-12 text-center">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} className="text-2xl font-serif italic text-white/80 hover:text-terracotta transition-colors">
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
                <Link to="/services" className="text-white/60 text-xs uppercase tracking-widest hover:text-white transition-colors">
                  See how we work together
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
              <p className="text-white/70 text-xs sm:text-sm md:text-lg mt-3 md:mt-6 max-w-sm leading-relaxed">
                I help founders, leaders, and teams grow brands and careers they actually want to live inside — by blending coaching, consulting, and ritual.
              </p>
              {/* CTA di bawah nama — mobile only */}
              <div className="flex md:hidden flex-col items-start gap-2 mt-4">
                <Link
                  to="/contact"
                  className="bg-terracotta text-white py-2.5 px-5 rounded-full font-medium hover:opacity-90 transition-all text-[10px] uppercase tracking-widest flex items-center gap-1.5"
                >
                  Request a Session <ArrowRight size={12} />
                </Link>
                <Link to="/services" className="text-white/60 text-[10px] uppercase tracking-widest hover:text-white transition-colors">
                  See how we work
                </Link>
              </div>
            </motion.div>

            {/* Kanan: logo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col justify-end pb-4 md:pb-16 flex-shrink-0"
            >
              <img src="/logo.png" alt="Jennie Wolff" className="w-12 sm:w-20 md:w-44 lg:w-56 object-contain" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          Section 2+ — normal flow, background solid.
          Otomatis nutup hero saat scroll karena
          document flow normal (bukan z-index tricks).
      ════════════════════════════════════════ */}

      {/* 03 INTRO */}
      <section className="bg-terracotta py-10 px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed max-w-5xl mx-auto">
            "Before we dig into the strategy, the launch plan, and the team dynamic, we drop in.
            Phones down. One breath. Then we begin. That small shift is where everything else gets easier."
          </p>
        </div>
      </section>

      {/* 04 WHO I WORK WITH */}
      <section className="section-padding bg-cream" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif mb-20 text-center text-navy"
          >
            Who I Work With
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Founders & entrepreneurs", desc: "You're building something that matters, and you don't want to burn out doing it. We get clear on the vision, the offer, and the version of you that gets to lead it." },
              { title: "Brand & marketing leaders", desc: "You can run the playbook in your sleep. What's missing is the soul, the story, the point of difference, the magic that makes your brand feel like a place people want to belong to." },
              { title: "Teams in transition", desc: "Growth, restructuring, a new chapter. I work with leadership teams to rebuild trust, sharpen voice, and turn a group of high performers back into a Wolfpack." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-navy/10 hover:border-navy/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-full mb-8 flex items-center justify-center text-navy font-serif text-xl italic">
                  {i === 0 ? "01" : i === 1 ? "02" : "03"}
                </div>
                <h3 className="text-2xl font-serif mb-6 text-navy">{item.title}</h3>
                <p className="text-sage leading-relaxed md:text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 THREE WAYS */}
      <section className="section-padding bg-navy" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-container">
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
                viewport={{ once: true }}
                className="bg-cream p-10 md:p-12 border border-navy/10 rounded-[2.5rem] flex flex-col group hover:shadow-2xl transition-all duration-700"
              >
                <h3 className="text-3xl font-serif mb-6 text-navy group-hover:text-terracotta transition-colors">{svc.title}</h3>
                <p className="text-sage mb-10 flex-grow text-lg italic">{svc.desc}</p>
                <ul className="text-sm space-y-4 mb-10 text-sage/80 border-t border-navy/10 pt-8">
                  {svc.items.map((item, j) => (
                    <li key={j} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta/60 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="terracotta-button w-full text-center py-4 text-lg">{svc.cta}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 THE APPROACH */}
      <section className="section-padding bg-terracotta text-white" style={{ position: 'relative', zIndex: 1 }}>
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
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 border border-white/30 rounded-full flex items-center justify-center mb-8 text-xl font-serif italic">{i + 1}</div>
                <h4 className="text-2xl font-serif mb-4">{item.step}</h4>
                <p className="text-white/80 max-w-[280px] leading-relaxed italic">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 TESTIMONIAL */}
      <section className="section-padding bg-cream" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-container text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
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
      </section>

      {/* 08 ABOUT SHORT */}
      <section className="section-padding bg-navy" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="order-2 md:order-1">
            <div className="aspect-square rounded-[3rem] overflow-hidden group">
              <img src="/Jennie2.png" alt="Jennie at work" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-white">
              A practice built on <span className="italic">two decades</span> of doing the work.
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed italic">
              I spent nearly a decade building the Sola Salon Studios brand as CMO. Today, I use all of that brand-building methodology and pair it with somatic coaching to help you build something that lasts.
            </p>
            <Link to="/about" className="group text-terracotta text-lg font-medium inline-flex items-center">
              <span className="border-b border-terracotta/0 group-hover:border-terracotta transition-all">Read My Story</span>
              <ArrowRight size={22} className="ml-3 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 09 NEWSLETTER */}
      <section className="section-padding bg-terracotta overflow-hidden" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-container max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Join the Wolfpack.</h2>
            <p className="text-lg text-white/80 mb-12 italic">
              Occasional notes on building brave brands, leading with breathing room, and finding the small rituals that hold it all together. No pitch, no cadence pressure — just the good stuff.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Email address" className="flex-grow bg-white/20 border border-white/30 rounded-full px-8 py-4 focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder:text-white/60" required />
              <button className="bg-navy text-white whitespace-nowrap px-10 py-4 text-lg rounded-full font-medium hover:opacity-90 transition-all">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
