import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import ReleasesChild from "../components/releasesChild"
import {
  stroke,
} from "../components/releasesInfo.module.css"

const Releases = ({ data }) => {  

 return (
    <Layout>
      <section className="bg-grey10">
      <ReleasesChild releases={data.albums.nodes} />
      <ReleasesChild releases={data.singles.nodes} />

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
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
          }
        }
      }
      vinylMockup {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
          }
        }
      }
    }
  }
  singles:allContentfulRelease(filter: {catalogNumber: {eq: null}}) {
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
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
          }
        }
      }
      vinylMockup {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
          }
        }
      }
    }
  }
}
`
