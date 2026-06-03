import { useState } from "react";

const TAGS = [
  "Manufacturer",
  "About the product",
  "Indications",
  "Dosage & course of treatment",
  "Description",
  "Functional benefits",
  "Storage conditions",
  "Shelf life",
  "Active substance",
  "Dosage form",
];

export default function Fifthbanner4() {
  const [active, setActive] = useState("Manufacturer");

  return (
    <div className="w-full bg-white px-4 py-3">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        .tags-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="tags-root max-w-screen-xl mx-auto">
        {/* Label */}
        <p className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-2">
          Tags
        </p>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-x-1 gap-y-2">
          {TAGS.map(tag => (
            <button key={tag} onClick={() => setActive(tag)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-150 ${
                active === tag
                  ? "bg-[#26c6bc] text-white"
                  : "bg-white text-gray-600 hover:text-gray-900 border-0"
              }`}>
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
