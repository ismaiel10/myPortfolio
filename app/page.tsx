import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/hero/Hero';
import { TableOfContents } from '@/components/navigation/TableOfContents';
import { About } from '@/components/about/About';
import { SelectedWork } from '@/components/projects/SelectedWork';
import { EngineeringLab } from '@/components/lab/EngineeringLab';
import { Capabilities } from '@/components/capabilities/Capabilities';
import { JourneyTimeline } from '@/components/journey/JourneyTimeline';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/footer/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070709] text-white selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <TableOfContents />
      <About />
      <SelectedWork />
      <EngineeringLab />
      <Capabilities />
      <JourneyTimeline />
      <Contact />
      <Footer />
    </main>
  );
}
