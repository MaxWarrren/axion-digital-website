'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'What kinds of businesses do you work with?',
    a: 'We work with owner-operated businesses that have established operations — consumer services, real estate, B2B companies, and retail/CPG brands. If your team is doing manual work that could be automated, we can help.',
  },
  {
    q: 'Who do you work best with?',
    a: 'We work best with owner-operators running an established business — at least one full-time operator, real data to work with (even if it’s messy), and a willingness to move fast. We run in focused 2-week sprints, so we just need a point of contact who can give us 2–3 hours per week. Clients who get the most out of Axion treat technology as a long-term investment in scaling, not a one-off automation.',
  },
  {
    q: 'Why not just hire a developer?',
    a: 'A single full-time developer in the U.S. runs $120K–$180K+ a year once you add benefits, payroll, and overhead — and you still have to find them, manage them, and hope they cover everything. But no one developer is an expert in AI, automation, infrastructure, and custom software all at once. With Axion you get an entire specialized team for a fraction of that — engagements start at $3,000/mo (~$36K/year) — with no hiring risk, no ramp time, and no management burden. Senior-level output across every discipline, from day one.',
  },
  {
    q: 'How much does it cost?',
    a: 'Engagements start at $3,000/mo. Clients who get the most out of Axion treat technology as a capital investment in scaling their operation, not a one-off expense. We’ll scope exact pricing on your consultation.',
  },
  {
    q: 'How quickly will we see results?',
    a: 'We work in focused 2-week sprints, so you’ll have working software in your hands quickly rather than waiting months for a single big delivery. Most clients see meaningful time savings within the first few weeks.',
  },
  {
    q: 'Do we own the platform you build?',
    a: 'Yes. We build a custom platform around how your business actually works, and it’s yours to run. You get direct access to the systems, your data stays yours, and we handle hosting and uptime.',
  },
  {
    q: 'Is our data secure?',
    a: 'Security is built in from the ground up. We deploy private, compliant AI and cloud infrastructure designed for data-sensitive industries, so your data stays protected and under your control.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-16 py-20 md:py-28">
      <div className="max-w-[820px] mx-auto text-center">
        <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-4">
          FAQ
        </p>
        <h2 className="text-[30px] md:text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-white mb-5">
          Questions, answered.
        </h2>
        <p className="text-[14px] md:text-[15px] font-light leading-[1.7] max-w-[460px] mx-auto" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Still have something on your mind? Book a free consultation and we’ll walk through it together.
        </p>
      </div>

      <div className="max-w-[820px] mx-auto mt-10 md:mt-14">
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', ...(i === FAQS.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.08)' } : {}) }}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 md:gap-6 py-5 md:py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] md:text-[17px] font-normal tracking-tight" style={{ color: isOpen ? '#fff' : 'rgba(255,255,255,0.75)' }}>
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300"
                  style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1.5v11M1.5 7h11" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {/* grid-rows 0fr→1fr animates to the answer's natural height, so
                  long answers can't clip at narrow widths the way a fixed
                  max-height would. */}
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
              >
                <div className="overflow-hidden">
                  <p className="text-[14px] font-light leading-[1.75] pb-7 pr-0 md:pr-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
