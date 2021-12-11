import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import {
  bgContainer
} from "./backgImage.module.css"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "default-og-image.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <div className='h-full'>
        <BackgroundImage
          Tag="section"
          className='h-96'
          fluid={imageData}
        >
          <h2>gatsby-background-image</h2>
        </BackgroundImage>
        </div>
      )
    }}
  />
)

export default BackgroundSection