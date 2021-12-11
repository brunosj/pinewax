import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import BackgroundSection from "../components/cards/backgImage"

const Radio = ({ data }) => {  
  return (
    <Layout>
      <BackgroundSection />
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
