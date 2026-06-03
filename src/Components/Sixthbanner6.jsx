import heartIcon from "../assets/Images/sixth_images(H).png";

const LOREM = "On the other hand, from the very beginning of everyday work on shaping positions, the organization ensures wide involvement of specialists in shaping the directions of progressive development. Everyday practice shows that the framework and the place of staff training allows executing important tasks in developing the model of development. Everyday practice shows that consultation with a wide active audience requires us to analyze positions, participants in relation to the set tasks. Ideal representations of the highest order, as well as the growing complexity of the structure of the organization, present an interesting experiment of checking substantial financial and administrative conditions. Equally, the beginning of everyday work on shaping positions allows evaluating the significance of new proposals.";

const NUMBERED = [
  "On the other hand, from the very beginning of everyday work on shaping positions, the organization ensures wide involvement of specialists in shaping the directions of progressive development. Everyday practice shows that the framework and the place of staff training allows executing important tasks in developing the model of development.",
  "Everyday practice shows that consultation with a wide active audience requires us to analyze positions, participants in relation to the set tasks. Ideal representations of the highest order, as well as the growing complexity of the structure of the organization, presents an interesting experiment of checking substantial financial and administrative conditions.",
  "Equally, the beginning of everyday work on shaping positions allows evaluating the significance of new proposals. Everyday practice shows that the further development of various forms of activity plays an important role in shaping substantial financial and administrative conditions. The significance of these problems is so obvious.",
  "It should not be forgotten, however, that the further development of various forms of activity contributes to the preparation and realization of new proposals. The diverse and rich experience of constant quantitative growth and the sphere of our activity plays an important role in shaping the directions of progressive development. Equally, the framework and the place of staff training requires analysis of the staff training system, which corresponds to pressing needs.",
];

const CALLOUT = "Everyday practice shows that consultation with a wide active audience requires us to analyze positions, participants in relation to the set tasks.";
const PARA2   = "Ideal representations of the highest order, as well as the growing complexity of the structure of the organization, present an interesting experiment of checking substantial financial and administrative conditions. Equally, the beginning of everyday work on shaping positions allows evaluating the significance of new proposals.";

export default function Sixthbanner6() {
  return (
    <section className="w-full bg-white px-4 py-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .ah-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="ah-root max-w-screen-xl mx-auto">

        {/* ── H3 ── */}
        <h3 className="text-[19px] font-black text-gray-900 mb-3">Heading h3</h3>
        <p className="text-[13px] text-gray-600 leading-relaxed mb-5">{LOREM}</p>

        {/* ── Numbered list ── */}
        <ol className="flex flex-col gap-4 mb-8">
          {NUMBERED.map((text, i) => (
            <li key={i} className="flex gap-4">
              {/* Number badge */}
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#26c6bc] text-white text-[11px] font-black flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <p className="text-[13px] text-gray-600 leading-relaxed mb-0">{text}</p>
            </li>
          ))}
        </ol>

        {/* ── H4 ── */}
        <h4 className="text-[17px] font-black text-gray-900 mb-3">Heading h4</h4>
        <p className="text-[13px] text-gray-600 leading-relaxed mb-4">{NUMBERED[0]}</p>

        {/* ── Icon callout box ── */}
        <div className="flex items-start gap-4 bg-gray-50 rounded-xl px-5 py-4 mb-4">
          <img src={heartIcon} alt="" className="w-10 h-10 object-contain flex-shrink-0 mt-0.5"/>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">{CALLOUT}</p>
        </div>

        {/* ── Final paragraph ── */}
        <p className="text-[13px] text-gray-600 leading-relaxed">{PARA2}</p>

      </div>
    </section>
  );
}
