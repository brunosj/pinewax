import * as React from "react"
import { StoreContext } from "../context/store-context"
import { addToCart as addToCartStyle, icon } 
      from "./add-to-cart.module.css"
import CartIcon from "../icons/cart"
import Record from "../assets/vinyl.svg";

export function AddToCartVinyl({ variantId, quantity, available, ...props }) {
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
    <svg className={icon}><Record /></svg>

      <span className="ml-2 text-sm md:text-lg font-semibold">{available ? "BUY" : "Out of Stock"}</span>
    </button>
  )
}
