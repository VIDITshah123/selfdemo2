import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, TrendingUp, Users, ArrowUpRight, Sparkles, PhoneCall } from 'lucide-react';
import { LEADERSHIP_INFO } from '../data/mockData';

export default function MeetLeaders({ onOpenConsultation }) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const statsRef = useRef(null);
  
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [counters, setCounters] = useState({ years: 0, capital: 0, satisfaction: 0, hours: 0 });

  // Scroll Parallax Calculation
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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

  // Intersection Observer for Count-Up Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          const duration = 1800;
          const startTime = performance.now();

          const updateCounters = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);

            setCounters({
              years: Math.round(15 * ease),
              capital: (4.8 * ease).toFixed(1),
              satisfaction: (99.4 * ease).toFixed(1),
              hours: Math.round(48 * ease)
            });

            if (progress < 1) {
              requestAnimationFrame(updateCounters);
            }
          };

          requestAnimationFrame(updateCounters);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsAnimated]);

  // 3D Card Tilt with Specular Glare Tracking
  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setCardTilt({
      x: -((y - centerY) / centerY) * 8,
      y: ((x - centerX) / centerX) * 8,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100
    });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  // Parallax offsets
  const duneParallax = (scrollProgress - 0.5) * 80;
  const quoteFloat = (scrollProgress - 0.5) * -25;

  return (
    <section 
      ref={sectionRef}
      id="leadership-section" 
      className="relative py-28 sm:py-36 bg-[#faf7f2] text-gray-900 overflow-hidden border-y border-[#c5a059]/25"
    >
      {/* Background Subtle Sandstone Architectural Grid */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 will-change-transform"
        style={{
          transform: `translate3d(0, ${duneParallax}px, 0)`,
          transition: 'transform 0.08s linear'
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05915_1px,transparent_1px),linear-gradient(to_bottom,#c5a05915_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]" />
        
        {/* Subtle Luxury Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[18vw] tracking-[0.2em] text-[#c5a059]/10 select-none whitespace-nowrap">
          LEADERSHIP
        </div>
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Section Heading with High Contrast */}
        <div className="mb-16 sm:mb-24 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5c0d13]/10 border border-[#5c0d13]/20 text-xs text-[#5c0d13] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#b89047]" />
              <span>Visionary Executive Advisory</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#1b1615] uppercase">
              MEET OUR LEADERS
            </h2>
            <div className="w-28 h-[2px] bg-gradient-to-r from-[#b89047] to-transparent mt-3" />
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-gray-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#25d366] animate-ping" />
            <span>Praveen Aradhya • Executive Office Active in Downtown Dubai</span>
          </div>
        </div>

        {/* 3-Column Layout (High Contrast on Luminous Sandstone) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Big Leadership Quote */}
          <div 
            className="lg:col-span-4 flex flex-col justify-center space-y-6 will-change-transform"
            style={{
              transform: `translate3d(0, ${quoteFloat}px, 0)`,
              transition: 'transform 0.1s linear'
            }}
          >
            <div className="w-14 h-[2px] bg-[#b89047]" />
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal leading-snug text-[#1a1210]">
              "{LEADERSHIP_INFO.quote}"
            </blockquote>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#5c0d13]">
                {LEADERSHIP_INFO.name}
              </p>
              <p className="text-xs text-gray-600 font-light mt-0.5">
                {LEADERSHIP_INFO.title} • {LEADERSHIP_INFO.firm}
              </p>
            </div>
          </div>

          {/* Center Column: Framed CEO Portrait with 3D Gyroscopic Tilt & Glare Tracking */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div 
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
                transition: cardTilt.x === 0 ? 'transform 0.5s ease-out' : 'none',
                transformStyle: 'preserve-3d'
              }}
              className="relative group max-w-[340px] w-full cursor-pointer will-change-transform"
            >
              {/* Soft Warm Backlight Glow */}
              <div className="absolute -inset-3 bg-gradient-to-b from-[#c5a059]/30 to-[#5c0d13]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Photo Card with Rich Bevel Border */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#b89047]/60 bg-gray-900 shadow-[0_25px_60px_rgba(0,0,0,0.25)] aspect-[4/5]">
                <img 
                  src={LEADERSHIP_INFO.photo} 
                  alt={LEADERSHIP_INFO.name} 
                  className="w-full h-full object-cover object-top filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dynamic Specular Glare Lighting */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${cardTilt.glareX}% ${cardTilt.glareY}%, rgba(255,255,255,0.7) 0%, transparent 60%)`
                  }}
                />
                
                {/* Floating Brand Badge */}
                <div 
                  style={{ transform: 'translateZ(30px)' }}
                  className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#5c0d13] border-2 border-[#f0dbaf] shadow-xl flex items-center justify-center p-1 group-hover:scale-110 transition-transform"
                >
                  <span className="font-cinzel text-[8px] font-bold tracking-widest text-[#f0dbaf] text-center uppercase leading-tight">
                    BV<br/>DUBAI
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60" />
              </div>

              {/* Leader Attribution Below Photo */}
              <div 
                style={{ transform: 'translateZ(20px)' }}
                className="mt-5 text-left"
              >
                <h3 className="font-serif text-2xl font-normal text-gray-900">
                  {LEADERSHIP_INFO.name}
                </h3>
                <p className="text-xs text-[#8c6b2d] tracking-wider uppercase font-semibold">
                  {LEADERSHIP_INFO.title} • {LEADERSHIP_INFO.firm}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visionary Narrative */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 text-gray-700 font-light">
            <h4 className="font-sans text-xs sm:text-sm font-bold tracking-[0.15em] text-[#5c0d13] uppercase leading-relaxed">
              {LEADERSHIP_INFO.heading}
            </h4>

            {LEADERSHIP_INFO.paragraphs.map((p, idx) => (
              <p key={idx} className="text-xs sm:text-sm leading-relaxed text-gray-600">
                {p}
              </p>
            ))}

            {/* Private Advisory Button */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#5c0d13] hover:bg-[#7e131d] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-xl cursor-pointer group"
              >
                <span>Request Private CEO Briefing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#f0dbaf] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Live Animated Count-Up Stats Strip */}
        <div 
          ref={statsRef}
          className="mt-18 sm:mt-24 pt-10 border-t border-[#c5a059]/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {/* Stat 1: Years */}
          <div className="p-5 rounded-2xl bg-white border border-[#c5a059]/30 shadow-md hover:shadow-xl transition-all group">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5c0d13] mb-1 group-hover:scale-105 transition-transform">
              {statsAnimated ? `${counters.years}+` : '15+'}
            </div>
            <div className="text-[11px] sm:text-xs text-[#8c6b2d] tracking-wider uppercase font-semibold">
              Years Market Leadership
            </div>
          </div>

          {/* Stat 2: Capital */}
          <div className="p-5 rounded-2xl bg-white border border-[#c5a059]/30 shadow-md hover:shadow-xl transition-all group">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5c0d13] mb-1 group-hover:scale-105 transition-transform">
              {statsAnimated ? `AED ${counters.capital}B+` : 'AED 4.8B+'}
            </div>
            <div className="text-[11px] sm:text-xs text-[#8c6b2d] tracking-wider uppercase font-semibold">
              Transacted Capital
            </div>
          </div>

          {/* Stat 3: Satisfaction */}
          <div className="p-5 rounded-2xl bg-white border border-[#c5a059]/30 shadow-md hover:shadow-xl transition-all group">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5c0d13] mb-1 group-hover:scale-105 transition-transform">
              {statsAnimated ? `${counters.satisfaction}%` : '99.4%'}
            </div>
            <div className="text-[11px] sm:text-xs text-[#8c6b2d] tracking-wider uppercase font-semibold">
              Client Satisfaction
            </div>
          </div>

          {/* Stat 4: Golden Visa */}
          <div className="p-5 rounded-2xl bg-white border border-[#c5a059]/30 shadow-md hover:shadow-xl transition-all group">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5c0d13] mb-1 group-hover:scale-105 transition-transform">
              {statsAnimated ? `${counters.hours} Hrs` : '48 Hrs'}
            </div>
            <div className="text-[11px] sm:text-xs text-[#8c6b2d] tracking-wider uppercase font-semibold">
              Golden Visa Fast-Track
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
