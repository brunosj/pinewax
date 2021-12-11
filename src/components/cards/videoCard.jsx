import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  videoCard,
  cardInner, 
  cardFront, 
  cardBack,
  cardBackText,
  cardImg,
} from "./videoCard.module.css"

const VideoCard = ({ image, title, slug, textSize }) => {  
  return (
    <div className={videoCard}>
      <Link to={slug}>
                <div className={cardInner}>
                      <div className={cardFront}>
                              <GatsbyImage 
                                  loading="eager"
                                  alt="Pinewax"
                                  image={image}
                                  />
                    
                      <div className={cardBack}>
                        {/* <div className={cardBackImg}>
                              <GatsbyImage 
                              loading="eager"
                              alt="Pinewax"
                              image={artist.pictureVariation.localFile.childImageSharp.gatsbyImageData}
                              />
                              </div> */}
                              <div className={cardBackText}>
                                <span className={textSize}>{title}</span>
                              </div>    
                      </div>

                      </div>
                  </div> 
                  </Link>      
    </div>
  )
}

export default VideoCard

