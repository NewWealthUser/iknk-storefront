import { fetchProductsForListing } from "@lib/catalog"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { getRegion } from "@lib/data/regions" // Import getRegion

type PaginatedProductsProps = {
  sortBy?: SortOptions
  page: number // Ensure page is always passed
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
  searchParams: URLSearchParams
}

export default async function PaginatedProducts({
  sortBy,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
  searchParams,
}: PaginatedProductsProps) {
  const page = parseInt(searchParams.get("page") || "1"); // Extract page from searchParams
  const region = await getRegion(countryCode); // Fetch region

  if (!region) {
    return null; // Handle case where region is not found
  }

  const { items: products, pagination } = await fetchProductsForListing({
    collectionId,
    searchParams,
  })

  if (!products) {
    return null
  }

  return (
    <>
      <ul
        className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
        data-testid="products-list"
      >
        {products.map((p) => {
          return (
            <li key={p.id}>
              <ProductPreview product={p} region={region} /> {/* Pass region */}
            </li>
          )
        })}
      </ul>
      {pagination.totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={pagination.page}
          totalPages={pagination.totalPages}
        />
      )}
    </>
  )
}