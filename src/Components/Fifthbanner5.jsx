// ── Real images ──
import img1 from "../assets/Images/fifth_images_1.png"; // hand with pills (large hero)
import img2 from "../assets/Images/fifth_images_2.png"; // colorful pills dark bg
import img3 from "../assets/Images/fifth_images_3.png"; // orange bottle spilled
import img4 from "../assets/Images/fifth_images_4.png"; // emoji pills bottle

const TITLE = 'Active life without "hot flashes" — it\'s all in your hands';
const EXCERPT =
  "And yet it is impossible to deceive nature, and almost every woman after forty starts thinking about the approaching menopause.";
const BODY =
  "On the other hand, the framework and the place for staff training allow us to evaluate the significance of forms of development. The task of the organization, especially the strengthening and development of the structure, represents an interesting experiment in checking forms of development.";
const BODY2 =
  "Thus, the constant information and propaganda support of our activities allows us to evaluate the significance of substantial financial and administrative conditions. Everyday practice shows.";

// Cycle images for the 15 small cards
const SMALL_IMGS = [img2, img3, img4, img1, img3, img4, img2, img3, img4, img1, img3, img4, img2, img3, img4,img3];

// ─── Small article card ───────────────────────────────────────────────────────
const SmallCard = ({ img, title, excerpt }) => (
  <div className="flex flex-col cursor-pointer group">
    <div className="overflow-hidden rounded-sm mb-2">
      <img
        src={img}
        alt={title}
        className="w-full h-[160px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 className="text-[13px] font-bold text-gray-900 leading-snug mb-1 group-hover:text-[#26c6bc] transition-colors">
      {title}
    </h3>
    <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-3">
      {excerpt}
    </p>
  </div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Fifthbanner5() {
  return (
    <section className="w-full bg-white py-8 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .ag-root * { font-family: 'Nunito', sans-serif; }
        .line-clamp-3 { display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden; }
        .line-clamp-2 { display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden; }
      `}</style>

      <div className="ag-root max-w-screen-xl mx-auto">

        {/* ── TOP SECTION: Featured (left 2-col) + 2 small cards (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-8">

          {/* Featured card — spans 2 columns, 2 rows */}
          <div className="lg:col-span-2 lg:row-span-2 flex flex-col cursor-pointer group">
            <div className="overflow-hidden rounded-sm mb-3 flex-shrink-0">
              <img
                src={img1}
                alt={TITLE}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ height: 340 }}
              />
            </div>
            <h2 className="text-[20px] font-black text-gray-900 leading-snug mb-2 group-hover:text-[#26c6bc] transition-colors">
              {TITLE}
            </h2>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-2">{BODY}</p>
            <p className="text-[13px] text-gray-500 leading-relaxed">{BODY2}</p>
          </div>

          {/* Small card 1 */}
          <div className="lg:col-span-1">
            <SmallCard img={img2} title={TITLE} excerpt={EXCERPT} />
          </div>

          {/* Small card 2 */}
          <div className="lg:col-span-1">
            <SmallCard img={img3} title={TITLE} excerpt={EXCERPT} />
          </div>

          {/* Small card 3 */}
          <div className="lg:col-span-1">
            <SmallCard img={img4} title={TITLE} excerpt={EXCERPT} />
          </div>

          {/* Small card 4 */}
          <div className="lg:col-span-1">
            <SmallCard img={img2} title={TITLE} excerpt={EXCERPT} />
          </div>
          
        </div>

        {/* ── GRID ROWS: 4 columns each ── */}
        {[0, 1, 2, 3].map(row => (
          <div key={row} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {SMALL_IMGS.slice(row * 4, row * 4 + 4).map((img, i) => (
              <SmallCard key={i} img={img} title={TITLE} excerpt={EXCERPT} />
            ))}
          </div>
        ))}

      </div>
    </section>
  );
}
