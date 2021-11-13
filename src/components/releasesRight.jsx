import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReleasesInfo from "./releasesInfo"

const ReleasesRight = ({ release }) => {  
    return (
        <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className={"flex items-center order-last md:order-first bg-" + release.twColourCode}>
                        <div className="p-5 md:p-0 md:ml-32">
                            <ReleasesInfo release={release}/>
                            </div>
                    </div> 
                    <div>
                        <GatsbyImage
                            loading="eager"
                            alt={release.cover.title}
                            image={release.cover.localFile.childImageSharp.gatsbyImageData}
                                /> 
                    </div> 

                    </div>     
        </div>
    )
  }

export default ReleasesRight
