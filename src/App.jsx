import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsRibbon from './components/StatsRibbon';
import ExploreAreasSection from './components/ExploreAreasSection';
import PillarsSection from './components/PillarsSection';
import OffPlanShowcase from './components/OffPlanShowcase';
import MeetLeaders from './components/MeetLeaders';
import TestimonialsWall from './components/TestimonialsWall';
import RoiCalculator from './components/RoiCalculator';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import VipConsultationModal from './components/VipConsultationModal';
import PropertyDetailsModal from './components/PropertyDetailsModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeSearchResult, setActiveSearchResult] = useState(null);
  const [activeCurrency, setActiveCurrency] = useState('AED');

  const handleSearchSubmit = (searchParams) => {
    setActiveSearchResult(searchParams);
    // Smooth scroll to off-plan section
    const offPlanEl = document.getElementById('off-plan-section');
    if (offPlanEl) {
      offPlanEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#c5a059] selection:text-[#220305] relative overflow-x-hidden">
      
      {/* 1. Global Navbar with Clean White / Ivory Look & Currency Switcher */}
      <Navbar 
        onOpenConsultation={() => setIsConsultationOpen(true)}
        activeCurrency={activeCurrency}
        onCurrencyChange={(curr) => setActiveCurrency(curr)}
      />

      {/* 2. Hero Section (Replicating Screenshot 3 with Dynamic Parallax) */}
      <Hero 
        onSearchSubmit={handleSearchSubmit} 
        onOpenConsultation={() => setIsConsultationOpen(true)} 
        activeCurrency={activeCurrency}
      />

      {/* 3. Stats Ribbon (Replicating Screenshot 1: +10 Years, +500 Deals, 100% Satisfaction) */}
      <StatsRibbon />

      {/* Active Search Result Toast (if user submitted search) */}
      {activeSearchResult && (
        <div className="container-luxury mt-6 px-4">
          <div className="bg-[#48080f] border border-[#c5a059]/40 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white shadow-lg animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059]" />
              <span className="text-[#e2d5c8]">
                Filtered for <strong className="text-white font-medium">{activeSearchResult.tab}</strong> in{' '}
                <strong className="text-[#f0dbaf] font-medium">{activeSearchResult.location}</strong> ({activeSearchResult.type})
              </span>
            </div>
            <button
              onClick={() => setActiveSearchResult(null)}
              className="text-[#c5a059] hover:text-white underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}

      {/* 4. NEW: Explore Dubai's Areas (Replicating Screenshot 1: Pure White Bg, 2 Landscape Cards + Right Directory List) */}
      <ExploreAreasSection 
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 5. NEW: Pillars of Excellence / Why Choose Us (Replicating Screenshot 2: Pure White Bg, 3 Editorial Columns, 3 Bronze Cards) */}
      <PillarsSection 
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 6. Off-Plan Opportunities Section (Replicating Screenshot 1 from Prompt 1: Burgundy Backdrop, Plagette 32, Rotating Badge) */}
      <OffPlanShowcase 
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        activeCurrency={activeCurrency}
      />

      {/* 7. Meet Our Leaders Section (Replicating Screenshot 2 from Prompt 1: Dunes Parallax, Quote, CEO Portrait with 3D Tilt) */}
      <MeetLeaders 
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 8. NEW: Hear It From Them (Replicating Screenshot 3: Pure White Bg, 4.5 ★, Vertical Dividers, Google Verified Reviews, Pagination) */}
      <TestimonialsWall />

      {/* 9. Interactive Dubai Yield & 10-Year Golden Visa Calculator */}
      <RoiCalculator 
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 10. NEW: Dedicated Contact Us Form Section */}
      <ContactSection />

      {/* 11. Global Comprehensive Footer */}
      <Footer 
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Floating WhatsApp Action Pill */}
      <WhatsAppButton />

      {/* VIP Private Viewing & Portfolio Modal */}
      <VipConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Deep-Dive Property Details Modal */}
      <PropertyDetailsModal 
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

    </div>
  );
}
