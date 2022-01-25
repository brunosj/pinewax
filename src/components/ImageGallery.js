import React from 'react'
import Gallery from '@browniebroke/gatsby-image-gallery'
import { GatsbyImage } from "gatsby-plugin-image"


const ImageGallery = ( { pics }) => {
const images = pics.map(({ localFile }) => localFile.childImageSharp)

return (
<div className="mx-3 lg:mx-0 cursor-pointer">     
         <Gallery 
            images={images}
            className="" 
            />
</div>
)
}

export default ImageGallery

