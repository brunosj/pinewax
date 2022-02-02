import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import ReleasesChild from "../components/releasesChild"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { activeLink, navLink, navStyle } from "../components/navigation.module.css"
import ScrollToTop from "react-scroll-to-top";

const Releases = ({ data }) => {

  return (
    <Layout>
      <article className="">
        <ScrollToTop
          smooth
          viewBox="0 0 24 24"
          color="#4349F6"
          width="40"
          height="40"
          svgPath="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm18-1h-4v7h-4v-7h-4l6-6 6 6z"
          className=" bg-transparent right-1 bottom-12 md:right-8 md:bottom-8 fixed z-2 cursor-pointer w-12 h-12 transition opacity-100 ease-in-out duration-1000"
        />
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
