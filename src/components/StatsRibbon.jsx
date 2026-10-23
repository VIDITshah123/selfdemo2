import React from 'react';
import { STATS_RIBBON } from '../data/mockData';

export default function StatsRibbon() {
  return (
    <section className="bg-gradient-to-r from-[#3e070c] via-[#5c0d13] to-[#3e070c] border-y border-[#c5a059]/30 py-5 sm:py-6 text-white relative z-20 shadow-xl">
      <div className="container-luxury">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#c5a059]/25">
          {STATS_RIBBON.map((stat, idx) => (
            <div key={idx} className="pt-4 sm:pt-0 sm:px-6 flex flex-col items-center justify-center group">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#f5e4c3] tracking-tight group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-[#e6d8cb] font-light tracking-wide uppercase mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
