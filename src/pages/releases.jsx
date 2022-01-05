import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import ReleasesChild from "../components/releasesChild"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { navStyle, navLink, activeLink } from "../components/navigation.module.css"

const Releases = ({ data }) => {  

 return (
    <Layout>
      <section className="bg-grey10">
      <div className="bg-grey10 ml-auto flex border-b border-t border-grey20 text-sm">
          <nav className={navStyle}>
          <AnchorLink
            key="All"
            className={navLink}
            to="/releases#albums"
            activeClassName={activeLink}
            title="Albums & EPs" 
          >
            Albums & EPs
          </AnchorLink>
          <AnchorLink
            key="All"
            className={navLink}
            to="/releases#singles"
            activeClassName={activeLink}
            title="Singles" 
          >
            Singles
          </AnchorLink>
          </nav>
      </div>
      <div id="albums">
         <ReleasesChild releases={data.albums.nodes} childClassName="grid grid-cols-1 md:grid-cols-3"/>
      </div>
      <div className="bg-pwxBlue text-white border-t border-grey20 text-xl pl-5 md:pl-12 p-5 ">
      </div>
      <div id="singles">
         <ReleasesChild releases={data.singles.nodes} parentClassName="grid grid-cols-1 md:grid-cols-2" childClassName="grid grid-cols-1 md:grid-cols-2" id="singles"/>
      </div>
      </section>
    </Layout>
  )
}

export default Releases

export const query = graphql`
query Releases {
  albums:allContentfulRelease(sort: {fields: catalogNumber, order: DESC}, filter: {catalogNumber: {ne: null}}) {
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
