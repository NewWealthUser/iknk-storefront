import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  searchParams, // Receive searchParams
  countryCode,
}: {
  searchParams: URLSearchParams // Define searchParams type
  countryCode: string
}) => {
  const sortBy = (searchParams.get("sort") || "featured") as SortOptions; // Get sort from searchParams
  const page = parseInt(searchParams.get("page") || "1"); // Extract page from searchParams

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      <RefinementList sortBy={sortBy} />
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title">All products</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy}
            searchParams={searchParams} // Pass searchParams
            countryCode={countryCode}
            page={page} // Pass page
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate