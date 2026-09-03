import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sparkle, Crescent } from '../components/Decorative';

/* Shared editorial reveal variants — the whole page unfolds on scroll. */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ─── 05 PROCESS — scroll-driven 5-orb grid (3 on top, 2 on bottom) ─── */
const PROCESS = [
  {
    title: '1. Slow Down',
    desc: "Every session starts with a moment of presence — sometimes a breath, sometimes a quiet question. We don't rush. My sessions are 75 minutes on purpose, so we have room to actually land.",
  },
  {
    title: '2. Find Clarity',
    desc: "Whatever you bring — a hiring decision, a launch, a stuck moment, a story you can't shake — we look underneath it together. The symptom is real, but rarely the root. We find the root.",
  },
  {
    title: '3. Coach + Consult',
    desc: "This is where my background as a CMO and my training as a coach work together. Sometimes the right tool is a reflective practice. Sometimes it's a strategy framework. I don't pretend to only wear one hat.",
  },
  {
    title: '4. Take Aligned Action',
    desc: "Every session ends with a single next step — practical, achievable, and true to who you are. Small steps, repeated over time, are what create the shift.",
  },
  {
    title: '5. Mark the Moment',
    desc: "For some clients, that means closing a coaching container with a small, intentional ritual — a way of marking what you built and what you're leaving behind. It's the part I hear about months later.",
  },
];

/* Grid positions (relative to the right-hand card): 3 on top, 2 on bottom */
const PROCESS_POS = [
  { left: '16%', top: '26%' },
  { left: '50%', top: '26%' },
  { left: '84%', top: '26%' },
  { left: '31%', top: '72%' },
  { left: '69%', top: '72%' },
];

/* A single process orb: art.png reveals top→bottom, ring draws itself, black title+desc on top. */
const ProcessOrb = ({
  or,
  pos,
  shown,
  active,
  ring,
}: {
  or: { title: string; desc: string };
  pos: { left: string; top: string };
  shown: boolean;
  active: boolean;
  ring: number;
}) => {
  const shownState = { opacity: 1, y: 0 };
  const hiddenState = { opacity: 0, y: 18 };
  return (
    <motion.div
      animate={{ left: pos.left, top: pos.top, scale: active ? 1.08 : 1, opacity: shown ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ x: '-50%', y: '-50%' }}
      className="absolute aspect-square w-[min(30vh,20vw)] [perspective:1400px]"
    >
      <div className="relative h-full w-full">
        {/* art.png — reveals from top to bottom */}
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,black_62%,transparent_82%)]">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.img
              src="/art.png"
              alt=""
              aria-hidden
              initial={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }}
              animate={shown ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* text — black title + desc, fades in last above the art (no shadow) */}
        <motion.div
          initial={hiddenState}
          animate={shown ? shownState : hiddenState}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 md:px-8"
        >
          <h4 className="text-charcoal font-serif text-lg md:text-2xl leading-tight">{or.title}</h4>
          <p className="mt-1 md:mt-2 text-charcoal/80 text-xs md:text-sm italic leading-snug">{or.desc}</p>
        </motion.div>

        {/* ring that draws itself — on top of the art & text */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible pointer-events-none">
          <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(196,141,129,0.35)" strokeWidth="2" />
          <motion.circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="#B97765"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${ring} ${ring}`}
            initial={{ strokeDashoffset: ring }}
            animate={shown ? { strokeDashoffset: 0 } : { strokeDashoffset: ring }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  // 05 PROCESS — scroll-driven 5-orb reveal
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ['start start', 'end end'],
  });
  const [procIndex, setProcIndex] = useState(0);
  const activeProcRef = useRef(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    let next = 0;
    if (v >= 0.8) next = 4;
    else if (v >= 0.6) next = 3;
    else if (v >= 0.4) next = 2;
    else if (v >= 0.2) next = 1;
    if (next !== activeProcRef.current) {
      activeProcRef.current = next;
      setProcIndex(next);
    }
  });
  const ringCircumference = 2 * Math.PI * 48; // viewBox r=48

  const values = [
    { name: "Connection", def: "The work doesn’t move until two humans actually drop in." },
    { name: "Joy", def: "Joy is a strategy. It’s also why my LLC is named Joyous Wolf." },
    { name: "Wellbeing", def: "You can’t lead what you can’t sustain. Boundaries first." },
    { name: "Authenticity", def: "The version of you that’s already here is the one we’re building from." },
    { name: "Community", def: "Success unshared is failure. Every tool I’ve learned belongs in someone else’s hands, too." }
  ];

  return (
    <div className="bg-cream overflow-x-clip">
       {/* 01 HEADER */}
       <header className="relative overflow-hidden pt-40 pb-24">
         <div className="absolute inset-0">
           <img src="/jennie-family-forest.jpg" alt="" aria-hidden className="w-full h-full object-cover object-center" />
           <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream" />
         </div>
         <Crescent className="hidden md:block absolute top-24 right-[18%] text-cream/70" size={28} />
         <Sparkle className="hidden md:block absolute top-16 left-[42%] text-gold/70" size={14} delay={1} />
         <div className="max-container relative">
           <motion.div 
             initial={{ opacity: 0, y: 24 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="bg-cream/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 md:p-10 max-w-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
           >
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-6 block"
             >
               About Jennie
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               className="text-3xl md:text-4xl font-serif leading-[1.15] text-charcoal"
             >
               I've always loved people. Their stories, their ideas, their dreams — and the <span className="italic">moment they know</span> something needs to change.
             </motion.h1>
           </motion.div>
         </div>
       </header>

       {/* 02 BIO */}
       <section className="section-padding">
         <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-24">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-10 text-xl text-sage leading-relaxed italic"
            >
              <motion.p variants={fadeUp}>
               My career has taken me from live events and agency life to leading marketing and brand experience for an international franchise — and eventually, to working for myself and living the life I love. Along the way, I've worked alongside passionate founders, entrepreneurs, creatives, and leaders building businesses they care deeply about.
              </motion.p>
              <motion.p variants={fadeUp} className="not-italic text-charcoal">
               And somewhere along the way, I realized I was navigating my own transitions, too. From corporate executive to entrepreneur. From workaholic to boundaried. From double-income-no-kids to motherhood. From constantly doing to learning how to simply be.
              </motion.p>
              <motion.p variants={fadeUp} className="not-italic text-charcoal">
               Some of those transitions were exciting. Some were messy and painful. Most were both. I've collected wisdom from mentors, coaches, therapists, retreats, life-changing books, challenging bosses, incredible teams, and the beautifully imperfect experience of being human.
              </motion.p>
              <motion.p variants={fadeUp} className="not-italic text-charcoal">
               Today, my work brings all of it together. Part strategy. Part reflection. Part coaching. Part conversation. A space to slow down, think clearly, and move forward with confidence. Still learning, always.
              </motion.p>
            </motion.div>
           <div className="relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2 }}
               viewport={{ once: true }}
               className="aspect-[3/4] bg-sage/10 rounded-[3rem] overflow-hidden relative group"
             >
                <img
                  src="/Jenniee.png"
                  alt="Jennie Wolff"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-terracotta/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
             </motion.div>
             {/* Small overlapping accent photo — a quiet glimpse of her own ritual practice */}
             <motion.div
               initial={{ opacity: 0, y: 20, rotate: -4 }}
               whileInView={{ opacity: 1, y: 0, rotate: -3 }}
               transition={{ duration: 1, delay: 0.3 }}
               viewport={{ once: true }}
               className="hidden md:block absolute -bottom-6 -left-6 z-20 w-48 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-cream"
             >
               <img src="/jennie-ritual-studio.jpg" alt="Jennie in her ritual practice space" className="w-full h-full object-cover" />
             </motion.div>
             <Sparkle className="hidden md:block absolute -top-6 -right-4 text-gold" size={16} />
           </div>
         </div>
       </section>

       {/* 03 PULL QUOTE */}
       <section className="py-32 bg-navy relative overflow-hidden">
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
              className="text-4xl md:text-6xl font-serif italic leading-tight max-w-5xl mx-auto text-white"
            >
              "You've always had the power, my dear. You just had to learn it for yourself."
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white/50 text-center mt-8 uppercase tracking-[0.2em] text-xs"
            >— Glinda the Good Witch</motion.p>
         </div>
       </section>

       {/* 04 VALUES */}
       <section className="section-padding">
         <div className="max-container">
           <div className="text-center mb-16">
             <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-serif mb-4">My five North Stars.</motion.h2>
             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-sage">They shape how I show up — with my clients, my kids, and myself.</motion.p>
           </div>
           <div className="flex flex-wrap justify-center gap-4">
             {values.map((v) => (
               <motion.div key={v.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="relative">
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
               </motion.div>
             ))}
           </div>
         </div>
       </section>

{/* 05 PROCESS — scroll-driven 5-orb grid (3 on top, 2 on bottom) */}
        <section ref={processRef} className="bg-steel">
          <div className="relative h-[600vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-16">
              <div className="flex w-full items-center gap-10 md:gap-16">
                {/* left: process text */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="w-[34%] shrink-0"
                >
                  <motion.span variants={fadeUp} className="kicker !text-cream">The process</motion.span>
                  <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-serif text-white leading-tight mt-3">
                    My process is part strategy, part reflection, part coaching, part conversation.
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-white/70 text-sm md:text-lg mt-4">
                    Most clients get all four in the same session — and a little ritual woven through, when it's needed.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
                    {PROCESS.map((_, i) => (
                      <span
                        key={i}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          i === procIndex ? 'w-8 bg-rose' : 'w-2 bg-white/25'
                        }`}
                      />
                    ))}
                  </motion.div>
                  <motion.p variants={fadeUp} className="mt-3 text-sm uppercase tracking-[0.3em] text-white/40">
                    keep scrolling
                  </motion.p>
                </motion.div>

                {/* right: orb card */}
                <div className="relative grow">
                  <div className="relative h-[82vh] w-full">
                    {PROCESS.map((p, i) => (
                      <ProcessOrb
                        key={i}
                        or={p}
                        pos={PROCESS_POS[i]}
                        shown={procIndex >= i}
                        active={procIndex === i}
                        ring={ringCircumference}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* 06 CREDENTIALS */}
       <section className="section-padding bg-navy">
         <div className="max-container">
           <motion.h2
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-serif mb-16 border-b border-white/20 pb-8 text-white"
           >
             A few stops along the way
           </motion.h2>
           <div className="space-y-8">
             {[
               "Former CMO, Sola Salon Studios",
               "Certified Coach, Institute of Coaching Mastery",
               "Marketing leadership across events, agency, franchise, beauty, wellness, and lifestyle brands",
               "Facilitator, coach, consultant, and lifelong learner"
             ].map((cred, i) => (
               <motion.p
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="font-serif text-2xl md:text-3xl leading-tight text-white/80 hover:text-blush transition-colors"
               >
                 {cred}
               </motion.p>
             ))}
           </div>
         </div>
       </section>

       {/* 07 OFF THE CLOCK */}
       <section className="section-padding bg-cream relative overflow-hidden">
         <div className="max-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-8 text-terracotta flex items-center gap-3">
                  When I'm Not Working <Sparkle className="text-gold" size={20} />
                </motion.h2>
                <motion.div variants={fadeUp} className="space-y-6 text-lg text-sage leading-relaxed italic">
                  <p>
                    You'll usually find me with my feet in the grass at Wash Park, taking a long walk or hike with my pup, practicing yoga, catching a live show, gathering with friends and family, or chasing my two little humans around.
                  </p>
                  <p>
                    I believe wellness is worth prioritizing. Connection matters. And joy belongs in the everyday moments.
                  </p>
                </motion.div>
              </motion.div>
              <div className="relative h-[480px] md:h-[560px]">
                 <motion.div
                   initial={{ rotate: -6, y: 20, opacity: 0 }}
                   whileInView={{ rotate: -4, y: 0, opacity: 1 }}
                   transition={{ duration: 1 }}
                   viewport={{ once: true }}
                   className="absolute left-0 top-0 w-[58%] aspect-[3/4] rounded-[2rem] bg-blush overflow-hidden shadow-2xl z-20"
                 >
                   <img src="/jennie-family-forest.jpg" alt="Jennie hiking with her family" className="w-full h-full object-cover" />
                 </motion.div>
                 <motion.div
                   initial={{ rotate: 6, y: 40, opacity: 0 }}
                   whileInView={{ rotate: 4, y: 0, opacity: 1 }}
                   transition={{ duration: 1.1, delay: 0.15 }}
                   viewport={{ once: true }}
                   className="absolute right-0 top-6 w-[52%] aspect-[3/4] rounded-[2rem] bg-sage/20 overflow-hidden shadow-2xl z-10"
                 >
                   <img src="/jennie-dog.jpg" alt="Jennie's dog" className="w-full h-full object-cover" />
                 </motion.div>
                 <motion.div
                   initial={{ rotate: -3, y: 30, opacity: 0 }}
                   whileInView={{ rotate: -2, y: 0, opacity: 1 }}
                   transition={{ duration: 1.2, delay: 0.3 }}
                   viewport={{ once: true }}
                   className="absolute left-[18%] bottom-0 w-[50%] aspect-[3/4] rounded-[2rem] bg-terracotta/10 overflow-hidden shadow-2xl z-30 border-4 border-cream"
                 >
                   <img src="/jennie-family-selfie.jpg" alt="Jennie with her family" className="w-full h-full object-cover" />
                 </motion.div>
                 <Sparkle className="hidden md:block absolute -top-4 right-[8%] text-gold z-40" size={18} />
                 {/* Floating background shape */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-terracotta/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>
         </div>
       </section>

       {/* 08 CTA */}
       <section className="section-padding bg-rose text-charcoal text-center">
         <div className="max-container">
           <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
             <Sparkle className="mx-auto mb-8 text-terracotta" size={24} />
             <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif mb-8">If any of this resonates, I'd love to connect.</motion.h2>
             <motion.div variants={fadeUp}>
               <Link to="/contact" className="inline-flex items-center primary-button group">
                 Request a Clarity Session <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
               </Link>
             </motion.div>
           </motion.div>
         </div>
       </section>
    </div>
  );
};

export default About;
