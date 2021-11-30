import * as React from "react"
import { graphql, Link } from "gatsby"
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
   {/* <GatsbyImage
      loading="eager"
      alt="Pinewax"
      image={data.banner.localFile.childImageSharp.gatsbyImageData}
        />    */}
    <ReleasesLeft release={releaseOne}/>
    <Link 
      to={`/videos/${data.live.slug}`}
      >
        <GatsbyImage
          loading="eager"
          alt="Live Session"
          image={data.live.image.localFile.childImageSharp.gatsbyImageData}
          className="w-full"
            />   
      </Link>
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
    live:contentfulVideo(slug: {eq: "livesession-yasminumay"}) {
      id
      title
      url
      image {
        localFile {
          childImageSharp {
            gatsbyImageData (
              layout: FULL_WIDTH
              formats: WEBP
              quality: 85
              placeholder: NONE
              transformOptions: {grayscale: true}
            )
          }
        }
      }
      slug
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
          vinylMockup {
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
