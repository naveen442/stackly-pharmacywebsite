import { useState } from "react";

const russianLetters = ["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я"];
const englishLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const digits = ["0","1","2","3","4","5","6","7","8","9"];

const LetterButton = ({ char, active, onClick }) => (
  <button
    onClick={() => onClick(char)}
    className={`w-7 h-7 flex items-center justify-center text-[13px] font-bold rounded transition-all shrink-0
      ${active
        ? "bg-[#26c6bc] text-white"
        : "text-gray-400 hover:text-[#26c6bc] hover:bg-teal-50"
      }`}
  >
    {char}
  </button>
);

export default function AlphabetSearch() {
  const [active, setActive] = useState("А");

  const handleClick = (char) => setActive(char);

  return (
    <section className="w-full bg-white py-8 px-4 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        .alpha-root * { font-family: 'Nunito', sans-serif; }
        .alpha-scroll::-webkit-scrollbar { display: none; }
        .alpha-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* large decorative watermark А-Я */}
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{
          fontSize: 96,
          fontWeight: 900,
          color: "#26c6bc",
          opacity: 0.12,
          lineHeight: 1,
          letterSpacing: -4,
          fontFamily: "Nunito, sans-serif",
        }}
      >
        A–Z
      </div>

      <div className="alpha-root max-w-screen-xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="flex items-baseline gap-4 mb-6 flex-wrap">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 whitespace-nowrap">
            Search by Alphabet
          </h2>
          <span className="text-[13px] text-[#26c6bc] font-semibold whitespace-nowrap">
            Select a product by condition
          </span>
        </div>

        {/* ── Row 1: Cyrillic ── */}
        <div className="alpha-scroll flex items-center gap-0.5 overflow-x-auto mb-1 pb-1">
          {russianLetters.map((l) => (
            <LetterButton key={l} char={l} active={active === l} onClick={handleClick} />
          ))}
        </div>

        {/* ── Row 2: Latin ── */}
        <div className="alpha-scroll flex items-center gap-0.5 overflow-x-auto mb-1 pb-1">
          {englishLetters.map((l) => (
            <LetterButton key={l} char={l} active={active === l} onClick={handleClick} />
          ))}
        </div>

        {/* ── Row 3: Digits ── */}
        <div className="alpha-scroll flex items-center gap-0.5 overflow-x-auto pb-1">
          {digits.map((d) => (
            <LetterButton key={d} char={d} active={active === d} onClick={handleClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
