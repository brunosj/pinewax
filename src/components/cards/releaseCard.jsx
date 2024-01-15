import React from "react"
import { FaSpotify, FaApple } from "react-icons/fa"
import { SiTidal, SiBandcamp } from "react-icons/si"
import { BsFillVinylFill } from "react-icons/bs"
import ReleaseIcon from "../../icons/releaseIcon"
import VinylIcon from "../../icons/vinylIcon"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ReleaseCard = ({ releases }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-5">
      {releases.map((release) => (
        <div className="border border-grey20 p-5 h-full">
          <Link
            to={`/releases#${release.slug}`}
            className="grid grid-cols-3 h-3/5"
          >
            <div className="flex col-span-2 flex-col">
              <div className="">
                <p className="font-bold">{release.releaseArtist}</p>
                <p className="leading-none">{release.title}</p>
              </div>
            </div>
            {release.vinylMockup && (
              <div className="">
                <GatsbyImage
                  loading="eager"
                  alt="Pinewax"
                  image={release.vinylMockup.gatsbyImageData}
                />
              </div>
            )}
            {!release.vinylMockup && (
              <div className="px-3 mb-3">
                <GatsbyImage
                  loading="eager"
                  alt="Pinewax"
                  image={release.cover.gatsbyImageData}
                />
              </div>
            )}
          </Link>
          <div className="flex h-2/5">
            <div className=" flex flex-wrap items-center self-end gap-3">
              {/* {release.vinylMockup && (
                          <div className="">
                            <VinylIcon 
                            url={`/products/music/${release.slug}`}
                            icon={<BsFillVinylFill/>}
                            text="Buy Vinyl" 
                            />
                            </div>
                        )} */}
              {release.urlBandcamp && (
                <ReleaseIcon
                  url={release.urlBandcamp}
                  icon={<SiBandcamp />}
                  text=""
                />
              )}
              {release.urlListen && (
                <ReleaseIcon
                  url={release.urlListen}
                  icon={<FaSpotify />}
                  text=""
                />
              )}
              {release.urlTidal && (
                <ReleaseIcon
                  url={release.urlTidal}
                  icon={<SiTidal />}
                  text=""
                />
              )}
              {release.urlAppleMusic && (
                <ReleaseIcon
                  url={release.urlListen}
                  icon={<FaApple />}
                  text=""
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReleaseCard
