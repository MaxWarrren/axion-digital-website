import Hero from '@/components/Hero';
import BiggestWins from '@/components/BiggestWins';
import About from '@/components/About';
import WhatWeBuild from '@/components/WhatWeBuild';
import Platform from '@/components/Platform';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

const Divider = () => (
  <div className="max-w-[1400px] mx-auto px-5 md:px-16">
    <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
  </div>
);

export default function Home() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <Hero />
      <BiggestWins />
      <Divider />
      <About />
      <Divider />
      <WhatWeBuild />
      <Platform />
      <Divider />
      <Stats />
      <Divider />
      <Process />
      <Divider />
      <FAQ />
      <CTASection />
    </main>
  );
}
