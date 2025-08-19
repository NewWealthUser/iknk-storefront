'use client';

import React, { useState, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';

// Define a more specific type for a product if possible, but sticking to 'any' as per prompt
type Product = any;

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const image = selectedVariant.images?.[0]?.url || product.thumbnail;
  const price = selectedVariant.prices?.[0];

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col h-full">
      <div className="relative w-full aspect-square mb-4">
        {image ? (
          <Image
            src={image}
            alt={product.title || 'Product image'}
            fill
            className="object-cover rounded"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 flex-grow">{product.title}</h3>
      {price && (
        <p className="text-md text-gray-600 mt-2">
          {(price.amount / 100).toFixed(2)} {price.currency_code.toUpperCase()}
        </p>
      )}
      {product.variants.length > 1 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Variants:</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant: any) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`px-2 py-1 text-xs rounded border ${
                  selectedVariant.id === variant.id
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
                aria-label={`Select variant ${variant.title}`}
              >
                {variant.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


type Props = {
  title: string;
  products: Product[];
  filters: {
    material?: string[];
    seating?: string[]; // Changed to string[]
    shape?: string[];
    size?: string[];
  };
  selected: Record<string, string>;
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  sort?: string;
};

const ProductListingTemplate: React.FC<Props> = ({
  title,
  products,
  filters,
  selected,
  pagination,
  sort,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setParam = useCallback(
    (key: string, value?: string | number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, String(value));
      } else {
        params.delete(key);
      }
      // Reset page to 1 when filters or sort change
      if (key !== 'page') {
        params.delete('page');
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router]
  );

  const FilterDropdown: React.FC<{
    label: string;
    paramKey: string;
    options: string[];
  }> = ({ label, paramKey, options }) => (
    <div>
      <label htmlFor={paramKey} className="block text-sm font-medium text-gray-700 mr-2">
        {label}:
      </label>
      <select
        id={paramKey}
        name={paramKey}
        value={selected[paramKey] || ''}
        onChange={(e) => setParam(paramKey, e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md"
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">{title}</h1>
        <div className="flex items-center gap-4">
          <div>
            <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">Sort by:</label>
            <select
              id="sort"
              name="sort"
              value={sort || 'featured'}
              onChange={(e) => setParam('sort', e.target.value)}
              className="pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md"
            >
              <option value="featured">Featured</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          <div>
            <label htmlFor="pageSize" className="text-sm font-medium text-gray-700 mr-2">Show:</label>
            <select
              id="pageSize"
              name="pageSize"
              value={pagination.pageSize}
              onChange={(e) => setParam('pageSize', e.target.value)}
              className="pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md"
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {filters.material && filters.material.length > 0 && (
          <FilterDropdown label="Material" paramKey="material" options={filters.material} />
        )}
        {filters.seating && filters.seating.length > 0 && (
          <FilterDropdown label="Seating" paramKey="seating" options={filters.seating} />
        )}
        {filters.shape && filters.shape.length > 0 && (
          <FilterDropdown label="Shape" paramKey="shape" options={filters.shape} />
        )}
        {filters.size && filters.size.length > 0 && (
          <FilterDropdown label="Size" paramKey="size" options={filters.size} />
        )}
      </div>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg py-10">No items match your filters. Clear filters or adjust options.</p>
      )}


      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => setParam('page', pagination.page - 1)}
            disabled={pagination.page <= 1}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Go to previous page"
          >
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <button
            onClick={() => setParam('page', pagination.page + 1)}
            disabled={pagination.page >= pagination.totalPages}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Go to next page"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductListingTemplate;