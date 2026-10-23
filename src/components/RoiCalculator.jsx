import React, { useState } from 'react';
import { Calculator, CheckCircle2, TrendingUp, ShieldCheck, DollarSign, ArrowUpRight } from 'lucide-react';

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
    <section className="relative py-24 sm:py-32 bg-[#2d0408] text-white overflow-hidden border-t border-[#c5a059]/20">
      <div className="container-luxury relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5c0d13]/80 border border-[#c5a059]/30 text-xs font-semibold text-[#f0dbaf] mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#e5a93b]" />
            <span>Wealth & Portfolio Modeling</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
            Dubai Investment Yield & Golden Visa Calculator
          </h2>
          <p className="text-sm sm:text-base text-[#d8c3b4] mt-3 font-light">
            Model your projected tax-free cash flows, capital appreciation, and immediate 10-year residency qualification.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-[#390509]/90 border border-[#c5a059]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
            <h3 className="font-serif text-xl font-normal text-white border-b border-white/10 pb-3 flex items-center justify-between">
              <span>Investment Parameters</span>
              <span className="text-xs font-sans text-[#c5a059] font-medium">0% Capital Gains Tax</span>
            </h3>

            {/* Slider 1: Property Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-[#ded0c3] font-medium">Property Value</label>
                <div className="text-right">
                  <span className="font-serif font-bold text-lg text-white">{formatAED(propertyPrice)}</span>
                  <span className="text-xs text-[#c5a059] block">≈ {formatUSD(Math.round(propertyPrice / 3.67))}</span>
                </div>
              </div>
              <input
                type="range"
                min="1500000"
                max="35000000"
                step="250000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-[#c5a059] cursor-pointer h-2 bg-black/40 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-400 font-light">
                <span>AED 1.5M</span>
                <span>AED 15M</span>
                <span>AED 35M+</span>
              </div>
            </div>

            {/* Slider 2: Expected Net Rental Yield */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-[#ded0c3] font-medium">Projected Annual Net Yield</label>
                <span className="font-serif font-bold text-lg text-[#f0dbaf]">{rentalYield}%</span>
              </div>
              <input
                type="range"
                min="5.0"
                max="12.0"
                step="0.1"
                value={rentalYield}
                onChange={(e) => setRentalYield(Number(e.target.value))}
                className="w-full accent-[#c5a059] cursor-pointer h-2 bg-black/40 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-400 font-light">
                <span>5.0% (Prime Villa)</span>
                <span>8.0% (Avg Downtown)</span>
                <span>12.0% (Short-Term Holiday)</span>
              </div>
            </div>

            {/* Slider 3: Holding Horizon */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-[#ded0c3] font-medium">Investment Horizon</label>
                <span className="font-serif font-bold text-lg text-white">{holdingYears} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={holdingYears}
                onChange={(e) => setHoldingYears(Number(e.target.value))}
                className="w-full accent-[#c5a059] cursor-pointer h-2 bg-black/40 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-400 font-light">
                <span>1 Year</span>
                <span>5 Years (Standard)</span>
                <span>10 Years</span>
              </div>
            </div>

            {/* Tax Comparison Advantage */}
            <div className="pt-4 border-t border-white/10 text-xs text-[#d1beaf] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#25d366]" />
                <span>Dubai Global Advantage: 0% Income Tax & 0% Property Tax</span>
              </div>
              <p className="text-[11px] text-gray-400 pl-6">
                Compared to 40% income tax in the UK or state + federal tax in the US, 100% of your Dubai rental income is retained.
              </p>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Golden Visa Status Card */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 ${
              isGoldenVisaEligible 
                ? 'bg-gradient-to-r from-[#4d0910] to-[#260306] border-[#c5a059] shadow-xl' 
                : 'bg-black/30 border-white/10'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isGoldenVisaEligible ? 'bg-[#c5a059] text-[#220305]' : 'bg-gray-800 text-gray-400'
                }`}>
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-widest font-bold text-[#f0dbaf]">
                      UAE Residency Status
                    </span>
                    {isGoldenVisaEligible && (
                      <span className="px-2 py-0.5 rounded-full bg-[#25d366]/20 text-[#25d366] text-[10px] font-bold">
                        QUALIFIED
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-xl font-normal text-white mt-0.5">
                    {isGoldenVisaEligible 
                      ? '10-Year Renewable UAE Golden Visa' 
                      : 'Standard Residency Visa (AED 2M for Golden)'}
                  </h4>
                  <p className="text-xs text-[#d8c3b4] mt-1 font-light">
                    {isGoldenVisaEligible 
                      ? 'Grants 100% ownership, family sponsorship, dependent visa, and zero stay requirement in UAE.'
                      : 'Increase property value to AED 2,000,000 to unlock 10-Year Golden Visa eligibility.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Financial Returns Breakdown Card */}
            <div className="bg-[#46070e] border border-[#c5a059]/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
                Estimated Financial Performance
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/25 border border-white/5">
                  <span className="text-xs text-[#b8a294] block">Annual Rental Income</span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-white block mt-1">
                    {formatAED(annualRentalIncomeAED)}
                  </span>
                  <span className="text-[11px] text-[#c5a059]">≈ {formatUSD(annualRentalIncomeUSD)} / yr</span>
                </div>

                <div className="p-4 rounded-xl bg-black/25 border border-white/5">
                  <span className="text-xs text-[#b8a294] block">{holdingYears}-Year Cumulative Rent</span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#f0dbaf] block mt-1">
                    {formatAED(totalRentalIncomeAED)}
                  </span>
                  <span className="text-[11px] text-gray-400">100% Tax-Free</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#260306] border border-[#c5a059]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#d8c3b4] block">
                    Estimated {holdingYears}-Year Total ROI (Yield + Appreciation)
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#f0dbaf]">
                    +{formatAED(totalEstimatedReturnsAED)}
                  </span>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="btn-gold text-xs uppercase tracking-wider py-3 px-6 whitespace-nowrap shadow-lg"
                >
                  <span>Request Full Pro-Forma</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
