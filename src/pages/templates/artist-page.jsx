import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

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
      <div className="border-t border-grey20 bg-white grid grid-cols-1 md:grid-cols-2">

        <div>
          <GatsbyImage
            loading="eager"
            alt="Pinewax"
            image={data.artist.picture.localFile.childImageSharp.gatsbyImageData}
              />  
        </div>

        <div className="flex flex-col">
            <div className="mt-12 ml-5 md:ml-12 mr-5 md:mr-12">
                <h1 className="text-3xl font-semibold leading-none">{data.artist.name}</h1>
                <p className="mt-8 md:mt-12 mb-8"> {data.artist.bio && renderRichText(data.artist.bio, richTextOptions)}</p>
          </div>

          <div className="mt-auto border-t border-grey20 bg-grey10">
            <div className="">
              <h2 className="border-b border-grey20 py-5 text-xl font-semibold leading-none"><span className="ml-5 md:ml-12">Releases</span></h2>

              <div className="ml-5 md:ml-12 mr-5 md:mr-12 flex flex-wrap md:justify-start justify-around">
                {data.artist.releases.map(release => (
                <div className="flex my-6 md:my-12 mr-2 md:mr-8 ">
                <Link
                  to={`/releases#${release.slug}`}
                  >
                  <div className="flex flex-col items-center">

                    <div className="">
                      <div className="w-40 h-40 transform transition duration-300 ease-in-out scale-100 hover:scale-90">
                  <GatsbyImage 
                    loading="eager"
                    alt={release.title}
                    image={release.cover.localFile.childImageSharp.gatsbyImageData} />
                    </div>
                    </div>

                    <div className="flex col-span-2 flex-col text-center mt-5">
                      <div className="">
                      <p className="font-bold">{release.releaseArtist}</p>
                        <p className="leading-none">{release.title}</p>
                        </div>
                      
                    </div>

                  </div>
                  </Link>
                </div>
                ))}
              </div>

              </div>
          </div>
        




      
      
      </div>

      </div>
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
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: NONE
              formats: WEBP
              aspectRatio: 1
              layout:FULL_WIDTH
              )
          }
        }
      }
      releases {
        catalogNumber
        releaseArtist
        title
        slug
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        format
        description {
          raw
        }
        releaseDate
        shopifyProduct
        urlBuy
        urlListen
      }
  }
}
`
