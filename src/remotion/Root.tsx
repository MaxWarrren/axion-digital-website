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
