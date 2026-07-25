import type { Metadata } from 'next';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About — Axion Digital',
  description:
    'The team behind Axion Digital — university-backed AI consultants building custom operating systems for owner-operated businesses.',
};

/* eslint-disable @next/next/no-img-element */

// TODO: replace placeholder social URLs with real profiles
const LEADERSHIP = [
  {
    name: 'Maxwell Warren',
    title: 'CEO // Lead AI Consultant & Engineer',
    photo: '/headshots/max-headshot-blank.png',
    bio: [
      'Max is an honors IT & Data Sci. student at Mizzou, and founded Axion Digital with university grant funding to bring frontier AI into real business operations. He has been directly involved with building & training the next generation of LLMs for companies like Uber AI Solutions, Surge AI, and Scale AI since 2024.',
    ],
    linkedin: 'https://www.linkedin.com/in/maxwell-warren',
  },
  {
    name: 'Ashton Niehaus',
    title: 'COO // Head of Growth & Business Development',
    photo: '/headshots/ashton-headshot.jpg',
    bio: [
      'Ashton is an honors Finance student at the University of Missouri and has experience working sales & consulting at Fortune 500 companies as well as leading multiple student organizations.\nHe is determined to help us grow our presence and works to connect businesses looking to learn more about AI with our expert team of consultants & developers.',
    ],
    linkedin: 'https://www.linkedin.com/in/ashton-niehaus',
  },
];

// TODO: replace placeholder titles with real roles
const TEAM = [
  { name: 'Adam', title: 'Engineering', photo: '/headshots/adam-headshot-blank.png' },
  { name: 'Christian', title: 'Engineering', photo: '/headshots/christian-headshot.jpg' },
  { name: 'Cole', title: 'Growth', photo: '/headshots/cole-headshot.jpg' },
  { name: 'Michael', title: 'Client Success', photo: '/headshots/michael-headshot.jpg' },
];

const Divider = () => (
  <div className="max-w-[1400px] mx-auto px-5 md:px-16">
    <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
  </div>
);

export default function AboutPage() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      {/* Page header */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-16 pt-28 md:pt-44 pb-12 md:pb-16">
        <p className="text-[11px] font-normal tracking-[0.14em] uppercase text-white/25 mb-4">
          About
        </p>
        <h1 className="text-[34px] md:text-[56px] font-light leading-[1.08] tracking-[-0.025em] text-white max-w-[820px]">
          A team turning frontier AI into real operational leverage.
        </h1>
        <p className="mt-5 md:mt-6 text-[15px] md:text-[16px] font-light leading-[1.8] max-w-[640px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          What began as university-funded research into applied AI has grown into a hands-on consulting and development team. We embed with owner-operators, learn how their business actually runs, and build the automation, software, and AI agents that let them scale without piling on overhead.
        </p>
        <p className="mt-5 text-[15px] md:text-[16px] font-light leading-[1.8] max-w-[640px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          We’ve been working with frontier language models since 2024, and we bring that edge to every system we ship — practical tools your team can run their day on, not science projects.
        </p>
      </section>

      <Divider />

      {/* Leadership */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-16 py-16 md:py-24">
        <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-10 md:mb-12">
          Leadership
        </p>
        <div className="flex flex-col gap-14 md:gap-16">
          {LEADERSHIP.map(({ name, title, photo, bio, linkedin }) => (
            <div key={name} className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start">
              {/* Photo */}
              <div
                className="relative rounded-2xl overflow-hidden flex-shrink-0 w-full max-w-[240px] sm:w-[300px] sm:max-w-none"
                style={{ aspectRatio: '3 / 4', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <img src={photo} alt={name} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
              </div>

              {/* Details */}
              <div className="w-full sm:flex-1 pt-2 max-w-[680px]">
                <h3 className="text-[19px] md:text-[20px] font-medium text-white tracking-tight">{name}</h3>
                <p className="text-[14px] font-light text-white/40 mt-1">{title}</p>

                <div className="mt-6 flex flex-col gap-4">
                  {bio.map((para, i) => (
                    <p key={i} className="text-[14px] md:text-[15px] font-light leading-[1.75] text-white/45">{para}</p>
                  ))}
                </div>

                {/* Socials */}
                <div className="mt-7 flex items-center gap-3">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on LinkedIn`}
                    className="w-9 h-9 rounded-[8px] flex items-center justify-center hover:bg-white/[0.05] transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.55)" aria-hidden="true">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9V9z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Team */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-16 py-16 md:py-24">
        <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-10">
          The team
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {TEAM.map(({ name, title, photo }) => (
            <div key={name} className="flex flex-col items-center text-center gap-4">
              <div
                className="relative rounded-full overflow-hidden w-[108px] h-[108px] md:w-[132px] md:h-[132px]"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <img src={photo} alt={name} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-normal text-white/85 tracking-tight">{name}</span>
                <span className="text-[12px] font-light text-white/35">{title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      <WhoWeWorkWith />

      <CTASection
        eyebrow="Work with us"
        heading="Let’s talk about your business."
        sub="Book a free consultation with the team and we’ll map out where AI and automation fit into your operation."
      />
    </main>
  );
}
