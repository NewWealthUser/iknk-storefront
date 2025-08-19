import React from 'react';
import DiningTablesGridView from '../../../../modules/dining-tables/components/dining-tables-grid-view';
import { fetchProductsForListing, fetchFacetsForListing } from '@lib/catalog';
import { notFound } from 'next/navigation';

type Props = {
  params: { countryCode: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const DiningTablesPage = async ({ params, searchParams }: Props) => {
  const collectionHandle = "dining-tables";
  
  const urlSearchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (typeof value === 'string') {
      urlSearchParams.set(key, value);
    } else if (Array.isArray(value) && value.length > 0) {
      urlSearchParams.set(key, value[0]); // Take the first value if it's an array
    }
  }

  const [
    { items: products, pagination, sort },
    facets
  ] = await Promise.all([
    fetchProductsForListing({ handle: collectionHandle, searchParams: urlSearchParams }),
    fetchFacetsForListing({ handle: collectionHandle }),
  ]).catch((error) => {
    console.error("Failed to fetch dining tables data:", error);
    notFound();
  });

  return (
    <main id="main" className="jss18" style={{ flex: '1 1 0%', position: 'relative', zIndex: 1099, minHeight: '80vh', paddingTop: '0px' }}>
      <div style={{ display: 'none' }}>SSR V1</div>
      <DiningTablesGridView
        products={products}
        pagination={pagination}
        sort={sort}
        facets={facets}
        searchParams={urlSearchParams}
      />
      <button className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default bottom-20 right-4 z-[11] !border !border-solid !border-[#999999] !bg-white css-61j2sn" tabIndex={0} type="button" style={{ opacity: 0, visibility: 'hidden', position: 'fixed' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="test-rh-arrow-icon" className="inline-block !h-4 !w-4 text-base !text-[15px]" style={{ transform: 'rotate(-90deg) scale(2, 1.875)' }}>
          <path d="M6 4L10 8L6 12" stroke="black" strokeWidth="0.4"></path>
        </svg>
      </button>
      <div className="hidden">SSR V1</div>
    </main>
  );
};

export default DiningTablesPage;