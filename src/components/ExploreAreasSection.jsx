import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, MapPin, TrendingUp, Compass, Layers } from 'lucide-react';
import { DUBAI_AREAS_DATA } from '../data/mockData';

export default function ExploreAreasSection({ onOpenConsultation }) {
  const [featuredCards, setFeaturedCards] = useState(DUBAI_AREAS_DATA.featured);
  const [activeAreaName, setActiveAreaName] = useState('Damac Lagoons');
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Card 3D Tilt states for Card 1 & Card 2
  const [tilt1, setTilt1] = useState({ x: 0, y: 0 });
  const [tilt2, setTilt2] = useState({ x: 0, y: 0 });
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  // Scroll Parallax Calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far section has scrolled through viewport (-1 to +1 range)
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Tilt Handlers
  const handleTilt = (e, ref, setTilt) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 7, // rotateX
      y: (x / (rect.width / 2)) * 7    // rotateY
    });
  };

  const resetTilt = (setTilt) => {
    setTilt({ x: 0, y: 0 });
  };

  const handleAreaClick = (area) => {
    setActiveAreaName(area.name);
    if (area.name === 'Business Bay' || area.name === 'Arjan' || area.name === 'Downtown Dubai') {
      setFeaturedCards([DUBAI_AREAS_DATA.featured[1], DUBAI_AREAS_DATA.featured[0]]);
    } else {
      setFeaturedCards([DUBAI_AREAS_DATA.featured[0], DUBAI_AREAS_DATA.featured[1]]);
    }
  };

  // Parallax offsets
  const bgMapOffset = (scrollProgress - 0.5) * 60; // moves -30px to +30px
  const innerImgOffset = (scrollProgress - 0.5) * -45; // moves +22px to -22px (inverted window parallax)

  return (
    <section 
      ref={sectionRef} 
      id="areas-section" 
      className="bg-white text-gray-900 py-24 sm:py-32 relative z-20 border-b border-gray-100 overflow-hidden"
    >
      {/* Unique Parallax Architectural Coordinate Grid & Topographical Watermark */}
      <div 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-35"
        style={{
          transform: `translate3d(0, ${bgMapOffset}px, 0)`,
          transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)'
        }}
      >
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05910_1px,transparent_1px),linear-gradient(to_bottom,#c5a05910_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Topographical SVG Contour Wave Accent */}
        <svg className="absolute -top-10 -right-20 w-[600px] h-[600px] text-[#c5a059]/15" viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="240" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="250" cy="250" r="180" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="250" cy="250" r="120" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="250" cy="250" r="60" stroke="currentColor" strokeWidth="1.5" />
          <line x1="250" y1="0" x2="250" y2="500" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="0" y1="250" x2="500" y2="250" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
        </svg>

        {/* Dubai Master Coordinates Watermark */}
        <div className="absolute bottom-6 right-10 font-mono text-[10px] tracking-[0.25em] text-[#8c6b2d]/40 uppercase hidden sm:block">
          25.2048° N, 55.2708° E • DUBAI PRIME RESIDENTIAL ENCLAVES
        </div>
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Section Header (Screenshot 1 Replicated) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            {/* Red Dubai Geographic Map Icon Badge */}
            <div className="mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#5c0d13] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform">
                <svg className="w-6 h-6 fill-current text-[#f0dbaf]" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1b1615] tracking-tight">
              Explore Dubai's Areas
            </h2>
            <p className="text-sm text-gray-500 mt-2 font-light max-w-xl">
              Click to explore prime master-planned residential communities, high-yield off-plan clusters, and luxury waterfront enclaves.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8c6b2d]">
            <Compass className="w-4 h-4 animate-spin-slow text-[#b89047]" />
            <span>Interactive Drone Parallax & Directory</span>
          </div>
        </div>

        {/* Master 2-Cards + Right List Layout (Replicating Screenshot 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left & Center: 2 Big Landscape Visual Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* CARD 1 with Optical Window Parallax + 3D Multi-Layer Tilt */}
            <div
              ref={cardRef1}
              onMouseMove={(e) => handleTilt(e, cardRef1, setTilt1)}
              onMouseLeave={() => resetTilt(setTilt1)}
              onClick={onOpenConsultation}
              style={{
                transform: `perspective(1000px) rotateX(${tilt1.x}deg) rotateY(${tilt1.y}deg)`,
                transition: tilt1.x === 0 ? 'transform 0.4s ease-out' : 'none',
                transformStyle: 'preserve-3d'
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-xl cursor-pointer will-change-transform border border-gray-200/60 hover:shadow-2xl"
            >
              {/* Parallax Inner Image Window (oversized & pans with scroll) */}
              <div 
                className="absolute -top-[12%] -bottom-[12%] -left-[5%] -right-[5%] will-change-transform"
                style={{
                  transform: `translate3d(0, ${innerImgOffset}px, 0)`,
                  transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)'
                }}
              >
                <img 
                  src={featuredCards[0].image} 
                  alt={featuredCards[0].name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                />
              </div>
              
              {/* Vignette Shadow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Top Yield Pill with 3D Pop */}
              <div 
                style={{ transform: 'translateZ(30px)' }}
                className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-semibold text-[#f0dbaf] border border-white/20 shadow-md group-hover:border-[#c5a059]"
              >
                Yield: {featuredCards[0].yield}
              </div>

              {/* Bottom Left Square Gold Button & Label (Screenshot 1 Replicated with 3D Depth) */}
              <div 
                style={{ transform: 'translateZ(26px)' }}
                className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between pointer-events-none"
              >
                <div>
                  {/* Gold Square Arrow Button */}
                  <div 
                    style={{ transform: 'translateZ(14px)' }}
                    className="w-11 h-11 rounded-lg bg-[#b89047] group-hover:bg-[#d6b46f] text-white flex items-center justify-center transition-all shadow-lg mb-2.5 pointer-events-auto"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  {/* Title in Bold Uppercase */}
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-[0.12em] uppercase drop-shadow-md">
                    {featuredCards[0].name}
                  </h3>
                  <p className="text-xs text-gray-200 font-light mt-0.5 line-clamp-1">
                    {featuredCards[0].tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 with Optical Window Parallax + 3D Multi-Layer Tilt */}
            <div
              ref={cardRef2}
              onMouseMove={(e) => handleTilt(e, cardRef2, setTilt2)}
              onMouseLeave={() => resetTilt(setTilt2)}
              onClick={onOpenConsultation}
              style={{
                transform: `perspective(1000px) rotateX(${tilt2.x}deg) rotateY(${tilt2.y}deg)`,
                transition: tilt2.x === 0 ? 'transform 0.4s ease-out' : 'none',
                transformStyle: 'preserve-3d'
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-xl cursor-pointer will-change-transform border border-gray-200/60 hover:shadow-2xl"
            >
              {/* Parallax Inner Image Window */}
              <div 
                className="absolute -top-[12%] -bottom-[12%] -left-[5%] -right-[5%] will-change-transform"
                style={{
                  transform: `translate3d(0, ${innerImgOffset * 0.8}px, 0)`,
                  transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)'
                }}
              >
                <img 
                  src={featuredCards[1].image} 
                  alt={featuredCards[1].name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                />
              </div>
              
              {/* Vignette Shadow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Top Yield Pill with 3D Pop */}
              <div 
                style={{ transform: 'translateZ(30px)' }}
                className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-semibold text-[#f0dbaf] border border-white/20 shadow-md group-hover:border-[#c5a059]"
              >
                Yield: {featuredCards[1].yield}
              </div>

              {/* Bottom Left Square Gold Button & Label */}
              <div 
                style={{ transform: 'translateZ(26px)' }}
                className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between pointer-events-none"
              >
                <div>
                  {/* Gold Square Arrow Button */}
                  <div 
                    style={{ transform: 'translateZ(14px)' }}
                    className="w-11 h-11 rounded-lg bg-[#b89047] group-hover:bg-[#d6b46f] text-white flex items-center justify-center transition-all shadow-lg mb-2.5 pointer-events-auto"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  {/* Title in Bold Uppercase */}
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-[0.12em] uppercase drop-shadow-md">
                    {featuredCards[1].name}
                  </h3>
                  <p className="text-xs text-gray-200 font-light mt-0.5 line-clamp-1">
                    {featuredCards[1].tagline}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Vertical Area List (4 cols) */}
          <div className="lg:col-span-4 bg-[#faf8f5] border border-gray-200/90 rounded-2xl p-4 sm:p-5 shadow-sm space-y-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#8c6b2d] px-2 mb-3 flex items-center justify-between">
              <span>Prime Destinations Directory</span>
              <span className="text-[10px] text-gray-400 font-normal">Click to View</span>
            </div>

            <div className="space-y-1">
              {DUBAI_AREAS_DATA.sidebarList.map((area, idx) => {
                const isActive = activeAreaName === area.name;
                return (
                  <div
                    key={idx}
                    onClick={() => handleAreaClick(area)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'bg-white shadow-md border-l-4 border-[#b89047] translate-x-1' 
                        : 'hover:bg-white/80 hover:translate-x-0.5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Thumbnail Preview */}
                      <div className="w-11 h-11 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 border border-gray-200">
                        <img 
                          src={idx % 2 === 0 ? "/assets/akoya_golf.jpg" : "/assets/business_bay.jpg"} 
                          alt={area.name} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <div className="font-serif text-sm font-medium text-gray-900 flex items-center gap-1.5">
                          <span>{area.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#b89047]" />
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
                <span>Request Custom Area Report</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#b89047] group-hover:text-white transition-colors" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
