import type { Metadata } from 'next';
import CalEmbed from '@/components/CalEmbed';

export const metadata: Metadata = {
  title: 'Contact — Axion Digital',
  description:
    'Book a free AI consultation with Axion Digital and map out where automation fits in your business.',
};

export default function ContactPage() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <section className="max-w-[1400px] mx-auto px-16 pt-44 pb-12">
        <p className="text-[11px] font-normal tracking-[0.14em] uppercase text-white/25 mb-4">
          Contact
        </p>
        <h1 className="text-[56px] font-light leading-[1.08] tracking-[-0.025em] text-white max-w-[720px]">
          Book your free consultation.
        </h1>
        <p className="mt-6 text-[16px] font-light leading-[1.75] max-w-[520px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Pick a time that works for you. We’ll learn about your business and show you exactly where AI and automation can save your team hours every week.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-16 pb-32">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)', height: 760, background: 'rgba(255,255,255,0.01)' }}
        >
          <CalEmbed />
        </div>
      </section>
    </main>
  );
}
