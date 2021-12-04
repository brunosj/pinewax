import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"


export default function Spotify() {
  const data = useStaticQuery(graphql`
    query Spotify {
      file(relativePath: {eq: "spotify.png"}) {
            childImageSharp {
              gatsbyImageData(formats: AUTO, height: 28, layout: CONSTRAINED)
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