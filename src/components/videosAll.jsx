import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Video from "./video"
import { GatsbyImage } from "gatsby-plugin-image"

const VideosAll = ({ className }) => {  
  const data = useStaticQuery(graphql`
    query VideosAll {
      videos:allContentfulVideo {
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
    <nav className="grid grid-cols-2">
        {data.videos.nodes.map(node => {
          return (
            <Link 
                to={`/videos/${node.slug}`}>
                <GatsbyImage
                  loading="eager"
                  alt="Live Session"
                  image={node.image.localFile.childImageSharp.gatsbyImageData}
                  className="w-full"
                />  
            </Link>

          )
        } 
          )} 
    </nav>
  )
}

export default VideosAll

