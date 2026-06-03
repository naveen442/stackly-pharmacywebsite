import bannerImg from "../assets/Images/sixth_images(g).png";

const LOREM  = "On the other hand, from the very beginning of everyday work on shaping positions, the organization ensures wide involvement of specialists in shaping the directions of progressive development. Everyday practice shows that the framework and the place of staff training allows executing important tasks in developing the model of development. Everyday practice shows that consultation with a wide active audience requires us to analyze positions, participants in relation to the set tasks. Ideal representations of the highest order, as well as the growing complexity of the structure of the organization, present an interesting experiment of checking substantial financial and administrative conditions. Equally, the beginning of everyday work on shaping positions allows evaluating the significance of new proposals.";

const BULLETS = [
  "On the other hand, from the very beginning of everyday work on shaping positions, the organization ensures wide involvement of specialists in shaping the directions of progressive development. Everyday practice shows that the framework and the place of staff training allows executing important tasks in developing the model of development. The framework and the place of staff training allows executing important tasks in developing the model.",
  "Everyday practice shows that consultation with a wide active audience requires us to analyze positions, participants in relation to the set tasks. Ideal representations of the highest order, as well as the growing complexity of the structure of the organization, present an interesting experiment of checking substantial financial and administrative conditions.",
  "Equally, the beginning of everyday work on shaping positions allows evaluating the significance of new proposals. Everyday practice shows that the further development of various forms of activity plays an important role in shaping substantial financial and administrative conditions. The significance of these problems is so obvious.",
  "It should not be forgotten, however, that the further development of various forms of activity contributes to the preparation and realization of new proposals. The diverse and rich experience of constant quantitative growth and the sphere of our activity plays an important role in shaping the directions of progressive development. Equally, the framework and the place of staff training requires analysis of the staff training system, which corresponds to pressing needs.",
];

export default function Sixthbanner8() {
  return (
    <section className="w-full bg-white px-4 py-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .h5-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="h5-root max-w-screen-xl mx-auto">

        {/* ── H5 heading ── */}
        <h5 className="text-[16px] font-black text-gray-900 mb-3">Heading h5</h5>

        {/* ── Intro paragraph ── */}
        <p className="text-[13px] text-gray-600 leading-relaxed mb-5">{LOREM}</p>

        {/* ── Image LEFT + Content RIGHT ── */}
        <div className="flex flex-col sm:flex-row gap-5 mb-6 rounded-xl overflow-hidden border border-gray-100">
          {/* Left — image */}
          <div className="flex-shrink-0 sm:w-[280px] w-full">
            <img
              src={bannerImg}
              alt="Article banner"
              className="w-full h-full object-cover"
              style={{ minHeight: 140, maxHeight: 200 }}
            />
          </div>

          {/* Right — text content */}
          <div className="flex flex-col justify-center px-4 py-4 sm:py-0 sm:pr-5">
            <p className="text-[15px] sm:text-[16px] font-black text-gray-900 leading-snug mb-2">
              How a woman prepares for the appearance of a child?
            </p>
            <a href="#" className="text-[#26c6bc] text-[12px] font-semibold hover:underline">
              Read more
            </a>
          </div>
        </div>

        {/* ── Bullet list ── */}
        <ul className="flex flex-col gap-4">
          {BULLETS.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-1.5">
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" fill="none" stroke="#26c6bc" strokeWidth="1.5"/>
                </svg>
              </span>
              <p className="text-[13px] text-gray-600 leading-relaxed mb-0">{text}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
