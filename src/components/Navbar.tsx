export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-7">
      <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-white">
        AXION
      </span>

      <div className="absolute left-1/2 -translate-x-1/2 flex gap-10">
        {['Services', 'Work', 'About', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[13px] font-normal text-white/50 hover:text-white/80 transition-colors duration-200 tracking-tight"
          >
            {link}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="flex items-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[12px] font-normal text-white/70 hover:text-white hover:border-white/40 transition-colors duration-200 tracking-wide"
        style={{ border: '1px solid rgba(255,255,255,0.22)' }}
      >
        Get in Touch
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
          <path d="M2 9L9 2M9 2H4.5M9 2V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </a>
    </nav>
  );
}
