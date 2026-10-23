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
          // Animate counters
          const duration = 1800;
          const startTime = performance.now();

          const updateCounters = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quart
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
      x: -((y - centerY) / centerY) * 8, // rotateX
      y: ((x - centerX) / centerX) * 8,  // rotateY
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100
    });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  // Parallax offsets
  const duneParallax = (scrollProgress - 0.5) * 120; // -60px to +60px
  const quoteFloat = (scrollProgress - 0.5) * -30;

  return (
    <section 
      ref={sectionRef}
      id="leadership-section" 
      className="relative py-28 sm:py-36 bg-[#260306] text-white overflow-hidden"
    >
      {/* Background Texture: Luxury Crimson Sand Dunes with Multi-Layer Parallax Drift */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${duneParallax}px, 0) scale(1.18)`,
          transition: 'transform 0.08s linear'
        }}
      >
        <img 
          src={LEADERSHIP_INFO.duneBg} 
          alt="Dubai Crimson Sand Dunes Background" 
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.25]"
        />
        {/* Deep Velvet Burgundy & Shadow Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c0204]/95 via-[#38050a]/85 to-[#1c0204]/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#580b12] via-transparent to-[#1c0204]" />
      </div>

      {/* Floating Gold Dust Particles Accent */}
      <div className="absolute inset-0 pointer-events-none z-1 opacity-25">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-[#c5a059]/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Section Heading (Screenshot 2: MEET OUR LEADERS) */}
        <div className="mb-16 sm:mb-24 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3d060a]/80 border border-[#c5a059]/30 text-xs text-[#f0dbaf] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#e5a93b]" />
              <span>Visionary Executive Advisory</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#d6b46f] uppercase">
              MEET OUR LEADERS
            </h2>
            <div className="w-28 h-[2px] bg-gradient-to-r from-[#c5a059] to-transparent mt-3" />
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-[#d8c2b3] font-light">
            <span className="w-2 h-2 rounded-full bg-[#25d366] animate-ping" />
            <span>Praveen Aradhya • Executive Office Active</span>
          </div>
        </div>

        {/* 3-Column Layout (Replicating Screenshot 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Big Leadership Quote with Parallax Drift */}
          <div 
            className="lg:col-span-4 flex flex-col justify-center space-y-6 will-change-transform"
            style={{
              transform: `translate3d(0, ${quoteFloat}px, 0)`,
              transition: 'transform 0.1s linear'
            }}
          >
            <div className="w-14 h-[2px] bg-[#c5a059]/70" />
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-light leading-snug text-white/95">
              "{LEADERSHIP_INFO.quote}"
            </blockquote>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#c5a059]">
                {LEADERSHIP_INFO.name}
              </p>
              <p className="text-xs text-[#bfa796] font-light">
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
              {/* Gold Ambient Backlight Glow */}
              <div className="absolute -inset-3 bg-gradient-to-b from-[#c5a059]/40 to-[#580b12]/60 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c5a059]/50 bg-[#350509] shadow-[0_25px_60px_rgba(0,0,0,0.85)] aspect-[4/5]">
                <img 
                  src={LEADERSHIP_INFO.photo} 
                  alt={LEADERSHIP_INFO.name} 
                  className="w-full h-full object-cover object-top filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dynamic Specular Glare Lighting */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-35 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${cardTilt.glareX}% ${cardTilt.glareY}%, rgba(255,255,255,0.7) 0%, transparent 60%)`
                  }}
                />
                
                {/* Floating Brand Badge (Replicating Screenshot 2) */}
                <div 
                  style={{ transform: 'translateZ(30px)' }}
                  className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#700e17] border border-[#c5a059]/70 shadow-xl flex items-center justify-center p-1 group-hover:scale-110 transition-transform"
                >
                  <span className="font-cinzel text-[8px] font-bold tracking-widest text-[#f0dbaf] text-center uppercase leading-tight">
                    BV<br/>DUBAI
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#1e0204]/90 via-transparent to-transparent opacity-80" />
              </div>

              {/* Leader Attribution Below Photo */}
              <div 
                style={{ transform: 'translateZ(20px)' }}
                className="mt-5 text-left"
              >
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
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="btn-outline-gold text-xs tracking-wider uppercase py-3 px-6 group cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Private CEO Briefing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Live Animated Count-Up Stats Strip (Screenshot 2 Replicated) */}
        <div 
          ref={statsRef}
          className="mt-18 sm:mt-24 pt-10 border-t border-[#c5a059]/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {/* Stat 1: Years */}
          <div className="p-5 rounded-2xl bg-black/30 border border-white/5 backdrop-blur-md hover:border-[#c5a059]/50 transition-all group">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 group-hover:text-[#f0dbaf] transition-colors">
              {statsAnimated ? `${counters.years}+` : '15+'}
            </div>
            <div className="text-[11px] sm:text-xs text-[#c5a059] tracking-wider uppercase font-medium">
              Years Market Leadership
            </div>
          </div>

          {/* Stat 2: Capital */}
          <div className="p-5 rounded-2xl bg-black/30 border border-white/5 backdrop-blur-md hover:border-[#c5a059]/50 transition-all group">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 group-hover:text-[#f0dbaf] transition-colors">
              {statsAnimated ? `AED ${counters.capital}B+` : 'AED 4.8B+'}
            </div>
            <div className="text-[11px] sm:text-xs text-[#c5a059] tracking-wider uppercase font-medium">
              Transacted Capital
            </div>
          </div>

          {/* Stat 3: Satisfaction */}
          <div className="p-5 rounded-2xl bg-black/30 border border-white/5 backdrop-blur-md hover:border-[#c5a059]/50 transition-all group">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 group-hover:text-[#f0dbaf] transition-colors">
              {statsAnimated ? `${counters.satisfaction}%` : '99.4%'}
            </div>
            <div className="text-[11px] sm:text-xs text-[#c5a059] tracking-wider uppercase font-medium">
              Client Satisfaction
            </div>
          </div>

          {/* Stat 4: Golden Visa */}
          <div className="p-5 rounded-2xl bg-black/30 border border-white/5 backdrop-blur-md hover:border-[#c5a059]/50 transition-all group">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 group-hover:text-[#f0dbaf] transition-colors">
              {statsAnimated ? `${counters.hours} Hrs` : '48 Hrs'}
            </div>
            <div className="text-[11px] sm:text-xs text-[#c5a059] tracking-wider uppercase font-medium">
              Golden Visa Fast-Track
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
