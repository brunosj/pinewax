import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import ArtistCard from "../components/cards/artistCard"

const Artists = ({ data }) => {
  return (
    <Layout>
      <Seo title="Artists" />
      <ArtistCard artists={data.artists.nodes} />
    </Layout>
  )
}

export default Artists

export const query = graphql`
  query Artists {
    artists: allContentfulArtist(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        slug
        bio {
          raw
        }
        picture {
          gatsbyImageData(
            placeholder: BLURRED
            formats: AUTO
            layout: FULL_WIDTH
          )
        }
        releases {
          catalogNumber
          cover {
            gatsbyImageData(placeholder: BLURRED)
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
