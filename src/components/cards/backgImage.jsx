import React from 'react'
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { 
    bgImgCard, 
    bgImgCardInner, 
    bgImgCardFront, 
    bgImgCardFrontChild, 
    imgOverlay,
    imgOverlayText, 
    bgImgCardBack } from "./BackgImage.module.css"
import { Link } from 'gatsby'

const BackgImage = ({ componentImage, bgColour }) => {

  const image = getImage(componentImage)

//   I am using CSS Modules for this component as they are more straightforward than Tailwind for CSS animations

  return (
      <div className={bgImgCard}>
        <Link to="/">
          <div className={bgImgCardInner}>
            <div className={bgImgCardFront}>
                <div className={bgImgCardFrontChild}>
                <BgImage image={image} style={{ minWidth: 300, minHeight: 200 }}>
                    <div className={imgOverlay}>
                        <div className={imgOverlayText}>Video</div>
                    </div>
                </BgImage>
                </div>
            </div>
            <div className={bgImgCardBack}>
                <div className="flex h-full justify-center items-center">
                    text
                    </div>    
            </div>
        </div>
        </Link>
     </div>
  )
}

export default BackgImage