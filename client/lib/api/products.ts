import 'server-only'
// import { ProductsSchema, Product } from '@/types/product'

const API_URL = process.env.API_URL ?? 'http://localhost:4000'

type FetchOpts = {
  search?: URLSearchParams | string
  revalidate?: number // seconds
}

export async function fetchProducts({ search, revalidate = 60 }: FetchOpts = {}): Promise<any> {
  const qs = typeof search === 'string' ? search : search?.toString() ?? ''
  const url = `${API_URL}/products${qs ? `?${qs}` : ''}`

  const res = await fetch(url, {
    // revalidate кэширует SSR-ответ (ISR-подобно)
    next: { revalidate },
  })
  if (!res.ok) {
    // пробросит в app/products/error.tsx
    throw new Error(`Failed to fetch products: ${res.status}`)
  }

  const json = await res.json()
  return json
}
