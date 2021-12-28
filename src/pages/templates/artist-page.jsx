import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import VideoCard from "../../components/cards/videoCard"
import ReleaseCard from "../../components/cards/releaseCard"
import { motion } from "framer-motion"
import {
  stroke,
} from "../../components/releasesInfo.module.css"

const ArtistPage = ({ data }) => {  

  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <div className="text-base pb-3">{children}</div>,
      [BLOCKS.HEADING_1]: (node, children) => <div className="text-xl text-gray-900 font-semibold pt-4 pb-3">{children}</div>,
      [BLOCKS.HEADING_2]: (node, children) => <div className="text-large text-gray-900 font-normal underline pt-4 pb-3">{children}</div>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-6 pb-0">{children}</ol>,

    },
  }


  return (
    <Layout>
      <div className="bg-grey10 grid grid-cols-1 md:grid-cols-2">

        <div>
          <GatsbyImage
            loading="eager"
            alt="Pinewax"
            image={data.artist.picture.gatsbyImageData}
              />  
        </div>

        <div className="flex flex-col">
            <div className="mt-12 ml-5 md:ml-12 mr-5 md:mr-12">
                <h1 className="text-3xl font-semibold leading-none">{data.artist.name}</h1>
                <p className="mt-8 md:mt-12 mb-8"> {data.artist.bio && renderRichText(data.artist.bio, richTextOptions)}</p>
          </div>

          {data.artist.releases && (
          <div className="mt-auto border-t border-grey20">
              
              <div className=""><h2 className="border-b border-grey20 py-5 text-xl font-semibold leading-none"><span className="ml-5 md:ml-12">Releases</span></h2></div>

              <div className="ml-5 md:ml-12 mr-5 md:mr-12 flex flex-wrap md:justify-start justify-around">
                  <ReleaseCard releases={data.artist.releases} />
              </div>
          </div>
           )}
 
 
      
      </div>

      </div>
      {data.artist.videos && (
              <div className="">
                {/* <div className=""><h2 className="border-b border-grey20 py-5 text-xl font-semibold leading-none"><span className="ml-5 md:ml-12">Videos</span></h2></div> */}

                {data.artist.videos.length > 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    {data.artist.videos.map(node => {
                        return (
                          <VideoCard
                          image={node.image.gatsbyImageData}
                          title={node.title}
                          textSize="text-sm md:text-xl"
                          slug={`/videos/${node.slug}`}/>
                        )
                    })}
                    </div>
                )}
                {data.artist.videos.length == 1 && (
                    <div className="">
                          <VideoCard
                          image={data.artist.videos[0].image.gatsbyImageData}
                          title={data.artist.videos[0].title}
                          textSize="text-sm md:text-xl"
                          slug={`/videos/${data.artist.videos[0].slug}`}/>
      
                    </div>
                )}
 
 
              </div>
           )}
    </Layout>
  )
}

export default ArtistPage

export const query = graphql`
query ArtistPageQuery($slug: String) {
  artist: contentfulArtist(slug: {eq: $slug}) {
      id
      name
      slug
      bio {
        raw
      }
      picture {
            gatsbyImageData(
              placeholder: BLURRED
              formats: AUTO
              aspectRatio: 1
              layout:FULL_WIDTH
              )
           }
      releases {
        catalogNumber
        releaseArtist
        title
        slug
        cover {
              gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
           }
        format
        description {
          raw
        }
        vinylMockup {
            gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
              }
        releaseDate
        shopifyProduct
        urlAppleMusic
        urlListen
        urlBandcamp
      }
      videos {
        title
        slug
        image {
              gatsbyImageData
            }
          }
        }
      }
`
