import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import { LEADERSHIP_INFO } from '../data/mockData';

export default function MeetLeaders({ onOpenConsultation }) {
  const [scrollY, setScrollY] = useState(0);
  const cardRef = useRef(null);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardTilt({
      x: -(y / (rect.height / 2)) * 8, // rotateX
      y: (x / (rect.width / 2)) * 8    // rotateY
    });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <section id="leadership-section" className="relative py-24 sm:py-32 bg-[#2d0408] text-white overflow-hidden">
      
      {/* Background Texture: Luxury Dunes with Impactful Parallax Scroll */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.12 - 100}px, 0) scale(1.15)`,
          transition: 'transform 0.08s linear'
        }}
      >
        <img 
          src={LEADERSHIP_INFO.duneBg} 
          alt="Dubai Crimson Sand Dunes Background" 
          className="w-full h-full object-cover object-center filter brightness-[0.5] contrast-[1.2]"
        />
        {/* Deep Burgundy & Shadow Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#220305]/95 via-[#38050a]/85 to-[#220305]/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#580b12] via-transparent to-[#220305]" />
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Section Heading (Screenshot 2: MEET OUR LEADERS) */}
        <div className="mb-14 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#d6b46f] uppercase">
            MEET OUR LEADERS
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#c5a059] to-transparent mt-3" />
        </div>

        {/* 3-Column Layout (Replicating Screenshot 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Big Leadership Quote */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <div className="w-12 h-[2px] bg-[#c5a059]/60" />
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-light leading-snug text-white/95">
              "{LEADERSHIP_INFO.quote}"
            </blockquote>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#c5a059]">
                {LEADERSHIP_INFO.name}
              </p>
              <p className="text-xs text-[#bfa796] font-light">
                {LEADERSHIP_INFO.title}
              </p>
            </div>
          </div>

          {/* Center Column: Framed CEO Portrait with 3D Tilt Interaction */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div 
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
                transition: cardTilt.x === 0 ? 'transform 0.5s ease-out' : 'none'
              }}
              className="relative group max-w-[340px] w-full cursor-pointer will-change-transform"
            >
              {/* Gold Ambient Backlight Glow */}
              <div className="absolute -inset-3 bg-gradient-to-b from-[#c5a059]/40 to-[#580b12]/60 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c5a059]/50 bg-[#350509] shadow-[0_25px_60px_rgba(0,0,0,0.85)] aspect-[4/5]">
                <img 
                  src={LEADERSHIP_INFO.photo} 
                  alt={LEADERSHIP_INFO.name} 
                  className="w-full h-full object-cover object-top filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Brand Badge (Replicating Screenshot 2) */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#700e17] border border-[#c5a059]/70 shadow-xl flex items-center justify-center p-1 group-hover:scale-110 transition-transform">
                  <span className="font-cinzel text-[8px] font-bold tracking-widest text-[#f0dbaf] text-center uppercase leading-tight">
                    BV<br/>DUBAI
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#1e0204]/90 via-transparent to-transparent opacity-80" />
              </div>

              {/* Leader Attribution Below Photo */}
              <div className="mt-5 text-left">
                <h3 className="font-serif text-2xl font-normal text-white">
                  {LEADERSHIP_INFO.name}
                </h3>
                <p className="text-xs text-[#d6b46f] tracking-wider uppercase font-medium">
                  {LEADERSHIP_INFO.title} • {LEADERSHIP_INFO.firm}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visionary Narrative & Leadership Track Record */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 text-[#ded0c3] font-light">
            <h4 className="font-sans text-xs sm:text-sm font-bold tracking-[0.15em] text-[#d6b46f] uppercase leading-relaxed">
              {LEADERSHIP_INFO.heading}
            </h4>

            {LEADERSHIP_INFO.paragraphs.map((p, idx) => (
              <p key={idx} className="text-xs sm:text-sm leading-relaxed text-[#f0e3d8]/90">
                {p}
              </p>
            ))}

            {/* Private Advisory Button */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="btn-outline-gold text-xs tracking-wider uppercase py-2.5 px-6 group cursor-pointer"
              >
                <span>Request Private CEO Briefing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Stats & Trust Strip */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#c5a059]/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {LEADERSHIP_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-black/20 border border-white/5 backdrop-blur-sm hover:border-[#c5a059]/40 transition-colors">
              <div className="font-serif text-2xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-[#c5a059] tracking-wider uppercase font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
