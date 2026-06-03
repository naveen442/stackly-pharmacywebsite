import homeIcon from "../assets/Images/fifth_home.png";

const crumbs = [
  { label: "Home",                  href: "#", icon: true  },
  { label: "Medicines",             href: "#"              },
  { label: "Enzyme preparations",   href: "#"              },
  { label: "Irritable bowel",       href: null             },
];

const ChevronRight = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
    stroke="#26c6bc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

export default function Fifthbanner1() {
  return (
    <nav className="w-full bg-white px-4 py-2">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');
        .bc-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="bc-root max-w-screen-xl mx-auto flex items-center flex-wrap gap-1">
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-1">
            {/* Chevron separator (not before first item) */}
            {i > 0 && <ChevronRight />}

            {/* Crumb */}
            {c.href ? (
              <a href={c.href}
                className="flex items-center gap-1 text-[12px] font-semibold text-[#26c6bc] hover:underline whitespace-nowrap">
                {c.icon && (
                  <img src={homeIcon} alt="Home" className="w-4 h-4 object-contain"/>
                )}
                {c.label}
              </a>
            ) : (
              <span className="flex items-center gap-1 text-[12px] font-semibold text-gray-400 whitespace-nowrap">
                {c.label}
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
