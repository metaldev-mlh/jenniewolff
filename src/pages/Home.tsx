import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sparkle, Crescent } from '../components/Decorative';

/* Shared editorial reveal variants, the whole page unfolds on scroll. */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Home = () => {
  return (
    <div className="bg-cream overflow-x-clip">
      <Hero />
      <Intro />
      <PhotoMosaic />
      <WaysToWork />
      <Approach />
      <Testimonial />
      <ParallaxMoment />
      <Newsletter />
      <Closing />
    </div>
  );
};

/* ─────────────────── HERO ─────────────────── */
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 160]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);
  const scale = useTransform(scrollY, [0, 700], [1, 1.12]);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-charcoal">
      <motion.div style={{ y, scale }} className="absolute inset-0 animate-drift">
        <img
          src="/jennieart.jpeg"
          alt="Jennie Wolff, portrait"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/35 to-cream/95" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 pt-32 pb-16"
      >
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="inline-flex items-center gap-3 text-base uppercase tracking-[0.35em] font-semibold text-cream/80 mb-5"
        >
          Visionary Consulting
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-cream leading-[1.02] text-[clamp(40px,7vw,96px)] font-medium"
        >
          Experience clarity.
          <br />
          <span className="italic font-normal">Align strategy.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.42 }}
          className="mt-5 max-w-xl text-xl text-cream/85 leading-relaxed italic font-serif"
        >
          Build and <em>become</em> your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <Link
            to="/about"
            className="inline-flex items-center justify-center bg-cream text-charcoal px-9 py-4 rounded-full font-semibold transition-all duration-500 hover:bg-white hover:-translate-y-0.5 hover:shadow-xl"
          >
            Meet Jennie
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
};

/* ─────────────────── THE PROCESS ─────────────────── */
const Intro = () => (
  <section className="bg-linen py-10 md:py-14 px-6 relative overflow-hidden">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="aspect-[3/4] bg-sage/10 rounded-[3rem] overflow-hidden relative"
      >
        <img
          src="/Jenniee.png"
          alt="Jennie Wolff"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.span variants={fadeUp} className="kicker">The process.</motion.span>
        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-charcoal leading-relaxed mt-10"
        >
          Clients arrive with a big idea, a growing business, a meaningful transition. Together, we slow down, create space, and tune into deep insight. From there, we move into action.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-charcoal leading-relaxed mt-6"
        >
          I offer two decades of experience as a brand and marketing leader, enhanced by ICM-certified coaching. This combination ensures external and internal growth for lasting solutions.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10">
          <Link to="/about" className="ghost-button">
            Meet Jennie <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
/* ─────────────────── THE IMPACT, testimonial previews ─────────────────── */
const TESTIMONIAL_PREVIEWS = [
  {
    quote: "Jennie has an amazing gift of creating an incredibly safe space, allowing for vulnerability and authenticity.",
    name: "Melissa Bennett, Nike",
  },
  {
    quote: "Working with Jennie has been pivotal for our team. We leave every session feeling accomplished and proud.",
    name: "Katie Gillberg, Hydrate IV Bar",
  },
  {
    quote: "Jennie has seen me clearly since the very beginning, before I truly knew who I was or had the potential of becoming.",
    name: "Angela Levenson, Founder of Home Again Organizing",
  },
];

const PhotoMosaic = () => (
  <section className="bg-cream py-10 md:py-14 px-6 relative overflow-hidden">
    <div className="max-container">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-8">
        <motion.span variants={fadeUp} className="kicker">The impact.</motion.span>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIAL_PREVIEWS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-linen border border-sage/10 rounded-[2rem] p-8 md:p-10 flex flex-col gap-6"
          >
            <p className="font-serif italic text-lg md:text-xl text-charcoal leading-relaxed">
              "{t.quote}"
            </p>
            <div className="mt-auto">
              <p className="font-serif text-charcoal">{t.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Link to="/testimonials" className="ghost-button">
          Testimonials <ArrowRight size={20} className="ml-2" />
        </Link>
      </motion.div>
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
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-8">
        <motion.span variants={fadeUp} className="kicker">The container.</motion.span>
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-sage mt-4">
          Choose what serves your vision.
        </motion.p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-cream border border-steel/10 rounded-[2rem] p-10 md:p-12 flex flex-col justify-between gap-8 soft-shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal">{s.title}</h3>
            <Link
              to="/services"
              className="inline-flex items-center text-base font-semibold uppercase tracking-widest text-terracotta w-fit"
            >
              Learn More <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
/* ─────────────────── THE APPROACH ─────────────────── */
const steps = [
  { n: '01', title: 'Slow Down', text: "We create the space to think clearly and hear what actually matters most." },
  { n: '02', title: 'Find Clarity', text: "We get honest about what's in the way and what genuinely wants your attention." },
  { n: '03', title: 'Take Aligned Action', text: "You leave with practical next steps that feel achievable and true to who you are." },
];

const ApproachOrb = ({ orb, delay }: { orb: { n: string; title: string; text: string }; delay: number }) => {
  const ring = 2 * Math.PI * 48;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-6"
    >
      <div className="relative w-52 h-52 md:w-64 md:h-64">
        {/* art fill */}
        <div className="absolute inset-0 rounded-full overflow-hidden [mask-image:radial-gradient(circle_at_center,black_62%,transparent_82%)]">
          <img src="/art.png" alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
        {/* text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h4 className="text-charcoal font-serif text-xl md:text-2xl leading-tight">{orb.title}</h4>
          <p className="text-charcoal/70 text-base md:text-base italic leading-snug mt-2 hidden md:block">{orb.text}</p>
        </div>
        {/* ring */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible pointer-events-none">
          <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(196,141,129,0.25)" strokeWidth="2" />
          <motion.circle
            cx="50" cy="50" r="48" fill="none" stroke="#B97765" strokeWidth="2.5" strokeLinecap="round"
            strokeDasharray={`${ring} ${ring}`}
            initial={{ strokeDashoffset: ring }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
      <p className="text-cream/60 text-base md:hidden text-center italic leading-snug px-4">{orb.text}</p>
    </motion.div>
  );
};

const Approach = () => (
  <section className="bg-charcoal py-10 md:py-14 px-6 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img src="/ritual-studio-space.jpg" alt="" className="w-full h-full object-cover" aria-hidden />
      <div className="absolute inset-0 bg-charcoal/85" />
    </div>
    <div className="max-container relative z-10">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-8">
        <motion.span variants={fadeUp} className="kicker !text-cream">The approach</motion.span>
        <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-serif mt-4 text-cream max-w-2xl mx-auto leading-tight">
          This is where transformation begins.
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 justify-items-center">
        {steps.map((s, i) => (
          <ApproachOrb key={i} orb={s} delay={i * 0.15} />
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────── TESTIMONIAL ─────────────────── */
const Testimonial = () => (
  <section className="bg-cream py-10 md:py-14 px-6 relative overflow-hidden">
    <Sparkle className="hidden md:block absolute top-20 left-[12%] text-gold/40" size={16} />
    <Crescent className="hidden md:block absolute bottom-24 right-[12%] text-steel/30" size={30} delay={1} />
    <div className="max-w-3xl mx-auto text-center">
      <motion.blockquote
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="font-serif italic text-3xl md:text-4xl leading-tight text-charcoal"
      >
        "She has a rare ability to balance intuition with structure. She doesn't just listen, she
        challenges, and does it in a way that actually moves you forward instead of spinning you out."
      </motion.blockquote>
      <motion.footer
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-12"
      >
        <div className="mx-auto w-16 h-16 rounded-full overflow-hidden border-2 border-rose">
          <img src="/230816-jason-shader-smith-portrait-0042-Yle2oRyR0vsB8ppV.avif" alt="Jason Shader Smith" className="w-full h-full object-cover" />
        </div>
        <p className="font-serif text-xl text-charcoal mt-4">Jason Shader Smith</p>
        <p className="text-base uppercase tracking-widest text-sage font-bold mt-1">MLH Agency</p>
      </motion.footer>
    </div>
  </section>
);
/* ─────────────────── PARALLAX MOMENT ─────────────────── */
const ParallaxMoment = () => {
  const { scrollYProgress } = useScroll({
    target: undefined,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="/jennie-family-forest.jpg"
          alt="Jennie with her family in the forest"
          className="w-full h-[116%] object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/35" />
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute inset-0 z-10 flex items-center justify-center text-center px-6"
      >
        <p className="font-serif italic text-3xl md:text-6xl text-cream max-w-4xl leading-tight">
          Balance isn't a destination. <br className="hidden md:block" />
          It's a <span className="text-rose">practice.</span>
        </p>
      </motion.div>
    </section>
  );
};

/* ─────────────────── NEWSLETTER ─────────────────── */
const Newsletter = () => (
  <section className="bg-linen py-10 md:py-14 px-6 relative overflow-hidden">
    <Crescent className="hidden md:block absolute top-12 left-[14%] text-steel/30" size={30} />
    <Sparkle className="absolute top-16 right-[16%] text-gold/40" size={16} delay={0.6} />
    <div className="max-w-2xl mx-auto text-center">
      <motion.span variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="kicker">
        Notes from Jennie
      </motion.span>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif mt-8 mb-6 text-charcoal"
      >
        A few thoughtful notes.
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-lg text-sage mb-6 italic leading-relaxed"
      >
        Ideas, reflections, rituals, and practical tools for navigating growth, leadership, and
        life, sent from time to time, never as a pitch.
      </motion.p>
      <motion.form
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Your email"
          className="flex-grow bg-cream border border-steel/20 rounded-full px-8 py-4 focus:outline-none focus:ring-2 focus:ring-gold/50 text-charcoal placeholder:text-sage"
          required
        />
        <button className="bg-terracotta text-white whitespace-nowrap px-10 py-4 text-lg rounded-full font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all">
          Subscribe
        </button>
      </motion.form>
    </div>
  </section>
);

/* ─────────────────── CLOSING ─────────────────── */
const Closing = () => (
  <section className="bg-cream py-10 md:py-14 px-6 relative overflow-hidden text-center">
    <Sparkle className="absolute top-16 left-[22%] text-gold/40" size={16} delay={0.4} />
    <div className="max-w-3xl mx-auto">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-serif text-charcoal mb-6"
      >
        Ready to find your clarity and live in alignment?
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-lg text-sage italic mb-6"
      >
        All it takes is that first honest conversation. I'll help you figure out the rest.
      </motion.p>
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Link to="/contact" className="primary-button inline-flex items-center">
          Let's Start <ArrowRight size={20} className="ml-2" />
        </Link>
      </motion.div>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-24 font-serif italic text-rose text-2xl"
      >
        "Those who don't believe in magic will never find it.", Roald Dahl
      </motion.p>
    </div>
  </section>
);

export default Home;
