// TODO: replace placeholder metrics/copy with real client outcomes
const RESULTS = [
  {
    metric: '10–20 hrs',
    unit: 'saved per week',
    detail: 'Manual back-office work — data entry, scheduling, follow-ups — handed off to automated systems and AI agents.',
  },
  {
    metric: '3–5×',
    unit: 'capacity without hiring',
    detail: 'Take on more clients and projects without adding overhead — scale your fulfillment and operations, not your headcount.',
  },
  {
    metric: '2–3×',
    unit: 'faster response times',
    detail: 'AI agents answer, route, and qualify leads and customer inquiries in minutes instead of hours or days.',
  },
  {
    metric: '1',
    unit: 'unified platform',
    detail: 'Every tool, dataset, and workflow consolidated into a single operating system your whole team runs on.',
  },
];

export default function Stats() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-16 py-20 md:py-28">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
        {/* Left copy */}
        <div className="w-full md:flex-[0_0_360px]">
          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-6">
            Results
          </p>
          <h2 className="text-[30px] md:text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-white mb-5">
            Systems that drive real results{' '}
            <br className="hidden md:inline" />
            <span style={{ color: 'rgba(255,255,255,0.28)' }}>without the fluff.</span>
          </h2>
          <p className="text-[14px] font-light leading-[1.7] mb-6" style={{ color: 'rgba(255,255,255,0.30)' }}>
            We&apos;ve partnered with owner-operated businesses across consumer services, real estate, B2B, and retail.
          </p>
          <p className="text-[13px] font-light leading-[1.7]" style={{ color: 'rgba(255,255,255,0.25)' }}>
            You get direct access to the experts who build your systems — without the bloated hierarchy or markup of a big consulting firm.
          </p>
        </div>

        {/* Right 2x2 grid */}
        <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RESULTS.map((r) => (
            <div
              key={r.unit}
              className="rounded-xl p-6 md:p-8 flex flex-col gap-2"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.015)' }}
            >
              <div className="text-[36px] md:text-[44px] font-light leading-none tracking-[-0.04em]">{r.metric}</div>
              <div className="text-[14px] font-normal text-white/55 mt-1">{r.unit}</div>
              <div className="text-[12px] font-light leading-[1.6] text-white/30 mt-1">{r.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
