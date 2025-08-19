import React from 'react';
import { fetchProductsForListing, fetchFacetsForListing } from '@lib/catalog';
import ProductListingTemplate from '@modules/common/components/ProductListingTemplate';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DiningTablesPage({ searchParams }: Props) {
  // Build a URLSearchParams object from the searchParams prop
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value === 'string') {
      params.set(key, value);
    } else if (Array.isArray(value)) {
      // Use the first value if it's an array, as URLSearchParams doesn't handle arrays directly in this way
      params.set(key, value[0]);
    }
  });

  // Fetch listing data and facets concurrently
  const [listing, facets] = await Promise.all([
    fetchProductsForListing({ handle: "dining-tables", searchParams: params }),
    fetchFacetsForListing({ handle: "dining-tables" })
  ]);

  // Convert searchParams to a plain object for the 'selected' prop
  const selectedParams = Object.fromEntries(params.entries());

  return (
    <ProductListingTemplate
      title="Dining Tables"
      products={listing.items}
      filters={facets}
      selected={selectedParams}
      pagination={listing.pagination}
      sort={listing.sort}
    />
  );
}