import React, { useState } from 'react';
import { MapPin, TrendingUp, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { DUBAI_COMMUNITIES } from '../data/mockData';

export default function FeaturedAreas({ onSelectArea, onOpenConsultation }) {
  const [selectedArea, setSelectedArea] = useState(DUBAI_COMMUNITIES[0]);

  return (
    <section id="areas-section" className="relative py-20 sm:py-28 bg-[#230305] text-white">
      <div className="container-luxury">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-2">
              <MapPin className="w-4 h-4" />
              <span>Prime Geographical Enclaves</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              Explore Dubai’s Iconic Communities
            </h2>
          </div>
          <p className="text-sm text-[#d4c3b5] max-w-md font-light">
            From world-renowned beachfront archipelagos to high-yield golf courses and urban sky-rise districts.
          </p>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DUBAI_COMMUNITIES.map((area) => {
            const isSelected = selectedArea.id === area.id;
            return (
              <div
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 border ${
                  isSelected 
                    ? 'border-[#c5a059] shadow-[0_15px_40px_rgba(197,160,89,0.3)] scale-[1.02]' 
                    : 'border-white/10 hover:border-[#c5a059]/60'
                } bg-[#380509] aspect-[3/4] flex flex-col justify-end p-6`}
              >
                {/* Background Image */}
                <img 
                  src={area.image} 
                  alt={area.name} 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 filter brightness-[0.7] group-hover:brightness-[0.8]"
                />
                
                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e0204] via-[#240306]/60 to-transparent" />

                {/* Top Badge: Avg Yield */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 rounded-full bg-[#5c0d13]/90 border border-[#c5a059]/40 backdrop-blur-md text-[11px] font-semibold text-[#f0dbaf] flex items-center gap-1.5 shadow-md">
                    <TrendingUp className="w-3.5 h-3.5 text-[#e5a93b]" />
                    <span>Avg Yield: {area.avgYield}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c5a059] block">
                    {area.tagline}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#f0dbaf] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-[#cfbea8] font-light">
                    {area.vibe}
                  </p>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                    <span className="text-[#e2d5c8] font-medium">{area.priceRange}</span>
                    <span className="text-[#c5a059] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      Explore <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Community Quick Action Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-[#3d060a]/80 border border-[#c5a059]/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#5c0d13] border border-[#c5a059]/50 flex items-center justify-center flex-shrink-0 text-[#c5a059]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-white">
                Interested in acquiring property in <span className="text-[#c5a059]">{selectedArea.name}</span>?
              </h4>
              <p className="text-xs text-[#d4c3b5] font-light">
                Our private client advisors have exclusive access to off-market fronds, penthouses, and private sales.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="btn-gold text-xs uppercase tracking-wider py-3 px-6 whitespace-nowrap shadow-lg flex-shrink-0"
          >
            <span>Request Area Dossier</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
