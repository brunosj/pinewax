import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { Seo } from "../../components/seo"
import Video from "../../components/video"
import VideosAll from "../../components/videosAll"
import {
  videoFullWidth,
  videoHalfWidth,
} from "../../components/cards/videoCard.module.css"

const VideoPage = ({ data }) => {

  return (
    <Layout>
      <Seo
        title={data.video.title}
        image={data.video.imageSeo.localFile.url} />
      <div className="">
        <Video
          videoSrcURL={data.video.url}
          videoTitle={data.video.title}
          videoWidth={videoFullWidth}
        />
      </div>
      <div >
        <VideosAll
          videoWidth={videoHalfWidth}
        />

      </div>
    </Layout>
  )
}

export default VideoPage

export const query = graphql`
query VideoQuery($slug: String) {
  video: contentfulVideo(slug: {eq: $slug}) {
    id
    title
    url
    image {
          gatsbyImageData
        }
    imageSeo: image {
      localFile {
          url
        }
    }
    slug
  }
}
`
