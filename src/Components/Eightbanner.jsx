// import { useState, useRef } from "react";

// /* ─── Star Rating ─── */
// const Stars = ({ count = 4 }) => (
//   <span className="flex gap-0.5">
//     {Array.from({ length: 5 }).map((_, i) => (
//       <svg key={i} width="13" height="13" viewBox="0 0 24 24"
//         fill={i < count ? "#f59e0b" : "#e5e7eb"}>
//         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//       </svg>
//     ))}
//   </span>
// );

// /* ─── Cart icon ─── */
// const CartIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
//     stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
//     <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
//   </svg>
// );

// /* ─── ChevronLeft / Right ─── */
// const ChevronLeft = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="15 18 9 12 15 6" />
//   </svg>
// );
// const ChevronRight = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="9 18 15 12 9 6" />
//   </svg>
// );

// /* ─── Product images (colored placeholder boxes matching screenshot palette) ─── */
// const productImages = [
//   // Row 1
//   {
//     bg: "bg-sky-50",
//     content: (
//       <div className="flex flex-col items-center justify-center h-full gap-1 px-2">
//         <div className="text-[10px] font-black text-blue-700 tracking-tight text-center">БИЦИКЛОЛ<br/><span className="font-normal text-[8px]">Таблетки</span></div>
//         <div className="w-16 h-8 bg-blue-200 rounded flex items-center justify-center">
//           <div className="w-12 h-5 bg-blue-400 rounded-sm" />
//         </div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-yellow-50",
//     content: (
//       <div className="flex items-center justify-center h-full px-2">
//         <div className="text-center">
//           <div className="text-[11px] font-black italic text-yellow-700">femibion</div>
//           <div className="text-[7px] text-yellow-600 font-semibold">NATALCARE</div>
//           <div className="w-10 h-10 rounded-full bg-yellow-300 mx-auto mt-1 flex items-center justify-center">
//             <div className="w-6 h-6 bg-yellow-400 rounded-full" />
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-red-50",
//     content: (
//       <div className="flex flex-col items-center justify-center h-full gap-1">
//         <div className="text-[10px] font-black text-red-700 tracking-tight">БИФИФОРМ</div>
//         <div className="text-[7px] text-red-500">Лечение диарей</div>
//         <div className="w-8 h-8 bg-red-300 rounded-full flex items-center justify-center">
//           <div className="w-5 h-5 bg-red-500 rounded-full" />
//         </div>
//         <div className="text-[8px] font-black text-gray-600">30</div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-indigo-50",
//     content: (
//       <div className="flex flex-col items-center justify-center h-full gap-1 px-2">
//         <div className="text-[10px] font-black text-indigo-700 text-center">Детрагель</div>
//         <div className="w-full h-8 bg-indigo-200 rounded flex items-center justify-center">
//           <div className="w-14 h-4 bg-indigo-400 rounded-sm" />
//         </div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-green-50",
//     content: (
//       <div className="flex flex-col items-center justify-center h-full gap-1 px-2">
//         <div className="text-[9px] font-black text-green-800">Гептрал</div>
//         <div className="text-[6px] text-green-600 text-center leading-tight">для восстановления<br/>печени</div>
//         <div className="w-8 h-8 bg-green-300 rounded-full flex items-center justify-center">
//           <div className="w-5 h-5 bg-green-500 rounded-full" />
//         </div>
//       </div>
//     ),
//   },
//   // Row 2
//   {
//     bg: "bg-green-50",
//     content: (
//       <div className="flex flex-col items-center justify-center h-full gap-1 px-2">
//         <div className="text-[9px] font-black text-green-800">Гептрал</div>
//         <div className="text-[6px] text-green-600 text-center leading-tight">для восстановления<br/>печени</div>
//         <div className="w-8 h-8 bg-green-300 rounded-full flex items-center justify-center">
//           <div className="w-5 h-5 bg-green-500 rounded-full" />
//         </div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-indigo-50",
//     content: (
//       <div className="flex flex-col items-center justify-center h-full gap-1 px-2">
//         <div className="text-[10px] font-black text-indigo-700 text-center">Детрагель</div>
//         <div className="w-full h-8 bg-indigo-200 rounded flex items-center justify-center">
//           <div className="w-14 h-4 bg-indigo-400 rounded-sm" />
//         </div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-yellow-50",
//     content: (
//       <div className="flex items-center justify-center h-full px-2">
//         <div className="text-center">
//           <div className="text-[11px] font-black italic text-yellow-700">femibion</div>
//           <div className="text-[7px] text-yellow-600 font-semibold">NATALCARE</div>
//           <div className="w-10 h-10 rounded-full bg-yellow-300 mx-auto mt-1 flex items-center justify-center">
//             <div className="w-6 h-6 bg-yellow-400 rounded-full" />
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-sky-50",
//     content: (
//       <div className="flex flex-col items-center justify-center h-full gap-1 px-2">
//         <div className="text-[10px] font-black text-blue-700 tracking-tight text-center">БИЦИКЛОЛ<br/><span className="font-normal text-[8px]">Таблетки</span></div>
//         <div className="w-16 h-8 bg-blue-200 rounded flex items-center justify-center">
//           <div className="w-12 h-5 bg-blue-400 rounded-sm" />
//         </div>
//       </div>
//     ),
//   },
//   {
//     bg: "bg-red-50",
//     content: (
//       <div className="flex flex-col items-center justify-center h-full gap-1">
//         <div className="text-[10px] font-black text-red-700 tracking-tight">БИФИФОРМ</div>
//         <div className="text-[7px] text-red-500">Лечение диарей</div>
//         <div className="w-8 h-8 bg-red-300 rounded-full flex items-center justify-center">
//           <div className="w-5 h-5 bg-red-500 rounded-full" />
//         </div>
//         <div className="text-[8px] font-black text-gray-600">30</div>
//       </div>
//     ),
//   },
// ];

// /* ─── Product data ─── */
// const products = Array.from({ length: 10 }, (_, i) => ({
//   id: i + 1,
//   inStock: i !== 0 && i !== 5, // cards 1 & 6 are "Not in stock" (0-indexed)
//   name: "Velson film-coated tablets 3 mg, 30 pcs.",
//   brand: "Lirina",
//   qty: "10 pcs",
//   code: "153249",
//   price: "41 108",
//   oldPrice: "49 999",
//   stars: 4,
//   img: productImages[i],
// }));

// /* ─── Single product card ─── */
// const ProductCard = ({ product }) => (
//   <div className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col overflow-hidden group cursor-pointer">
//     {/* Image area */}
//     <div className={`relative ${product.img.bg} h-[140px] flex items-center justify-center`}>
//       {/* Deal of the day badge */}
//       <span className="absolute top-2 left-2 bg-[#26c6bc] text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap z-10">
//         Deal of the Day
//       </span>
//       <div className="w-full h-full flex items-center justify-center p-3">
//         {product.img.content}
//       </div>
//     </div>

//     {/* Content */}
//     <div className="flex flex-col flex-1 p-3 gap-1.5">
//       {/* Stock + Stars */}
//       <div className="flex items-center justify-between gap-1 flex-wrap">
//         <span className={`text-[10px] font-bold ${product.inStock ? "text-[#26c6bc]" : "text-red-500"}`}>
//           {product.inStock ? "In Stock" : "Out of Stock"}
//         </span>
//         <Stars count={product.stars} />
//       </div>

//       {/* Product name */}
//       <p className="text-[12px] font-bold text-gray-800 leading-snug line-clamp-2">
//         {product.name}
//       </p>

//       {/* Meta info */}
//       <ul className="flex flex-col gap-0.5 mt-0.5">
//         {[
//           { label: "Brand", value: product.brand },
//           { label: "Qty per pack", value: product.qty },
//           { label: "Item code", value: product.code },
//         ].map((m) => (
//           <li key={m.label} className="flex items-center gap-1.5 text-[10.5px] text-gray-400 font-medium">
//             <span className="w-1 h-1 rounded-full bg-[#26c6bc] shrink-0" />
//             <span className="text-gray-400">{m.label}:</span>
//             <span className="text-gray-500 font-semibold">{m.value}</span>
//           </li>
//         ))}
//       </ul>

//       {/* Price + Cart */}
//       <div className="flex items-center justify-between mt-auto pt-2 gap-2">
//         <div>
//           <p className="text-[17px] font-black text-gray-900 leading-none">
//             {product.price} <span className="text-[13px]">RUB.</span>
//           </p>
//           <p className="text-[11px] font-bold text-red-500 line-through mt-0.5">
//             {product.oldPrice} RUB.
//           </p>
//         </div>
//         {product.inStock && (
//           <button className="w-10 h-10 rounded-full bg-[#26c6bc] hover:bg-[#1aada4] flex items-center justify-center shrink-0 transition-colors shadow-sm">
//             <CartIcon />
//           </button>
//         )}
//       </div>
//     </div>
//   </div>
// );

// /* ─── Main export ─── */
// export default function MonthlyDeals() {
//   const scrollRef = useRef(null);

//   const scroll = (dir) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="w-full bg-white py-8 px-4">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
//         .deals-root * { font-family: 'Nunito', sans-serif; }
//         .line-clamp-2 { display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden; }
//         .products-scroll::-webkit-scrollbar { display: none; }
//         .products-scroll { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>

//       <div className="deals-root max-w-screen-xl mx-auto">
//         {/* ── Header ── */}
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl md:text-3xl font-black text-gray-900">
//             Deal of the Month
//           </h2>
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => scroll(-1)}
//               className="w-8 h-8 rounded-full border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
//             >
//               <ChevronLeft />
//             </button>
//             <button
//               onClick={() => scroll(1)}
//               className="w-8 h-8 rounded-full border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
//             >
//               <ChevronRight />
//             </button>
//           </div>
//         </div>

//         {/* ── Product grid ── */}
//         {/*
//           On lg+ : 5-column static grid (2 rows of 5 = 10 cards)
//           On md   : 3 columns
//           On sm   : 2 columns
//           On xs   : 1 column scrollable
//         */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {products.map((p) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// -------------------------------------------------------------------------//


import { useRef } from "react";

// ── Import your 5 product images ──
import product1 from "../assets/Images/month_product_1.svg";
import product2 from "../assets/Images/month_product_2.svg";
import product3 from "../assets/Images/month_product_3.svg";
import product4 from "../assets/Images/month_product_4.svg";
import product5 from "../assets/Images/month_product_5.svg";

/* ─── Star Rating ─── */
const Stars = ({ count = 4 }) => (
  <span className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24"
        fill={i < count ? "#f59e0b" : "#e5e7eb"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </span>
);

/* ─── Cart icon ─── */
const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

/* ─── ChevronLeft / Right ─── */
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ── 5 images cycle for 10 products ──
const productImgs = [
  product1, product2, product3, product4, product5,
  product5, product4, product2,product1 ,product3
];

/* ─── Product data ─── */
const products = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  inStock: i !== 0 && i !== 5,
  name: "Velson film-coated tablets 3 mg, 30 pcs.",
  brand: "Lirina",
  qty: "10 pcs",
  code: "153249",
  price: "41 108",
  oldPrice: "49 999 PY6",
  stars: 4,
  img: productImgs[i],
}));

/* ─── Single product card ─── */
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col overflow-hidden group cursor-pointer">

    {/* ── Image area ── */}
    <div className="relative bg-gray-50 h-[140px] flex items-center justify-center">
      {/* Deal of the day badge */}
      <span className="absolute top-2 left-2 bg-[#26c6bc] text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap z-10">
        Deal of the Day
      </span>
      {/* ✅ Real product image */}
      <img
        src={product.img}
        alt={product.name}
        className="h-[120px] w-auto object-contain"
      />
    </div>

    {/* ── Content ── */}
    <div className="flex flex-col flex-1 p-3 gap-1.5">
      {/* Stock + Stars */}
      <div className="flex items-center justify-between gap-1 flex-wrap">
        <span className={`text-[10px] font-bold ${product.inStock ? "text-[#26c6bc]" : "text-red-500"}`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
        <Stars count={product.stars} />
      </div>

      {/* Product name */}
      <p className="text-[12px] font-bold text-gray-800 leading-snug line-clamp-2">
        {product.name}
      </p>

      {/* Meta info */}
      <ul className="flex flex-col gap-0.5 mt-0.5">
        {[
          { label: "Brand",       value: product.brand },
          { label: "Qty per pack",value: product.qty   },
          { label: "Item code",   value: product.code  },
        ].map((m) => (
          <li key={m.label} className="flex items-center gap-1.5 text-[10.5px] text-gray-400 font-medium">
            <span className="w-1 h-1 rounded-full bg-[#26c6bc] shrink-0" />
            <span className="text-gray-400">{m.label}:</span>
            <span className="text-gray-500 font-semibold">{m.value}</span>
          </li>
        ))}
      </ul>

      {/* Price + Cart */}
      <div className="flex items-center justify-between mt-auto pt-2 gap-2">
        <div>
          <p className="text-[17px] font-black text-gray-900 leading-none">
            {product.price} <span className="text-[13px]">PY6.</span>
          </p>
          <p className="text-[11px] font-bold text-red-500 line-through mt-0.5">
            {product.oldPrice} PY6.
          </p>
        </div>
        {product.inStock && (
          <button className="w-10 h-10 rounded-full bg-[#26c6bc] hover:bg-[#1aada4] flex items-center justify-center shrink-0 transition-colors shadow-sm">
            <CartIcon />
          </button>
        )}
      </div>
    </div>
  </div>
);

/* ─── Main export ─── */
export default function Eightbanner() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-8 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .deals-root * { font-family: 'Nunito', sans-serif; }
        .line-clamp-2 { display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden; }
      `}</style>

      <div className="deals-root max-w-screen-xl mx-auto">
        {/* ── Header ── */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
           Favorites
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-8 h-8 rounded-full border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-8 h-8 rounded-full border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* ── Product grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}