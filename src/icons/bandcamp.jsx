import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"


export default function Bandcamp() {
  const data = useStaticQuery(graphql`
    query Bandcamp {
      file(relativePath: {eq: "bandcamp.png"}) {
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