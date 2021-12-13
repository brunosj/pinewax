import * as React from "react"
import { Link } from "gatsby"
import Bandcamp from "../icons/bandcamp"
import Spotify from "../icons/spotify"
import Apple from "../icons/applemusic"
import CartIcon from "../icons/cart"
import Record from "../assets/vinyl.svg";
import {
    stroke,
    icon,
    buyButton,
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
            <div className="pt-10 w-full ">
                <div className="grid grid-cols-4 items-center justify-evenly md:p-0">
                        {release.vinylMockup && (
                            <div className={buyButton}>
                            <Link to={`/products/music/${release.slug}`}>
                                    <button
                                    type="submit"
                                    className="flex flex-row border-black border-2 items-center py-1 md:py-2 px-2 md:px-5 hover:bg-black hover:text-white"
                                    >
                                    <svg className={icon}>
                                            <Record />
                                            </svg>
                                    <span className="ml-2 text-sm md:text-lg font-semibold">BUY</span>
                                    </button>                      
                             </Link>
                             </div>
                        )}
                         {release.urlBandcamp && (
                            <div className="flex justify-around">
                            <a href={release.urlBandcamp} target="_blank" rel="noreferrer" className="">
                                <Bandcamp />            
                            </a>
                            </div>
                        )}
                        {release.urlListen && (
                            <div className="flex justify-around mt-1">
                            <a href={release.urlListen} target="_blank" rel="noreferrer" className="">
                                <Spotify />             
                            </a>
                            </div>
                        )}
                        {release.urlAppleMusic && (
                            <div className="flex justify-around">
                            <a href={release.urlAppleMusic} target="_blank" rel="noreferrer" className="">
                                <Apple />             
                            </a>
                            </div>
                        )}

                        </div>
            </div>
        </div>

    )
}

export default ReleasesInfo
