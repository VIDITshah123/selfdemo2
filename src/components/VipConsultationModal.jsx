import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowUpRight, Phone, MessageSquare, Send } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function VipConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Off-Plan Villa Investment',
    budget: 'AED 5M - 15M ($1.4M - $4M USD)',
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
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="relative bg-[#290407] border border-[#c5a059]/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-white shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-[#c5a059] hover:text-black text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#c5a059] block mb-1">
                Private Advisory
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                Book VIP Consultation & Portfolio
              </h3>
              <p className="text-xs text-[#d8c5b6] mt-1 font-light">
                Direct access to off-market inventory, developer pre-launch discounts, and Golden Visa processing.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Wright"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="luxury-input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 58 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="luxury-input"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="luxury-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1">
                    Primary Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="luxury-input"
                  >
                    <option value="Off-Plan Villa Investment">Off-Plan Villa Investment</option>
                    <option value="Palm Jumeirah Mansions">Palm Jumeirah Mansions</option>
                    <option value="Burj Khalifa Sky Penthouse">Burj Khalifa Sky Penthouse</option>
                    <option value="10-Year Golden Visa Consultation">10-Year Golden Visa Consultation</option>
                    <option value="High-Yield Rental Portfolio">High-Yield Rental Portfolio</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1">
                    Investment Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="luxury-input"
                  >
                    <option value="AED 2M - 5M ($550K - $1.4M)">AED 2M - 5M ($550K - $1.4M)</option>
                    <option value="AED 5M - 15M ($1.4M - $4M)">AED 5M - 15M ($1.4M - $4M)</option>
                    <option value="AED 15M - 35M ($4M - $9.5M)">AED 15M - 35M ($4M - $9.5M)</option>
                    <option value="AED 35M+ ($9.5M+ Ultra High Net)">AED 35M+ ($9.5M+ Ultra High Net)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1">
                  Specific Requirements or Preferred Communities (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Tell us if you prefer private pool, beachfront, or immediate rental yield..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="luxury-input resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-gold py-3.5 text-sm uppercase tracking-wider font-semibold shadow-xl"
                >
                  <Send className="w-4 h-4 mr-1" />
                  <span>Request VIP Access & Dossier</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#c5a059] pt-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Strict Discretion & Non-Disclosure Protocol Observed</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#25d366]/20 border border-[#25d366] text-[#25d366] flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle className="w-9 h-9" />
            </div>

            <h3 className="font-serif text-3xl text-white">
              Consultation Reserved
            </h3>

            <p className="text-sm text-[#ded0c3] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-white">{formData.name}</span>. A senior director from our Downtown Dubai executive office will connect via WhatsApp/Phone within 15 minutes.
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-[#c5a059]/30 text-xs text-[#c5a059] space-y-1">
              <p>Reference: <span className="text-white font-mono">DXB-VIP-{Math.floor(1000 + Math.random() * 9000)}</span></p>
              <p>Off-plan brochure for <span className="text-white">{formData.interest}</span> sent to your email.</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://api.whatsapp.com/send?phone=971588386194&text=Hello%20Bellavierre%20Real%20Estate,%20my%20name%20is%20${encodeURIComponent(formData.name)}.%20I%20am%20inquiring%20about%20${encodeURIComponent(formData.interest)}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Direct WhatsApp Chat</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto btn-outline-gold py-3 px-6 text-xs uppercase tracking-wider"
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
