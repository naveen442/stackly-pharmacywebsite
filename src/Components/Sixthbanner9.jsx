import { useState } from "react";
import videoImg from "../assets/Images/sixth_images(F).png";

const SOCIALS = [
  { label: "f",   color: "#1877f2", count: 154 },
  { label: "VK",  color: "#4a76a8", count: 234 },
  { label: "T",   color: "#1da1f2", count: 112 },
  { label: "TG",  color: "#229ed9", count: 421 },
  { label: "OK",  color: "#f7931e", count: 341 },
  { label: "YT",  color: "#ff0000", count: 241 },
];

const READ_ALSO = [
  "Silver ions in the treatment of wounds and burns",
  "How does hormonal balance allow you to stay young and beautiful?",
  'Active life without "hot flashes" — it\'s all in your hands',
  "Traveler's pharmacy: what to do if your joints suddenly ache?",
];

const Stars = ({ rating = 4 }) => (
  <span className="flex gap-0.5">
    {[1,2,3,4,5].map(s => {
      const full = rating >= s, half = !full && rating >= s - 0.5;
      return (
        <svg key={s} width="20" height="20" viewBox="0 0 24 24">
          {half && <defs><linearGradient id={`hg${s}`}><stop offset="50%" stopColor="#f59e0b"/><stop offset="50%" stopColor="#e5e7eb"/></linearGradient></defs>}
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={full?"#f59e0b":half?`url(#hg${s})`:"#e5e7eb"}/>
        </svg>
      );
    })}
  </span>
);

const StarPicker = ({ value, onChange }) => (
  <span className="flex gap-0.5">
    {[1,2,3,4,5].map(s => (
      <svg key={s} width="20" height="20" viewBox="0 0 24 24" className="cursor-pointer hover:scale-110 transition-transform"
        fill={s <= value ? "#f59e0b" : "#e5e7eb"} onClick={() => onChange(s)}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </span>
);

const P1 = "On the other hand, from the very beginning of everyday work on shaping positions, the organization ensures wide involvement of specialists in shaping the directions of progressive development.";
const P2 = "It should not be forgotten, however, that the further development of various forms of activity contributes to the preparation and realization of new proposals.";
const P3 = "The diverse and rich experience of constant quantitative growth and the sphere of our activity plays an important role in shaping the directions of progressive development.";

export default function SixthBanner9() {
  const [rating, setRating] = useState(4);

  return (
    <section className="w-full bg-white px-4 py-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .h6f-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="h6f-root max-w-screen-xl mx-auto flex flex-col gap-6">

        {/* ── H6 + two-column layout ── */}
        <div>
          <h6 className="text-[14px] font-black text-gray-900 mb-3">Heading h6</h6>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {/* Left — paragraphs */}
            <div className="flex flex-col gap-3">
              <p className="text-[13px] text-gray-600 leading-relaxed">{P1}</p>
              <p className="text-[13px] text-gray-600 leading-relaxed">{P2}</p>
              <p className="text-[13px] text-gray-600 leading-relaxed">{P3}</p>
            </div>

            {/* Right — video thumbnail with play button */}
            <div className="relative rounded-xl overflow-hidden cursor-pointer group">
              <img src={videoImg} alt="Video" className="w-full h-auto object-cover"/>
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#26c6bc">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Social share bar ── */}
        <div className="border-t border-b border-gray-100 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* Left — share */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[13px] font-black text-gray-900 whitespace-nowrap">
              Liked the article? Share with friends!
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {SOCIALS.map(s => (
                <button key={s.label}
                  className="flex items-center gap-1 px-2 py-1 rounded text-white text-[11px] font-bold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: s.color }}>
                  <span>{s.label}</span>
                  <span className="text-[10px] opacity-90">{s.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right — rate */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[13px] font-black text-gray-900 whitespace-nowrap">Rate the article</span>
            {rating > 0
              ? <Stars rating={rating}/>
              : <StarPicker value={rating} onChange={setRating}/>
            }
          </div>
        </div>

        {/* ── Read also ── */}
        <div>
          <p className="text-[13px] font-black text-gray-900 mb-3">Read also</p>
          <ul className="flex flex-col gap-2.5">
            {READ_ALSO.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 cursor-pointer group">
                <span className="flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </span>
                <span className="text-[13px] text-[#26c6bc] group-hover:underline leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
