import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"


export default function Logo() {
  const data = useStaticQuery(graphql`
    query Logo {
      file(relativePath: {eq: "pinewax_logo_white.png"}) {
            childImageSharp {
              gatsbyImageData(formats: AUTO, height: 32, layout: CONSTRAINED, placeholder: BLURRED)
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