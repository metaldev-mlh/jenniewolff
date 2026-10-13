import React from 'react';
import { motion } from 'motion/react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-serif text-charcoal mb-4">{title}</h2>
    <div className="text-lg text-charcoal/75 leading-relaxed space-y-3">{children}</div>
  </div>
);

const PrivacyPolicy = () => (
  <div className="bg-cream">
    <header className="pt-40 pb-16 px-6">
      <div className="max-container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif text-charcoal leading-[0.95] mb-6"
        >
          Privacy <span className="italic">Policy</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base text-sage uppercase tracking-widest"
        >
          Last updated: October 13, 2026
        </motion.p>
      </div>
    </header>

    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="max-container px-6 pb-32"
    >
      <div className="max-w-3xl">
        <Section title="Overview">
          <p>
            Joyous Wolf Consulting LLC ("we," "us," or "our") operates the website thejenniewolff.com. This Privacy
            Policy explains how we collect, use, and protect information you provide when you visit or interact with
            our website.
          </p>
          <p>
            We respect your privacy and are committed to handling your personal information responsibly. By using
            our website, you agree to the practices described in this policy.
          </p>
        </Section>

        <Section title="Information We Collect">
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Contact information</strong>, your name and email address when you submit an inquiry through our contact form.</li>
            <li><strong>Newsletter subscription</strong>, your email address if you sign up to receive communications from Jennie.</li>
            <li><strong>Usage data</strong>, basic analytics such as pages visited and time spent on the site. This data is aggregated and does not identify you personally.</li>
          </ul>
          <p>We do not collect payment information directly on this website.</p>
        </Section>

        <Section title="How We Use Your Information">
          <p>Information you provide is used solely to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Respond to your inquiry or question.</li>
            <li>Send you the newsletter or updates you signed up for.</li>
            <li>Improve the website experience.</li>
          </ul>
          <p>We will never sell, rent, or share your personal information with third parties for their marketing purposes.</p>
        </Section>

        <Section title="Cookies">
          <p>
            Our website may use cookies to improve your browsing experience. Cookies are small files stored on your
            device that help us understand how visitors use the site. You can disable cookies through your browser
            settings at any time.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>
            We may use trusted third-party services (such as email platforms or analytics tools) to help operate the
            website. These services are bound by their own privacy policies and are not permitted to use your
            information for any other purpose.
          </p>
        </Section>

        <Section title="Data Security">
          <p>
            We take reasonable precautions to protect your information. However, no method of transmission over the
            internet is 100% secure. We cannot guarantee absolute security, but we are committed to protecting your
            data to the best of our ability.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Request access to the personal information we hold about you.</li>
            <li>Ask us to correct or delete your information.</li>
            <li>Unsubscribe from our newsletter at any time using the link in any email.</li>
          </ul>
        </Section>

        <Section title="Children's Privacy">
          <p>
            This website is not directed at children under the age of 13. We do not knowingly collect personal
            information from anyone under 13.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
            updated date. Continued use of the website after changes are posted constitutes your acceptance of those
            changes.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have questions about this Privacy Policy or how your information is handled, please contact us at:
          </p>
          <p className="mt-3">
            <a href="mailto:jennie@thejenniewolff.com" className="text-terracotta hover:underline italic">
              jennie@thejenniewolff.com
            </a>
          </p>
          <p className="mt-1 text-charcoal/60">Joyous Wolf Consulting LLC · Denver, Colorado</p>
        </Section>
      </div>
    </motion.main>
  </div>
);

export default PrivacyPolicy;
