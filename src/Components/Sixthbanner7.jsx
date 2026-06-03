import { useState } from "react";

const DATA = [
  { count: 10, name: "Audrey Mckinney",   address: "1473 Ranchview Dr undefined San Jose",        phone: "(209) 555-0104" },
  { count: 1,  name: "Savannah Howard",   address: "8445 Railroad St undefined Tampa",             phone: "(201) 555-0124" },
  { count: 2,  name: "Morris Cooper",     address: "8584 W Sherman Dr undefined Desoto",           phone: "(505) 555-0125" },
  { count: 2,  name: "Victoria Lane",     address: "1921 Ranchview Dr undefined San Francisco",    phone: "(704) 555-0127" },
  { count: 9,  name: "Stella Warren",     address: "6380 Fincher Rd undefined Tucson",             phone: "(219) 555-0114" },
  { count: 9,  name: "Max Alexander",     address: "4324 Mcclellan Rd undefined Denton",           phone: "(319) 555-0115" },
  { count: 8,  name: "Guy Richards",      address: "3891 Ranchview Dr undefined Richardson",       phone: "(207) 555-0119" },
  { count: 0,  name: "Kyle Murphy",       address: "8223 Adams St undefined Glendale",             phone: "(603) 555-0123" },
  { count: 3,  name: "Morris Bell",       address: "3763 W Dallas St undefined Simi Valley",       phone: "(843) 555-0130" },
  { count: 1,  name: "Jacob Black",       address: "6405 Thornridge Cir undefined Jacksonville",   phone: "(270) 555-0117" },
  { count: 10, name: "Arlene Steward",    address: "5781 Spring St undefined Salinas",             phone: "(414) 555-0132" },
  { count: 5,  name: "Nathan Flores",     address: "9553 Railroad St undefined Lewisville",        phone: "(684) 555-0102" },
  { count: 8,  name: "Marjorie Hawkins",  address: "2118 Thornridge Cir undefined Syracuse",       phone: "(907) 555-0101" },
  { count: 3,  name: "Ralph Jones",       address: "7736 Central St undefined South Bend",         phone: "(303) 555-0105" },
  { count: 9,  name: "Marvin Mccoy",      address: "9915 Saddle Dr undefined San Francisco",       phone: "(629) 555-0129" },
  { count: 10, name: "Calvin Henry",      address: "6638 Cackson St undefined Stockton",           phone: "(307) 555-0133" },
  { count: 10, name: "Julie Webb",        address: "6386 Spring St undefined Anchorage",           phone: "(262) 555-0131" },
  { count: 3,  name: "Dianne Cooper",     address: "6513 Dogwood Ave undefined Syracuse",          phone: "(405) 555-0128" },
  { count: 7,  name: "Mitchell Russell",  address: "2496 Miller Ave undefined Lansing",            phone: "(480) 555-0103" },
];

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export default function Sixthbanner7() {
  const [expanded, setExpanded] = useState({});

  const toggle = (i) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <section className="w-full bg-white px-4 py-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');
        .dt-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="dt-root max-w-screen-xl mx-auto overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full border-collapse min-w-[600px]">

          {/* ── Header ── */}
          <thead>
            <tr className="bg-[#26c6bc]">
              {/* expand col */}
              <th className="w-10 py-3.5 px-3"/>
              <th className="text-left py-3.5 px-4 text-[12px] font-semibold text-white w-20">Count</th>
              <th className="text-left py-3.5 px-4 text-[12px] font-semibold text-white w-44">Name</th>
              <th className="text-left py-3.5 px-4 text-[12px] font-semibold text-white">Address</th>
              <th className="text-left py-3.5 px-4 text-[12px] font-semibold text-white w-40">Phone Number</th>
            </tr>
          </thead>

          {/* ── Rows ── */}
          <tbody>
            {DATA.map((row, i) => (
              <>
                <tr key={i}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => toggle(i)}>
                  {/* Chevron */}
                  <td className="py-4 px-3 text-gray-400">
                    <span className={`inline-block transition-transform duration-200 ${expanded[i] ? "rotate-180" : ""}`}>
                      <ChevronDown/>
                    </span>
                  </td>
                  <td className="py-4 px-4 text-[13px] text-gray-700">{row.count}</td>
                  <td className="py-4 px-4 text-[13px] text-gray-700">{row.name}</td>
                  <td className="py-4 px-4 text-[13px] text-gray-700">{row.address}</td>
                  <td className="py-4 px-4 text-[13px] text-gray-700">{row.phone}</td>
                </tr>
                {/* Expandable detail row */}
                {expanded[i] && (
                  <tr key={`exp-${i}`} className="bg-gray-50 border-b border-gray-100">
                    <td colSpan={5} className="px-10 py-3 text-[12px] text-gray-500">
                      <span className="font-bold text-gray-700">Details: </span>
                      {row.name} — {row.address} — {row.phone} — Count: {row.count}
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>

        </table>
      </div>
    </section>
  );
}
