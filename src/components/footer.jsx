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
    <footer className="bg-grey10 text-pwxBlue flex items-center font-semibold border-t border-grey20 lowercase">
      <div className="w-full py-4 md:py-6">
            <div className="block md:flex px-6">
                <nav className="flex order-last ml-auto" aria-label="footer">
                    {/* <div className="pb-6"><p className="border-b pb-1">menu</p></div> */}
                    {data.site.siteMetadata.links.map((link, key) => (
                      <span className="">
                          <a 
                            key={`social_link${key}`}
                            className="hover:underline tracking-wider mr-4 text-sm md:text-base"
                            activeClassName=""
                            href={link.to}
                            target="_blank"
                          >
                          {link.name} 
                          </a>
                          </span>
                        ))}
                </nav>
                <div className="order-first ml-auto md:ml-0 text-xs md:text-sm pt-2 md:pt-0">Copyright &copy; {new Date().getFullYear()} Pinewax · All rights reserved</div>
            </div>
      </div>
    </footer>
  )
}
