import { useState } from "react";
import FooterHeart from "../assets/Images/Footer_heart_logo.svg";
import Footermedia from "../assets/Images/Footer_media_icon.svg";
/* ─── Social Icons ─── */
const VKIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.677-1.253.677-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.725 4 8.25c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.15-3.574 2.15-3.574.118-.254.322-.491.762-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.745-.576.745z"/></svg>;
const FBIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const OKIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 5.077a3.692 3.692 0 1 1 0 7.385 3.692 3.692 0 0 1 0-7.385zm5.538 9.231l-2.077 2.077 2.077 2.077-2.077 2.077-2.077-2.077-2.077 2.077-2.077-2.077 2.077-2.077-2.077-2.077 2.077-2.077 2.077 2.077 2.077-2.077z"/></svg>;
const TWIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;
const IGIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
const YTIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>;
const MailIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.4 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.81A16 16 0 0015.19 16l.96-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z"/></svg>;

const nav1 = ["About the Company","Delivery","Self-Pickup from Pharmacies","Payment","For Legal Entities","Licence"];
const nav2 = ["Feedback","Advertising on the Site","Franchise","Vacancies","Privacy Policy","User Agreement"];

const socials = [
  { icon: <VKIcon />, bg: "#4c75a3" },
  { icon: <FBIcon />, bg: "#1877f2" },
  { icon: <OKIcon />, bg: "#ed812b" },
  { icon: <TWIcon />, bg: "#1da1f2" },
  { icon: <IGIcon />, bg: "#e1306c" },
  { icon: <YTIcon />, bg: "#ff0000" },
];

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <footer className="w-full" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .footer-wrap * { font-family: 'Nunito', sans-serif; }
        .footer-bg {
          background: linear-gradient(120deg, #1a2d6d 0%, #163160 30%, #0d6e56 70%, #26c6bc 100%);
        }
        .footer-input {
          width: 100%;
          border: 1.5px solid #e5e7eb;
          border-radius: 999px;
          padding: 12px 20px;
          font-size: 13px;
          color: #374151;
          outline: none;
          font-family: 'Nunito', sans-serif;
          background: #fff;
          transition: border-color .2s;
        }
        .footer-input::placeholder { color: #9ca3af; }
        .footer-input:focus { border-color: #26c6bc; }
        .footer-cta {
          background: linear-gradient(90deg,#26c6bc,#1fb2a8);
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 13px 28px;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          font-family: 'Nunito', sans-serif;
          transition: opacity .2s;
        }
        .footer-cta:hover { opacity: .88; }
      `}</style>

      <div className="footer-wrap">

        {/* ══ QUESTION FORM CARD ══ */}
        <div className="footer-bg px-4 pt-6 pb-0">
          <div className="max-w-screen-xl mx-auto">
            <div className="bg-white rounded-2xl px-8 md:px-12 py-8 shadow-xl margin-top-negative-100" style={{ marginTop: "-3rem" }}>
              <h2 className="text-lg md:text-xl font-black text-gray-800 mb-5">
                Still Have Questions?
              </h2>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap">
                <div className="flex-1 min-w-[160px]">
                  <input className="footer-input" type="text" placeholder="Ivan Ivanovich Ivanov"
                    value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="flex-1 min-w-[160px]">
                  <input className="footer-input" type="tel" placeholder="+7 (___) ___-__-__"
                    value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <p className="text-[11px] text-gray-400 font-medium leading-snug max-w-[160px] hidden md:block shrink-0">
                  By clicking the button, you agree to the processing of{" "}
                  <span className="text-[#26c6bc] underline cursor-pointer">personal data</span>
                </p>
                <button className="footer-cta shrink-0">Ask a Question</button>
              </div>
              <p className="text-[11px] text-gray-400 font-medium mt-3 md:hidden">
                By clicking the button, you agree to the processing of{" "}
                <span className="text-[#26c6bc] underline cursor-pointer">personal data</span>
              </p>
            </div>
          </div>
        </div>

        {/* ══ MAIN FOOTER BODY ══ */}
        <div className="footer-bg px-4 pt-10 pb-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[190px_1fr_1fr_220px_1fr] gap-x-6 gap-y-8 items-start">

              {/* Logo col */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  {/* <div className="w-10 h-10 rounded-xl shrink-0 relative overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.18)" }}>
                    <div className="absolute top-1.5 left-1.5 w-4 h-4 rounded-full bg-white opacity-85" />
                    <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-white opacity-55" />
                  </div> */}
                  <img src={FooterHeart} alt="Pharmacy Logo" className="w-11 h-11" />
                  <div>
                    <div className="text-[15px] font-black leading-none">
                      <span className="text-white">Pharmacy</span>
                      <span style={{ color: "#26c6bc" }}>.ONLINE</span>
                    </div>
                    <div className="text-[10px] font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                      Your online pharmacy
                    </div>
                  </div>
                </div>
                <p className="text-[11px] font-medium leading-relaxed mt-6"
                  style={{ color: "rgba(255,255,255,0.45)" }}>
                  All rights reserved and protected by law
                </p>
              </div>

              {/* Nav 1 */}
              <div className="flex flex-col gap-2">
                {nav1.map(l => (
                  <a key={l} href="#"
                    className="flex items-center gap-2 text-[12.5px] font-medium transition-colors"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.72)"}>
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>—</span>{l}
                  </a>
                ))}
              </div>

              {/* Nav 2 */}
              <div className="flex flex-col gap-2">
                {nav2.map(l => (
                  <a key={l} href="#"
                    className="flex items-center gap-2 text-[12.5px] font-medium transition-colors"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.72)"}>
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>—</span>{l}
                  </a>
                ))}
              </div>

              {/* Contact + social */}
              <div className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex items-start gap-2.5">
                  <span style={{ color: "#26c6bc" }} className="mt-0.5"><MailIcon /></span>
                  <div>
                    <p className="text-[13px] font-black text-white leading-none">INFO@RESTOLL.RU</p>
                    <p className="text-[10px] font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Write to us
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-2.5">
                  <span style={{ color: "#26c6bc" }} className="mt-0.5"><PhoneIcon /></span>
                  <div>
                    <p className="text-[15px] font-black text-white leading-none">8-800-777-22-33</p>
                    <p className="text-[10px] font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                      24/7
                    </p>
                  </div>
                </div>
                {/* Socials */}
                {/* <div className="flex items-center gap-2 flex-wrap">
                  {socials.map((s, i) => (
                    <button key={i}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80 shrink-0"
                      style={{ background: s.bg }}>
                      {s.icon}
                    </button>
                  ))}
                </div> */}
                <button>
                  <img src={Footermedia} alt="Footer Media Logo" />
                </button>
              </div>

              {/* Legal */}
              <div>
                <p className="text-[11px] font-medium leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}>
                  Limited Liability Company «ePharmacy»; Address: Moscow, Frunzenskaya
                  Embankment, building 42, basement floor, room I, office 2; Licence:
                  LO-50-02-007632 dated 27 November 2020; LO-77-02-011346 dated
                  22 December 2020; OGRN: 1147746631988, TIN 7704865540
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
