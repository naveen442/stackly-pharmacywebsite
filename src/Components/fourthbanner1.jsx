
import { useState } from "react";
import singleImg from "../assets/Images/fouth_single_image.svg";
// ─── Inline dummy SVG images (no external imports needed) ─────────────────────

const THUMB_SVGS = [
  // 0 – Green Kreon medicine box
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><rect x="5" y="5" width="170" height="245" rx="10" fill="#4caf50"/><rect x="5" y="5" width="170" height="38" rx="10" fill="#003d6e"/><rect x="5" y="33" width="170" height="10" fill="#003d6e"/><text x="90" y="29" text-anchor="middle" fill="white" font-size="16" font-weight="900" font-family="Arial">a</text><rect x="18" y="50" width="144" height="155" rx="6" fill="white"/><circle cx="38" cy="60" r="9" fill="#4caf50" opacity="0.3"/><circle cx="66" cy="60" r="9" fill="#4caf50" opacity="0.3"/><circle cx="94" cy="60" r="9" fill="#4caf50" opacity="0.3"/><circle cx="122" cy="60" r="9" fill="#4caf50" opacity="0.3"/><circle cx="150" cy="60" r="9" fill="#4caf50" opacity="0.3"/><circle cx="38" cy="82" r="9" fill="#4caf50" opacity="0.3"/><circle cx="66" cy="82" r="9" fill="#4caf50" opacity="0.3"/><circle cx="94" cy="82" r="9" fill="#4caf50" opacity="0.3"/><circle cx="122" cy="82" r="9" fill="#4caf50" opacity="0.3"/><circle cx="150" cy="82" r="9" fill="#4caf50" opacity="0.3"/><circle cx="38" cy="104" r="9" fill="#4caf50" opacity="0.3"/><circle cx="66" cy="104" r="9" fill="#4caf50" opacity="0.3"/><circle cx="94" cy="104" r="9" fill="#4caf50" opacity="0.3"/><circle cx="122" cy="104" r="9" fill="#4caf50" opacity="0.3"/><circle cx="150" cy="104" r="9" fill="#4caf50" opacity="0.3"/><text x="90" y="130" text-anchor="middle" fill="#2e7d32" font-size="28" font-weight="900" font-style="italic" font-family="Arial">Kreon</text><text x="90" y="152" text-anchor="middle" fill="#2e7d32" font-size="16" font-weight="700" font-family="Arial">10000</text><text x="90" y="170" text-anchor="middle" fill="#388e3c" font-size="8" font-family="Arial">Pancreatin 10000 units</text><rect x="18" y="205" width="144" height="38" rx="5" fill="#f0f0f0"/><text x="90" y="218" text-anchor="middle" fill="#555" font-size="7" font-family="Arial">Digestive enzyme</text><text x="90" y="228" text-anchor="middle" fill="#555" font-size="7" font-family="Arial">preparation</text><text x="90" y="238" text-anchor="middle" fill="#777" font-size="5.5" font-family="Arial">20 enteric-coated capsules</text><rect x="8" y="224" width="30" height="20" rx="4" fill="#2e7d32"/><text x="23" y="238" text-anchor="middle" fill="white" font-size="9" font-weight="bold" font-family="Arial">20</text></svg>')}`,
  // 1 – Blue medicine bottle
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 110"><rect x="28" y="0" width="24" height="10" rx="4" fill="#1565c0" opacity=".6"/><rect x="14" y="10" width="52" height="85" rx="10" fill="#1976d2"/><rect x="20" y="22" width="40" height="40" rx="4" fill="white" opacity=".25"/><text x="40" y="48" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="Arial">MED</text><rect x="14" y="90" width="52" height="8" rx="4" fill="#0d47a1" opacity=".5"/></svg>')}`,
  // 2 – Pink blister pack
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 55"><rect x="2" y="2" width="86" height="51" rx="5" fill="#fce4ec" stroke="#e91e63" stroke-width="2"/><ellipse cx="13" cy="18" rx="8" ry="10" fill="#e91e63" opacity=".7"/><ellipse cx="34" cy="18" rx="8" ry="10" fill="#e91e63" opacity=".7"/><ellipse cx="55" cy="18" rx="8" ry="10" fill="#e91e63" opacity=".7"/><ellipse cx="76" cy="18" rx="8" ry="10" fill="#e91e63" opacity=".7"/><ellipse cx="13" cy="38" rx="8" ry="10" fill="#e91e63" opacity=".5"/><ellipse cx="34" cy="38" rx="8" ry="10" fill="#e91e63" opacity=".5"/><ellipse cx="55" cy="38" rx="8" ry="10" fill="#e91e63" opacity=".5"/><ellipse cx="76" cy="38" rx="8" ry="10" fill="#e91e63" opacity=".5"/></svg>')}`,
  // 3 – Orange tube
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 110"><rect x="7" y="0" width="16" height="8" rx="4" fill="#e65100" opacity=".6"/><rect x="5" y="8" width="20" height="75" rx="8" fill="#ff6d00" opacity=".85"/><polygon points="5,83 25,83 15,105" fill="#e65100" opacity=".7"/></svg>')}`,
  // 4 – Yellow pill sheet
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect x="5" y="5" width="70" height="70" rx="8" fill="#fff8e1" stroke="#f9a825" stroke-width="2"/><circle cx="20" cy="20" r="8" fill="#f9a825" opacity=".8"/><circle cx="40" cy="20" r="8" fill="#f9a825" opacity=".8"/><circle cx="60" cy="20" r="8" fill="#f9a825" opacity=".8"/><circle cx="20" cy="40" r="8" fill="#f9a825" opacity=".8"/><circle cx="40" cy="40" r="8" fill="#f9a825" opacity=".8"/><circle cx="60" cy="40" r="8" fill="#f9a825" opacity=".8"/><circle cx="20" cy="60" r="8" fill="#f9a825" opacity=".8"/><circle cx="40" cy="60" r="8" fill="#f9a825" opacity=".8"/><circle cx="60" cy="60" r="8" fill="#f9a825" opacity=".8"/></svg>')}`,
];

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  const crumbs = ["Home","Medicines","Enzyme preparations","Irritable bowel"];
  return (
    <nav className="flex items-center flex-wrap gap-1 text-[11px] text-gray-400 mb-2">
      {crumbs.map((c,i) => (
        <span key={c} className="flex items-center gap-1">
          {i > 0 && <span className="text-gray-300">›</span>}
          <span className={i === crumbs.length-1 ? "text-gray-500" : "text-[#26c6bc] cursor-pointer hover:underline"}>
            {c}
          </span>
        </span>
      ))}
    </nav>
  );
}

// ─── Star Rating ──────────────────────────────────────────────────────────────
function Stars({ rating = 3.5, count = 6 }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map(s => {
          const full = rating >= s;
          const half = !full && rating >= s - 0.5;
          return (
            <svg key={s} width="14" height="14" viewBox="0 0 24 24">
              {half && (
                <defs>
                  <linearGradient id={`hg${s}`}>
                    <stop offset="50%" stopColor="#f59e0b"/>
                    <stop offset="50%" stopColor="#d1d5db"/>
                  </linearGradient>
                </defs>
              )}
              <polygon
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                fill={full ? "#f59e0b" : half ? `url(#hg${s})` : "#d1d5db"}
              />
            </svg>
          );
        })}
      </div>
      <span className="text-[12px] text-gray-400 underline cursor-pointer">{count} reviews</span>
      <span className="text-[12px] text-[#26c6bc] font-medium">In stock</span>
      {/* <span className="text-[12px] text-gray-400 ml-auto">Article: 25563</span> */}
    </div>
  );
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────
const TABS = ["Main","Instructions","Variants","Reviews","Delivery","Pickup"];
function Tabs({ active, setActive }) {
  return (
    <div className="border-b border-gray-200 mb-5">
      <div className="flex overflow-x-auto" style={{scrollbarWidth:"none",msOverflowStyle:"none"}}>
        {TABS.map(tab => (
          <button key={tab} onClick={() => setActive(tab)}
            className={`flex-shrink-0 px-5 py-3 text-[11px] font-bold tracking-widest uppercase transition-colors border-b-2 -mb-px ${
              active === tab
                ? "border-[#26c6bc] text-[#26c6bc]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}>
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Thumbnail ────────────────────────────────────────────────────────────────
function Thumb({ idx, active, onClick }) {
  return (
    <div onClick={onClick}
      className={`w-[58px] h-[58px] rounded-lg border-2 cursor-pointer flex items-center justify-center flex-shrink-0 bg-white overflow-hidden transition-all ${
        active ? "border-[#26c6bc] shadow-sm" : "border-gray-200 hover:border-gray-300"
      }`}>
      <img src={THUMB_SVGS[idx]} alt={`thumb-${idx}`} className="w-full h-full object-contain p-1.5"/>
    </div>
  );
}

// ─── Main Product Image ───────────────────────────────────────────────────────
function MainImage({ thumbIdx }) {
  return (
    <div className="relative w-full max-w-[290px] mx-auto rounded-2xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center" style={{minHeight:280}}>
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        <span className="bg-[#26c6bc] text-white text-[9px] font-bold px-2 py-0.5 rounded-sm leading-tight">
          Deal of the day
        </span>
        <span className="bg-blue-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-sm flex items-center gap-1 leading-tight">
          <svg width="7" height="7" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
          Pickup only
        </span>
      </div>
      <img
        src={singleImg}
        alt="Kreon 10000"
        className="object-contain"
        style={{maxHeight:300, maxWidth:300, padding:"1rem"}}
      />
    </div>
  );
}

// ─── Characteristics ──────────────────────────────────────────────────────────
const CHARS = [
  { l:"Manufacturer",     v:"Abbott, USA"     },
  { l:"Active substance", v:"Pancreatin"      },
  { l:"Shelf life",       v:"Long shelf life" },
  { l:"Producer",         v:"Abbott, USA"     },
];

// ─── Quantity Selector ────────────────────────────────────────────────────────
function QtySelector({ qty, setQty }) {
  return (
    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
      <button onClick={() => setQty(Math.max(1, qty-1))}
        className="w-8 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-xl font-light border-r border-gray-200 transition-colors">
        −
      </button>
      <span className="w-9 h-9 flex items-center justify-center text-sm font-semibold text-gray-800">
        {qty}
      </span>
      <button onClick={() => setQty(qty+1)}
        className="w-8 h-9 flex items-center justify-center text-[#26c6bc] hover:bg-gray-50 text-xl font-light border-l border-gray-200 transition-colors">
        +
      </button>
    </div>
  );
}

// ─── Delivery + Storage Block ─────────────────────────────────────────────────
function DeliveryStorage() {
  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Delivery & Pickup */}
        <div>
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-2">
            Delivery & Pickup
          </h4>
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#f97316" strokeWidth="2" fill="#fff7ed"/>
                <line x1="12" y1="8" x2="12" y2="13" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1.2" fill="#f97316"/>
              </svg>
            </div>
            <div>
              <p className="text-[11px] text-orange-500 font-semibold leading-snug">Sold by prescription only</p>
              <p className="text-[10px] text-gray-400 leading-snug mt-0.5">
                Prescription items cannot be shipped by mail.
              </p>
            </div>
          </div>
        </div>

        {/* In Moscow */}
        <div>
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-2">
            Storage Conditions
          </h4>
          <div className="flex items-start gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="3" className="mt-0.5 flex-shrink-0">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <div>
              <p className="text-[11px] text-gray-700 font-semibold">In Moscow</p>
              <p className="text-[10px] text-gray-400 leading-snug">Delivery today, free from 500 rub.</p>
              <p className="text-[10px] text-gray-400 leading-snug">
                Pickup from pharmacy today, <span className="text-[#26c6bc] font-medium">free</span>
              </p>
            </div>
          </div>
        </div>

        {/* Outside MKAD */}
        <div className="flex items-start gap-2 sm:pt-[26px]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="3" className="mt-0.5 flex-shrink-0">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <div>
            <p className="text-[11px] text-gray-700 font-semibold">Outside MKAD</p>
            <p className="text-[10px] text-gray-400 leading-snug">Delivery today, free from 599 rub.</p>
            <p className="text-[10px] text-gray-400 leading-snug">
              Pickup from pharmacy today, <span className="text-[#26c6bc] font-medium">free</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ProductDetailPage() {
  const [activeTab,   setActiveTab]   = useState("Main");
  const [activeThumb, setActiveThumb] = useState(0);
  const [qty,         setQty]         = useState(1);
  const [wished,      setWished]      = useState(false);
  const [cartFlash,   setCartFlash]   = useState(false);

  const handleCart = () => {
    setCartFlash(true);
    setTimeout(() => setCartFlash(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'DM Sans', sans-serif; box-sizing: border-box; }
      `}</style>

      <div className="max-w-5xl mx-auto px-3 sm:px-5 py-5">

        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Product title */}
        <h1 className="text-lg sm:text-[22px] font-bold text-gray-900 mb-4 leading-snug">
          Kreon 10000, capsules gastroint. soluble 10000 units 20 pcs.
        </h1>

        {/* Navigation Tabs */}
        <Tabs active={activeTab} setActive={setActiveTab} />

        {/* ─── 3-column layout ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-[64px_1fr_248px] gap-4 items-start">

          {/* COL 1 – Thumbnail strip */}
          <div className="flex md:flex-col flex-row gap-2 flex-wrap">
            {THUMB_SVGS.map((_, i) => (
              <Thumb key={i} idx={i} active={activeThumb === i} onClick={() => setActiveThumb(i)} />
            ))}
          </div>

          {/* COL 2 – Image + Info */}
          <div className="flex flex-col gap-3">
            {/* Product image */}
            <MainImage thumbIdx={activeThumb} />

            {/* Ratings row */}
            <Stars />

            {/* Characteristics */}
            <div>
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-2">
                Characteristics
              </h3>
              <ul className="space-y-1.5">
                {CHARS.map(({ l, v }) => (
                  <li key={l} className="flex items-center gap-2 text-[12px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26c6bc] flex-shrink-0" />
                    <span className="text-gray-400">{l}:</span>
                    <span className="text-gray-600 font-medium">{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery & Storage */}
            <DeliveryStorage />
          </div>

          {/* COL 3 – Price Card */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3 sticky top-4">

              {/* Label */}
              <p className="text-[10px] text-gray-400 font-medium">Current price</p>

              {/* Old price (strikethrough) + wishlist in same row */}
              <div className="flex items-center justify-between -mt-1">
                <p className="text-[13px] text-red-400 line-through font-medium">10 000 000 rub.</p>
                <button onClick={() => setWished(w => !w)}
                  className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-red-300 transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24"
                    fill={wished ? "#ef4444" : "none"}
                    stroke={wished ? "#ef4444" : "#9ca3af"} strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>

              {/* Current price */}
              <p className="text-[21px] font-black text-gray-900 leading-tight -mt-1">
                9 999 999 <span className="text-[13px] font-bold">rub.</span>
              </p>

              {/* Qty + Add to Cart */}
              <div className="flex items-center gap-2">
                <QtySelector qty={qty} setQty={setQty} />
                <button onClick={handleCart}
                  className={`flex-1 text-white text-[11px] font-bold rounded-xl py-2.5 px-2 transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                    cartFlash ? "bg-green-600" : "bg-[#26c6bc] hover:bg-[#1aada4]"
                  }`}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 01-8 0"/>
                  </svg>
                  {cartFlash ? "Added!" : "Add to cart"}
                </button>
              </div>

              {/* Buy in 1 click */}
              <button className="w-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600 text-[11px] font-semibold rounded-xl py-2.5 transition-colors">
                Buy in 1 click
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
