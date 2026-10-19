import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="bg-cream overflow-x-clip">
      <Hero />
      <Intro />
      <PhotoMosaic />
      <WaysToWork />
    </div>
  );
};

/* ─────────────────── HERO ─────────────────── */
const Hero = () => (
  <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-charcoal">
    <div className="absolute inset-0">
      <img
        src="/jwhero.jpg"
        alt="Jennie Wolff, portrait"
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 25%' }}
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
    <div className="relative z-10 max-container w-full px-6 md:px-16 pt-32 pb-16">
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-sm uppercase tracking-[0.35em] font-semibold text-cream/80 mb-5 block"
      >
        Visionary Consulting
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-cream leading-[1.05] text-4xl md:text-6xl font-medium"
      >
        Experience clarity.
        <br />
        <span className="italic font-normal">Align strategy.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mt-5 max-w-md text-lg text-cream/85 leading-relaxed italic font-serif"
      >
        Build and <em>become</em> your vision.
      </motion.p>
    </div>
  </section>
);

/* ─────────────────── THE PROCESS ─────────────────── */
const Intro = () => (
  <section className="bg-linen py-10 md:py-14 px-6">
    <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
      <div className="aspect-[3/4] bg-sage/10 rounded-[3rem] overflow-hidden">
        <img src="/Jennie-59.jpg" alt="Jennie Wolff" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="kicker">The process.</span>
        <p className="text-base md:text-lg text-charcoal leading-relaxed mt-8">
          Whether you have a big idea, a growing business, or you're navigating a transition, I create space for you to slow down, reconnect with what matters most, and get clear on your vision. From there, we move into action.
        </p>
        <p className="text-base md:text-lg text-charcoal leading-relaxed mt-4">
          With two decades of experience as a brand and marketing leader alongside ICM-certified coaching, I blend strategy and intuition to support meaningful change.
        </p>
        <div className="mt-8">
          <Link to="/about" className="ghost-button">
            Meet Jennie <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
/* ─────────────────── THE IMPACT, testimonial previews ─────────────────── */
const TESTIMONIAL_PREVIEWS = [
  {
    quote: "Working with Jennie has been pivotal for our team. We leave every session feeling accomplished and proud.",
    name: "Katie Gillberg, Hydrate IV Bar",
  },
  {
    quote: "Jennie has seen me clearly since the very beginning, before I truly knew who I was or had the potential of becoming.",
    name: "Angela Levenson, Founder of Home Again Organizing",
  },
  {
    quote: "Jennie has an amazing gift of creating an incredibly safe space, allowing for vulnerability and authenticity.",
    name: "Melissa Bennett, Nike",
  },
];

const PhotoMosaic = () => (
  <section className="bg-cream py-10 md:py-12 px-6 relative overflow-hidden">
    <div className="max-container">
      <div className="text-center mb-8">
        <span className="kicker">The impact.</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIAL_PREVIEWS.map((t, i) => (
          <div key={i} className="bg-linen border border-sage/10 rounded-[2rem] p-8 md:p-10 flex flex-col gap-6">
            <p className="font-serif italic text-lg md:text-xl text-charcoal leading-relaxed">
              "{t.quote}"
            </p>
            <div className="mt-auto">
              <p className="font-serif text-charcoal">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/testimonials" className="ghost-button">
          Testimonials <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </div>
  </section>
);

/* ─────────────────── THE CONTAINER ─────────────────── */
const services = [
  { title: 'Individuals' },
  { title: 'Teams' },
  { title: 'Experiences' },
];

const WaysToWork = () => (
  <section className="bg-sand py-10 md:py-14 px-6">
    <div className="max-container">
      <div className="text-center mb-8">
        <span className="kicker">The container.</span>
        <p className="text-base md:text-lg text-sage mt-4">Choose what serves your vision.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="group bg-cream border border-steel/10 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between gap-6 soft-shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-charcoal">{s.title}</h3>
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-terracotta w-fit"
            >
              Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Home;
