import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"

export function NavigationMobile() {
  const data = useStaticQuery(graphql`
    query MenuMobile {
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
    <nav className="px-5 justify-between pt-2 pb-3 flex md:hidden ml-auto lowercase font-semibold tracking-wider font-faune">
      {data.site.siteMetadata.menu.map((link, key) => (
            <Link
              key={`menu_link${key}`}
              className="block hover:underline text-base text-white"
              activeClassName="underline "
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
    </nav>
  )
}
