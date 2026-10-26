import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  ShieldCheck, 
  ArrowUpRight, 
  Phone, 
  MessageSquare, 
  Send,
  Building,
  Sparkles,
  Lock
} from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function VipConsultationModal({ isOpen, onClose, defaultInterest = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: defaultInterest || 'Off-Plan Villa Investment',
    budget: 'AED 5M - 15M ($1.4M - $4M)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="modal-overlay p-3 sm:p-6 overflow-y-auto" 
      onClick={onClose}
    >
      <div 
        className="relative bg-white text-gray-900 border border-[#c5a059]/40 rounded-2xl sm:rounded-3xl max-w-xl w-full max-h-[92vh] sm:max-h-[88vh] overflow-y-auto scrollbar-none no-scrollbar p-5 sm:p-7 shadow-2xl animate-fade-in my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/10 hover:bg-[#5c0d13] text-gray-700 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Opulent Royal Burgundy & Gold Title Card Banner */}
            <div className="relative mb-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#5c0d13] via-[#6d1018] to-[#40080d] text-white shadow-lg border border-[#c5a059]/40 overflow-hidden">
              
              {/* Subtle Geometric Background Watermark */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 300 150" fill="none">
                  <circle cx="280" cy="20" r="100" stroke="white" strokeWidth="1.5" />
                  <path d="M-20 180 L320 -20" stroke="white" strokeWidth="1" />
                  <circle cx="40" cy="120" r="60" stroke="white" strokeWidth="1" />
                </svg>
              </div>

              <div className="relative z-10 pr-6 sm:pr-8">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#c5a059]/25 border border-[#c5a059]/40 text-[10px] uppercase tracking-[0.2em] font-bold text-[#f0dbaf] mb-2">
                  <ShieldCheck className="w-3 h-3 text-[#f0dbaf]" />
                  <span>Private Advisory Access</span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight leading-tight">
                  Book VIP Consultation & Portfolio
                </h3>
                
                <p className="text-xs text-amber-100/90 mt-1.5 font-light leading-relaxed">
                  Direct allocation to developer inventory, off-market penthouses, and expedited 10-Year UAE Golden Visa processing.
                </p>
              </div>
            </div>

            {/* Clean, High-Contrast Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-700 font-bold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Wright"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#faf8f5] hover:bg-white focus:bg-white border border-gray-200 focus:border-[#5c0d13] text-gray-900 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm outline-none transition-all focus:ring-2 focus:ring-[#5c0d13]/10"
                />
              </div>

              {/* WhatsApp & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-700 font-bold mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 58 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#faf8f5] hover:bg-white focus:bg-white border border-gray-200 focus:border-[#5c0d13] text-gray-900 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm outline-none transition-all focus:ring-2 focus:ring-[#5c0d13]/10"
                  />
                </div>
                
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-700 font-bold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#faf8f5] hover:bg-white focus:bg-white border border-gray-200 focus:border-[#5c0d13] text-gray-900 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm outline-none transition-all focus:ring-2 focus:ring-[#5c0d13]/10"
                  />
                </div>
              </div>

              {/* Primary Interest & Budget Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-700 font-bold mb-1">
                    Primary Interest
                  </label>
                  <div className="relative">
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-[#faf8f5] hover:bg-white focus:bg-white border border-gray-200 focus:border-[#5c0d13] text-gray-900 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm outline-none transition-all appearance-none cursor-pointer pr-8"
                    >
                      <option value="Off-Plan Villa Investment">Off-Plan Villa Investment</option>
                      <option value="Palm Jumeirah Mansions">Palm Jumeirah Mansions</option>
                      <option value="Burj Khalifa Sky Penthouse">Burj Khalifa Sky Penthouse</option>
                      <option value="10-Year Golden Visa Consultation">10-Year Golden Visa Consultation</option>
                      <option value="High-Yield Rental Portfolio">High-Yield Rental Portfolio</option>
                      <option value="Damac Lagoons & Akoya Estates">Damac Lagoons & Akoya Estates</option>
                      <option value="Business Bay Canal Waterfront">Business Bay Canal Waterfront</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-700 font-bold mb-1">
                    Investment Budget
                  </label>
                  <div className="relative">
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#faf8f5] hover:bg-white focus:bg-white border border-gray-200 focus:border-[#5c0d13] text-gray-900 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm outline-none transition-all appearance-none cursor-pointer pr-8"
                    >
                      <option value="AED 2M - 5M ($550K - $1.4M)">AED 2M - 5M ($550K - $1.4M)</option>
                      <option value="AED 5M - 15M ($1.4M - $4M)">AED 5M - 15M ($1.4M - $4M)</option>
                      <option value="AED 15M - 35M ($4M - $9.5M)">AED 15M - 35M ($4M - $9.5M)</option>
                      <option value="AED 35M+ ($9.5M+ Ultra High Net)">AED 35M+ ($9.5M+ Ultra High Net)</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-700 font-bold mb-1">
                  Specific Requirements or Preferred Communities (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Tell us if you prefer private pool, beachfront, or immediate rental yield..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#faf8f5] hover:bg-white focus:bg-white border border-gray-200 focus:border-[#5c0d13] text-gray-900 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm outline-none transition-all resize-none focus:ring-2 focus:ring-[#5c0d13]/10"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-gradient-to-r from-[#b89047] via-[#c5a059] to-[#9e7a3a] hover:from-[#5c0d13] hover:to-[#7e131d] text-white text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Request VIP Access & Dossier</span>
                </button>
              </div>

              {/* Quick WhatsApp Alternative Option */}
              <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-gray-100">
                <a
                  href={`${BRAND_INFO.whatsappLink}?text=Hello%20Bellavierre,%20I%20would%20like%20to%20book%20a%20VIP%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct WhatsApp Concierge</span>
                </a>

                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
                  <Lock className="w-3 h-3 text-[#886934]" />
                  <span>Strict Discretion & Non-Disclosure Protocol</span>
                </div>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="text-center py-6 sm:py-8 space-y-4 animate-fade-in">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 border border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-gray-900">
              Consultation Reserved
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-gray-900">{formData.name}</span>. A senior director from our Downtown Dubai executive office will connect via WhatsApp/Phone within 15 minutes.
            </p>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#faf8f5] border border-gray-200 text-xs text-gray-700 space-y-1">
              <p>Reference: <span className="text-[#5c0d13] font-mono font-bold">DXB-VIP-{Math.floor(1000 + Math.random() * 9000)}</span></p>
              <p>Off-plan brochure for <span className="font-semibold text-gray-900">{formData.interest}</span> sent to your email.</p>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
              <a
                href={`https://api.whatsapp.com/send?phone=971588386194&text=Hello%20Bellavierre%20Real%20Estate,%20my%20name%20is%20${encodeURIComponent(formData.name)}.%20I%20am%20inquiring%20about%20${encodeURIComponent(formData.interest)}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Direct WhatsApp Chat</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto py-3 px-5 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-800 text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
