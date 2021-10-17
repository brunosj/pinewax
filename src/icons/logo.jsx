import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"


export default function Logo() {
  const data = useStaticQuery(graphql`
    query Logo {
      file(relativePath: {eq: "logo.png"}) {
            childImageSharp {
              gatsbyImageData(formats: WEBP, height: 32, layout: CONSTRAINED)
            }
          }
    }
  `)

  return (
    <div>
      <GatsbyImage
      loading="eager"
      alt="Pinewax"
      image={data.file.childImageSharp.gatsbyImageData}
        />    
    </div>
  )
}