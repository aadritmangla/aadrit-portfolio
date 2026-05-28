import React from 'react';
import { modelProfile, modelStats } from '../data';

export default function CastingCard() {
  const getStat = (label: string) => modelStats.find(s => s.label === label)?.value || '';

  return (
    <>
      <style>
        {`
          @media print {
            @page {
              margin: 0;
              size: A4 portrait;
            }
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
              margin: 0;
            }
          }
        `}
      </style>
      <div className="hidden print:!flex flex-col w-full max-w-[210mm] min-h-screen lg:h-[297mm] mx-auto bg-white text-black font-sans relative overflow-hidden box-border">
        {/* 70% Photo Area */}
        <div className="relative w-full overflow-hidden" style={{ height: '65%' }}>
          <img 
            src={modelProfile.heroImage} 
            alt="Aadrit Mangla" 
            className="w-full h-full object-cover object-top" 
          />
        </div>

        {/* Profile & Info Section (approx 35%) */}
        <div className="flex flex-col px-12 py-10 justify-between flex-1 bg-white relative">
          
          {/* Name & Intro */}
          <div className="mb-4">
            <h1 className="text-5xl uppercase tracking-[0.2em] font-display font-medium text-black mb-4">
              {modelProfile.name}
            </h1>
            <p className="text-sm font-light text-gray-800 leading-relaxed max-w-2xl">
              Comfortable on camera, expressive, and adapts naturally to direction. <br />
              Available for fashion, lifestyle, and commercial shoots.
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-3 gap-10 py-6 border-y border-neutral-200 flex-1 content-center">
            {/* Snapshot */}
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Snapshot</span>
              <span className="text-xs font-medium uppercase tracking-wider text-black">Based in: New Delhi, India</span>
              <span className="text-xs font-medium uppercase tracking-wider text-black">Age: {modelProfile.age}</span>
              <span className="text-xs font-medium uppercase tracking-wider text-black">Height: {getStat('Height')} cm</span>
            </div>

            {/* Measurements */}
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Measurements</span>
              <span className="text-xs font-medium uppercase tracking-wider text-black">Clothing: US 6</span>
              <span className="text-xs font-medium uppercase tracking-wider text-black">Shoes: {getStat('Shoes')}</span>
              <span className="text-xs font-medium uppercase tracking-wider text-black">Hair: {getStat('Hair Color')}</span>
              <span className="text-xs font-medium uppercase tracking-wider text-black">Eyes: {getStat('Eye Color')}</span>
            </div>

            {/* Categories */}
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Categories</span>
              <span className="text-xs font-medium uppercase tracking-wider text-black">Fashion</span>
              <span className="text-xs font-medium uppercase tracking-wider text-black">Lifestyle</span>
              <span className="text-xs font-medium uppercase tracking-wider text-black">Ethnic</span>
              <span className="text-xs font-medium uppercase tracking-wider text-black">Commercial</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex justify-between items-end mt-6">
            <div className="flex flex-col space-y-1.5">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Contact</span>
              <span className="text-xs font-medium tracking-wide text-black">WhatsApp: 9971271291</span>
              <span className="text-xs font-medium tracking-wide text-black">Email: aadritmangla@gmail.com</span>
            </div>
            <div className="flex flex-col space-y-1.5 items-end">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Links</span>
              <span className="text-xs font-medium tracking-wide text-black">www.aadritmangla.com</span>
              <span className="text-xs font-medium tracking-wide text-black">@aadritmangla</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
