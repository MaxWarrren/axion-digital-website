const NAV_ITEMS = [
  { label: 'Overview', active: true },
  { label: 'Automations' },
  { label: 'AI Agents' },
  { label: 'Analytics' },
  { label: 'Growth' },
  { label: 'CRM' },
  { label: 'Infrastructure' },
];

const STATS = [
  { label: 'Tasks Automated', value: '14,280', delta: '+23%', sub: 'this month' },
  { label: 'Active AI Agents', value: '6', delta: 'live', sub: 'across workflows' },
  { label: 'Hours Saved', value: '312 hrs', delta: '+18%', sub: 'vs last month' },
  { label: 'Pipeline Value', value: '$240k', delta: 'tracked', sub: 'via CRM' },
];

const ACTIVITY = [
  { action: 'Lead qualified via agent', time: '2m ago', color: 'rgba(74,222,128,0.5)' },
  { action: 'Forecast report generated', time: '14m ago', color: 'rgba(96,165,250,0.5)' },
  { action: 'AI agent replied to inquiry', time: '31m ago', color: 'rgba(255,255,255,0.3)' },
  { action: 'CRM record updated', time: '1h ago', color: 'rgba(255,255,255,0.15)' },
  { action: 'Automation triggered', time: '2h ago', color: 'rgba(255,255,255,0.15)' },
];

const BAR_HEIGHTS = [32, 55, 42, 68, 58, 80, 70, 88, 62, 78, 92, 74, 84, 96];

const ACCESS_LAYERS = [
  {
    label: 'Internal Access',
    desc: 'Full platform control for your team — manage workflows, monitor agents, view analytics, and configure every system from one place.',
  },
  {
    label: 'Client Portals',
    desc: 'Branded, permission-scoped views for clients to track deliverables, review reports, and stay in the loop — without seeing your internals.',
  },
  {
    label: 'Public Interfaces',
    desc: 'Customer-facing storefronts, landing pages, and intake flows — all connected to the same backend your team is already running on.',
  },
];

export default function Platform() {
  return (
    <section className="max-w-[1400px] mx-auto px-16 pt-10 pb-28">
      <div className="mb-14">
        <p className="text-[11px] font-normal tracking-[0.1em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>
          The Platform
        </p>
        <h2 className="text-[34px] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[560px]">
          Every system we build, unified in one custom platform.
        </h2>
        <p className="mt-4 text-[15px] font-light leading-[1.75] max-w-[520px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Every deliverable ships inside a single operating system your whole business runs on — accessible by your team, your clients, and the public, each with the right level of access.
        </p>
      </div>

      {/* Browser mockup */}
      <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>

        {/* Chrome bar */}
        <div className="flex items-center gap-3 px-5 py-3.5" style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex gap-1.5">
            {['rgba(255,255,255,0.12)', 'rgba(255,255,255,0.12)', 'rgba(255,255,255,0.12)'].map((bg, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: bg }} />
            ))}
          </div>
          <div className="flex-1 mx-8 px-3 py-1.5 rounded-md flex items-center gap-2" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" style={{ opacity: 0.2, flexShrink: 0 }}>
              <rect x="1.5" y="5" width="7" height="6" rx="1" stroke="white" strokeWidth="1.2" />
              <path d="M3 5V3.5a2 2 0 0 1 4 0V5" stroke="white" strokeWidth="1.2" />
            </svg>
            <span className="text-[11px] font-mono tracking-tight" style={{ color: 'rgba(255,255,255,0.22)' }}>
              app.yourcompany.com
            </span>
          </div>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ opacity: 0.15 }}>
            <path d="M11.5 6.5A5 5 0 1 1 6.5 1.5H9.5M9.5 1.5L7 4M9.5 1.5L12 4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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
              className="px-5 py-2.5 flex items-center gap-2 text-[11px] select-none"
              style={{
                background: active ? '#0a0a0a' : 'transparent',
                borderBottom: active ? '1px solid #0a0a0a' : '1px solid transparent',
                marginBottom: active ? '-1px' : undefined,
                color: active ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.2)',
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: active ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.12)' }}
              />
              {label}
            </div>
          ))}
          <div className="flex-1" />
          <div className="px-4 py-2.5 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.07)' }}>
              <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.35)' }}>U</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex" style={{ height: 440, background: '#0a0a0a' }}>

          {/* Sidebar */}
          <div className="flex flex-col py-4 gap-0.5" style={{ width: 196, borderRight: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
            <div className="px-4 pb-2 mb-1">
              <span className="text-[9px] tracking-[0.12em] uppercase" style={{ color: 'rgba(255,255,255,0.18)' }}>Axion OS</span>
            </div>
            {NAV_ITEMS.map(({ label, active }) => (
              <div
                key={label}
                className="mx-2 px-3 py-2 rounded-[6px] flex items-center gap-2.5"
                style={{ background: active ? 'rgba(255,255,255,0.07)' : 'transparent' }}
              >
                <div
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: active ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.15)' }}
                />
                <span
                  className="text-[12px]"
                  style={{ color: active ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.25)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden">

            {/* Page header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[14px] font-normal" style={{ color: 'rgba(255,255,255,0.75)' }}>Good morning, User</h3>
                <p className="text-[12px] mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>Here&apos;s what&apos;s running across your platform today</p>
              </div>
              <div
                className="px-3 py-1.5 rounded-[6px] text-[11px] flex items-center gap-2"
                style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.35)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(74,222,128,0.6)' }} />
                All systems live
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-3">
              {STATS.map(({ label, value, delta, sub }) => (
                <div
                  key={label}
                  className="rounded-[8px] p-3.5 flex flex-col gap-1"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
                >
                  <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>{label}</span>
                  <div className="flex items-end gap-2 mt-1">
                    <span className="text-[20px] font-light leading-none" style={{ color: 'rgba(255,255,255,0.8)' }}>{value}</span>
                    <span className="text-[10px] pb-0.5" style={{ color: 'rgba(74,222,128,0.65)' }}>{delta}</span>
                  </div>
                  <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.18)' }}>{sub}</span>
                </div>
              ))}
            </div>

            {/* Chart + activity */}
            <div className="flex gap-3 flex-1 min-h-0">

              {/* Bar chart */}
              <div
                className="flex-1 rounded-[8px] p-4 flex flex-col gap-3"
                style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>Automation Activity</span>
                  <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.18)' }}>Last 30 days</span>
                </div>
                <div className="flex-1 flex items-end gap-1.5 pb-1">
                  {BAR_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all"
                      style={{
                        height: `${h}%`,
                        background: i === BAR_HEIGHTS.length - 1
                          ? 'rgba(255,255,255,0.5)'
                          : 'rgba(255,255,255,0.07)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div
                className="rounded-[8px] p-4 flex flex-col gap-3"
                style={{ width: 210, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', flexShrink: 0 }}
              >
                <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>Recent Activity</span>
                <div className="flex flex-col gap-3">
                  {ACTIVITY.map(({ action, time, color }) => (
                    <div key={action} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0" style={{ background: color }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>{action}</p>
                        <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.18)' }}>{time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Access layer labels */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        {ACCESS_LAYERS.map(({ label, desc }) => (
          <div key={label} className="flex flex-col gap-2">
            <p className="text-[13px] font-normal" style={{ color: 'rgba(255,255,255,0.55)' }}>{label}</p>
            <p className="text-[13px] font-light leading-[1.65]" style={{ color: 'rgba(255,255,255,0.25)' }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
