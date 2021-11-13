import * as React from "react"
import { Link } from "gatsby"

const ReleasesInfo = ({ release }) => {  
const formats = release.format
console.log(formats)

    return (
        <div className="text-base md:text-3xl">
            <h1 className="">
            {release.catalogNumber}
            </h1>
            <h1 className="text-lg md:text-4xl font-semibold">
                {release.releaseArtist}
            </h1>
            <h1 className="text-lg md:text-4xl ">
            {release.title}
            </h1>
            <div className="grid grid-cols-3 font-bold mt-6 md:mt-12">
                <h1 className="pr-5">BUY</h1>
                {release.format[1] === "Vinyl" && (
                    <Link to={`/products/music/${release.slug}`} className="underline hover:text-pwxBlue px-2">
                        Vinyl             
                    </Link>
                )}
                {release.urlBandcamp && (
                    <a href={release.urlBandcamp} target="_blank" rel="noreferrer" className="underline hover:text-pwxBlue px-2">
                        Digital             
                    </a>
                )}
                <h1 className="pt-2 pr-5 row-start-2">STREAM</h1>
                {release.urlListen && (
                    <a href={release.urlListen} target="_blank" rel="noreferrer" className="pt-2 col-start-2 underline hover:text-pwxBlue px-2 ">
                        Spotify             
                    </a>
                )}
                {release.urlAppleMusic && (
                    <a href={release.urlAppleMusic} target="_blank" rel="noreferrer" className="pt-2 underline hover:text-pwxBlue px-2 ">
                        Apple Music             
                    </a>
                )}
            </div>
        </div>

    )
}

export default ReleasesInfo
