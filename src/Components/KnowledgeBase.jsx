import { useState } from "react";

/* ─── SVG Icons per category ─── */
const Icons = {
  medicines: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  vitamins: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7v6a7 7 0 0 1-14 0V9a7 7 0 0 1 7-7z"/>
      <line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/>
    </svg>
  ),
  beauty: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  ),
  hygiene: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  medSupplies: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f7941d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="14" rx="2"/>
      <path d="M3 10h18"/><path d="M8 6V4h8v2"/>
    </svg>
  ),
  petCare: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f7941d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703.383 1.297.875 1.7C4.656 12.763 6.232 13 8 13c2.7 0 4.5-1.5 4.5-3.5C12.5 7.5 11.5 5.172 10 5.172z"/>
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-.383 1.297-.875 1.7-.281 1.063-1.857 1.3-3.625 1.3-2.7 0-4.5-1.5-4.5-3.5 0-1.828 1-4.328 1.5-4.328z"/>
      <path d="M8 14c0 4 2.5 6 4 6s4-2 4-6"/>
    </svg>
  ),
  momBaby: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
      <path d="M3 20a6 6 0 0 1 12 0"/>
      <circle cx="18" cy="8" r="3"/>
      <path d="M15 20a3 3 0 0 1 6 0"/>
    </svg>
  ),
  lenses: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>
      <line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/>
    </svg>
  ),
  medTech: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#26c6bc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  ),
};

/* ─── Category data ─── */
const categories = [
  {
    id: "medicines",
    title: "Medicines",
    icon: Icons.medicines,
    bg: "bg-white",
    items: [
      "Obstetrics, Gynaecology","Allergy","Anaesthesia, Resuscitation","Antibiotics",
      "Blood Diseases","Pain, Fever","Haemorrhoids","Eyes","Lice, Scabies",
      "Homeopathy","Diabetes","Diagnostic Agents","Respiratory System",
      "Stomach, Intestine, Liver","Teeth & Mouth","Immune System","Skin",
      "Urogenital System","Metabolic Disorders","Neurology, Psychiatry",
      "Antiseptics","Oncology","Poisoning","Nutritional Mixtures",
      "Antiviral Agents","Antifungal Agents","Other",
    ],
    span: "row-span-3",
  },
  {
    id: "vitamins",
    title: "Vitamins & Supplements",
    icon: Icons.vitamins,
    bg: "bg-white",
    items: [
      "Amino Acids","L-Carnitine","Antioxidants","Supplements for Vision",
      "Multivitamins","Supplements for Bad Habits","Supplements for Weight",
      "Supplements for Diabetes","Supplements for Menopause","Supplements for Colds",
      "Sedative Supplements","Vitamins & Minerals","Vitamins for Pregnant Women",
      "Supplements for Diabetes","Supplements for Menopause","Supplements for Colds",
    ],
    span: "row-span-2",
  },
  {
    id: "beauty",
    title: "Beauty",
    icon: Icons.beauty,
    bg: "bg-white",
    items: [
      "Glass Partitions for Home","Glass Partitions for Office","Glass Partitions",
      "Decorative Partitions","Fire-resistant Partitions",
    ],
    span: "row-span-1",
  },
  {
    id: "hygiene",
    title: "Hygiene",
    icon: Icons.hygiene,
    bg: "bg-white",
    items: [
      "Glass Partitions for Home","Glass Partitions for Office","Glass Partitions",
      "Decorative Partitions","Fire-resistant Partitions",
    ],
    span: "row-span-1",
  },
  {
    id: "medSupplies",
    title: "Medical Supplies",
    icon: Icons.medSupplies,
    bg: "bg-white",
    items: [
      "Glass Partitions for Home","Glass Partitions for Office","Glass Partitions",
      "Decorative Partitions","Fire-resistant Partitions",
    ],
    span: "row-span-1",
  },
  {
    id: "petCare",
    title: "Pet Care",
    icon: Icons.petCare,
    bg: "bg-white",
    items: [
      "Glass Partitions for Home","Glass Partitions for Office","Glass Partitions",
      "Decorative Partitions","Fire-resistant Partitions",
    ],
    span: "row-span-1",
  },
  {
    id: "momBaby",
    title: "Mom & Baby",
    icon: Icons.momBaby,
    bg: "bg-white",
    items: [
      "Glass Partitions for Home","Glass Partitions for Office","Glass Partitions",
      "Decorative Partitions","Fire-resistant Partitions",
    ],
    span: "row-span-1",
  },
  {
    id: "lenses",
    title: "Contact Lenses",
    icon: Icons.lenses,
    bg: "bg-white",
    items: [
      "Glass Partitions for Home","Glass Partitions for Office","Glass Partitions",
      "Decorative Partitions","Fire-resistant Partitions",
    ],
    span: "row-span-1",
  },
  {
    id: "medTech",
    title: "Medical Devices",
    icon: Icons.medTech,
    bg: "bg-white",
    items: [
      "Glass Partitions for Home","Glass Partitions for Office","Glass Partitions",
      "Decorative Partitions","Fire-resistant Partitions",
    ],
    span: "row-span-1",
  },
];

/* ─── Single category card ─── */
const CategoryCard = ({ cat }) => {
  const [expanded, setExpanded] = useState(false);
  const showAll = expanded || cat.items.length <= 8;
  const visible = showAll ? cat.items : cat.items.slice(0, cat.id === "medicines" ? 27 : 5);

  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm border border-gray-100 h-fit">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <span className="shrink-0">{cat.icon}</span>
        <h3 className="text-[14px] font-black text-gray-800">{cat.title}</h3>
      </div>

      {/* Item list */}
      <ul className="flex flex-col gap-1.5">
        {visible.map((item, i) => (
          <li key={i} className="flex items-center gap-2 group cursor-pointer">
            <span className="w-4 shrink-0 text-gray-300 text-xs font-bold">—</span>
            <span className="text-[12px] text-gray-500 font-medium group-hover:text-[#26c6bc] transition-colors leading-snug">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* All categories link */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-[#26c6bc] hover:text-[#1aada4] text-[11px] font-black uppercase tracking-wide transition-colors mt-1 self-start"
      >
        <span className="text-sm">»</span>
        {expanded ? "Collapse" : "All Categories"}
      </button>
    </div>
  );
};

/* ─── Main export ─── */
export default function KnowledgeBase() {
  return (
    <section className="w-full bg-[#f5f7fa] py-10 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .kb-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="kb-root max-w-screen-xl mx-auto">
        {/*
          Layout matching screenshot:
          Col 1 (tall): Medicines (spans 3 rows)
          Col 2: Vitamins & Supplements (spans 2 rows), Mom & Baby, Lenses, Med Devices
          Col 3: Beauty, Medical Supplies, Mom & Baby
          Col 4: Hygiene, Pet Care, Med Devices

          We replicate this with CSS grid areas on desktop,
          and single column on mobile.
        */}

        {/* ── Desktop grid ── */}
        <div className="hidden lg:grid gap-4" style={{
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "auto",
          alignItems: "start"
        }}>
          {/* Medicines — tall left column */}
          <div style={{ gridRow: "1 / 4" }}>
            <CategoryCard cat={categories[0]} />
          </div>

          {/* Vitamins — spans 2 rows in col 2 */}
          <div style={{ gridRow: "1 / 3" }}>
            <CategoryCard cat={categories[1]} />
          </div>

          {/* Beauty — col 3 row 1 */}
          <div>
            <CategoryCard cat={categories[2]} />
          </div>

          {/* Hygiene — col 4 row 1 */}
          <div>
            <CategoryCard cat={categories[3]} />
          </div>

          {/* Medical Supplies — col 3 row 2 */}
          <div>
            <CategoryCard cat={categories[4]} />
          </div>

          {/* Pet Care — col 4 row 2 */}
          <div>
            <CategoryCard cat={categories[5]} />
          </div>

          {/* Mom & Baby — col 2 row 3 */}
          <div>
            <CategoryCard cat={categories[6]} />
          </div>

          {/* Contact Lenses — col 3 row 3 */}
          <div>
            <CategoryCard cat={categories[7]} />
          </div>

          {/* Medical Devices — col 4 row 3 */}
          <div>
            <CategoryCard cat={categories[8]} />
          </div>
        </div>

        {/* ── Mobile/Tablet grid ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
