import { useState } from "react";
import Location from "../assets/Images/location.svg"; // adjust path to your file location
import HeartHeader from "../assets/Images/Heart_Header_logo.svg";
import social from "../assets/Images/social_media_image.svg";
import  Mail from "../assets/Images/Mail_open.svg";

import medical from "../assets/Images/medical.svg";
import vitamins from "../assets/Images/vitamins.svg";
import beauty from "../assets/Images/beauty.svg";
import hygiene from "../assets/Images/hygiene.svg";
import lenses from "../assets/Images/lenses.svg";
import motherChild from "../assets/Images/motherChild.svg";
import medSupplies from "../assets/Images/medSupplies.svg";
import petProducts from "../assets/Images/petProducts.svg";
import medEquipment from "../assets/Images/medEquipment.svg";

import { Link } from "react-router-dom";

// const NAV_ITEMS = [
//   { label: "Medicines",              icon: medical },
//   { label: "Vitamins & Supplements", icon: vitamins },
//   { label: "Beauty",                 icon: beauty },
//   { label: "Hygiene",                icon: hygiene },
//   { label: "Lenses",                 icon: lenses },
//   { label: "Mother & Child",         icon: motherChild },
//   { label: "Med Supplies",           icon: medSupplies },
//   { label: "Pet Products",           icon: petProducts },
//   { label: "Med Equipment",          icon: medEquipment },
// ];

const NAV_ITEMS = [
  { label: "Medicines",              icon: medical,      path: "/" },
  { label: "Vitamins & Supplements", icon: vitamins,     path: "/vitamins" },
  { label: "Beauty",                 icon: beauty,       path: "/Beauty" },
  { label: "Hygiene",                icon: hygiene,      path: "/Hygiene" },
  { label: "Lenses",                 icon: lenses,       path: "/Lenses" },
  { label: "Mother & Child",         icon: motherChild,  path: "/Mother-&-Child" },
  { label: "Med Supplies",           icon: medSupplies,  path: "/med-supplies" },
  { label: "Pet Products",           icon: petProducts,  path: "/pet-products" },
  { label: "Med Equipment",          icon: medEquipment, path: "/med-equipment" },

];
const LocationIcon = () => (
  <img
    src={Location}
    alt="Location"
    style={{ width: "24px", height: "24px", marginLeft: "200px" }}
  />
);
const ChevronDownIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const MenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const HeartIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
//   </svg>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2FD3AE"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>

);
const UserIcon = () => (
 
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
      fill="#2FD3AE"
    />
  </svg>

);
// const MailIcon = ({ size = 20 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
//   </svg>
// );
const PhoneIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81A16 16 0 0 0 15.19 16l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z"/>
  </svg>
);
// const SearchIcon = () => (
//   <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
//   </svg>
// );
const SearchIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="49"
      height="49"
      rx="24.5"
      fill="white"
      stroke="#E0E0E0"
    />
    <path
      d="M29.4999 27H28.7099L28.4299 26.73C29.6299 25.33 30.2499 23.42 29.9099 21.39C29.4399 18.61 27.1199 16.39 24.3199 16.05C20.0899 15.53 16.5299 19.09 17.0499 23.32C17.3899 26.12 19.6099 28.44 22.3899 28.91C24.4199 29.25 26.3299 28.63 27.7299 27.43L27.9999 27.71V28.5L32.2499 32.75C32.6599 33.16 33.3299 33.16 33.7399 32.75C34.1499 32.34 34.1499 31.67 33.7399 31.26L29.4999 27ZM23.4999 27C21.0099 27 18.9999 24.99 18.9999 22.5C18.9999 20.01 21.0099 18 23.4999 18C25.9899 18 27.9999 20.01 27.9999 22.5C27.9999 24.99 25.9899 27 23.4999 27Z"
      fill="#2FD3AE"
    />
  </svg>
)
// const CartIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
//   </svg>
// );
const CartIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" fill="white" stroke="#E0E0E0" />
    <path
      d="M28.55 26C29.3 26 29.96 25.59 30.3 24.97L33.88 18.48C34.25 17.82 33.77 17 33.01 17H18.21L17.27 15H14V17H16L19.6 24.59L18.25 27.03C17.52 28.37 18.48 30 20 30H32V28H20L21.1 26H28.55ZM19.16 19H31.31L28.55 24H21.53L19.16 19ZM20 31C18.9 31 18.01 31.9 18.01 33C18.01 34.1 18.9 35 20 35C21.1 35 22 34.1 22 33C22 31.9 21.1 31 20 31ZM30 31C28.9 31 28.01 31.9 28.01 33C28.01 34.1 28.9 35 30 35C31.1 35 32 34.1 32 33C32 31.9 31.1 31 30 31Z"
      fill="#2FD3AE"
    />
  </svg>
);
// VK, Instagram, YouTube SVG icons
// const VKIcon = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.677-1.253.677-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.725 4 8.25c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.15-3.574 2.15-3.574.118-.254.322-.491.762-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.745-.576.745z"/>
//   </svg>
// );
// const IGIcon = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
//   </svg>
// );
// const YTIcon = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
//   </svg>
// );

export default function PharmacyHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full font-sans">
      {/* Google Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        * { font-family: 'Nunito', sans-serif; }
        .nav-scroll::-webkit-scrollbar { display: none; }
        .nav-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .callback-btn {
          background: linear-gradient(90deg, #16a97c 0%, #0dc99e 100%);
        }
        .callback-btn:hover {
          background: linear-gradient(90deg, #0f9068 0%, #0ab389 100%);
        }
        .nav-gradient {
          background: linear-gradient(90deg, #1a3b6e 0%, #163263 50%, #0d6d52 100%);
        }
        .logo-pill {
          background: linear-gradient(135deg, #16a97c 0%, #0a7a57 100%);
        }
      `}</style>

      {/* ── TOP BAR ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 py-1.5 flex items-center justify-between flex-wrap gap-y-1">
          {/* Left */}
          <div className="flex items-center gap-4 -ml-[200px]">
            <button className="flex items-center gap-1.5 text-gray-600 text-xs hover:text-teal-600 transition-colors">
              {/* <span className="text-teal-500"><LocationIcon /></span> */}
              <span className="text-teal-500"><LocationIcon /></span>
              <span className="font-semibold">Moscow &amp; Region</span>
              <span className="text-gray-400"><ChevronDownIcon /></span>
            </button>
            <div className="w-px h-4 bg-gray-200 hidden sm:block" />
            <button className="hidden sm:flex items-center gap-1.5 text-gray-500 text-xs hover:text-teal-600 transition-colors">
              <span className="text-teal-400"><MenuIcon /></span>
              <span>Service Pages</span>
            </button>
          </div>
          {/* Right */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-gray-500 text-xs hover:text-teal-600 transition-colors">
               <span className="hidden sm:inline">Favourites</span>
              <HeartIcon />
             
            </button>
            <div className="w-px h-4 bg-gray-200" />
            <button className="flex items-center gap-1.5 text-gray-500 text-xs hover:text-teal-600 transition-colors">
              <span className="hidden sm:inline">My Account</span>
              <UserIcon />
            </button>
          </div>
        </div>
      </div>

      {/* ── MIDDLE BAR ── */}
      <div className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between gap-3 flex-wrap lg:flex-nowrap">

          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            {/* <div className="logo-pill w-11 h-11 rounded-xl flex items-center justify-center relative overflow-hidden shadow-md">
              <div className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full bg-white opacity-90" />
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 rounded-full bg-white opacity-60" />
            </div> */}
            <img src={HeartHeader} alt="Pharmacy Logo" className="w-11 h-11" />
            
            <div>
              <div className="text-lg font-black leading-none tracking-tight">
                <span className="text-gray-900">Pharmacy</span>
                <span className="text-teal-500">.online</span>
              </div>
              <div className="text-xs text-gray-400 font-normal mt-0.5">Your online pharmacy</div>
            </div>
            {/* Social buttons */}
            <div className="hidden md:flex items-center gap-1.5 ml-1">
              {/* <button className="w-7 h-7 rounded-md bg-[#4c75a3] text-white flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="VK">
                <VKIcon />
              </button>
              <button className="w-7 h-7 rounded-md bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Instagram">
                <IGIcon />
              </button>
              <button className="w-7 h-7 rounded-md bg-red-600 text-white flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="YouTube">
                <YTIcon />
              </button> */}
                <img src={social} alt="Social Media" className="w-20" />
            </div>
          </div>

          {/* Email contact */}
          <div className="hidden xl:flex items-center gap-2.5 shrink-0">
            {/* <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
              <MailIcon size={17} />
            </div> */}
            <div>
                <img src={Mail} alt="Mail Icon" className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-500" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800 leading-none">INFO@RESTOLL.RU</div>
              <div className="text-xs text-gray-400 mt-0.5">Write to us</div>
            </div>
          </div>

          {/* Phone 1 */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
              <PhoneIcon size={17} />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800 leading-none">8-800-777-22-33</div>
              <div className="text-xs text-gray-400 mt-0.5">24/7 Support</div>
            </div>
          </div>

          {/* Phone 2 */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
              <PhoneIcon size={17} />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800 leading-none">8 (495) 223-34-03</div>
              <div className="text-xs text-gray-400 mt-0.5">Online Pharmacy</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-auto lg:ml-0">
            <button
              className="w-10 h-10 rounded-lg  bg-white flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
            {/* <button className="callback-btn text-white rounded px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider whitespace-nowrap hover:shadow-md transition-shadow">
              Request a Call
            </button> */}
            <button
  className="flex items-center justify-center text-white text-xs font-extrabold uppercase tracking-widest whitespace-nowrap transition-all hover:opacity-90 active:scale-95"
  style={{
    background: "#2FD3AE",
    borderRadius: "25px",
    width: "228px",
    height: "50px",
    border: "none",
    boxShadow: "0px 5px 10px rgba(47, 211, 174, 0.3)",
    letterSpacing: "1.5px",
  }}
>
  REQUEST A CALL
</button>
            <button
              className="w-10 h-10 rounded-lg  bg-white flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors"
              aria-label="Cart"
            >
              <CartIcon />
            </button>
          </div>
        </div>
      </div>

      {/* ── NAV BAR ── */}
      {/* <nav className="nav-gradient w-full" aria-label="Product categories">
        <div className="max-w-screen-xl mx-auto px-2">
          <div className="nav-scroll flex items-center overflow-x-auto">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1.5 px-3.5 py-3.5 text-white/90 hover:text-white text-xs font-bold uppercase tracking-wide whitespace-nowrap border-b-2 border-transparent hover:border-teal-400 transition-all shrink-0 group"
              >
                <span className="text-sm opacity-75 group-hover:opacity-100">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav> */}
      <nav className="nav-gradient w-full" aria-label="Product categories">
  <div className="max-w-screen-xl mx-auto px-2">
    <div className="nav-scroll flex items-center overflow-x-auto">
      {NAV_ITEMS.map((item) => (
        <Link to={item.path} // ← use path for navigation
          key={item.label}
          className="flex items-center gap-1.5 px-3.5 py-3.5 text-white/90 hover:text-white text-xs font-bold uppercase tracking-wide whitespace-nowrap border-b-2 border-transparent hover:border-teal-400 transition-all shrink-0 group"
        >
          {/* SVG image icon */}
          <img
            src={item.icon}
            alt={item.label}
            className="w-5 h-5 opacity-75 group-hover:opacity-100 transition-opacity"
            style={{ filter: "brightness(0) invert(1)" }} // ← makes icon white color
          />
          {item.label}
        </Link>
      ))}
    </div>
  </div>
</nav>
    </div>
  );
}
