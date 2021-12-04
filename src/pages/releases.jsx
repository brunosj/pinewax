import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import Bandcamp from "../icons/bandcamp"
import Spotify from "../icons/spotify"
import Apple from "../icons/applemusic"
import CartIcon from "../icons/cart"
import {
  stroke,
} from "../components/releasesInfo.module.css"

const Releases = ({ data }) => {  

  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <div className="text-base pb-3">{children}</div>,
      [BLOCKS.HEADING_1]: (node, children) => <div className="text-xl text-gray-900 font-semibold pt-4 pb-3">{children}</div>,
      [BLOCKS.HEADING_2]: (node, children) => <div className="text-large text-gray-900 font-normal underline pt-4 pb-3">{children}</div>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-6 pb-0">{children}</ol>,

    },
  }

  const formats = data.allContentfulRelease.nodes
  console.log(formats) 

  return (
    <Layout>
      <section className="bg-grey10">

      {data.allContentfulRelease.nodes.map(node => {
            return (
              <div className="border-t border-grey20 pt-5 pb-3 md:pb-8" id={node.slug}>         
                <div className="grid grid-cols-1 md:grid-cols-3 bg-grey10">
                    <div className="text-xl pl-5 md:pl-12 p-5 ">
                        <p className="text-sm md:text-lg font-bold pb-3">{node.catalogNumber}</p>
                        <p className="font-faune uppercase text-3xl md:text-4xl"><span className={stroke}>{node.releaseArtist}</span>
                        </p>
                        <p className="font-faune uppercase text-3xl md:text-4xl"><span className={stroke}>{node.title}</span>
                        </p>
                    </div>
                </div>
              
                <div className="grid grid-cols-1 md:grid-cols-3">

                  <div className="flex items-center md:justify-center px-5 md:px-0">
                  {node.vinylMockup && (
                    <div className="w-32 h-32 md:w-48 md:h-48">
                    <GatsbyImage
                          loading="eager"
                          alt="Pinewax"
                          image={node.vinylMockup.localFile.childImageSharp.gatsbyImageData}
                            />   
                    </div>
                  )}
                  {!node.vinylMockup && (
                    <div className="w-32 h-32 md:w-48 md:h-48">
                      <GatsbyImage
                            loading="eager"
                            alt="Pinewax"
                            image={node.cover.localFile.childImageSharp.gatsbyImageData}
                              />   
                      </div>
                  )}
                    </div>

                  <div className="md:pt-0 flex flex-col p-5 md:p-0">
                      <div className="w-full pr-0 md:pr-20">
                        {node.description && renderRichText(node.description, richTextOptions)}
                        </div>
                      <div className="py-2 md:py-5 w-full font-semibold">Release date: <span className="font-normal">{node.releaseDate}</span>
                      </div>
                      <div className="pt-6">
                          <div className="flex items-center">
                                {node.vinylMockup && (
                                    <Link to={`/products/music/${node.slug}`} className="pr-6">
                                            <button
                                            type="submit"
                                            className="flex flex-row border-black border-2 items-center py-1 md:py-2 px-3 md:px-5 hover:bg-pwxBlue hover:text-white hover:border-pwxBlue"
                                            >
                                            <CartIcon />

                                            <span className="ml-2 text-base md:text-lg font-bold">BUY</span>
                                            </button>                      
                                    </Link>
                                )}
                                {node.urlBandcamp && (
                                    <a href={node.urlBandcamp} target="_blank" rel="noreferrer" className="underline hover:text-pwxBlue pr-6">
                                        <Bandcamp />            
                                    </a>
                                )}
                                {node.urlListen && (
                                    <a href={node.urlListen} target="_blank" rel="noreferrer" className=" col-start-2 underline hover:text-pwxBlue pr-6">
                                        <Spotify />             
                                    </a>
                                )}
                                {node.urlAppleMusic && (
                                    <a href={node.urlAppleMusic} target="_blank" rel="noreferrer" className=" underline hover:text-pwxBlue pr-6">
                                        <Apple />             
                                    </a>
                                )}
                            </div>
                  </div>
                  </div>

                  <div className="hidden md:block col-span-1">
                    <p className="font-semibold px-5 pb-3 underline">Tracklisting</p>
                  {node.tracklist.map(track => {
                    return (
                      <div className="">
                        <p className="ml-5 mb-1 text-base">{track}</p>
                        </div>
                    )
                  } 
                    )}                      
                  </div>



              </div>
              </div>
            )
      }
      )}

      </section>

    </Layout>
  )
}

export default Releases

export const query = graphql`
query Releases {
  allContentfulRelease(sort: {fields: catalogNumber, order: DESC}) {
      nodes {
        id
        slug
        title
        releaseArtist
        releaseDate(formatString: "D.MM.YYYY")
        catalogNumber
        format
        tracklist
        vinylVariant
        shopifyProduct
        description {
          raw
        }
        urlAppleMusic
        urlListen
        urlBandcamp
        cover {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
          }
        }
      }
      vinylMockup {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO, 
              layout: CONSTRAINED)
          }
        }
      }
    }
  }
}
`
