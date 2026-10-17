import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

const TESTIMONIALS = [
  {
    quote: "Working with Jennie has been pivotal for our team. We appreciate her thoughtfulness and intentionality and leave every session feeling accomplished and proud. She has a true talent of connecting with individuals and helping others operate as their best selves.",
    name: "Katie Gillberg",
    title: "Hydrate IV Bar",
  },
  {
    quote: "She has a rare ability to balance intuition with structure. She doesn't just listen, she challenges, and does it in a way that actually moves you forward instead of spinning you out.",
    name: "Jason Shader Smith",
    title: "MLH Agency",
  },
  {
    quote: "Jennie has an amazing gift of creating an incredibly safe space, allowing for vulnerability and authenticity, and creating personalized steps to move through the blocks. She provides action items and checks in on progress, which is a helpful way to ensure accountability.",
    name: "Melissa Bennett",
    title: "Nike",
  },
  {
    quote: "Jennie is a wealth of knowledge that wants to see your success. She is a great listener and is able to guide ideas in a direction that make progress more attainable and less overwhelming.",
    name: "Paul Bork",
    title: "Dadventure",
  },
  {
    quote: "You helped bring clarity and structure to both our marketing strategy and leadership approach. You also helped me better understand how to lead in a way that aligned with my strengths instead of constantly operating from pressure.",
    name: "Lizzie",
    title: "[Last name + company needed]",
  },
  {
    quote: "Jennie has seen me clearly since the very beginning, before I truly knew who I was or had the potential of becoming. Her belief in me gave me the courage to stretch and grow. As my business coach, her insight, ideas, and real-time feedback have been invaluable in helping me refine my services and grow with confidence and clarity.",
    name: "Angela Levenson",
    title: "Founder, Home Again Organizing",
  },
];

const Testimonials = () => (
  <div className="bg-cream overflow-x-clip">
    <header className="bg-linen px-6 py-0">
      <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[55vh] pt-20 pb-8 md:pl-36">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif mb-6 text-charcoal leading-[1.05]"
          >
            The <span className="italic text-terracotta">impact.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-sage max-w-xl leading-relaxed"
          >
            Words from the people who've done the work.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="hidden md:block aspect-[3/4] max-h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <img src="/Jennie-3.png" alt="Jennie Wolff" className="w-full h-full object-cover object-top" />
        </motion.div>
      </div>
    </header>

    <section className="pt-0 pb-12 px-6">
      <div className="max-container space-y-4">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-linen border border-sage/10 rounded-[2rem] p-8 md:p-12"
          >
            <blockquote className="font-serif italic text-xl md:text-2xl text-charcoal leading-relaxed mb-6">
              "{t.quote}"
            </blockquote>
            <footer>
              <p className="font-serif text-base text-charcoal">{t.name}</p>
              <p className="text-xs uppercase tracking-widest text-sage font-bold mt-1">{t.title}</p>
            </footer>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="bg-cream text-center py-12 px-6">
      <div className="max-container">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-serif italic text-sage mb-10 max-w-xl mx-auto"
        >
          Ready to write your own chapter?
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

export default Testimonials;
