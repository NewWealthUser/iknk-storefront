import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: { [key: string]: string | string[] | undefined }; // Changed type to plain object
  params: Promise<{
    countryCode: string
  }>
}

export default async function StorePage(props: Params) {
  const params = await props.params;
  const urlSearchParams = new URLSearchParams(props.searchParams as Record<string, string>); // Convert to URLSearchParams

  return (
    <StoreTemplate
      searchParams={urlSearchParams} // Pass the new URLSearchParams instance
      countryCode={params.countryCode}
    />
  )
}