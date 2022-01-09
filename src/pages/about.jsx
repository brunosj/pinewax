import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Layout } from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Gallery from '@browniebroke/gatsby-image-gallery'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import ImageGallery from "../components/ImageGallery"
import { BsDiagram2 } from "react-icons/bs"


const About = () => {
  const data = useStaticQuery(graphql`
  query About {
    contentfulPage(slug: {eq: "about"}){
        id
        description {
          raw
        }
        slug
        mainPicture {
            gatsbyImageData(
              placeholder: BLURRED
              formats: AUTO
              layout:FULL_WIDTH
              )
      }
  }
}
`
)

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <div className="text-base pb-3">{children}</div>,
    [BLOCKS.HEADING_1]: (node, children) => <div className="text-xl text-gray-900 font-semibold pt-4 pb-3">{children}</div>,
    [BLOCKS.HEADING_2]: (node, children) => <div className="text-large text-gray-900 font-normal underline pt-4 pb-3">{children}</div>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-6 pb-0">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-6 pb-0">{children}</ol>,
    [INLINES.HYPERLINK]: ({ data }, children)  => {
      return <a 
      href={data.uri}
      target='_blank'
      rel= 'noopener noreferrer'
      className='font-semibold text-pwxBlue hover:underline'>
       {children}</a>
          },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return <div className="pt-6 pb-2 flex items-center justify-around">
                    <GatsbyImage
                        image={node.data.target.gatsbyImageData}
                        alt={node.data.target.title} />
                    </div> }  

  },
}


  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
              <GatsbyImage
                loading="eager"
                alt="Pinewax"
                image={data.contentfulPage.mainPicture.gatsbyImageData}
                  />  
          </div>
        <div className="flex flex-col">
          <div className="mt-12 ml-5 md:ml-12 mr-5 md:mr-12">
                <h1 className="text-3xl font-semibold leading-none">About Pinewax</h1>
                <p className="mt-8 mb-8">
                  {data.contentfulPage.description && renderRichText(data.contentfulPage.description, richTextOptions)}
                  </p>
          </div>
        </div>
    </div>
    </Layout>
  )
}

export default About
