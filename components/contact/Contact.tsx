'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { LocalClock } from './LocalClock';
import { Mail, Github, Linkedin, Send, CheckCircle2, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Product Co-founding / Startup',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#06B6D4', '#3B82F6', '#6366F1'],
      });
    } catch (err) {
      // ignore
    }

    setSubmitted(true);

    // Open mailto with prefilled information
    const subject = encodeURIComponent(`[Portfolio Dispatch] ${formData.category} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.category}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:sydismaiel10@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="06"
          badge="DIRECT CHANNELS"
          title="Initiate Direct Contact"
          subtitle="Whether discussing software architecture, startup co-founding, or collaborative product engineering, I welcome thoughtful inquiries."
          badgeVariant="rose"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Coordinates & Social Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              
              <div className="p-6 rounded-2xl bg-surface-subtle border border-white/10 shadow-card-rim space-y-4">
                <span className="font-mono text-xs uppercase text-slate-400 tracking-wider">
                  PRIMARY DISPATCH CHANNEL
                </span>

                <a
                  href="mailto:sydismaiel10@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-white/5 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Personal Email</span>
                    <span className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      sydismaiel10@gmail.com
                    </span>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href="https://github.com/ismaiel10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-surface border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                      <span className="font-mono text-xs text-white">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/syed-ismaiel-616645330"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-surface border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                      <span className="font-mono text-xs text-white">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Geographic Coordinates & Time */}
              <div className="p-6 rounded-2xl bg-surface-subtle border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-slate-400">
                    BASE STATION
                  </span>
                  <Badge variant="cyan" size="sm">
                    Karnataka, India
                  </Badge>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Mysuru, Karnataka, India (12.3118° N, 76.6529° E)</span>
                  </div>
                  <LocalClock />
                </div>
              </div>

            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl bg-surface-muted/50 border border-white/5 text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Actively exploring collaborative product initiatives & systems co-founding.</span>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-subtle border border-white/10 shadow-card-rim">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>TRANSMISSION INTERFACE</span>
                </div>
                <span className="font-mono text-[11px] text-slate-500">
                  SECURE CLIENT DISPATCH
                </span>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-glow-cyan">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white">
                    Transmission Dispatched
                  </h4>
                  <p className="text-sm text-slate-300 font-light max-w-md">
                    Thank you, {formData.name}. Your message has been formatted and opened in your email client for direct delivery to <strong className="text-white">sydismaiel10@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', category: 'Product Co-founding / Startup', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 font-sans transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 font-sans transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/60 font-sans transition-colors"
                    >
                      <option value="Product Co-founding / Startup">Product Co-founding / Startup Venture</option>
                      <option value="Software & Systems Architecture">Software & Systems Architecture Consultation</option>
                      <option value="AI & Machine Learning Research">AI & Machine Learning Exploration</option>
                      <option value="General Professional Connection">General Professional Connection</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Transmission Content *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Outline your proposal, project scope, or technical challenge..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 font-sans transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-200 text-black font-display font-bold text-sm tracking-wide transition-all shadow-lg shadow-white/10 flex items-center justify-center gap-2 group"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 text-black" />
                  </button>

                  <p className="font-mono text-[10px] text-slate-500 text-center">
                    Direct validation enabled. Form triggers client-side dispatch directly to sydismaiel10@gmail.com.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
