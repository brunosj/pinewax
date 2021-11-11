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
    <footer className="bg-black text-white flex items-center">
      <div className="ml-auto py-16">
            <div className="">
                <nav className="flex px-6 ml-auto" aria-label="footer">
                    {/* <div className="pb-6"><p className="border-b pb-1">menu</p></div> */}
                    {data.site.siteMetadata.links.map((link, key) => (
                      <div className="py-1">
                          <a 
                            key={`social_link${key}`}
                            className="block uppercase hover:underline tracking-wider hover:text-grey30 ml-4"
                            activeClassName=""
                            href={link.to}
                            target="_blank"
                          >
                          {link.name} 
                          </a>
                          </div>
                        ))}
                </nav>
            </div>
            <div className="flex pt-6 px-6">
              <div className="ml-auto text-sm">Copyright &copy; {new Date().getFullYear()} · All rights reserved</div>
            </div>
      </div>
    </footer>
  )
}
