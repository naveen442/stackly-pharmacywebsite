import { useState } from "react";

import avatar1 from "../assets/Images/fourth_images5(3).png"; // Elena – woman
import avatar2 from "../assets/Images/fourth_images5(2).png"; // Vladimir – man 1
import avatar3 from "../assets/Images/fourth_images5(1).png"; // Vladimir – man 2

// ─── Star Rating ──────────────────────────────────────────────────────────────
const Stars = ({ rating = 4 }) => (
  <span className="flex gap-0.5">
    {[1,2,3,4,5].map(s => (
      <svg key={s} width="13" height="13" viewBox="0 0 24 24"
        fill={s <= rating ? "#f59e0b" : "#e5e7eb"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </span>
);

// ─── Thumb buttons ────────────────────────────────────────────────────────────
const ThumbUp = ({ init = 0 }) => {
  const [n, setN] = useState(init);
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => { setOn(v => !v); setN(x => on ? x-1 : x+1); }}
      className={`flex items-center gap-1 text-[11px] transition-colors ${on ? "text-[#26c6bc]" : "text-gray-400 hover:text-gray-600"}`}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill={on?"#26c6bc":"none"} stroke="currentColor" strokeWidth="2">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
      </svg>
      {n > 0 && n}
    </button>
  );
};

const ThumbDown = ({ init = 0 }) => {
  const [n, setN] = useState(init);
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => { setOn(v => !v); setN(x => on ? x-1 : x+1); }}
      className={`flex items-center gap-1 text-[11px] transition-colors ${on ? "text-red-400" : "text-gray-400 hover:text-gray-600"}`}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill={on?"#f87171":"none"} stroke="currentColor" strokeWidth="2">
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"/>
        <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
      </svg>
      {n > 0 && n}
    </button>
  );
};

// ─── Single review card ───────────────────────────────────────────────────────
const ReviewCard = ({ avatar, name, rating, date, text, likeCount=0, dislikeCount=0, nested=false, dimmed=false }) => (
  <div className={`${nested ? "ml-10 mt-3 bg-gray-50 rounded-xl p-4" : "py-5 border-b border-gray-100"} ${dimmed ? "opacity-40 pointer-events-none select-none" : ""}`}>
    <div className="flex items-start gap-3">
      <img src={avatar} alt={name}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-gray-100"/>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
          <span className="text-[13px] font-black text-gray-900">{name}</span>
          <Stars rating={rating}/>
          <span className="text-[11px] text-gray-400">{date}</span>
          <button className="ml-auto text-[11px] text-[#26c6bc] hover:underline font-medium">Reply</button>
        </div>
        <p className="text-[12px] text-gray-600 leading-relaxed mb-2">{text}</p>
        {!dimmed && (
          <div className="flex items-center gap-3">
            <ThumbUp init={likeCount}/>
            <ThumbDown init={dislikeCount}/>
          </div>
        )}
      </div>
    </div>
  </div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function SixthBanner10() {
  const [name,      setName]      = useState("");
  const [email,     setEmail]     = useState("");
  const [comment,   setComment]   = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && comment) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
      setName(""); setEmail(""); setComment("");
    }
  };

  return (
    <section className="w-full bg-white px-4 py-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .rv-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="rv-root max-w-screen-xl mx-auto">

        {/* ── Leave a comment form ── */}
        <div className="border border-gray-200 rounded-2xl p-5 mb-8 bg-white">
          <h3 className="text-[15px] font-black text-gray-900 mb-4">Leave a Comment</h3>

          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div className="relative">
              <input value={name} onChange={e => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-700 placeholder-gray-400 outline-none focus:border-[#26c6bc] transition-colors"/>
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-400 flex-shrink-0"/>
            </div>
            <div className="relative">
              <input value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Your e-mail"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-700 placeholder-gray-400 outline-none focus:border-[#26c6bc] transition-colors"/>
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-400 flex-shrink-0"/>
            </div>
          </div>

          {/* Textarea */}
          <textarea value={comment} onChange={e => setComment(e.target.value)}
            placeholder="Describe your problem..."
            rows={3}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-700 placeholder-gray-400 outline-none focus:border-[#26c6bc] transition-colors resize-none mb-3"/>

          {/* Submit row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button onClick={handleSubmit}
              className={`rounded-full px-8 py-2.5 font-bold text-white text-[13px] transition-all active:scale-95 ${submitted ? "bg-green-600" : "bg-[#26c6bc] hover:bg-[#1aada4]"}`}>
              {submitted ? "Sent!" : "Submit"}
            </button>
            <p className="text-[11px] text-gray-400 leading-snug">
              By clicking the button, you agree to the processing of{" "}
              <span className="text-[#26c6bc] underline cursor-pointer">personal data</span>
            </p>
          </div>
        </div>

        {/* ── Reviews list ── */}
        <div>
          {/* Review 1 — Elena */}
          <ReviewCard
            avatar={avatar1}
            name="Elena"
            rating={4}
            date="January 17, 2020"
            text="I ordered the Amulet knife, made of Damascus steel. It was delivered today by a transport company. It's a wonderful knife — small but incredibly well-crafted! The blade is sharp, the handle is polished and fits perfectly in the hand. And the leather sheaths are just gorgeous — so stylish! Huge thanks to the craftsmen! I highly recommend this store!"
            likeCount={2}
            dislikeCount={0}
          />

          {/* Review 2 — Vladimir (nested / reply style) */}
          <ReviewCard
            avatar={avatar2}
            name="Vladimir"
            rating={4}
            date="January 17, 2020"
            text="Huge thanks to the team of the Kavkaz Souvenir store for their work. Gratitude and appreciation to the craftsmen the store works with, especially the Kizlyar and Kuznechny Dvor workshops for their professionalism and conscientiousness. Congratulations to everyone on Victory Day. I wish you success and prosperity."
            likeCount={0}
            dislikeCount={4}
            nested={true}
          />

          {/* Review 3 — Vladimir (dimmed, below fold) */}
          <ReviewCard
            avatar={avatar3}
            name="Vladimir"
            rating={4}
            date="January 17, 2020"
            text="Huge thanks to the team of the Kavkaz Souvenir store for their work. Gratitude and appreciation to the craftsmen the store works with, especially the Kizlyar and Kuznechny Dvor workshops for their professionalism and conscientiousness. Congratulations to everyone on Victory Day. I wish you success and prosperity."
            likeCount={0}
            dislikeCount={0}
            dimmed={true}
          />
        </div>

      </div>
    </section>
  );
}
