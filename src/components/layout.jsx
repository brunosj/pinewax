import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"
import { NavigationMobile } from "./navigation-mobile"

export function Layout({ children }) {
  return (
    <div className="overflow-hidden">
      <Seo />
      <SkipNavLink />
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <Footer />
      {/* <NavigationMobile /> */}
    </div>
  )
}
