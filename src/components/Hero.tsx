'use client';

import Link from 'next/link';
import { useTypewriter } from '@/hooks/useTypewriter';
import HeroDashboard from './HeroDashboard';
import ScaleToFit from './ScaleToFit';

export default function Hero() {
  const { displayed, showCursor } = useTypewriter();

  const scrollDown = () => {
    document.getElementById('wins')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[100svh] lg:min-h-screen flex items-center pt-24 pb-16 lg:pt-20 lg:pb-0 relative">
      <div className="w-full max-w-[1400px] mx-auto px-5 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-14">

        <div className="w-full lg:flex-[0_0_58%] flex flex-col gap-6 md:gap-7">
          <div
            className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[9px] font-normal text-white/35 tracking-[0.1em] uppercase w-fit"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Development · Consulting · Education
          </div>

          {/* Sized fluidly so the longest typed phrase ("Professional Service
              Firms") always fits on one line — otherwise the headline reflows
              mid-animation and shoves the page around. The two ratios track the
              two layouts: full-width when stacked, 58% of the row at lg+. */}
          <h1 className="text-[clamp(23px,7vw,54px)] lg:text-[clamp(40px,calc(4.85vw-9px),62px)] font-light leading-[1.08] tracking-[-0.025em] text-white whitespace-normal lg:whitespace-nowrap">
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

          <p className="text-[14px] md:text-[15px] font-light leading-[1.75] max-w-[480px]"
            style={{ color: 'rgba(255,255,255,0.35)' }}>
            We build the AI operating system that your business needs to scale without increasing headcount. Automate workflows, unlock new revenue streams, and future-proof your operations with intelligence at the core. 
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
            <Link
              href="/contact"
              className="flex items-center justify-center sm:justify-start gap-2 px-[26px] py-[15px] sm:py-[13px] bg-white text-[#070707] rounded-[6px] text-[13px] font-medium tracking-tight"
            >
              Book a Free Consultation
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
            <a
              href="#work"
              className="text-[13px] font-light flex items-center justify-center sm:justify-start gap-1.5 py-2 sm:py-0"
              style={{ color: 'rgba(255,255,255,0.32)' }}
            >
              See our work →
            </a>
          </div>
        </div>

        {/* min-w-0: without it the flex item can't shrink below the mockup's
            rigid min-content width (~428px) and overflows the viewport. */}
        <div className="w-full lg:flex-1 lg:min-w-0 flex items-center relative">
          <ScaleToFit minWidth={420} className="w-full">
            <HeroDashboard />
          </ScaleToFit>
        </div>

      </div>

      {/* Scroll-down indicator */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 group"
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
