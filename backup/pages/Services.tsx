import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const faqs = [
    { q: "Are sessions virtual or in-person?", a: "Both. Most 1:1 work happens over Zoom. Team work, rituals, and brand workshops are designed for in-person whenever possible." },
    { q: "Why are your sessions 75 minutes?", a: "Because 60 feels rushed. Real shifts need a few minutes of “how are you” at the start and a few minutes to land at the end." },
    { q: "Are you a coach or a consultant?", a: "Both, depending on what the moment needs. I’m ICM-certified as a coach and spent two decades as a brand and marketing leader. Most clients get both inside the same session." },
    { q: "Do you take on every client?", a: "No. I work with a small number of people at a time so I can stay in the work with each of them. The clarity call is how we both decide if it’s a yes." },
    { q: "What does “ritual” actually mean here?", a: "Intentional, non-religious practices. Breath, journaling, ceremony, gathering. Designed to mark a moment so the work actually integrates." },
    { q: "Where are you based?", a: "Denver, Colorado. I work with clients across the U.S. and travel for select team and brand engagements." }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-cream overflow-hidden">
      {/* 01 HEADER */}
      <header className="section-padding pt-40 pb-20 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(189,100,74,0.03)_0%,transparent_50%)]" />
        <div className="max-container relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-9xl font-serif mb-12 text-charcoal leading-[0.9]"
          >
            Ways to <span className="italic">work</span> together
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-3xl text-sage max-w-4xl leading-relaxed italic"
          >
            Every engagement I run is a custom container. Some clients show up with a brand to launch. Some show up with a team to lead. Some show up because they need to find themselves again before they can do either. The five offerings below are the doorways. We shape what happens inside together.
          </motion.p>
        </div>
      </header>

      {/* 02 STICKY NAV */}
      <nav className="sticky top-20 z-40 bg-cream/95 backdrop-blur-sm border-y border-sage/10 py-6 px-6 overflow-x-auto shadow-sm">
        <div className="max-container flex justify-between md:justify-center items-center space-x-10 md:space-x-16 whitespace-nowrap text-xs font-bold text-sage uppercase tracking-[0.2em]">
           <button onClick={() => scrollToSection('coaching')} className="hover:text-terracotta transition-colors relative group">
             1:1 Coaching
             <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all group-hover:w-full" />
           </button>
           <button onClick={() => scrollToSection('team')} className="hover:text-terracotta transition-colors relative group">
             Team & Leadership
             <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all group-hover:w-full" />
           </button>
           <button onClick={() => scrollToSection('brand')} className="hover:text-terracotta transition-colors relative group">
             Brand Strategy
             <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all group-hover:w-full" />
           </button>
           <button onClick={() => scrollToSection('ritual')} className="hover:text-terracotta transition-colors relative group">
             Ritual
             <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all group-hover:w-full" />
           </button>
           <button onClick={() => scrollToSection('advisory')} className="hover:text-terracotta transition-colors relative group">
             Advisory
             <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all group-hover:w-full" />
           </button>
        </div>
      </nav>

      {/* 03 SERVICE 1 - COACHING */}
      <section id="coaching" className="section-padding scroll-mt-32">
        <div className="max-container">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
               <span className="text-terracotta font-serif text-3xl mb-4 block italic">1:1 Coaching Containers</span>
               <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">Guided strategy for the build and the builder.</h2>
               <div className="space-y-10">
                 <div>
                   <h4 className="text-xs uppercase tracking-[0.2em] text-sage font-bold mb-4">Who it's for</h4>
                   <p className="text-charcoal text-lg leading-relaxed">Founders, entrepreneurs, and high-achieving leaders who are building something brave and want a guide for the strategy and the human leading it.</p>
                 </div>
                 <div>
                   <h4 className="text-xs uppercase tracking-[0.2em] text-sage font-bold mb-4">What it is</h4>
                   <p className="text-charcoal text-lg leading-relaxed">A three-month container of coaching, consulting, and ritual designed around your one big build. We meet on a cadence that fits your life.</p>
                 </div>
                 <Link to="/contact" className="terracotta-button inline-flex items-center px-10 py-4 text-lg">
                   Request a Clarity Session <ArrowRight size={20} className="ml-2" />
                 </Link>
               </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-white p-10 md:p-16 rounded-[3rem] border border-sage/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative"
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blush/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-serif mb-10 border-b border-sage/10 pb-6 italic">What's Included</h3>
                <ul className="space-y-8">
                  {[
                    "X 75-minute 1:1 sessions over three months",
                    "A blend of somatic coaching and strategic advising",
                    "Custom tools and frameworks from ICM training",
                    "Async support between sessions: text & voice notes",
                    "A closing ritual ceremony to mark what you’ve built"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="mt-1 mr-5 text-terracotta group-hover:scale-125 transition-transform"><Check size={20} /></div>
                      <span className="text-sage text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
             </motion.div>
           </div>
        </div>
      </section>

      {/* 04 SERVICE 2 - TEAM */}
      <section id="team" className="section-padding bg-sage/5 scroll-mt-32 relative overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-0 w-80 h-80 bg-blush/10 rounded-full blur-3xl -z-10" 
        />
        <div className="max-container">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="lg:order-2"
             >
               <span className="text-terracotta font-serif text-3xl mb-4 block italic">Team & Leadership Sessions</span>
               <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">Develop your leaders and your culture in the same room.</h2>
               <div className="space-y-10">
                 <div>
                   <h4 className="text-xs uppercase tracking-[0.2em] text-sage font-bold mb-4">Who it's for</h4>
                   <p className="text-charcoal text-lg leading-relaxed">Founder-led companies and leadership teams who want to grow people and culture in the same room.</p>
                 </div>
                 <div>
                   <h4 className="text-xs uppercase tracking-[0.2em] text-sage font-bold mb-4">What it is</h4>
                   <p className="text-charcoal text-lg leading-relaxed">A monthly engagement that develops your leaders as a group and supports key team members 1:1. Modeled on the work I led inside Sola for years.</p>
                 </div>
                 <Link to="/contact" className="terracotta-button inline-flex items-center px-10 py-4 text-lg">
                    Inquire for Your Team <ArrowRight size={20} className="ml-2" />
                 </Link>
               </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="lg:order-1 bg-white p-10 md:p-16 rounded-[3rem] border border-sage/10 shadow-2xl shadow-sage/5"
             >
                <h3 className="text-2xl font-serif mb-10 border-b border-sage/10 pb-6 italic">What's Included</h3>
                <ul className="space-y-8">
                  {[
                    "Monthly group leadership sessions (90–120 minutes)",
                    "1:1 coaching containers for key leaders",
                    "Practical tools for boundaries and confidence",
                    "Quarterly culture check-ins with founders",
                    "Optional team rituals around off-sites or launches"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="mt-1 mr-5 text-terracotta group-hover:scale-125 transition-transform"><Check size={20} /></div>
                      <span className="text-sage text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
             </motion.div>
           </div>
        </div>
      </section>

      {/* 05 SERVICE 3 - BRAND */}
      <section id="brand" className="section-padding scroll-mt-32 relative">
        <div className="max-container">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <span className="text-terracotta font-serif text-3xl mb-4 block italic">Brand Strategy & Storytelling</span>
               <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">Find the heart of your brand.</h2>
               <div className="space-y-10">
                 <div>
                   <h4 className="text-xs uppercase tracking-[0.2em] text-sage font-bold mb-4">For</h4>
                   <p className="text-charcoal text-lg leading-relaxed">Emerging brands and founders who can’t articulate what makes them different, and need a partner who can find it and stand behind it.</p>
                 </div>
                 <div>
                   <h4 className="text-xs uppercase tracking-[0.2em] text-sage font-bold mb-4">What it is</h4>
                   <p className="text-charcoal text-lg leading-relaxed">Brand foundation work, drawn from a decade leading brand at Sola. We build the story, the positioning, and the heart of the brand.</p>
                 </div>
                 <Link to="/contact" className="terracotta-button inline-flex items-center px-10 py-4 text-lg">
                    Book a Brand Consult <ArrowRight size={20} className="ml-2" />
                 </Link>
               </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white p-10 md:p-16 rounded-[3rem] border border-sage/10 shadow-2xl shadow-sage/5"
             >
                <h3 className="text-2xl font-serif mb-10 border-b border-sage/10 pb-6 italic">What We Build Together</h3>
                <ul className="space-y-8">
                  {[
                    "Brand foundation: story, values, voice, and difference",
                    "Audience profiling and positioning",
                    "Messaging architecture and proof points",
                    "Experience design for launches, photo and video shoots, and signature events",
                    "Talk-trigger moments: the magic people share"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="mt-1 mr-5 text-terracotta group-hover:scale-125 transition-transform"><Check size={20} /></div>
                      <span className="text-sage text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
             </motion.div>
           </div>
        </div>
      </section>

      {/* 06 SERVICE 4 - RITUAL */}
      <section id="ritual" className="section-padding bg-sage text-white scroll-mt-32 relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 rounded-full blur-3xl -z-10" 
        />
        <div className="max-container">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
               whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="aspect-square bg-white shadow-2xl rounded-[3rem] overflow-hidden relative group"
             >
               <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Ritual" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-sage/20 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity" />
             </motion.div>
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <span className="text-blush font-serif text-3xl mb-4 block italic">Ritual & Intentional Experiences</span>
               <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Gatherings that actually move something.</h2>
               <p className="text-white/80 text-xl mb-10 leading-relaxed italic">
                  Curated, non-religious ritual gatherings, from the closing ceremony of a coaching container to a small private event for your team or community. Create space for yourself and others to sit with each other and share a transformational experience.
               </p>
               <div className="mb-12">
                 <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold mb-6">Examples</h4>
                 <ul className="space-y-4">
                   {[
                     "Closing rituals to mark the end of a coaching container",
                     "Intimate gatherings around a new moon, a launch, or a transition",
                     "Team rituals around off-sites, anniversaries, or hard chapters",
                     "Brand experiences and photo/video shoots that double as ceremonies"
                   ].map((ex, i) => (
                     <li key={i} className="flex items-start">
                       <span className="w-1.5 h-1.5 rounded-full bg-blush mt-2.5 mr-3 flex-shrink-0" />
                       <span className="text-white/80">{ex}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               <Link to="/contact" className="bg-white text-sage px-10 py-4 rounded-full font-bold hover:bg-cream transition-all inline-flex items-center group">
                 Design an Experience With Me <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-2" />
               </Link>
             </motion.div>
           </div>
        </div>
      </section>

      {/* 07 SERVICE 5 - ADVISORY */}
      <section id="advisory" className="section-padding scroll-mt-32 relative">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-terracotta font-serif text-3xl mb-4 block italic">Advisory / Fractional Brand Leadership</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">Senior brand leadership in the room without the full-time hire.</h2>
              <div className="space-y-10">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-sage font-bold mb-4">Who it's for</h4>
                  <p className="text-charcoal text-lg leading-relaxed">A small number of select brands that need senior brand leadership without a full-time hire. Typically founder-led companies in transition, scaling, or preparing for a sale.</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-sage font-bold mb-4">What it is</h4>
                  <p className="text-charcoal text-lg leading-relaxed">A selective, by-referral advisory relationship. I sit beside leadership as a strategic partner and brand voice.</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-sage font-bold mb-4">Format</h4>
                  <p className="text-charcoal text-lg leading-relaxed italic">Limited capacity. By introduction or referral only.</p>
                </div>
                <Link to="/contact" className="terracotta-button inline-flex items-center px-10 py-4 text-lg">
                  Inquire About Advisory <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[3rem] border border-sage/10 shadow-2xl shadow-sage/5"
            >
              <h3 className="text-2xl font-serif mb-10 border-b border-sage/10 pb-6 italic">What This Looks Like</h3>
              <ul className="space-y-8">
                {[
                  "Strategic partner and brand voice alongside leadership",
                  "Brand foundation, positioning, and launch strategy",
                  "Support through transition, scaling, or a private-equity event",
                  "Drawn from a decade as CMO and years as fractional brand lead",
                  "Selective — I work with a small number of partners at a time"
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="mt-1 mr-5 text-terracotta group-hover:scale-125 transition-transform"><Check size={20} /></div>
                    <span className="text-sage text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 08 HOW WE BEGIN */}
      <section className="section-padding bg-blush/10 border-y border-blush/20 text-center relative">
        <div className="max-container">
           <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-serif mb-24"
           >
            Every engagement starts with a real conversation.
           </motion.h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center relative">
             {/* Connecting dashed line */}
             <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px border-t-2 border-dashed border-terracotta/20 -z-10" />
             
             {[
               { title: "1. Reach Out", desc: "Send a note through the contact page summarizing your current build." },
               { title: "2. Clarity Call", desc: "If we’re a fit, I’ll invite you to a complimentary 30-minute clarity session." },
               { title: "3. Your Container", desc: "If we both feel the alignment, I’ll send a proposal for your custom container." }
             ].map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.2 }}
                 viewport={{ once: true }}
                 className="group"
               >
                 <div className="w-20 h-20 bg-white border border-sage/10 rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-serif text-terracotta shadow-sm group-hover:scale-110 transition-transform">
                   {i + 1}
                 </div>
                 <h4 className="text-2xl font-serif mb-4 group-hover:text-terracotta transition-colors">{step.title}</h4>
                 <p className="text-sage text-lg italic leading-relaxed">{step.desc}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* 09 FAQ */}
      <section className="section-padding bg-cream relative">
        <div className="max-container max-w-4xl">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-serif mb-16 text-center"
           >
            Questions & Nuances
           </motion.h2>
           <div className="space-y-6">
             {faqs.map((faq, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.05 }}
                 viewport={{ once: true }}
                 className="border border-sage/10 rounded-[2rem] overflow-hidden bg-white hover:border-terracotta/20 transition-colors shadow-sm"
               >
                 <button 
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full text-left px-10 py-8 flex justify-between items-center group"
                 >
                   <span className="font-serif text-xl md:text-2xl group-hover:text-terracotta transition-colors">{faq.q}</span>
                   <div className={`text-sage transition-all duration-500 p-2 rounded-full ${activeAccordion === i ? 'bg-terracotta text-white rotate-180' : 'bg-sage/5'}`}>
                    <ChevronDown size={24} />
                   </div>
                 </button>
                 <AnimatePresence>
                   {activeAccordion === i && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                       className="overflow-hidden"
                     >
                       <div className="px-10 pb-10 text-sage text-lg leading-relaxed italic border-t border-sage/5 pt-6">
                         {faq.a}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </motion.div>
             ))}
           </div>
        </div>
      </section>
      
      {/* 10 CLOSING CTA */}
      <section className="section-padding bg-cream text-center">
        <div className="max-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif mb-10 text-charcoal"
          >
            Not sure which fits? Let's find out together.
          </motion.h2>
          <Link to="/contact" className="terracotta-button inline-flex items-center px-10 py-4 text-lg">
            Request a Session <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
