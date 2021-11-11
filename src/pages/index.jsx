import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import ReleasesLeft from "../components/releasesLeft"
import ReleasesRight from "../components/releasesRight"

const Homepage = ({ data }) => {  
  const releaseOne = data.releases.nodes[0]
  const releaseTwo = data.releases.nodes[1]
  const releaseThree = data.releases.nodes[2]
  
  return (
    <Layout>
   <GatsbyImage
      loading="eager"
      alt="Pinewax"
      image={data.banner.localFile.childImageSharp.gatsbyImageData}
        />   
    <ReleasesLeft release={releaseOne}/>
    <a href="https://youtu.be/-iuxHzLB7xM" target="_blank" rel="noreferrer" >
    <GatsbyImage
      loading="eager"
      alt="Live Session"
      image={data.live.localFile.childImageSharp.gatsbyImageData}
        />   
      </a>
    <ReleasesRight release={releaseTwo}/>
    <ReleasesLeft release={releaseThree}/>
    </Layout>
  )
}

export default Homepage

export const query = graphql`
query Banner {
  banner:contentfulAsset(title: {eq: "pwx-banner"}) {
      id
      localFile {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            formats: WEBP
            quality: 85
            placeholder: NONE
            transformOptions: {grayscale: false}
          )
        }
      }
    }
    live:contentfulAsset(title: {eq: "live_yasmin"}) {
      id
      localFile {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            formats: WEBP
            quality: 85
            placeholder: NONE
            transformOptions: {grayscale: true}
            )
        }
      }
    }
  releases: allContentfulRelease(
          limit: 3, 
          sort: {fields: releaseDate, order: DESC}) {
        nodes {
          id
          title
          format
          catalogNumber
          releaseDate
          releaseArtist
          urlBandcamp
          urlListen
          urlAppleMusic
          shopifyProduct
          twColourCode
          slug
          cover {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
          }
          description {
            raw
          }
        }
      }
    }
`
