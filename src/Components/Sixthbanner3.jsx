import { useState } from "react";

const TABS = ["Manufacturer", "About the product", "Indications"];

const Stars = ({ rating = 3.5 }) => (
  <span className="flex gap-0.5">
    {[1,2,3,4,5].map(s => {
      const full = rating >= s, half = !full && rating >= s - 0.5;
      return (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24">
          {half && <defs><linearGradient id={`hg${s}`}><stop offset="50%" stopColor="#f59e0b"/><stop offset="50%" stopColor="#e5e7eb"/></linearGradient></defs>}
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={full ? "#f59e0b" : half ? `url(#hg${s})` : "#e5e7eb"}/>
        </svg>
      );
    })}
  </span>
);

export default function Sixthbanner3() {
  const [activeTab, setActiveTab] = useState("Manufacturer");
  const [saved, setSaved] = useState(false);

  return (
    <div className="w-full bg-white border-y border-gray-100 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        .tb-root * { font-family: 'Nunito', sans-serif; }
        .tb-scroll::-webkit-scrollbar { display:none; }
        .tb-scroll { -ms-overflow-style:none; scrollbar-width:none; }
      `}</style>

      <div className="tb-root max-w-screen-xl mx-auto flex items-center gap-4 py-2 tb-scroll overflow-x-auto">

        {/* Read time */}
        <div className="flex items-center gap-1.5 flex-shrink-0 text-gray-400">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <span className="text-[12px] whitespace-nowrap">10 min read</span>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-200 flex-shrink-0"/>

        {/* Category name */}
        <span className="text-[13px] font-black text-gray-900 whitespace-nowrap flex-shrink-0">
          Category name
        </span>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-200 flex-shrink-0"/>

        {/* Tab pills */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-[#26c6bc] text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1 min-w-4"/>

        {/* Ratings */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-[12px] text-gray-400 whitespace-nowrap">49 ratings</span>
          <Stars rating={3.5}/>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-200 flex-shrink-0"/>

        {/* Read later button */}
        <button onClick={() => setSaved(s => !s)}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full border text-[12px] font-semibold whitespace-nowrap transition-all ${
            saved
              ? "border-[#26c6bc] bg-[#26c6bc] text-white"
              : "border-[#26c6bc] text-[#26c6bc] hover:bg-[#26c6bc] hover:text-white"
          }`}>
          {saved ? "Saved!" : "Read later"}
        </button>

      </div>
    </div>
  );
}
