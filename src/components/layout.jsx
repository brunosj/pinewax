import * as React from "react"
import { SkipNavContent } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"

import "../styles/global.css"
import "../styles/reset.css"
import "../styles/variables.css"
import { NavigationMobile } from "./navigation-mobile"

export function Layout({ children }) {
  return (
    <div className="overflow-hidden bg-grey10 min-h-[100vh]">
      <Seo />
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <NavigationMobile />
      <Footer />
    </div>
  )
}
