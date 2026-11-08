'use client';

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const LocalClock: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (IST, UTC+05:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-surface border border-white/10 font-mono text-xs text-slate-300">
      <Clock className="w-4 h-4 text-cyan-400" />
      <span>MYSURU, KA (IST):</span>
      <span className="text-white font-bold">{time || '--:--:--'}</span>
    </div>
  );
};
