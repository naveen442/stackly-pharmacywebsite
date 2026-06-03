import { useState } from "react";

// ─── Star display ─────────────────────────────────────────────────────────────
const Stars = ({ rating = 5, size = 13 }) => (
  <span className="flex gap-0.5">
    {[1,2,3,4,5].map(s => (
      <svg key={s} width={size} height={size} viewBox="0 0 24 24"
        fill={s <= rating ? "#f59e0b" : "#e5e7eb"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </span>
);

// ─── Interactive star picker ──────────────────────────────────────────────────
const StarPicker = ({ value, onChange, size = 28 }) => (
  <span className="flex gap-1">
    {[1,2,3,4,5].map(s => (
      <svg key={s} width={size} height={size} viewBox="0 0 24 24"
        className="cursor-pointer hover:scale-110 transition-transform"
        fill={s <= value ? "#f59e0b" : "#e5e7eb"}
        onClick={() => onChange(s)}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </span>
);

// ─── Thumbs ───────────────────────────────────────────────────────────────────
const ThumbUp = ({ init = 0 }) => {
  const [n, setN] = useState(init);
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => { setOn(v=>!v); setN(x => on?x-1:x+1); }}
      className={`flex items-center gap-1 text-[11px] ${on?"text-[#26c6bc]":"text-gray-300 hover:text-gray-500"}`}>
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
    <button onClick={() => { setOn(v=>!v); setN(x => on?x-1:x+1); }}
      className={`flex items-center gap-1 text-[11px] ${on?"text-red-400":"text-gray-300 hover:text-gray-500"}`}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill={on?"#f87171":"none"} stroke="currentColor" strokeWidth="2">
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"/>
        <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
      </svg>
      {n > 0 && n}
    </button>
  );
};

// ─── Rating bar row ───────────────────────────────────────────────────────────
const RatingBar = ({ stars, count, max }) => (
  <div className="flex items-center gap-2">
    <Stars rating={stars} size={11}/>
    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full bg-[#26c6bc] rounded-full" style={{ width: `${(count/max)*100}%` }}/>
    </div>
    <span className="text-[11px] text-gray-400 w-16 text-right">{count} reviews</span>
  </div>
);

// ─── Single review ────────────────────────────────────────────────────────────
const LOREM = "Everyday practice shows that the framework and place of staff training allows evaluating the significance of forms of development. The task of the organization, especially the new model of activity, largely determines the creation of a staff training system that meets pressing needs. The significance of these problems is so obvious that the growing structure of the organization represents an interesting experiment.";

const Review = ({ name, city, date, rating, text, likes=0, dislikes=0 }) => (
  <div className="border-b border-gray-100 py-5">
    <div className="flex items-start justify-between gap-3 mb-1">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[13px] font-black text-gray-900">{name},</span>
        <span className="text-[12px] text-gray-500">{city},</span>
        <span className="text-[12px] text-gray-400">{date}</span>
        <Stars rating={rating} size={13}/>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <ThumbUp init={likes}/>
        <ThumbDown init={dislikes}/>
      </div>
    </div>
    <p className="text-[12.5px] text-gray-600 leading-relaxed">{text}</p>
  </div>
);

const REVIEWS = [
  { name:"Liana", city:"Moscow", date:"7.5 hours", rating:5 },
  { name:"Liana", city:"Moscow", date:"7.5 hours", rating:5 },
  { name:"Liana", city:"Moscow", date:"7.5 hours", rating:5 },
  { name:"Liana", city:"Moscow", date:"7.5 hours", rating:5 },
  { name:"Liana", city:"Moscow", date:"7.5 hours", rating:5 },
  { name:"Liana", city:"Moscow", date:"7.5 hours", rating:5 },
  { name:"Liana", city:"Moscow", date:"7.5 hours", rating:5 },
];

const SORT_OPTS = ["Popular", "Most recent", "By rating"];
const PAGES = [1,2,3,4,"...",37];

export default function Seventhbanner1() {
  const [sort,      setSort]      = useState("Popular");
  const [page,      setPage]      = useState(1);
  const [expanded,  setExpanded]  = useState(false);
  const [formRating,setFormRating]= useState(4);
  const [name,      setName]      = useState("");
  const [email,     setEmail]     = useState("");
  const [msg,       setMsg]       = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && msg) {
      setSubmitted(true);
      setTimeout(()=>setSubmitted(false),2000);
      setName(""); setEmail(""); setMsg("");
    }
  };

  const visibleReviews = expanded ? REVIEWS : REVIEWS.slice(0,5);

  return (
    <section className="w-full bg-white px-4 py-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .rp-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="rp-root max-w-screen-xl mx-auto">

        {/* ── Page title ── */}
        <h1 className="text-[22px] font-black text-gray-900 mb-5">Reviews about us</h1>

        {/* ── Sort bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">Sort by:</span>
            {SORT_OPTS.map(opt => (
              <button key={opt} onClick={() => setSort(opt)}
                className={`px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all ${sort===opt ? "bg-[#26c6bc] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {opt}
              </button>
            ))}
          </div>
          {/* Pagination top */}
          <div className="flex items-center gap-1">
            {PAGES.map((p,i) => (
              p==="..." ? (
                <span key={i} className="w-7 h-7 flex items-center justify-center text-[12px] text-gray-400">···</span>
              ) : (
                <button key={p} onClick={()=>setPage(p)}
                  className={`w-7 h-7 rounded-lg text-[11px] font-bold transition-all ${page===p ? "bg-[#26c6bc] text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
                  {p}
                </button>
              )
            ))}
          </div>
        </div>

        {/* ── Main grid: sidebar + reviews ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start">

          {/* ── LEFT: Rating summary ── */}
          <aside className="flex flex-col gap-4 lg:sticky lg:top-4">
            {/* Average score box */}
            <div className="border border-gray-100 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-[11px] text-gray-500 mb-1">Average rating<br/>of the pharmacy</p>
              <p className="text-[42px] font-black text-gray-900 leading-none my-1">4.8</p>
              <Stars rating={5} size={16}/>
              <p className="text-[10px] text-gray-400 mt-2">Overall rating based on 4248<br/>reviews from buyers</p>
              <button className="mt-3 w-full border border-[#26c6bc] text-[#26c6bc] text-[12px] font-bold rounded-xl py-2 hover:bg-[#26c6bc] hover:text-white transition-colors">
                Leave a Review
              </button>
            </div>

            {/* Star breakdown */}
            <div className="flex flex-col gap-2 px-1">
              {[
                { stars:5, count:471 },
                { stars:4, count:30  },
                { stars:3, count:29  },
                { stars:2, count:27  },
                { stars:1, count:12  },
              ].map(r => <RatingBar key={r.stars} {...r} max={471}/>)}
            </div>
          </aside>

          {/* ── RIGHT: Reviews list ── */}
          <div>
            {visibleReviews.map((r,i) => (
              <Review key={i} {...r} text={LOREM} likes={0} dislikes={0}/>
            ))}

            {/* Load more */}
            {!expanded && (
              <button onClick={()=>setExpanded(true)}
                className="mt-4 flex items-center gap-2 text-[#26c6bc] text-[12px] font-bold hover:underline">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
                Show all reviews
              </button>
            )}

            {/* ── Leave a review form ── */}
            <div className="mt-8 border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[15px] font-black text-gray-900 mb-3">Leave a Review</h3>

              {/* Star picker */}
              <div className="mb-3">
                <StarPicker value={formRating} onChange={setFormRating}/>
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input value={name} onChange={e=>setName(e.target.value)}
                  placeholder="Your name"
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-700 placeholder-gray-400 outline-none focus:border-[#26c6bc] transition-colors"/>
                <input value={email} onChange={e=>setEmail(e.target.value)}
                  placeholder="Your e-mail"
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-700 placeholder-gray-400 outline-none focus:border-[#26c6bc] transition-colors"/>
              </div>

              {/* Textarea */}
              <textarea value={msg} onChange={e=>setMsg(e.target.value)}
                placeholder="Write your comment here, it is important..."
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-700 placeholder-gray-400 outline-none focus:border-[#26c6bc] transition-colors resize-none mb-3"/>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button onClick={handleSubmit}
                  className={`rounded-full px-8 py-2.5 font-bold text-white text-[13px] transition-all active:scale-95 ${submitted?"bg-green-600":"bg-[#26c6bc] hover:bg-[#1aada4]"}`}>
                  {submitted ? "Sent!" : "Submit"}
                </button>
                <p className="text-[11px] text-gray-400">
                  By clicking the button, you agree to the{" "}
                  <span className="text-[#26c6bc] underline cursor-pointer">processing of personal data</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
