// import howWork1 from "../assets/Images/How_We_work_1.svg";
// import howWork2 from "../assets/Images/How_we_work_2.svg";
// import howWork3 from "../assets/Images/How_we_work_3.svg";
// import howWork4 from "../assets/Images/How_we_work_4.svg";
 
// const steps = [
//   {
//     id: 1,
//     title: "Choose a Product",
//     desc: "Use the search to find the product you need",
//     icon: howWork1,
//   },
//   {
//     id: 2,
//     title: "Choose a Pharmacy",
//     desc: "Select the pharmacy that is most convenient for you to pick up the order",
//     icon: howWork2,
//   },
//   {
//     id: 3,
//     title: "Place Your Order",
//     desc: "Follow the instructions and complete the order placement",
//     icon: howWork3,
//   },
//   {
//     id: 4,
//     title: "Receive Your Order",
//     desc: "Pick up your order at the nearest pharmacy to you",
//     icon: howWork4,
//   },
// ];
 
// /* ─── Step number badge ─── */
// const StepBadge = ({ n }) => (
//   <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 text-[10px] font-bold text-gray-400 shrink-0 mt-0.5">
//     {n}
//   </span>
// );
 
// /* ─── Dashed arrow between steps (desktop only) ─── */
// const Arrow = () => (
//   <div className="hidden lg:flex items-center justify-center shrink-0 w-10 mt-4">
//     <svg width="32" height="14" viewBox="0 0 32 14" fill="none">
//       <path d="M1 7 H26" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round"/>
//       <path d="M22 3 L28 7 L22 11" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   </div>
// );
 
// export default function HowWeWork() {
//   return (
//     <section className="w-full bg-white py-10 px-4">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
//         .hww-root * { font-family: 'Nunito', sans-serif; }
//       `}</style>
 
//       <div className="hww-root max-w-screen-xl mx-auto">
 
//         {/* ── Title ── */}
//         <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10">
//           How Do We Work?
//         </h2>
 
//         {/* ── Steps row ── */}
//         <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-0">
//           {steps.map((step, idx) => (
//             <div key={step.id} className="flex flex-row lg:flex-col items-start gap-0 flex-1 min-w-0">
//               <div className="flex flex-row lg:flex-col items-start gap-4 lg:gap-3 flex-1 min-w-0">
 
//                 {/* ── Icon ── */}
//                 <div className="shrink-0">
//                   <img
//                     src={step.icon}
//                     alt={step.title}
//                     className="w-10 h-10 object-contain"
//                   />
//                 </div>
 
//                 {/* ── Text ── */}
//                 <div className="flex flex-col gap-1.5">
//                   {/* Number + Title */}
//                   <div className="flex items-start gap-2">
//                     <StepBadge n={step.id} />
//                     <p className="text-[13.5px] font-black text-gray-800 leading-snug">
//                       {step.title}
//                     </p>
//                   </div>
//                   {/* Description */}
//                   <p className="text-[12px] text-gray-400 font-medium leading-relaxed max-w-[200px]">
//                     {step.desc}
//                   </p>
//                 </div>
//               </div>
 
//               {/* ── Arrow (between steps, desktop only) ── */}
//               {idx < steps.length - 1 && <Arrow />}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import howWork1 from "../assets/Images/How_We_work_1.svg";
import howWork2 from "../assets/Images/How_we_work_2.svg";
import howWork3 from "../assets/Images/How_we_work_3.svg";
import howWork4 from "../assets/Images/How_we_work_4.svg";

const steps = [
  {
    id: 1,
    title: "Choose a Product",
    desc: "Use the search to find the product you need",
    icon: howWork1,
  },
  {
    id: 2,
    title: "Choose a Pharmacy",
    desc: "Select the pharmacy that is most convenient for you to pick up the order",
    icon: howWork2,
  },
  {
    id: 3,
    title: "Place Your Order",
    desc: "Follow the instructions and complete the order placement",
    icon: howWork3,
  },
  {
    id: 4,
    title: "Receive Your Order",
    desc: "Pick up your order at the nearest pharmacy to you",
    icon: howWork4,
  },
];

const StepBadge = ({ n }) => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 text-[10px] font-bold text-gray-400 shrink-0 mt-0.5">
    {n}
  </span>
);

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-10 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .hww-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="hww-root max-w-screen-xl mx-auto">

        {/* ── Title ── */}
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10">
          How Do We Work?
        </h2>

        {/* ── Steps row ── */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-row items-start gap-4 flex-1 min-w-0"
            >
              {/* ── Icon (left) ── */}
              <div className="shrink-0">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* ── Text (right) ── */}
              <div className="flex flex-col gap-1.5 min-w-0">
                <div className="flex items-start gap-2">
                  <StepBadge n={step.id} />
                  <p className="text-[13.5px] font-black text-gray-800 leading-snug">
                    {step.title}
                  </p>
                </div>
                <p className="text-[12px] text-gray-400 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}