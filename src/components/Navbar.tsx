'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Freeze the page behind the drawer, and allow Esc to dismiss it.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 md:px-16 md:py-7 bg-[#070707]/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
        <Link href="/" className="flex items-center py-2 -my-2" aria-label="Axion Digital — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/axion-text-transparent.png" alt="Axion" className="h-[17px] w-auto" />
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10">
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
          className="hidden md:flex items-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[12px] font-normal text-white/70 hover:text-white hover:border-white/40 transition-colors duration-200 tracking-wide"
          style={{ border: '1px solid rgba(255,255,255,0.22)' }}
        >
          Get in Touch
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M2 9L9 2M9 2H4.5M9 2V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </Link>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden -mr-2 p-2 flex items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 13h14" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[#070707] md:hidden transition-opacity duration-200 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-5 pt-24">
          {LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className="py-4 text-[22px] font-light tracking-tight"
                style={{
                  color: active ? '#fff' : 'rgba(255,255,255,0.45)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#070707] rounded-[6px] text-[14px] font-medium tracking-tight"
          >
            Get in Touch
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
