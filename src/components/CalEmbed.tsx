'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'ai-consultation' });
      cal('ui', { theme: 'dark', hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <Cal
      namespace="ai-consultation"
      calLink="maxwellwarren/ai-consultation"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'dark' }}
    />
  );
}
