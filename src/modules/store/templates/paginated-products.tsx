import { fetchProductsForListing } from "@lib/catalog"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { getRegion } from "@lib/data/regions"

type PaginatedProductsProps = {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string // Ensure this is here
  productsIds?: string[]
  countryCode: string
  searchParams: URLSearchParams
}

export default async function PaginatedProducts({
  sortBy,
  collectionId,
  categoryId, // Destructure categoryId
  productsIds,
  countryCode,
  searchParams,
}: PaginatedProductsProps) {
  const page = parseInt(searchParams.get("page") || "1");
  const region = await getRegion(countryCode);

  if (!region) {
    return null;
  }

  const { items: products, pagination } = await fetchProductsForListing({
    collectionId,
    categoryId, // Pass categoryId here
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
              <ProductPreview product={p} region={region} />
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