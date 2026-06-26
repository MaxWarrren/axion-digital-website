'use client';

import { useEffect, useState } from 'react';

type SubType = { name: string; help: string };
type Industry = { name: string; items: SubType[] };

const ROTATE_MS = 4500;

const INDUSTRIES: Industry[] = [
  {
    name: 'Consumer Services',
    items: [
      { name: 'Home & Trade Services', help: 'HVAC, roofing, landscaping, solar, and local operators — scheduling, dispatch, quoting, and follow-up on autopilot.' },
      { name: 'Health & Wellness Practices', help: 'Dental, chiropractic, med-spa, and therapy practices — intake, booking, reminders, and billing that run themselves.' },
      { name: 'Professional & Personal Services', help: 'Accounting, legal, financial, and personal-service firms — client intake, document work, and communication automated end-to-end.' },
    ],
  },
  {
    name: 'Real Estate',
    items: [
      { name: 'Brokerages & Agents', help: 'Lead nurturing, listing operations, and performance dashboards in one connected platform.' },
      { name: 'Property Management', help: 'Tenant communication, maintenance dispatch, renewals, and owner reporting on autopilot.' },
      { name: 'Investment & Development', help: 'Deal flow, underwriting support, investor reporting, and project tracking end-to-end.' },
    ],
  },
  {
    name: 'B2B Companies',
    items: [
      { name: 'Agencies & Professional Services', help: 'Pipeline, proposals, onboarding, and delivery streamlined so billable teams stay on the work.' },
      { name: 'SaaS & Technology', help: 'Lead routing, onboarding, and customer-success workflows that scale revenue without scaling headcount.' },
      { name: 'Wholesale & Distribution', help: 'Orders, inventory, and accounts connected so the back office runs itself across every channel.' },
    ],
  },
  {
    name: 'Retail / CPG',
    items: [
      { name: 'E-Commerce & DTC Brands', help: 'Storefront, inventory, and customer data unified with automated marketing and fulfillment.' },
      { name: 'Consumer Products', help: 'Demand forecasting, automated reordering, and performance tracking across retail and DTC channels.' },
      { name: 'Multi-Location & Food/Bev', help: 'Consolidated operations and reporting across every location from a single source of truth.' },
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
      <div className="text-center mb-10">
        <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-3">
          Who we work with
        </p>
        <h2 className="text-[34px] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[620px] mx-auto">
          Built for owner-operated businesses across the industries we know best.
        </h2>
        <span className="block text-[12px] font-light text-white/25 mt-5">
          {pinned ? 'Paused · tap to resume' : 'Auto-rotating · tap to explore'}
        </span>
      </div>

      {/* Industry selector */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
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
