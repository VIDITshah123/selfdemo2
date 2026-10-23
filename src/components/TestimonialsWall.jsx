import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS_WALL } from '../data/mockData';

export default function TestimonialsWall() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  return (
    <section className="bg-white text-gray-900 py-14 sm:py-20 relative z-20 border-b border-gray-100">
      <div className="container-luxury">
        
        {/* Top Center Rating & Heading (Screenshot 3 Replicated) */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1 text-sm font-semibold text-gray-800 mb-2">
            <span>4.5</span>
            <Star className="w-4 h-4 fill-[#b89047] text-[#b89047]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#1b1615] tracking-tight">
            Hear it from them
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-light mt-2">
            Unfiltered feedback from international home buyers, family offices, and rental tenants.
          </p>
        </div>

        {/* Testimonials Columns with Vertical Gold Dividers (Screenshot 3 Replicated) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch mb-8">
          {REVIEWS_WALL.map((rev) => (
            <div 
              key={rev.id} 
              className="flex flex-col justify-between border-l-2 border-[#b89047]/35 pl-5 sm:pl-6 py-2 transition-all duration-300 hover:border-[#b89047]"
            >
              {/* Review Text */}
              <p className="text-xs sm:text-[13px] text-gray-700 font-light leading-relaxed mb-6">
                "{rev.review}"
              </p>

              {/* Bottom Google Verified Badge */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                {/* 5 Stars */}
                <div className="flex text-[#ea4335]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#ea4335] text-[#ea4335]" />
                  ))}
                </div>

                {/* Google "G" Logo */}
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>

                {/* Reviewer Name */}
                <span className="text-xs font-semibold text-gray-900 tracking-wide">
                  {rev.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Bar: < PREV  1/20  NEXT > (Screenshot 3 Replicated) */}
        <div className="flex items-center justify-center gap-8 text-xs font-semibold text-gray-700 tracking-wider">
          <button
            onClick={prevPage}
            className="flex items-center gap-1 hover:text-[#b89047] transition-colors cursor-pointer uppercase"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>PREV</span>
          </button>

          <span className="font-serif text-sm font-bold text-gray-900 tracking-widest px-3 py-1 rounded bg-gray-100">
            {currentPage}/{totalPages}
          </span>

          <button
            onClick={nextPage}
            className="flex items-center gap-1 hover:text-[#b89047] transition-colors cursor-pointer uppercase"
          >
            <span>NEXT</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
