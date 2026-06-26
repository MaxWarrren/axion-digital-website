type Section = { heading: string; body: string[] };

type Props = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
};

export default function LegalLayout({ title, lastUpdated, intro, sections }: Props) {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <section className="max-w-[820px] mx-auto px-16 pt-44 pb-32">
        <p className="text-[11px] font-normal tracking-[0.14em] uppercase text-white/25 mb-4">
          Legal
        </p>
        <h1 className="text-[44px] font-light leading-[1.1] tracking-[-0.025em] text-white">
          {title}
        </h1>
        <p className="mt-4 text-[13px] font-light text-white/30">Last updated: {lastUpdated}</p>

        <p className="mt-10 text-[15px] font-light leading-[1.8] text-white/45">{intro}</p>

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-[18px] font-normal text-white/85 tracking-tight mb-3">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="text-[14px] font-light leading-[1.8] text-white/40 mb-3">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-16 text-[12px] font-light leading-[1.7] text-white/20">
          This document is provided as a general template and does not constitute legal advice. Please have it reviewed by qualified counsel before relying on it.
        </p>
      </section>
    </main>
  );
}
