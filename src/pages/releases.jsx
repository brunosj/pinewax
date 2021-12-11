import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import Bandcamp from "../icons/bandcamp"
import Spotify from "../icons/spotify"
import Apple from "../icons/applemusic"
import CartIcon from "../icons/cart"
import ReleasesChild from "../components/releasesChild"
import {
  stroke,
} from "../components/releasesInfo.module.css"

const Releases = ({ data }) => {  

  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <div className="text-base pb-3">{children}</div>,
      [BLOCKS.HEADING_1]: (node, children) => <div className="text-xl text-gray-900 font-semibold pt-4 pb-3">{children}</div>,
      [BLOCKS.HEADING_2]: (node, children) => <div className="text-large text-gray-900 font-normal underline pt-4 pb-3">{children}</div>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-6 pb-0">{children}</ol>,

    },
  }


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
        releaseDate(formatString: "D.MM.YYYY")
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
        releaseDate(formatString: "D.MM.YYYY")
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
