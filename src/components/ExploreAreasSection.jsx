import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Compass, Eye, Sparkles, Filter, ChevronRight, Check } from 'lucide-react';
import { DUBAI_AREAS_DATA } from '../data/mockData';

export default function ExploreAreasSection({ onOpenConsultation }) {
  const [activeAreaKey, setActiveAreaKey] = useState('Damac Lagoons');
  const [secondaryAreaKey, setSecondaryAreaKey] = useState('Business Bay');
  const [filterCategory, setFilterCategory] = useState('All');
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 3D Tilt states
  const [cardTilt1, setCardTilt1] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [cardTilt2, setCardTilt2] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  // Continuous Scroll Parallax Listener
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Tilt with Glare hotspot tracking
  const handleCardMouseMove = (e, ref, setTilt) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setTilt({
      x: -((y - centerY) / centerY) * 8, // rotateX
      y: ((x - centerX) / centerX) * 8,  // rotateY
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100
    });
  };

  const handleCardMouseLeave = (setTilt) => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  const handleSelectArea = (areaName) => {
    setActiveAreaKey(areaName);
    // Cycle secondary card to another area for variety
    const remaining = Object.keys(DUBAI_AREAS_DATA.allAreas).filter(k => k !== areaName);
    setSecondaryAreaKey(remaining[Math.floor(Math.random() * remaining.length)] || 'Business Bay');
  };

  const activeCard = DUBAI_AREAS_DATA.allAreas[activeAreaKey] || DUBAI_AREAS_DATA.allAreas['Damac Lagoons'];
  const secondaryCard = DUBAI_AREAS_DATA.allAreas[secondaryAreaKey] || DUBAI_AREAS_DATA.allAreas['Business Bay'];

  // Parallax offsets
  const gridParallax = (scrollProgress - 0.5) * 80;
  const imageParallax = (scrollProgress - 0.5) * -50;

  const categories = ['All', 'Golf & Lagoons', 'Waterfront & Beach', 'Urban Downtown'];

  const filteredList = DUBAI_AREAS_DATA.sidebarList.filter(item => {
    if (filterCategory === 'Golf & Lagoons') return item.name.includes('Damac') || item.name.includes('Furjan');
    if (filterCategory === 'Waterfront & Beach') return item.name.includes('Palm') || item.name.includes('Lagoons');
    if (filterCategory === 'Urban Downtown') return item.name.includes('Downtown') || item.name.includes('Business') || item.name.includes('Arjan');
    return true;
  });

  return (
    <section 
      ref={sectionRef} 
      id="areas-section" 
      className="bg-white text-gray-900 py-24 sm:py-32 relative z-20 border-b border-gray-100 overflow-hidden"
    >
      {/* Dynamic Background Parallax Topographical Grid */}
      <div 
        className="absolute inset-0 pointer-events-none select-none opacity-40 will-change-transform"
        style={{
          transform: `translate3d(0, ${gridParallax}px, 0)`,
          transition: 'transform 0.08s linear'
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05912_1px,transparent_1px),linear-gradient(to_bottom,#c5a05912_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        
        {/* Animated Compass Rose Watermark */}
        <div className="absolute -top-12 -right-12 w-96 h-96 border border-[#c5a059]/20 rounded-full flex items-center justify-center animate-spin-slow">
          <div className="w-64 h-64 border border-[#c5a059]/15 rounded-full" />
        </div>
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5c0d13]/10 text-[#5c0d13] text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5 text-[#5c0d13]" />
              <span>Interactive Geographical Navigator</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1b1615] tracking-tight">
              Explore Dubai's Areas
            </h2>
            <p className="text-sm text-gray-500 mt-2 font-light max-w-xl leading-relaxed">
              Experience Dubai’s premier enclaves with live optical drone window parallax and real-time yield benchmarking.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-[#5c0d13] text-white shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Master 2 Visual Cards + Directory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left & Center: 2 Big Landscape Visual Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* PRIMARY SPOTLIGHT CARD with 3D Tilt, Glare & Parallax */}
            <div
              ref={cardRef1}
              onMouseMove={(e) => handleCardMouseMove(e, cardRef1, setCardTilt1)}
              onMouseLeave={() => handleCardMouseLeave(setCardTilt1)}
              onClick={onOpenConsultation}
              style={{
                transform: `perspective(1000px) rotateX(${cardTilt1.x}deg) rotateY(${cardTilt1.y}deg)`,
                transition: cardTilt1.x === 0 ? 'transform 0.5s ease-out' : 'none',
                transformStyle: 'preserve-3d'
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 shadow-xl cursor-pointer will-change-transform border border-gray-200/80 hover:shadow-2xl"
            >
              {/* Parallax Inner Image Window */}
              <div 
                className="absolute -top-[15%] -bottom-[15%] -left-[5%] -right-[5%] will-change-transform"
                style={{
                  transform: `translate3d(0, ${imageParallax}px, 0)`,
                  transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)'
                }}
              >
                <img 
                  src={activeCard.image} 
                  alt={activeCard.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                />
              </div>

              {/* Dynamic Mouse Glare Hotspot */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${cardTilt1.glareX}% ${cardTilt1.glareY}%, rgba(255,255,255,0.7) 0%, transparent 60%)`
                }}
              />
              
              {/* Vignette Shadow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 pointer-events-none" />

              {/* Top Bar: Yield + Live Indicator */}
              <div 
                style={{ transform: 'translateZ(30px)' }}
                className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
                  <span>Spotlight Enclave</span>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-[#5c0d13]/90 backdrop-blur-md text-[11px] font-bold text-[#f0dbaf] border border-[#c5a059]/50 shadow-md">
                  Yield: {activeCard.yield}
                </div>
              </div>

              {/* Bottom Info with 3D Depth */}
              <div 
                style={{ transform: 'translateZ(28px)' }}
                className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between pointer-events-none"
              >
                <div>
                  <div 
                    style={{ transform: 'translateZ(14px)' }}
                    className="w-11 h-11 rounded-lg bg-[#b89047] group-hover:bg-[#d6b46f] text-white flex items-center justify-center transition-all shadow-lg mb-2.5 pointer-events-auto"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-[0.12em] uppercase drop-shadow-md">
                    {activeCard.name}
                  </h3>
                  <p className="text-xs text-gray-200 font-light mt-0.5 line-clamp-1">
                    {activeCard.tagline} • <span className="text-[#f0dbaf] font-medium">{activeCard.priceRange}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* SECONDARY SPOTLIGHT CARD */}
            <div
              ref={cardRef2}
              onMouseMove={(e) => handleCardMouseMove(e, cardRef2, setCardTilt2)}
              onMouseLeave={() => handleCardMouseLeave(setCardTilt2)}
              onClick={onOpenConsultation}
              style={{
                transform: `perspective(1000px) rotateX(${cardTilt2.x}deg) rotateY(${cardTilt2.y}deg)`,
                transition: cardTilt2.x === 0 ? 'transform 0.5s ease-out' : 'none',
                transformStyle: 'preserve-3d'
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 shadow-xl cursor-pointer will-change-transform border border-gray-200/80 hover:shadow-2xl"
            >
              {/* Parallax Inner Image Window */}
              <div 
                className="absolute -top-[15%] -bottom-[15%] -left-[5%] -right-[5%] will-change-transform"
                style={{
                  transform: `translate3d(0, ${imageParallax * 0.75}px, 0)`,
                  transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)'
                }}
              >
                <img 
                  src={secondaryCard.image} 
                  alt={secondaryCard.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                />
              </div>

              {/* Dynamic Mouse Glare Hotspot */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${cardTilt2.glareX}% ${cardTilt2.glareY}%, rgba(255,255,255,0.7) 0%, transparent 60%)`
                }}
              />
              
              {/* Vignette Shadow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 pointer-events-none" />

              {/* Top Yield Pill */}
              <div 
                style={{ transform: 'translateZ(30px)' }}
                className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-bold text-[#f0dbaf] border border-white/20 shadow-md group-hover:border-[#c5a059]"
              >
                Yield: {secondaryCard.yield}
              </div>

              {/* Bottom Info */}
              <div 
                style={{ transform: 'translateZ(28px)' }}
                className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between pointer-events-none"
              >
                <div>
                  <div 
                    style={{ transform: 'translateZ(14px)' }}
                    className="w-11 h-11 rounded-lg bg-[#b89047] group-hover:bg-[#d6b46f] text-white flex items-center justify-center transition-all shadow-lg mb-2.5 pointer-events-auto"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-[0.12em] uppercase drop-shadow-md">
                    {secondaryCard.name}
                  </h3>
                  <p className="text-xs text-gray-200 font-light mt-0.5 line-clamp-1">
                    {secondaryCard.tagline} • <span className="text-[#f0dbaf] font-medium">{secondaryCard.priceRange}</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Destinations Directory with Interactive Gliding Indicator */}
          <div className="lg:col-span-4 bg-[#faf8f5] border border-gray-200/90 rounded-2xl p-4 sm:p-5 shadow-sm space-y-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#8c6b2d] px-2 mb-3 flex items-center justify-between">
              <span>Prime Destinations Directory</span>
              <span className="text-[10px] text-gray-400 font-normal">Click to Spotlight</span>
            </div>

            <div className="space-y-1">
              {filteredList.map((area, idx) => {
                const isActive = activeAreaKey === area.name;
                const areaData = DUBAI_AREAS_DATA.allAreas[area.name];
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectArea(area.name)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-300 group ${
                      isActive 
                        ? 'bg-white shadow-md border-l-4 border-[#b89047] translate-x-1.5' 
                        : 'hover:bg-white/80 hover:translate-x-1'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Thumbnail Preview */}
                      <div className="w-11 h-11 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 border border-gray-200 relative">
                        <img 
                          src={areaData?.image || "/assets/akoya_golf.jpg"} 
                          alt={area.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                        />
                        {isActive && (
                          <div className="absolute inset-0 bg-[#5c0d13]/25 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-serif text-sm font-medium text-gray-900 flex items-center gap-1.5">
                          <span className={isActive ? 'text-[#5c0d13] font-bold' : ''}>{area.name}</span>
                          <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? 'text-[#b89047] rotate-45' : 'text-gray-400 group-hover:text-[#b89047]'}`} />
                        </div>
                        <span className="text-[11px] text-gray-500 font-light block">
                          {area.type}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#8c6b2d] block">
                        {area.yield}
                      </span>
                      <span className="text-[10px] text-gray-400 font-light">
                        Avg Net
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-gray-200">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 rounded-xl bg-white hover:bg-[#5c0d13] text-gray-800 hover:text-white border border-gray-300 hover:border-[#5c0d13] text-xs font-medium tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
              >
                <span>Request Custom Area Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#b89047] group-hover:text-white transition-colors" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
