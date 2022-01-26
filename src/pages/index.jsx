import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import ReleasesLeft from "../components/releasesLeft"
import ReleasesRight from "../components/releasesRight"
import VideoCard from "../components/cards/videoCard"

const Homepage = ({ data }) => {
  const releaseOne = data.releases.nodes[0]
  const releaseTwo = data.releases.nodes[1]
  const releaseThree = data.releases.nodes[2]

  return (
    <Layout>
      <ReleasesLeft release={releaseOne} />
      <ReleasesRight release={releaseTwo} />
      <div className="hidden md:block">
        <VideoCard
          image={data.live.imageBanner.gatsbyImageData}
          title={data.live.title}
          textSize="text-xs lg:text-3xl"
          slug={`/videos/${data.live.slug}`}
        />
      </div>
      <div className="block md:hidden">
        <VideoCard
          image={data.live.image.gatsbyImageData}
          title={data.live.title}
          textSize="text-sm lg:text-3xl"
          slug={`/videos/${data.live.slug}`}
        />
      </div>

      <ReleasesLeft release={releaseThree} />


    </Layout>
  )
}

export default Homepage

export const query = graphql`
query Banner {
  banner:contentfulAsset(title: {eq: "pwx-banner"}) {
      id
          gatsbyImageData(
            layout: FULL_WIDTH
            formats: AUTO
            quality: 85
            placeholder: BLURRED
          )
    }
    live:contentfulVideo(slug: {eq: "livesession-yasminumay"}) {
      id
      title
      url
      image {
            gatsbyImageData (
              layout: FULL_WIDTH
              formats: AUTO
              quality: 85
              placeholder: BLURRED
            )
      }
      imageBanner {
            gatsbyImageData (
              layout: FULL_WIDTH
              formats: AUTO
              quality: 85
              placeholder: BLURRED
            )
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
          urlTidal
          urlListen
          urlAppleMusic
          shopifyProduct
          mainColour
          slug
          cover {
                gatsbyImageData(
                  placeholder: BLURRED
                )
            title
          }
          vinylMockup {
                gatsbyImageData(
                  placeholder: BLURRED
                )
            title
          }
          description {
            raw
          }
        }
      }
    }
`
