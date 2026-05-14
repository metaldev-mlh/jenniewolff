import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  const values = [
    { name: "Connection", def: "The work doesn’t move until two humans actually drop in." },
    { name: "Joy", def: "Joy is a strategy. It’s also why my LLC is named Joyous Wolf." },
    { name: "Wellbeing", def: "You can’t lead what you can’t sustain. Boundaries first." },
    { name: "Authenticity", def: "The version of you that’s already here is the one we’re building from." },
    { name: "Community", def: "Success unshared is failure. Every tool I’ve learned belongs in someone else’s hands, too." }
  ];

  return (
    <div className="bg-cream overflow-hidden">
       {/* 01 HEADER */}
       <header className="section-padding pb-0 pt-40 relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-blush/10 rounded-full blur-3xl -z-10 animate-float" />
         <div className="max-container">
           <motion.span 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-8 block"
           >
             About Jennie
           </motion.span>
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="text-5xl md:text-8xl font-serif leading-[1.05] max-w-5xl"
           >
             Storyteller, <span className="italic">magic-maker,</span> and the coach you call when you’re building something brave and don’t want to lose yourself doing it.
           </motion.h1>
         </div>
       </header>

       {/* 02 BIO */}
       <section className="section-padding">
         <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-24">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-10 text-xl text-sage leading-relaxed italic"
           >
             <p>
              I started in big rooms. Five years running 50+ events a month across the Pepsi Center, Dick's Sporting Goods Park, and the Paramount Theater taught me how to hold a crowd and make a logistics machine feel like an experience.
             </p>
             <p className="not-italic text-charcoal">
              From there I moved to a marketing agency, learned to braid experiential, digital, and brand into one voice, and landed at Sola Salon Studios as their first in-house marketing hire.
             </p>
             <p className="not-italic text-charcoal">
              I spent nearly a decade at Sola Salon Studios building the brand, leading the team, and eventually serving as CMO of the parent company. After that chapter, I built a small fractional CMO practice, took real time off when my daughter was born, and trained as a coach at the Institute for Coaching Mastery (certified 2024).
             </p>
             <p className="not-italic text-charcoal">
              Today I run a small, intentional practice as a holistic brand and leadership coach. Part strategist, part guide, part ritual-keeper. Mom of two. Still learning.
             </p>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2 }}
             viewport={{ once: true }}
             className="aspect-[3/4] bg-sage/10 rounded-[3rem] overflow-hidden relative group"
           >
              <img
                src="/Jennie2.png"
                alt="Jennie Wolff"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-terracotta/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
           </motion.div>
         </div>
       </section>

       {/* 03 PULL QUOTE */}
       <section className="py-32 bg-sage text-white relative overflow-hidden">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"
         />
         <div className="max-container px-6 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif italic leading-tight max-w-5xl mx-auto"
            >
              "The best brands aren't built on spreadsheets alone. They're built by humans who are taking care of the source."
            </motion.h2>
         </div>
       </section>

       {/* 04 VALUES */}
       <section className="section-padding">
         <div className="max-container">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif mb-4">My five North Stars.</h2>
             <p className="text-sage">They shape how I show up — with my clients, my kids, and myself.</p>
           </div>
           <div className="flex flex-wrap justify-center gap-4">
             {values.map((v) => (
               <div key={v.name} className="relative">
                 <button 
                   onClick={() => setExpandedValue(expandedValue === v.name ? null : v.name)}
                   className={`px-8 py-3 rounded-full border transition-all duration-300 font-medium ${
                     expandedValue === v.name 
                     ? 'bg-terracotta text-white border-terracotta shadow-lg scale-105' 
                     : 'bg-white border-sage/20 text-sage hover:border-terracotta hover:text-terracotta'
                   }`}
                 >
                   {v.name}
                 </button>
                 <AnimatePresence>
                   {expandedValue === v.name && (
                     <motion.div
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: 10 }}
                       className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white p-4 rounded-xl shadow-xl z-10 border border-sage/10 text-center text-sm text-sage leading-relaxed"
                     >
                       <p>{v.def}</p>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* 05 PROCESS */}
       <section className="section-padding bg-sage text-white">
         <div className="max-container">
           <div className="max-w-3xl mb-16">
             <h2 className="text-4xl font-serif mb-6">My process is intentionally part-coach, part-consultant, part-ritual-keeper.</h2>
             <p className="text-white/80 text-lg">Most of my clients get all three in the same session.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
             {[
               {
                 title: "1. Drop In",
                 desc: "Every session starts with a moment of presence. Sometimes a breath, sometimes a guided meditation, sometimes just a deep exhale and a question. We don’t rush. My sessions are 75 minutes on purpose."
               },
               {
                 title: "2. Diagnose the Whole System",
                 desc: "Whatever you bring: a hiring decision, a launch, a stuck moment, a story you can’t shake — we look at it the way a holistic practitioner looks at a body. The symptom is real, but rarely the root. We find the root."
               },
               {
                 title: "3. Coach + Consult",
                 desc: "This is where my background as a CMO and my training as a coach work together. Sometimes the right tool is a somatic practice. Sometimes it’s a positioning framework. Sometimes it’s, “your pricing is wrong, here’s what I’d do.” I don’t pretend to only wear one hat."
               },
               {
                 title: "4. One Small Step",
                 desc: "Every session ends with a single action — sometimes as small as “start drinking water.” Small steps, repeated over a three-month container, are what create the shift."
               },
               {
                 title: "5. Close With Ritual",
                 desc: "Coaching containers end with an intentional, non-religious ritual ceremony — a way of marking what you built and what you’re leaving behind. It’s the part most clients tell me about months later."
               }
             ].map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="space-y-4"
               >
                 <h3 className="text-2xl font-serif">{step.title}</h3>
                 <p className="text-white/70 leading-relaxed">{step.desc}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

       {/* 06 CREDENTIALS */}
       <section className="section-padding">
         <div className="max-container">
           <motion.h2 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-serif mb-16 border-b border-sage/20 pb-8"
           >
             Certifications & Credentials
           </motion.h2>
           <div className="space-y-16">
             {[
               {
                 title: "Certified Coach: Institute for Coaching Mastery (ICM), 2024",
                 desc: "Somatic, mindfulness, and trauma-informed coaching tools. The framework underpins how I hold space for clients."
               },
               {
                 title: "Former CMO: Sola Salon Studios & Radiance Holdings",
                 desc: "Nearly a decade leading brand, marketing, and experience for a category-defining franchise."
               },
               {
                 title: "Fractional CMO: Brands across wellness, beauty, and lifestyle",
                 desc: "Brand foundation, positioning, and launch strategy for emerging companies."
               },
               {
                 title: "Integrated Marketing: Denver-based marketing agency",
                 desc: "Experiential, digital, and brand strategy across national consumer brands."
               },
               {
                 title: "Special Events: Pepsi Center, Dick’s Sporting Goods Park",
                 desc: "50+ events a month across three venues. I learned events become an experience."
               }
             ].map((cred, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 group"
               >
                 <h4 className="md:col-span-1 text-xs uppercase tracking-[0.2em] text-terracotta font-bold transition-all group-hover:translate-x-2">
                   {cred.title.split(':')[0]}
                 </h4>
                 <div className="md:col-span-3 space-y-4">
                   <p className="font-serif text-2xl md:text-3xl leading-tight group-hover:text-terracotta transition-colors">{cred.title}</p>
                   <p className="text-sage text-lg leading-relaxed max-w-2xl">{cred.desc}</p>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

       {/* 07 OFF THE CLOCK */}
       <section className="section-padding bg-cream/50 relative overflow-hidden">
         <div className="max-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-terracotta">Off the Clock</h2>
                <div className="space-y-6 text-lg text-sage leading-relaxed italic">
                  <p>
                    Mom to two. Wife. Recovering workaholic and insomniac. Live music will always pull me out of the house. 
                  </p>
                  <p>
                    I host small ritual gatherings with my girlfriends, drink martinis with intention, and practice what I preach about boundaries.
                  </p>
                </div>
              </motion.div>
              <div className="flex gap-8 relative">
                 <motion.div
                   initial={{ rotate: -5, y: 20 }}
                   whileInView={{ rotate: -2, y: 0 }}
                   transition={{ duration: 1 }}
                   viewport={{ once: true }}
                   className="flex-1 aspect-[3/4] rounded-[2rem] bg-blush overflow-hidden shadow-2xl relative z-10"
                 >
                   <img src="/Jennie2.png" alt="Jennie off the clock" className="w-full h-full object-cover" />
                 </motion.div>
                 <motion.div
                   initial={{ rotate: 5, y: 60 }}
                   whileInView={{ rotate: 3, y: 40 }}
                   transition={{ duration: 1.2, delay: 0.2 }}
                   viewport={{ once: true }}
                   className="flex-1 aspect-[3/4] rounded-[2rem] bg-sage/20 overflow-hidden shadow-2xl"
                 >
                   <img src="/Jenniee.png" alt="Jennie" className="w-full h-full object-cover" />
                 </motion.div>
                 {/* Floating background shape */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-terracotta/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>
         </div>
       </section>

       {/* 08 CTA */}
       <section className="section-padding bg-terracotta text-white text-center">
         <div className="max-container">
           <h2 className="text-3xl md:text-5xl font-serif mb-8">If any of this resonates, let’s talk.</h2>
           <Link to="/contact" className="inline-flex items-center bg-white text-terracotta px-10 py-4 rounded-full font-semibold hover:bg-cream transition-all group">
             Request a Session <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
           </Link>
         </div>
       </section>
    </div>
  );
};

export default About;
