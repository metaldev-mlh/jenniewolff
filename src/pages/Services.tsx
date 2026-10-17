import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


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
    headline: 'Experiences',
    sub: 'Senior brand and strategy support for founders growing with intention, without a full-time hire.',
    to: '/contact',
    cta: 'Inquire',
  },
];

const Services = () => (
  <div className="bg-cream overflow-x-clip">
    {/* HEADER */}
    <header className="relative min-h-[60vh] flex items-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <img src="/Jennie-58.jpg" alt="" aria-hidden className="w-full h-full object-cover" style={{ objectPosition: 'center 25%' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/40 to-transparent" />
      </div>
      <div className="max-container relative z-10 pt-32 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif mb-6 text-cream leading-[1.05]"
        >
          The <span className="italic">container.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl text-cream/80 max-w-2xl leading-relaxed"
        >
          Choose what serves your vision.
        </motion.p>
      </div>
    </header>

    {/* THREE WAYS */}
    <section className="pt-0 pb-12 px-6">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sage/10 rounded-[2.5rem] overflow-hidden border border-sage/10">
          {WAYS.map((w, i) => (
            <div key={i} className="bg-cream p-10 md:p-14 flex flex-col gap-8 group">
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
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CLOSING CTA */}
    <section className="bg-cream py-12 px-6 text-center">
      <div className="max-container max-w-xl">
        <p className="text-lg md:text-xl font-serif italic text-sage mb-8 leading-relaxed">
          Not sure where to start? Let's begin with a conversation.
        </p>
        <Link to="/contact" className="terracotta-button inline-flex items-center justify-center">
          Connect <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
