import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import ArtistCard from "../components/cards/artistCard"

const Artists = ({ data }) => {  

  return (
    <Layout>
      <ArtistCard artists={data.artists.nodes} />
    </Layout>
  )
}

export default Artists

export const query = graphql`
query Artists {
  artists:allContentfulArtist(sort: {fields: slug, order: ASC}) {
    nodes {
      id
      name
      slug
      bio {
        raw
      }
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: AUTO
              layout:FULL_WIDTH
              transformOptions: {grayscale: false}
              )
          }
        }
      }
      pictureVariation {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: AUTO
              layout:FULL_WIDTH
              )
          }
        }
      }
      releases {
        catalogNumber
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
              )
            }
          }
        }
        format
        description {
          raw
        }
        releaseDate
        shopifyProduct
        urlBuy
        urlListen
      }
    }
  }
}
`
