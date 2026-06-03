export default function Fourthbanner7() {
  const pharmacies = Array.from({ length: 6 }, () => ({
    address: "EAPTEKA Moscow region, Podolsk city, Sverdlova st., building No. 13",
    dispatch: "Within an hour",
    cost: "Free",
  }));

  return (
    <section className="w-full bg-white py-8 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .pickup-root * { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="pickup-root max-w-screen-xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
          Pickup in Moscow and Region
        </h2>
        <p className="text-[13px] text-gray-500 mb-4">
          Order delivery within MKAD
        </p>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse min-w-[480px]">
            {/* Header */}
            <thead>
              <tr className="bg-gray-50 border-t border-b border-gray-200">
                <th className="text-left py-3 px-4 text-[12px] font-semibold text-gray-500 w-full">
                  Pharmacy list
                </th>
                <th className="text-left py-3 px-4 text-[12px] font-semibold text-gray-500 whitespace-nowrap">
                  Item dispatch
                </th>
                <th className="text-left py-3 px-4 text-[12px] font-semibold text-gray-500 whitespace-nowrap">
                  Cost
                </th>
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {pharmacies.map((p, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3.5 px-4 text-[13px] text-gray-800">
                    {p.address}
                  </td>
                  <td className="py-3.5 px-4 text-[13px] text-gray-400 whitespace-nowrap">
                    {p.dispatch}
                  </td>
                  <td className="py-3.5 px-4 text-[13px] text-gray-400 whitespace-nowrap">
                    {p.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer link */}
        <div className="mt-4 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="#26c6bc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
          <button className="text-[12px] font-black text-[#26c6bc] hover:underline tracking-widest uppercase">
            All delivery terms
          </button>
        </div>

      </div>
    </section>
  );
}
