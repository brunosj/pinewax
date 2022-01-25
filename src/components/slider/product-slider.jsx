import React from "react";
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import ImageGallery from 'react-image-gallery';
// import "./slick-theme.css"
// import "./slick.css"
import "./react-image-gallery.css"


const ProductSlider = ({ productImages }) => {

  const images = [
    {
      original: getSrc(productImages[0]), 
      thumbnail: getSrc(productImages[0]),
    },
    {
      original: getSrc(productImages[1]),
      thumbnail: getSrc(productImages[1]),
    },
    {
      original: getSrc(productImages[2]),
      thumbnail: getSrc(productImages[2]),
    },
  ];

console.log(images)


    return (
      <div>
    <ImageGallery 
        items={images}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        slideDuration= {0}
        autoPlay={false}
        additionalClass="py-16 px-24"
        
        />
        </div>
    );
  }
export default ProductSlider
