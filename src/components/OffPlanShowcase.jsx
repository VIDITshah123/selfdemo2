import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ArrowUpRight, Bed, Bath, Maximize, Calendar, Compass } from 'lucide-react';
import { OFF_PLAN_PROPERTIES, CURRENCY_RATES } from '../data/mockData';

export default function OffPlanShowcase({ onSelectProperty, onOpenConsultation, activeCurrency = 'AED' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProperty = () => {
    setCurrentIndex((prev) => (prev === 0 ? OFF_PLAN_PROPERTIES.length - 1 : prev - 1));
  };

  const nextProperty = () => {
    setCurrentIndex((prev) => (prev === OFF_PLAN_PROPERTIES.length - 1 ? 0 : prev + 1));
  };

  const current = OFF_PLAN_PROPERTIES[currentIndex];
  const total = OFF_PLAN_PROPERTIES.length;

  const formatPrice = (aedVal) => {
    const rate = CURRENCY_RATES[activeCurrency]?.rate || 1;
    const sym = CURRENCY_RATES[activeCurrency]?.symbol || 'AED';
    const converted = aedVal * rate;
    if (activeCurrency === 'AED') {
      return `AED ${(aedVal / 1000000).toFixed(1)}M`;
    }
    return `${sym}${(converted / 1000000).toFixed(2)}M ${activeCurrency}`;
  };

  return (
    <section id="off-plan-section" className="relative py-14 sm:py-20 bg-[#580b12] text-white overflow-hidden">
      
      {/* Background Watermark (Screenshot 1 Replicated) */}
      <div className="watermark-text top-[8%] left-1/2 -translate-x-1/2 text-[14vw] tracking-[0.2em] text-white/[0.04] pointer-events-none select-none">
        BELLAVIERRE
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Rating Pill Top Center */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3d060a]/70 border border-[#c5a059]/30 mb-3 backdrop-blur-sm shadow-md">
            <span className="text-sm font-semibold text-white">4.6</span>
            <div className="flex text-[#e5a93b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#e5a93b] text-[#e5a93b]" />
              ))}
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
            Off-Plan Opportunities
          </h2>
          <p className="text-sm sm:text-base text-[#e5d2c2] max-w-xl mt-2 font-light">
            Exclusive developer direct allocations with privileged payment plans and guaranteed capital growth in Dubai's premier enclaves.
          </p>
        </div>

        {/* Master Showcase Card (Replicating Screenshot 1) */}
        <div className="bg-[#fbf9f6] text-[#1b1615] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.65)] border border-[#c5a059]/30 grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
          
          {/* Left Column: Visual Rendering with Price Pill & Arrow Controls */}
          <div className="lg:col-span-8 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-hidden group">
            <img 
              src={current.image} 
              alt={current.title} 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Starting Price Pill (Screenshot 1: "STARTING PRICE AED 7.5M") */}
            <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-md rounded-full px-5 py-2.5 shadow-xl border border-[#c5a059]/40 flex items-center gap-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-gray-500">
                Starting Price
              </span>
              <span className="font-serif text-base sm:text-lg font-bold text-[#5c0d13]">
                {formatPrice(current.startingPriceAED)}
              </span>
            </div>

            {/* Left/Right Circular Arrow Controls on Image */}
            <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2.5">
              <button
                onClick={prevProperty}
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer border border-gray-200"
                aria-label="Previous Property Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextProperty}
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer border border-gray-200"
                aria-label="Next Property Slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* 360 Virtual Tour Pill on Image Bottom Right */}
            <button 
              onClick={() => onSelectProperty(current)}
              className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-xs font-medium border border-white/20 transition-all cursor-pointer shadow-lg"
            >
              <Compass className="w-4 h-4 text-[#f0dbaf] animate-spin-slow" />
              <span>Interactive 360° Floorplans</span>
            </button>
          </div>

          {/* Right Column: Clean Cream Editorial Panel */}
          <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-[#fbf9f6]">
            <div className="space-y-5">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8c6b2d] block mb-1">
                  {current.developer} • {current.type}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1210]">
                  {current.title}
                </h3>
              </div>

              <p className="text-sm text-[#4f433d] font-normal leading-relaxed line-clamp-4">
                {current.description}
              </p>

              {/* Key Specs Grid */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-gray-200 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <Bed className="w-4 h-4 text-[#8c6b2d]" />
                  <span>{current.bedrooms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-4 h-4 text-[#8c6b2d]" />
                  <span>{current.bathrooms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="w-4 h-4 text-[#8c6b2d]" />
                  <span>{current.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#8c6b2d]" />
                  <span>Handover: {current.handover}</span>
                </div>
              </div>
            </div>

            {/* CTA Button: View Details ↗ */}
            <div className="pt-6">
              <button
                onClick={() => onSelectProperty(current)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#b38e44] hover:bg-[#9c7832] text-white font-serif text-sm tracking-wide transition-all shadow-md hover:shadow-xl cursor-pointer group"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Slider Navigation Bar (Replicating Screenshot 1) */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#e6d8cb]">
          
          {/* Index Counter, Prev, Progress Bar, Next */}
          <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-start">
            <span className="font-serif font-bold text-white tracking-widest text-base">
              {currentIndex + 1}/{total}
            </span>

            <button
              onClick={prevProperty}
              className="flex items-center gap-1.5 hover:text-[#d6b46f] transition-colors cursor-pointer uppercase text-xs tracking-widest font-semibold"
            >
              <span>←</span>
              <span>PREV</span>
            </button>

            {/* Progress Bar Line */}
            <div className="w-32 sm:w-56 h-[3px] bg-white/20 relative overflow-hidden rounded-full">
              <div 
                className="absolute top-0 left-0 bottom-0 bg-[#d6b46f] transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
              />
            </div>

            <button
              onClick={nextProperty}
              className="flex items-center gap-1.5 hover:text-[#d6b46f] transition-colors cursor-pointer uppercase text-xs tracking-widest font-semibold"
            >
              <span>NEXT</span>
              <span>→</span>
            </button>
          </div>

          {/* Rotating Circular "Discover More" Badge + View More link (Screenshot 1) */}
          <div 
            onClick={onOpenConsultation}
            className="flex items-center gap-4 cursor-pointer group select-none"
          >
            <span className="font-serif text-lg sm:text-xl text-white group-hover:text-[#d6b46f] transition-colors flex items-center gap-1">
              View more <ArrowUpRight className="w-4 h-4 text-[#d6b46f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>

            {/* Circular Stamp */}
            <div className="relative w-16 h-16 rounded-full border border-white/25 flex items-center justify-center p-1 group-hover:border-[#d6b46f] transition-colors">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="none"
                />
                <text className="text-[9.5px] fill-white/80 font-cinzel uppercase tracking-[0.25em]">
                  <textPath href="#circlePath">
                    DISCOVER MORE • DISCOVER MORE •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-[#d6b46f]" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
