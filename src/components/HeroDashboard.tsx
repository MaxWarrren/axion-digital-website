'use client';

import { useRef, useCallback, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Overview', active: true },
  { label: 'Automations' },
  { label: 'AI Agents' },
  { label: 'Analytics' },
  { label: 'Growth' },
  { label: 'CRM' },
];

const STATS = [
  { label: 'Tasks Automated', value: '14,280', delta: '+23%' },
  { label: 'Active AI Agents', value: '6', delta: 'live' },
  { label: 'Hours Saved', value: '312 hrs', delta: '+18%' },
  { label: 'Pipeline Value', value: '$240k', delta: 'tracked' },
];

const ACTIVITY = [
  { action: 'Lead qualified via agent', time: '2m ago', color: 'rgba(74,222,128,0.55)' },
  { action: 'Forecast report generated', time: '14m ago', color: 'rgba(96,165,250,0.55)' },
  { action: 'Agent replied to inquiry', time: '31m ago', color: 'rgba(255,255,255,0.28)' },
  { action: 'CRM record updated', time: '1h ago', color: 'rgba(255,255,255,0.14)' },
];

const BARS = [32, 55, 42, 68, 58, 80, 70, 88, 62, 78, 92, 74, 84, 96];

const REST = { rx: 10, ry: -16 };

export default function HeroDashboard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    const shine = shineRef.current;
    if (!wrap || !card) return;
    const r = wrap.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rx = REST.rx + (0.5 - ny) * 10;
      const ry = REST.ry + (nx - 0.5) * 14;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      if (shine) {
        shine.style.background = `radial-gradient(ellipse at ${nx * 100}% ${ny * 100}%, rgba(255,255,255,0.055) 0%, transparent 65%)`;
        shine.style.opacity = '1';
      }
    });
  }, []);

  const onLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const card = cardRef.current;
    const shine = shineRef.current;
    if (card) {
      card.style.transition = 'transform 0.75s cubic-bezier(0.23, 1, 0.32, 1)';
      card.style.transform = `perspective(900px) rotateX(${REST.rx}deg) rotateY(${REST.ry}deg)`;
      setTimeout(() => { if (card) card.style.transition = ''; }, 750);
    }
    if (shine) {
      shine.style.transition = 'opacity 0.4s';
      shine.style.opacity = '0';
      setTimeout(() => { if (shine) shine.style.transition = ''; }, 400);
    }
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <div ref={wrapRef} className="relative w-full" onMouseMove={onMove} onMouseLeave={onLeave}>

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: '12% 8%',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.07) 0%, transparent 70%)',
          filter: 'blur(32px)',
        }}
      />

      {/* Card */}
      <div
        ref={cardRef}
        className="relative rounded-2xl overflow-hidden"
        style={{
          transform: `perspective(900px) rotateX(${REST.rx}deg) rotateY(${REST.ry}deg)`,
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 36px 90px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07)',
          willChange: 'transform',
        }}
      >

        {/* Chrome bar */}
        <div className="flex items-center gap-3 px-4 py-3" style={{ background: '#111', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex gap-1.5">
            {[0, 1, 2].map(i => (
              <div key={i} className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.13)' }} />
            ))}
          </div>
          <div className="flex-1 mx-4 px-3 py-1 rounded flex items-center gap-2" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <svg width="9" height="11" viewBox="0 0 9 11" fill="none" style={{ opacity: 0.2, flexShrink: 0 }}>
              <rect x="1" y="4.5" width="7" height="5.5" rx="1" stroke="white" strokeWidth="1.2" />
              <path d="M2.5 4.5V3A2 2 0 0 1 6.5 3v1.5" stroke="white" strokeWidth="1.2" />
            </svg>
            <span className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>
              app.yourcompany.com
            </span>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex items-end" style={{ background: '#0e0e0e', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {[
            { label: 'Team Dashboard', active: true },
            { label: 'Client Portal', active: false },
            { label: 'Public Interface', active: false },
          ].map(({ label, active }) => (
            <div
              key={label}
              className="px-4 py-2 flex items-center gap-1.5 select-none"
              style={{
                fontSize: 10,
                background: active ? '#0a0a0a' : 'transparent',
                borderBottom: active ? '1px solid #0a0a0a' : '1px solid transparent',
                marginBottom: active ? -1 : undefined,
                color: active ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.18)',
              }}
            >
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: active ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.1)' }} />
              {label}
            </div>
          ))}
          <div className="flex-1" />
          <div className="px-3 py-2 flex items-center">
            <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.07)' }}>
              <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.35)' }}>U</span>
            </div>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="flex" style={{ height: 400, background: '#0a0a0a' }}>

          {/* Sidebar */}
          <div className="flex flex-col py-3 gap-0.5" style={{ width: 148, borderRight: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
            <div className="px-3 pb-2 mb-1">
              <span style={{ fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.17)' }}>
                Axion OS
              </span>
            </div>
            {NAV_ITEMS.map(({ label, active }) => (
              <div
                key={label}
                className="mx-1.5 px-2.5 py-1.5 rounded-[5px] flex items-center gap-2"
                style={{ background: active ? 'rgba(255,255,255,0.07)' : 'transparent' }}
              >
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: active ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.14)' }} />
                <span style={{ fontSize: 11, color: active ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.22)' }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">

            {/* Header row */}
            <div className="flex items-center justify-between">
              <div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', fontWeight: 400 }}>Good morning, User</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', marginTop: 2 }}>Here&apos;s what&apos;s running today</p>
              </div>
              <div
                className="px-2.5 py-1 rounded-[5px] flex items-center gap-1.5"
                style={{ border: '1px solid rgba(255,255,255,0.08)', fontSize: 10, color: 'rgba(255,255,255,0.3)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(74,222,128,0.65)' }} />
                All systems live
              </div>
            </div>

            {/* Stat cards — 2×2 */}
            <div className="grid grid-cols-2 gap-2">
              {STATS.map(({ label, value, delta }) => (
                <div
                  key={label}
                  className="rounded-[7px] p-3 flex flex-col gap-0.5"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
                >
                  <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)' }}>{label}</span>
                  <div className="flex items-end gap-1.5 mt-1">
                    <span style={{ fontSize: 18, fontWeight: 300, lineHeight: 1, color: 'rgba(255,255,255,0.8)' }}>{value}</span>
                    <span style={{ fontSize: 9, color: 'rgba(74,222,128,0.7)', paddingBottom: 1 }}>{delta}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart + activity */}
            <div className="flex gap-2 flex-1 min-h-0">

              {/* Bar chart */}
              <div
                className="flex-1 rounded-[7px] p-3 flex flex-col gap-2"
                style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Automation Activity</span>
                  <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.15)' }}>30 days</span>
                </div>
                <div className="flex-1 flex items-end gap-1 pb-0.5">
                  {BARS.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-[2px]"
                      style={{
                        height: `${h}%`,
                        background: i === BARS.length - 1 ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.07)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div
                className="rounded-[7px] p-3 flex flex-col gap-2"
                style={{ width: 142, flexShrink: 0, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
              >
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Recent Activity</span>
                <div className="flex flex-col gap-2.5">
                  {ACTIVITY.map(({ action, time, color }) => (
                    <div key={action} className="flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full mt-1 flex-shrink-0" style={{ background: color }} />
                      <div>
                        <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{action}</p>
                        <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.17)', marginTop: 1 }}>{time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: 72, background: 'linear-gradient(to bottom, transparent, rgba(7,7,7,0.55))' }}
        />

        {/* Specular shine — follows mouse */}
        <div ref={shineRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0 }} />

      </div>
    </div>
  );
}
