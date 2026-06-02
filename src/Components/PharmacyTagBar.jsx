import { useState, useRef } from "react";

const tags = [
  { id: "covid", label: "COVID-19" },
  { id: "allergy", label: "Allergy" },
  { id: "cosmetics", label: "Therapeutic Cosmetics" },
  { id: "intestine", label: "Intestine" },
  { id: "thrush", label: "Thrush" },
  { id: "joints", label: "Joints" },
];

const PercentIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

const TagIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function PharmacyTagBar() {
  const [activeTag, setActiveTag] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const scrollRef = useRef(null);

  return (
    <div className="w-full bg-white border-b border-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');
        .tagbar-root * { font-family: 'Nunito', sans-serif; }
        .tags-scroll::-webkit-scrollbar { display: none; }
        .tags-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="tagbar-root max-w-screen-xl mx-auto px-4 py-2">
        <div
          ref={scrollRef}
          className="tags-scroll flex items-center gap-2 overflow-x-auto"
        >
          {/* ── Sales pill ── */}
          <button className="flex items-center gap-1.5 bg-[#29b6c8] hover:bg-[#1fa3b4] text-white text-xs font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors shrink-0">
            <PercentIcon />
            Sales
          </button>

          {/* ── Discounts pill ── */}
          <button className="flex items-center gap-1.5 bg-[#f7941d] hover:bg-[#e07d0a] text-white text-xs font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors shrink-0">
            <TagIcon />
            Discounts
          </button>

          {/* ── Divider ── */}
          <div className="w-px h-5 bg-gray-200 shrink-0 mx-1" />

          {/* ── Regular tags ── */}
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setActiveTag(activeTag === tag.id ? null : tag.id)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all shrink-0 border ${
                activeTag === tag.id
                  ? "bg-[#1a2d6d] text-white border-[#1a2d6d]"
                  : "text-gray-600 hover:text-[#1a2d6d] hover:bg-gray-50 border-transparent"
              }`}
            >
              {tag.label}
            </button>
          ))}

          {/* ── More button ── */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-[#1a2d6d] whitespace-nowrap transition-colors shrink-0 ml-1"
          >
            More 52
            <ChevronDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
