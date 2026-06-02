import { useState } from "react";

const BODY_TEXT = `Our company's activities are based on providing professional kitchen equipment to public catering establishments of any format: hotels, hostels, hypermarkets, canteens, kindergartens and schools. The speed of cooking dishes of any complexity and the quality of your chefs' work depends on the quality of the equipment. We offer you high-quality equipment for your business: thermal, refrigeration, laundry, coffee, bar, fast-food, neutral. Our company's activities are based on providing professional kitchen equipment to public catering establishments of any format: hotels, hostels, hypermarkets, canteens, kindergartens and schools.`;

const HIGHLIGHT_TEXT = `Our company's activities are based on providing professional kitchen equipment to public catering establishments of any format: hotels, hostels, hypermarkets, canteens, kindergartens and schools. The speed of cooking dishes of any complexity and the quality of your chefs' work depends on the quality of the equipment. We offer you high-quality equipment for your business: thermal, refrigeration, laundry, coffee, bar, fast-food, neutral.`;

const col1Paras = [
  "Barclay Plaza Business Centre class B+, built in 2008, despite its age, is one of the most in-demand Business Centres in the Western Administrative District of Moscow.",
  "Proximity to Kutuzovsky Prospekt, Minskaya St. and Moscow-City, as well as walking distance to three metro stations add to its relevance. Thus, Park Pobedy metro station is just 800 metres away.",
  "Barclay Plaza is distinguished by a stylish panoramic facade, an unusual entrance group and designer finishing of common areas and elevator halls. Ceiling height in offices is more than 3 metres.",
];

const col2Paras = [
  "Barclay Plaza Business Centre class B+, built in 2008, despite its age, is one of the most in-demand Business Centres in the Western Administrative District.",
  "Proximity to Kutuzovsky Prospekt, Minskaya St. and Moscow-City, as well as walking distance to three metro stations add to its relevance. Thus, Park metro station.",
  "Barclay Plaza is distinguished by a stylish panoramic facade, an unusual entrance group and designer finishing of common areas and elevator halls.",
];

const col3Paras = [
  "Barclay Plaza Business Centre class B+, built in 2008, despite its age, is one of the most in-demand Business Centres in the Western Administrative District of Moscow.",
  "Proximity to Kutuzovsky Prospekt, Minskaya St. and Moscow-City, as well as walking distance to three metro stations add to its relevance. Thus, Park Pobedy metro station is just 800 metres away.",
  "Barclay Plaza is distinguished by a stylish panoramic facade, an unusual entrance group and designer finishing of common areas and elevator halls. Ceiling height in offices is more than 3 metres.",
];

const AlertIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
    className="shrink-0 mt-0.5">
    <circle cx="14" cy="14" r="13" stroke="#26c6bc" strokeWidth="1.8" fill="none"/>
    <line x1="14" y1="9" x2="14" y2="16" stroke="#26c6bc" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="14" cy="20" r="1.2" fill="#26c6bc"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

export default function Thirdbanner1() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-10 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .about-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="about-root max-w-screen-xl mx-auto">

        {/* ── Title ── */}
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
         SEO text
        </h2>

        {/* ── 3-column text grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Col 1 – plain paragraphs */}
          <div className="flex flex-col gap-5">
            {col1Paras.map((p, i) => (
              <p key={i} className="text-[12.5px] text-gray-500 leading-relaxed font-medium">
                {p}
              </p>
            ))}
          </div>

          {/* Col 2 – bullet list with teal dots */}
          <div className="flex flex-col gap-5">
            {col2Paras.map((p, i) => (
              <div key={i} className="flex gap-2.5">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#26c6bc] shrink-0" />
                <p className="text-[12.5px] text-gray-500 leading-relaxed font-medium">{p}</p>
              </div>
            ))}
          </div>

          {/* Col 3 – plain paragraphs */}
          <div className="flex flex-col gap-5">
            {col3Paras.map((p, i) => (
              <p key={i} className="text-[12.5px] text-gray-500 leading-relaxed font-medium">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* ── Full-width body paragraph ── */}
        <p className="text-[12.5px] text-gray-500 leading-relaxed font-medium mb-8">
          {BODY_TEXT}
        </p>

        {/* ── Highlight / info box ── */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 flex gap-4 items-start mb-8">
          <AlertIcon />
          <p className="text-[12.5px] text-gray-500 leading-relaxed font-medium">
            {HIGHLIGHT_TEXT}
          </p>
        </div>

        {/* ── Bottom paragraph (collapsible) ── */}
        <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[600px]" : "max-h-[96px]"} relative`}>
          <p className="text-[12.5px] text-gray-500 leading-relaxed font-medium">
            {BODY_TEXT}
          </p>
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>

        {/* ── Show full text link ── */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-[#26c6bc] hover:text-[#1aada4] text-[12px] font-black uppercase tracking-wider transition-colors mt-4 group"
        >
          <span className="flex">
            <ChevronRight />
            <ChevronRight />
          </span>
          {expanded ? "Collapse Text" : "Show Full Text"}
        </button>

      </div>
    </section>
  );
}
