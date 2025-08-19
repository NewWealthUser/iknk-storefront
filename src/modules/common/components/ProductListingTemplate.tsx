"use client"

import React from 'react';
import { HttpTypes } from '@medusajs/types';
import { SortOptions } from '@modules/store/components/refinement-list/sort-products';
import DiningTablesGridView from '@modules/dining-tables/components/dining-tables-grid-view';

type ProductListingTemplateProps = {
  title: string;
  products: HttpTypes.StoreProduct[];
  pagination: { page: number; pageSize: number; total: number; totalPages: number };
  sort: SortOptions;
  filters: {
    material: string[];
    seating: number[];
    shape: string[];
    size: string[];
  };
  selected: { [key: string]: string };
};

const ProductListingTemplate = ({
  products,
  pagination,
  sort,
  filters,
  selected,
}: ProductListingTemplateProps) => {
  const searchParams = new URLSearchParams(selected);

  return (
    <DiningTablesGridView
      products={products}
      pagination={pagination}
      sort={sort}
      facets={filters}
      searchParams={searchParams}
    />
  );
};

export default ProductListingTemplate;