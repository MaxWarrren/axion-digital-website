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
