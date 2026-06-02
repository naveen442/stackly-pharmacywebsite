import { useState } from "react";

export default function StillHaveQuestions() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}, ${phone}`);
  };

  return (
    <section className="w-full bg-white py-10 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .shq-root * { font-family: 'Nunito', sans-serif; }
        .shq-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 4px 40px rgba(0,0,0,0.07);
        }
        .shq-input {
          border: 1.5px solid #e5e7eb;
          border-radius: 50px;
          padding: 14px 22px;
          font-size: 13px;
          color: #6b7280;
          outline: none;
          width: 100%;
          transition: border-color 0.2s;
          font-family: 'Nunito', sans-serif;
          background: white;
        }
        .shq-input::placeholder { color: #adb5bd; }
        .shq-input:focus { border-color: #26c6bc; }
        .shq-btn {
          background: linear-gradient(90deg, #26c6bc 0%, #20b2aa 100%);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 14px 32px;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.1s;
          font-family: 'Nunito', sans-serif;
        }
        .shq-btn:hover { opacity: 0.9; }
        .shq-btn:active { transform: scale(0.98); }
      `}</style>

      <div className="shq-root max-w-screen-xl mx-auto">
        <div className="shq-card px-8 md:px-14 py-10">

          {/* ── Title ── */}
          <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-7">
            Still Have Questions?
          </h2>

          {/* ── Form row ── */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            {/* Name */}
            <div className="flex-1 min-w-0">
              <input
                type="text"
                className="shq-input"
                placeholder="Ivan Ivanovich Ivanov"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="flex-1 min-w-0">
              <input
                type="tel"
                className="shq-input"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>

            {/* Consent text */}
            <p className="text-[11.5px] text-gray-400 font-medium leading-snug shrink-0 max-w-[180px] hidden md:block">
              By clicking the button, you agree to the processing of{" "}
              <span className="text-[#26c6bc] underline cursor-pointer hover:text-[#1aada4] transition-colors">
                personal data
              </span>
            </p>

            {/* Submit button */}
            <button type="submit" className="shq-btn">
              Ask a Question
            </button>
          </form>

          {/* Consent text mobile */}
          <p className="text-[11px] text-gray-400 font-medium leading-snug mt-4 md:hidden">
            By clicking the button, you agree to the processing of{" "}
            <span className="text-[#26c6bc] underline cursor-pointer">personal data</span>
          </p>

        </div>
      </div>
    </section>
  );
}
