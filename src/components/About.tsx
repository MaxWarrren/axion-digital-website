export default function About() {
  return (
    <section id="about" className="max-w-[1400px] mx-auto px-16 py-24">
      <div className="flex items-center gap-20">

        <div className="flex-1 flex flex-col gap-5">
          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25">
            About
          </p>
          <h2 className="text-[34px] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[500px]">
            University-backed AI consulting, built from the frontier.
          </h2>
          <p className="text-[15px] font-light leading-[1.75] max-w-[480px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Max & his team founded Axion Digital with university grant funding to explore how frontier AI can be applied to real business operations. Since 2024, we've been working directly with the most advanced language models available — building systems that go far beyond basic automation to create genuine operational leverage for the businesses we partner with.
          </p>
        </div>

        <div className="flex-[0_0_42%]">
          <img
            src="/max-speaking.png"
            alt="Maxwell presenting at a speaking event"
            className="w-full h-auto rounded-xl object-cover"
            style={{ filter: 'brightness(0.88) contrast(1.05)' }}
          />
        </div>

      </div>
    </section>
  );
}
