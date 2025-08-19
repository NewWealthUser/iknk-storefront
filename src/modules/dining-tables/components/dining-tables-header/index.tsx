import React from 'react';

const DiningTablesHeader = () => {
  return (
    <div className="w-full py-4 px-16"> {/* Outer container, responsive width, some vertical padding, and horizontal padding */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4"> {/* Header row */}
        <div className="flex items-baseline mb-2 sm:mb-0"> {/* Left side: DINING TABLES */}
          <h1 className="text-neutral-800 text-base font-normal leading-none">DINING</h1>
          <h1 className="text-stone-500 text-base font-normal leading-none ml-1">TABLES</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"> {/* Right side: IKONIK, PARTNERS, Icons */}
          <div className="text-neutral-500 text-[9px] font-normal leading-[7px]">IKONIK</div>
          <div className="text-neutral-700 text-[9px] font-normal leading-[7px]">PARTNERS SAVE UP TO 20% ON EVERYTHING</div>
          <div className="flex items-center gap-2">
            <img className="w-5 h-5" src="https://placehold.co/19x19" alt="icon" />
            <img className="w-4 h-4" src="https://placehold.co/17x17" alt="icon" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2"> {/* Filter/Sort row */}
        {/* SALE button */}
        <div className="relative flex items-center justify-center p-1 border border-transparent rounded-md">
          <img className="w-12 h-6 absolute inset-0" src="https://placehold.co/48x24" alt="background" />
          <div className="relative z-10 flex items-center">
            <img className="w-4 h-4" src="https://placehold.co/17x16" alt="icon" />
            <div className="text-center text-red-700 text-[8px] font-normal leading-[7px] ml-1">SALE</div>
          </div>
        </div>
        {/* IN-STOCK button */}
        <div className="relative flex items-center justify-center p-1 border border-transparent rounded-md">
          <img className="w-16 h-6 absolute inset-0" src="https://placehold.co/66x24" alt="background" />
          <div className="relative z-10 flex items-center">
            <img className="w-4 h-4" src="https://placehold.co/17x16" alt="icon" />
            <div className="text-center text-black text-[8px] font-normal leading-[7px] ml-1">IN-STOCK</div>
          </div>
        </div>
        {/* SHAPE filter */}
        <div className="flex items-center gap-1">
          <img className="w-11 h-3.5" src="https://placehold.co/44x15" alt="background" />
          <div className="text-center text-neutral-800 text-[8px] font-normal leading-[6px]">SHAPE</div>
        </div>
        {/* MATERIAL filter */}
        <div className="flex items-center gap-1">
          <div className="text-center text-black text-[7px] font-normal leading-[8px]">MATERIAL</div>
        </div>
        {/* SIZE filter */}
        <div className="flex items-center gap-1">
          <img className="w-9 h-3.5" src="https://placehold.co/36x15" alt="background" />
          <div className="text-center text-neutral-600 text-[7px] font-normal leading-[8px]">SIZE</div>
        </div>
        {/* SEATING CAPACITY filter */}
        <div className="flex items-center gap-1">
          <div className="text-center text-black text-[8px] font-normal leading-[8px]">SEATING CAPACITY</div>
        </div>
        {/* RESULTS (330) */}
        <div className="text-center text-stone-900 text-[7px] font-normal leading-[8px]">RESULTS (330)</div>
        {/* SORT: FEATURED */}
        <div className="flex items-center gap-1">
          <div className="text-center text-neutral-700 text-[8px] font-normal leading-[6px]">SORT: FEATURED</div>
          <img className="w-3.5 h-2.5" src="https://placehold.co/14x11" alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default DiningTablesHeader;