import * as React from "react"
import { Link } from "gatsby"
import { FaSpotify, FaApple } from 'react-icons/fa';
import { SiTidal, SiBandcamp } from 'react-icons/si';
import { BsFillVinylFill } from 'react-icons/bs';
import ReleaseIcon from "../icons/releaseIcon"
import VinylIcon from "../icons/vinylIcon"
import {
    stroke,
  } from "./releasesInfo.module.css"
import { addToCart as addToCartStyle } from "./add-to-cart.module.css"


const ReleasesInfo = ({ release, alignment }) => {  
const formats = release.format
console.log(formats)

    return (
        <div className="pb-4 md:pb-0">
            {/* <h1 className="">
            {release.catalogNumber}
            </h1> */}
            <div className={alignment}>
                <h1 className="font-faune text-3xl md:text-5xl font-bold uppercase">
                    <span className={stroke}>{release.releaseArtist}</span>
                </h1>
                <h1 className="pt-1">
                <span className="font-faune text-2xl md:text-4xl font-normal"> {release.title}</span>
                </h1>
            </div>
            <div className="pt-5 md:pt-10 w-full ">
                <div className="flex items-center md:p-0 gap-5">
                        {release.vinylMockup && (
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

    )
}

export default ReleasesInfo
