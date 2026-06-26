'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-7">
      <Link href="/" className="flex items-center" aria-label="Axion Digital — home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/axion-text-transparent.png" alt="Axion" className="h-[17px] w-auto" />
      </Link>

      <div className="absolute left-1/2 -translate-x-1/2 flex gap-10">
        {LINKS.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className="text-[13px] font-normal transition-colors duration-200 tracking-tight"
              style={{ color: active ? '#fff' : 'rgba(255,255,255,0.5)' }}
            >
              {label}
            </Link>
          );
        })}
      </div>

      <Link
        href="/contact"
        className="flex items-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[12px] font-normal text-white/70 hover:text-white hover:border-white/40 transition-colors duration-200 tracking-wide"
        style={{ border: '1px solid rgba(255,255,255,0.22)' }}
      >
        Get in Touch
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
          <path d="M2 9L9 2M9 2H4.5M9 2V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </Link>
    </nav>
  );
}
