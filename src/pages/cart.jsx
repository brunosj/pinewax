import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { StoreContext } from "../context/store-context"
import { LineItem } from "../components/line-item"
import { formatPrice } from "../utils/format-price"
import {
  wrap,
  checkoutButton,
  emptyStateContainer,
  emptyStateHeading,
  emptyStateLink,
  title,
} from "./cart.module.css"

export default function CartPage() {
  const { checkout, loading } = React.useContext(StoreContext)
  const emptyCart = checkout.lineItems.length === 0

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const itemsInCart = checkout.lineItems
  console.log(itemsInCart)

  return (
    <Layout>
      <div className={wrap}>
        {emptyCart ? (
          <div className={emptyStateContainer}>
            <h1 className={emptyStateHeading}>Your cart is empty</h1>
            {/* <p>
              Looks like you haven’t found anything yet. We understand that
              sometimes it’s hard to chose — maybe this helps:
            </p> */}
            <Link to="/products" className={emptyStateLink}>
              View products
            </Link>
          </div>
        ) : (
          <>
            <h1 className={title}>Shopping Cart</h1>
            <div className="max-w-6xl mr-auto">

              <div className="grid grid-cols-6 border-b border-grey20 font-semibold">
                <div className="col-span-3 pb-2">Product</div>
                <div className="hidden md:block">Price</div>
                <div className="col-span-2 md:col-span-1">Qty.</div>
                <div className="">Total</div>
              </div>
              <div>
                {checkout.lineItems.map((item) => (
                  <LineItem item={item} key={item.id}
                  />
                ))}
              </div>

              <div className="grid grid-cols-6 text-base md:text-lg font-semibold">
                <div className="col-start-3 md:col-start-4 col-span-2 border-b border-grey20 py-2">Subtotal</div>
                <div className="border-b border-grey20 py-2 col-span-2 md:col-span-1 text-right ">
                  {formatPrice(
                    checkout.subtotalPriceV2.currencyCode,
                    checkout.subtotalPriceV2.amount
                  )}

                </div>
                {/* <div className={summary}>
                  <div className={labelColumn}>Taxes</div>
                  <div className={totals}>
                    {formatPrice(
                      checkout.totalTaxV2.currencyCode,
                      checkout.totalTaxV2.amount
                    )}
                  </div>
                </div> */}
                <div className="col-start-3 md:col-start-4  col-span-2 border-b border-grey20 py-2">Shipping</div>
                <div className="border-b border-grey20 py-2 font-normal col-span-2 md:col-span-1 text-right">Calculated at checkout</div>
                <div className="col-start-3 md:col-start-4  col-span-2 py-2">Total Price</div>
                <div className="col-span-2 md:col-span-1 text-right py-2">
                  {formatPrice(
                    checkout.totalPriceV2.currencyCode,
                    checkout.totalPriceV2.amount
                  )}
                </div>
                <div className="col-start-5 md:col-start-6 col-span-2 md:col-span-1 pt-3 md:pt-6 pb-6 md:pb-12">
                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className={checkoutButton}
                  >
                    Checkout
                  </button>
                </div>
              </div>


            </div>

          </>
        )}
      </div>
    </Layout>
  )
}
