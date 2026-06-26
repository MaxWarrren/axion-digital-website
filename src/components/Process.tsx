const STEPS = [
  {
    num: '01',
    title: 'Free consultation',
    detail: 'We learn how your business runs, where your team loses time, and what scaling looks like for you.',
  },
  {
    num: '02',
    title: 'System mapping',
    detail: 'We map your workflows and design the platform, automations, and AI agents that fit your operation.',
  },
  {
    num: '03',
    title: 'Build in sprints',
    detail: 'We build in focused 2-week sprints, putting working software in your hands fast — no months-long black box.',
  },
  {
    num: '04',
    title: 'Launch & scale',
    detail: 'We deploy, train your team, and keep refining the system as your business grows.',
  },
];

export default function Process() {
  return (
    <section className="max-w-[1400px] mx-auto px-16 py-28">
      {/* Centered header */}
      <div className="text-center mb-16">
        <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-4">
          How it works
        </p>
        <h2 className="text-[34px] font-light leading-[1.15] tracking-[-0.02em] text-white">
          What working with us looks like.
        </h2>
      </div>

      {/* Vertical flow chart */}
      <div className="max-w-[520px] mx-auto flex flex-col items-center">
        {STEPS.map((step, i) => (
          <div key={step.num} className="w-full flex flex-col items-center">
            <div
              className="w-full rounded-xl px-8 py-7 flex flex-col items-center text-center gap-3"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.015)' }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-normal"
                style={{ border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.6)' }}
              >
                {step.num}
              </div>
              <div className="text-[18px] font-normal text-white/85 tracking-tight leading-snug">
                {step.title}
              </div>
              <div className="text-[13px] font-light text-white/30 leading-[1.65] max-w-[360px]">
                {step.detail}
              </div>
            </div>

            {/* Connector */}
            {i < STEPS.length - 1 && (
              <div className="flex flex-col items-center py-2.5" aria-hidden="true">
                <div className="w-px h-6" style={{ background: 'rgba(255,255,255,0.12)' }} />
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                  <path d="M1.5 1.5L7 7l5.5-5.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
