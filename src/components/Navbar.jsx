import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { BRAND_INFO, CURRENCY_RATES } from '../data/mockData';

export default function Navbar({ onOpenConsultation, activeCurrency, onCurrencyChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Buy', href: '#search-section' },
    { label: 'Rent', href: '#search-section' },
    { label: 'Projects', href: '#off-plan-section' },
    { 
      label: 'Services', 
      href: '#services',
      hasDropdown: true,
      items: [
        { label: 'Golden Visa Advisory', desc: '10-Year UAE Residency with AED 2M+ Investment' },
        { label: 'Off-Plan Investment Portfolio', desc: 'Exclusive Developer Pre-Launches & VIP Allocations' },
        { label: 'Property Asset Management', desc: 'End-to-End High Yield Tenant & Facility Care' },
        { label: 'Private Office & Mortgages', desc: 'Bespoke Private Banking & Cross-Border Wealth' }
      ]
    },
    { label: 'Areas', href: '#areas-section' },
    { label: 'Leadership', href: '#leadership-section' },
    { label: 'Yield Calculator', href: '#roi-calculator' },
    { label: 'Contact', href: '#contact-us' },
  ];

  return (
    <>
      {/* Main Navigation Bar (Clean Prowin Ivory/White + Gold Border on Scroll) */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-400 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-xl text-gray-900' 
            : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4 sm:py-5 text-gray-900'
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none flex-shrink-0">
            <img 
              src="/assets/logo.png" 
              alt="Bellavierre Real Estate Dubai" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ height: '46px', width: 'auto', maxHeight: '48px', maxWidth: '160px' }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, idx) => (
              <div 
                key={idx} 
                className="relative"
                onMouseEnter={() => link.hasDropdown && setServicesDropdown(true)}
                onMouseLeave={() => link.hasDropdown && setServicesDropdown(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-[13.5px] font-medium text-gray-800 hover:text-[#5c0d13] transition-colors py-2 tracking-wide"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#5c0d13]' : 'text-gray-400'}`} />
                  )}
                </a>

                {/* Services Mega Dropdown */}
                {link.hasDropdown && servicesDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-xl p-3 shadow-2xl animate-fade-in z-50">
                    <div className="space-y-1">
                      {link.items.map((sub, sIdx) => (
                        <div 
                          key={sIdx}
                          onClick={() => {
                            setServicesDropdown(false);
                            onOpenConsultation();
                          }}
                          className="p-2.5 rounded-lg hover:bg-[#faf6f0] transition-colors cursor-pointer group"
                        >
                          <div className="text-sm font-medium text-gray-900 group-hover:text-[#5c0d13] flex items-center justify-between">
                            {sub.label}
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#5c0d13]" />
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {sub.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            
            {/* Global Currency Switcher */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdown(!currencyDropdown)}
                className="flex items-center gap-1.5 text-gray-700 hover:text-[#5c0d13] font-medium px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-xs border border-gray-200 cursor-pointer shadow-sm"
                title="Switch Display Currency"
              >
                <Globe className="w-3.5 h-3.5 text-[#886934]" />
                <span className="font-semibold text-[11px] sm:text-xs">{activeCurrency}</span>
                <ChevronDown className="w-3 h-3 text-gray-500" />
              </button>

              {currencyDropdown && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-white border border-gray-200 rounded-xl shadow-2xl py-1 z-50 animate-fade-in">
                  {Object.keys(CURRENCY_RATES).map((cur) => (
                    <button
                      key={cur}
                      onClick={() => {
                        onCurrencyChange(cur);
                        setCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs hover:bg-[#faf6f0] flex items-center justify-between cursor-pointer ${
                        activeCurrency === cur ? 'text-[#5c0d13] font-bold bg-[#faf6f0]' : 'text-gray-800 font-normal'
                      }`}
                    >
                      <span>{CURRENCY_RATES[cur].label}</span>
                      {activeCurrency === cur && <span className="text-[#886934] font-bold">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#b89047] via-[#c5a059] to-[#9e7a3a] hover:from-[#5c0d13] hover:to-[#7e131d] text-white border border-[#dfbe78]/60 text-xs font-semibold tracking-wide transition-all shadow-[0_4px_16px_rgba(184,144,71,0.3)] hover:shadow-lg cursor-pointer group whitespace-nowrap"
            >
              <span>Book A Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 hover:text-[#5c0d13] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-40 bg-white/98 backdrop-blur-2xl border-t border-gray-200 lg:hidden overflow-y-auto p-6 flex flex-col justify-between animate-fade-in shadow-2xl">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#8c6b2d] mb-2">
              Navigation Menu
            </div>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-serif text-gray-900 hover:text-[#5c0d13] py-2 border-b border-gray-100 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8c6b2d]" />
                </a>
              ))}
            </nav>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full btn-gold justify-center py-3.5 text-base"
              >
                <span>Book VIP Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND_INFO.telLink}
                className="w-full py-3 rounded-full border border-gray-300 text-gray-800 flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50"
              >
                <Phone className="w-4 h-4 text-[#5c0d13]" />
                <span>Direct Call: {BRAND_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 text-xs text-gray-500 space-y-1">
            <p className="font-semibold text-gray-900">{BRAND_INFO.name}</p>
            <p>{BRAND_INFO.officeAddress}</p>
            <p className="text-[#8c6b2d] pt-1">RERA License #24819 • Dubai, UAE</p>
          </div>
        </div>
      )}
    </>
  );
}
