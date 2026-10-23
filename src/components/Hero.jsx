import React, { useState, useEffect } from 'react';
import { Search, Star, MapPin, Building2, ChevronDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { DEVELOPERS, BRAND_INFO } from '../data/mockData';

export default function Hero({ onSearchSubmit, onOpenConsultation, activeCurrency }) {
  const [activeTab, setActiveTab] = useState('Buy');
  const [propertyType, setPropertyType] = useState('All Types');
  const [locationQuery, setLocationQuery] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Scroll Parallax Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse Parallax Listener
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // -10px to +10px
    const y = (clientY / innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  const searchTabs = ['Buy', 'Rent', 'Projects', 'List'];

  const propertyTypes = [
    'All Types',
    'Signature Villas',
    'Ultra-Luxury Penthouses',
    'Waterfront Mansions',
    'Private Lagoon Estates',
    'Off-Plan Pre-Launches'
  ];

  const popularLocations = [
    'Palm Jumeirah',
    'Downtown Dubai',
    'Dubai Hills Estate',
    'Dubai Marina & Harbour',
    'Tilal Al Ghaf',
    'Damac Lagoons',
    'Business Bay'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchSubmit({
      tab: activeTab,
      type: propertyType,
      location: locationQuery || 'All Dubai Prime Districts'
    });
  };

  return (
    <section 
      id="search-section" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden"
    >
      {/* Background with Real Dynamic Parallax (Scroll + Mouse Shift) */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, ${scrollY * 0.32 + mousePos.y * 0.4}px, 0) scale(1.08)`,
          transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)'
        }}
      >
        <img 
          src="/assets/dubai_hero_skyline.jpg" 
          alt="Dubai Luxury Skyline Sunset" 
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.12]"
        />
        {/* Rich Velvet Burgundy & Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#260306] via-[#380509]/75 to-[#1a0204]/80" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#2b0407]/60 to-[#1e0204]/90" />
      </div>

      {/* Parallax Floating Watermark Typography */}
      <div 
        className="watermark-text top-[15%] left-1/2 -translate-x-1/2 text-[13vw] tracking-[0.2em] text-white/[0.04] hidden sm:block will-change-transform"
        style={{
          transform: `translate3d(-50%, ${scrollY * 0.15}px, 0)`,
          transition: 'transform 0.05s linear'
        }}
      >
        BELLAVIERRE
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container-luxury pt-12 sm:pt-20 pb-16 flex-1 flex flex-col items-center justify-center text-center">
        
        {/* Rating Pill Top Center */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3e070c]/85 border border-[#c5a059]/40 backdrop-blur-md mb-6 shadow-xl animate-fade-in hover:scale-105 transition-transform cursor-default">
          <span className="text-white font-bold text-sm tracking-wide">{BRAND_INFO.googleRating}</span>
          <div className="flex items-center text-[#e5a93b]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#e5a93b] text-[#e5a93b]" />
            ))}
          </div>
        </div>

        {/* Hero Grand Title */}
        <div className="max-w-4xl mx-auto space-y-3 mb-4">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            BELLAVIERRE
          </h1>
          <p className="font-cinzel text-xl sm:text-2xl md:text-3xl tracking-[0.25em] text-[#d6b46f] font-normal uppercase drop-shadow-md">
            P R O P E R T I E S
          </p>
        </div>

        {/* Google Reviews Badge */}
        <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-[#e6d8cb] font-light mb-10 tracking-wider">
          <span className="text-[#c5a059] font-medium">+388 Reviews</span>
          <span>on</span>
          <span className="font-semibold text-white tracking-wide">Google</span>
        </div>

        {/* Search Widget Container */}
        <div className="w-full max-w-4xl mx-auto animate-fade-in">
          
          {/* Category Tabs: Buy, Rent, Projects, List with sliding animation */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
            {searchTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-white text-[#380509] font-bold shadow-xl scale-105'
                    : 'bg-[#3b060a]/75 text-[#ded0c3] hover:text-white hover:bg-[#52090e] border border-white/10 backdrop-blur-sm'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Inputs Bar (Replicating Screenshot 3) */}
          <form 
            onSubmit={handleSearch}
            className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-full p-2.5 sm:p-2 shadow-2xl border border-[#c5a059]/30 flex flex-col sm:flex-row items-center gap-2"
          >
            {/* Property Type Dropdown */}
            <div className="relative w-full sm:w-1/3 flex items-center px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-200">
              <Building2 className="w-4 h-4 text-[#8a7566] mr-2.5 flex-shrink-0" />
              <div className="w-full text-left">
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-500">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-gray-900 text-xs sm:text-sm font-medium focus:outline-none cursor-pointer appearance-none pr-4"
                >
                  {propertyTypes.map((type, idx) => (
                    <option key={idx} value={type} className="text-gray-900 bg-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-4 pointer-events-none" />
            </div>

            {/* Location, City, Community Input */}
            <div className="relative w-full sm:w-1/2 flex items-center px-4 py-2">
              <MapPin className="w-4 h-4 text-[#8a7566] mr-2.5 flex-shrink-0" />
              <div className="w-full text-left">
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-500">
                  Location, City, Community
                </label>
                <input
                  type="text"
                  placeholder="e.g. Palm Jumeirah, Downtown, Dubai Hills"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="w-full bg-transparent text-gray-900 text-xs sm:text-sm font-medium placeholder-gray-400 focus:outline-none"
                  list="locations-list"
                />
                <datalist id="locations-list">
                  {popularLocations.map((loc, idx) => (
                    <option key={idx} value={loc} />
                  ))}
                </datalist>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#5c0d13] hover:bg-[#74111a] text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 group flex-shrink-0 shadow-md cursor-pointer hover:shadow-xl"
            >
              <span>SEARCH</span>
              <ArrowUpRight className="w-4 h-4 text-[#d6b46f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-[#d8c5b5]">
            <span className="opacity-70">Trending Searches:</span>
            {['Palm Mansions', 'Burj Khalifa Penthouses', 'Lagoon Villas', 'AED 2M+ Golden Visa'].map((tag, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setLocationQuery(tag)}
                className="px-2.5 py-1 rounded-full bg-black/30 hover:bg-[#5c0d13] border border-white/10 text-[11px] text-[#f2e7db] transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Developer Network Trust Strip (Replicating Screenshot 3) */}
        <div className="w-full max-w-4xl mx-auto mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium whitespace-nowrap">
              We work with
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/80 font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
              {DEVELOPERS.map((dev, idx) => (
                <span 
                  key={idx} 
                  className="hover:text-[#c5a059] transition-colors cursor-default drop-shadow"
                  title={dev.tagline}
                >
                  {dev.name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
