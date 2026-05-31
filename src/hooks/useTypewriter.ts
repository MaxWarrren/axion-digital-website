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
