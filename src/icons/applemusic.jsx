import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"


export default function Apple() {
  const data = useStaticQuery(graphql`
    query Apple {
      file(relativePath: {eq: "applemusic.png"}) {
            childImageSharp {
              gatsbyImageData(formats: WEBP, height: 28, layout: CONSTRAINED)
            }
          }
    }
  `)

  return (
    <div>
      <GatsbyImage
      loading="eager"
      alt="Spotify"
      image={data.file.childImageSharp.gatsbyImageData}
        />    
    </div>
  )
}