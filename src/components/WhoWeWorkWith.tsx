const CLIENTS = [
  {
    icon: '🏢',
    title: 'Insurance Brokerages',
    description:
      'Automate client intake, policy renewals, and compliance workflows so your brokers focus on selling, not admin.',
  },
  {
    icon: '📊',
    title: 'Accounting Firms',
    description:
      'AI-assisted bookkeeping, document processing, and client communication that scales without hiring more staff.',
  },
  {
    icon: '🏡',
    title: 'Real-Estate Brokerages',
    description:
      'Connected platforms for listings, lead nurturing, transaction management, and agent performance — all in one OS.',
  },
  {
    icon: '🏗️',
    title: 'Property Management Firms',
    description:
      'Automate tenant communications, maintenance dispatch, lease renewals, and financial reporting end-to-end.',
  },
  {
    icon: '🔧',
    title: 'Home Service Companies',
    description:
      'Scheduling, dispatch, quoting, invoicing, and customer follow-up — running autonomously in the background.',
  },
  {
    icon: '🔗',
    title: 'Independent Franchises',
    description:
      'Standardized AI systems that give every location the tools of an enterprise operation without enterprise overhead.',
  },
];

export default function WhoWeWorkWith() {
  return (
    <section id="work" className="max-w-[1400px] mx-auto px-16 py-28">
      <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-12">
        Who we work with
      </p>
      <div
        className="grid grid-cols-3 gap-[1px] rounded-xl overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        {CLIENTS.map((client) => (
          <div
            key={client.title}
            className="bg-[#070707] hover:bg-white/[0.025] transition-colors duration-200 p-10 flex flex-col gap-4"
          >
            <div
              className="w-9 h-9 flex items-center justify-center rounded-[8px] text-base"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              aria-hidden="true"
            >
              {client.icon}
            </div>
            <div className="text-[17px] font-normal text-white/85 tracking-tight leading-snug">
              {client.title}
            </div>
            <div className="text-[13px] font-light text-white/30 leading-[1.65]">
              {client.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
