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
              placeholder: NONE
              formats: WEBP
              layout:FULL_WIDTH
              transformOptions: {grayscale: true}
              )
          }
        }
      }
      duotone:picture {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: NONE
              formats: WEBP
              layout:FULL_WIDTH
              transformOptions: {duotone: {highlight: "#4349F6", shadow: "#4349F6", opacity: 80}}
              )
          }
        }
      }
      releases {
        catalogNumber
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData
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
