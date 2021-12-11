import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReleasesInfo from "./releasesInfo"
import { Link } from "gatsby"


const ReleasesLeft = ({ release }) => { 
 
    return (
        <div className="">
                    <div className={"grid grid-cols-1 md:grid-cols-2 bg-" + release.twColourCode}>
                    <div className="flex p-10 md:p-16">
                        <div className="flex m-auto items-center">
                        <Link 
                            to={`/releases#${release.slug}`} >
                                {release.vinylMockup && ( 
                                    <div className="w-60 h-60 md:w-96 md:h-96 ">
                                    <GatsbyImage
                                    loading="eager"
                                    alt={release.cover.title}
                                    image={release.vinylMockup.localFile.childImageSharp.gatsbyImageData}
                                        /> 
                                        </div>
                                )}
                                {!release.vinylMockup && ( 
                                    <div className="w-60 h-60 md:w-80 md:h-80">
                                    <GatsbyImage
                                    loading="eager"
                                    alt={release.cover.title}
                                    image={release.cover.localFile.childImageSharp.gatsbyImageData}
                                        /> 
                                        </div>
                                )}
                            </Link>
                         </div>
                    </div> 
                        <div className="flex items-center justify-end">
                            <div className="p-5 md:p-0 md:mr-48 text-right">
                        <ReleasesInfo release={release} alignment="flex ml-auto items-center"/>
                            </div>
                        </div> 

                    </div>      
        </div>
    )
  }

export default ReleasesLeft
