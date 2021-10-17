import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"

export function NavigationMobile() {
  const data = useStaticQuery(graphql`
    query MobileMenu {
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
    <nav className="w-full bg-pwxBlue bottom-0 md:hidden justify-between px-5 border-t-2">
      <ul className="flex justify-around items-center text-center text-white py-2">
        {data.site.siteMetadata.menu.map((link, key) => (
            <li key={`mobile_link${key}`} className="text-white">
            <Link
              className="block mr-3 lg:mr-6"
              to={link.to}
            >
              {link.name}
            </Link>
            </li>
          ))}
          </ul>
    </nav>
  )
}
