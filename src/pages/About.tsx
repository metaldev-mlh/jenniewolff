import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sparkle } from '../components/Decorative';

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

const About = () => {

  return (
    <div className="bg-cream overflow-x-clip">
       {/* 01 HEADER */}
       <header className="relative overflow-hidden min-h-[85vh] flex items-center">
         <div className="absolute inset-0">
           <img src="/Jennie-28.jpg" alt="" aria-hidden className="w-full h-full object-cover object-center" />
           <div className="absolute inset-0 bg-gradient-to-l from-charcoal/80 via-charcoal/30 to-transparent" />
         </div>
         <div className="max-container relative w-full flex justify-end pt-32 pb-16">
           <motion.div
             initial={{ opacity: 0, y: 24 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.9 }}
             className="max-w-xl"
           >
             <motion.span
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-sm uppercase tracking-widest text-blush font-semibold mb-6 block"
             >
               About Jennie
             </motion.span>
             <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.25 }}
               className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] text-cream"
             >
               I've always loved people. Their stories, their ideas, their dreams, and the <span className="italic">moment they know</span> something needs to change.
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
              className="space-y-8 text-xl text-charcoal leading-relaxed"
            >
              <motion.p variants={fadeUp} className="italic text-sage">
                A little about me.
              </motion.p>
              <motion.p variants={fadeUp}>
                I work with people to bring big ideas to life.
              </motion.p>
              <motion.p variants={fadeUp}>
                For the better part of two decades, I pursued a career from live events and agencies to the executive team of an international franchise. Along the way, I helped build brands, grow businesses, and inspire teams, while collaborating with passionate founders, leaders and creatives.
              </motion.p>
              <motion.p variants={fadeUp}>
                Today, I run a business of my own.
              </motion.p>
              <motion.p variants={fadeUp}>
                I have always loved a good brainstorm. A great idea. An honest conversation. That moment when someone starts to see what's possible.
              </motion.p>
              <motion.p variants={fadeUp}>
                Behind every great business, I see real people with hopes, fears, insecurities, dreams, and full lives outside of work. I know that success takes more than great strategy. It takes understanding yourself, those around you, and your deepest desires.
              </motion.p>
              <motion.p variants={fadeUp}>
                I have collected wisdom from incredible mentors, bosses, coaches, shamans, life-changing books, global travels, retreats, sleepless nights, unexpected aha moments, and the beautifully imperfect experience of being human.
              </motion.p>
              <motion.p variants={fadeUp}>
                From corporate executive to entrepreneur, I have navigated my own transitions, too. From workaholic to healthy boundaries. From constantly doing to finding balance and being.
              </motion.p>
              <motion.p variants={fadeUp}>
                Today, I bring these experiences together with my training as a Certified Mastery Method Coach to help clients make meaningful changes in their businesses, their teams, and their lives.
              </motion.p>
              <motion.p variants={fadeUp}>
                Some days, we develop a new idea or move a business forward. Other days, we work through a difficult decision, explore what's getting in the way, or reconnect a team around what matters most. There is reflection, strategy, creative thinking, and unexpected discoveries. And we always leave with greater clarity and a plan for what comes next.
              </motion.p>
              <motion.p variants={fadeUp} className="italic text-sage">
                Still learning, always.
              </motion.p>
            </motion.div>
           <div className="relative">
             <div className="sticky top-24">
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1.2 }}
                 viewport={{ once: true }}
                 className="aspect-[3/4] bg-sage/10 rounded-[3rem] overflow-hidden relative group"
               >
                 <img
                   src="/Jennie-62.jpg"
                   alt="Jennie Wolff"
                   className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-terracotta/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
               </motion.div>
               <Sparkle className="hidden md:block absolute -top-6 -right-4 text-gold" size={16} />
             </div>
           </div>
         </div>
       </section>

       {/* 02b Q+A */}
       <section className="section-padding bg-linen">
         <div className="max-container max-w-3xl">
           <motion.span variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="kicker mb-10 block">
             A few honest answers
           </motion.span>
           <motion.div
             variants={container}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             className="space-y-12"
           >
             {[
               {
                 q: "What do your clients usually arrive with?",
                 a: "A big idea, a growing business, or a meaningful transition. Often all three. They're capable, driven people who have outgrown their current way of operating and know something needs to shift. They just need the space to figure out what."
               },
               {
                 q: "What makes your approach different?",
                 a: "I bring two decades of real-world brand and marketing leadership into the room alongside ICM-certified coaching. That combination means we can zoom out to the strategy and zoom in to the inner work in the same session. External growth and internal alignment, together."
               },
               {
                 q: "What do you believe about the work?",
                 a: "I believe clarity is not something you find, it's something you create. And I believe most people already know what they need. They just need someone who will slow down with them long enough to hear it."
               },
               {
                 q: "Who is this work for?",
                 a: "Individuals ready to lead differently. Teams that want to actually work together. And anyone drawn to an experience that resets how they see themselves and their work. If any of that feels like you, it probably is."
               },
             ].map(({ q, a }, i) => (
               <motion.div key={i} variants={fadeUp} className="border-t border-sage/15 pt-8">
                 <p className="font-serif italic text-xl md:text-2xl text-terracotta mb-4">{q}</p>
                 <p className="text-xl text-charcoal leading-relaxed">{a}</p>
               </motion.div>
             ))}
           </motion.div>
         </div>
       </section>

       {/* 05 WHAT I BELIEVE */}
       <section className="section-padding bg-charcoal text-cream">
         <div className="max-container max-w-3xl">
           <motion.span
             initial={{ opacity: 0, y: 16 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="kicker !text-cream mb-10 block"
           >
             What I believe
           </motion.span>
           <div className="space-y-6">
             {[
               "Growth rarely follows a straight line. Small, consistent actions create meaningful change over time.",
               "Boundaries create freedom. Burnout is a terrible long-term strategy.",
               "Some of our best ideas and biggest realizations come when we give ourselves permission to slow down.",
               "We don't have to figure it all out alone.",
             ].map((line, i) => (
               <motion.p
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.7, delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="font-serif italic text-2xl md:text-3xl text-cream/85 leading-snug"
               >
                 {line}
               </motion.p>
             ))}
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
