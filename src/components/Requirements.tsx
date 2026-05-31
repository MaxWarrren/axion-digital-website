const REQUIREMENTS = [
  {
    num: '01',
    title: 'Established operations',
    detail:
      'You have at least one full-time operator running the business day-to-day. We build systems for running operations, not for finding product-market fit.',
  },
  {
    num: '02',
    title: 'Real data to work with',
    detail:
      "Your business generates data — even if it's messy. CRMs, spreadsheets, email threads, invoices. We build the connective tissue that makes it useful.",
  },
  {
    num: '03',
    title: 'A budget for infrastructure',
    detail:
      'Our engagements start at $3,000/mo. Clients who get the most out of Axion treat technology as a capital investment, not an expense.',
  },
  {
    num: '04',
    title: 'Willingness to move fast',
    detail:
      "We run in 2-week sprints. You'll have working software in your hands quickly. We need a point of contact who can give us 2–3 hours per week.",
  },
];

export default function Requirements() {
  return (
    <section className="max-w-[1400px] mx-auto px-16 py-28">
      <div className="flex gap-[120px] items-start">
        <div className="flex-[0_0_340px]">
          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-6">
            Requirements
          </p>
          <h2 className="text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-white mb-5">
            Built for businesses
            <br />
            ready to scale.
          </h2>
          <p className="text-[14px] font-light leading-[1.7]" style={{ color: 'rgba(255,255,255,0.32)' }}>
            We work best with owner-operators who are serious about building long-term infrastructure — not chasing one-off automations.
          </p>
        </div>

        <div className="flex-1 flex flex-col">
          {REQUIREMENTS.map((req, i) => (
            <div
              key={req.num}
              className="flex gap-7 items-start py-8"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                ...(i === REQUIREMENTS.length - 1
                  ? { borderBottom: '1px solid rgba(255,255,255,0.06)' }
                  : {}),
              }}
            >
              <span
                className="text-[11px] font-normal tracking-[0.05em] pt-0.5 w-6 shrink-0"
                style={{ color: 'rgba(255,255,255,0.2)' }}
              >
                {req.num}
              </span>
              <div>
                <div className="text-[16px] font-normal mb-2 tracking-tight" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {req.title}
                </div>
                <div className="text-[13px] font-light leading-[1.65]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {req.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
