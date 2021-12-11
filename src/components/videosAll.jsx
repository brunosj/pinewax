import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import VideoCard from "./cards/videoCard"

const VideosAll = ({ className }) => {  
  const data = useStaticQuery(graphql`
    query VideosAll {
      videos:allContentfulVideo(sort: {fields: releaseDate, order: DESC}) {
          nodes {
            id
            title
            url
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: AUTO
                    layout:FULL_WIDTH
                  )
                }
              }
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
            image={node.image.localFile.childImageSharp.gatsbyImageData}
            title={node.title}
            textSize="text-lg md:text-2xl"
            slug={`/videos/${node.slug}`}/>
          )
        } 
          )}
    </div>
  )
}

export default VideosAll

