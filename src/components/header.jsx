import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import Logo from "../icons/logo"
import { NavigationDesktop } from "./navigation-desktop"
import { NavigationMobile } from "./navigation-mobile"
import { CartButton } from "./cart-button"
import { Toast } from "./toast"
import { useScrollPosition } from "../utils/useScrollPosition"

export function Header() {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  const [navbar, setNavbar] = useState(false)

  const collapseNav = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 64) {
      setNavbar(false)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    collapseNav()
    window.addEventListener("scroll", collapseNav)
  })

  const [scrollPosition, setSrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setSrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={
        navbar
          ? "bg-pwxBlue z-50 fixed w-full top-0 h-2 transition-all duration-150 ease-in"
          : "bg-pwxBlue z-50 fixed w-full top-0 h-16 transition-all duration-100 ease-in"
      }
    >
      <header
        className={
          navbar
            ? "flex w-full py-2 px-5 items-center opacity-0 transition-opacity duration-75 ease-in"
            : "opacity-1 flex w-full py-2 px-5 items-center transition-opacity duration-100 ease-in"
        }
      >
        <Link to="/">
          <Logo />
        </Link>
        <NavigationDesktop />
        <Link
          to="/search"
          className="text-grey50 hover:text-grey90 place-items-center ml-auto lg:ml-0 "
        >
          {/* <SearchIcon /> */}
        </Link>
        <CartButton quantity={quantity} />
      </header>
      {/* <header className="bg-pwxBlue bottom-0">
        <NavigationMobile />
      </header> */}
      <Toast show={loading || didJustAddToCart}>
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z"
                fill="#fff"
              />
              <path
                d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                fill="#fff"
              />
              <path
                d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z"
                fill="#fff"
              />
            </svg>
          </>
        )}
      </Toast>
    </div>
  )
}
