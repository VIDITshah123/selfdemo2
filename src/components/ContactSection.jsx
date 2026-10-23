import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles,
  Building2
} from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    inquiryType: 'Off-Plan Villa Acquisition',
    budget: 'AED 5M - 15M ($1.4M - $4M USD)',
    contactMethod: 'WhatsApp',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      inquiryType: 'Off-Plan Villa Acquisition',
      budget: 'AED 5M - 15M ($1.4M - $4M USD)',
      contactMethod: 'WhatsApp',
      message: ''
    });
  };

  return (
    <section id="contact-us" className="relative py-16 sm:py-22 bg-white text-gray-900 overflow-hidden border-t border-gray-100">
      
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#c5a059]/10 via-[#dfbe78]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#5c0d13]/5 via-[#c5a059]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb08_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5c0d13]/10 border border-[#5c0d13]/20 text-xs font-semibold text-[#5c0d13] mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#886934]" />
            <span className="tracking-wide uppercase text-[11px] font-bold">Confidential Advisory Access</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1a1110] tracking-tight leading-tight">
            Connect With Our <br className="hidden sm:inline" />
            <span className="text-[#886934] italic font-light">Senior Advisory Desk</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 mt-4 font-light max-w-2xl mx-auto leading-relaxed">
            Whether securing developer pre-allocations, structuring Golden Visa residency, or requesting an off-market portfolio, our advisory team responds within two hours.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Office & Direct Concierge Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Highlight Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#faf8f5] border border-[#c5a059]/30 shadow-md space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#886934] font-bold block mb-1">
                  Global Headquarters
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#1a1110]">
                  Bellavierre Real Estate Dubai
                </h3>
              </div>

              <div className="space-y-5 text-sm">
                
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#886934]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block">
                      Office Location
                    </span>
                    <p className="text-gray-800 font-medium mt-0.5 leading-snug">
                      {BRAND_INFO.address}
                    </p>
                    <span className="text-xs text-[#886934] font-light">
                      Facing Burj Khalifa & Dubai Opera
                    </span>
                  </div>
                </div>

                {/* Telephone Line */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#886934]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block">
                      Direct Advisory Phone
                    </span>
                    <a 
                      href={BRAND_INFO.telLink}
                      className="text-gray-900 font-bold hover:text-[#5c0d13] transition-colors mt-0.5 block font-serif text-base"
                    >
                      {BRAND_INFO.phone}
                    </a>
                    <span className="text-xs text-emerald-700 font-medium">
                      Lines open 24/7 for international investors
                    </span>
                  </div>
                </div>

                {/* WhatsApp Line */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#25d366]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block">
                      Instant WhatsApp Hotline
                    </span>
                    <a 
                      href={BRAND_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-bold hover:text-[#25d366] transition-colors mt-0.5 inline-flex items-center gap-1.5"
                    >
                      <span>Connect on WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4 text-[#25d366]" />
                    </a>
                    <span className="text-xs text-gray-500 block font-light">
                      Average response time: &lt; 5 minutes
                    </span>
                  </div>
                </div>

                {/* Private Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#886934]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block">
                      Confidential Dossier Email
                    </span>
                    <a 
                      href="mailto:vip@bellavierre.com" 
                      className="text-gray-900 font-medium hover:text-[#5c0d13] transition-colors mt-0.5 block"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block">
                      Executive Office Hours
                    </span>
                    <p className="text-gray-700 font-light mt-0.5">
                      Sunday – Friday: 9:00 AM – 8:00 PM (GST)
                    </p>
                    <span className="text-xs text-gray-400 font-light">
                      Saturday: Private VIP viewings by appointment
                    </span>
                  </div>
                </div>

              </div>

              {/* RERA Badge Bottom */}
              <div className="pt-5 border-t border-gray-200/80 flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#886934]" />
                  <span className="font-medium text-gray-800">Licensed Dubai Real Estate Broker</span>
                </div>
                <span className="text-[11px] font-mono text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200">
                  {BRAND_INFO.reraNumber}
                </span>
              </div>
            </div>

            {/* Direct Quick WhatsApp Callout */}
            <a
              href={BRAND_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-[#075e54] hover:bg-[#128c7e] text-white transition-all shadow-md group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold block">Direct WhatsApp Chat</span>
                  <span className="text-xs text-white/80 font-light">Get instant brochures & off-plan floor plans</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

          </div>

          {/* Right Column: High-Craft Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#faf8f5] border border-[#c5a059]/35 rounded-3xl p-7 sm:p-10 shadow-[0_20px_50px_rgba(136,105,52,0.07)]">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form Title Card Banner */}
                <div className="border-b border-gray-200 pb-5">
                  <span className="text-[11px] uppercase tracking-widest text-[#886934] font-bold block mb-1">
                    Direct Inquiry Form
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1110]">
                    Request Tailored Property Selection
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-light mt-1">
                    Receive complete investment pro-formas, payment plans, and developer discounts directly.
                  </p>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord James Hamilton"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#886934] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#886934] transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 58 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#886934] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#886934] transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@executive-office.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-gray-300 focus:border-[#886934] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#886934] transition-all shadow-sm"
                  />
                </div>

                {/* Inquiry Type & Budget Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                      Primary Objective
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#886934] rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#886934] transition-all shadow-sm cursor-pointer"
                    >
                      <option value="Off-Plan Villa Acquisition">Off-Plan Villa Acquisition</option>
                      <option value="Palm Jumeirah Mansions">Palm Jumeirah Mansions</option>
                      <option value="Burj Khalifa Sky Penthouse">Burj Khalifa Sky Penthouse</option>
                      <option value="10-Year Golden Visa Consultation">10-Year Golden Visa Consultation</option>
                      <option value="High-Yield Rental Portfolio">High-Yield Rental Portfolio</option>
                      <option value="Private Office / Commercial Investment">Commercial / Private Office</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                      Investment Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#886934] rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#886934] transition-all shadow-sm cursor-pointer"
                    >
                      <option value="AED 2M - 5M ($550K - $1.4M)">AED 2M - 5M ($550K - $1.4M)</option>
                      <option value="AED 5M - 15M ($1.4M - $4M)">AED 5M - 15M ($1.4M - $4M)</option>
                      <option value="AED 15M - 35M ($4M - $9.5M)">AED 15M - 35M ($4M - $9.5M)</option>
                      <option value="AED 35M+ ($9.5M+ Ultra High Net)">AED 35M+ ($9.5M+ Ultra High Net)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                    Preferred Communication Channel
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['WhatsApp', 'Direct Phone Call', 'Private Email'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: method })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                          formData.contactMethod === method
                            ? 'bg-[#5c0d13] text-white border-[#5c0d13] shadow-md'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specific Notes / Requests */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                    Specific Requirements or Preferred Communities (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="e.g., Waterfront view, private pool, high rental yield, completion date by 2026..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-300 focus:border-[#886934] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#886934] transition-all shadow-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#5c0d13] via-[#74111a] to-[#5c0d13] hover:from-[#74111a] hover:to-[#5c0d13] text-white font-medium text-xs sm:text-sm uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 cursor-pointer group"
                  >
                    <span>Submit Confidential Inquiry</span>
                    <Send className="w-4 h-4 text-[#dfbe78] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-[11px] text-gray-500 text-center mt-3 font-light">
                    🔒 Strict Client Discretion Assured • Your details are never shared with 3rd parties.
                  </p>
                </div>

              </form>
            ) : (
              /* Success State */
              <div className="py-12 px-6 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#886934] font-bold block">
                    Inquiry Transmitted
                  </span>
                  <h3 className="font-serif text-3xl font-medium text-[#1a1110]">
                    Thank You, {formData.fullName || 'Valued Client'}
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto font-light leading-relaxed">
                    Your inquiry regarding <strong className="text-gray-900">{formData.inquiryType}</strong> has been routed directly to our Senior Advisory Desk. A managing partner will contact you via {formData.contactMethod} shortly.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200 max-w-sm mx-auto text-xs text-gray-600 space-y-1 text-left shadow-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Reference:</span>
                    <span className="font-mono font-medium text-gray-800">BV-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Budget Bracket:</span>
                    <span className="font-medium text-gray-800">{formData.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected Response:</span>
                    <span className="font-semibold text-emerald-700">&lt; 2 Hours</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={BRAND_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#075e54] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#128c7e] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open Instant WhatsApp</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-700 text-xs font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
