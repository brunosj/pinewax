import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"

export function NavigationDesktop() {
  const data = useStaticQuery(graphql`
    query Menu {
      site {
        siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
    <nav className="hidden md:flex ml-auto lowercase font-semibold tracking-wider font-faune">
      {data.site.siteMetadata.menu.map((link, key) => (
            <Link
              key={`menu_link${key}`}
              className="block mr-3 lg:mr-10 hover:underline text-lg text-white"
              activeClassName="underline "
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
    </nav>
  )
}
