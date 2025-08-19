"use client"; // Mark this as a Client Component

import React from 'react';
import { Checkbox, Label } from '@medusajs/ui';
import ChevronDown from '@modules/common/icons/chevron-down';

type DiningTablesHeaderProps = {
  viewMode: number;
  setViewMode: (mode: number) => void;
};

const DiningTablesHeader = ({ viewMode, setViewMode }: DiningTablesHeaderProps) => {
  return (
    <div className="w-full pt-11 pb-4">
      <div className="content-container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div className="flex items-baseline mb-2 sm:mb-0">
            <h1 className="text-neutral-800 text-[27px] font-normal leading-none">DINING</h1>
            <h1 className="text-stone-500 text-[27px] font-normal leading-none ml-1">TABLES</h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pb-12">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex items-center gap-1">
              <Checkbox id="sale-filter" name="sale-filter" checked={false} onChange={() => {}} />
              <Label htmlFor="sale-filter" className="text-red-700 text-[11px] font-normal leading-normal">SALE</Label>
            </div>
            <div className="flex items-center gap-1">
              <Checkbox id="in-stock-filter" name="in-stock-filter" checked={false} onChange={() => {}} />
              <Label htmlFor="in-stock-filter" className="text-black text-[11px] font-normal leading-normal">IN-STOCK</Label>
            </div>
            <button className="flex items-center gap-1">
              <span className="text-neutral-800 text-[11px] font-normal leading-normal">SHAPE</span>
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-1">
              <span className="text-black text-[11px] font-normal leading-normal">MATERIAL</span>
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-1">
              <span className="text-neutral-600 text-[11px] font-normal leading-normal">SIZE</span>
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-1">
              <span className="text-black text-[11px] font-normal leading-normal">SEATING CAPACITY</span>
              <ChevronDown size={16} />
            </button>
            <div className="text-center text-stone-900 text-[11px] font-normal leading-normal">RESULTS (330)</div>
          </div>
          
          <div className="flex items-center" style={{ flex: '0 0 auto' }}>
            <button type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" className="flex items-center text-[11px] font-normal leading-normal" role="combobox" aria-label="Selected sort: Featured ">
              <p className="mr-[28px] !flex cursor-pointer select-none items-center !uppercase sm:!mr-1 md:!mr-0">sort:</p>
              <span style={{ marginLeft: '7px', textTransform: 'uppercase', cursor: 'pointer' }}>Featured</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="inline-block !h-4 !w-4 text-base rotate-90" aria-label="" aria-haspopup="true" style={{ fontSize: '13px', marginLeft: '3px' }}>
                <path d="M6 4L10 8L6 12" stroke="black" strokeWidth="0.75"></path>
              </svg>
            </button>
            <button onClick={() => setViewMode(3)} aria-label="Three column view" style={{ padding: '0px', marginLeft: '30px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className="h-[14px] w-[14px] cursor-pointer p-0 !transition-all !duration-500 !ease-in-out" data-active={viewMode === 3}>
                <rect width="3.33232" height="3.33232" fill={viewMode === 3 ? 'currentColor' : '#999999'}></rect>
                <rect y="5.33398" width="3.33232" height="3.33232" fill={viewMode === 3 ? 'currentColor' : '#999999'}></rect>
                <rect y="10.668" width="3.33232" height="3.33232" fill={viewMode === 3 ? 'currentColor' : '#999999'}></rect>
                <rect x="5.33203" width="3.33232" height="3.33232" fill={viewMode === 3 ? 'currentColor' : '#999999'}></rect>
                <rect x="5.33203" y="5.33398" width="3.33232" height="3.33232" fill={viewMode === 3 ? 'currentColor' : '#999999'}></rect>
                <rect x="5.33203" y="10.668" width="3.33232" height="3.33232" fill={viewMode === 3 ? 'currentColor' : '#999999'}></rect>
                <rect x="10.668" width="3.33232" height="3.33232" fill={viewMode === 3 ? 'currentColor' : '#999999'}></rect>
                <rect x="10.668" y="5.33398" width="3.33232" height="3.33232" fill={viewMode === 3 ? 'currentColor' : '#999999'}></rect>
                <rect x="10.668" y="10.668" width="3.33232" height="3.33232" fill={viewMode === 3 ? 'currentColor' : '#999999'}></rect>
              </svg>
            </button>
            <button onClick={() => setViewMode(2)} aria-label="Two column view" style={{ padding: '0px', marginLeft: '30px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className="h-[14px] w-[14px] cursor-pointer p-0 !transition-all !duration-500 !ease-in-out" data-active={viewMode === 2}>
                <rect width="6" height="6" fill={viewMode === 2 ? 'currentColor' : '#999999'}></rect>
                <rect y="8" width="6" height="6" fill={viewMode === 2 ? 'currentColor' : '#999999'}></rect>
                <rect x="8" width="6" height="6" fill={viewMode === 2 ? 'currentColor' : '#999999'}></rect>
                <rect x="8" y="8" width="6" height="6" fill={viewMode === 2 ? 'currentColor' : '#999999'}></rect>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningTablesHeader;