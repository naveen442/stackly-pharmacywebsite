import quoteIcon from "../assets/Images/sixth_images(0).png";

const LOREM  = "On the other hand, from the very beginning of everyday work on shaping positions, the organization ensures wide involvement of specialists in shaping the directions of progressive development. Everyday practice shows that the framework and the place of staff training allows executing important tasks in developing the model of development. Everyday practice shows that consultation with a wide active audience requires us to analyze positions, participants in relation to the set tasks. Ideal representations of the highest order, as well as the growing complexity of the structure of the organization, present an interesting experiment of checking substantial financial and administrative conditions. Equally, the beginning of everyday work on shaping positions allows evaluating the significance of new proposals.";
const QUOTE  = "Equally, the new model of organizational activity entails the process of introducing and modernizing the development model. Equally, the framework and the place of staff training requires analysis of the staff training system, which corresponds to pressing needs.";
const LOREM2 = "Everyday practice shows that the further development of various forms of activity plays an important role in shaping substantial financial and administrative conditions. The significance of these problems is so obvious that the growing complexity of the structure of the organization allows executing important tasks in developing substantial financial and administrative conditions. It should not be forgotten, however, that the further development of various forms of activity contributes to the preparation and realization of new proposals. The diverse and rich experience of constant quantitative growth and the sphere of our activity plays an important role in shaping the directions of progressive development.";

export default function Sixthbanner5() {
  return (
    <section className="w-full bg-white px-4 py-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .as-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="as-root max-w-screen-xl mx-auto">

        {/* H2 */}
        <h2 className="text-[22px] font-black text-gray-900 mb-4">Heading h2</h2>

        {/* Body paragraph */}
        <p className="text-[13px] text-gray-600 leading-relaxed mb-4">{LOREM}</p>

        {/* Blockquote with real teal quote icon */}
        <div className="relative bg-gray-50 rounded-xl px-6 py-5 mb-4 flex gap-4 items-start">
          {/* Real uploaded quote mark image */}
          <img
            src={quoteIcon}
            alt="quote"
            className="w-8 h-6 object-contain flex-shrink-0 mt-0.5 opacity-90"
          />
          <p className="text-[13px] text-gray-600 leading-relaxed italic mb-0">
            {QUOTE}
          </p>
        </div>

        {/* Final paragraph */}
        <p className="text-[13px] text-gray-600 leading-relaxed">{LOREM2}</p>

      </div>
    </section>
  );
}
