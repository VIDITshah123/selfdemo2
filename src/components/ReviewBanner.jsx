import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { REVIEWS, BRAND_INFO } from '../data/mockData';

export default function ReviewBanner() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevReview = () => {
    setCurrentIdx((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIdx((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS[currentIdx];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 px-4">
      <div className="container-luxury">
        <div className="bg-[#46060b] border border-[#c5a059]/35 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-6 sm:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Google Rating with Laurel Wreath */}
            <div className="md:col-span-4 flex items-center justify-center md:justify-start gap-4 border-b md:border-b-0 md:border-r border-[#c5a059]/25 pb-5 md:pb-0 md:pr-6">
              {/* Laurel Wreath Icon Graphic */}
              <div className="relative flex items-center justify-center">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#c5a059]" viewBox="0 0 100 100" fill="currentColor">
                  {/* Left Wreath Branch */}
                  <path d="M25 80 C20 70 18 55 24 40 C28 30 36 22 46 16 C42 22 36 30 35 40 C34 50 37 65 44 75 Z" opacity="0.85" />
                  <circle cx="28" cy="35" r="3" fill="#e5a93b" />
                  <circle cx="24" cy="50" r="3.2" fill="#e5a93b" />
                  <circle cx="28" cy="65" r="3.2" fill="#e5a93b" />
                  {/* Right Wreath Branch */}
                  <path d="M75 80 C80 70 82 55 76 40 C72 30 64 22 54 16 C58 22 64 30 65 40 C66 50 63 65 56 75 Z" opacity="0.85" />
                  <circle cx="72" cy="35" r="3" fill="#e5a93b" />
                  <circle cx="76" cy="50" r="3.2" fill="#e5a93b" />
                  <circle cx="72" cy="65" r="3.2" fill="#e5a93b" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white leading-none">
                    4.6 <span className="text-[#e5a93b] text-base">★</span>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <div className="font-bold text-base sm:text-lg text-white tracking-wide">
                  +{BRAND_INFO.reviewsCount} reviews
                </div>
                <div className="text-xs text-[#d8c2b3] flex items-center gap-1.5 font-light">
                  <span>powered by</span>
                  <span className="font-semibold text-white tracking-wider">Google</span>
                </div>
                <div className="text-[10px] text-[#c5a059] mt-0.5 tracking-wider uppercase font-medium">
                  Verified Client Trust
                </div>
              </div>
            </div>

            {/* Right Column: Active Testimonial Carousel */}
            <div className="md:col-span-8 flex flex-col justify-center space-y-3">
              {/* Stars & Reviewer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center text-[#e5a93b]">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#e5a93b] text-[#e5a93b]" />
                    ))}
                  </div>
                  <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.15em] text-[#d6b46f] uppercase">
                    {current.author}
                  </span>
                  <span className="text-xs text-[#b8a294] hidden sm:inline-block">
                    • {current.role} ({current.location})
                  </span>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevReview}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#c5a059] text-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#c5a059] text-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-[#f5eee8] font-light leading-relaxed italic">
                "{current.review}"
              </p>

              {/* Mobile Role display */}
              <div className="text-xs text-[#c5a059] sm:hidden">
                {current.role} • {current.location}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
