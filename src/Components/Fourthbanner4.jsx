import { useState } from "react";

// ── Real product images from uploads ──────────────────────────────────────────
import bitsyklolImg from "../assets/Images/fourth_images(3)_1.jpg";  // Bitsyklol box
import femibionImg  from "../assets/Images/fourth_images(3)_2.jpg";  // Femibion bottle

// ─── Star Rating ──────────────────────────────────────────────────────────────
const Stars = ({ rating = 3.5 }) => (
  <span className="flex gap-0.5">
    {[1,2,3,4,5].map((s) => {
      const full = rating >= s;
      const half = !full && rating >= s - 0.5;
      return (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24">
          {half && (
            <defs>
              <linearGradient id={`hg${s}`}>
                <stop offset="50%" stopColor="#f59e0b"/>
                <stop offset="50%" stopColor="#e5e7eb"/>
              </linearGradient>
            </defs>
          )}
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={full ? "#f59e0b" : half ? `url(#hg${s})` : "#e5e7eb"}
          />
        </svg>
      );
    })}
  </span>
);

// ─── Cart Icon ────────────────────────────────────────────────────────────────
const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

// ─── Plus symbol ─────────────────────────────────────────────────────────────
const Plus = () => (
  <div className="flex items-center justify-center px-1 self-center flex-shrink-0">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
      stroke="#26c6bc" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  </div>
);

// ─── Equals symbol ────────────────────────────────────────────────────────────
const Equals = () => (
  <div className="flex items-center justify-center px-1 self-center flex-shrink-0">
    <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
      <line x1="2" y1="6"  x2="24" y2="6"  stroke="#26c6bc" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="2" y1="14" x2="24" y2="14" stroke="#26c6bc" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  </div>
);

// ─── Product mini-card ────────────────────────────────────────────────────────
const ProductMini = ({ img, name, inStock = true, rating = 3.5 }) => (
  <div className="flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden h-full">
    {/* Image area */}
    <div className="flex items-center justify-center bg-white px-5 py-4" style={{ height: 175 }}>
      <img
        src={img}
        alt={name}
        className="h-full w-auto object-contain"
      />
    </div>
    {/* Info area */}
    <div className="px-4 pb-4 pt-2 flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-1">
        <span className={`text-[11px] font-semibold ${inStock ? "text-[#26c6bc]" : "text-red-500"}`}>
          {inStock ? "In stock" : "Out of stock"}
        </span>
        <Stars rating={rating}/>
      </div>
      <p className="text-[13px] font-semibold text-gray-900 leading-snug">
        {name}
      </p>
    </div>
  </div>
);

// ─── Price + Cart card ────────────────────────────────────────────────────────
const PriceCard = () => {
  const [flash, setFlash] = useState(false);
  const handle = () => { setFlash(true); setTimeout(() => setFlash(false), 900); };

  return (
    <div
      className="flex flex-col justify-center bg-white rounded-2xl border border-gray-100 px-6 py-6 gap-3 flex-shrink-0"
      style={{ minWidth: 210 }}
    >
      {/* Together cheaper */}
      <p className="text-[13px] text-gray-400 font-medium">Together cheaper</p>

      {/* Prices */}
      <div className="-mt-1">
        <p className="text-[27px] font-black text-gray-900 leading-none">
          41 108 <span className="text-[17px] font-bold">py6.</span>
        </p>
        <p className="text-[13px] font-bold text-red-500 line-through mt-1">
          49 999 py6.
        </p>
      </div>

      {/* Add to cart — rounded pill button matching screenshot */}
      <button
        onClick={handle}
        className={`flex items-center justify-center gap-2 w-full rounded-full py-3.5 font-bold text-white text-[14px] tracking-wide transition-all duration-200 ${
          flash ? "bg-green-600 scale-95" : "bg-[#26c6bc] hover:bg-[#1aada4] active:scale-95"
        }`}
      >
        <CartIcon/>
        {flash ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Fourthbanner4() {
  return (
    <section className="w-full bg-white py-8 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .pay-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="pay-root max-w-screen-xl mx-auto">

        {/* ── Title ── */}
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
          Pay Attention
        </h2>

        {/* ── Main row: [Product1] + [Product2] = [PriceCard] ── */}
        <div className="flex flex-col sm:flex-row items-stretch gap-2">

          {/* Product 1 — Bitsyklol */}
          <div className="flex-1 min-w-0">
            <ProductMini
              img={bitsyklolImg}
              name="Bitsyklol tablets 25 mg, 15 pcs."
              inStock={true}
              rating={3.5}
            />
          </div>

          <Plus/>

          {/* Product 2 — Femibion */}
          <div className="flex-1 min-w-0">
            <ProductMini
              img={femibionImg}
              name="Femibion Natalcare 1 tablets, 60 pcs."
              inStock={true}
              rating={3.5}
            />
          </div>

          <Equals/>

          {/* Price + Cart */}
          <PriceCard/>

        </div>
      </div>
    </section>
  );
}
