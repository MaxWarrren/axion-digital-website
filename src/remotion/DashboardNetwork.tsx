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

const HUB: [number, number] = [280, 154];

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
        <Node label="CRM">
          <Bar width={68} />
          <MiniBars heights={[35, 60, 45, 80, 55]} frame={frame} phaseOffset={0} />
        </Node>

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

        <Node label="Analytics">
          <MiniBars heights={[50, 75, 90, 60, 80]} frame={frame} phaseOffset={20} />
        </Node>

        <Node label="Scheduler">
          <Bar width={42} />
          <DotRow pattern={[true, true, true, false]} />
        </Node>

        <Node label="Comms">
          <Bar width={85} />
          <DotRow pattern={[true, false, true]} />
        </Node>

        <Node label="Billing">
          <MiniBars heights={[25, 50, 38, 65, 88]} frame={frame} phaseOffset={40} />
        </Node>

        <Node label="Intake">
          <Bar width={58} />
          <Bar width={28} />
          <Bar width={75} />
        </Node>

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
