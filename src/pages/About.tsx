import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const About = () => {

  return (
    <div className="bg-cream overflow-x-clip">
       {/* 01 HEADER */}
       <header className="relative overflow-hidden min-h-[85vh] flex items-center">
         <div className="absolute inset-0">
           <img src="/Jennie-28.jpg" alt="" aria-hidden className="w-full h-full object-cover object-center" />
           <div className="absolute inset-0 bg-gradient-to-l from-charcoal/80 via-charcoal/30 to-transparent" />
         </div>
         <div className="max-container px-6 md:px-16 relative w-full flex justify-start md:justify-end pt-32 pb-16">
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
       <section className="py-14 px-6">
         <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
            <div className="space-y-6 text-base md:text-lg text-charcoal leading-relaxed">
              <p className="italic text-sage">A little about me.</p>
              <p>I work with people to bring big ideas to life.</p>
              <p>For the better part of two decades, I pursued a career from live events and agencies to the executive team of an international franchise. Along the way, I helped build brands, grow businesses, and inspire teams, while collaborating with passionate founders, leaders and creatives.</p>
              <p>Today, I run a business of my own.</p>
              <p>I have always loved a good brainstorm. A great idea. An honest conversation. That moment when someone starts to see what's possible.</p>
              <p>Behind every great business, I see real people with hopes, fears, insecurities, dreams, and full lives outside of work. I know that success takes more than great strategy. It takes understanding yourself, those around you, and your deepest desires. I have collected wisdom from incredible mentors, bosses, coaches, shamans, life-changing books, global travels, retreats, sleepless nights, unexpected aha moments, and the beautifully imperfect experience of being human.</p>
              <p>From corporate executive to entrepreneur, I have navigated my own transitions, too. From workaholic to healthy boundaries. From constantly doing to finding balance and being.</p>
              <p>Today, I bring these experiences together with my training as a Certified Mastery Method Coach to help clients make meaningful changes in their businesses, their teams, and their lives. Some days, we develop a new idea or move a business forward. Other days, we work through a difficult decision, explore what's getting in the way, or reconnect a team around what matters most. There is reflection, strategy, creative thinking, and unexpected discoveries. And we always leave with greater clarity and a plan for what comes next.</p>
              <p>I believe that growth rarely follows a straight line, and that small, consistent actions create meaningful change over time. That boundaries create freedom, and burnout is a terrible long-term strategy. That some of our best ideas and biggest realizations come when we give ourselves permission to slow down.</p>
              <p>When I'm not working, you can find me with my feet in the grass at Wash Park, taking a hike with my pup, practicing yoga, catching a live show, gathering with friends and family, or chasing my two little humans around. I believe wellness is worth prioritizing, connection matters, and joy belongs in the everyday moments. And that we don't have to figure it all out alone.</p>
              <p className="italic text-sage">Still learning, always.</p>
            </div>
           <div className="relative">
             <div className="sticky top-24">
               <div className="aspect-[3/4] bg-sage/10 rounded-[3rem] overflow-hidden relative group">
                 <img
                   src="/Jennie-62.jpg"
                   alt="Jennie Wolff"
                   className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-terracotta/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* 05 WHAT I BELIEVE */}
       <section className="py-14 px-6 bg-charcoal text-cream">
         <div className="max-container max-w-3xl">
           <div className="flex justify-center md:justify-start mb-10">
             <span className="kicker text-cream!">What I believe</span>
           </div>
           <div className="space-y-6">
             {[
               "Growth rarely follows a straight line. Small, consistent actions create meaningful change over time.",
               "Boundaries create freedom. Burnout is a terrible long-term strategy.",
               "Some of our best ideas and biggest realizations come when we give ourselves permission to slow down.",
               "We don't have to figure it all out alone.",
             ].map((line, i) => (
               <p
                 key={i}
                 className="font-serif italic text-xl md:text-2xl text-cream/85 leading-snug border-t border-cream/10 pt-6"
               >
                 {line}
               </p>
             ))}
           </div>
         </div>
       </section>

       {/* 06 CREDENTIALS */}
       <section className="py-14 px-6 bg-navy">
         <div className="max-container max-w-3xl">
           <h2 className="text-2xl md:text-3xl font-serif mb-10 border-b border-white/20 pb-6 text-white">
             A few stops along the way
           </h2>
           <div className="space-y-6">
             {[
               "Former CMO, Sola Salon Studios",
               "Mastery Method Certified Coach",
               "Marketing leadership across events, agency, franchise, beauty, wellness, and lifestyle brands",
               "Facilitator, coach, consultant, and lifelong learner"
             ].map((cred, i) => (
               <p
                 key={i}
                 className="font-serif text-xl leading-tight text-white/80 border-t border-white/10 pt-6"
               >
                 {cred}
               </p>
             ))}
           </div>
         </div>
       </section>

       {/* 07 OFF THE CLOCK */}
       <section className="py-14 px-6 bg-cream">
         <div className="max-container max-w-3xl">
           <h2 className="text-2xl md:text-3xl font-serif mb-10 text-terracotta">
             When I'm Not Working
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3">
             {[
               "Feet in the grass at Wash Park",
               "Hiking with my pup",
               "Practicing yoga",
               "Catching a live show",
               "Gathering with friends and family",
               "Chasing my two little humans",
             ].map((item, i) => (
               <p key={i} className="text-lg font-serif text-charcoal border-b border-sage/15 pb-3">
                 {item}
               </p>
             ))}
           </div>
           <p className="mt-10 text-xl font-serif italic text-sage leading-relaxed">
             Wellness is worth prioritizing. Connection matters. And joy belongs in the everyday moments.
           </p>
         </div>
       </section>

       {/* 08 CTA */}
       <section className="py-14 px-6 bg-rose text-charcoal text-center">
         <div className="max-container">
           <h2 className="text-2xl md:text-3xl font-serif mb-8">If any of this resonates, I'd love to connect.</h2>
           <Link to="/contact" className="inline-flex items-center primary-button group">
             Request a Clarity Session <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
           </Link>
         </div>
       </section>
    </div>
  );
};

export default About;
