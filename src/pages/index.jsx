import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import ReleasesLeft from "../components/releasesCoverLeft"
import ReleasesRight from "../components/releasesCoverRight"
import VideoCard from "../components/cards/videoCard"
import VideoSnippet from "../components/video-snippet"

const Homepage = ({ data }) => {
  const releaseOne = data.releases.nodes[0]
  const releaseTwo = data.releases.nodes[1]
  const releaseThree = data.releases.nodes[2]

  return (
    <Layout>
      <ReleasesLeft release={releaseOne} />

      <VideoSnippet
        source={data.shakurVideo.videoSnippet.file.url}
        slug={`/releases#monobloc`}
        title={data.shakurVideo.title}
      />

      <ReleasesRight release={releaseTwo} />
      <VideoSnippet
        source={data.liveVideo.videoSnippet.file.url}
        slug={`/videos/${data.liveVideo.slug}`}
        title={data.liveVideo.title}
      />
      {/* <div className="hidden md:block">
        <VideoCard
          image={data.live.imageBanner.gatsbyImageData}
          title={data.live.title}
          textSize="text-xs lg:text-3xl"
          slug={`/videos/${data.live.slug}`}
        />
      </div> */}
      {/* <div className="block md:hidden">
        <VideoCard
          image={data.live.image.gatsbyImageData}
          title={data.live.title}
          textSize="text-sm lg:text-3xl"
          slug={`/videos/${data.live.slug}`}
        />
      </div> */}
      <ReleasesLeft release={releaseThree} />
    </Layout>
  )
}

export default Homepage

export const query = graphql`
  query Banner {
    banner: contentfulAsset(title: { eq: "pwx-banner" }) {
      id
      gatsbyImageData(
        layout: FULL_WIDTH
        formats: AUTO
        quality: 100
        placeholder: BLURRED
      )
    }
    shakurVideo: contentfulVideo(
      slug: { eq: "kuso-gvki-geegee-monobloc-reel" }
    ) {
      id
      title
      url
      image {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: AUTO
          quality: 100
          placeholder: BLURRED
        )
      }
      imageBanner {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: AUTO
          quality: 100
          placeholder: BLURRED
        )
      }
      videoSnippet {
        file {
          url
        }
      }
      slug
    }
    liveVideo: contentfulVideo(slug: { eq: "livesession-yasminumay" }) {
      id
      title
      url
      image {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: AUTO
          quality: 100
          placeholder: BLURRED
        )
      }
      imageBanner {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: AUTO
          quality: 100
          placeholder: BLURRED
        )
      }
      videoSnippet {
        file {
          url
        }
      }
      slug
    }
    releaseVideo: contentfulVideo(
      slug: { eq: "helmuth-and-milch-skybar-video" }
    ) {
      id
      title
      url
      image {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: AUTO
          quality: 100
          placeholder: BLURRED
        )
      }
      imageBanner {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: AUTO
          quality: 100
          placeholder: BLURRED
        )
      }
      videoSnippet {
        file {
          url
        }
      }
      slug
    }
    releases: allContentfulRelease(
      limit: 3
      sort: { fields: releaseDate, order: DESC }
    ) {
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
        mainColour
        slug
        cover {
          gatsbyImageData(placeholder: BLURRED)
          title
        }
        vinylMockup {
          gatsbyImageData(placeholder: BLURRED)
          title
        }
        description {
          raw
        }
      }
    }
  }
`
