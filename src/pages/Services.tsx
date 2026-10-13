import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

const WAYS = [
  {
    label: 'Individuals',
    headline: '1:1 Coaching',
    sub: 'Private coaching for founders, leaders, and high-achievers navigating a transition or building the next chapter.',
    to: '/contact',
    cta: 'Inquire',
  },
  {
    label: 'Teams',
    headline: 'Team & Leadership',
    sub: 'Workshops and offsites that align teams, develop culture, and build the leaders inside them.',
    to: '/contact',
    cta: 'Inquire',
  },
  {
    label: 'Experiences',
    headline: 'Consulting & Advisory',
    sub: 'Senior brand and strategy support for founders growing with intention, without a full-time hire.',
    to: '/contact',
    cta: 'Inquire',
  },
];

const Services = () => (
  <div className="bg-cream overflow-x-clip">
    {/* HEADER */}
    <header className="section-padding pt-40 pb-20 relative">
      <div className="max-container relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-9xl font-serif mb-10 text-charcoal leading-[0.9]"
        >
          The <span className="italic">container.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl text-sage max-w-2xl leading-relaxed"
        >
          Choose what serves your vision.
        </motion.p>
      </div>
    </header>

    {/* THREE WAYS */}
    <section className="section-padding pt-0 pb-32">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sage/10 rounded-[2.5rem] overflow-hidden border border-sage/10">
          {WAYS.map((w, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-cream p-10 md:p-14 flex flex-col gap-8 group"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-bold">{w.label}</span>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4 leading-tight">{w.headline}</h2>
                <p className="text-sage leading-relaxed">{w.sub}</p>
              </div>
              <Link
                to={w.to}
                className="mt-auto inline-flex items-center text-sm font-semibold uppercase tracking-widest text-charcoal group-hover:text-terracotta transition-colors"
              >
                {w.cta} <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CLOSING CTA */}
    <section className="section-padding bg-cream text-center pb-32">
      <div className="max-container">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-serif italic text-sage mb-10 max-w-xl mx-auto"
        >
          Not sure where to start? Let's begin with a conversation.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Link to="/contact" className="terracotta-button inline-flex items-center">
            Connect <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Services;
