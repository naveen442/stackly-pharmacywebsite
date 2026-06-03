export default function FourthBanner6() {
  return (
    <section className="w-full bg-white py-8 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .del-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="del-root max-w-screen-xl mx-auto">

        {/* ── Title ── */}
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
          Delivery & Pickup in Moscow and Region
        </h2>

        {/* ── Two tables side by side ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">

          {/* ── Left table: Within MKAD ── */}
          <div>
            <p className="text-[13px] text-gray-500 mb-3">
              Order delivery within MKAD
            </p>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-t border-b border-gray-200">
                  <th className="text-left py-2.5 px-3 text-[12px] font-semibold text-gray-500 w-1/2">
                    Order delivery
                  </th>
                  <th className="text-left py-2.5 px-3 text-[12px] font-semibold text-gray-500">
                    up to 500 rub.
                  </th>
                  <th className="text-left py-2.5 px-3 text-[12px] font-semibold text-gray-500">
                    from 500 rub.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-3 text-[13px] font-bold text-gray-900">
                    within MKAD
                  </td>
                  <td className="py-3 px-3 text-[13px] font-bold text-gray-700">
                    150 rub.
                  </td>
                  <td className="py-3 px-3 text-[13px] text-gray-500">
                    Free
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Right table: Outside MKAD ── */}
          <div>
            <p className="text-[13px] text-gray-500 mb-3">
              Order delivery outside MKAD
            </p>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-t border-b border-gray-200">
                  <th className="text-left py-2.5 px-3 text-[12px] font-semibold text-gray-500 w-1/2">
                    Order delivery
                  </th>
                  <th className="text-left py-2.5 px-3 text-[12px] font-semibold text-gray-500">
                    up to 500 rub.
                  </th>
                  <th className="text-left py-2.5 px-3 text-[12px] font-semibold text-gray-500">
                    from 500 rub.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-3 text-[13px] font-bold text-gray-900">
                    outside MKAD
                  </td>
                  <td className="py-3 px-3 text-[13px] font-bold text-gray-700">
                    150 rub.
                  </td>
                  <td className="py-3 px-3 text-[13px] text-gray-500">
                    Free
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}
