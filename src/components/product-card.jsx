import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import { formatPrice } from "../utils/format-price"
import {
  productCardStyle,
  productHeadingStyle,
  productImageStyle,
  productDetailsStyle,
  productVendorStyle,
  productPrice,
} from "./product-card.module.css"

export function ProductCard({ product, eager }) {
  const {
    title,
    priceRangeV2,
    slug,
    images: [firstImage],
    tags,
    storefrontImages,
    variants,
  } = product

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  const defaultImageHeight = 200
  const defaultImageWidth = 200
  let storefrontImageData = {}
  if (storefrontImages) {
    const storefrontImage = storefrontImages.edges[0].node
    try {
      storefrontImageData = getShopifyImage({
        image: storefrontImage,
        layout: "fixed",
        width: defaultImageWidth,
        height: defaultImageHeight,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const hasImage = firstImage || Object.getOwnPropertyNames(storefrontImageData || {}).length

  return (
    <Link
      className="bg-grey10 hover:bg-white transform transition duration-300 ease-in-out group"
      to={slug}
      aria-label={`View ${title} product page`}
    >
        <div className="border-r border-grey20 leading-none">
            {/* <div className={productVendorStyle}>{vendor}</div> */}
            <h2 className="pt-6 mx-5 text-lg font-semibold leading-none">
              {tags}
            </h2>
            <h2 className="mx-5 text-lg ">{title}</h2>
        </div>
      {hasImage
        ? (
          <div className="border-r border-b border-grey20  box-border" data-name="product-image-box">
            <div className="transform transition duration-300 ease-in-out scale-100 group-hover:scale-90 p-16">
            <GatsbyImage
              alt={firstImage?.altText ?? title}
              image={firstImage?.gatsbyImageData ?? storefrontImageData}
              loading={eager ? "eager" : "lazy"}
              imgStyle={{ zIndex: '0'  }}
            />
            </div>
          </div>
        ) : (
          <div style={{ height: defaultImageHeight, width: defaultImageWidth }} />
        )
      }

    </Link>
  )
}

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    tags
    slug: gatsbyPath(
      filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
    )
    images {
      id
      altText
      gatsbyImageData(aspectRatio: 1, width: 640)
    }
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    catalog:variants {
      sku
    }
    vendor
  }
`
