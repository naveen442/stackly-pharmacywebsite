
import { useState } from "react";

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M10 2.5L1.66667 10H4.16667V16.6667H9.16667V11.6667H10.8333V16.6667H15.8333V10H18.3333L10 2.5Z" fill="#2FD3AE" />
  </svg>
);

const cyrillicLetters = ["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я"];
const latinLetters   = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const digits         = ["0","1","2","3","4","5","6","7","8","9"];

function LetterButton({ char, isActive, onClick }) {
  return (
    <button
      onClick={() => onClick(char)}
      className={`w-7 h-7 flex items-center justify-center rounded text-[13px] font-medium flex-shrink-0 transition-all duration-100 select-none ${
        isActive ? "bg-[#2FD3AE] text-white" : "text-[#394045] hover:bg-[#e8f9f6] hover:text-[#2FD3AE]"
      }`}
    >
      {char}
    </button>
  );
}

/* ── SVG Icons ── */
const MedicineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#2FD3AE" strokeWidth="1.5"/>
    <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#2FD3AE" strokeWidth="1.5"/>
    <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#2FD3AE" strokeWidth="1.5"/>
    <path d="M13 17h8M17 13v8" stroke="#2FD3AE" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const VitaminIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" stroke="#FF8C42" strokeWidth="1.5"/>
    <path d="M12 8v8M8 12h8" stroke="#FF8C42" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const BeautyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#C084FC" strokeWidth="1.5"/>
    <path d="M8 13s1 2.5 4 2.5 4-2.5 4-2.5" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="10" r="1" fill="#C084FC"/>
    <circle cx="15" cy="10" r="1" fill="#C084FC"/>
  </svg>
);
const HygieneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M6 8c0-3.31 2.69-6 6-6s6 2.69 6 6v2H6V8z" stroke="#34D399" strokeWidth="1.5"/>
    <rect x="4" y="10" width="16" height="11" rx="2" stroke="#34D399" strokeWidth="1.5"/>
    <path d="M12 14v3" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const MedGoodsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="6" width="18" height="14" rx="2" stroke="#F87171" strokeWidth="1.5"/>
    <path d="M9 11h6M12 8v6" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 6V4h8v2" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ZooIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="9" r="4" stroke="#FBBF24" strokeWidth="1.5"/>
    <path d="M12 14c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z" stroke="#FBBF24" strokeWidth="1.5"/>
    <path d="M8 6c-1-2-3-2-3 0M16 6c1-2 3-2 3 0" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const MotherIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="10" cy="7" r="3" stroke="#F472B6" strokeWidth="1.5"/>
    <path d="M4 20v-2a6 6 0 0112 0v2" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="17" cy="6" r="2" stroke="#F472B6" strokeWidth="1.5"/>
  </svg>
);
const LensesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#60A5FA" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="#60A5FA" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="1.5" fill="#60A5FA"/>
  </svg>
);
const MedTechIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 12h3l2-7 4 14 2-7h7" stroke="#2FD3AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Category Data ── */
const categories = [
  {
    id: "medicines", title: "Medicines", Icon: MedicineIcon,
    items: [
      "Obstetrics, gynecology","Allergy","Anesthesia, resuscitation","Antibiotics",
      "Blood diseases","Pain, fever","Hemorrhoids","Eyes","Helminths, lice, scabies",
      "Homeopathy","Diabetes","Diagnostic tools","Respiratory system",
      "Stomach, intestine, liver","Teeth and mouth","Immune system","Skin",
      "Urinary system","Metabolic disorders","Neurology, psychiatry",
      "Disinfectants","Oncology","Poisoning","Nutritional mixtures",
      "Antiviral agents","Antifungal agents","Other",
    ],
  },
  {
    id: "vitamins", title: "Vitamins & Supplements", Icon: VitaminIcon,
    items: [
      "Amino acids","L-carnitine","Antioxidants","Supplements for vision",
      "Multivitamins","Supplements for bad habits","Supplements for weight correction",
      "Supplements for diabetes","Supplements for menopause","Supplements for colds",
      "Sedative supplements","Vitamins and minerals","Vitamins for pregnant & nursing",
      "Supplements for diabetes","Supplements for menopause","Supplements for colds",
    ],
  },
  {
    id: "beauty", title: "Beauty", Icon: BeautyIcon,
    items: [
      "Glass partitions for home","Glass partitions for office",
      "Glass partitions","Decorative partitions","Fire partitions",
    ],
  },
  {
    id: "hygiene", title: "Hygiene", Icon: HygieneIcon,
    items: [
      "Glass partitions for home","Glass partitions for office",
      "Glass partitions","Decorative partitions","Fire partitions",
    ],
  },
  {
    id: "medgoods", title: "Medical Goods", Icon: MedGoodsIcon,
    items: [
      "Glass partitions for home","Glass partitions for office",
      "Glass partitions","Decorative partitions","Fire partitions",
    ],
  },
  {
    id: "zoo", title: "Pet Supplies", Icon: ZooIcon,
    items: [
      "Glass partitions for home","Glass partitions for office",
      "Glass partitions","Decorative partitions","Fire partitions",
    ],
  },
  {
    id: "mother", title: "Mother & Child", Icon: MotherIcon,
    items: [
      "Glass partitions for home","Glass partitions for office",
      "Glass partitions","Decorative partitions","Fire partitions",
    ],
  },
  {
    id: "lenses", title: "Lenses", Icon: LensesIcon,
    items: [
      "Glass partitions for home","Glass partitions for office",
      "Glass partitions","Decorative partitions","Fire partitions",
    ],
  },
  {
    id: "medtech", title: "Medical Equipment", Icon: MedTechIcon,
    items: [
      "Glass partitions for home","Glass partitions for office",
      "Glass partitions","Decorative partitions","Fire partitions",
    ],
  },
];

function CategoryBlock({ cat }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <cat.Icon />
        <h2 className="text-[14px] font-bold text-[#394045]">{cat.title}</h2>
      </div>
      <ul className="space-y-[7px]">
        {cat.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-gray-300 text-sm leading-5 flex-shrink-0">—</span>
            <a href="#" className="text-[12.5px] text-[#555f6d] leading-5 hover:text-[#2FD3AE] transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FullPage() {
  const [active, setActive] = useState("А");

  const [med, vit, beauty, hygiene, medGoods, zoo, mother, lenses, medTech] = categories;

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* ══════════════════════════════════════
          SECTION 1 — Alphabetical Search
      ══════════════════════════════════════ */}
      <div className="relative overflow-hidden border-b border-gray-100">
        {/* Watermark */}
        <div
          className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 font-black"
          style={{ color: "#2FD3AE", opacity: 0.08, fontSize: "clamp(80px, 12vw, 180px)", lineHeight: 1, paddingRight: "2rem", whiteSpace: "nowrap" }}
          aria-hidden="true"
        >
          А–Я
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 pt-5 pb-7">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-4">
            <HomeIcon />
            <a href="#" className="text-[12px] text-[#394045] hover:text-[#2FD3AE] transition-colors">Home</a>
            <span className="text-gray-300 text-xs">»</span>
            <span className="text-[12px] text-gray-400">Alphabetical Search</span>
          </nav>

          {/* Title */}
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-6">
            <h1 className="text-[24px] font-extrabold text-[#232b2b] leading-tight">Alphabetical Search</h1>
            <a href="#" className="text-[13px] font-semibold text-[#2FD3AE] hover:underline">Select product by disease</a>
          </div>

          {/* Letter rows */}
          <div className="flex flex-col gap-[6px]">
            <div className="flex flex-wrap gap-x-[2px] gap-y-1">
              {cyrillicLetters.map(ch => <LetterButton key={ch} char={ch} isActive={active === ch} onClick={setActive} />)}
            </div>
            <div className="flex flex-wrap gap-x-[2px] gap-y-1">
              {latinLetters.map(ch => <LetterButton key={ch} char={ch} isActive={active === ch} onClick={setActive} />)}
            </div>
            <div className="flex flex-wrap gap-x-[2px] gap-y-1">
              {digits.map(ch => <LetterButton key={ch} char={ch} isActive={active === ch} onClick={setActive} />)}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SECTION 2 — Category Menu
      ══════════════════════════════════════ */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 py-8">

        {/* ── Desktop: 4 columns ── */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-x-10">
          {/* Col 1 — Medicines */}
          <div><CategoryBlock cat={med} /></div>

          {/* Col 2 — Vitamins */}
          <div><CategoryBlock cat={vit} /></div>

          {/* Col 3 — Beauty / Medical Goods / Mother & Child */}
          <div className="flex flex-col gap-8">
            <CategoryBlock cat={beauty} />
            <CategoryBlock cat={medGoods} />
            <CategoryBlock cat={mother} />
          </div>

          {/* Col 4 — Hygiene / Pet Supplies / Lenses + MedTech */}
          <div className="flex flex-col gap-8">
            <CategoryBlock cat={hygiene} />
            <CategoryBlock cat={zoo} />
            <CategoryBlock cat={lenses} />
            <CategoryBlock cat={medTech} />
          </div>
        </div>

        {/* ── Tablet: 2 columns ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-x-8 gap-y-10">
          {categories.map(cat => <CategoryBlock key={cat.id} cat={cat} />)}
        </div>

        {/* ── Mobile: 1 column ── */}
        <div className="flex flex-col gap-8 sm:hidden">
          {categories.map((cat, i) => (
            <div key={cat.id}>
              <CategoryBlock cat={cat} />
              {i < categories.length - 1 && <div className="mt-6 border-b border-gray-100" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
