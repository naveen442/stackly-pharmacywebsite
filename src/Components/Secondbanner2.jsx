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

export default function Secondbanner2() {
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