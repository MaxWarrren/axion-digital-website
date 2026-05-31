'use client';

import { useEffect, useState } from 'react';

type SubType = { name: string; help: string };
type Industry = { name: string; items: SubType[] };

const ROTATE_MS = 4500;

const INDUSTRIES: Industry[] = [
  {
    name: 'Financial Services',
    items: [
      { name: 'Accounting Firms', help: 'Automate bookkeeping, document intake, and client communication so staff scale without new hires.' },
      { name: 'Insurance Brokerages', help: 'Streamline client intake, policy renewals, and compliance workflows so brokers focus on selling.' },
      { name: 'Financial Planning & Wealth Management', help: 'Automate client onboarding, portfolio reporting, and review prep with full data privacy.' },
    ],
  },
  {
    name: 'Home Services',
    items: [
      { name: 'HVAC', help: 'Auto-dispatch, smart scheduling, and service follow-ups that keep techs booked and customers retained.' },
      { name: 'Roofing', help: 'Instant quoting, lead follow-up, and job tracking from first call to final invoice.' },
      { name: 'Landscaping', help: 'Route and crew scheduling, recurring billing, and seasonal re-engagement on autopilot.' },
      { name: 'Solar & Energy', help: 'Nurture long sales cycles with automated proposals, financing follow-up, and install pipeline tracking.' },
    ],
  },
  {
    name: 'Real-Estate',
    items: [
      { name: 'Independent Brokerages', help: 'Lead nurturing, listing operations, and agent performance dashboards in one connected platform.' },
      { name: 'Property Management', help: 'Automate tenant communications, maintenance dispatch, lease renewals, and owner reporting.' },
      { name: 'Investment Firms', help: 'Track deal flow, support underwriting, and automate investor reporting end-to-end.' },
      { name: 'Construction / GC', help: 'Bid management, project tracking, and subcontractor coordination without the spreadsheet chaos.' },
    ],
  },
  {
    name: 'Medical Practices',
    items: [
      { name: 'Dentists', help: 'Scheduling, recall reminders, and insurance verification that keep chairs full and admin light.' },
      { name: 'Chiropractors', help: 'Automated intake, appointment flow, and billing so the front desk runs itself.' },
      { name: 'Med-Spas', help: 'Online booking, membership management, and follow-up campaigns that drive repeat visits.' },
      { name: 'Physical Therapy', help: 'Patient intake, plan-of-care tracking, and claims support with HIPAA-grade privacy.' },
    ],
  },
  {
    name: 'Franchises & SMBs',
    items: [
      { name: 'Independent Franchises', help: 'Standardized AI systems that give every location enterprise tooling without enterprise overhead.' },
      { name: 'Multi-Unit Operators', help: 'Consolidated reporting and operations across locations from a single source of truth.' },
      { name: 'Owner-Operated SMBs', help: 'Replace the manual back office with automation so owners get their time back.' },
    ],
  },
];

export default function WhoWeWorkWith() {
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (pinned) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % INDUSTRIES.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [pinned]);

  const handleSelect = (i: number) => {
    if (pinned && active === i) {
      setPinned(false);
    } else {
      setActive(i);
      setPinned(true);
    }
  };

  const current = INDUSTRIES[active];

  return (
    <section id="work" className="max-w-[1400px] mx-auto px-16 py-28">
      <div className="flex items-baseline justify-between mb-12 gap-6 flex-wrap">
        <div>
          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-3">
            Who we work with
          </p>
          <h2 className="text-[34px] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[620px]">
            Built for owner-operated businesses across the industries we know best.
          </h2>
        </div>
        <span className="text-[12px] font-light text-white/25">
          {pinned ? 'Paused · tap to resume' : 'Auto-rotating · tap to explore'}
        </span>
      </div>

      {/* Industry selector */}
      <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
        {INDUSTRIES.map((industry, i) => {
          const isActive = i === active;
          return (
            <button
              key={industry.name}
              onClick={() => handleSelect(i)}
              className="relative pb-3 text-left transition-colors duration-200"
            >
              <span
                className="text-[16px] font-normal tracking-tight"
                style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.35)' }}
              >
                {industry.name}
              </span>
              {/* baseline track */}
              <span
                className="absolute left-0 bottom-0 h-px w-full"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              />
              {/* progress / active indicator */}
              {isActive && (
                <span
                  key={pinned ? `pin-${active}` : `run-${active}`}
                  className="absolute left-0 bottom-0 h-px"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    width: pinned ? '100%' : '0%',
                    animation: pinned ? 'none' : `progressGrow ${ROTATE_MS}ms linear forwards`,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Sub-type cards — re-mounts on active change to replay the entrance animation */}
      <div key={active} className="flex flex-wrap gap-[1px] rounded-xl overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}>
        {current.items.map((item, i) => (
          <div
            key={item.name}
            className="animate-fade-slide-up bg-[#070707] p-8 flex flex-col gap-3 flex-1 min-w-[240px]"
            style={{ animationDelay: `${i * 70}ms`, opacity: 0 }}
          >
            <div className="text-[15px] font-medium text-white/90 tracking-tight leading-snug">
              {item.name}
            </div>
            <div className="text-[13px] font-light text-white/35 leading-[1.65]">
              {item.help}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
