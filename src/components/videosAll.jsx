import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import VideoCard from "./cards/videoCard"

const VideosAll = ({ videoWidth }) => {
  const data = useStaticQuery(graphql`
    query VideosAll {
      videos:allContentfulVideo(sort: {fields: releaseDate, order: DESC}) {
          nodes {
            id
            title
            url
            image {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: AUTO
                    layout:FULL_WIDTH
                  )
            }
            slug
          } 
      }
    }
  `)

  return (
    <div className="grid grid-cols-2">
      {data.videos.nodes.map(node => {
        return (
          <VideoCard
            image={node.image.gatsbyImageData}
            title={node.title}
            textSize="text-xs md:text-base lg:text-xl"
            slug={`/videos/${node.slug}`}
            videoWidth={videoWidth} />
        )
      }
      )}
    </div>
  )
}

export default VideosAll

