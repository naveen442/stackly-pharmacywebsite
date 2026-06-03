import { useRef, useState } from "react";

const categories = [
  { label: "COVID-19",          count: 14,  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
      <line x1="4.93" y1="4.93" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.07" y2="19.07"/>
      <line x1="4.93" y1="19.07" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.07" y2="4.93"/>
    </svg>
  )},
  { label: "Allergy",           count: 24,  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )},
  { label: "Medical cosmetics", count: 124, icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="2" width="8" height="4" rx="1"/><rect x="5" y="6" width="14" height="15" rx="2"/>
      <line x1="12" y1="10" x2="12" y2="16"/><line x1="9" y1="13" x2="15" y2="13"/>
    </svg>
  )},
  { label: "Intestine",         count: 2,   icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 4c0 4 4 4 4 8s-4 4-4 8"/><path d="M14 4c0 4 4 4 4 8s-4 4-4 8"/>
    </svg>
  )},
  { label: "Thrush",            count: 14,  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="5" x2="8" y2="9"/>
    </svg>
  )},
  { label: "Excess weight",     count: 51,  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4z"/>
      <rect x="4" y="7" width="16" height="13" rx="2"/>
      <line x1="12" y1="11" x2="12" y2="16"/><line x1="9.5" y1="13.5" x2="14.5" y2="13.5"/>
    </svg>
  )},
  { label: "Joints",            count: 123, icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3"/><path d="M5 12H3M21 12h-2M12 5V3M12 21v-2"/>
      <path d="M7.05 7.05 5.64 5.64M18.36 18.36l-1.41-1.41M7.05 16.95l-1.41 1.41M18.36 5.64l-1.41 1.41"/>
    </svg>
  )},
  { label: "Vision",            count: 11,  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )},
  { label: "Gout",              count: 8,   icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22V12M12 12C12 7 7 4 4 6M12 12c0-5 5-8 8-6"/>
      <circle cx="12" cy="8" r="3"/>
    </svg>
  )},
];

export default function Fifthbanner2() {
  const [active, setActive]   = useState("COVID-19");
  const scrollRef             = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white px-4 pt-6 pb-2">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .bh-root * { font-family: 'Nunito', sans-serif; }
        .cats-scroll::-webkit-scrollbar { display: none; }
        .cats-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="bh-root max-w-screen-xl mx-auto">

        {/* ── Title ── */}
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">
          Health Blog
        </h1>

        {/* ── Category strip ── */}
        <div className="relative flex items-center">

          {/* Scroll left */}
          <button onClick={() => scroll(-1)}
            className="hidden sm:flex w-7 h-7 rounded-full border border-gray-200 items-center justify-center flex-shrink-0 mr-1 hover:border-gray-400 text-gray-400 hover:text-gray-700 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Scrollable tabs */}
          <div ref={scrollRef}
            className="cats-scroll flex items-center gap-0 overflow-x-auto flex-1">
            {categories.map((cat, i) => {
              const isActive = active === cat.label;
              return (
                <button key={cat.label} onClick={() => setActive(cat.label)}
                  className={`flex items-center gap-2 px-4 py-3 flex-shrink-0 border-r border-gray-100 last:border-r-0 transition-colors ${
                    isActive ? "text-[#26c6bc]" : "text-gray-400 hover:text-gray-600"
                  }`}>
                  {/* Icon */}
                  <span className={isActive ? "text-[#26c6bc]" : "text-gray-300"}>
                    {cat.icon}
                  </span>
                  {/* Label */}
                  <span className={`text-[13px] font-bold whitespace-nowrap ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                    {cat.label}
                  </span>
                  {/* Count */}
                  <span className={`text-[11px] font-semibold ${isActive ? "text-[#26c6bc]" : "text-gray-400"}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Scroll right */}
          <button onClick={() => scroll(1)}
            className="hidden sm:flex w-7 h-7 rounded-full border border-gray-200 items-center justify-center flex-shrink-0 ml-1 hover:border-gray-400 text-gray-400 hover:text-gray-700 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

        </div>

        {/* Bottom border line */}
        <div className="border-b border-gray-100 mt-0"/>
      </div>
    </section>
  );
}
