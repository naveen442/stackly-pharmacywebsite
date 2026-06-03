// const features = [
//   {
//     id: "assortment",
//     title: "Assortment",
//     desc: "Equipment, furniture, dishes and inventory",
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect x="4" y="10" width="22" height="28" rx="2" stroke="#4CAF50" strokeWidth="2" fill="none"/>
//         <rect x="8" y="6" width="22" height="28" rx="2" stroke="#4CAF50" strokeWidth="2" fill="none"/>
//         <line x1="12" y1="16" x2="26" y2="16" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
//         <line x1="12" y1="21" x2="26" y2="21" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
//         <line x1="12" y1="26" x2="20" y2="26" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
//         <rect x="26" y="28" width="16" height="12" rx="1" stroke="#4CAF50" strokeWidth="2" fill="none"/>
//         <path d="M30 28V25a4 4 0 0 1 8 0v3" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
//       </svg>
//     ),
//   },
//   {
//     id: "delivery",
//     title: "Fast Delivery",
//     desc: "To any location across the country quickly",
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M8 34 C8 34 6 20 18 16" stroke="#E57373" strokeWidth="2" strokeLinecap="round" fill="none"/>
//         <path d="M18 16 L30 12 L38 20 L34 34" stroke="#E57373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//         <path d="M10 28 Q18 22 26 28 Q34 34 40 30" stroke="#E57373" strokeWidth="2" strokeLinecap="round" fill="none"/>
//         <circle cx="14" cy="36" r="3" stroke="#E57373" strokeWidth="2" fill="none"/>
//         <circle cx="34" cy="36" r="3" stroke="#E57373" strokeWidth="2" fill="none"/>
//         <path d="M6 38 Q10 32 14 33" stroke="#E57373" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//       </svg>
//     ),
//   },
//   {
//     id: "guarantee",
//     title: "Guarantee",
//     desc: "All products are certified",
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M24 6 L38 12 L38 24 C38 32 31 39 24 42 C17 39 10 32 10 24 L10 12 Z" stroke="#90CAF9" strokeWidth="2" fill="none" strokeLinejoin="round"/>
//         <polyline points="17,24 22,29 31,20" stroke="#90CAF9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     ),
//   },
//   {
//     id: "prices",
//     title: "Low Prices",
//     desc: "We strive to maintain the lowest prices",
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="30" cy="20" r="12" stroke="#FFA726" strokeWidth="2" fill="none"/>
//         <text x="30" y="24" textAnchor="middle" fontSize="11" fill="#FFA726" fontWeight="bold">₽</text>
//         <path d="M8 38 Q12 28 20 30 Q24 31 26 34" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" fill="none"/>
//         <ellipse cx="14" cy="36" rx="8" ry="5" stroke="#FFA726" strokeWidth="2" fill="none"/>
//         <path d="M10 33 Q14 30 18 33" stroke="#FFA726" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//       </svg>
//     ),
//   },
//   {
//     id: "reviews",
//     title: "4,349 Reviews",
//     desc: "We strive to maintain the lowest prices",
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect x="6" y="8" width="28" height="22" rx="4" stroke="#E57373" strokeWidth="2" fill="none"/>
//         <path d="M10 30 L6 38 L16 33" stroke="#E57373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//         <circle cx="34" cy="32" r="8" stroke="#E57373" strokeWidth="2" fill="white"/>
//         <path d="M31 32 L33 34 L37 30" stroke="#E57373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     ),
//   },
// ];

// export default function PharmacyFeatures() {
//   return (
//     <section className="w-full bg-white border-y border-gray-100">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');
//         .feat-root * { font-family: 'Nunito', sans-serif; }
//       `}</style>

//       <div className="feat-root max-w-screen-xl mx-auto px-4 py-5">
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-5 divide-x-0 lg:divide-x divide-gray-100">
//           {features.map((f, idx) => (
//             <div
//               key={f.id}
//               className={`flex items-start gap-3 ${
//                 idx !== 0 ? "lg:pl-4" : ""
//               }`}
//             >
//               {/* Icon */}
//               <div className="shrink-0 mt-0.5">{f.icon}</div>

//               {/* Text */}
//               <div>
//                 <p className="text-[13px] font-extrabold text-gray-800 leading-tight mb-0.5">
//                   {f.title}
//                 </p>
//                 <p className="text-[11.5px] text-gray-400 font-medium leading-snug">
//                   {f.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// ------------------------------------------------//

import feature1 from "../assets/Images/feature_1.svg";
import feature2 from "../assets/Images/feature_2.svg";
import feature3 from "../assets/Images/feature_3.svg";
import feature4 from "../assets/Images/feature-4.svg";
import feature5 from "../assets/Images/feature_5.svg";
 
const features = [
  {
    id: "assortment",
    title: "Assortment",
    desc: "Equipment, furniture, dishes and inventory",
    icon: feature1,
  },
  {
    id: "delivery",
    title: "Fast Delivery",
    desc: "To any location across the country quickly",
    icon: feature2,
  },
  {
    id: "guarantee",
    title: "Guarantee",
    desc: "All products are certified",
    icon: feature3,
  },
  {
    id: "prices",
    title: "Low Prices",
    desc: "We strive to maintain the lowest prices",
    icon: feature4,
  },
  {
    id: "reviews",
    title: "4,349 Reviews",
    desc: "We strive to maintain the lowest prices",
    icon: feature5,
  },
];
 
export default function Eightbanner3() {
  return (
    <section className="w-full bg-white border-y border-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');
        .feat-root * { font-family: 'Nunito', sans-serif; }
      `}</style>
 
      <div className="feat-root max-w-screen-xl mx-auto px-4 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-5 divide-x-0 lg:divide-x divide-gray-100">
          {features.map((f, idx) => (
            <div
              key={f.id}
              className={`flex items-start gap-3 ${idx !== 0 ? "lg:pl-4" : ""}`}
            >
              {/* ✅ Real SVG image */}
              <div className="shrink-0 mt-0.5">
                <img
                  src={f.icon}
                  alt={f.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
 
              {/* Text */}
              <div>
                <p className="text-[13px] font-extrabold text-gray-800 leading-tight mb-0.5">
                  {f.title}
                </p>
                <p className="text-[11.5px] text-gray-400 font-medium leading-snug">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}