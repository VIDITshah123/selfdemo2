import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Shield, Award } from 'lucide-react';
import { BRAND_INFO, DEVELOPERS, DUBAI_COMMUNITIES } from '../data/mockData';

export default function Footer({ onOpenConsultation }) {
  return (
    <footer id="contact-section" className="relative bg-[#1a0204] text-[#d6c4b6] pt-20 pb-12 border-t border-[#c5a059]/25 overflow-hidden">
      
      {/* Background Watermark Accent */}
      <div className="watermark-text bottom-4 left-1/2 -translate-x-1/2 text-[15vw] opacity-15 pointer-events-none">
        BELLAVIERRE
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-[#350509] border border-[#c5a059]/50 p-1 flex items-center justify-center">
                <img 
                  src="/assets/logo.png" 
                  alt="Bellavierre Real Estate" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-[0.16em] text-white">
                  BELLAVIERRE
                </span>
                <span className="block text-[9px] tracking-[0.25em] text-[#c5a059] uppercase">
                  Real Estate • Dubai
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#bca797] font-light leading-relaxed">
              Dubai’s premier boutique luxury real estate advisory firm. Specializing in bespoke off-plan portfolio acquisition, prime waterfront mansions, and high-net-worth 10-year UAE Golden Visa investor facilitation.
            </p>

            <div className="space-y-2 text-xs text-[#ebd8c8]">
              <a 
                href={BRAND_INFO.telLink}
                className="flex items-center gap-2 hover:text-[#c5a059] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                <span>{BRAND_INFO.phone}</span>
              </a>

              <a 
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#c5a059] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c5a059]" />
                <span>{BRAND_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.officeAddress}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="btn-gold text-xs uppercase tracking-wider py-2.5 px-6"
              >
                <span>Request Private Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Luxury Properties (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.2em] font-bold text-[#c5a059]">
              Properties
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#off-plan-section" className="hover:text-white transition-colors">
                  Off-Plan Projects
                </a>
              </li>
              <li>
                <a href="#search-section" className="hover:text-white transition-colors">
                  Villas for Sale
                </a>
              </li>
              <li>
                <a href="#search-section" className="hover:text-white transition-colors">
                  Sky Penthouses
                </a>
              </li>
              <li>
                <a href="#search-section" className="hover:text-white transition-colors">
                  Waterfront Mansions
                </a>
              </li>
              <li>
                <a href="#search-section" className="hover:text-white transition-colors">
                  Luxury Rentals
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white transition-colors text-[#c5a059]">
                  List Your Property
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Prime Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.2em] font-bold text-[#c5a059]">
              Prime Enclaves
            </h4>
            <ul className="space-y-2.5 text-xs">
              {DUBAI_COMMUNITIES.map((c, i) => (
                <li key={i}>
                  <a href="#areas-section" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>{c.name}</span>
                    <span className="text-[10px] text-[#c5a059]">{c.avgYield}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#areas-section" className="hover:text-white transition-colors">
                  Emirates Hills & Jumeirah Islands
                </a>
              </li>
              <li>
                <a href="#areas-section" className="hover:text-white transition-colors">
                  Bluewaters Island & JBR
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Master Developers (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.2em] font-bold text-[#c5a059]">
              Partner Developers
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {DEVELOPERS.map((d, i) => (
                <span 
                  key={i} 
                  className="p-2 rounded bg-white/5 border border-white/5 text-[#e0d4c8] text-center font-cinzel text-[11px] tracking-wider hover:border-[#c5a059]/40 transition-colors"
                >
                  {d.name}
                </span>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-[#2e0508] border border-[#c5a059]/25 text-[11px] text-[#c5a059] flex items-center gap-2">
              <Shield className="w-4 h-4 flex-shrink-0" />
              <span>Official RERA Certified Broker: ORN #24819</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a39082]">
          <div>
            © {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <span className="text-[#c5a059]/40">•</span>
            <span className="text-[#c5a059]">Dubai Luxury Web Design</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
