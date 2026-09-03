import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'motion/react';
import { ArrowRight, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sparkle, Crescent } from '../components/Decorative';

/* Shared editorial reveal variants — the whole page unfolds on scroll. */
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
      <Band />
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
      <motion.div style={{ y, scale }} className="absolute inset-0 animate-drift">
        <img
          src="/jennieart.jpeg"
          alt="Jennie Wolff — portrait"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/35 to-cream/95" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 pt-28 pb-24"
      >
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] font-semibold text-cream/80 mb-8"
        >
          <Sparkle size={14} color="#E8CDC0" />
          Holistic Brand &amp; Leadership Coaching
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-cream leading-[1.02] text-[clamp(52px,11vw,150px)] font-medium"
        >
          Find clarity.
          <br />
          <span className="italic font-normal">Live aligned.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.42 }}
          className="mt-9 max-w-xl text-xl md:text-2xl text-cream/85 leading-relaxed italic font-serif"
        >
          For the vision you're building — and the person you're becoming along the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-cream text-charcoal px-9 py-4 rounded-full font-semibold transition-all duration-500 hover:bg-rose hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Start with a Conversation <ArrowRight size={20} className="ml-2" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center border border-cream/50 text-cream px-9 py-4 rounded-full font-semibold transition-all duration-500 hover:border-cream hover:bg-white/10 backdrop-blur"
          >
            Meet Jennie
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/70 flex flex-col items-center gap-2"
      >
        <span className="text-sm uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
};
/* ─────────────────── BAND — moving wordmark ─────────────────── */
const words = ['Clarity', 'Ritual', 'Balance', 'Growth', 'Leadership', 'Presence'];
const Band = () => (
  <section className="bg-charcoal text-cream py-12 overflow-hidden" aria-hidden>
    <div className="marquee-track">
      {[0, 1].map((dup) => (
        <div key={dup} className="flex gap-16 items-center">
          {words.map((w, i) => (
            <span key={w + i} className="flex items-center gap-16 whitespace-nowrap">
              <span className="font-serif italic text-3xl md:text-4xl text-cream/85">{w}</span>
              <Sparkle size={16} color="#C9A25A" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);

/* ─────────────────── INTRO QUOTE ─────────────────── */
const Intro = () => (
  <section className="bg-linen py-28 md:py-40 px-6 relative overflow-hidden">
    <Crescent className="hidden md:block absolute top-20 left-[8%] text-steel/30" size={30} />
    <Sparkle className="hidden md:block absolute bottom-24 right-[12%] text-gold/50" size={16} delay={0.8} />
    <div className="max-w-5xl mx-auto text-center">
      <motion.span variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="kicker">
        How I work
      </motion.span>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="font-serif italic text-3xl md:text-5xl text-charcoal leading-relaxed mt-10"
      >
        "Most people come to me carrying a lot — a growing business, a big idea, a transition
        they're ready to move through. Before we jump to solutions, we make a little space:
        to slow down, think clearly, and hear what you already know."
      </motion.p>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-lg text-sage leading-relaxed max-w-3xl mx-auto mt-10 italic"
      >
        And then we build a path forward — together.
      </motion.p>
    </div>
  </section>
);
/* ─────────────────── THIS IS ME — photo carousel ─────────────────── */
const CAROUSEL_IMAGES = [
  { src: '/jennie-family-selfie.jpg', alt: 'Jennie with her family', caption: 'With my family' },
  { src: '/Jennie2.png', alt: 'Jennie Wolff portrait', caption: 'Me, in my element' },
  { src: '/jennie-dog.jpg', alt: 'Jennie with her dog', caption: 'With my best friend' },
];

/* Direction-aware slide transition for the carousel. */
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
};

const PhotoMosaic = () => {
  const [[index, dir], setIndex] = useState(() => [0, 0]);

  const goTo = (i: number) => {
    if (i === index) return;
    setIndex([i, i > index ? 1 : -1]);
  };
  const next = () => goTo((index + 1) % CAROUSEL_IMAGES.length);
  const prev = () => goTo((index - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);

  const current = CAROUSEL_IMAGES[index];

  return (
    <section className="bg-cream py-28 md:py-40 px-6 relative overflow-hidden">
      <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Photo carousel */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative h-[520px] md:h-[620px] aspect-[3/4] rounded-[2.5rem] overflow-hidden soft-shadow-lg">
            <AnimatePresence custom={dir} initial={false} mode="popLayout">
              <motion.img
                key={index}
                src={current.src}
                alt={current.alt}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent pointer-events-none" />

            {/* Arrows */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="w-10 h-10 rounded-full bg-cream/80 backdrop-blur border border-sage/20 flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-white transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="w-10 h-10 rounded-full bg-cream/80 backdrop-blur border border-sage/20 flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-white transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Caption */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`cap-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-5 left-6 z-10 font-serif italic text-cream text-lg"
              >
                {current.caption}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {CAROUSEL_IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to ${img.caption}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-terracotta' : 'w-2.5 bg-sage/30 hover:bg-sage/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

      {/* Copy */}
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.span variants={fadeUp} className="kicker">
          This is me
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-serif leading-tight text-charcoal mt-8 mb-8"
        >
          I'm not a consultant who showed up one day. I've <span className="italic">lived</span> the messy, beautiful middle of all of it.
        </motion.h2>
        <motion.div variants={fadeUp} className="space-y-5 text-lg text-sage leading-relaxed italic">
          <p>
            From live events and agency life to leading brand experience for an international
            franchise — and now working for myself — I've learned that real change never happens
            in a straight line. It happens in the space we hold for it.
          </p>
          <p className="not-italic text-charcoal">
            I bring strategy, coaching, and real life together. You get a certified coach with two
            decades of brand and marketing experience, and a human being who's walked the same
            transitions you're standing at the edge of.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-10">
          <Link to="/about" className="ghost-button">
            Read My Story <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
};

/* ─────────────────── WAYS TO WORK ─────────────────── */
const services = [
  {
    title: '1:1 Coaching',
    desc: "Private sessions for founders, leaders, and high-achievers navigating a transition or building the next chapter with clarity and balance.",
    cta: 'Explore Coaching',
  },
  {
    title: 'Team & Leadership',
    desc: "Workshops and offsites that give teams the space to slow down, align on what matters, and leave actually feeling like a team.",
    cta: 'Explore Team Work',
  },
  {
    title: 'Consulting & Advisory',
    desc: "Senior brand and strategy support for founders and growing brands — a trusted thought partner who helps bring ideas to life and navigate growth with intention.",
    cta: 'Explore Consulting',
  },
];

/* ─────────────────── WAYS TO WORK — scroll carousel ───────────────────
   One doorway at a time. Scrubbing scroll swaps the featured card with a
   soft 3D turn (left→right), while a crescent moon orbits the progress ring. */
const slideAnim = {
  enter: (dir: number) => ({ x: dir * 150, opacity: 0, rotateY: dir * 16, scale: 0.94 }),
  center: { x: 0, opacity: 1, rotateY: 0, scale: 1 },
  exit: (dir: number) => ({ x: dir * -150, opacity: 0, rotateY: -dir * 16, scale: 0.94 }),
};

const WaysToWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const activeRef = useRef(0);

  // Drive the card from scroll position — swap once per segment.
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    let next = 0;
    if (v >= 0.66) next = 2;
    else if (v >= 0.33) next = 1;
    if (next !== activeRef.current) {
      setDir(next > activeRef.current ? 1 : -1);
      activeRef.current = next;
      setIndex(next);
    }
  });

  // orbitting crescent + progress ring, scrubbed by scroll
  const circumference = 2 * Math.PI * 22; // r=22 ring
  const moonRotate = useTransform(scrollYProgress, [0, 1], [-60, 300]);
  const ringFill = useTransform(scrollYProgress, [0, 1], [circumference - 6, 6]);
  const headY = useTransform(scrollYProgress, [0, 0.15], [0, -14]);

  const active = services[index];

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-sand">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        {/* heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div style={{ y: headY }}>
            <motion.span variants={fadeUp} className="kicker">Ways to work together</motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif mt-5">Doorways in.</motion.h2>
          </motion.div>
        </motion.div>

        {/* active card — 3D */}
        <div className="relative w-full max-w-2xl [perspective:1200px]">
          <div className="relative h-[330px] md:h-[350px]">
            <AnimatePresence custom={dir} mode="popLayout" initial={false}>
              <motion.article
                key={index}
                custom={dir}
                variants={slideAnim}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 group bg-cream border border-steel/10 rounded-[2.2rem] p-9 md:p-12 flex flex-col justify-between soft-shadow-lg [transform-style:preserve-3d]"
              >
                <div className="flex items-center justify-between">
                  <Sparkle size={20} className="text-gold/60" delay={0.2} />
                  <span className="text-sm uppercase tracking-[0.3em] text-terracotta font-semibold">
                    0{index + 1} / 03
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-4 text-charcoal">{active.title}</h3>
                  <p className="text-lg md:text-xl text-sage italic leading-relaxed">{active.desc}</p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center text-base font-semibold uppercase tracking-widest text-terracotta group-hover:gap-3 transition-all w-fit"
                >
                  {active.cta} <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* crescent moon + progress ring (centered) */}
        <div className="mt-8 flex items-center justify-center md:mt-10">
          <motion.div style={{ rotate: moonRotate }} className="relative h-12 w-12">
            <svg viewBox="0 0 48 48" className="h-full w-full">
              {/* ring track */}
              <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(127,163,172,0.25)" strokeWidth="2" />
              {/* progress arc */}
              <motion.circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke="#C9896B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${circumference} ${circumference}`}
                style={{ strokeDashoffset: ringFill }}
                transform="rotate(-90 24 24)"
              />
            </svg>
            {/* crescent glyph in the middle */}
            <span className="absolute inset-0 flex items-center justify-center text-terracotta">
              <svg viewBox="0 0 20 20" className="h-4 w-4">
                <path
                  d="M15 10A7 7 0 1 1 8 1.5 7 7 0 0 0 15 10Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
/* ─────────────────── THE APPROACH ─────────────────── */
const steps = [
  { n: '01', title: 'Slow Down', text: "We create the space to think clearly and hear what actually matters most." },
  { n: '02', title: 'Find Clarity', text: "We get honest about what's in the way and what genuinely wants your attention." },
  { n: '03', title: 'Take Aligned Action', text: "You leave with practical next steps that feel achievable and true to who you are." },
];

type OrbAnim = {
  left?: string | number;
  top?: string | number;
  scale?: number;
  opacity?: number;
};

/* A single "step" orb: it draws itself when `shown`, then settles into the grid.
   Cream fill + black text so it reads clearly over the dark page. */
const ApproachOrb = ({
  orb,
  shown,
  ring,
  anim,
}: {
  orb: { n: string; title: string; text: string };
  shown: boolean;
  ring: number;
  anim: OrbAnim;
}) => {
  const shownState = { opacity: 1, y: 0 };
  const hiddenState = { opacity: 0, y: 18 };
  return (
    <motion.div
      animate={anim}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{ top: '50%', x: '-50%', y: '-50%' }}
      className="absolute aspect-square w-[min(27vh,25vw)] [perspective:1400px]"
    >
      <div className="relative h-full w-full">
        {/* art.png — smaller, reveals from top to bottom */}
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

        {/* text — black, fades in last above the art */}
        <motion.div
          initial={hiddenState}
          animate={shown ? shownState : hiddenState}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6"
        >
          <h4 className="text-charcoal font-serif text-xl md:text-2xl mt-3 mb-2 leading-tight">{orb.title}</h4>
          <p className="text-charcoal/70 text-sm italic leading-snug hidden md:block">{orb.text}</p>
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

const Approach = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const [index, setIndex] = useState(0);
  const [settled, setSettled] = useState(false);
  const activeRef = useRef(0);

  // Drive the active card from scroll — swaps at each third of the story.
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    let next = 0;
    if (v >= 0.62) next = 2;
    else if (v >= 0.31) next = 1;
    if (next !== activeRef.current) {
      activeRef.current = next;
      setIndex(next);
    }
    // Past the last segment the three orbs settle into an even grid.
    setSettled(v >= 0.9);
    if (v < 0.82) setSettled(false);
  });

  const headY = useTransform(scrollYProgress, [0, 0.15], [0, -14]);
  const ringCircumference = 2 * Math.PI * 48; // viewBox r=48

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-charcoal">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-cream">
        {/* background texture */}
        <div className="absolute inset-0 opacity-30">
          <img src="/ritual-studio-space.jpg" alt="" className="w-full h-full object-cover" aria-hidden />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>

        {/* heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 text-center mb-6 md:mb-8"
        >
          <motion.div style={{ y: headY }}>
            <motion.span variants={fadeUp} className="kicker !text-cream">The approach</motion.span>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-serif mt-3 max-w-3xl leading-tight">
              This is where transformation begins.
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* the three step orbs — active stays large & centered, done orbs slide into the grid */}
        <div className="relative z-10 h-[48vh] w-[min(100vw,122vh)]">
          <ApproachOrb
            orb={steps[0]}
            shown
            ring={ringCircumference}
            anim={
              index === 0 && !settled
                ? { left: '50%', scale: 1.28, opacity: 1 }
                : { left: '20%', scale: 0.96, opacity: 1 }
            }
          />
          <ApproachOrb
            orb={steps[1]}
            shown={index >= 1}
            ring={ringCircumference}
            anim={
              index === 0
                ? { opacity: 0 }
                : index === 1 && !settled
                  ? { left: '50%', scale: 1.28, opacity: 1 }
                  : { left: '80%', scale: 0.96, opacity: 1 }
            }
          />
          <ApproachOrb
            orb={steps[2]}
            shown={index >= 2}
            ring={ringCircumference}
            anim={
              index < 2
                ? { opacity: 0 }
                : { left: '50%', scale: settled ? 0.96 : 1.28, opacity: 1 }
            }
          />
        </div>

        {/* progress dots */}
        <div className="relative z-10 mt-6 flex items-center gap-3">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-8 bg-rose' : 'w-2.5 bg-cream/30'
              }`}
            />
          ))}
        </div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 mt-3 text-sm uppercase tracking-[0.3em] text-cream/50"
        >
          keep scrolling
        </motion.p>
      </div>
    </section>
  );
};

/* ─────────────────── TESTIMONIAL ─────────────────── */
const Testimonial = () => (
  <section className="bg-cream py-28 md:py-40 px-6 relative overflow-hidden">
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
        "She has a rare ability to balance intuition with structure. She doesn't just listen — she
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
        <p className="text-xs uppercase tracking-widest text-sage font-bold mt-1">MLH Agency</p>
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
  <section className="bg-linen py-28 md:py-36 px-6 relative overflow-hidden">
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
        className="text-lg text-sage mb-12 italic leading-relaxed"
      >
        Ideas, reflections, rituals, and practical tools for navigating growth, leadership, and
        life — sent from time to time, never as a pitch.
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
  <section className="bg-cream py-28 md:py-36 px-6 relative overflow-hidden text-center">
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
        className="text-lg text-sage italic mb-12"
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
        "Those who don't believe in magic will never find it." — Roald Dahl
      </motion.p>
    </div>
  </section>
);

export default Home;
