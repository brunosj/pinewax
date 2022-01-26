import React from "react";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image"
import "./slick-theme.css"
import "./slick.css"

const ProductSliderSlick = ({ productImages }) => {

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    swipeToSlide: true,
  };

  return (
    <div>
      <Slider {...settings}>

        {productImages[0] && (
          <div className="w-full mt-16 mb-12">
            <div className="flex m-auto">
              <GatsbyImage
                objectFit="contain"
                loading="eager"
                alt={
                  productImages[0].altText
                    ? productImages[0].altText
                    : `Product Image`
                }
                image={productImages[0].gatsbyImageData}
              />
            </div>
          </div>
        )}

        {productImages[1] && (
          <div className="w-full mt-16 mb-12">
            <div className="flex m-auto">
              <GatsbyImage
                objectFit="contain"
                loading="lazy"
                alt={
                  productImages[1].altText
                    ? productImages[1].altText
                    : `Product Image`
                }
                image={productImages[1].gatsbyImageData}
              />
            </div>
          </div>
        )}

        {productImages[2] && (
          <div className="w-full mt-16 mb-12">
            <div className="flex m-auto">
              <GatsbyImage
                objectFit="contain"
                loading="lazy"
                alt={
                  productImages[2].altText
                    ? productImages[2].altText
                    : `Product Image`
                }
                image={productImages[2].gatsbyImageData}
              />
            </div>
          </div>
        )}

        {productImages[3] && (
          <div className="w-full mt-16 mb-12">
            <div className="flex m-auto">
              <GatsbyImage
                objectFit="contain"
                loading="lazy"
                alt={
                  productImages[3].altText
                    ? productImages[3].altText
                    : `Product Image`
                }
                image={productImages[3].gatsbyImageData}
              />
            </div>
          </div>
        )}

        {productImages[4] && (
          <div className="w-full mt-16 mb-12">
            <div className="flex m-auto">
              <GatsbyImage
                objectFit="contain"
                loading="lazy"
                alt={
                  productImages[4].altText
                    ? productImages[4].altText
                    : `Product Image`
                }
                image={productImages[4].gatsbyImageData}
              />
            </div>
          </div>
        )}

        {productImages[5] && (
          <div className="w-full mt-16 mb-12">
            <div className="flex m-auto">
              <GatsbyImage
                objectFit="contain"
                loading="lazy"
                alt={
                  productImages[5].altText
                    ? productImages[5].altText
                    : `Product Image`
                }
                image={productImages[5].gatsbyImageData}
              />
            </div>
          </div>
        )}

      </Slider>
    </div>
  );
}

export default ProductSliderSlick
