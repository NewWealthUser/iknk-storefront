"use client"; // Mark this as a Client Component

import React from 'react';
import { Checkbox, Label } from '@medusajs/ui';
import ChevronDown from '@modules/common/icons/chevron-down';
import { SortOptions } from '@modules/store/components/refinement-list/sort-products';
import { useRouter, usePathname } from 'next/navigation';
import FilterRadioGroup from '@modules/common/components/filter-radio-group';

type DiningTablesHeaderProps = {
  viewMode: number;
  setViewMode: (mode: number) => void;
  totalResults: number;
  facets: {
    material: string[];
    seating: string[]; // Changed to string[]
    shape: string[];
    size: string[];
  };
  sort: SortOptions;
  searchParams: URLSearchParams;
};

const DiningTablesHeader = ({
  viewMode,
  setViewMode,
  totalResults,
  facets,
  sort,
  searchParams,
}: DiningTablesHeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const setQueryParams = (name: string, value: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, String(value));
    router.push(`${pathname}?${params.toString()}`);
  };

  const getFacetValue = (key: string) => searchParams.get(key);

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "newest", label: "Newest" },
    { value: "price_asc", label: "Price: Low -> High" },
    { value: "price_desc", label: "Price: High -> Low" },
  ];

  return (
    <div className="w-full pt-11 pb-4">
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

          {facets.shape.length > 0 && (
            <FilterRadioGroup
              title="SHAPE"
              items={facets.shape.map(s => ({ value: s, label: s }))}
              value={getFacetValue("shape")}
              handleChange={(value) => setQueryParams("shape", value)}
            />
          )}
          {facets.material.length > 0 && (
            <FilterRadioGroup
              title="MATERIAL"
              items={facets.material.map(m => ({ value: m, label: m }))}
              value={getFacetValue("material")}
              handleChange={(value) => setQueryParams("material", value)}
            />
          )}
          {facets.size.length > 0 && (
            <FilterRadioGroup
              title="SIZE"
              items={facets.size.map(s => ({ value: s, label: s }))}
              value={getFacetValue("size")}
              handleChange={(value) => setQueryParams("size", value)}
            />
          )}
          {facets.seating.length > 0 && (
            <FilterRadioGroup
              title="SEATING CAPACITY"
              items={facets.seating.map(s => ({ value: String(s), label: String(s) }))}
              value={getFacetValue("seating")}
              handleChange={(value) => setQueryParams("seating", value)}
            />
          )}

          <div className="text-center text-stone-900 text-[11px] font-normal leading-normal">RESULTS ({totalResults})</div>
        </div>

        <div className="flex items-center" style={{ flex: '0 0 auto' }}>
          <FilterRadioGroup
            title="sort:"
            items={sortOptions}
            value={sort}
            handleChange={(value) => setQueryParams("sort", value)}
          />
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
  );
};

export default DiningTablesHeader;