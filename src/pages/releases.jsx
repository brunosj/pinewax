import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import ReleasesChild from "../components/releasesChild"

const Releases = ({ data }) => {  

 return (
    <Layout>
      <section className="bg-grey10">
      <ReleasesChild releases={data.albums.nodes} childClassName="grid grid-cols-1 md:grid-cols-3" />
      <div className="bg-pwxBlue text-white border-t border-grey20 text-xl pl-5 md:pl-12 p-5 ">
      </div>

      <ReleasesChild releases={data.singles.nodes} parentClassName="grid grid-cols-2" childClassName="grid grid-cols-1 md:grid-cols-2" />
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
