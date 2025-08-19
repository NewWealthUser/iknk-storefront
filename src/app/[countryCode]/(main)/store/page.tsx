import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: URLSearchParams // Changed to URLSearchParams
  params: Promise<{
    countryCode: string
  }>
}

export default async function StorePage(props: Params) {
  const params = await props.params;
  const searchParams = props.searchParams; // Directly use URLSearchParams

  return (
    <StoreTemplate
      searchParams={searchParams} // Pass searchParams
      countryCode={params.countryCode}
    />
  )
}