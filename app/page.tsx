import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { SelectedWork } from '@/components/projects/SelectedWork';
import { EngineeringLab } from '@/components/lab/EngineeringLab';
import { Skills } from '@/components/skills/Skills';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/footer/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-charcoal">
      <Navbar />
      <Hero />
      <About />
      <SelectedWork />
      <EngineeringLab />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
