import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

const ArtistPage = ({ data }) => {  
  return (
    <Layout>
      <div className="grid grid-cols-2">

        <div>
          <GatsbyImage
            loading="eager"
            alt="Pinewax"
            image={data.item.picture.localFile.childImageSharp.gatsbyImageData}
              />  
        </div>
        <div>
        {data.item.name}

        </div>
      
      
      
      
      
      
      </div>
    </Layout>
  )
}

export default ArtistPage

export const query = graphql`
query ArtistPageQuery($slug: String) {
  item: contentfulArtist(slug: {eq: $slug}) {
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
              aspectRatio: 1
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
`
