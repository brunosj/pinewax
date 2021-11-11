import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

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

  const formats = data.releases.nodes
  console.log(formats) 

  return (
    <Layout>
      <section className="bg-white">

      {data.releases.nodes.map(node => {
            return (
              <div>         
                <div className="border-b border-t border-grey20 bg-grey10">
                    <div className="text-xl pl-12 p-5">
                        <p className="text-lg">{node.catalogNumber}</p>
                        <p className="font-bold leading-none">{node.releaseArtist}
                        </p>
                        <p>{node.title}</p>
                    </div>
                </div>
              
                <div className="grid grid-cols-1 md:grid-cols-5">

                  <div className="flex items-center">
                    <div className="w-48 h-48 ml-12">
                      <GatsbyImage
                            loading="eager"
                            alt="Pinewax"
                            image={node.cover.localFile.childImageSharp.gatsbyImageData}
                              />   
                      </div>
                    </div>

                  <div className="col-span-2 border-l border-grey20 flex flex-col ">
                      <div className="w-full px-5 pt-5 mt-auto"> {node.description && renderRichText(node.description, richTextOptions)}</div>
                      <div className="border-t border-grey20 p-5 mt-auto w-full font-semibold">Release date: <span className="font-normal">{node.releaseDate}</span></div>
                  </div>

                  <div className="col-span-1 border-l border-t md:border-t-0 border-grey20">
                    <p className="font-semibold p-5 ">Tracklisting</p>
                  {node.tracklist.map(track => {
                    return (
                      <div className="border-t border-b border-grey20">
                        <p className="ml-5 py-2 text-sm">{track}</p>
                        </div>
                    )
                  } 
                    )}                      
                  </div>

                  <div className="border-l border-grey20 border-t md:border-t-0">
                        <div className="border-b border-grey20 pb-5">
                          <h1 className="p-5 font-semibold uppercase">Buy</h1>

                        {node.format[0] === "Vinyl" && (
                          <Link to={`/products/music/${node.slug}`} className="underline hover:text-pwxBlue mr-2 p-5">
                              Vinyl             
                          </Link>
                          )}
                          {node.urlBandcamp && (
                          <a href={node.urlBandcamp} target="_blank" rel="noreferrer" className="underline hover:text-pwxBlue mr-2 p-5">
                              Digital             
                          </a>
                      )}
                      </div>
                      <div className="border-b border-grey20 pb-5">
                      <h1 className="p-5 font-semibold uppercase">Stream</h1>

                                          {node.urlListen && (
                              <a href={node.urlListen} target="_blank" rel="noreferrer" className="pt-2 underline hover:text-pwxBlue mr-2 p-5">
                                  Spotify             
                              </a>
                          )}
                          {node.urlAppleMusic && (
                              <a href={node.urlAppleMusic} target="_blank" rel="noreferrer" className="pt-2 underline hover:text-pwxBlue mr-2 p-5">
                                  Apple Music             
                              </a>
                          )}
                      </div>
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
  releases: allContentfulRelease(sort: {fields: releaseDate, order: DESC}) {
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
              placeholder: NONE, 
              formats: AUTO, 
              layout: CONSTRAINED)
          }
        }
      }
    }
  }
}
`
