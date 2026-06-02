// const ChevronRight = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="9 18 15 12 9 6" />
//   </svg>
// );

// /* Pill / medicine themed SVG illustrations matching each card's photo palette */
// const CardImage1 = () => (
//   <div className="w-full h-full bg-[#3a2c25] flex items-center justify-center relative overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-to-br from-[#5c3d2e] to-[#2a1f18]" />
//     {/* hand silhouette */}
//     <svg width="160" height="130" viewBox="0 0 160 130" className="relative z-10">
//       <ellipse cx="80" cy="90" rx="55" ry="35" fill="#c8956c" opacity="0.8"/>
//       <ellipse cx="80" cy="78" rx="48" ry="28" fill="#d4a07a"/>
//       {/* pills in hand */}
//       <ellipse cx="62" cy="72" rx="11" ry="6" fill="white" transform="rotate(-20 62 72)"/>
//       <ellipse cx="62" cy="72" rx="5.5" ry="6" fill="#ffd6d6" transform="rotate(-20 62 72)"/>
//       <ellipse cx="78" cy="68" rx="10" ry="5.5" fill="#ffe082" transform="rotate(10 78 68)"/>
//       <ellipse cx="78" cy="68" rx="5" ry="5.5" fill="#fff176" transform="rotate(10 78 68)"/>
//       <ellipse cx="94" cy="70" rx="10" ry="5.5" fill="#b2dfdb" transform="rotate(-5 94 70)"/>
//       <ellipse cx="94" cy="70" rx="5" ry="5.5" fill="#e0f2f1" transform="rotate(-5 94 70)"/>
//       <ellipse cx="72" cy="58" rx="8" ry="4.5" fill="#ef9a9a" transform="rotate(15 72 58)"/>
//     </svg>
//   </div>
// );

// const CardImage2 = () => (
//   <div className="w-full h-full bg-[#1c1c1e] flex items-center justify-center relative overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-to-br from-[#2d2d30] to-[#111113]" />
//     <svg width="170" height="130" viewBox="0 0 170 130" className="relative z-10">
//       {/* scattered colorful pills */}
//       {[
//         { x:40, y:55, rx:18, ry:10, r:-25, c1:"#ef5350", c2:"#ff8a80" },
//         { x:75, y:40, rx:20, ry:11, r:15,  c1:"#ff7043", c2:"#ffccbc" },
//         { x:110,y:50, rx:16, ry:9,  r:-10, c1:"#66bb6a", c2:"#c8e6c9" },
//         { x:55, y:78, rx:17, ry:10, r:20,  c1:"#ffd740", c2:"#fff9c4" },
//         { x:90, y:72, rx:15, ry:8,  r:-5,  c1:"#42a5f5", c2:"#bbdefb" },
//         { x:130,y:65, rx:14, ry:8,  r:30,  c1:"#ab47bc", c2:"#e1bee7" },
//         { x:35, y:95, rx:13, ry:7,  r:-15, c1:"#26c6da", c2:"#b2ebf2" },
//         { x:115,y:88, rx:16, ry:9,  r:10,  c1:"#ec407a", c2:"#f8bbd9" },
//         { x:70, y:100,rx:12, ry:7,  r:25,  c1:"#8d6e63", c2:"#d7ccc8" },
//       ].map((p, i) => (
//         <g key={i} transform={`rotate(${p.r} ${p.x} ${p.y})`}>
//           <ellipse cx={p.x} cy={p.y} rx={p.rx} ry={p.ry} fill={p.c1}/>
//           <ellipse cx={p.x - p.rx/2} cy={p.y} rx={p.rx/2} ry={p.ry} fill={p.c2} opacity={0.85}/>
//         </g>
//       ))}
//       {/* round tablets */}
//       {[ {x:148,y:42,r:8,c:"#ffca28"},{x:22,y:62,r:7,c:"#80cbc4"},{x:155,y:98,r:6,c:"#ef9a9a"} ].map((t,i)=>(
//         <circle key={i} cx={t.x} cy={t.y} r={t.r} fill={t.c}/>
//       ))}
//     </svg>
//   </div>
// );

// const CardImage3 = () => (
//   <div className="w-full h-full bg-[#e8e8e4] flex items-center justify-center relative overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-to-br from-[#f0efeb] to-[#d8d8d4]" />
//     <svg width="160" height="130" viewBox="0 0 160 130" className="relative z-10">
//       {/* brown pill bottle */}
//       <rect x="100" y="25" width="36" height="75" rx="6" fill="#8d5524"/>
//       <rect x="98" y="18" width="40" height="16" rx="4" fill="#6d4019"/>
//       <rect x="102" y="42" width="28" height="20" rx="2" fill="white" opacity="0.3"/>
//       {/* spilled white tablets */}
//       {[{x:70,y:98},{x:55,y:88},{x:42,y:102},{x:78,y:110},{x:35,y:115},{x:62,y:118},{x:88,y:105}].map((t,i)=>(
//         <ellipse key={i} cx={t.x} cy={t.y} rx="11" ry="7" fill="white" stroke="#ddd" strokeWidth="0.5"/>
//       ))}
//       {/* cute faces on 3 pills */}
//       <ellipse cx="55" cy="88" rx="11" ry="7" fill="white"/>
//       <circle cx="52" cy="86" r="1" fill="#555"/><circle cx="58" cy="86" r="1" fill="#555"/>
//       <path d="M52 90 Q55 93 58 90" stroke="#e57373" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
//       <ellipse cx="70" cy="98" rx="11" ry="7" fill="white"/>
//       <circle cx="67" cy="96" r="1" fill="#555"/><circle cx="73" cy="96" r="1" fill="#555"/>
//       <path d="M67 100 Q70 97 73 100" stroke="#555" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
//     </svg>
//   </div>
// );

// const CardImage4 = () => (
//   <div className="w-full h-full bg-[#f5a623] flex items-center justify-center relative overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-to-br from-[#f7b733] to-[#e8941a]" />
//     <svg width="160" height="130" viewBox="0 0 160 130" className="relative z-10">
//       {/* tilted brown bottle */}
//       <g transform="rotate(-35 95 55)">
//         <rect x="78" y="18" width="34" height="72" rx="6" fill="#7b4019"/>
//         <rect x="76" y="12" width="38" height="14" rx="4" fill="#5c2e0a"/>
//         <rect x="82" y="32" width="24" height="16" rx="2" fill="white" opacity="0.25"/>
//       </g>
//       {/* white round tablets scattered */}
//       {[{x:38,y:92},{x:52,y:105},{x:65,y:98},{x:78,y:112},{x:90,y:100},{x:105,y:108},{x:118,y:95},{x:30,y:108},{x:42,y:118}].map((t,i)=>(
//         <circle key={i} cx={t.x} cy={t.y} r="9" fill="white" stroke="#eee" strokeWidth="0.5" opacity={0.92}/>
//       ))}
//     </svg>
//   </div>
// );

// const posts = [
//   {
//     id: 1,
//     title: 'Active Life Without "Hot Flashes" – It\'s All in Your Hands',
//     excerpt: "And yet, it is impossible to cheat nature, and almost every woman after the age of forty starts thinking about the onset of menopause.",
//     image: <CardImage1 />,
//   },
//   {
//     id: 2,
//     title: 'Active Life Without "Hot Flashes" – It\'s All in Your Hands',
//     excerpt: "And yet, it is impossible to cheat nature, and almost every woman after the age of forty starts thinking about the onset of menopause.",
//     image: <CardImage2 />,
//   },
//   {
//     id: 3,
//     title: 'Active Life Without "Hot Flashes" – It\'s All in Your Hands',
//     excerpt: "And yet, it is impossible to cheat nature, and almost every woman after the age of forty starts thinking about the onset of menopause.",
//     image: <CardImage3 />,
//   },
//   {
//     id: 4,
//     title: 'Active Life Without "Hot Flashes" – It\'s All in Your Hands',
//     excerpt: "And yet, it is impossible to cheat nature, and almost every woman after the age of forty starts thinking about the onset of menopause.",
//     image: <CardImage4 />,
//   },
// ];

// const BlogCard = ({ post }) => (
//   <div className="flex flex-col gap-3 cursor-pointer group">
//     {/* Image */}
//     <div className="w-full h-[200px] rounded-2xl overflow-hidden">
//       {post.image}
//     </div>
//     {/* Title */}
//     <h3 className="text-[14px] font-black text-gray-800 leading-snug group-hover:text-[#1a2d6d] transition-colors">
//       {post.title}
//     </h3>
//     {/* Excerpt */}
//     <p className="text-[12px] text-gray-400 font-medium leading-relaxed">
//       {post.excerpt}
//     </p>
//   </div>
// );

// export default function HealthBlog() {
//   return (
//     <section className="w-full bg-white py-10 px-4">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
//         .blog-root * { font-family: 'Nunito', sans-serif; }
//       `}</style>

//       <div className="blog-root max-w-screen-xl mx-auto">
//         {/* ── Header ── */}
//         <div className="flex items-center gap-3 mb-7 flex-wrap">
//           <h2 className="text-2xl md:text-3xl font-black text-gray-900">Health Blog</h2>
//           <button className="flex items-center gap-1 text-[#26c6bc] hover:text-[#1aada4] text-[13px] font-bold transition-colors">
//             <ChevronRight /><ChevronRight />
//             Latest Posts
//           </button>
//         </div>

//         {/* ── 4-column blog grid ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {posts.map((post) => (
//             <BlogCard key={post.id} post={post} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// ------------------------------------------------------------------//


import healthImg1 from "../assets/Images/Health_product_1.svg";
import healthImg2 from "../assets/Images/Health_product_2.svg";
import healthImg3 from "../assets/Images/Health_product_3.svg";
import healthImg4 from "../assets/Images/Health_product_4.svg";

const ChevronRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ── Updated posts with real images ──
const posts = [
  {
    id: 1,
    title: 'Active Life Without "Hot Flashes" – It\'s All in Your Hands',
    excerpt: "And yet, it is impossible to cheat nature, and almost every woman after the age of forty starts thinking about the onset of menopause.",
    image: healthImg1,
  },
  {
    id: 2,
    title: 'Active Life Without "Hot Flashes" – It\'s All in Your Hands',
    excerpt: "And yet, it is impossible to cheat nature, and almost every woman after the age of forty starts thinking about the onset of menopause.",
    image: healthImg2,
  },
  {
    id: 3,
    title: 'Active Life Without "Hot Flashes" – It\'s All in Your Hands',
    excerpt: "And yet, it is impossible to cheat nature, and almost every woman after the age of forty starts thinking about the onset of menopause.",
    image: healthImg3,
  },
  {
    id: 4,
    title: 'Active Life Without "Hot Flashes" – It\'s All in Your Hands',
    excerpt: "And yet, it is impossible to cheat nature, and almost every woman after the age of forty starts thinking about the onset of menopause.",
    image: healthImg4,
  },
];

// ── Updated BlogCard with <img> instead of SVG components ──
const BlogCard = ({ post }) => (
  <div className="flex flex-col gap-3 cursor-pointer group">
    {/* ✅ Real image */}
    <div className="w-full h-[200px] rounded-2xl overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    {/* Title */}
    <h3 className="text-[14px] font-black text-gray-800 leading-snug group-hover:text-[#1a2d6d] transition-colors">
      {post.title}
    </h3>
    {/* Excerpt */}
    <p className="text-[12px] text-gray-400 font-medium leading-relaxed">
      {post.excerpt}
    </p>
  </div>
);

export default function HealthBlog() {
  return (
    <section className="w-full bg-white py-10 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .blog-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="blog-root max-w-screen-xl mx-auto">
        {/* ── Header ── */}
        <div className="flex items-center gap-3 mb-7 flex-wrap">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">Health Blog</h2>
          <button className="flex items-center gap-1 text-[#26c6bc] hover:text-[#1aada4] text-[13px] font-bold transition-colors">
            <ChevronRight /><ChevronRight />
            Latest Posts
          </button>
        </div>

        {/* ── 4-column blog grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}