'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Send, CheckCircle2, MapPin, Clock } from 'lucide-react';
import { LocalClock } from './LocalClock';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);

    const subject = encodeURIComponent(`[Inquiry] Project & Collaboration from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:sydismaiel10@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-black/[0.08] text-stone text-xs font-mono tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="text-charcoal font-semibold">(05)</span>
            <span>/</span>
            <span>INITIATE CONTACT & COLLABORATION</span>
          </div>
          <span className="hidden sm:inline">MYSURU, KARNATAKA, INDIA</span>
        </div>

        {/* Monumental Editorial Headline */}
        <div className="max-w-4xl space-y-6">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-charcoal tracking-tight leading-[1.05]">
            Let’s build something <br />
            <span className="italic font-light text-charcoal/90">enduring together.</span>
          </h2>
          <p className="text-base sm:text-xl text-stone font-light max-w-2xl leading-relaxed">
            Whether you want to discuss software systems architecture, early-stage startup co-founding, or collaborative product engineering, my inbox is open.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Coordinates & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-paper border border-black/[0.08] shadow-subtle space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-stone block">
                Direct Channels
              </span>

              <div className="space-y-4 font-mono text-xs">
                <a
                  href="mailto:sydismaiel10@gmail.com"
                  className="flex items-center justify-between p-4 rounded-xl bg-surface hover:bg-[#EAE7E0] text-charcoal transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent-olive" />
                    <span>sydismaiel10@gmail.com</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-charcoal transition-colors" />
                </a>

                <a
                  href="https://github.com/ismaiel10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-surface hover:bg-[#EAE7E0] text-charcoal transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-accent-olive" />
                    <span>github.com/ismaiel10</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-charcoal transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/syed-ismaiel-616645330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-surface hover:bg-[#EAE7E0] text-charcoal transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-accent-olive" />
                    <span>linkedin.com/in/syed-ismaiel</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-charcoal transition-colors" />
                </a>
              </div>
            </div>

            {/* Local Time & Location Pill */}
            <div className="p-6 rounded-2xl bg-surface border border-black/[0.06] flex items-center justify-between text-xs font-mono text-stone">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-olive" />
                <span>Mysuru, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-stone" />
                <LocalClock />
              </div>
            </div>
          </div>

          {/* Right Column: Clean Editorial Dispatch Form */}
          <div className="lg:col-span-7 bg-paper rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-editorial">
            <span className="font-mono text-xs uppercase tracking-widest text-stone block mb-6">
              Dispatch an Inquiry
            </span>

            {sent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent-olive/10 text-accent-olive flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-charcoal font-medium">
                  Message Dispatched
                </h4>
                <p className="text-sm text-stone max-w-sm mx-auto font-light">
                  Thank you for reaching out. An email draft has been prepared, or I will respond directly shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase text-stone tracking-wider block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-black/[0.06] focus:border-charcoal focus:outline-none text-charcoal text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase text-stone tracking-wider block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-black/[0.06] focus:border-charcoal focus:outline-none text-charcoal text-sm font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-stone tracking-wider block">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product, project, or venture..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-black/[0.06] focus:border-charcoal focus:outline-none text-charcoal text-sm font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-charcoal text-white hover:bg-black transition-colors text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
