import * as React from "react"
import { ProductCard } from "./product-card"

// To optimize LCP we mark the first product card as eager so the image gets loaded faster
export function ProductListing({ products = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p, index) => (
        <ProductCard product={p} key={p.id} eager={index === 0} />
      ))}
    </div>
  )
}
