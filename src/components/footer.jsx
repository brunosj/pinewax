import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Logo from "../icons/logo"

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
    <footer className="bg-grey10 text-pwxBlue flex items-center font-semibold">
      <div className="w-full py-6">
            <div className="flex px-6">
                <nav className="flex" aria-label="footer">
                    {/* <div className="pb-6"><p className="border-b pb-1">menu</p></div> */}
                    {data.site.siteMetadata.links.map((link, key) => (
                      <span className="py-1">
                          <a 
                            key={`social_link${key}`}
                            className="uppercase hover:underline tracking-wider hover:text-grey30 ml-4 text-xs md:text-base"
                            activeClassName=""
                            href={link.to}
                            target="_blank"
                          >
                          {link.name} 
                          </a>
                          </span>
                        ))}
                </nav>
                <div className="ml-auto text-xs md:text-sm">Copyright &copy; {new Date().getFullYear()} Pinewax · All rights reserved</div>
            </div>
      </div>
    </footer>
  )
}
