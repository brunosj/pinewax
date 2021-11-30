import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReleasesInfo from "./releasesInfo"
import { Link } from "gatsby"


const ReleasesRight = ({ release }) => {  
    return (
        <div className="">
                    <div className={"grid grid-cols-1 md:grid-cols-2 bg-" + release.twColourCode}>
                    <div className="flex items-center order-last md:order-first">
                        <div className="p-5 md:p-0 md:ml-48">
                            <ReleasesInfo release={release} alignment="flex items-center"/>
                            </div>
                    </div> 
                    <div className="flex p-10 md:p-16">
                    <div className="w-60 h-60 md:w-96 md:h-96 flex m-auto items-center">
                    <Link 
                            to={`/releases#${release.slug}`} >
                                {release.vinylMockup && ( 
                                    <GatsbyImage
                                    loading="eager"
                                    alt={release.cover.title}
                                    image={release.vinylMockup.localFile.childImageSharp.gatsbyImageData}
                                        /> 
                                )}
                                {!release.vinylMockup && ( 
                                    <GatsbyImage
                                    loading="eager"
                                    alt={release.cover.title}
                                    image={release.cover.localFile.childImageSharp.gatsbyImageData}
                                        /> 
                                )}
                            </Link>
                         </div>
                    </div> 

                    </div>     
        </div>
    )
  }

export default ReleasesRight
