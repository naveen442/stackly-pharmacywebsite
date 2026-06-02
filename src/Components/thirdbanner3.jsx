import { useState } from "react";

import product1 from "../assets/Images/month_product_1.svg";
import product2 from "../assets/Images/month_product_2.svg";
import product3 from "../assets/Images/month_product_3.svg";
import product4 from "../assets/Images/month_product_4.svg";
import product5 from "../assets/Images/month_product_5.svg";

// ─── 5 images cycle for all cards ─────────────────────────────────────────────
const PRODUCT_IMAGES = [product1, product2, product3, product4, product5];

// ─── helpers ──────────────────────────────────────────────────────────────────

const fmt = (n) => n.toLocaleString("ru-RU");

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => {
        const full = rating >= s;
        const half = !full && rating >= s - 0.5;
        return (
          <svg key={s} width="13" height="13" viewBox="0 0 24 24">
            {half && (
              <defs>
                <linearGradient id={`hg${s}`}>
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
            )}
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={full ? "#f59e0b" : half ? `url(#hg${s})` : "#d1d5db"}
              stroke="none"
            />
          </svg>
        );
      })}
    </div>
  );
}

// ─── badge ────────────────────────────────────────────────────────────────────

function Badge({ children, color = "teal" }) {
  const cls =
    color === "teal"
      ? "bg-teal-400 text-white"
      : color === "orange"
      ? "bg-orange-400 text-white"
      : "bg-gray-300 text-gray-600";
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-sm ${cls}`}>
      {children}
    </span>
  );
}

// ─── product card ─────────────────────────────────────────────────────────────

const NAMES = [
  "Velson film-coated tablets 3 mg, 30 pcs.",
  "Velson film-coated tablets 3 mg, 30 pcs.",
  "Velson film-coated tablets 3 mg, 30 pcs.",
  "Velson film-coated tablets 3 mg, 30 pcs.",
];

function ProductCard({ idx = 0, inStock = true, price = 41108, oldPrice = 49999 }) {
  const [added, setAdded] = useState(false);
  const name = NAMES[idx % NAMES.length];

  // cycle through the 5 real images
  const imgSrc = PRODUCT_IMAGES[idx % PRODUCT_IMAGES.length];

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200 relative">
      {/* badge */}
      <div className="absolute top-2 left-2 z-10">
        <Badge color="teal">Day product</Badge>
      </div>

      {/* ── Real product image ── */}
      <div className="bg-gray-50 h-36 flex items-center justify-center">
        <img
          src={imgSrc}
          alt={name}
          className="h-[120px] w-auto object-contain"
        />
      </div>

      <div className="p-3 flex flex-col flex-1 gap-1.5">
        {/* stock + stars */}
        <div className="flex items-center justify-between">
          <span className={`text-xs font-medium ${inStock ? "text-green-500" : "text-red-400"}`}>
            {inStock ? "In stock" : "Out of stock"}
          </span>
          <Stars rating={3.5} />
        </div>

        {/* name */}
        <p className="text-gray-800 text-xs font-semibold leading-snug min-h-[2.5rem]">{name}</p>

        {/* details */}
        <ul className="text-[11px] text-gray-400 space-y-0.5">
          {[
            ["Brand", "Lirina"],
            ["Pack qty", "10 pcs"],
            ["Item code", "153249"],
          ].map(([k, v]) => (
            <li key={k} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
              {k}: <span className="text-gray-600">{v}</span>
            </li>
          ))}
        </ul>

        {/* price + cart */}
        <div className="flex items-end justify-between mt-auto pt-2">
          <div>
            <p className="text-gray-900 text-base font-bold">{fmt(price)} PY6.</p>
            {oldPrice && (
              <p className="text-red-400 text-xs line-through">{fmt(oldPrice)}  PY6.</p>
            )}
          </div>
          <button
            onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1000); }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
              added ? "bg-teal-700 scale-90" : "bg-teal-400 hover:bg-teal-500 active:scale-90"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── range slider ─────────────────────────────────────────────────────────────

function RangeSlider({ min, max, value, onChange }) {
  const pct = (v) => ((v - min) / (max - min)) * 100;
  return (
    <div className="relative h-5 flex items-center">
      <div className="absolute w-full h-1.5 rounded-full bg-gray-200" />
      <div
        className="absolute h-1.5 rounded-full"
        style={{
          left: `${pct(value[0])}%`,
          width: `${pct(value[1]) - pct(value[0])}%`,
          background: "linear-gradient(90deg,#2dd4bf,#facc15)",
        }}
      />
      {[0, 1].map((i) => (
        <input
          key={i}
          type="range"
          min={min}
          max={max}
          value={value[i]}
          onChange={(e) => {
            const next = [...value];
            next[i] = Number(e.target.value);
            if (i === 0 && next[0] > next[1]) return;
            if (i === 1 && next[1] < next[0]) return;
            onChange(next);
          }}
          className="absolute w-full h-1.5 appearance-none bg-transparent cursor-pointer"
          style={{ zIndex: i === 1 ? 2 : 1 }}
        />
      ))}
    </div>
  );
}

// ─── filter sidebar ───────────────────────────────────────────────────────────

const COUNTRIES = ["Belarus", "Germany", "Greece", "Ireland", "Spain", "Italy", "China"];
const EFFECTS = [
  "For bronchi", "For hair", "For eyes", "For throat",
  "For lips", "For respiratory tract", "For stomach",
];

function FilterSidebar({ open, onClose }) {
  const [price, setPrice] = useState([2365, 865878]);
  const [countries, setCountries] = useState(["Italy"]);
  const [effects, setEffects] = useState(["For respiratory tract"]);
  const [stock, setStock] = useState("inStock");
  const [effectSearch, setEffectSearch] = useState("");
  const [collapsed, setCollapsed] = useState({ price: false, country: false, effect: false, stock: false });

  const toggle = (arr, setArr, val) =>
    setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

  const Section = ({ id, label, children }) => (
    <div className="border-b border-gray-100 py-3">
      <button
        className="flex justify-between items-center w-full text-sm font-medium text-gray-700"
        onClick={() => setCollapsed((c) => ({ ...c, [id]: !c[id] }))}
      >
        {label}
        <svg
          className={`w-3 h-3 text-gray-400 transition-transform ${collapsed[id] ? "rotate-180" : ""}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {!collapsed[id] && <div className="mt-3">{children}</div>}
    </div>
  );

  const Checkbox = ({ label, checked, onChange, highlight }) => (
    <label className="flex items-center gap-2 cursor-pointer py-0.5">
      <div
        onClick={onChange}
        className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors ${
          checked ? "bg-teal-400 border-teal-400" : "border-gray-300"
        }`}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className={`text-sm ${highlight ? "text-teal-500" : "text-gray-600"}`}>{label}</span>
    </label>
  );

  const sidebarContent = (
    <div className="bg-white rounded-xl border border-gray-100 p-4 text-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-gray-800 tracking-wide uppercase text-xs">Filter</h2>
        {open !== undefined && (
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 lg:hidden">✕</button>
        )}
      </div>

      {/* Price */}
      <Section id="price" label="Price">
        <div className="flex gap-2 mb-3">
          {["from " + fmt(price[0]), "to " + fmt(price[1])].map((v, i) => (
            <input key={i} readOnly value={v}
              className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs text-gray-600 bg-gray-50" />
          ))}
        </div>
        <RangeSlider min={2365} max={865878} value={price} onChange={setPrice} />
        <div className="flex justify-between text-[10px] text-gray-400 mt-1">
          <span>{fmt(2365)}</span><span>{fmt(865878)}</span>
        </div>
      </Section>

      {/* Country */}
      <Section id="country" label="Country">
        <div className="space-y-1">
          {COUNTRIES.map((c) => (
            <Checkbox
              key={c} label={c}
              checked={countries.includes(c)}
              onChange={() => toggle(countries, setCountries, c)}
              highlight={countries.includes(c)}
            />
          ))}
        </div>
      </Section>

      {/* Effect */}
      <Section id="effect" label="Effect">
        <div className="relative mb-2">
          <input
            value={effectSearch}
            onChange={(e) => setEffectSearch(e.target.value)}
            placeholder="Search..."
            className="w-full border border-gray-200 rounded px-3 py-1.5 text-xs text-gray-600 pr-8"
          />
          <svg className="absolute right-2 top-2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
        </div>
        <div className="space-y-1">
          {EFFECTS.filter((e) => e.toLowerCase().includes(effectSearch.toLowerCase())).map((e) => (
            <Checkbox
              key={e} label={e}
              checked={effects.includes(e)}
              onChange={() => toggle(effects, setEffects, e)}
              highlight={effects.includes(e)}
            />
          ))}
        </div>
      </Section>

      {/* Availability */}
      <Section id="stock" label="Availability">
        {[["inStock", "In stock"], ["order", "Pre-order"]].map(([val, lbl]) => (
          <label key={val} className="flex items-center gap-2 cursor-pointer py-0.5">
            <div
              onClick={() => setStock(val)}
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors ${
                stock === val ? "border-teal-400" : "border-gray-300"
              }`}
            >
              {stock === val && <div className="w-2 h-2 rounded-full bg-teal-400" />}
            </div>
            <span className={`text-sm ${stock === val ? "text-teal-500" : "text-gray-600"}`}>{lbl}</span>
          </label>
        ))}
      </Section>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold rounded-lg py-2.5 transition-colors">
          Show
        </button>
        <button className="px-4 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors">
          Reset
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* desktop sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0 sticky top-4 self-start">
        {sidebarContent}
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <div className="absolute left-0 top-0 bottom-0 w-72 overflow-y-auto p-4">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* floating show button on mobile */}
      {!open && (
        <button
          onClick={() => {}}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-teal-400 text-white text-xs font-bold px-2 py-3 rounded-r-lg lg:hidden"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Show
        </button>
      )}
    </>
  );
}

// ─── feature banners ──────────────────────────────────────────────────────────

const FEATURES = [
  { icon: "🏪", title: "Assortment", desc: "Equipment, furniture, tableware & inventory" },
  { icon: "🚀", title: "Fast delivery", desc: "To any point in Russia, quickly" },
  { icon: "✅", title: "Guarantee", desc: "All products are certified" },
  { icon: "💰", title: "Low prices", desc: "We strive to maintain the lowest prices" },
];

function FeatureBanner() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
      {FEATURES.map((f) => (
        <div key={f.title} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-3">
          <span className="text-2xl">{f.icon}</span>
          <div>
            <p className="text-xs font-bold text-gray-700">{f.title}</p>
            <p className="text-[11px] text-gray-400 leading-tight">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── pagination ───────────────────────────────────────────────────────────────

function Pagination({ current = 1, total = 32 }) {
  return (
    <div className="flex items-center gap-1 my-6">
      {[1, 2, 3, 4, "...", total].map((p, i) => (
        <button
          key={i}
          className={`min-w-[32px] h-8 rounded px-2 text-sm font-medium transition-colors ${
            p === current
              ? "bg-teal-400 text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

// ─── horizontal product row ───────────────────────────────────────────────────

function HorizontalRow({ title, startIdx = 0 }) {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <div className="flex gap-1">
          {["←", "→"].map((arrow) => (
            <button key={arrow} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 text-sm">
              {arrow}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <ProductCard key={i} idx={startIdx + i} price={41108} oldPrice={i % 2 === 0 ? 43595 : 49999} />
        ))}
      </div>
    </section>
  );
}

// ─── main page ────────────────────────────────────────────────────────────────

export default function ThirdBanner3() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const mainProducts = Array.from({ length: 16 });

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        input[type=range] { -webkit-appearance: none; }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #facc15;
          border: 2px solid #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,.25);
          cursor: pointer;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* mobile filter toggle */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="lg:hidden mb-4 flex items-center gap-2 text-sm font-semibold text-teal-500 border border-teal-300 rounded-lg px-3 py-1.5"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="10" y2="18"/>
          </svg>
          Filters
        </button>

        <div className="flex gap-6 items-start">
          {/* sidebar */}
          <FilterSidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />

          {/* main content */}
          <div className="flex-1 min-w-0">
            {/* product grid – 4 cols */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
              {mainProducts.map((_, i) => (
                <ProductCard
                  key={i}
                  idx={i}
                  inStock={i !== 3 && i !== 7}
                  price={41108}
                  oldPrice={49999}
                />
              ))}
            </div>

            {/* feature banners */}
            <FeatureBanner />

            {/* second batch of products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <ProductCard key={i + 20} idx={i} price={41108} oldPrice={49999} />
              ))}
            </div>

            <Pagination current={1} total={32} />

            {/* promo rows */}
            <HorizontalRow title="Deal of the month" startIdx={0} />
            <HorizontalRow title="Recently viewed" startIdx={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
