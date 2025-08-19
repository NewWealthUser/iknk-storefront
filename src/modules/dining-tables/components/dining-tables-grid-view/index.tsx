"use client";

import React, { useState } from 'react';
import DiningTablesHeader from '../dining-tables-header';
import { clx } from '@medusajs/ui';
import { HttpTypes } from '@medusajs/types';
import { SortOptions } from '@modules/store/components/refinement-list/sort-products';
import ProductPreview from '@modules/products/components/product-preview';
import { Pagination } from '@modules/store/components/pagination';
import { useParams } from 'next/navigation';
import { getRegion } from '@lib/data/regions'; // Import getRegion
import { useEffect, useRef } from 'react'; // Import useEffect and useRef

type DiningTablesGridViewProps = {
  products: HttpTypes.StoreProduct[];
  pagination: { page: number; pageSize: number; total: number; totalPages: number };
  sort: SortOptions;
  facets: {
    material: string[];
    seating: string[]; // Changed to string[]
    shape: string[];
    size: string[];
  };
  searchParams: URLSearchParams;
};

const DiningTablesGridView = ({
  products,
  pagination,
  sort,
  facets,
  searchParams,
}: DiningTablesGridViewProps) => {
  const [viewMode, setViewMode] = useState(3); // Default to 3 columns
  const { countryCode } = useParams() as { countryCode: string };
  const [region, setRegion] = useState<HttpTypes.StoreRegion | null>(null); // State to store region

  useEffect(() => {
    const fetchRegion = async () => {
      const fetchedRegion = await getRegion(countryCode);
      setRegion(fetchedRegion ?? null); // Convert undefined to null
    };
    fetchRegion();
  }, [countryCode]);

  const gridClasses = clx(
    "grid w-full gap-x-10 gap-y-16",
    {
      "grid-cols-4": viewMode === 3,
      "grid-cols-3": viewMode === 2,
    }
  );

  if (!region) {
    return null; // Or a loading spinner
  }

  return (
    <div className="content-container">
      <DiningTablesHeader
        viewMode={viewMode}
        setViewMode={setViewMode}
        totalResults={pagination.total}
        facets={facets}
        sort={sort}
        searchParams={searchParams}
      />
      <div className="lg:pb-12 pb-6 sm:pb-8 md:pb-10">
        <div id="component-product-grid" className="relative">
          <div className={gridClasses}>
            {products.map((product) => (
              <div key={product.id} className="flex w-full justify-center">
                <div className="relative flex h-full w-full flex-col">
                  <div className="group/item group relative flex flex-col items-end justify-center" style={{ touchAction: 'pan-y', height: 'auto' }}>
                    <div className="embla group/item group relative z-10 block w-full overflow-hidden">
                      <div className="embla__container flex h-full items-center">
                        <div className="embla__slide relative z-20 min-w-0 flex-[0_0_100%] justify-around">
                          <ProductPreview product={product} region={region} /> {/* Pass region */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Product details are now handled within ProductPreview, but if there are specific details for this view, they can be added here */}
                </div>
              </div>
            ))}
          </div>
          {pagination.totalPages > 1 && (
            <Pagination
              data-testid="product-pagination"
              page={pagination.page}
              totalPages={pagination.totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DiningTablesGridView;