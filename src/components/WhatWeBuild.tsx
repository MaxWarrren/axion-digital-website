type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const stroke = {
  fill: 'none' as const,
  stroke: 'rgba(255,255,255,0.55)',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const SERVICES: Service[] = [
  {
    title: 'Workflow Automation Systems',
    description:
      'Connect your tools and eliminate the repetitive manual work that eats your team’s day — from data entry to handoffs and approvals.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" {...stroke}>
        <rect x="2" y="3" width="6" height="5" rx="1.2" />
        <rect x="14" y="3" width="6" height="5" rx="1.2" />
        <rect x="8" y="14" width="6" height="5" rx="1.2" />
        <path d="M5 8v2.5a1.5 1.5 0 0 0 1.5 1.5H11M17 8v2.5a1.5 1.5 0 0 1-1.5 1.5H11" />
      </svg>
    ),
  },
  {
    title: 'Custom AI Agents',
    description:
      'Purpose-built AI employees that handle real tasks across your stack: answering, drafting, routing, qualifying, and following up.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" {...stroke}>
        <rect x="4" y="7" width="14" height="10" rx="2.5" />
        <path d="M11 7V4M11 4h-1.5M11 4h1.5" />
        <circle cx="8.5" cy="12" r="0.6" fill="rgba(255,255,255,0.55)" stroke="none" />
        <circle cx="13.5" cy="12" r="0.6" fill="rgba(255,255,255,0.55)" stroke="none" />
        <path d="M2.5 11v2M19.5 11v2" />
      </svg>
    ),
  },
  {
    title: 'Automated Growth Systems',
    description:
      'Paid ad funnels, content engines, and outreach campaigns that run on autopilot — driving a steady flow of qualified leads while you focus on the work.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" {...stroke}>
        <path d="M3 16l4.5-4.5 3 3L18 7" />
        <path d="M18 7h-3.5M18 7v3.5" />
        <path d="M3 19h16" />
      </svg>
    ),
  },
  {
    title: 'Predictive Analytics & Intelligence',
    description:
      'Custom machine learning models and reporting dashboards built for data-heavy businesses — reliable forecasting, trend analysis, and real-time visibility across your entire operation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" {...stroke}>
        <path d="M3 16l4-5 3.5 3L14 8l5 4" />
        <path d="M3 19h16" />
        <circle cx="7" cy="11" r="1.2" fill="rgba(255,255,255,0.55)" stroke="none" />
        <circle cx="10.5" cy="14" r="1.2" fill="rgba(255,255,255,0.55)" stroke="none" />
        <circle cx="14" cy="8" r="1.2" fill="rgba(255,255,255,0.55)" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'CRM & Database Setup',
    description:
      'A single source of truth for your contacts, deals, and operations — structured, clean, and automatically kept up to date.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" {...stroke}>
        <ellipse cx="11" cy="5.5" rx="7" ry="2.5" />
        <path d="M4 5.5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" />
        <path d="M4 10.5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" />
      </svg>
    ),
  },
  {
    title: 'Secure AI & Cloud Infrastructure',
    description:
      'Private, compliant AI and cloud foundations that keep your data yours — built from the ground up for data-sensitive industries.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" {...stroke}>
        <path d="M11 2.5l6.5 2.5v4.5c0 4-2.8 7.5-6.5 9-3.7-1.5-6.5-5-6.5-9V5L11 2.5z" />
        <path d="M8.3 11l1.8 1.8 3.6-3.6" />
      </svg>
    ),
  },
];

export default function WhatWeBuild() {
  return (
    <section id="services" className="max-w-[1400px] mx-auto px-5 md:px-16 pt-20 md:pt-28 pb-0">
      <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-3">
        What we build for you
      </p>
      <h2 className="text-[26px] md:text-[34px] font-light leading-[1.15] tracking-[-0.02em] text-white mb-10 md:mb-12 max-w-[560px]">
        One partner for every system your business runs on.
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] rounded-xl overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="bg-[#070707] hover:bg-white/[0.025] transition-colors duration-200 p-7 md:p-10 flex flex-col gap-4"
          >
            <div
              className="w-11 h-11 flex items-center justify-center rounded-[10px]"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              aria-hidden="true"
            >
              {service.icon}
            </div>
            <div className="text-[16px] md:text-[17px] font-normal text-white/85 tracking-tight leading-snug">
              {service.title}
            </div>
            <div className="text-[13px] font-light text-white/30 leading-[1.65]">
              {service.description}
            </div>
          </div>
        ))}
      </div>

      {/* ── Convergence connector ── */}

      {/* Bracket arms spanning the grid, converging to a center point */}
      <svg
        width="100%"
        height="52"
        viewBox="0 0 1200 52"
        preserveAspectRatio="none"
        /* The converging brackets only read against the 3-column grid; on a
           single-column stack they squash into noise. */
        className="hidden lg:block mt-0"
        aria-hidden="true"
      >
        <path
          d="M 6 0 L 6 26 Q 6 48 26 48 L 598 48"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 1194 0 L 1194 26 Q 1194 48 1174 48 L 602 48"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="600" cy="48" r="2.5" fill="rgba(255,255,255,0.14)" />
      </svg>

      {/* Centered drop: "all of it → one platform." with a downward chevron */}
      <div className="flex flex-col items-center text-center pt-12 pb-8 lg:pt-8">
        <p className="text-[10px] tracking-[0.18em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.18)' }}>
          all of it, in
        </p>
        <p className="text-[26px] md:text-[34px] font-light leading-[1.05] tracking-[-0.025em]" style={{ color: 'rgba(255,255,255,0.55)' }}>
          one platform.
        </p>
        <svg width="40" height="64" viewBox="0 0 40 64" fill="none" className="mt-5" aria-hidden="true">
          <line x1="20" y1="0" x2="20" y2="44" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <circle cx="20" cy="0" r="2" fill="rgba(255,255,255,0.18)" />
          <path d="M 12 38 L 20 50 L 28 38" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
