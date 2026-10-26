import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Compass, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  MessageSquare, 
  Building2, 
  Check, 
  Eye, 
  Award 
} from 'lucide-react';
import { DUBAI_AREAS_DATA, BRAND_INFO } from '../data/mockData';

export default function ExploreAreasSection({ onOpenConsultation }) {
  const [activeAreaKey, setActiveAreaKey] = useState('Palm Jumeirah');
  const [filterCategory, setFilterCategory] = useState('All');
  const [showHotspots, setShowHotspots] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const filmstripRef = useRef(null);

  // Categories
  const categories = ['All', 'Waterfront & Beach', 'Golf & Lagoons', 'Urban Downtown'];

  // All enclaves as an array
  const allEnclaveKeys = Object.keys(DUBAI_AREAS_DATA.allAreas);
  
  // Filtered list
  const filteredKeys = allEnclaveKeys.filter((key) => {
    if (filterCategory === 'All') return true;
    return DUBAI_AREAS_DATA.allAreas[key]?.category === filterCategory;
  });

  // Ensure active key is valid
  useEffect(() => {
    if (!filteredKeys.includes(activeAreaKey) && filteredKeys.length > 0) {
      setActiveAreaKey(filteredKeys[0]);
    }
  }, [filterCategory]);

  const activeIndex = filteredKeys.indexOf(activeAreaKey);
  const activeData = DUBAI_AREAS_DATA.allAreas[activeAreaKey] || DUBAI_AREAS_DATA.allAreas['Palm Jumeirah'];

  const handlePrev = () => {
    if (filteredKeys.length === 0) return;
    const prevIdx = activeIndex <= 0 ? filteredKeys.length - 1 : activeIndex - 1;
    setActiveAreaKey(filteredKeys[prevIdx]);
    scrollToThumb(prevIdx);
  };

  const handleNext = () => {
    if (filteredKeys.length === 0) return;
    const nextIdx = activeIndex >= filteredKeys.length - 1 ? 0 : activeIndex + 1;
    setActiveAreaKey(filteredKeys[nextIdx]);
    scrollToThumb(nextIdx);
  };

  const scrollToThumb = (idx) => {
    if (!filmstripRef.current) return;
    const child = filmstripRef.current.children[idx];
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section 
      id="areas-section" 
      className="bg-[#fbfaf7] text-gray-900 py-16 sm:py-20 relative z-20 border-b border-gray-200/80 overflow-hidden"
    >
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05915_1px,transparent_1px),linear-gradient(to_bottom,#c5a05915_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container-luxury relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-5 border-b border-gray-200/80 pb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5c0d13]/10 text-[#5c0d13] text-xs font-semibold mb-2.5">
              <Compass className="w-3.5 h-3.5 text-[#886934]" />
              <span className="uppercase tracking-widest text-[11px] font-bold">Dubai Prime Enclave Atlas</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1110] tracking-tight leading-tight">
              The Dubai Enclave Collection
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-light leading-relaxed">
              Curated master districts engineered for long-term capital preservation, high rental yields, and renewable 10-year residency privileges.
            </p>
          </div>

          {/* Category Filter Pills (Scrollable on small mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all whitespace-nowrap cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-[#5c0d13] text-white font-medium shadow-md'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Master Showcase: Responsive Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8">
          
          {/* Left Column (7 Cols on Desktop): The Pure Cinematic Visual Stage */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200/90 aspect-[16/10] sm:aspect-[16/10] bg-gray-900 group">
              
              {/* Main Enclave Image */}
              <img 
                src={activeData.image} 
                alt={activeData.name} 
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gentle Vignette Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

              {/* Top-Left: Geodetic Tag */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] sm:text-xs tracking-wider flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse" />
                  <span>{activeData.coordinates}</span>
                </span>
              </div>

              {/* Top-Right: Yield & Golden Visa Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#5c0d13]/85 backdrop-blur-md border border-[#c5a059]/40 text-[#f0dbaf] text-[11px] font-bold shadow-md flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#e5a93b]" />
                  <span>{activeData.yield} Yield</span>
                </span>
              </div>

              {/* Interactive Landmark Pins (Toggleable for clean view) */}
              {showHotspots && activeData.hotspots && activeData.hotspots.map((spot, idx) => (
                <div 
                  key={idx}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin"
                  onMouseEnter={() => setActiveHotspot(spot)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  <span className="absolute -inset-2.5 rounded-full bg-[#c5a059]/40 animate-ping pointer-events-none" />
                  <div className="relative w-7 h-7 rounded-full bg-[#5c0d13] border-2 border-[#f0dbaf] text-white flex items-center justify-center shadow-lg">
                    <MapPin className="w-3.5 h-3.5 text-[#f0dbaf]" />
                  </div>

                  <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-48 p-2.5 rounded-xl bg-black/95 backdrop-blur-md border border-[#c5a059]/50 text-white text-xs opacity-0 group-hover/pin:opacity-100 transition-all pointer-events-none z-40 shadow-xl">
                    <span className="font-semibold text-[#f0dbaf] block leading-tight">{spot.label}</span>
                    <p className="text-[10px] text-gray-300 font-light mt-0.5 leading-snug">{spot.desc}</p>
                  </div>
                </div>
              ))}

              {/* Bottom Floating Controls on Image */}
              <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between pointer-events-none">
                
                {/* Landmark Toggle Pill */}
                <button
                  type="button"
                  onClick={() => setShowHotspots(!showHotspots)}
                  className="pointer-events-auto px-3 py-1.5 rounded-full bg-black/60 hover:bg-[#5c0d13] backdrop-blur-md border border-white/20 text-white text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Eye className="w-3.5 h-3.5 text-[#f0dbaf]" />
                  <span>{showHotspots ? 'Hide Key Landmarks' : 'Show Landmarks'}</span>
                </button>

                {/* Desktop/Tablet Arrow Navigators */}
                <div className="pointer-events-auto flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[11px] border border-white/10 hidden sm:inline-block">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(filteredKeys.length).padStart(2, '0')}
                  </span>
                  
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Enclave"
                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-[#5c0d13] hover:text-white text-gray-900 flex items-center justify-center transition-colors cursor-pointer shadow-md"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next Enclave"
                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-[#5c0d13] hover:text-white text-gray-900 flex items-center justify-center transition-colors cursor-pointer shadow-md"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (5 Cols on Desktop): The Executive Dossier Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-[#c5a059]/30 shadow-xl space-y-5">
            
            <div className="space-y-3">
              
              {/* Category & Status */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#faf7f2] border border-[#c5a059]/40 text-[#886934] text-[10px] uppercase font-bold tracking-widest">
                  {activeData.category}
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Golden Visa Eligible</span>
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1110]">
                  {activeData.fullName || activeData.name}
                </h3>
                <p className="font-serif italic text-sm text-[#886934] mt-0.5">
                  "{activeData.tagline}"
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-gray-600 font-light leading-relaxed">
                {activeData.description}
              </p>

              {/* Telemetry Matrix Grid (4 High-Craft Tiles) */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                
                <div className="p-3 rounded-xl bg-[#faf8f5] border border-gray-200/80">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold block">
                    Investment Entry
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-gray-900 block mt-0.5">
                    {activeData.priceRange}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#faf8f5] border border-gray-200/80">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold block">
                    Target Net Yield
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-[#5c0d13] block mt-0.5">
                    {activeData.yield} Net Return
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#faf8f5] border border-gray-200/80">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold block">
                    Capital Appreciation
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-[#886934] block mt-0.5">
                    {activeData.appreciation || '+11.2% / yr'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#faf8f5] border border-gray-200/80">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold block">
                    UAE Residency
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-emerald-800 block mt-0.5">
                    10-Year Renewable
                  </span>
                </div>

              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-[#b89047] via-[#c5a059] to-[#9e7a3a] hover:from-[#5c0d13] hover:to-[#7e131d] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request Enclave Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href={`${BRAND_INFO.whatsappLink}?text=Hello%20Bellavierre,%20I%20am%20interested%20in%20${encodeURIComponent(activeData.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span className="sm:hidden lg:inline">WhatsApp Desk</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Interactive Enclave Filmstrip / Carousel (Mobile Touch-Swipeable) */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold flex items-center gap-1.5">
              <span>Prime Destination Filmstrip</span>
              <span className="text-gray-300">•</span>
              <span className="text-[#886934] font-normal">Click or Swipe to Spotlight</span>
            </span>

            <span className="text-xs text-gray-400 font-light hidden sm:inline-block">
              {filteredKeys.length} Curated Enclaves Available
            </span>
          </div>

          <div 
            ref={filmstripRef}
            className="flex items-stretch gap-3 overflow-x-auto scrollbar-none pb-2 pt-1 snap-x snap-mandatory"
          >
            {filteredKeys.map((key, idx) => {
              const item = DUBAI_AREAS_DATA.allAreas[key];
              const isActive = activeAreaKey === key;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveAreaKey(key);
                    scrollToThumb(idx);
                  }}
                  className={`flex-shrink-0 w-52 sm:w-60 p-2.5 rounded-2xl cursor-pointer transition-all duration-300 snap-start border ${
                    isActive
                      ? 'bg-white border-[#c5a059] shadow-lg scale-[1.02] ring-2 ring-[#c5a059]/20'
                      : 'bg-white/80 hover:bg-white border-gray-200 hover:border-gray-300 shadow-sm opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-2.5 bg-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-bold text-[#f0dbaf]">
                      {item.yield}
                    </div>
                    {isActive && (
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-[#5c0d13] text-white text-[9px] font-bold uppercase tracking-wider">
                        Active Spotlight
                      </div>
                    )}
                  </div>

                  {/* Title & Category */}
                  <div className="px-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-serif text-sm font-medium line-clamp-1 ${isActive ? 'text-[#5c0d13] font-bold' : 'text-gray-900'}`}>
                        {item.name}
                      </h4>
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-[#886934] rotate-45' : 'text-gray-400'}`} />
                    </div>
                    <p className="text-[11px] text-gray-500 font-light mt-0.5 line-clamp-1">
                      {item.priceRange} • {item.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
