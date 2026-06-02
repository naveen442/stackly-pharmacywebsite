// /* ─── Pharmacy Rating & Reviews Section ─── */

// const Stars = ({ count = 5, size = 14 }) => (
//   <span className="flex gap-0.5">
//     {Array.from({ length: 5 }).map((_, i) => (
//       <svg key={i} width={size} height={size} viewBox="0 0 24 24"
//         fill={i < count ? "#f59e0b" : "#e5e7eb"}>
//         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//       </svg>
//     ))}
//   </span>
// );

// const ChevronRightIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="9 18 15 12 9 6" />
//   </svg>
// );

// const reviews = [
//   {
//     id: 1,
//     name: "Liana",
//     city: "Moscow",
//     date: "25 July",
//     stars: 5,
//     text: "Due to a misunderstanding and my own inattentiveness, I bought the wrong product — they sorted it out and exchanged it without any unnecessary fuss. Low bow and thank you! Yours sincerely, a loyal customer.",
//   },
//   {
//     id: 2,
//     name: "Liana",
//     city: "Moscow",
//     date: "25 July",
//     stars: 4,
//     text: "We thank Victoria Sdobnova for all her qualities and wish her many years of life, as she helps people greatly, is always kind, explains everything and gives advice.",
//   },
//   {
//     id: 3,
//     name: "Liana",
//     city: "Moscow",
//     date: "25 July",
//     stars: 4,
//     text: "Thank you for the opportunity to buy medicines without leaving home. A special thank-you to the courier — the girl Yulia was very smiley, radiated great energy, was polite, and wished me a speedy recovery.",
//   },
// ];

// const ReviewCard = ({ review }) => (
//   <div className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
//     {/* Header */}
//     <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-2">
//       <p className="text-[13.5px] font-black text-gray-800">
//         {review.name},{" "}
//         <span className="font-semibold text-gray-700">{review.city},</span>{" "}
//         <span className="font-semibold text-gray-500">{review.date}</span>
//       </p>
//       <Stars count={review.stars} size={14} />
//     </div>
//     {/* Body */}
//     <p className="text-[12.5px] text-gray-500 leading-relaxed font-medium">
//       {review.text}
//     </p>
//   </div>
// );

// export default function PharmacyRating() {
//   return (
//     <section className="w-full bg-[#f7f8fa] py-10 px-4">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
//         .rating-root * { font-family: 'Nunito', sans-serif; }
//       `}</style>

//       <div className="rating-root max-w-screen-xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-6 items-stretch">

//           {/* ── LEFT: Rating card ── */}
//           <div className="w-full md:w-[240px] shrink-0">
//             <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-between gap-5 shadow-sm border border-gray-100">
//               {/* Score block */}
//               <div className="flex flex-col items-center gap-2 text-center">
//                 <p className="text-[14px] font-black text-gray-800 leading-snug">
//                   Average Pharmacy<br />Rating
//                 </p>
//                 <span className="text-[52px] font-black text-gray-900 leading-none tracking-tight">
//                   4.8
//                 </span>
//                 <Stars count={4} size={18} />
//               </div>

//               {/* Subtitle */}
//               <p className="text-[11.5px] text-gray-400 font-medium text-center leading-relaxed">
//                 Overall rating based on 4,349 reviews from our customers
//               </p>

//               {/* CTA button */}
//               <button className="w-full bg-[#26c6bc] hover:bg-[#1aada4] text-white text-[11px] font-black uppercase tracking-widest py-3 rounded-xl transition-colors">
//                 Leave a Review
//               </button>
//             </div>
//           </div>

//           {/* ── RIGHT: Reviews list ── */}
//           <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-5">
//             {reviews.map((r) => (
//               <ReviewCard key={r.id} review={r} />
//             ))}

//             {/* All reviews link */}
//             <div className="pt-1">
//               <button className="flex items-center gap-1.5 text-[#26c6bc] hover:text-[#1aada4] text-[12px] font-black uppercase tracking-wider transition-colors group">
//                 <span className="flex items-center gap-0.5">
//                   <ChevronRightIcon />
//                   <ChevronRightIcon />
//                 </span>
//                 All 4,349 Reviews
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




/* ─── Pharmacy Rating & Reviews Section ─── */

/* ─── Pharmacy Rating & Reviews Section ─── */

const Stars = ({ count = 5, size = 14 }) => (
  <span className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24"
        fill={i < count ? "#f59e0b" : "#e5e7eb"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </span>
);

const ChevronRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const reviews = [
  {
    id: 1,
    name: "Liana",
    city: "Moscow",
    date: "25 July",
    stars: 5,
    text: "Due to a misunderstanding and my own inattentiveness, I bought the wrong product — they sorted it out and exchanged it without any unnecessary fuss. Low bow and thank you! Yours sincerely, a loyal customer.",
  },
  {
    id: 2,
    name: "Liana",
    city: "Moscow",
    date: "25 July",
    stars: 4,
    text: "We thank Victoria Sdobnova for all her qualities and wish her many years of life, as she helps people greatly, is always kind, explains everything and gives advice.",
  },
  {
    id: 3,
    name: "Liana",
    city: "Moscow",
    date: "25 July",
    stars: 4,
    text: "Thank you for the opportunity to buy medicines without leaving home. A special thank-you to the courier — the girl Yulia was very smiley, radiated great energy, was polite, and wished me a speedy recovery.",
  },
];

const ReviewCard = ({ review }) => (
  <div className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
    {/* Header */}
    <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-2">
      <p className="text-[13.5px] font-black text-gray-800">
        {review.name},{" "}
        <span className="font-semibold text-gray-700">{review.city},</span>{" "}
        <span className="font-semibold text-gray-500">{review.date}</span>
      </p>
      <Stars count={review.stars} size={14} />
    </div>
    {/* Body */}
    <p className="text-[12.5px] text-gray-500 leading-relaxed font-medium">
      {review.text}
    </p>
  </div>
);

export default function PharmacyRating() {
  return (
    <section className="w-full bg-[#f7f8fa] py-10 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .rating-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="rating-root max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">

          {/* ── LEFT: Rating card ── */}
          <div className="w-full md:w-[320px] shrink-0">
            <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between gap-5 shadow-sm border border-gray-100">
              {/* Score block */}
              <div className="flex items-start justify-between gap-2">
                {/* Title - left */}
                <p className="text-[14px] font-black text-gray-800 leading-snug">
                  Average Pharmacy<br />Rating
                </p>
                {/* 4.8 + Stars stacked - right */}
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[52px] font-black text-gray-900 leading-none tracking-tight">
                    4.8
                  </span>
                  <Stars count={4} size={18} />
                </div>
              </div>

              {/* Subtitle - left aligned */}
              <p className="text-[11.5px] text-gray-400 font-medium leading-relaxed">
                Overall rating based on 4,349 reviews from our customers
              </p>

              {/* CTA button */}
              <button className="w-full bg-[#26c6bc] hover:bg-[#1aada4] text-white text-[11px] font-black uppercase tracking-widest py-3 rounded-xl transition-colors">
                Leave a Review
              </button>
            </div>
          </div>

          {/* ── RIGHT: Reviews list ── */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-5">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}

            {/* All reviews link */}
            <div className="pt-1">
              <button className="flex items-center gap-1.5 text-[#26c6bc] hover:text-[#1aada4] text-[12px] font-black uppercase tracking-wider transition-colors group">
                <span className="flex items-center gap-0.5">
                  <ChevronRightIcon />
                  <ChevronRightIcon />
                </span>
                All 4,349 Reviews
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
