import { useState } from "react";

export default function Fifthbanner6({ totalPages = 32 }) {
  const [current, setCurrent] = useState(1);

  const getPages = () => {
    if (totalPages <= 6) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, 4, "...", totalPages];
    if (current >= totalPages - 2) return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", current - 1, current, current + 1, "...", totalPages];
  };

  return (
    <div className="w-full bg-white py-3 px-4 mt-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        .pg-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="pg-root max-w-screen-xl mx-auto -mt-[70px] flex items-center justify-start gap-1.5 flex-wrap">
        {getPages().map((p, i) =>
          p === "..." ? (
            <span key={`dot-${i}`}
              className="w-8 h-8 flex items-center justify-center text-[12px] text-gray-400 font-semibold select-none">
              ···
            </span>
          ) : (
            <button key={p} onClick={() => setCurrent(p)}
              className={`w-8 h-8 rounded-lg text-[12px] font-bold transition-all duration-150 shadow-sm ${
                current === p
                  ? "bg-[#26c6bc] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}>
              {p}
            </button>
          )
        )}
      </div>
    </div>
  );
}
