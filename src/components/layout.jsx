import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"
import { NavigationMobile } from "./navigation-mobile"

import "../styles/global.css"
import "../styles/reset.css"
import "../styles/variables.css"

// import "../components/slider/slick.css"
// import "../components/slider/slick-theme.css"


export function Layout({ children }) {
  return (
    <body className="overflow-hidden bg-grey10 min-h-[100vh]">
      <Seo />
      {/* <SkipNavLink /> */}
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <Footer />
      {/* <NavigationMobile /> */}
    </body>
  )
}
