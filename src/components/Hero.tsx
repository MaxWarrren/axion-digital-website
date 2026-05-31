'use client';

import dynamic from 'next/dynamic';
import { useTypewriter } from '@/hooks/useTypewriter';

const DashboardPlayer = dynamic(() => import('./DashboardPlayer'), { ssr: false });

export default function Hero() {
  const { displayed, showCursor } = useTypewriter();

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="w-full max-w-[1400px] mx-auto px-16 flex items-center gap-14">

        <div className="flex-[0_0_58%] flex flex-col gap-7">
          <div
            className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[11px] font-normal text-white/35 tracking-[0.06em] uppercase w-fit"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Development · Consulting · Education
          </div>

          <h1 className="text-[62px] font-light leading-[1.08] tracking-[-0.025em] text-white whitespace-nowrap">
            Fractional AI leadership
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
            We build secure AI platforms and custom software that connect your entire operation — from intake to billing — so your business runs smarter without adding headcount.
          </p>

          <div className="flex items-center gap-6 pt-2">
            <a
              href="#contact"
              className="flex items-center gap-2 px-[26px] py-[13px] bg-white text-[#070707] rounded-[6px] text-[13px] font-medium tracking-tight"
            >
              Book a Free Consultation
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="#work"
              className="text-[13px] font-light flex items-center gap-1.5"
              style={{ color: 'rgba(255,255,255,0.32)' }}
            >
              See our work →
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center relative">
          <div
            className="absolute right-0 top-0 bottom-0 w-[18%] z-10 pointer-events-none rounded-r-[14px]"
            style={{ background: 'linear-gradient(to left, #070707, transparent)' }}
          />
          <DashboardPlayer />
        </div>

      </div>
    </section>
  );
}
