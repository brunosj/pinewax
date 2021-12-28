import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReleasesInfo from "./releasesInfo"
import { Link } from "gatsby"
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const ReleasesLeft = ({ release }) => { 

    const releaseVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        hidden: { opacity: 0, y: 200 }
      };
    
      const controls = useAnimation();
      const [ref, inView] = useInView( { threshold: 0 } );
    
      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

 
    return (
            <div style={{
                backgroundColor: release.mainColour
                 }} > 
            <motion.div
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={releaseVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex">
                        <div className="flex ml-0 md:ml-auto items-center">
                        <Link 
                            to={`/releases#${release.slug}`} >
                                {release.vinylMockup && (
                                <div className="px-5 md:px-0 md:p-16">
                                    <div className="w-60 h-60 md:w-96 md:h-96 ">
                                    <GatsbyImage
                                    loading="eager"
                                    alt={release.cover.title}
                                    image={release.vinylMockup.gatsbyImageData}
                                        /> 
                                    </div>
                                    </div>
                                )}
                            {!release.vinylMockup && ( 
                                <div className="pl-5 md:pl-16 pb-8 md:pb-24 pt-12 md:pt-24">
                                 <div className="w-60 h-60 md:w-80 md:h-80">
                                    <GatsbyImage
                                    loading="eager"
                                    alt={release.cover.title}
                                    image={release.cover.gatsbyImageData}
                                        /> 
                                 </div>
                                 </div>

                                )}
                            </Link>
                         </div>
                    </div> 
                        <div className="flex items-center justify-start ml-0 md:ml-16">
                            <div className="p-5 md:p-0 md:mr-48 text-left">
                        <ReleasesInfo release={release} />
                            </div>
                        </div> 

                    </div>
                    </motion.div>      
        </div>
    )
  }

export default ReleasesLeft
