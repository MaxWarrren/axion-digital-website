'use client';

import Link from 'next/link';
import { useTypewriter } from '@/hooks/useTypewriter';
import HeroDashboard from './HeroDashboard';

export default function Hero() {
  const { displayed, showCursor } = useTypewriter();

  const scrollDown = () => {
    document.getElementById('wins')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center pt-20 relative">
      <div className="w-full max-w-[1400px] mx-auto px-16 flex items-center gap-14">

        <div className="flex-[0_0_58%] flex flex-col gap-7">
          <div
            className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[9px] font-normal text-white/35 tracking-[0.1em] uppercase w-fit"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Development · Consulting · Education
          </div>

          <h1 className="text-[62px] font-light leading-[1.08] tracking-[-0.025em] text-white whitespace-nowrap">
            The AI growth team
            <br />
            for owner-operated
            <br />
            <span style={{ color: 'rgba(255,255,255,0.32)' }}>
              {displayed}
              <span
                className="inline-block w-[2px] h-[0.82em] ml-[2px] align-middle"
                style={{
                  background: 'rgba(255,255,255,0.45)',
                  opacity: showCursor ? 1 : 0,
                }}
              />
            </span>
          </h1>

          <p className="text-[15px] font-light leading-[1.75] max-w-[480px]"
            style={{ color: 'rgba(255,255,255,0.35)' }}>
            We build the AI operating system that your business needs to scale without increasing headcount. Automate workflows, unlock new revenue streams, and future-proof your operations with intelligence at the core. 
          </p>

          <div className="flex items-center gap-6 pt-2">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-[26px] py-[13px] bg-white text-[#070707] rounded-[6px] text-[13px] font-medium tracking-tight"
            >
              Book a Free Consultation
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
            <a
              href="#work"
              className="text-[13px] font-light flex items-center gap-1.5"
              style={{ color: 'rgba(255,255,255,0.32)' }}
            >
              See our work →
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center relative">
          <HeroDashboard />
        </div>

      </div>

      {/* Scroll-down indicator */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="text-[10px] tracking-[0.16em] uppercase transition-colors" style={{ color: 'rgba(255,255,255,0.25)' }}>
          Scroll
        </span>
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center group-hover:border-white/30 transition-colors animate-scroll-bounce"
          style={{ border: '1px solid rgba(255,255,255,0.14)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3.5 5L7 8.5L10.5 5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </section>
  );
}
