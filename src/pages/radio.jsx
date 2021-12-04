import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

const Radio = ({ data }) => {  
  return (
    <Layout>
   <GatsbyImage
      loading="eager"
      alt="Pinewax"
      image={data.banner.localFile.childImageSharp.gatsbyImageData}
        />   
    </Layout>
  )
}

export default Radio

export const query = graphql`
query Radio {
  banner:contentfulAsset(title: {eq: "pwx-banner"}) {
      id
      localFile {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            formats: AUTO
            quality: 85
            placeholder: BLURRED
          )
        }
      }
    }
}
`
