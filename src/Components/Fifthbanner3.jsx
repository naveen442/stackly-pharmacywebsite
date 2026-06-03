import { useState } from "react";
import searchIcon from "../assets/Images/fifth_search_image.png";

export default function Fifthbanner3() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full px-4 py-5" style={{ backgroundColor: "#f0f9ff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');
        .sb-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="sb-root max-w-screen-xl mx-auto">
        <div className={`flex items-center bg-white rounded-full px-5 py-3 border transition-all duration-200 ${
          focused ? "border-[#26c6bc] shadow-sm" : "border-gray-200"
        }`}>
          {/* Input */}
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Start typing or enter a product name..."
            className="flex-1 bg-transparent outline-none text-[13px] text-gray-600 placeholder-gray-400 font-medium"
          />
          {/* Search icon — real uploaded image */}
          <button className="flex items-center justify-center ml-3 flex-shrink-0">
            <img src={searchIcon} alt="Search" className="w-5 h-5 object-contain"/>
          </button>
        </div>
      </div>
    </div>
  );
}
