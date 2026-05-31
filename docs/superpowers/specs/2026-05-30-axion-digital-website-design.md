# Axion Digital Website — Design Spec
Date: 2026-05-30

## Overview

A Next.js marketing website for Axion Digital — a company that builds AI operating systems and custom software for owner-operated practices, service businesses, and franchises.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Font**: Satoshi via Fontshare CDN (`@import` in globals.css)
- **Animation (hero)**: Remotion Player (`@remotion/player`) embedded as a React component
- **Typewriter effect**: Custom React hook (no library)

## Visual Design System

| Token | Value |
|---|---|
| Background | `#070707` |
| Text primary | `#ffffff` |
| Text secondary | `rgba(255,255,255,0.55)` |
| Text muted | `rgba(255,255,255,0.32)` |
| Text faint | `rgba(255,255,255,0.22)` |
| Border subtle | `rgba(255,255,255,0.07)` |
| Border mid | `rgba(255,255,255,0.12)` |
| Font weight thin | 300 |
| Font weight regular | 400 |
| Font weight medium | 500 |
| Font weight bold | 700 |

Typography uses negative letter-spacing on headings (`-0.025em`) for a modern, tight look.

## Pages

Single page (`/`) with the following sections in order.

---

## Section 1: Navbar

**Layout**: `position: fixed`, full-width, transparent background.
- Left: `AXION` wordmark (uppercase, 700 weight, wide letter-spacing)
- Center: Nav links — Services, Work, About, Contact (400 weight, muted color)
- Right: "Get in Touch ↗" — outlined button with `border: 1px solid rgba(255,255,255,0.22)`, no fill, arrow icon

---

## Section 2: Hero

**Layout**: Full viewport height (`min-h-screen`), flex row, items centered, equal horizontal padding.

### Left (58% width)
- **Eyebrow badge**: pill with text "Development · Consulting · Education" — thin border, uppercase, small caps
- **Headline** (font-size ~62px, weight 300, `white-space: nowrap`):
  ```
  Fractional AI leadership
  for owner-operated
  [rotating typed text]
  ```
- **Rotating text** — custom `useTypewriter` hook cycles through 6 options at ~65ms/char type speed, 1800ms pause, 36ms/char delete speed:
  - Insurance Brokerages
  - Accounting Firms
  - Real-Estate Brokerages
  - Property Management Firms
  - Home Service Companies
  - Independent Franchises
  - Rotating text color: `rgba(255,255,255,0.32)`, blinking cursor `|`
- **Subtext**: 15px, weight 300, muted — describing what Axion builds
- **CTAs**: Primary white button "Book a Free Consultation ↗" + ghost "See our work →"

### Right (flex: 1)
- **Remotion Player** embedded via `@remotion/player`
- Composition: `DashboardNetwork` — a lo-fi grid of 8 labeled tool nodes (CRM, Analytics, Scheduler, Comms, Billing, Intake, AI Agent) connected to a central AI Hub node via animated dashed lines with traveling data-dot particles
- Animation loops seamlessly (~8 seconds)
- Canvas: ~560×440px, dark glass card, subtle border
- Right edge fades to `#070707` via gradient overlay

---

## Section 3: Who We Work With

**Layout**: Section label above a 3×2 CSS grid of cards unified by 1px borders (gap: 1px, background matches gap color).

6 cards, one per business type:
1. Insurance Brokerages
2. Accounting Firms
3. Real-Estate Brokerages
4. Property Management Firms
5. Home Service Companies
6. Independent Franchises

Each card: emoji icon, title (17px, 400), short description (13px, 300, muted).
Hover: slight background brightening.

---

## Section 4: Requirements

**Layout**: Two-column, left heading + right numbered list.

- **Left**: Section label, 42px/300 headline "Built for businesses ready to scale.", subtext
- **Right**: 4 numbered items separated by 1px borders
  1. Established operations
  2. Real data to work with
  3. A budget for infrastructure
  4. Willingness to move fast

Each item: number (muted, small), title (400), description (300, muted).

---

## Section 5: Stats

**Layout**: Two-column, left text + right 2×2 stat card grid.

- **Left**: Section label, 42px/300 headline with one muted phrase ("without the fluff"), two paragraphs of body copy
- **Right**: 4 stat cards (border, rounded-xl, dark bg)
  - 200+ — Hours of manual work automated
  - 30+ — AI agents deployed
  - 2000+ — Supported app integrations
  - 24/7 — Hosting & uptime on all systems

Stat numbers: 52px, weight 300, tight letter-spacing.

---

## Remotion Composition: `DashboardNetwork`

**File**: `src/remotion/DashboardNetwork.tsx`

Nodes arranged in a 3×3 grid. Hub node occupies rows 1–2, col 2 (center). All other nodes animate dashed lines toward the hub. A small filled circle travels along each path (offset staggered per node). The bars and dots within each node subtly pulse. Overall duration: ~240 frames at 30fps = 8s loop.

**Node list**: CRM, Analytics, Scheduler, Comms, Billing, Intake, AI Agent (+ Hub)

**Color palette**: strictly uses the design token set above — no pure white fills, everything through opacity.

---

## File Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Satoshi font, metadata, globals
│   │   ├── page.tsx           # Composes all sections
│   │   └── globals.css        # Tailwind directives + Satoshi @import
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── WhoWeWorkWith.tsx
│   │   ├── Requirements.tsx
│   │   ├── Stats.tsx
│   │   └── DashboardPlayer.tsx  # Wraps @remotion/player (client component)
│   ├── remotion/
│   │   ├── DashboardNetwork.tsx # Remotion composition
│   │   └── Root.tsx             # Remotion root (for studio/render)
│   └── hooks/
│       └── useTypewriter.ts
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Dependencies

```
next, react, react-dom
tailwindcss, @tailwindcss/typography (optional)
@remotion/player, remotion
```

## Constraints

- No scroll animations (for now) — static sections, clean load
- All sections use `max-width: 1400px` centered
- Horizontal padding: `px-16` (64px)
- Dividers between sections: `1px solid rgba(255,255,255,0.06)`
