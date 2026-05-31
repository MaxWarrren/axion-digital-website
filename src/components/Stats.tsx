const STATS = [
  { number: '200+',  label: 'Hours of manual work automated per client per year' },
  { number: '30+',   label: 'AI agents deployed across client operations' },
  { number: '2000+', label: 'Supported app integrations across our platform stack' },
  { number: '24/7',  label: 'Hosting & uptime on all deployed systems' },
];

export default function Stats() {
  return (
    <section id="contact" className="max-w-[1400px] mx-auto px-16 py-28">
      <div className="flex gap-20 items-start">
        <div className="flex-[0_0_360px]">
          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-6">
            Stats
          </p>
          <h2 className="text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-white mb-5">
            Systems that drive real
            <br />
            results{' '}
            <span style={{ color: 'rgba(255,255,255,0.28)' }}>without the fluff.</span>
          </h2>
          <p className="text-[14px] font-light leading-[1.7] mb-6" style={{ color: 'rgba(255,255,255,0.30)' }}>
            We&apos;ve partnered with owner-operated businesses across insurance, real estate, home services, and more.
          </p>
          <p className="text-[13px] font-light leading-[1.7]" style={{ color: 'rgba(255,255,255,0.25)' }}>
            When you work with us, you get direct access to the experts — 24/7 — without the bloated hierarchy of a big consulting firm.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-3">
          {STATS.map((stat) => (
            <div
              key={stat.number}
              className="rounded-xl p-9 flex flex-col gap-3"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.015)',
              }}
            >
              <div
                className="text-[52px] font-light leading-none"
                style={{ letterSpacing: '-0.04em' }}
              >
                {stat.number}
              </div>
              <div className="text-[13px] font-light leading-[1.5]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
