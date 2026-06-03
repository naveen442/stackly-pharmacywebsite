import { useState } from "react";

import product1 from "../assets/Images/month_product_1.svg";
import product2 from "../assets/Images/month_product_2.svg";
import product3 from "../assets/Images/month_product_3.svg";
import product4 from "../assets/Images/month_product_4.svg";

const IMGS = [product1, product2, product3, product4];

const INIT_ITEMS = [
  { id:1, img:0, name:"Velson film-coated tablets 3 mg, 30 pcs.", brand:"Lirina", qty_pack:"10 pcs", code:"153249", price:41108, oldPrice:49999, stock:true,  count:1 },
  { id:2, img:1, name:"Velson film-coated tablets 3 mg, 30 pcs.", brand:"Lirina", qty_pack:"10 pcs", code:"153249", price:41108, oldPrice:49999, stock:true,  count:1 },
  { id:3, img:2, name:"Velson film-coated tablets 3 mg, 30 pcs.", brand:"Lirina", qty_pack:"10 pcs", code:"153249", price:41108, oldPrice:49999, stock:true,  count:1 },
  { id:4, img:3, name:"Velson film-coated tablets 3 mg, 30 pcs.", brand:"Lirina", qty_pack:"10 pcs", code:"153249", price:41108, oldPrice:49999, stock:false, count:1 },
];

const Stars = ({ count=4 }) => (
  <span className="flex gap-0.5">
    {Array.from({length:5}).map((_,i)=>(
      <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={i<count?"#f59e0b":"#e5e7eb"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </span>
);

const Minus = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const Plus  = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const Trash = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>;

export default function Finalbanner2() {
  const [items,  setItems]  = useState(INIT_ITEMS);
  const [promo,  setPromo]  = useState("");
  const [promoOk,setPromoOk]= useState(false);

  const changeCount = (id, delta) => setItems(prev => prev.map(it => it.id===id ? {...it, count:Math.max(1,it.count+delta)} : it));
  const remove      = (id)        => setItems(prev => prev.filter(it => it.id!==id));
  const clearAll    = ()          => setItems([]);

  const subtotal  = items.reduce((s,it)=>s+it.price*it.count, 0);
  const discount  = -32;
  const delivery  = 548;
  const total     = subtotal + discount + delivery;

  return (
    <section className="w-full bg-white px-4 py-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        .cart-root * { font-family:'Nunito',sans-serif; }
        .line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
      `}</style>

      <div className="cart-root max-w-screen-xl mx-auto">

        {/* ── Breadcrumb ── */}
        <nav className="text-[11px] text-gray-400 mb-3 flex items-center gap-1">
          <span className="text-[#26c6bc] cursor-pointer hover:underline">Home</span>
          <span>›</span>
          <span className="text-[#26c6bc] cursor-pointer hover:underline">Pharmacy</span>
          <span>›</span>
          <span>Cart</span>
        </nav>

        {/* ── Page title + clear ── */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-[22px] font-black text-gray-900">Cart</h1>
          {items.length > 0 && (
            <button onClick={clearAll}
              className="flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-red-400 transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
                <path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
              </svg>
              Clear cart
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <p className="text-[14px] text-gray-400 py-12 text-center">Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">

            {/* ── LEFT: Cart items ── */}
            <div className="flex flex-col divide-y divide-gray-100">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 py-4">

                  {/* Product image */}
                  <div className="w-[90px] h-[90px] flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src={IMGS[item.img]} alt={item.name} className="h-[80px] w-auto object-contain"/>
                  </div>

                  {/* Product info */}
                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    {/* Stock + Stars */}
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold ${item.stock?"text-[#26c6bc]":"text-red-500"}`}>
                        {item.stock ? "In stock" : "Out of stock"}
                      </span>
                      <Stars count={4}/>
                    </div>

                    {/* Name */}
                    <p className="text-[12px] font-bold text-gray-800 leading-snug line-clamp-2">{item.name}</p>

                    {/* Meta */}
                    <div className="flex flex-col gap-0.5">
                      {[
                        {l:"Brand",     v:item.brand},
                        {l:"Pack qty",  v:item.qty_pack},
                        {l:"Item code", v:item.code},
                      ].map(m=>(
                        <span key={m.l} className="flex items-center gap-1 text-[10px] text-gray-400">
                          <span className="w-1 h-1 rounded-full bg-[#26c6bc] flex-shrink-0"/>
                          {m.l}: <span className="font-semibold text-gray-500">{m.v}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price + qty + delete */}
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    {/* Price */}
                    <div className="text-right">
                      <p className="text-[16px] font-black text-gray-900 leading-none">
                        {(item.price*item.count).toLocaleString()} <span className="text-[11px]">PY6.</span>
                      </p>
                      <p className="text-[10px] text-red-400 line-through">
                        {(item.oldPrice*item.count).toLocaleString()} PY6.
                      </p>
                    </div>

                    {/* Qty control */}
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button onClick={()=>changeCount(item.id,-1)}
                        className="w-7 h-7 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
                        <Minus/>
                      </button>
                      <span className="w-7 h-7 flex items-center justify-center text-[12px] font-bold text-gray-800 border-x border-gray-200">
                        {item.count}
                      </span>
                      <button onClick={()=>changeCount(item.id,+1)}
                        className="w-7 h-7 flex items-center justify-center text-[#26c6bc] hover:bg-gray-50 transition-colors">
                        <Plus/>
                      </button>
                    </div>

                    {/* Delete */}
                    <button onClick={()=>remove(item.id)}
                      className="hover:opacity-70 transition-opacity">
                      <Trash/>
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* ── RIGHT: Order summary ── */}
            <div className="flex flex-col gap-4 lg:sticky lg:top-4">

              <div className="border border-gray-100 rounded-2xl p-4 shadow-sm">
                <h3 className="text-[15px] font-black text-gray-900 mb-4">Your Order</h3>

                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-gray-500">Discount</span>
                    <span className="text-red-400 font-bold">{discount} PY6.</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-gray-500">Total without delivery</span>
                    <span className="text-gray-700 font-bold">{delivery} PY6.</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-black text-gray-900">Total</span>
                    <span className="text-[18px] font-black text-gray-900">{total.toLocaleString()} PY6.</span>
                  </div>
                </div>

                <button className="w-full bg-[#26c6bc] hover:bg-[#1aada4] active:scale-95 text-white font-bold text-[13px] rounded-xl py-3 transition-all">
                  Place Order
                </button>
              </div>

              {/* Promo code */}
              <div className="border border-gray-100 rounded-2xl p-4 shadow-sm">
                <h3 className="text-[14px] font-black text-gray-900 mb-3">Promo Code</h3>
                <div className="flex items-center gap-2">
                  <input value={promo} onChange={e=>setPromo(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-[12px] text-gray-700 placeholder-gray-400 outline-none focus:border-[#26c6bc] transition-colors"/>
                  <button onClick={()=>setPromoOk(true)}
                    className="w-9 h-9 rounded-xl bg-[#26c6bc] hover:bg-[#1aada4] flex items-center justify-center transition-colors flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </div>
                {promoOk && promo && (
                  <p className="text-[11px] text-[#26c6bc] font-semibold mt-1">Promo code applied!</p>
                )}
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
