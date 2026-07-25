// TODO: confirm project descriptions and second results for each client
const WINS = [
  {
    name: 'Tactical Leads',
    desc: 'Content Marketing Agency',
    build: 'An end-to-end project management platform with AI-assisted content drafting, editor workflow collaboration, and client-facing delivery tracking.',
    results: ['3× client capacity without hiring', 'Seamless client-delivery system'],
  },
  {
    name: 'Left Side Logos',
    desc: 'Custom business apparel & merchandise',
    build: 'Custom website, CRM, and operations platform that unified their quoting, order management, and supplier integrations into a single interface.',
    results: ['1.5× YoY growth in revenue', 'Streamlined acquisition funnel & onboarding'],
  },
  {
    name: 'Mizzou Vintage',
    desc: 'University-themed vintage apparel reseller',
    build: 'Custom inventory database platform that integrated with their Shopify storefront for automated two-way inventory sync and sales tracking.',
    results: ['5 hrs/week saved on reconciliation', 'Unified analytics & sales reporting'],
  },
];

export default function BiggestWins() {
  return (
    <section id="wins" className="max-w-[1400px] mx-auto px-5 md:px-16 py-10 md:py-12 scroll-mt-24">
      <p className="text-[11px] font-normal tracking-[0.14em] uppercase mb-7" style={{ color: 'rgba(255,255,255,0.25)' }}>
        Our biggest client wins
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        {WINS.map((win, i) => (
          <div key={i} className="bg-[#070707] px-6 py-6 md:px-8 md:py-7 flex flex-col gap-5">
            {/* Client */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[16px] font-normal text-white/90 tracking-tight">{win.name}</span>
              <span className="text-[12px] font-light text-white/30">{win.desc}</span>
            </div>

            {/* The build */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-normal tracking-[0.12em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>
                The build
              </span>
              <p className="text-[13px] font-light leading-[1.6] text-white/45">{win.build}</p>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-2 mt-auto pt-1">
              {win.results.map((result, r) => (
                <div key={r} className="flex items-start gap-2.5">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="mt-[3px] flex-shrink-0">
                    <path d="M2.5 7l2.5 2.5L10.5 4" stroke="rgba(74,222,128,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[13px] font-light text-white/60 leading-snug">{result}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
