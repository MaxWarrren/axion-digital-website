# Axion Digital Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full Axion Digital marketing website in Next.js 14 with Tailwind CSS, Satoshi font, a typewriter hero, and an embedded Remotion dashboard animation panel.

**Architecture:** Single-page Next.js 14 App Router site (`/`). Server components by default; only Hero (needs `useState` for typewriter) and DashboardPlayer (Remotion, browser-only) are client components. Remotion runs entirely client-side via `@remotion/player` — no video export needed.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS v3, remotion ^4.0.0, @remotion/player ^4.0.0

---

### Task 1: Scaffold Next.js project + install deps

**Files:**
- Create: all scaffold files via `create-next-app`
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`
- Modify: `src/app/page.tsx` (placeholder)

- [ ] **Step 1: Scaffold in the project directory**

Run from the website directory (it already has `assets/` and `docs/` — that's fine):

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
```

Expected: `Success! Created next app at ...`

- [ ] **Step 2: Install Remotion**

```bash
npm install remotion@^4.0.0 @remotion/player@^4.0.0
```

Expected: packages added with no peer-dep errors.

- [ ] **Step 3: Replace globals.css**

```css
/* src/app/globals.css */
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
}

html {
  background: #070707;
}
```

- [ ] **Step 4: Replace tailwind.config.ts**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/remotion/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        bg: '#070707',
      },
      maxWidth: {
        site: '1400px',
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 5: Replace page.tsx with placeholder**

```tsx
// src/app/page.tsx
export default function Home() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <p className="p-8 text-white/40">Building...</p>
    </main>
  );
}
```

- [ ] **Step 6: Verify dev server**

```bash
npm run dev
```

Expected: http://localhost:3000 loads a dark page with "Building..." in grey text and Satoshi font.

- [ ] **Step 7: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Next.js 14 with Tailwind and Satoshi font"
```

---

### Task 2: useTypewriter hook

**Files:**
- Create: `src/hooks/useTypewriter.ts`

- [ ] **Step 1: Create the hook**

```typescript
// src/hooks/useTypewriter.ts
'use client';

import { useState, useEffect, useRef } from 'react';

const WORDS = [
  'Insurance Brokerages',
  'Accounting Firms',
  'Real-Estate Brokerages',
  'Property Management Firms',
  'Home Service Companies',
  'Independent Franchises',
];

const TYPE_SPEED = 65;
const DELETE_SPEED = 36;
const PAUSE_MS = 1800;
const START_DELAY = 700;

export function useTypewriter() {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = WORDS[wordIndex.current];

      if (!deleting.current) {
        charIndex.current++;
        setDisplayed(current.slice(0, charIndex.current));
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(tick, PAUSE_MS);
          return;
        }
        timeout = setTimeout(tick, TYPE_SPEED);
      } else {
        charIndex.current--;
        setDisplayed(current.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          deleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % WORDS.length;
          timeout = setTimeout(tick, 320);
          return;
        }
        timeout = setTimeout(tick, DELETE_SPEED);
      }
    };

    timeout = setTimeout(tick, START_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return { displayed, showCursor };
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/useTypewriter.ts
git commit -m "feat: add useTypewriter hook with type/delete cycle"
```

---

### Task 3: Navbar component

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Create Navbar**

```tsx
// src/components/Navbar.tsx
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
```

- [ ] **Step 2: Add to page.tsx and verify**

```tsx
// src/app/page.tsx
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <Navbar />
      <div className="pt-32 px-16">
        <p className="text-white/30">Building...</p>
      </div>
    </main>
  );
}
```

Check: dark page with fixed transparent navbar — AXION wordmark left, centered nav links, outlined CTA button right.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx src/app/page.tsx
git commit -m "feat: add Navbar component"
```

---

### Task 4: DashboardNetwork Remotion composition

**Files:**
- Create: `src/remotion/DashboardNetwork.tsx`
- Create: `src/remotion/Root.tsx`

- [ ] **Step 1: Create DashboardNetwork.tsx**

```tsx
// src/remotion/DashboardNetwork.tsx
import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

const BORDER = 'rgba(255,255,255,0.07)';
const BORDER_MID = 'rgba(255,255,255,0.12)';
const TEXT_FAINT = 'rgba(255,255,255,0.22)';
const TEXT_MUTED = 'rgba(255,255,255,0.35)';
const BG_NODE = 'rgba(255,255,255,0.025)';
const BG_HUB = 'rgba(255,255,255,0.04)';
const DOT_ON = 'rgba(255,255,255,0.38)';
const DOT_OFF = 'rgba(255,255,255,0.1)';
const BAR_FILL = 'rgba(255,255,255,0.2)';
const BAR_BG = 'rgba(255,255,255,0.06)';
const CONN_LINE = 'rgba(255,255,255,0.07)';
const DOT_TRAVEL = 'rgba(255,255,255,0.55)';

// Hub center coordinates within the 560x440 canvas
const HUB: [number, number] = [280, 154];

// Quadratic bezier evaluation
function qBez(
  t: number,
  p0: [number, number],
  p1: [number, number],
  p2: [number, number]
): [number, number] {
  return [
    (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t ** 2 * p2[0],
    (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t ** 2 * p2[1],
  ];
}

// Each connection: from node-center → quadratic control → hub
const CONNECTIONS: {
  id: string;
  from: [number, number];
  ctrl: [number, number];
  offset: number;
}[] = [
  { id: 'crm',       from: [100, 82],  ctrl: [190, 82],  offset: 0   },
  { id: 'analytics', from: [460, 82],  ctrl: [370, 82],  offset: 35  },
  { id: 'scheduler', from: [100, 226], ctrl: [190, 190], offset: 70  },
  { id: 'comms',     from: [460, 226], ctrl: [370, 190], offset: 105 },
  { id: 'billing',   from: [100, 370], ctrl: [180, 260], offset: 140 },
  { id: 'intake',    from: [280, 370], ctrl: [280, 262], offset: 175 },
  { id: 'ai-agent',  from: [460, 370], ctrl: [380, 260], offset: 210 },
];

const TRAVEL_FRAMES = 60;
const CYCLE = 240;

function MiniBars({ heights, frame, phaseOffset }: { heights: number[]; frame: number; phaseOffset: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 20, marginTop: 4 }}>
      {heights.map((h, i) => {
        const pulse = interpolate(
          Math.sin(((frame + phaseOffset + i * 15) / 40) * Math.PI),
          [-1, 1],
          [0.7, 1.15],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );
        return (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${Math.min(h * pulse, 100)}%`,
              borderRadius: '1px 1px 0 0',
              background: BAR_FILL,
            }}
          />
        );
      })}
    </div>
  );
}

function Bar({ width }: { width: number }) {
  return (
    <div style={{ height: 3, borderRadius: 2, background: BAR_BG, overflow: 'hidden', marginTop: 3 }}>
      <div style={{ height: '100%', width: `${width}%`, borderRadius: 2, background: BAR_FILL }} />
    </div>
  );
}

function DotRow({ pattern }: { pattern: boolean[] }) {
  return (
    <div style={{ display: 'flex', gap: 3, marginTop: 5 }}>
      {pattern.map((on, i) => (
        <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: on ? DOT_ON : DOT_OFF }} />
      ))}
    </div>
  );
}

function Node({
  label,
  style,
  children,
  isHub,
}: {
  label: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  isHub?: boolean;
}) {
  return (
    <div
      style={{
        border: `1px solid ${isHub ? BORDER_MID : BORDER}`,
        borderRadius: 8,
        background: isHub ? BG_HUB : BG_NODE,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        padding: '10px 12px',
        ...style,
      }}
    >
      {!isHub && (
        <div
          style={{
            fontSize: 8,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: TEXT_FAINT,
          }}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

export const DashboardNetwork: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width: 560,
        height: 440,
        background: 'rgba(255,255,255,0.01)',
        border: `1px solid ${BORDER}`,
        borderRadius: 14,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#fff',
      }}
    >
      {/* 3×3 node grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr',
          gap: 8,
          padding: 14,
        }}
      >
        {/* Row 0, Col 0 — CRM */}
        <Node label="CRM">
          <Bar width={68} />
          <MiniBars heights={[35, 60, 45, 80, 55]} frame={frame} phaseOffset={0} />
        </Node>

        {/* Hub — Row 0-1, Col 1 */}
        <Node
          label="AI Hub"
          isHub
          style={{ gridRow: '1 / 3', justifyContent: 'center', alignItems: 'center' }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              border: '1.5px solid rgba(255,255,255,0.2)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="2.2" fill="rgba(255,255,255,0.45)" />
              <circle cx="7" cy="7" r="5.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="7" y1="1.5" x2="7" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
              <line x1="7" y1="12.5" x2="7" y2="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
              <line x1="1.5" y1="7" x2="0" y2="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
              <line x1="12.5" y1="7" x2="14" y2="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
            </svg>
          </div>
          <div
            style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: TEXT_MUTED,
              textAlign: 'center',
            }}
          >
            AI Hub
          </div>
          <DotRow pattern={[true, true, false]} />
        </Node>

        {/* Row 0, Col 2 — Analytics */}
        <Node label="Analytics">
          <MiniBars heights={[50, 75, 90, 60, 80]} frame={frame} phaseOffset={20} />
        </Node>

        {/* Row 1, Col 0 — Scheduler */}
        <Node label="Scheduler">
          <Bar width={42} />
          <DotRow pattern={[true, true, true, false]} />
        </Node>

        {/* Row 1, Col 2 — Comms */}
        <Node label="Comms">
          <Bar width={85} />
          <DotRow pattern={[true, false, true]} />
        </Node>

        {/* Row 2, Col 0 — Billing */}
        <Node label="Billing">
          <MiniBars heights={[25, 50, 38, 65, 88]} frame={frame} phaseOffset={40} />
        </Node>

        {/* Row 2, Col 1 — Intake */}
        <Node label="Intake">
          <Bar width={58} />
          <Bar width={28} />
          <Bar width={75} />
        </Node>

        {/* Row 2, Col 2 — AI Agent */}
        <Node label="AI Agent">
          <div
            style={{
              fontSize: 8,
              color: TEXT_FAINT,
              lineHeight: 1.7,
              letterSpacing: '0.04em',
              marginTop: 4,
            }}
          >
            Processing…
            <br />
            3 tasks active
            <br />
            12 completed
          </div>
        </Node>
      </div>

      {/* SVG: connection lines + traveling dots */}
      <svg
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        viewBox="0 0 560 440"
      >
        {CONNECTIONS.map((c) => (
          <path
            key={c.id}
            d={`M ${c.from[0]},${c.from[1]} Q ${c.ctrl[0]},${c.ctrl[1]} ${HUB[0]},${HUB[1]}`}
            stroke={CONN_LINE}
            strokeWidth={1}
            fill="none"
            strokeDasharray="3 5"
          />
        ))}

        {CONNECTIONS.map((c) => {
          const cycleFrame = (frame + c.offset) % CYCLE;
          if (cycleFrame > TRAVEL_FRAMES) return null;
          const t = cycleFrame / TRAVEL_FRAMES;
          const [x, y] = qBez(t, c.from, c.ctrl, HUB);
          const opacity = interpolate(t, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
          return (
            <circle key={c.id} cx={x} cy={y} r={2.5} fill={DOT_TRAVEL} opacity={opacity} />
          );
        })}
      </svg>

      {/* Right-edge fade to page background */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '18%',
          background: 'linear-gradient(to left, #070707, transparent)',
          pointerEvents: 'none',
          borderRadius: '0 14px 14px 0',
        }}
      />
    </div>
  );
};
```

- [ ] **Step 2: Create Remotion Root (for studio/render)**

```tsx
// src/remotion/Root.tsx
import React from 'react';
import { Composition } from 'remotion';
import { DashboardNetwork } from './DashboardNetwork';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="DashboardNetwork"
      component={DashboardNetwork}
      durationInFrames={240}
      fps={30}
      width={560}
      height={440}
    />
  );
};
```

- [ ] **Step 3: Commit**

```bash
git add src/remotion/
git commit -m "feat: add DashboardNetwork Remotion composition with traveling dot animation"
```

---

### Task 5: DashboardPlayer client wrapper

**Files:**
- Create: `src/components/DashboardPlayer.tsx`

- [ ] **Step 1: Create the client wrapper**

The `mounted` guard prevents SSR hydration mismatch — Remotion Player uses `window` during init.

```tsx
// src/components/DashboardPlayer.tsx
'use client';

import { useEffect, useState } from 'react';
import { Player } from '@remotion/player';
import { DashboardNetwork } from '@/remotion/DashboardNetwork';

export default function DashboardPlayer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width: 560,
          height: 440,
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 14,
          background: 'rgba(255,255,255,0.01)',
        }}
      />
    );
  }

  return (
    <Player
      component={DashboardNetwork}
      durationInFrames={240}
      compositionWidth={560}
      compositionHeight={440}
      fps={30}
      loop
      autoPlay
      controls={false}
      style={{
        width: '100%',
        maxWidth: 560,
        borderRadius: 14,
      }}
    />
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/DashboardPlayer.tsx
git commit -m "feat: add DashboardPlayer client wrapper for Remotion Player"
```

---

### Task 6: Hero component

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create Hero**

```tsx
// src/components/Hero.tsx
'use client';

import dynamic from 'next/dynamic';
import { useTypewriter } from '@/hooks/useTypewriter';

const DashboardPlayer = dynamic(() => import('./DashboardPlayer'), { ssr: false });

export default function Hero() {
  const { displayed, showCursor } = useTypewriter();

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="w-full max-w-[1400px] mx-auto px-16 flex items-center gap-14">

        {/* Left — text */}
        <div className="flex-[0_0_58%] flex flex-col gap-7">
          <div
            className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[11px] font-normal text-white/35 tracking-[0.06em] uppercase w-fit"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Development · Consulting · Education
          </div>

          <h1 className="text-[62px] font-light leading-[1.08] tracking-[-0.025em] text-white whitespace-nowrap">
            Fractional AI leadership
            <br />
            for owner-operated
            <br />
            <span style={{ color: 'rgba(255,255,255,0.32)' }}>
              {displayed}
              <span
                className="inline-block w-[2px] h-[0.82em] ml-[2px] align-middle"
                style={{
                  background: 'rgba(255,255,255,0.45)',
                  opacity: showCursor ? 1 : 0,
                }}
              />
            </span>
          </h1>

          <p className="text-[15px] font-light leading-[1.75] max-w-[480px]"
            style={{ color: 'rgba(255,255,255,0.35)' }}>
            We build secure AI platforms and custom software that connect your entire operation — from intake to billing — so your business runs smarter without adding headcount.
          </p>

          <div className="flex items-center gap-6 pt-2">
            <a
              href="#contact"
              className="flex items-center gap-2 px-[26px] py-[13px] bg-white text-[#070707] rounded-[6px] text-[13px] font-medium tracking-tight"
            >
              Book a Free Consultation
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="#work"
              className="text-[13px] font-light flex items-center gap-1.5"
              style={{ color: 'rgba(255,255,255,0.32)' }}
            >
              See our work →
            </a>
          </div>
        </div>

        {/* Right — Remotion panel */}
        <div className="flex-1 flex items-center justify-center relative">
          <div
            className="absolute right-0 top-0 bottom-0 w-[18%] z-10 pointer-events-none rounded-r-[14px]"
            style={{ background: 'linear-gradient(to left, #070707, transparent)' }}
          />
          <DashboardPlayer />
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update page.tsx**

```tsx
// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
    </main>
  );
}
```

Check: full-viewport hero, typewriter cycling through all 6 business types without wrapping, Remotion animation looping in the right panel.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx src/app/page.tsx
git commit -m "feat: add Hero with typewriter and Remotion animation panel"
```

---

### Task 7: WhoWeWorkWith section

**Files:**
- Create: `src/components/WhoWeWorkWith.tsx`

- [ ] **Step 1: Create component**

```tsx
// src/components/WhoWeWorkWith.tsx
const CLIENTS = [
  {
    icon: '🏢',
    title: 'Insurance Brokerages',
    description:
      'Automate client intake, policy renewals, and compliance workflows so your brokers focus on selling, not admin.',
  },
  {
    icon: '📊',
    title: 'Accounting Firms',
    description:
      'AI-assisted bookkeeping, document processing, and client communication that scales without hiring more staff.',
  },
  {
    icon: '🏡',
    title: 'Real-Estate Brokerages',
    description:
      'Connected platforms for listings, lead nurturing, transaction management, and agent performance — all in one OS.',
  },
  {
    icon: '🏗️',
    title: 'Property Management Firms',
    description:
      'Automate tenant communications, maintenance dispatch, lease renewals, and financial reporting end-to-end.',
  },
  {
    icon: '🔧',
    title: 'Home Service Companies',
    description:
      'Scheduling, dispatch, quoting, invoicing, and customer follow-up — running autonomously in the background.',
  },
  {
    icon: '🔗',
    title: 'Independent Franchises',
    description:
      'Standardized AI systems that give every location the tools of an enterprise operation without enterprise overhead.',
  },
];

export default function WhoWeWorkWith() {
  return (
    <section id="work" className="max-w-[1400px] mx-auto px-16 py-28">
      <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-12">
        Who we work with
      </p>
      <div
        className="grid grid-cols-3 gap-[1px] rounded-xl overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        {CLIENTS.map((client) => (
          <div
            key={client.title}
            className="bg-[#070707] hover:bg-white/[0.025] transition-colors duration-200 p-10 flex flex-col gap-4"
          >
            <div
              className="w-9 h-9 flex items-center justify-center rounded-[8px] text-base"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {client.icon}
            </div>
            <div className="text-[17px] font-normal text-white/85 tracking-tight leading-snug">
              {client.title}
            </div>
            <div className="text-[13px] font-light text-white/32 leading-[1.65]">
              {client.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update page.tsx**

```tsx
// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';

const Divider = () => (
  <div className="max-w-[1400px] mx-auto px-16">
    <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
  </div>
);

export default function Home() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <Divider />
      <WhoWeWorkWith />
    </main>
  );
}
```

Check: 3×2 grid below hero, cards separated by 1px borders, hover brightens.

- [ ] **Step 3: Commit**

```bash
git add src/components/WhoWeWorkWith.tsx src/app/page.tsx
git commit -m "feat: add WhoWeWorkWith section"
```

---

### Task 8: Requirements section

**Files:**
- Create: `src/components/Requirements.tsx`

- [ ] **Step 1: Create component**

```tsx
// src/components/Requirements.tsx
const REQUIREMENTS = [
  {
    num: '01',
    title: 'Established operations',
    detail:
      'You have at least one full-time operator running the business day-to-day. We build systems for running operations, not for finding product-market fit.',
  },
  {
    num: '02',
    title: 'Real data to work with',
    detail:
      "Your business generates data — even if it's messy. CRMs, spreadsheets, email threads, invoices. We build the connective tissue that makes it useful.",
  },
  {
    num: '03',
    title: 'A budget for infrastructure',
    detail:
      'Our engagements start at $3,000/mo. Clients who get the most out of Axion treat technology as a capital investment, not an expense.',
  },
  {
    num: '04',
    title: 'Willingness to move fast',
    detail:
      "We run in 2-week sprints. You'll have working software in your hands quickly. We need a point of contact who can give us 2–3 hours per week.",
  },
];

export default function Requirements() {
  return (
    <section className="max-w-[1400px] mx-auto px-16 py-28">
      <div className="flex gap-[120px] items-start">
        {/* Left */}
        <div className="flex-[0_0_340px]">
          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-6">
            Requirements
          </p>
          <h2 className="text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-white mb-5">
            Built for businesses
            <br />
            ready to scale.
          </h2>
          <p className="text-[14px] font-light leading-[1.7]" style={{ color: 'rgba(255,255,255,0.32)' }}>
            We work best with owner-operators who are serious about building long-term infrastructure — not chasing one-off automations.
          </p>
        </div>

        {/* Right — numbered list */}
        <div className="flex-1 flex flex-col">
          {REQUIREMENTS.map((req, i) => (
            <div
              key={req.num}
              className="flex gap-7 items-start py-8"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                ...(i === REQUIREMENTS.length - 1
                  ? { borderBottom: '1px solid rgba(255,255,255,0.06)' }
                  : {}),
              }}
            >
              <span
                className="text-[11px] font-normal tracking-[0.05em] pt-0.5 w-6 shrink-0"
                style={{ color: 'rgba(255,255,255,0.2)' }}
              >
                {req.num}
              </span>
              <div>
                <div className="text-[16px] font-normal mb-2 tracking-tight" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {req.title}
                </div>
                <div className="text-[13px] font-light leading-[1.65]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {req.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update page.tsx**

```tsx
// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';
import Requirements from '@/components/Requirements';

const Divider = () => (
  <div className="max-w-[1400px] mx-auto px-16">
    <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
  </div>
);

export default function Home() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <Divider />
      <WhoWeWorkWith />
      <Divider />
      <Requirements />
    </main>
  );
}
```

Check: two-column layout with numbered items separated by 1px border lines.

- [ ] **Step 3: Commit**

```bash
git add src/components/Requirements.tsx src/app/page.tsx
git commit -m "feat: add Requirements section"
```

---

### Task 9: Stats section + final page assembly

**Files:**
- Create: `src/components/Stats.tsx`
- Modify: `src/app/page.tsx` (final assembly)
- Modify: `src/app/layout.tsx`
- Modify: `next.config.ts`

- [ ] **Step 1: Create Stats component**

```tsx
// src/components/Stats.tsx
const STATS = [
  { number: '200+',  label: 'Hours of manual work automated per client per year' },
  { number: '30+',   label: 'AI agents deployed across client operations' },
  { number: '2000+', label: 'Supported app integrations across our platform stack' },
  { number: '24/7',  label: 'Hosting & uptime on all deployed systems' },
];

export default function Stats() {
  return (
    <section className="max-w-[1400px] mx-auto px-16 py-28">
      <div className="flex gap-20 items-start">
        {/* Left */}
        <div className="flex-[0_0_360px]">
          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/25 mb-6">
            Stats
          </p>
          <h2 className="text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-white mb-5">
            Systems that drive real
            <br />
            results{' '}
            <span style={{ color: 'rgba(255,255,255,0.28)' }}>without the fluff.</span>
          </h2>
          <p className="text-[14px] font-light leading-[1.7] mb-6" style={{ color: 'rgba(255,255,255,0.30)' }}>
            We've partnered with owner-operated businesses across insurance, real estate, home services, and more.
          </p>
          <p className="text-[13px] font-light leading-[1.7]" style={{ color: 'rgba(255,255,255,0.25)' }}>
            When you work with us, you get direct access to the experts — 24/7 — without the bloated hierarchy of a big consulting firm.
          </p>
        </div>

        {/* Right — 2×2 stat cards */}
        <div className="flex-1 grid grid-cols-2 gap-3">
          {STATS.map((stat) => (
            <div
              key={stat.number}
              className="rounded-xl p-9 flex flex-col gap-3"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.015)',
              }}
            >
              <div
                className="text-[52px] font-light leading-none"
                style={{ letterSpacing: '-0.04em' }}
              >
                {stat.number}
              </div>
              <div className="text-[13px] font-light leading-[1.5]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Finalize page.tsx**

```tsx
// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';
import Requirements from '@/components/Requirements';
import Stats from '@/components/Stats';

const Divider = () => (
  <div className="max-w-[1400px] mx-auto px-16">
    <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
  </div>
);

export default function Home() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <Divider />
      <WhoWeWorkWith />
      <Divider />
      <Requirements />
      <Divider />
      <Stats />
    </main>
  );
}
```

- [ ] **Step 3: Update layout.tsx with metadata**

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Axion Digital — AI Operating Systems for Owner-Operated Businesses',
  description:
    'We build secure AI platforms and custom software for owner-operated practices, service businesses, and franchises.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#070707] font-sans antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 4: Update next.config.ts to transpile Remotion**

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['remotion', '@remotion/player'],
};

export default nextConfig;
```

- [ ] **Step 5: Run build to catch any type errors**

```bash
npm run build
```

If build fails with a Remotion type error, add `import React from 'react';` to the top of any remotion file that's missing it.

If build fails with a Tailwind arbitrary value error (e.g. `text-white/32`), replace those values in the relevant component with inline `style={{ color: 'rgba(255,255,255,0.32)' }}` — some Tailwind versions don't accept non-standard opacity fractions as arbitrary values.

Expected: build completes with `Route (app) / ... First Load JS` output.

- [ ] **Step 6: Full visual QA on dev server**

```bash
npm run dev
```

Open http://localhost:3000 and verify:
- Navbar: fixed, transparent, AXION left, centered links, outlined "Get in Touch ↗" right
- Hero: typewriter cycles through all 6 types without line-breaking, Remotion animation looping
- Dividers between every section (1px, very subtle)
- Who We Work With: 3×2 grid, hover brightens cards
- Requirements: two-column, 4 numbered items with border separators
- Stats: two-column, 2×2 large-number cards matching reference screenshot

- [ ] **Step 7: Final commit**

```bash
git add .
git commit -m "feat: complete Axion Digital website with all 5 sections"
```
