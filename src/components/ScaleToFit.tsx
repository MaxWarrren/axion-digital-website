'use client';

import { useRef, useEffect, useLayoutEffect } from 'react';

/**
 * Renders children at `minWidth` and scales them down to fit whenever the
 * available width drops below it. Used for the dashboard mockups, which are
 * built from fixed-px sidebars and panels that can't reflow to phone widths.
 *
 * At or above `minWidth` this is a no-op — desktop layout is untouched.
 */
type Props = {
  minWidth: number;
  className?: string;
  children: React.ReactNode;
};

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function ScaleToFit({ minWidth, className, children }: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let lastWidth = -1;

    const fit = () => {
      const width = outer.clientWidth;
      // Guard against re-entry: we write outer.style.height below, which the
      // observer would otherwise pick up as a resize.
      if (width === lastWidth) return;
      lastWidth = width;

      if (width >= minWidth) {
        inner.style.width = '';
        inner.style.transform = '';
        outer.style.height = '';
        return;
      }

      const scale = width / minWidth;
      inner.style.width = `${minWidth}px`;
      inner.style.transform = `scale(${scale})`;
      // A transform doesn't shrink the layout box, so collapse the gap manually.
      outer.style.height = `${inner.offsetHeight * scale}px`;
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(outer);
    return () => observer.disconnect();
  }, [minWidth]);

  return (
    <div ref={outerRef} className={className}>
      <div ref={innerRef} style={{ width: '100%', transformOrigin: 'top left' }}>
        {children}
      </div>
    </div>
  );
}
