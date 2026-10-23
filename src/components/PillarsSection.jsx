import React from 'react';
import { Compass, Building2, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { VALUE_PILLARS } from '../data/mockData';

export default function PillarsSection({ onOpenConsultation }) {
  const getIcon = (type) => {
    switch (type) {
      case 'compass': return <Compass className="w-5 h-5 text-[#886934]" />;
      case 'building': return <Building2 className="w-5 h-5 text-[#886934]" />;
      case 'award': return <Award className="w-5 h-5 text-[#886934]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#886934]" />;
    }
  };

  return (
    <section className="bg-white text-gray-900 py-14 sm:py-20 relative z-20 border-b border-gray-100">
      <div className="container-luxury">
        
        {/* Top Row: 3 Editorial Value Propositions (Screenshot 2 Replicated) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {VALUE_PILLARS.topEditorial.map((item, idx) => (
            <div key={idx} className="space-y-2 border-l-2 border-[#b89047]/40 pl-5">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1a1210]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row: 3 Bronze-Gold Cards (Screenshot 2 Replicated) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PILLARS.bronzeCards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-gradient-to-br from-[#967848] via-[#8c6f3f] to-[#7d6132] text-white p-6 sm:p-7 shadow-xl overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                boxShadow: '0 20px 40px -15px rgba(136, 105, 52, 0.4)'
              }}
            >
              {/* Subtle Geometric Watermark Background Lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  <circle cx="350" cy="50" r="180" stroke="white" strokeWidth="1.5" />
                  <path d="M-50 450 L450 -50" stroke="white" strokeWidth="1.5" />
                  <circle cx="50" cy="350" r="120" stroke="white" strokeWidth="1" />
                </svg>
              </div>

              {/* Card Header: White Badge with Bronze Icon */}
              <div className="relative z-10 w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                {getIcon(card.icon)}
              </div>

              {/* Title */}
              <div className="relative z-10 space-y-3">
                <h4 className="font-serif text-2xl sm:text-[26px] font-normal leading-snug text-white">
                  {card.title}
                </h4>

                <p className="text-xs sm:text-[13.5px] text-[#fbf6ed]/90 font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/20 flex items-center justify-between text-xs text-[#f5ebd8]">
                <span className="font-medium tracking-wide">Learn Advisory Protocols</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
