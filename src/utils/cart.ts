import { MEDUSA_URL } from "@lib/medusa"

const STORAGE_KEY = "cart_id"

export async function getOrCreateCartId(): Promise<string> {
  if (typeof window === "undefined") throw new Error("getOrCreateCartId must run in browser")
  let id = window.localStorage.getItem(STORAGE_KEY)
  if (id) return id
  const res = await fetch(`${MEDUSA_URL}/store/carts`, { method: "POST" })
  const data = await res.json()
  id = data.cart.id
  window.localStorage.setItem(STORAGE_KEY, id)
  return id
}
