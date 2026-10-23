import React, { useState } from 'react';
import { Calculator, CheckCircle2, TrendingUp, ShieldCheck, DollarSign, ArrowUpRight, Sparkles } from 'lucide-react';

export default function RoiCalculator({ onOpenConsultation }) {
  const [propertyPrice, setPropertyPrice] = useState(7500000); // 7.5M AED default
  const [rentalYield, setRentalYield] = useState(8.2); // 8.2% default
  const [holdingYears, setHoldingYears] = useState(5); // 5 years
  const [capitalAppreciation, setCapitalAppreciation] = useState(9.0); // 9% annual appreciation

  // Calculations
  const annualRentalIncomeAED = Math.round((propertyPrice * rentalYield) / 100);
  const annualRentalIncomeUSD = Math.round(annualRentalIncomeAED / 3.67);
  
  // 5 Year Compound Capital Appreciation
  const futurePropertyValueAED = Math.round(
    propertyPrice * Math.pow(1 + capitalAppreciation / 100, holdingYears)
  );
  const totalCapitalGainAED = futurePropertyValueAED - propertyPrice;
  const totalRentalIncomeAED = annualRentalIncomeAED * holdingYears;
  const totalEstimatedReturnsAED = totalCapitalGainAED + totalRentalIncomeAED;

  // Golden Visa Check
  const isGoldenVisaEligible = propertyPrice >= 2000000;

  // Format currency helper
  const formatAED = (val) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0
    }).format(val).replace('AED', 'AED ');
  };

  const formatUSD = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section 
      id="roi-calculator"
      className="relative py-28 sm:py-36 bg-gradient-to-b from-[#f9f7f2] via-[#f4efe6] to-[#f9f7f2] text-gray-900 overflow-hidden border-y border-[#c5a059]/25"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05912_1px,transparent_1px),linear-gradient(to_bottom,#c5a05912_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        
        {/* Soft Radial Warm Light Spotlights */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#c5a059]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#b89047]/10 blur-3xl pointer-events-none" />
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5c0d13]/10 border border-[#5c0d13]/20 text-xs font-semibold text-[#5c0d13] mb-4 shadow-sm">
            <Calculator className="w-4 h-4 text-[#886934]" />
            <span className="tracking-wide uppercase text-[11px] font-bold">Wealth & Portfolio Modeling</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1a1110] tracking-tight leading-tight">
            Dubai Investment Yield & <br className="hidden sm:inline" />
            <span className="text-[#886934] italic font-light">Golden Visa Calculator</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 mt-4 font-light max-w-2xl mx-auto leading-relaxed">
            Model your projected tax-free cash flows, capital appreciation, and immediate 10-year residency qualification with Dubai's premier wealth advisory.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Crisp Porcelain Card) */}
          <div className="lg:col-span-6 bg-white border border-[#c5a059]/30 rounded-3xl p-6 sm:p-9 shadow-[0_20px_50px_rgba(136,105,52,0.08)] space-y-7">
            <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1a1110]">
                  Investment Parameters
                </h3>
                <span className="text-xs text-gray-400 font-light">Dynamic financial simulations</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-medium text-amber-800">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>0% Capital Gains Tax</span>
              </span>
            </div>

            {/* Slider 1: Property Value */}
            <div className="space-y-3 bg-[#faf8f5] p-5 rounded-2xl border border-gray-100">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Target Property Value
                </label>
                <div className="text-right">
                  <span className="font-serif font-bold text-xl text-[#5c0d13]">
                    {formatAED(propertyPrice)}
                  </span>
                  <span className="text-xs text-[#886934] font-medium block">
                    ≈ {formatUSD(Math.round(propertyPrice / 3.67))}
                  </span>
                </div>
              </div>
              
              <input
                type="range"
                min="1500000"
                max="35000000"
                step="250000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-[#886934] cursor-pointer h-2.5 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-light pt-1">
                <span>AED 1.5M</span>
                <span className="font-medium text-gray-700">AED 15M (Prime)</span>
                <span>AED 35M+ (Ultra)</span>
              </div>
            </div>

            {/* Slider 2: Expected Net Rental Yield */}
            <div className="space-y-3 bg-[#faf8f5] p-5 rounded-2xl border border-gray-100">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Projected Net Rental Yield
                </label>
                <span className="font-serif font-bold text-2xl text-[#886934]">
                  {rentalYield}%
                </span>
              </div>
              
              <input
                type="range"
                min="5.0"
                max="12.0"
                step="0.1"
                value={rentalYield}
                onChange={(e) => setRentalYield(Number(e.target.value))}
                className="w-full accent-[#886934] cursor-pointer h-2.5 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-light pt-1">
                <span>5.0% (Prime Villa)</span>
                <span className="font-medium text-gray-700">8.0% (Downtown Average)</span>
                <span>12.0% (Short-Term Luxury)</span>
              </div>
            </div>

            {/* Slider 3: Holding Horizon */}
            <div className="space-y-3 bg-[#faf8f5] p-5 rounded-2xl border border-gray-100">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Holding Horizon
                </label>
                <span className="font-serif font-bold text-xl text-[#1a1110]">
                  {holdingYears} Years
                </span>
              </div>
              
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={holdingYears}
                onChange={(e) => setHoldingYears(Number(e.target.value))}
                className="w-full accent-[#886934] cursor-pointer h-2.5 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-light pt-1">
                <span>1 Year</span>
                <span className="font-medium text-gray-700">5 Years (Recommended)</span>
                <span>10 Years</span>
              </div>
            </div>

            {/* Tax Comparison Advantage */}
            <div className="pt-2 text-xs text-gray-600 space-y-1.5 border-t border-gray-100">
              <div className="flex items-center gap-2 text-[#1b5e20] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#2e7d32]" />
                <span>Dubai Global Advantage: 0% Income Tax & 0% Property Tax</span>
              </div>
              <p className="text-[11px] text-gray-500 pl-6 leading-relaxed">
                Compared to 40%+ income tax in the UK or EU, 100% of your Dubai rental yields and capital gains remain in your account.
              </p>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Golden Visa Status Card (Emerald & Gold Crest) */}
            <div className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 shadow-sm ${
              isGoldenVisaEligible 
                ? 'bg-gradient-to-r from-[#eef9f0] via-[#f4faf2] to-[#edf7ef] border-[#2e7d32]/35 shadow-[0_10px_30px_rgba(46,125,50,0.08)]' 
                : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-13 h-13 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md ${
                  isGoldenVisaEligible 
                    ? 'bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] text-white' 
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  <ShieldCheck className="w-7 h-7" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-gray-500">
                      UAE Residency Status
                    </span>
                    {isGoldenVisaEligible && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#2e7d32] text-white text-[10px] font-bold tracking-wider uppercase">
                        QUALIFIED
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#1a1110]">
                    {isGoldenVisaEligible 
                      ? '10-Year Renewable UAE Golden Visa' 
                      : 'Standard Residency Visa (AED 2M for Golden)'}
                  </h4>
                  
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    {isGoldenVisaEligible 
                      ? 'Grants 100% foreign ownership, family sponsorship, dependent visa, and zero mandatory stay requirement in the UAE.'
                      : 'Increase property value to AED 2,000,000 to unlock 10-Year Golden Visa eligibility.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Financial Returns Breakdown Card (Rich Velvet Contrast) */}
            <div className="bg-white border border-[#c5a059]/35 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(136,105,52,0.08)] space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#886934]">
                  Estimated Financial Performance
                </h4>
                <span className="text-[11px] text-gray-400 font-light">Compounded Model</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#faf8f5] border border-gray-100">
                  <span className="text-xs text-gray-500 font-medium block">
                    Annual Net Rental Income
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#1a1110] block mt-1">
                    {formatAED(annualRentalIncomeAED)}
                  </span>
                  <span className="text-xs text-[#886934] font-semibold block mt-0.5">
                    ≈ {formatUSD(annualRentalIncomeUSD)} / yr
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#faf8f5] border border-gray-100">
                  <span className="text-xs text-gray-500 font-medium block">
                    {holdingYears}-Year Cumulative Rent
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#5c0d13] block mt-1">
                    {formatAED(totalRentalIncomeAED)}
                  </span>
                  <span className="text-xs text-emerald-700 font-semibold block mt-0.5">
                    100% Tax-Free
                  </span>
                </div>
              </div>

              {/* High-Impact Total Returns Tile */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#5c0d13] via-[#48080d] to-[#300408] text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-5 border border-[#c5a059]/40">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#d8c3b4] block font-medium">
                    Estimated {holdingYears}-Year Total ROI (Yield + Appreciation)
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#f0dbaf] block mt-1">
                    +{formatAED(totalEstimatedReturnsAED)}
                  </span>
                  <span className="text-[11px] text-[#fbf6ed]/80 font-light mt-0.5 block">
                    Based on historical 9% Dubai Prime capital growth
                  </span>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#dfbe78] via-[#c5a059] to-[#a7823b] hover:from-[#f0dbaf] hover:to-[#c5a059] text-gray-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
                >
                  <span>Request Full Pro-Forma</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-950" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
