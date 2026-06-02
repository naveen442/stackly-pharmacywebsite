import { useState } from "react";

// ── Import the real Kreon product image ──
import kreonImg from "../assets/Images/single_image.jpg";

/* ─── Star Rating ─── */
const Stars = ({ rating = 3.5 }) => (
  <span className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => {
      const full = rating >= s;
      const half = !full && rating >= s - 0.5;
      return (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24">
          {half && (
            <defs>
              <linearGradient id={`hg${s}`}>
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#e5e7eb" />
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

/* ─── Cart Icon ─── */
const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

/* ─── Product data — 4 cards exactly as in screenshot ─── */
const products = [
  {
    id: 1,
    inStock: true,
    name: "Kreon 10000, capsules gastroint. soluble 10000 units 20 pcs.",
    brand: "Lirina",
    qty: "10 pcs",
    code: "153249",
    price: "41 108",
    oldPrice: "49 999",
    rating: 3.5,
  },
  {
    id: 2,
    inStock: true,
    name: "Kreon 10000, tablets gastroint. soluble 10000 units 20 pcs.",
    brand: "Lirina",
    qty: "10 pcs",
    code: "153249",
    price: "41 108",
    oldPrice: "49 999",
    rating: 3.5,
  },
  {
    id: 3,
    inStock: true,
    name: "Kreon 10000, capsules gastroint. soluble 10000 units 20 pcs.",
    brand: "Lirina",
    qty: "10 pcs",
    code: "153249",
    price: "41 108",
    oldPrice: "49 999",
    rating: 3.5,
  },
  {
    id: 4,
    inStock: true,
    name: "Velson film-coated tablets 3 mg, 30 pcs.",
    brand: "Lirina",
    qty: "10 pcs",
    code: "153249",
    price: "41 108",
    oldPrice: "49 999",
    rating: 3.5,
  },
];

/* ─── Single product card ─── */
const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);

  const handleCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden cursor-pointer">

      {/* ── Product image (no badge, clean white bg) ── */}
      <div className="bg-white h-[180px] flex items-center justify-center px-4 py-3">
        <img
          src={kreonImg}
          alt={product.name}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* ── Card content ── */}
      <div className="flex flex-col flex-1 px-4 pb-4 pt-2 gap-2">

        {/* In Stock + Stars */}
        <div className="flex items-center justify-between gap-1">
          <span className={`text-[11px] font-semibold ${product.inStock ? "text-[#26c6bc]" : "text-red-500"}`}>
            {product.inStock ? "In stock" : "Out of stock"}
          </span>
          <Stars rating={product.rating} />
        </div>

        {/* Product name */}
        <p className="text-[13px] font-semibold text-gray-900 leading-snug" style={{minHeight:"2.8rem"}}>
          {product.name}
        </p>

        {/* Meta info */}
        <ul className="flex flex-col gap-1">
          {[
            { label: "Brand",        value: product.brand },
            { label: "Pack qty",     value: product.qty   },
            { label: "Item code",    value: product.code  },
          ].map((m) => (
            <li key={m.label} className="flex items-center gap-1.5 text-[11px] text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#26c6bc] shrink-0" />
              <span>{m.label}:</span>
              <span className="text-gray-500 font-medium">{m.value}</span>
            </li>
          ))}
        </ul>

        {/* Price + Cart button */}
        <div className="flex items-end justify-between mt-auto pt-3">
          <div>
            <p className="text-[20px] font-black text-gray-900 leading-none">
              {product.price}{" "}
              <span className="text-[14px] font-bold"> py6.</span>
            </p>
            <p className="text-[12px] font-semibold text-red-500 line-through mt-0.5">
              {product.oldPrice} py6.
            </p>
          </div>

          {product.inStock && (
            <button
              onClick={handleCart}
              className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                added
                  ? "bg-green-600 scale-90"
                  : "bg-[#26c6bc] hover:bg-[#1aada4] active:scale-90"
              }`}
            >
              <CartIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Main export ─── */
export default function Fourthbanner3() {
  return (
    <section className="w-full bg-white py-6 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .analogues-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="analogues-root max-w-screen-xl mx-auto">

        {/* ── Header: "Analogues  4" ── */}
        <div className="flex items-baseline gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            Analogues
          </h2>
          <span className="text-xl font-light text-gray-400">
            {products.length}
          </span>
        </div>

        {/* ── 4-column grid (responsive) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

      </div>
    </section>
  );
}
