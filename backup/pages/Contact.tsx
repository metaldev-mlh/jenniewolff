import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referral: '',
    workingOn: '',
    needType: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-cream px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-terracotta italic">Thank you.</h1>
          <p className="text-xl md:text-2xl font-serif text-sage leading-relaxed">
            I read every note personally and will get back to you within two business days. — Jennie
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-cream">
      {/* 01 HEADER */}
      <header className="section-padding pt-32 pb-16">
        <div className="max-container">
          <h1 className="text-5xl md:text-8xl font-serif mb-8 text-charcoal leading-[0.9]">Let’s talk.</h1>
          <p className="text-xl md:text-2xl text-sage max-w-3xl leading-relaxed">
            Whether you’re building a brand, leading a team, or just trying to figure out the next right step — I’d love to hear what you’re working on. Share a few things below and I’ll be in touch personally.
          </p>
        </div>
      </header>

      <section className="section-padding pt-0">
        <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* 02 FORM */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-sage/10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-sage font-bold">Your name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border-b border-sage/30 py-2 focus:outline-none focus:border-terracotta transition-colors text-charcoal bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-sage font-bold">Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border-b border-sage/30 py-2 focus:outline-none focus:border-terracotta transition-colors text-charcoal bg-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-sage font-bold">How did you find me?</label>
                <select 
                  className="w-full border-b border-sage/30 py-2 focus:outline-none focus:border-terracotta transition-colors text-charcoal bg-transparent"
                  value={formData.referral}
                  onChange={(e) => setFormData({...formData, referral: e.target.value})}
                >
                  <option value="">Select an option</option>
                  <option value="Referral">Referral</option>
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Past colleague">Past colleague</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-sage font-bold">What are you working on, and what feels stuck?</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.workingOn}
                  onChange={(e) => setFormData({...formData, workingOn: e.target.value})}
                  className="w-full border-b border-sage/30 py-2 focus:outline-none focus:border-terracotta transition-colors text-charcoal bg-transparent resize-none"
                />
              </div>

              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-sage font-bold block mb-2">Which of these sounds most like what you need?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "1:1 coaching", 
                    "Team & leadership", 
                    "Brand strategy", 
                    "Ritual & experience", 
                    "Not sure yet"
                  ].map((type) => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="needType" 
                        value={type}
                        onChange={(e) => setFormData({...formData, needType: e.target.value})}
                        className="w-4 h-4 text-terracotta border-sage/30 focus:ring-terracotta" 
                      />
                      <span className="text-sage text-sm group-hover:text-terracotta transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-sage font-bold">Anything else you want me to know?</label>
                <input 
                  type="text" 
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full border-b border-sage/30 py-2 focus:outline-none focus:border-terracotta transition-colors text-charcoal bg-transparent"
                />
              </div>

              <button type="submit" className="terracotta-button flex items-center justify-center w-full md:w-auto">
                Send <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>

          {/* 03 DIRECT CONTACT */}
          <div className="lg:col-span-5 space-y-12">
             <div className="bg-blush/20 p-8 md:p-10 rounded-3xl border border-blush/40">
               <h3 className="text-sm uppercase tracking-widest text-terracotta font-bold mb-6">Direct</h3>
               <div className="space-y-6">
                 <div>
                   <p className="text-xs text-sage uppercase tracking-widest mb-1">Email</p>
                   <a href="mailto:jennie@thejenniewolff.com" className="text-xl font-serif hover:text-terracotta transition-colors">jennie@thejenniewolff.com</a>
                 </div>
                 <div>
                   <p className="text-xs text-sage uppercase tracking-widest mb-1">Office</p>
                   <p className="text-xl font-serif">Denver, CO</p>
                   <p className="text-sm text-sage">Working with clients across the U.S.</p>
                 </div>
                 <div>
                   <p className="text-xs text-sage uppercase tracking-widest mb-4">Social</p>
                   <div className="flex space-x-4">
                     <a href="#" className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center hover:bg-terracotta hover:text-white hover:border-terracotta transition-all"><Instagram size={18} /></a>
                     <a href="#" className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center hover:bg-terracotta hover:text-white hover:border-terracotta transition-all"><Linkedin size={18} /></a>
                   </div>
                 </div>
               </div>
             </div>

             <div className="p-8">
               <h3 className="text-sm uppercase tracking-widest text-sage font-bold mb-8">What Happens Next</h3>
               <div className="space-y-8">
                 {[
                   { t: "1. You write.", d: "Send a real note. The more honest, the better." },
                   { t: "2. I read every one personally.", d: "No assistant. No autoresponder dressed up as a person." },
                   { t: "3. We meet, if it’s a fit.", d: "If your note and my practice are aligned, I’ll invite you to a clarity session within two business days." }
                 ].map((step, i) => (
                   <div key={i} className="flex space-x-6">
                     <span className="text-terracotta font-serif text-lg">{i + 1}.</span>
                     <div>
                       <h4 className="font-serif mb-1">{step.t}</h4>
                       <p className="text-sage text-sm leading-relaxed">{step.d}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
