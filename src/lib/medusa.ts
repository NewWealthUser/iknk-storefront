import qs from "qs"

export const MEDUSA_URL = process.env.NEXT_PUBLIC_MEDUSA_URL as string

if (!MEDUSA_URL) {
  throw new Error("NEXT_PUBLIC_MEDUSA_URL is not set")
}

async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${MEDUSA_URL}${path}`
  const res = await fetch(url, {
    headers: { "content-type": "application/json" },
    ...init,
  })
  if (!res.ok) {
    throw new Error(`Medusa request failed: ${res.status} ${res.statusText}`)
  }
  return (await res.json()) as T
}

export interface Price {
  amount: number
  currency_code: string
}

export interface Variant {
  id: string
  title: string
  prices: Price[]
  inventory_quantity?: number
  manage_inventory?: boolean
  allow_backorder?: boolean
  options?: { option_id: string; value: string }[]
}

export interface OptionValue {
  id: string
  value: string
}

export interface Option {
  id: string
  title: string
  values: OptionValue[]
}

export interface Image {
  id: string
  url: string
}

export interface Product {
  id: string
  title: string
  handle: string
  description?: string
  options: Option[]
  variants: Variant[]
  images: Image[]
  collections?: { id: string }[]
  categories?: { id: string }[]
}

export async function listProducts(
  params: Record<string, string | number>
): Promise<{ products: Product[]; count: number; limit: number; offset: number }> {
  const query = qs.stringify(
    { ...params, expand: "variants,options,images,collections,categories" },
    { encodeValuesOnly: true }
  )
  return await http(`/store/products?${query}`)
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const data = await listProducts({ handle, limit: 1 })
  return data.products[0] || null
}

export function formatMoney(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount / 100)
}

export default { http, listProducts, getProductByHandle, formatMoney }
