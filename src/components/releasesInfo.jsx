import * as React from "react"
import { Link } from "gatsby"
import Bandcamp from "../icons/bandcamp"
import Spotify from "../icons/spotify"
import Apple from "../icons/applemusic"
import CartIcon from "../icons/cart"
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
            <div className="text-3xl md:text-5xl font-bold font-faune uppercase">
                <h1 className="">
                    <span className={stroke}>{release.releaseArtist}</span>
                </h1>
                <h1 className="pt-1">
                <span className={stroke}> {release.title}</span>
                </h1>
            </div>
            <div className="pt-10 w-full ">
                <div className="flex">
                    <div className={alignment}>
                        {release.vinylMockup && (
                            <Link to={`/products/music/${release.slug}`}>
                                    <button
                                    type="submit"
                                    className="flex flex-row border-black border-2 items-center py-1 md:py-2 px-3 md:px-5 hover:bg-black hover:text-white"
                                    >
                                    <CartIcon />

                                    <span className="ml-2 text-base md:text-lg font-bold">BUY</span>
                                    </button>                      
                             </Link>
                        )}
                        {release.urlBandcamp && (
                            <a href={release.urlBandcamp} target="_blank" rel="noreferrer" className="px-3">
                                <Bandcamp />            
                            </a>
                        )}
                        {release.urlListen && (
                            <a href={release.urlListen} target="_blank" rel="noreferrer" className="px-3">
                                <Spotify />             
                            </a>
                        )}
                        {release.urlAppleMusic && (
                            <a href={release.urlAppleMusic} target="_blank" rel="noreferrer" className="px-3">
                                <Apple />             
                            </a>
                        )}
                        </div>
                        </div>
            </div>
        </div>

    )
}

export default ReleasesInfo
