import * as React from "react"
import debounce from "lodash.debounce"
import { StoreContext } from "../context/store-context"
import { formatPrice } from "../utils/format-price"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import DeleteIcon from "../icons/delete"
import { NumericInput } from "./numeric-input"
import {
  title,
  remove,
  variant,
  totals,
  priceColumn,
} from "./line-item.module.css"

export function LineItem({ item }) {
  const {
    removeLineItem,
    checkout,
    updateLineItem,
    loading,
  } = React.useContext(StoreContext)
  const [quantity, setQuantity] = React.useState(item.quantity)

  const variantImage = {
    ...item.variant.image,
    originalSrc: item.variant.image.src,
  }
  const price = formatPrice(
    item.variant.priceV2.currencyCode,
    Number(item.variant.priceV2.amount)
  )

  const subtotal = formatPrice(
    item.variant.priceV2.currencyCode,
    Number(item.variant.priceV2.amount) * quantity
  )

  const tags = item.storefrontId
console.log(tags)

  const handleRemove = () => {
    removeLineItem(checkout.id, item.id)
  }

  const uli = debounce(
    (value) => updateLineItem(checkout.id, item.id, value),
    300
  )
  // eslint-disable-next-line
  const debouncedUli = React.useCallback((value) => uli(value), [])

  const handleQuantityChange = (value) => {
    if (value !== "" && Number(value) < 1) {
      return
    }
    setQuantity(value)
    if (Number(value) >= 1) {
      debouncedUli(value)
    }
  }

  function doIncrement() {
    handleQuantityChange(Number(quantity || 0) + 1)
  }

  function doDecrement() {
    handleQuantityChange(Number(quantity || 0) - 1)
  }

  const image = React.useMemo(
    () =>
      getShopifyImage({
        image: variantImage,
        layout: "constrained",
        crop: "contain",
        width: 160,
        height: 160,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [variantImage.src]
  )

  return (
    <div className="grid grid-cols-6 border-b border-grey20 py-6">
      <div className="col-span-3 block md:flex items-center">
        <div className="w-16 h-16 md:w-32 md:h-32">
          {image && (
            <GatsbyImage
              key={variantImage.src}
              image={image}
              alt={variantImage.altText ?? item.variant.title}
            />
          )}
        </div>
        <div className="ml-0 md:ml-12 mt-2 md:mt-0">
          <h2 className="text-base md:text-xl font-semibold">{item.title}</h2>
          <div className={variant}>
            {item.variant.title === "Default Title" ? "" : item.variant.title}
          </div>
        </div>
      </div>
      <div className="hidden md:block my-auto">{price}</div>
      <div className="col-span-2 md:col-span-1 my-auto">
        <NumericInput
          disabled={loading}
          value={quantity}
          aria-label="Quantity"
          onIncrement={doIncrement}
          onDecrement={doDecrement}
          onChange={(e) => handleQuantityChange(e.currentTarget.value)}
        />
                <div className={remove}>
          <button onClick={handleRemove}>
            <DeleteIcon /> Remove
          </button>
        </div>
      </div>
      <div className="my-auto">{subtotal}</div>
    </div>
  )
}
