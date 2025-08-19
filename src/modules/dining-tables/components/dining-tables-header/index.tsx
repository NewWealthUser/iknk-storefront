import React from 'react';
import { Checkbox, Label } from '@medusajs/ui'; // Import Checkbox and Label

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
          {/* Removed placeholder icons */}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2"> {/* Filter/Sort row */}
        {/* SALE filter with checkbox */}
        <div className="flex items-center gap-1">
          <Checkbox id="sale-filter" name="sale-filter" checked={false} onChange={() => {}} />
          <Label htmlFor="sale-filter" className="text-red-700 text-[8px] font-normal leading-[7px]">SALE</Label>
        </div>
        {/* IN-STOCK filter with checkbox */}
        <div className="flex items-center gap-1">
          <Checkbox id="in-stock-filter" name="in-stock-filter" checked={false} onChange={() => {}} />
          <Label htmlFor="in-stock-filter" className="text-black text-[8px] font-normal leading-[7px]">IN-STOCK</Label>
        </div>
        {/* SHAPE filter with checkbox */}
        <div className="flex items-center gap-1">
          <Checkbox id="shape-filter" name="shape-filter" checked={false} onChange={() => {}} />
          <Label htmlFor="shape-filter" className="text-neutral-800 text-[8px] font-normal leading-[6px]">SHAPE</Label>
        </div>
        {/* MATERIAL filter with checkbox */}
        <div className="flex items-center gap-1">
          <Checkbox id="material-filter" name="material-filter" checked={false} onChange={() => {}} />
          <Label htmlFor="material-filter" className="text-black text-[7px] font-normal leading-[8px]">MATERIAL</Label>
        </div>
        {/* SIZE filter with checkbox */}
        <div className="flex items-center gap-1">
          <Checkbox id="size-filter" name="size-filter" checked={false} onChange={() => {}} />
          <Label htmlFor="size-filter" className="text-neutral-600 text-[7px] font-normal leading-[8px]">SIZE</Label>
        </div>
        {/* SEATING CAPACITY filter with checkbox */}
        <div className="flex items-center gap-1">
          <Checkbox id="seating-capacity-filter" name="seating-capacity-filter" checked={false} onChange={() => {}} />
          <Label htmlFor="seating-capacity-filter" className="text-black text-[8px] font-normal leading-[8px]">SEATING CAPACITY</Label>
        </div>
        {/* RESULTS (330) */}
        <div className="text-center text-stone-900 text-[7px] font-normal leading-[8px]">RESULTS (330)</div>
        {/* SORT: FEATURED */}
        <div className="flex items-center gap-1">
          <div className="text-center text-neutral-700 text-[8px] font-normal leading-[6px]">SORT: FEATURED</div>
          {/* Removed placeholder icon */}
        </div>
      </div>
    </div>
  );
};

export default DiningTablesHeader;