import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Video from "../../components/video"
import VideosAll from "../../components/videosAll"
import {
  videoFullWidth,
  videoHalfWidth,
} from "../../components/video.module.css"

const VideoPage = ({ data }) => {  

  return (
    <Layout>
      <div className="">
        <Video 
        videoSrcURL={data.video.url}
        videoTitle={data.video.title}
        className={videoFullWidth}
      />
      </div>
      <div >
      <VideosAll
              className={videoHalfWidth}
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
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    slug
  }
}
`
