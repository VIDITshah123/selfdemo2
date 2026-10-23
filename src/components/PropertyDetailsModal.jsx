import React from 'react';
import { X, Bed, Bath, Maximize, Calendar, ShieldCheck, MapPin, Download, Phone, Check, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function PropertyDetailsModal({ property, onClose, onOpenConsultation }) {
  if (!property) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="relative bg-[#290407] border border-[#c5a059]/40 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl text-white p-6 sm:p-8 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#c5a059] hover:text-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-6 border border-[#c5a059]/20 shadow-xl">
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#260306] via-transparent to-black/30" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full bg-[#5c0d13]/90 border border-[#c5a059]/50 text-xs font-semibold uppercase tracking-wider text-[#f0dbaf]">
              {property.developer}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d6b46f] font-semibold">
                {property.type}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white drop-shadow-md">
                {property.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-white/90 mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{property.community}</span>
              </div>
            </div>

            <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 self-start sm:self-auto">
              <span className="text-[10px] uppercase tracking-wider text-gray-400 block">Starting Price</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#f0dbaf]">{property.startingPrice}</span>
              <span className="text-xs text-gray-300 block">≈ {property.usdPrice}</span>
            </div>
          </div>
        </div>

        {/* Core Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-black/30 border border-white/10 mb-6 text-center">
          <div>
            <span className="text-[11px] text-[#b8a294] block">Bedrooms</span>
            <span className="font-serif text-lg font-bold text-white mt-0.5 block">{property.bedrooms}</span>
          </div>
          <div>
            <span className="text-[11px] text-[#b8a294] block">Bathrooms</span>
            <span className="font-serif text-lg font-bold text-white mt-0.5 block">{property.bathrooms}</span>
          </div>
          <div>
            <span className="text-[11px] text-[#b8a294] block">Built-Up Area</span>
            <span className="font-serif text-lg font-bold text-white mt-0.5 block">{property.area}</span>
          </div>
          <div>
            <span className="text-[11px] text-[#b8a294] block">Handover Date</span>
            <span className="font-serif text-lg font-bold text-[#f0dbaf] mt-0.5 block">{property.handover}</span>
          </div>
        </div>

        {/* Description & Highlights */}
        <div className="space-y-4 mb-6">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-[#c5a059]">
            Architectural Overview
          </h3>
          <p className="text-sm text-[#e6d8cb] font-light leading-relaxed">
            {property.description}
          </p>

          <div className="pt-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#d6b46f] mb-3">
              Prime Features & Amenities:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#f1e4d7]">
              {property.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Plan & Golden Visa */}
        <div className="p-4 rounded-xl bg-[#3d060a] border border-[#c5a059]/30 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#c5a059] flex-shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">
                Payment Plan: {property.paymentPlan}
              </div>
              <div className="text-[11px] text-[#d6b46f]">
                Guaranteed 10-Year UAE Golden Visa Sponsorship Included
              </div>
            </div>
          </div>

          <div className="text-xs text-[#b8a294]">
            RERA Off-Plan Registration: #2026-DXB-9871
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto btn-outline-gold py-3 px-6 text-xs uppercase tracking-wider"
          >
            <Download className="w-4 h-4" />
            <span>Request Full Floor Plans & Brochure</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto btn-gold py-3 px-8 text-xs uppercase tracking-wider"
          >
            <span>Book Private VIP Viewing</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
