import { useState } from "react";

const TOC = [
  "Attend preparatory courses;",
  "Receive and filter information;",
  "Read books, take courses;",
  "Engage in physical activity;",
  "About the last point and speech;",
  "Receive and filter information;",
];

const LOREM = "On the other hand, from the very beginning of everyday work on shaping positions, the organization ensures wide involvement of specialists in shaping the directions of progressive development. Everyday practice shows that the framework and the place of staff training allows executing important tasks in developing the model of development.";
const LOREM2 = "Everyday practice shows that consultation with a wide active audience requires us to analyze positions, participants in relation to the set tasks. Ideal representations of the highest order, as well as the growing complexity of the structure of the organization, represent an interesting experiment of checking substantial financial and administrative conditions.";
const LOREM3 = "Equally, the new model of organizational activity entails the process of introducing and modernizing the development model. Equally, the framework and place of staff training requires analysis of the staff training system, which corresponds to pressing needs.";
const LOREM4 = "Everyday practice shows that the further development of various forms of activity plays an important role in shaping substantial financial and administrative conditions. The significance of these problems is so obvious that the growing complexity of the structure of the organization allows executing important tasks in developing substantial financial and administrative conditions. It should not be forgotten, however, that the further development of various forms of activity contributes to the preparation and realization of new proposals. The diverse and rich experience of constant quantitative growth and the sphere of our activity plays an important role in shaping the directions of progressive development.";

export default function Sixthbanner4() {
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <section className="w-full bg-white px-4 py-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .ac-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="ac-root max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 items-start">

        {/* ── LEFT: Table of Contents ── */}
        <aside className="border border-gray-200 rounded-xl overflow-hidden self-start">
          {/* Header */}
          <button
            onClick={() => setTocOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-[13px] font-black text-gray-900">Contents</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points={tocOpen ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}/>
            </svg>
          </button>

          {/* TOC items */}
          {tocOpen && (
            <ul className="px-4 pb-4 pt-1 flex flex-col gap-2.5 border-t border-gray-100">
              {TOC.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 cursor-pointer group">
                  {/* Teal circle outline bullet */}
                  <span className="mt-1 flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <circle cx="5" cy="5" r="4" fill="none" stroke="#26c6bc" strokeWidth="1.5"/>
                    </svg>
                  </span>
                  <span className="text-[12px] text-gray-600 leading-snug group-hover:text-[#26c6bc] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </aside>

        {/* ── RIGHT: Article Content ── */}
        <article className="flex flex-col gap-4">

          {/* Intro paragraphs */}
          <p className="text-[13px] text-gray-600 leading-relaxed">{LOREM}</p>
          <p className="text-[13px] text-gray-600 leading-relaxed">{LOREM2}</p>

          {/* H2 heading */}
          <h2 className="text-[20px] font-black text-gray-900 mt-4 mb-1">Heading h2</h2>

          {/* Body paragraphs */}
          <p className="text-[13px] text-gray-600 leading-relaxed">{LOREM}</p>
          <p className="text-[13px] text-gray-600 leading-relaxed">{LOREM2}</p>

          {/* Blockquote */}
          <blockquote className="relative pl-5 py-1 my-2">
            {/* Teal left bar */}
            <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#26c6bc] rounded-full"/>
            <p className="text-[13px] text-gray-600 leading-relaxed italic mb-0">
              {LOREM3}
            </p>
          </blockquote>

          {/* Final paragraphs */}
          <p className="text-[13px] text-gray-600 leading-relaxed">{LOREM4}</p>

        </article>

      </div>
    </section>
  );
}
