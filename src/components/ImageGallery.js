import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
import Gallery from '@browniebroke/gatsby-image-gallery'

const ImageGallery = ( { pics }) => {
const images = pics
console.log(images)

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

