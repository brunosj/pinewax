import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
export function Footer() {
  const data = useStaticQuery(graphql`
  query Links {
    site {
      siteMetadata {
        links {
            name
            to
          }
          menu {
            name
            to
          }
      }
    }
  }
`)

  return (
    <footer className="text-black flex items-center border-t border-grey20 font-light mb-11">
      <div className="w-full py-4">
        <div className="block md:flex px-6">
          <nav className="flex order-last ml-auto lowercase text-xs md:text-sm tracking-wider" aria-label="footer">
            {/* <div className="pb-6"><p className="border-b pb-1">menu</p></div> */}
            <div className="">
              <Link className="hover:underline mr-4" to="/about">about + contact</Link>
              {data.site.siteMetadata.links.map((link, key) => (
                <span className="">
                  <a
                    key={`social_link${key}`}
                    className="hover:underline mr-4 "
                    activeClassName=""
                    href={link.to}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                </span>
              ))}
            </div>
          </nav>
          <div className="order-first ml-auto md:ml-0 text-xs md:text-sm pt-2 md:pt-0">&copy; {new Date().getFullYear()} Pinewax Records
          </div>
        </div>
      </div>
    </footer>
  )
}
