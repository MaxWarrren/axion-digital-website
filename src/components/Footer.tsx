import Link from 'next/link';

// TODO: replace with real social URLs
const LINKEDIN_URL = 'https://www.linkedin.com/company/axion-digital';
const INSTAGRAM_URL = 'https://www.instagram.com/axiondigital';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const LEGAL = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1400px] mx-auto px-16 py-16">
        <div className="flex items-start justify-between gap-10 flex-wrap">

          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-[280px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/axion-text-transparent.png" alt="Axion" className="h-[19px] w-auto self-start" />
            <p className="text-[13px] font-light leading-[1.7]" style={{ color: 'rgba(255,255,255,0.3)' }}>
              The AI growth team for owner-operated businesses — automation, custom software, and intelligence in one platform.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-[8px] flex items-center justify-center hover:bg-white/[0.05] transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.55)" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9V9z" />
                </svg>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-[8px] flex items-center justify-center hover:bg-white/[0.05] transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4.2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" />
                  <circle cx="17.4" cy="6.6" r="1.2" fill="rgba(255,255,255,0.55)" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex gap-20">
            <div className="flex flex-col gap-3">
              <span className="text-[11px] tracking-[0.12em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.22)' }}>
                Navigate
              </span>
              {NAV.map(({ label, href }) => (
                <Link key={label} href={href} className="text-[13px] font-light hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[11px] tracking-[0.12em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.22)' }}>
                Legal
              </span>
              {LEGAL.map(({ label, href }) => (
                <Link key={label} href={href} className="text-[13px] font-light hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex items-center justify-between gap-4 flex-wrap"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-[12px] font-light" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {year} Warren Digital Consulting, LLC. All rights reserved.
          </p>
          <p className="text-[12px] font-light" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Axion Digital is a brand of Warren Digital Consulting, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
