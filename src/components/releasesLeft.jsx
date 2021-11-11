import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReleasesInfo from "./releasesInfo"

const ReleasesLeft = ({ release }) => {  
    return (
        <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <GatsbyImage
                                loading="eager"
                                alt={release.cover.title}
                                image={release.cover.localFile.childImageSharp.gatsbyImageData}
                                    /> 
                        </div> 
                        <div className={"flex items-center bg-" + release.twColourCode}>
                            <div className="ml-32">
                        <ReleasesInfo release={release}/>
                            </div>
                        </div> 

                    </div>      
        </div>
    )
  }

export default ReleasesLeft
