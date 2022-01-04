import * as React from "react"
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { FaSpotify, FaApple } from 'react-icons/fa';
import { SiTidal, SiBandcamp } from 'react-icons/si';
import { BsFillVinylFill } from 'react-icons/bs';
import ReleaseIcon from "../icons/releaseIcon"
import VinylIcon from "../icons/vinylIcon"

import {
  stroke,
  buyButton,
  icon,
} from "../components/releasesInfo.module.css"

const ReleasesChild = ({ releases, parentClassName, childClassName }) => {  

    const richTextOptions = {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <div className="text-base pb-3">{children}</div>,
          [BLOCKS.HEADING_1]: (node, children) => <div className="text-xl text-gray-900 font-semibold pt-4 pb-3">{children}</div>,
          [BLOCKS.HEADING_2]: (node, children) => <div className="text-large text-gray-900 font-normal underline pt-4 pb-3">{children}</div>,
          [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc">{children}</ul>,
          [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-6 pb-0">{children}</ol>,
          [INLINES.HYPERLINK]: ({ data }, children)  => {
            return <a 
            href={data.uri}
            target='_blank'
            rel= 'noopener noreferrer'
            className='font-semibold text-pwxBlue hover:underline'>
             {children}</a>
                },
    
        },
      }

      const releaseVariants = {
        visible: { opacity: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 1 }
      };
    
      const controls = useAnimation();
      const [ref, inView] = useInView( { threshold: 0, initialInView: true } );
    
      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

    return (
        <div 
        className={parentClassName}>
            {releases.map(release => {
            return (
              <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={releaseVariants}>
              <div className="border-t border-grey20 bg-grey10 border-r h-full" id={release.slug}> 
                <div className="pt-5 pb-3 md:pb-8">
                <div className={childClassName}>
                  
                    <div className="col-span-1 md:col-span-3 text-xl pl-5 md:pl-12 p-5 ">
                        <p className="text-sm md:text-lg font-bold pb-3">{release.catalogNumber}</p>
                        <p className="font-faune uppercase text-3xl md:text-4xl"><span className={stroke}>{release.releaseArtist}</span>
                        </p>
                        <p className="font-faune font-normal text-2xl md:text-3xl"><span className="">{release.title}</span>
                        </p>
                        
                    </div>
            

                  <div className="col-span-1 flex items-center md:justify-center px-5 md:px-0">
                  {release.vinylMockup && (
                    <div className="w-40 h-40 md:w-60 md:h-60">
                    <GatsbyImage
                          loading="eager"
                          alt="Pinewax"
                          image={release.vinylMockup.gatsbyImageData}
                            />   
                    </div>
                  )}
                  {!release.vinylMockup && (
                    <div className="w-32 h-32 md:w-48 md:h-48">
                      <GatsbyImage
                            loading="eager"
                            alt="Pinewax"
                            image={release.cover.gatsbyImageData}
                              />   
                      </div>
                  )}
                    </div>

                  <div className="md:pt-0 flex flex-col p-5 md:p-0">
                      <div className="w-full pr-0 md:pr-20">
                        {release.description && renderRichText(release.description, richTextOptions)}
                        </div>
                      
                      <div className="flex flex-wrap items-end text-sm">
                          <div className="pt-2 md:pt-5 w-1/2 md:w-1/4 font-semibold text-grey50">Release date
                          </div>
                          <div className="w-1/2 md:w-3/4">
                                {release.releaseDate}
                          </div>
                          <div className="w-1/2 md:w-1/4 font-semibold text-grey50">
                            {release.format.length > 1 && (
                              <span>
                                Formats
                              </span>
                            )}
                            {release.format.length == 1 && (
                              <span>
                                Format
                              </span>
                            )}
                          </div>
                          <div className="w-1/2 md:w-3/4">
                            {release.format[0]} 
                            {release.format[1] && (
                              <span> / {release.format[1]}</span>
                            )}</div>
                      </div>

              <div className="pt-5 md:pt-8">
                 <div className="flex items-center gap-5">
                        {release.shopifyProduct && (
                            <VinylIcon 
                            url={`/products/music/${release.slug}`}
                            icon={<BsFillVinylFill/>}
                            text="Buy Vinyl" />
                        )}
                         {release.urlBandcamp && (
                             <ReleaseIcon 
                                url={release.urlBandcamp}
                                icon={<SiBandcamp/>}
                                text="Bandcamp"
                                textMargin="ml-0 md:ml-2"
                                />
                        )}
                        {release.urlListen && (
                            <ReleaseIcon 
                            url={release.urlListen}
                            icon={<FaSpotify/>}
                            text="Spotify"
                            textMargin="ml-0 md:ml-2"
                            />
                        )}
                        {release.urlAppleMusic && (
                            <ReleaseIcon 
                            url={release.urlListen}
                            icon={<FaApple/>}
                            text="Apple Music"
                            textMargin="ml-0 md:ml-2"
                            />
                        )}

                        </div>
                  </div>
                  </div>
                
                {release.tracklist && (
                      <div className="hidden md:block col-span-1 mr-48 text-sm">
                      <p className="font-semibold px-5 pb-5 text-grey50">Tracklisting</p>
                      {release.tracklist.map(track => {
                      return (
                        <div className="border-b border-grey20 mb-1">
                          <p className="ml-5 mb-1 text-sm leading-relaxed">{track}</p>
                          </div>
                      )
                      } 
                      )}                      
                  </div>
                )}


              </div>
              </div>
              </div>
              </motion.div>
            )
      }
      )}
        </div>

    )
}

export default ReleasesChild
