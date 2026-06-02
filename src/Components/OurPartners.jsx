
import partnersSvg from "../assets/Images/our_partner_logo.svg";

export default function OurPartners() {
  return (
    <section className="w-full bg-white py-10 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .partners-root * { font-family: 'Nunito', sans-serif; }
        .partners-scroll::-webkit-scrollbar { display: none; }
        .partners-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="partners-root max-w-screen-xl mx-auto">
        {/* ── Header ── */}
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
          Our Partners
        </h2>

        {/* ── Partners SVG strip ── */}
        <div className="partners-scroll overflow-x-auto">
          <img
            src={partnersSvg}
            alt="Our Partners"
            className="w-full h-auto object-contain"
            style={{ maxHeight: "120px" }}
          />
        </div>
      </div>
    </section>
  );
}