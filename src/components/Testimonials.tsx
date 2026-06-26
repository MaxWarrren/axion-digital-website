// TODO: replace placeholder testimonials with real client quotes, names, and companies
const TESTIMONIALS = [
  {
    quote:
      'Axion rebuilt our entire intake and follow-up process. We’re saving close to two days of admin work every week and nothing falls through the cracks anymore.',
    name: 'Client Name',
    title: 'Owner',
    company: 'Company Name',
  },
  {
    quote:
      'They didn’t just hand us software — they understood how our business actually runs and built around it. The custom platform is now the center of our operation.',
    name: 'Client Name',
    title: 'Managing Partner',
    company: 'Company Name',
  },
  {
    quote:
      'The AI agents handle our first-line responses around the clock. Our response time went from hours to minutes and our close rate went up with it.',
    name: 'Client Name',
    title: 'Founder',
    company: 'Company Name',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-[1400px] mx-auto px-16 py-28">
      <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-3">
        Testimonials
      </p>
      <h2 className="text-[34px] font-light leading-[1.15] tracking-[-0.02em] text-white mb-12 max-w-[560px]">
        What our clients say.
      </h2>

      <div className="grid grid-cols-3 gap-[1px] rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-[#070707] p-10 flex flex-col gap-7">
            <p className="text-[15px] font-light leading-[1.7] text-white/70 flex-1">
              {t.quote}
            </p>
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] font-normal text-white/80">{t.name}</span>
              <span className="text-[12px] font-light text-white/35">{t.title}, {t.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
