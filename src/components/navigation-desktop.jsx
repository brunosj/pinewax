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
          links {
            facebook
            instagram
            twitter
            youtube
          }
        }
      }
    }
  `)

  return (
    <nav className="hidden md:flex ml-auto uppercase font-semibold">
      {data.site.siteMetadata.menu.map((link, key) => (
            <Link
              key={`menu_link${key}`}
              className="block mr-3 lg:mr-6"
              activeClassName="text-gray-800 "
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
    </nav>
  )
}
