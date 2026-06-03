import { useState } from "react";

// ── Real avatar images ──
import avatar1 from "../assets/Images/fourth_images5(1).png"; // Elena – woman
import avatar2 from "../assets/Images/fourth_images5(2).png"; // Vladimir – man 1
import avatar3 from "../assets/Images/fourth_images5(3).png"; // Vladimir – man 2

// ─── Star Rating (display) ────────────────────────────────────────────────────
const Stars = ({ rating = 4, size = 18 }) => (
  <span className="flex gap-0.5">
    {[1,2,3,4,5].map(s => (
      <svg key={s} width={size} height={size} viewBox="0 0 24 24"
        fill={s <= rating ? "#f59e0b" : "#e5e7eb"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </span>
);

// ─── Interactive Star Rating (for review form) ────────────────────────────────
const StarPicker = ({ value, onChange }) => (
  <span className="flex gap-1">
    {[1,2,3,4,5].map(s => (
      <svg key={s} width="26" height="26" viewBox="0 0 24 24"
        className="cursor-pointer transition-transform hover:scale-110"
        fill={s <= value ? "#f59e0b" : "#e5e7eb"}
        onClick={() => onChange(s)}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </span>
);

// ─── Thumb Up/Down ────────────────────────────────────────────────────────────
const ThumbUp = ({ count = 0 }) => {
  const [n, setN] = useState(count);
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => { setLiked(l => !l); setN(x => liked ? x-1 : x+1); }}
      className={`flex items-center gap-1 text-[12px] transition-colors ${liked ? "text-[#26c6bc]" : "text-gray-400 hover:text-gray-600"}`}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill={liked ? "#26c6bc" : "none"} stroke="currentColor" strokeWidth="2">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
      </svg>
      {n}
    </button>
  );
};

const ThumbDown = ({ count = 0 }) => {
  const [n, setN] = useState(count);
  const [disliked, setDisliked] = useState(false);
  return (
    <button onClick={() => { setDisliked(d => !d); setN(x => disliked ? x-1 : x+1); }}
      className={`flex items-center gap-1 text-[12px] transition-colors ${disliked ? "text-red-400" : "text-gray-400 hover:text-gray-600"}`}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill={disliked ? "#f87171" : "none"} stroke="currentColor" strokeWidth="2">
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"/>
        <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
      </svg>
      {n}
    </button>
  );
};

// ─── Review card ──────────────────────────────────────────────────────────────
const ReviewCard = ({ avatar, name, rating, date, text, likes, dislikes, dimmed = false }) => (
  <div className={`py-5 border-b border-gray-100 ${dimmed ? "opacity-40 select-none" : ""}`}>
    <div className="flex items-start gap-3">
      {/* Avatar */}
      <img src={avatar} alt={name}
        className="w-11 h-11 rounded-full object-cover flex-shrink-0 border border-gray-100"/>
      {/* Header row */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-bold text-[14px] text-gray-900">{name}</span>
          <Stars rating={rating} size={14}/>
          <span className="text-[11px] text-gray-400">{date}</span>
          <button className="ml-auto text-[12px] text-[#26c6bc] hover:underline font-medium">Reply</button>
        </div>
        {/* Review text */}
        <p className="mt-2 text-[13px] text-gray-600 leading-relaxed">{text}</p>
        {/* Thumbs */}
        {!dimmed && (
          <div className="flex items-center gap-3 mt-3">
            <ThumbUp count={likes}/>
            <ThumbDown count={dislikes}/>
          </div>
        )}
      </div>
    </div>
  </div>
);

// ─── Instruction section tags ─────────────────────────────────────────────────
const TAGS = [
  { label: "Manufacturer",       active: true  },
  { label: "About the product",  active: false },
  { label: "Indications",        active: false },
  { label: "Dosage & course",    active: false },
  { label: "Description",        active: false },
  { label: "Functional benefits",active: false },
  { label: "Storage conditions", active: false },
  { label: "Shelf life",         active: false },
  { label: "Active substance",   active: false },
  { label: "Dosage form",        active: false },
];

const LOREM = "It should be noted, however, that the further development of various forms of activity plays an important role in shaping further directions of development. The task of the organization, especially the consultation with a wide asset, requires us to analyze the further directions of development.";
const LOREM2 = "The task of the organization, especially the new model of organizational activity, to a large extent determines the creation of a staff training system that meets pressing needs. Everyday practice shows that constant information and propaganda support of our activities allows us to evaluate the significance of the directions of progressive development.";
const LOREM3 = "On the other hand, the further development of various forms of activity requires an analysis of the training system of personnel, meets pressing needs. The task of the organization, especially the beginning of everyday work, entails the process of implementation and modernization of positions held by participants in relation to the set tasks.";

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Fourthbanner5() {
  const [activeTag, setActiveTag]   = useState("Manufacturer");
  const [rating,    setRating]      = useState(4);
  const [name,      setName]        = useState("");
  const [email,     setEmail]       = useState("");
  const [review,    setReview]      = useState("");
  const [submitted, setSubmitted]   = useState(false);
  const [expanded,  setExpanded]    = useState(false);
  const [reviewsExp,setReviewsExp]  = useState(false);

  const handleSubmit = () => {
    if (name && review) { setSubmitted(true); setTimeout(() => setSubmitted(false), 2000); setName(""); setEmail(""); setReview(""); setRating(4); }
  };

  return (
    <section className="w-full bg-white py-8 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .ir-root * { font-family: 'Nunito', sans-serif; }
        .fade-overlay { mask-image: linear-gradient(to bottom, black 60%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%); }
      `}</style>

      <div className="ir-root max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ══════════════════ LEFT — Instructions ══════════════════ */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">
              Instructions for Use
            </h2>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {TAGS.map(t => (
                <button key={t.label} onClick={() => setActiveTag(t.label)}
                  className={`px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                    activeTag === t.label
                      ? "bg-[#26c6bc] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Content area */}
            <div className={`relative overflow-hidden ${!expanded ? "max-h-[460px]" : ""}`}>
              <div className={!expanded ? "fade-overlay" : ""}>
                <h3 className="text-[17px] font-black text-gray-900 mb-2">Manufacturer</h3>
                <p className="text-[13px] text-[#26c6bc] font-bold mb-5">Abbott, USA</p>

                <h3 className="text-[17px] font-black text-gray-900 mb-2">About the product</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-4">{LOREM}</p>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-4">{LOREM2}</p>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-5">{LOREM3}</p>

                <h3 className="text-[17px] font-black text-gray-900 mb-2">Indications</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-4">{LOREM}</p>

                <p className="text-[13px] text-gray-400 italic">
                  Kreon ® 10,000 may be useful:
                </p>
              </div>
            </div>

            {/* Show full text button */}
            <button onClick={() => setExpanded(e => !e)}
              className="mt-4 flex items-center gap-2 w-full bg-[#26c6bc] hover:bg-[#1aada4] active:scale-[0.99] text-white font-bold text-[13px] rounded-xl py-3.5 px-5 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points={expanded ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}/>
              </svg>
              {expanded ? "Collapse text" : "Show full text"}
            </button>
          </div>

          {/* ══════════════════ RIGHT — Reviews ══════════════════ */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">
              Reviews
            </h2>

            {/* ── Leave a review form ── */}
            <div className="border border-gray-200 rounded-2xl p-5 mb-6">
              <h3 className="font-black text-[15px] text-gray-900 mb-3">Leave a Review</h3>

              {/* Star picker */}
              <div className="mb-3">
                <p className="text-[12px] text-gray-500 mb-1 font-medium">Rating:</p>
                <StarPicker value={rating} onChange={setRating}/>
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="relative">
                  <input value={name} onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-[#26c6bc] transition-colors"/>
                  <span className="absolute top-2.5 right-3 w-2 h-2 rounded-full bg-red-400"/>
                </div>
                <div className="relative">
                  <input value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Your e-mail"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-[#26c6bc] transition-colors"/>
                  <span className="absolute top-2.5 right-3 w-2 h-2 rounded-full bg-red-400"/>
                </div>
              </div>

              {/* Review textarea */}
              <textarea value={review} onChange={e => setReview(e.target.value)}
                placeholder="Write a detailed review, it's important..."
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-[#26c6bc] transition-colors resize-none mb-3"/>

              {/* Submit row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button onClick={handleSubmit}
                  className={`rounded-full px-8 py-3 font-bold text-white text-[13px] transition-all active:scale-95 ${
                    submitted ? "bg-green-600" : "bg-[#26c6bc] hover:bg-[#1aada4]"
                  }`}>
                  {submitted ? "Sent!" : "Submit"}
                </button>
                <p className="text-[11px] text-gray-400 leading-snug">
                  By clicking the button, you agree to the processing of{" "}
                  <span className="text-[#26c6bc] underline cursor-pointer">personal data</span>
                </p>
              </div>
            </div>

            {/* ── Reviews list ── */}
            <div className={`relative overflow-hidden ${!reviewsExp ? "max-h-[520px]" : ""}`}>
              <div className={!reviewsExp ? "fade-overlay" : ""}>
                <ReviewCard
                  avatar={avatar1}
                  name="Elena"
                  rating={4}
                  date="January 17, 2020"
                  text="I ordered the Amulet knife, made of Damascus steel. It was delivered today by a transport company. It's a wonderful knife, small but incredibly well-crafted! The blade is sharp, the handle is polished and fits perfectly in the hand. The leather sheath is just gorgeous — so stylish! Huge thanks to the craftsmen! I highly recommend this store!"
                  likes={2}
                  dislikes={0}
                />
                <ReviewCard
                  avatar={avatar2}
                  name="Vladimir"
                  rating={4}
                  date="January 17, 2020"
                  text="Huge thanks to the team of the Kavkaz Souvenir store. Gratitude and appreciation to the craftsmen the store works with, especially the Kizlyar and Kuznechny Dvor workshops for their professionalism and conscientiousness. Congratulations to everyone on Victory Day. I wish you success and prosperity."
                  likes={0}
                  dislikes={4}
                />
                <ReviewCard
                  avatar={avatar3}
                  name="Vladimir"
                  rating={4}
                  date="January 17, 2020"
                  text="Great product, highly recommended. Fast delivery and excellent quality. Will order again!"
                  likes={0}
                  dislikes={0}
                  dimmed={!reviewsExp}
                />
              </div>
            </div>

            {/* Show all reviews button */}
            <button onClick={() => setReviewsExp(e => !e)}
              className="mt-4 flex items-center gap-2 w-full bg-[#26c6bc] hover:bg-[#1aada4] active:scale-[0.99] text-white font-bold text-[13px] rounded-xl py-3.5 px-5 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points={reviewsExp ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}/>
              </svg>
              {reviewsExp ? "Collapse reviews" : "Show all reviews"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
