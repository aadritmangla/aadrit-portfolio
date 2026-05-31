import React from 'react';
import { modelProfile } from '../data';

export default function CastingCard() {
  return (
    <>
      <style>
        {`
          @media print {
            @page {
              margin: 8mm;
              size: A4 portrait;
            }
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
              background-color: white !important;
              color: black !important;
            }
            .print-shadow-none {
              box-shadow: none !important;
            }
          }
        `}
      </style>
      
      {/* Hidden during normal view, visible during print */}
      <div className="hidden print:!flex flex-row w-full h-[278mm] max-w-[210mm] mx-auto bg-white text-black font-sans relative overflow-hidden box-border gap-6 p-4">
        
        {/* LEFT COLUMN: Large Hero Portrait (40% width) */}
        <div className="w-[42%] h-full flex flex-col justify-between border-r-2 border-black pr-6">
          <div className="h-[85%] w-full overflow-hidden border-2 border-black bg-neutral-100">
            <img 
              src={modelProfile.heroImage} 
              alt="Aadrit Mangla" 
              className="w-full h-full object-cover object-top" 
            />
          </div>
          
          {/* Aesthetic lower corner block on left column */}
          <div className="pt-4 flex flex-col justify-end flex-grow">
            <span className="font-serif text-[11px] text-zinc-500 uppercase tracking-widest block mb-1">
              Official Comp Card
            </span>
            <div className="h-[2px] bg-black w-12 mb-2" />
            <span className="font-serif font-bold text-[15px] tracking-wide text-black">
              AADRIT MANGLA
            </span>
            <span className="font-display text-[9px] text-zinc-600 uppercase tracking-wider block mt-0.5">
              New Delhi, India
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Rich Profiles & Specifications (58% width) */}
        <div className="w-[58%] h-full flex flex-col justify-between text-left">
          
          {/* AADRIT MANGLA Header */}
          <div className="space-y-1.5 pb-2">
            <h1 className="text-4xl uppercase tracking-[0.25em] font-display font-black text-black leading-none">
              AADRIT MANGLA
            </h1>
            <div className="space-y-0.5 pt-1">
              <p className="font-serif italic text-sm text-neutral-800 leading-tight">
                "A smile people remember."
              </p>
              <p className="font-serif italic text-sm text-neutral-800 leading-tight">
                "An energy cameras love."
              </p>
            </div>
            <p className="text-[11px] font-display uppercase tracking-widest text-zinc-600 font-bold">
              Expressive Child Creator • New Delhi, India
            </p>
          </div>

          {/* Quick Profile Section */}
          <div className="border-t-2 border-black pt-2 pb-2">
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-display font-extrabold text-black mb-1.5">
              QUICK PROFILE
            </h2>
            <div className="grid grid-cols-2 gap-y-1 gap-x-4">
              <div className="text-[11px] text-neutral-800">
                <strong className="text-black uppercase tracking-wider text-[10px]">Age:</strong> 8 Years
              </div>
              <div className="text-[11px] text-neutral-800">
                <strong className="text-black uppercase tracking-wider text-[10px]">Height:</strong> 126 cm
              </div>
              <div className="text-[11px] text-neutral-800">
                <strong className="text-black uppercase tracking-wider text-[10px]">Location:</strong> New Delhi
              </div>
              <div className="text-[11px] text-neutral-800">
                <strong className="text-black uppercase tracking-wider text-[10px]">Categories:</strong> Fashion • Lifestyle • Ethnic • Commercial
              </div>
            </div>
          </div>

          {/* Why Aadrit Section */}
          <div className="border-t-2 border-black pt-2 pb-2">
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-display font-extrabold text-black mb-2">
              WHY AADRIT
            </h2>
            <div className="space-y-1.5">
              <div className="text-[11px] text-neutral-800">
                <span className="text-black font-bold uppercase text-[10px] tracking-wider">😊 Expressive:</span> Natural reactions that feel real.
              </div>
              <div className="text-[11px] text-neutral-800">
                <span className="text-black font-bold uppercase text-[10px] tracking-wider">🎬 Camera Friendly:</span> Comfortable, confident, and easy to direct.
              </div>
              <div className="text-[11px] text-neutral-800">
                <span className="text-black font-bold uppercase text-[10px] tracking-wider">⚡ Positive Energy:</span> The kind of presence people remember.
              </div>
            </div>
          </div>

          {/* Measurements Section */}
          <div className="border-t-2 border-black pt-2 pb-2">
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-display font-extrabold text-black mb-1.5">
              MEASUREMENTS
            </h2>
            <div className="grid grid-cols-2 gap-y-1 gap-x-4">
              <div className="text-[11px] text-neutral-800">
                <strong className="text-black uppercase tracking-wider text-[10px]">Clothing:</strong> US 6
              </div>
              <div className="text-[11px] text-neutral-800">
                <strong className="text-black uppercase tracking-wider text-[10px]">Shoes:</strong> US 9
              </div>
              <div className="text-[11px] text-neutral-800">
                <strong className="text-black uppercase tracking-wider text-[10px]">Hair:</strong> Black
              </div>
              <div className="text-[11px] text-neutral-800">
                <strong className="text-black uppercase tracking-wider text-[10px]">Eyes:</strong> Black
              </div>
            </div>
          </div>

          {/* Available For Section */}
          <div className="border-t-2 border-black pt-2 pb-2">
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-display font-extrabold text-black mb-1.5">
              AVAILABLE FOR
            </h2>
            <div className="grid grid-cols-2 gap-1 text-[11px] text-neutral-800">
              <div>• Fashion Campaigns</div>
              <div>• Lifestyle Shoots</div>
              <div>• Digital Advertising</div>
              <div>• Branded Content</div>
              <div className="col-span-2">• Commercial Productions</div>
            </div>
          </div>

          {/* Contact & QR Code Section */}
          <div className="border-t-2 border-black pt-2 pb-2 flex justify-between items-center gap-4">
            <div className="space-y-1">
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-display font-extrabold text-black mb-1">
                CONTACT
              </h2>
              <div className="text-[11px] text-neutral-800 font-bold">Rahul Mangla (Parent Manager)</div>
              <div className="text-[11px] text-neutral-800">+91 99712 71291</div>
              <div className="text-[11px] text-neutral-800">aadritmangla@gmail.com</div>
              <div className="text-[11px] text-neutral-800">www.aadritmangla.com</div>
              <div className="text-[11px] text-neutral-800">@aadritmangla</div>
            </div>
            
            {/* Real SVG QR Code */}
            <div className="flex flex-col items-center text-center shrink-0 border border-neutral-200 p-1.5 bg-neutral-50">
              <svg width="64" height="64" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1">
                {/* 3 corner position squares */}
                <path d="M1 1h7v7H1V1zm1 1v5h5V2H2zm1 1h3v3H3V3zM21 1h7v7h-7V1zm1 1v5h5V2h-5zm1 1h3v3h-3V3zM1 21h7v7H1v-7zm1 1v5h5v-5H2zm1 1h3v3H3v-3z" fill="black" stroke="none"/>
                {/* Random QR structures */}
                <rect x="11" y="2" width="2" height="2" fill="black" stroke="none"/>
                <rect x="15" y="1" width="1" height="3" fill="black" stroke="none"/>
                <rect x="18" y="2" width="2" height="1" fill="black" stroke="none"/>
                <rect x="11" y="6" width="3" height="1" fill="black" stroke="none"/>
                <rect x="16" y="5" width="2" height="2" fill="black" stroke="none"/>
                <rect x="11" y="10" width="1" height="3" fill="black" stroke="none"/>
                <rect x="13" y="12" width="4" height="2" fill="black" stroke="none"/>
                <rect x="18" y="10" width="2" height="1" fill="black" stroke="none"/>
                <rect x="22" y="11" width="3" height="1" fill="black" stroke="none"/>
                <rect x="26" y="10" width="1" height="4" fill="black" stroke="none"/>
                <rect x="2" y="11" width="2" height="2" fill="black" stroke="none"/>
                <rect x="6" y="13" width="3" height="1" fill="black" stroke="none"/>
                <rect x="1" y="16" width="3" height="1" fill="black" stroke="none"/>
                <rect x="5" y="15" width="2" height="3" fill="black" stroke="none"/>
                <rect x="9" y="18" width="4" height="1" fill="black" stroke="none"/>
                <rect x="2" y="19" width="1" height="1" fill="black" stroke="none"/>
                <rect x="10" y="21" width="2" height="4" fill="black" stroke="none"/>
                <rect x="14" y="22" width="3" height="2" fill="black" stroke="none"/>
                <rect x="18" y="21" width="1" height="3" fill="black" stroke="none"/>
                <rect x="21" y="23" width="4" height="1" fill="black" stroke="none"/>
                <rect x="26" y="21" width="2" height="2" fill="black" stroke="none"/>
                <rect x="14" y="26" width="5" height="1" fill="black" stroke="none"/>
                <rect x="21" y="26" width="2" height="2" fill="black" stroke="none"/>
                <rect x="25" y="25" width="3" height="3" fill="black" stroke="none"/>
              </svg>
              <span className="text-[7px] uppercase tracking-wider font-bold text-black mt-1">
                Scan Portfolio
              </span>
            </div>
          </div>

          {/* Footer signature line */}
          <div className="border-t-2 border-b-2 border-black py-2.5 text-center mt-auto">
            <span className="font-display font-extrabold text-[12px] uppercase tracking-[0.15em] text-black">
              Making cameras smile since 2018 😄
            </span>
          </div>

        </div>

      </div>
    </>
  );
}
