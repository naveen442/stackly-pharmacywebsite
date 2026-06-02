import { useState } from "react";
import productImage from "../assets/Images/orel_image.svg";
import bannerImage from "../assets/Images/NiveaBanner.svg";
import product1 from "../assets/Images/niv_add.svg";
import product2 from "../assets/Images/niv_2.svg";
import product3 from "../assets/Images/niv_3.svg";

/* ─── Star Rating ─── */
const Stars = ({ count = 5 }) => (
  <span className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 24 24"
        fill={i < count ? "#f59e0b" : "#e5e7eb"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </span>
);

/* ─── HIT badge ─── */
const Hit = () => (
  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-black uppercase px-1.5 py-0.5 rounded leading-none tracking-wide z-10">
    HIT
  </span>
);

/* ─── Hot product data ─── */
// const products = [
//   {
//     id: 1,
//     label: "Normoven",
//     bg: "bg-emerald-100",
//     name: "Nature's Bounty Hair, Skin, Nails, capsules 60 pcs",
//     price: "244",
//     stars: 5,
//   },
//   {
//     id: 2,
//     label: "Arbidol",
//     bg: "bg-teal-100",
//     name: "Arbidol® – treatment for ARVI and flu. 10 tablets",
//     price: "145",
//     stars: 5,
//   },
//   {
//     id: 3,
//     label: "Desmoxan",
//     bg: "bg-sky-100",
//     name: "Desmoxan – smoking cessation treatment, 100 tablets",
//     price: "444",
//     stars: 5,
//   },
// ];


const products = [
  {
    id: 1,
    img: product1,
    name: "Nature's Bounty Hair, Skin, Nails, capsules 60 pcs",
    price: "244 Py6",
    stars: 5,
  },
  {
    id: 2,
    img: product2,
    name: "Arbidol® – treatment for ARVI and flu. 10 tablets",
    price: "145 Py6",
    stars: 5,
  },
  {
    id: 3,
    img: product3,
    name: "Desmoxan – smoking cessation treatment, 100 tablets",
    price: "444 Py6",
    stars: 5,
  },
];
/* ─── Product card ─── */
const ProductCard = ({ p }) => (
  <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group">

    {/* ── Product image ── */}
    <div className="relative shrink-0 w-[60px] h-[60px] rounded-xl overflow-visible flex items-center justify-center">
      <Hit />
      <img
        src={p.img}
        alt={p.name}
        className="w-[60px] h-[60px] object-contain rounded-xl"
      />
    </div>

    {/* ── Info ── */}
    <div className="flex-1 min-w-0">
      <p className="text-[11.5px] text-gray-700 font-semibold leading-snug line-clamp-2 group-hover:text-[#1a2d6d] transition-colors">
        {p.name}
      </p>
      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
        <span className="text-sm font-black text-gray-900">
          {p.price} <span className="text-xs font-bold text-gray-500">.</span>
        </span>
        <Stars count={p.stars} />
      </div>
    </div>
  </div>
);
/* ─── Product card ─── */
// const ProductCard = ({ p }) => (
//   <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group">
//     <div className={`relative shrink-0 w-[60px] h-[60px] ${p.bg} rounded-xl flex flex-col items-center justify-center overflow-visible`}>
//       <Hit />
//       <span className="text-[8px] font-black tracking-tight text-center px-1 text-gray-700 leading-tight">
//         {p.label}
//       </span>
//       <div className="w-7 h-2 rounded-full bg-white/70 mt-1" />
//     </div>
//     <div className="flex-1 min-w-0">
//       <p className="text-[11.5px] text-gray-700 font-semibold leading-snug line-clamp-2 group-hover:text-[#1a2d6d] transition-colors">
//         {p.name}
//       </p>
//       <div className="flex items-center gap-2 mt-1.5 flex-wrap">
//         <span className="text-sm font-black text-gray-900">
//           {p.price} <span className="text-xs font-bold text-gray-500">rub.</span>
//         </span>
//         <Stars count={p.stars} />
//       </div>
//     </div>
//   </div>
// );

/* ─── Oral-B Banner ─── */
// const OralBBanner = () => (
//   <div className="relative h-full w-full bg-[#f0f2f8] rounded-3xl overflow-hidden flex items-center px-8 md:px-12 gap-4 min-h-[360px]">
//     {/* soft circle */}
//     <div className="absolute right-[28%] top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/50 pointer-events-none" />

//     {/* ── Left text ── */}
//     <div className="relative z-10 max-w-[210px] shrink-0">
//       <h2 className="font-black text-[#1a2d6d] leading-tight">
//         <span className="text-[26px] md:text-[30px]">Oral-B Vitality</span>
//         <br />
//         <span className="text-[16px] md:text-[18px] font-bold">Electric Toothbrush</span>
//       </h2>
//       <p className="text-[11px] text-gray-400 leading-relaxed mt-3 mb-6">
//         Clinically proven that an electric toothbrush cleans teeth more effectively
//         compared to a regular manual toothbrush.
//       </p>
//       <button className="inline-flex items-center gap-2 bg-[#1a2d6d] hover:bg-[#0f1f52] text-white text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-full transition-colors group whitespace-nowrap">
//         Go to Catalogue
//         <span className="group-hover:translate-x-1 transition-transform">→</span>
//       </button>
//     </div>

//     {/* ── Product art ── */}
//     <div className="relative flex items-end justify-center flex-1 h-full pb-8 gap-3 z-10">
//       {/* Box */}
//       <div
//         className="w-[82px] h-[160px] rounded-xl shadow-2xl relative overflow-hidden flex flex-col items-center justify-center gap-1 px-2"
//         style={{ background: "linear-gradient(155deg,#2c4fc0 0%,#1a2d6d 55%,#0e1d48 100%)" }}
//       >
//         <div className="absolute top-0 inset-x-0 h-10 bg-white/10 rounded-t-xl" />
//         <span className="text-white font-black text-[15px] tracking-tight z-10">Oral·B</span>
//         <span className="text-blue-200 text-[7px] font-bold uppercase tracking-widest z-10">Vitality</span>
//         <span className="text-white text-[11px] font-black z-10">100</span>
//         <div className="w-9 h-9 rounded-full bg-white/10 border border-blue-300 flex items-center justify-center z-10 mt-1">
//           <div className="w-4 h-4 rounded-full bg-blue-400" />
//         </div>
//         <span className="text-[6px] text-blue-200 font-semibold uppercase tracking-wider z-10 mt-1">Whiteⓡ</span>
//       </div>

//       {/* Brush */}
//       <div
//         className="w-8 h-[185px] rounded-full shadow-xl flex flex-col items-center pt-2 gap-1.5"
//         style={{
//           background: "linear-gradient(180deg,#f9f9f9 0%,#e2e2e2 100%)",
//           border: "1px solid #ccc",
//         }}
//       >
//         <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center">
//           <div className="w-3.5 h-3.5 rounded-full bg-gray-200" />
//         </div>
//         <div className="w-4 h-12 rounded-full bg-gray-300" />
//         <div className="w-3.5 h-3.5 rounded-full bg-[#2243a8] mt-1" />
//         <div className="flex-1" />
//         <div className="w-3.5 h-3.5 rounded-full bg-gray-200 mb-2" />
//       </div>
//     </div>
//   </div>
// );

const OralBBanner = () => (
  <div className="relative h-full w-full bg-[#f0f2f8] rounded-3xl overflow-hidden flex items-center px-8 md:px-12 gap-4 min-h-[360px]">
    {/* soft circle */}
    <div className="absolute right-[28%] top-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none" />

    {/* ── Left text ── */}
    <div className="relative z-10 max-w-[210px] shrink-0">
      <h2 className="font-black text-[#1a2d6d] leading-tight">
        <span className="text-[26px] md:text-[30px]">Oral-B Vitality</span>
        <br />
        <span className="text-[16px] md:text-[18px] font-bold">Electric Toothbrush</span>
      </h2>
      <p className="text-[11px] text-gray-400 leading-relaxed mt-3 mb-6">
        Clinically proven that an electric toothbrush cleans teeth more effectively
        compared to a regular manual toothbrush.
      </p>
      <button className="inline-flex items-center gap-2 bg-[#1a2d6d] hover:bg-[#0f1f52] text-white text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-full transition-colors group whitespace-nowrap">
        Go to Catalogue
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>

    {/* ── Product image (your SVG) ── */}
    <div className="relative flex items-center justify-center flex-1 h-full z-10">
      <img
        src={productImage}
        alt="Product"
        className="h-[300px] w-auto object-contain drop-shadow-xl"
      />
    </div>
  </div>
);
/* ─── Nivea Banner ─── */
// const NiveaBanner = () => (
//   <div
//     className="relative h-full w-full rounded-3xl overflow-hidden flex flex-col items-center justify-between py-8 px-5 min-h-[360px]"
//     style={{ background: "linear-gradient(155deg,#eb546b 0%,#d0405a 100%)" }}
//   >
//     {/* Top text */}
//     <div className="text-center z-10">
//       <p className="text-white/80 text-xs font-semibold mb-1 tracking-wide">Moisturising Face Cream</p>
//       <h2 className="text-white text-[32px] font-black tracking-tight leading-none">Nivea Care</h2>
//     </div>

//     {/* Jar */}
//     <div className="relative z-10 my-2 flex flex-col items-center">
//       {/* lid */}
//       <div className="w-[128px] h-7 rounded-full bg-white shadow-lg flex items-center justify-center">
//         <div className="w-24 h-4 rounded-full bg-gray-100 flex items-center justify-center">
//           <span className="text-[7px] font-black text-[#003399]">NIVEA · CARE</span>
//         </div>
//       </div>
//       {/* body */}
//       <div
//         className="w-[148px] h-[95px] flex flex-col items-center justify-center shadow-2xl border-t-0"
//         style={{
//           background: "linear-gradient(180deg,#fff 55%,#fde8ed 100%)",
//           borderRadius: "0 0 50% 50% / 0 0 40px 40px",
//           borderTop: "3px solid #fff",
//         }}
//       >
//         <div className="w-11 h-11 rounded-full bg-[#003399] flex items-center justify-center shadow-inner mt-1">
//           <span className="text-white text-[7px] font-black text-center leading-tight px-0.5">NIVEA</span>
//         </div>
//         <div className="text-[8px] font-black text-[#eb546b] uppercase tracking-widest mt-1">CARE</div>
//         <div className="text-[6px] text-gray-400 text-center px-3 leading-tight">for sensitive skin</div>
//       </div>
//     </div>

//     {/* CTA */}
//     <button className="z-10 border-2 border-white/80 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-white hover:text-[#eb546b] transition-all flex items-center gap-2 group shadow-lg whitespace-nowrap">
//       Go to Catalogue
//       <span className="group-hover:translate-x-1 transition-transform">→</span>
//     </button>
//   </div>
// );

const NiveaBanner = () => (
  <div
    className="relative h-full w-full rounded-3xl overflow-hidden flex flex-col items-center justify-between py-8 px-5 min-h-[360px]"
    style={{ background: "linear-gradient(155deg,#eb546b 0%,#d0405a 100%)" }}
  >
    {/* Top text */}
    <div className="text-center z-10">
      <p className="text-white/80 text-xs font-semibold mb-1 tracking-wide">
        Moisturising Face Cream
      </p>
      <h2 className="text-white text-[32px] font-black tracking-tight leading-none">
        Nivea Care
      </h2>
    </div>

    {/* ── Your SVG image (replaces old jar) ── */}
    <div className="relative z-10 flex items-center justify-center flex-1 w-full">
      <img
        src={bannerImage}
        alt="Nivea Care"
        className="h-[220px] w-auto object-contain drop-shadow-2xl"
      />
    </div>

    {/* CTA */}
    <button className="z-10 border-2 border-white/80 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-white hover:text-[#eb546b] transition-all flex items-center gap-2 group shadow-lg whitespace-nowrap">
      Go to Catalogue
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </button>
  </div>
);
/* ─── Page export ─── */
export default function PharmacyBanner() {
  return (
    <section className="w-full bg-[#f0f2f8] py-8 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        .pb-root, .pb-root * { font-family: 'Nunito', sans-serif; box-sizing: border-box; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="pb-root max-w-screen-xl mx-auto">
        {/*
          3-col layout matching the screenshot:
          [ Oral-B wide ] [ Nivea ] [ Products ]

          Breakpoints:
          - mobile  : 1 col (stack all)
          - md      : 2 col (Oral-B + Nivea on row 1, products full-width row 2)
          - xl      : 3 col side by side
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_300px_270px] gap-4 items-stretch">

          {/* 1 – Oral-B */}
          <div className="md:col-span-1 xl:col-span-1">
            <OralBBanner />
          </div>

          {/* 2 – Nivea */}
          <div className="md:col-span-1 xl:col-span-1">
            <NiveaBanner />
          </div>

          {/* 3 – Hot products */}
          <div className="md:col-span-2 xl:col-span-1 flex flex-col gap-6">
            {/* <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">
              🔥 Hot Deals
            </p> */}
            {products.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
