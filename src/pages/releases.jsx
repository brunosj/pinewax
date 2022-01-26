import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import ReleasesChild from "../components/releasesChild"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { activeLink, navLink, navStyle } from "../components/navigation.module.css"

const Releases = ({ data }) => {

  return (
    <Layout>
      <article className="">
        <div className="ml-auto flex border-b border-t border-grey20 text-sm">
          <nav className={navStyle}>
            <AnchorLink
              key="All"
              className={navLink}
              to="/releases#albums"
              activeClassName={activeLink}
              title="Albums & EPs"
            >
              albums & EPs
            </AnchorLink>
            <AnchorLink
              key="All"
              className={navLink}
              to="/releases#singles"
              activeClassName={activeLink}
              title="Singles"
            >
              singles
            </AnchorLink>
          </nav>
        </div>
        <section id="albums">
          <p className="text-xl pl-5 md:pl-12 py-3 font-normal uppercase tracking-widest">Albums & EPs</p>
          <ReleasesChild releases={data.albums.nodes} childClassName="grid grid-cols-1 md:grid-cols-3" />
        </section>
        <div className="bg-pwxBlue text-white border-t border-grey20 text-xl pl-5 md:pl-12 p-5 ">
        </div>
        <section id="singles">
          <p className="text-xl pl-5 md:pl-12 py-3 font-normal uppercase tracking-widest">Singles</p>
          <ReleasesChild releases={data.singles.nodes} parentClassName="grid grid-cols-1 md:grid-cols-2" childClassName="grid grid-cols-1 md:grid-cols-2" id="singles" />
        </section>
      </article>
    </Layout>
  )
}

export default Releases

export const query = graphql`
query Releases {
  albums:allContentfulRelease(sort: {fields: releaseDate, order: DESC}, filter: {catalogNumber: {ne: null}}) {
      nodes {
        id
        slug
        title
        releaseArtist
        releaseDate(formatString: "D MMMM YYYY")
        catalogNumber
        format
        tracklist
        vinylVariant
        shopifyProduct
        description {
          raw
        }
        urlAppleMusic
        urlListen
        urlBandcamp
        urlTidal
        cover {
            gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
      }
      vinylMockup {
            gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
      }
    }
  }
  singles:allContentfulRelease(
    filter: {catalogNumber: {eq: null}}
    sort: {fields: releaseDate, order: DESC}
  ) {
      nodes {
        id
        slug
        title
        releaseArtist
        releaseDate(formatString: "D MMMM YYYY")
        catalogNumber
        format
        tracklist
        vinylVariant
        shopifyProduct
        description {
          raw
        }
        urlAppleMusic
        urlListen
        urlBandcamp
        urlTidal
        cover {
            gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
      }
      vinylMockup {
            gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
      }
    }
  }
}
`
