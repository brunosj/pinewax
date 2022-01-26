import * as React from "react"
import { StoreContext } from "../context/store-context"
import { addToCart as addToCartStyle }
  from "./add-to-cart.module.css"
import { BiCart } from 'react-icons/bi';

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

      <BiCart />

      {/* <svg className={icon}><Record /></svg> */}

      <span className="ml-2 text-sm md:text-lg font-semibold">{available ? "Add to cart" : "Out of Stock"}</span>
    </button>
  )
}
