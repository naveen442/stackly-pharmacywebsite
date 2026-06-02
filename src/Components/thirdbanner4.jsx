import { useState } from "react";

// ─── CATEGORIES DATA ──────────────────────────────────────────────────────────
const CATEGORIES_VISIBLE = [
  "Obstetrics, Gynecology",
  "Allergy",
  "Anesthesia, Resuscitation",
  "Antibiotics",
  "Blood Diseases",
  "Pain, Temperature",
  "Hemorrhoids",
  "Eyes",
  "Worms, Lice, Scabies",
  "Homeopathy",
  "Diabetes",
  "Diagnostic Agents",
  "Respiratory System",
  "Stomach, Intestine, Liver",
];

const CATEGORIES_HIDDEN = [
  "Cardiovascular",
  "Dermatology",
  "ENT Diseases",
  "Gynecology",
  "Immune System",
  "Joints & Muscles",
  "Nervous System",
  "Oncology",
  "Ophthalmology",
  "Orthopedics",
  "Pediatrics",
  "Urology",
];

// ─── CATALOG DATA ─────────────────────────────────────────────────────────────
const CATALOG_ITEMS = [
  { id: 1, label: "External products",          bg: "#f8f8f8", color: "#aaa",    shape: "tube"    },
  { id: 2, label: "Syrups, drops, suspensions", bg: "#e8f7f6", color: "#26c6bc", shape: "bottle"  },
  { id: 3, label: "Tablets & capsules",          bg: "#fff5f5", color: "#e57373", shape: "blister" },
  { id: 4, label: "External products",           bg: "#f8f8f8", color: "#aaa",    shape: "tube"    },
  { id: 5, label: "Tablets & capsules",          bg: "#fff5f5", color: "#e57373", shape: "blister" },
  { id: 6, label: "External products",           bg: "#f8f8f8", color: "#aaa",    shape: "tube"    },
  { id: 7, label: "External products",           bg: "#f8f8f8", color: "#aaa",    shape: "tube"    },
  { id: 8, label: "Syrups, drops, suspensions",  bg: "#e8f7f6", color: "#26c6bc", shape: "bottle"  },
];

// ─── BRANDS DATA ─────────────────────────────────────────────────────────────
const BRANDS = [
  ["Smeg",        "Abat",  "Comenda",    "Kocateq",  "Apach",      "Modular", "Compack",      "Apach"     ],
  ["Гродторгмаш", "Dihr",  "Elettrobar", "Silanos",  "Electrolux", "Vortmax", "EKSI",         "Electrolux"],
  ["Mach Easy",   "Adler", "Solis",      "Amika",    "Fagor",      "ATA",     "Kromo",        "Fagor"     ],
  ["Krupps",      "MEC",   "Meiko",      "Omniwash", "Tatra",      "Viatto",  "Winterhalter", "Tatra"     ],
];

// ─── PRODUCT ICON SVGs ────────────────────────────────────────────────────────
function ProductIcon({ shape, color }) {
  if (shape === "bottle")
    return (
      <svg width="36" height="48" viewBox="0 0 36 48">
        <rect x="12" y="0"  width="12" height="6"  rx="2" fill={color} opacity=".5"  />
        <rect x="6"  y="6"  width="24" height="38" rx="6" fill={color} opacity=".85" />
        <rect x="10" y="14" width="16" height="16" rx="2" fill="white" opacity=".3"  />
        <text x="18" y="26" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">MED</text>
      </svg>
    );
  if (shape === "blister")
    return (
      <svg width="44" height="28" viewBox="0 0 44 28">
        <rect x="1" y="1" width="42" height="26" rx="3" fill={color} opacity=".15" stroke={color} strokeWidth="1.2" />
        {[0,1,2,3].map(i => <ellipse key={i} cx={7+i*10} cy="10" rx="4" ry="5" fill={color} opacity=".7" />)}
        {[0,1,2,3].map(i => <ellipse key={i} cx={7+i*10} cy="20" rx="4" ry="5" fill={color} opacity=".5" />)}
      </svg>
    );
  return (
    <svg width="14" height="52" viewBox="0 0 14 52">
      <rect x="3" y="0" width="8"  height="4"  rx="2" fill={color} opacity=".5" />
      <rect x="2" y="4" width="10" height="38" rx="4" fill={color} opacity=".8" />
      <polygon points="2,42 12,42 7,52" fill={color} opacity=".6" />
    </svg>
  );
}

// ─── CATALOG CARD ─────────────────────────────────────────────────────────────
function CatalogCard({ item }) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl border border-gray-100 px-4 py-3 cursor-pointer hover:shadow-sm transition-shadow"
      style={{ background: item.bg }}
    >
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12">
        <ProductIcon shape={item.shape} color={item.color} />
      </div>
      <span className="text-[13px] font-medium text-gray-700 leading-tight">{item.label}</span>
    </div>
  );
}

// ─── ✅ SORT BAR (Image 1) ────────────────────────────────────────────────────
function SortBar({ sortBy, onSortChange, currentPage, totalPages, onPageChange }) {
  const pages = [1, 2, 3, 4];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm">

      {/* LEFT — label + icon + sort buttons */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-[11px] font-bold tracking-widest text-gray-800 uppercase whitespace-nowrap">
          Sort by:
        </span>

        {/* 3-line teal icon */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <line x1="0" y1="1"  x2="16" y2="1"  stroke="#26c6bc" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="3" y1="6"  x2="16" y2="6"  stroke="#26c6bc" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="6" y1="11" x2="16" y2="11" stroke="#26c6bc" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>

        {[
          { key: "price",      label: "By price"      },
          { key: "popularity", label: "By popularity" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onSortChange(key)}
            className={`text-[13px] transition-colors whitespace-nowrap ${
              sortBy === key
                ? "text-[#26c6bc] font-semibold"
                : "text-gray-400 hover:text-gray-600 font-normal"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* RIGHT — pagination */}
      <div className="flex items-center gap-1">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`min-w-[28px] h-7 rounded text-[13px] font-medium transition-colors ${
              p === currentPage
                ? "bg-teal-400 text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        ))}
        <span className="text-gray-400 text-[13px] px-1">···</span>
        <button
          onClick={() => onPageChange(totalPages)}
          className={`min-w-[28px] h-7 rounded text-[13px] font-medium transition-colors ${
            currentPage === totalPages
              ? "bg-teal-400 text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {totalPages}
        </button>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ThirdBanner4() {
  const [showAll,        setShowAll]        = useState(false);
  const [activeCategory, setActiveCategory] = useState("Anesthesia, Resuscitation");
  const [sortBy,         setSortBy]         = useState("price");
  const [currentPage,    setCurrentPage]    = useState(1);
  const TOTAL_PAGES = 32;

  const visibleList = showAll
    ? [...CATEGORIES_VISIBLE, ...CATEGORIES_HIDDEN]
    : CATEGORIES_VISIBLE;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        .cat-item:hover { background: #f0fafa; }
        .brand-link:hover { color: #26c6bc; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ══════════════════════════════════
              LEFT — Categories sidebar
          ══════════════════════════════════ */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

              {/* Header */}
              <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="text-[11px] font-bold tracking-widest text-gray-800 uppercase">
                  Categories
                </h2>
              </div>

              {/* Category list */}
              <ul className="divide-y divide-gray-50">
                {visibleList.map((cat) => {
                  const isActive = cat === activeCategory;
                  return (
                    <li
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`cat-item flex items-center gap-3 px-5 py-3 cursor-pointer transition-colors ${
                        isActive ? "bg-gray-50" : ""
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                        isActive ? "bg-[#26c6bc]" : "bg-gray-300"
                      }`} />
                      <span className={`text-[13.5px] leading-snug transition-colors ${
                        isActive ? "font-bold text-gray-900" : "font-normal text-gray-600"
                      }`}>
                        {cat}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Show all button */}
              <button
                onClick={() => setShowAll((v) => !v)}
                className="w-full flex items-center justify-center gap-2 bg-[#26c6bc] hover:bg-[#1aada4] active:bg-[#159e96] text-white text-[11px] font-bold tracking-widest uppercase py-4 transition-colors"
              >
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  className={`transition-transform ${showAll ? "rotate-180" : ""}`}
                >
                  <polyline points="7 13 12 18 17 13" />
                  <polyline points="7 6 12 11 17 6"  />
                </svg>
                {showAll ? "Show Less" : "Show All Categories"}
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════
              RIGHT — Catalog + Brands + SortBar
          ══════════════════════════════════ */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">

            {/* 1️⃣ Catalog grid */}
            <section>
              <h2 className="text-[11px] font-bold tracking-widest text-gray-800 uppercase mb-4">
                Catalog
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {CATALOG_ITEMS.map((item) => (
                  <CatalogCard key={item.id} item={item} />
                ))}
              </div>
            </section>

            {/* 2️⃣ Popular Brands */}
            <section>
              <h2 className="text-[11px] font-bold tracking-widest text-gray-800 uppercase mb-4">
                Popular Brands
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-2 gap-x-4">
                  {BRANDS.map((row, ri) =>
                    row.map((brand, ci) => (
                      <span
                        key={`${ri}-${ci}`}
                        className="brand-link text-[13px] text-gray-500 cursor-pointer transition-colors hover:text-[#26c6bc] whitespace-nowrap"
                      >
                        {brand}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </section>

            {/* 3️⃣ ✅ Sort Bar — last item in right column */}
            <SortBar
              sortBy={sortBy}
              onSortChange={setSortBy}
              currentPage={currentPage}
              totalPages={TOTAL_PAGES}
              onPageChange={setCurrentPage}
            />

          </div>{/* end RIGHT */}
        </div>
      </div>
    </div>
  );
}
