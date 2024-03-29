import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Layout } from "../components/layout"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import { Seo } from "../components/seo"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import ImageGallery from "../components/ImageGallery"

const Radio = () => {
  const data = useStaticQuery(graphql`
    query Radio {
      contentfulPage(slug: { eq: "radio" }) {
        id
        description {
          raw
        }
        mainPicture {
          gatsbyImageData(
            placeholder: BLURRED
            formats: AUTO
            layout: FULL_WIDTH
          )
        }
        pictures {
          localFile {
            childImageSharp {
              thumb: gatsbyImageData(
                width: 280
                height: 280
                placeholder: BLURRED
                formats: WEBP
                quality: 85
              )
              full: gatsbyImageData(
                layout: FULL_WIDTH
                formats: WEBP
                quality: 85
              )
            }
          }
        }
      }
      allFile(
        filter: { sourceInstanceName: { eq: "radio" } }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 280
              height: 280
              placeholder: BLURRED
              formats: WEBP
              quality: 85
            )
            full: gatsbyImageData(
              layout: FULL_WIDTH
              formats: WEBP
              quality: 85
            )
          }
        }
      }
    }
  `)

  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <div className="text-base pb-3">{children}</div>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <div className="text-xl text-gray-900 font-semibold pt-4 pb-3">
          {children}
        </div>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <div className="text-large text-gray-900 font-normal underline pt-4 pb-3">
          {children}
        </div>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal pl-6 pb-0">{children}</ol>
      ),
      [INLINES.HYPERLINK]: ({ data }, children) => {
        return (
          <a
            href={data.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-pwxBlue hover:underline"
          >
            {children}
          </a>
        )
      },
    },
  }

  return (
    <Layout>
      <Seo
        title="Radio"
        description="Tune in to Pinewax Radio every fourth Saturday 2-4pm on THF Radio"
        image={getSrc(data.contentfulPage.mainPicture.gatsbyImageData)}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <GatsbyImage
            loading="eager"
            alt="Pinewax"
            image={data.contentfulPage.mainPicture.gatsbyImageData}
          />
        </div>
        <div className="flex flex-col">
          <div className="mt-12 ml-5 md:ml-12 mr-5 md:mr-12">
            <h1 className="text-3xl font-semibold leading-none">PWX Radio</h1>
            <p className="mt-8 md:mt-12 mb-8">
              {data.contentfulPage.description &&
                renderRichText(
                  data.contentfulPage.description,
                  richTextOptions
                )}
            </p>
          </div>
          <div className="ml-5 md:ml-16 mr-5 md:mr-16 mb-6 md:mb-0 my-auto">
            <ImageGallery pics={data.contentfulPage.pictures} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Radio
