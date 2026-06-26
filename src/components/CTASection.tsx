import Link from 'next/link';

type Props = {
  eyebrow?: string;
  heading?: string;
  sub?: string;
};

export default function CTASection({
  eyebrow = 'Get started',
  heading = "Let's build the system your business runs on.",
  sub = 'Book a free consultation and we’ll map out exactly where AI and automation can save your team hours every week.',
}: Props) {
  return (
    <section className="max-w-[1400px] mx-auto px-16 py-32">
      <div
        className="rounded-2xl px-14 py-20 flex flex-col items-center text-center"
        style={{
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04), transparent 70%)',
        }}
      >
        <p className="text-[11px] font-normal tracking-[0.14em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>
          {eyebrow}
        </p>
        <h2 className="text-[44px] font-light leading-[1.1] tracking-[-0.025em] text-white max-w-[640px]">
          {heading}
        </h2>
        <p className="mt-6 text-[15px] font-light leading-[1.75] max-w-[500px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          {sub}
        </p>
        <Link
          href="/contact"
          className="mt-10 flex items-center gap-2 px-[28px] py-[14px] bg-white text-[#070707] rounded-[6px] text-[13px] font-medium tracking-tight hover:opacity-90 transition-opacity"
        >
          Book a Free Consultation
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
