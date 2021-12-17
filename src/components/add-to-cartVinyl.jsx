import * as React from "react"
import { StoreContext } from "../context/store-context"
import { addToCart as addToCartStyle, icon } 
      from "./add-to-cart.module.css"

import { BsFillVinylFill } from 'react-icons/bs';
import {
  linkIcon,
} from "../components/releasesInfo.module.css"

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
    <BsFillVinylFill />

      <span className="text-sm md:text-base ml-2">{available ? "Buy Vinyl" : "Out of Stock"}</span>
    </button>
  )
}
