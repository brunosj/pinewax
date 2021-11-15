import * as React from "react"
import { StoreContext } from "../context/store-context"
import { addToCart as addToCartStyle } from "./add-to-cart.module.css"
import CartIcon from "../icons/cart"

export function AddToCart({ variantId, quantity, available, ...props }) {
  const { addVariantToCart, loading } = React.useContext(StoreContext)

  function addToCart(e) {
    e.preventDefault()
    addVariantToCart(variantId, quantity)
  }

  return (
    <button
      type="submit"
      className={addToCartStyle}
      onClick={addToCart}
      disabled={!available || loading}
      {...props}
    >
      <CartIcon />

      <span className="ml-2">{available ? "BUY" : "Out of Stock"}</span>
    </button>
  )
}
