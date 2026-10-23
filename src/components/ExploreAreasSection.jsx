import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Compass, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Sun, 
  Sunset, 
  Moon, 
  Layers, 
  Maximize2, 
  Check, 
  ChevronRight,
  Eye
} from 'lucide-react';
import { DUBAI_AREAS_DATA } from '../data/mockData';

export default function ExploreAreasSection({ onOpenConsultation }) {
  // Area selection
  const [activeAreaKey, setActiveAreaKey] = useState('Damac Lagoons');
  const [companionKeys, setCompanionKeys] = useState(['Palm Jumeirah', 'Downtown Dubai']);
  const [filterCategory, setFilterCategory] = useState('All');
  
  // Presentation & Lighting modes
  const [viewMode, setViewMode] = useState('horizon'); // 'horizon' (accordion slices) or 'cinema' (ultra-wide theatre)
  const [lightingMode, setLightingMode] = useState('golden'); // 'day', 'golden', 'twilight'
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Parallax & Mouse tracking
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Scroll listener
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

  // Mouse pan tracking on active canvas
  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 18, y: y * 18 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setActiveHotspot(null);
  };

  // Select new area
  const handleSelectArea = (areaName) => {
    if (areaName === activeAreaKey) return;
    const allKeys = Object.keys(DUBAI_AREAS_DATA.allAreas);
    const newCompanions = [activeAreaKey, ...companionKeys.filter(k => k !== areaName)].slice(0, 2);
    setActiveAreaKey(areaName);
    setCompanionKeys(newCompanions);
  };

  // Switch companion to active
  const handlePromoteCompanion = (companionName) => {
    const remaining = [activeAreaKey, ...companionKeys.filter(k => k !== companionName)];
    setActiveAreaKey(companionName);
    setCompanionKeys(remaining.slice(0, 2));
  };

  const activeData = DUBAI_AREAS_DATA.allAreas[activeAreaKey] || DUBAI_AREAS_DATA.allAreas['Damac Lagoons'];

  // Categories
  const categories = ['All', 'Golf & Lagoons', 'Waterfront & Beach', 'Urban Downtown'];

  const filteredList = DUBAI_AREAS_DATA.sidebarList.filter(item => {
    const data = DUBAI_AREAS_DATA.allAreas[item.name];
    if (filterCategory === 'All') return true;
    return data?.category === filterCategory;
  });

  // Lighting overlay styles
  const getLightingFilter = () => {
    switch (lightingMode) {
      case 'golden':
        return 'sepia(25%) saturate(125%) contrast(105%) brightness(102%)';
      case 'twilight':
        return 'hue-rotate(200deg) saturate(135%) contrast(110%) brightness(88%)';
      default:
        return 'none';
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="areas-section" 
      className="bg-white text-gray-900 py-24 sm:py-32 relative z-20 border-b border-gray-100 overflow-hidden"
    >
      {/* Background Architectural Geometry Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05912_1px,transparent_1px),linear-gradient(to_bottom,#c5a05912_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]" />
        
        {/* Animated Compass Rose Watermark */}
        <div className="absolute -top-16 -right-16 w-96 h-96 border border-[#c5a059]/20 rounded-full flex items-center justify-center animate-spin-slow">
          <div className="w-64 h-64 border border-[#c5a059]/15 rounded-full" />
        </div>
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 border-b border-gray-100 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5c0d13]/10 text-[#5c0d13] text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5 text-[#886934]" />
              <span className="uppercase tracking-wider text-[11px] font-bold">Curated Geographical Architecture</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1a1110] tracking-tight">
              Explore Dubai's Premier Enclaves
            </h2>
            <p className="text-sm text-gray-500 mt-2 font-light max-w-xl leading-relaxed">
              Immerse yourself in Dubai’s high-yield sanctuaries with live architectural perspective slices, landmark hotspot telemetry, and atmospheric lighting controls.
            </p>
          </div>

          {/* Controls Bar: Category Filters + Presentation Mode Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Presentation Mode Toggle */}
            <div className="p-1 rounded-full bg-gray-100 border border-gray-200 flex items-center shadow-inner">
              <button
                onClick={() => setViewMode('horizon')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  viewMode === 'horizon'
                    ? 'bg-white text-[#5c0d13] shadow-sm font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title="Architectural Horizon Slices"
              >
                <Layers className="w-3.5 h-3.5 text-[#886934]" />
                <span>Horizon Slices</span>
              </button>

              <button
                onClick={() => setViewMode('cinema')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  viewMode === 'cinema'
                    ? 'bg-white text-[#5c0d13] shadow-sm font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title="Cinematic Master Theatre"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#886934]" />
                <span>Master Cinema</span>
              </button>
            </div>

            {/* Category Pills */}
            <div className="hidden sm:flex items-center gap-1.5 bg-gray-100 p-1 rounded-full border border-gray-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                    filterCategory === cat
                      ? 'bg-[#5c0d13] text-white font-medium shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Master Showcase Grid (12 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left & Center: The Unique Interactive Image Showcase (8 Columns) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* MODE 1: ARCHITECTURAL HORIZON SLICES (Expanding Accordion) */}
            {viewMode === 'horizon' ? (
              <div 
                ref={stageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative flex flex-col md:flex-row gap-4 h-[580px] sm:h-[620px] w-full"
              >
                
                {/* 1. PRIMARY FOCAL ENCLAVE (Dynamic Dominant 65% Slice) */}
                <div 
                  className="relative flex-1 md:flex-[2.8] rounded-[28px] overflow-hidden bg-gray-950 shadow-2xl border-2 border-[#c5a059]/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group"
                >
                  {/* Architectural Blueprint Inset Corners */}
                  <div className="absolute top-3 left-3 z-30 pointer-events-none font-mono text-[9px] text-[#f0dbaf]/90 tracking-widest uppercase bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse" />
                    <span>COORD: {activeData.coordinates}</span>
                  </div>

                  {/* Top Right: Live Telemetry Glass Badge */}
                  <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
                    <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#c5a059]/40 shadow-lg text-[11px] font-bold text-[#f0dbaf] flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#e5a93b]" />
                      <span>Net Yield: {activeData.yield}</span>
                    </div>
                  </div>

                  {/* Inner Optical Drone Lens with Parallax Pan */}
                  <div 
                    className="absolute inset-0 will-change-transform transition-transform duration-200 ease-out"
                    style={{
                      transform: `scale(1.12) translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
                    }}
                  >
                    <img 
                      src={activeData.image} 
                      alt={activeData.name} 
                      className="w-full h-full object-cover object-center transition-all duration-700"
                      style={{ filter: getLightingFilter() }}
                    />
                  </div>

                  {/* Vignette Shadow Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/60 pointer-events-none" />

                  {/* Interactive Landmark Hotspots on Image */}
                  {activeData.hotspots && activeData.hotspots.map((spot, idx) => (
                    <div 
                      key={idx}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin"
                      onMouseEnter={() => setActiveHotspot(spot)}
                      onMouseLeave={() => setActiveHotspot(null)}
                      onClick={onOpenConsultation}
                    >
                      {/* Pulsing Target Ring */}
                      <span className="absolute -inset-2.5 rounded-full bg-[#c5a059]/40 animate-ping pointer-events-none" />
                      <div className="relative w-7 h-7 rounded-full bg-[#5c0d13] border-2 border-[#f0dbaf] text-white flex items-center justify-center shadow-[0_0_15px_rgba(197,160,89,0.8)] transition-transform duration-300 group-hover/pin:scale-125">
                        <MapPin className="w-3.5 h-3.5 text-[#f0dbaf]" />
                      </div>

                      {/* Tooltip Card */}
                      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-52 p-3 rounded-xl bg-black/90 backdrop-blur-xl border border-[#c5a059]/50 text-white text-xs opacity-0 group-hover/pin:opacity-100 transition-all duration-300 pointer-events-none z-40 shadow-2xl transform translate-y-2 group-hover/pin:translate-y-0">
                        <span className="font-semibold text-[#f0dbaf] block leading-tight">
                          {spot.label}
                        </span>
                        <p className="text-[10px] text-gray-300 font-light mt-1 leading-snug">
                          {spot.desc}
                        </p>
                        <span className="text-[9px] text-[#c5a059] font-mono mt-1.5 block">
                          Verified Dubai Master Plan Landmark
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Atmospheric Lighting Controls Bar */}
                  <div className="absolute top-14 right-3 z-30 flex flex-col gap-1.5 p-1 rounded-2xl bg-black/55 backdrop-blur-md border border-white/10">
                    <button
                      onClick={() => setLightingMode('day')}
                      title="Daylight Perspective"
                      className={`p-2 rounded-xl text-xs transition-all cursor-pointer ${
                        lightingMode === 'day' 
                          ? 'bg-[#c5a059] text-gray-950 font-bold shadow-md' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Sun className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setLightingMode('golden')}
                      title="Golden Hour Sunset"
                      className={`p-2 rounded-xl text-xs transition-all cursor-pointer ${
                        lightingMode === 'golden' 
                          ? 'bg-[#c5a059] text-gray-950 font-bold shadow-md' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Sunset className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setLightingMode('twilight')}
                      title="Twilight Nocturne"
                      className={`p-2 rounded-xl text-xs transition-all cursor-pointer ${
                        lightingMode === 'twilight' 
                          ? 'bg-[#c5a059] text-gray-950 font-bold shadow-md' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Moon className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Information Overlay Card */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                    <div className="space-y-1.5 max-w-md">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#5c0d13]/80 border border-[#c5a059]/40 text-[#f0dbaf] text-[10px] uppercase font-bold tracking-wider">
                          {activeData.category}
                        </span>
                        <span className="text-[11px] text-[#25d366] font-medium flex items-center gap-1">
                          <Check className="w-3 h-3" /> 10-Yr Golden Visa Eligible
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-wide">
                        {activeData.fullName || activeData.name}
                      </h3>

                      <p className="text-xs text-gray-300 font-light line-clamp-2 leading-relaxed">
                        {activeData.description}
                      </p>

                      <div className="flex items-center gap-4 pt-1 text-xs">
                        <span className="text-gray-400">Entry: <strong className="text-white font-medium">{activeData.priceRange}</strong></span>
                        <span className="text-gray-400">Capital Growth: <strong className="text-[#f0dbaf] font-medium">{activeData.appreciation}</strong></span>
                      </div>
                    </div>

                    <button
                      onClick={onOpenConsultation}
                      className="px-5 py-3 rounded-full bg-gradient-to-r from-[#b89047] via-[#c5a059] to-[#9e7a3a] hover:from-[#5c0d13] hover:to-[#7e131d] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 group/btn"
                    >
                      <span>Explore Enclave Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* 2 & 3. COMPANION ENCLAVE PYLONS (Vertical Architectural Slices) */}
                {companionKeys.map((compKey, idx) => {
                  const compData = DUBAI_AREAS_DATA.allAreas[compKey] || DUBAI_AREAS_DATA.allAreas['Palm Jumeirah'];
                  return (
                    <div
                      key={idx}
                      onClick={() => handlePromoteCompanion(compKey)}
                      className="relative md:w-[130px] lg:w-[150px] rounded-[24px] overflow-hidden bg-gray-900 border border-gray-200/80 shadow-lg cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:md:w-[175px] hover:shadow-2xl group flex flex-col justify-between p-4"
                    >
                      {/* Image Preview with Zoom on Hover */}
                      <img 
                        src={compData.image} 
                        alt={compData.name} 
                        className="absolute inset-0 w-full h-full object-cover object-center filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-115 transition-all duration-700"
                      />

                      {/* Vignette Shadow Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/75 transition-colors" />

                      {/* Top Yield Pill */}
                      <div className="relative z-10 self-start px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#f0dbaf]">
                        {compData.yield} Yield
                      </div>

                      {/* Vertical Rotating Accent Title */}
                      <div className="relative z-10 my-auto hidden md:block">
                        <span className="font-serif text-lg tracking-[0.18em] text-white/90 uppercase block transform -rotate-90 origin-left translate-x-7 whitespace-nowrap group-hover:text-[#f0dbaf] transition-colors">
                          {compData.name}
                        </span>
                      </div>

                      {/* Mobile Title View */}
                      <div className="relative z-10 md:hidden mt-16">
                        <span className="font-serif text-base text-white font-medium block">
                          {compData.name}
                        </span>
                        <span className="text-[11px] text-[#f0dbaf] font-light">
                          {compData.priceRange}
                        </span>
                      </div>

                      {/* Bottom Expand Prompt */}
                      <div className="relative z-10 pt-2 flex items-center justify-between text-[11px] text-[#f5ebd8] border-t border-white/20">
                        <span className="text-[10px] font-medium tracking-wider uppercase opacity-80 group-hover:opacity-100">
                          Spotlight
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-[#c5a059] text-white group-hover:text-black flex items-center justify-center transition-colors">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            ) : (
              /* MODE 2: CINEMATIC MASTER THEATRE (Ultra-Wide Curved Viewport) */
              <div 
                ref={stageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-[32px] overflow-hidden bg-gray-950 shadow-2xl border-2 border-[#c5a059]/40 h-[580px] sm:h-[620px] w-full group"
              >
                {/* 21:9 Curved Panoramic Lens */}
                <div 
                  className="absolute inset-0 will-change-transform transition-transform duration-200 ease-out"
                  style={{
                    transform: `scale(1.1) translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.2}px, 0)`
                  }}
                >
                  <img 
                    src={activeData.image} 
                    alt={activeData.name} 
                    className="w-full h-full object-cover object-center"
                    style={{ filter: getLightingFilter() }}
                  />
                </div>

                {/* Dark Vignettes */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/30 pointer-events-none" />

                {/* Top Blueprint Coordinates Header */}
                <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between">
                  <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white font-mono flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>AERIAL HORIZON PERSPECTIVE • {activeData.coordinates}</span>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full bg-[#5c0d13]/80 backdrop-blur-md border border-[#c5a059]/40 text-xs font-bold text-[#f0dbaf]">
                    Benchmark Net Yield: {activeData.yield}
                  </div>
                </div>

                {/* Floating Architectural Dossier Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-black/85 backdrop-blur-2xl border border-[#c5a059]/40 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold block">
                      Enclave Overview • {activeData.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                      {activeData.fullName || activeData.name}
                    </h3>
                    <p className="text-xs text-gray-300 font-light max-w-xl">
                      {activeData.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <span className="text-xs text-gray-400 block">Acquisition Bracket</span>
                      <span className="font-serif text-lg font-bold text-[#f0dbaf] block">{activeData.priceRange}</span>
                    </div>

                    <button
                      onClick={onOpenConsultation}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#b89047] via-[#c5a059] to-[#9e7a3a] text-white font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    >
                      <span>Inquire Now</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Micro Caption Hint */}
            <div className="flex items-center justify-between text-xs text-gray-500 font-light px-2 pt-1">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#886934]" />
                <span>Click companion pylons or directory entries to dynamically morph perspective.</span>
              </span>
              <span className="font-mono text-[11px] text-gray-400">
                Prowin & Bellavierre Geospatial GIS
              </span>
            </div>

          </div>

          {/* Right Column: Clean Destinations Directory (4 Columns) */}
          <div className="lg:col-span-4 bg-[#faf8f5] border border-[#c5a059]/30 rounded-3xl p-5 sm:p-6 shadow-[0_10px_35px_rgba(136,105,52,0.06)] space-y-3">
            
            <div className="border-b border-gray-200/80 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#886934] block">
                  Enclave Index
                </span>
                <h4 className="font-serif text-xl font-medium text-[#1a1110]">
                  Prime Destinations Directory
                </h4>
              </div>
              <span className="text-[11px] text-gray-400 font-mono">06 Enclaves</span>
            </div>

            {/* List of Enclaves */}
            <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
              {filteredList.map((area, idx) => {
                const isActive = activeAreaKey === area.name;
                const areaData = DUBAI_AREAS_DATA.allAreas[area.name];
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectArea(area.name)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all duration-300 group border ${
                      isActive 
                        ? 'bg-white shadow-md border-[#c5a059] translate-x-1.5' 
                        : 'bg-white/60 hover:bg-white border-transparent hover:border-gray-200 hover:translate-x-1'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      
                      {/* Numbered Index */}
                      <span className={`font-mono text-xs font-semibold ${isActive ? 'text-[#886934]' : 'text-gray-400'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Thumbnail with Active Ring */}
                      <div className={`w-12 h-12 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0 relative border-2 ${
                        isActive ? 'border-[#c5a059] shadow-sm' : 'border-transparent'
                      }`}>
                        <img 
                          src={areaData?.image || "/assets/akoya_golf.jpg"} 
                          alt={area.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                        />
                        {isActive && (
                          <div className="absolute inset-0 bg-[#5c0d13]/20 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-white" />
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="font-serif text-sm font-medium text-gray-900 flex items-center gap-1.5">
                          <span className={isActive ? 'text-[#5c0d13] font-bold' : ''}>
                            {area.name}
                          </span>
                          <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isActive ? 'text-[#886934] rotate-45' : 'text-gray-400 group-hover:text-[#886934]'
                          }`} />
                        </div>
                        <span className="text-[11px] text-gray-500 font-light block">
                          {area.type}
                        </span>
                      </div>

                    </div>

                    {/* Right Yield Metric */}
                    <div className="text-right">
                      <span className="text-xs font-bold text-[#886934] block">
                        {area.yield}
                      </span>
                      <span className="text-[10px] text-gray-400 font-light">
                        Net Yield
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Bottom Action Button */}
            <div className="pt-3 border-t border-gray-200/80">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-2xl bg-white hover:bg-[#5c0d13] text-gray-800 hover:text-white border border-[#c5a059]/40 hover:border-[#5c0d13] text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
              >
                <span>Request Custom Area Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#886934] group-hover:text-white transition-colors" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
