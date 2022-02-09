import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import { formatPrice } from "../utils/format-price"

export function ProductCard({ product, eager }) {
  const {
    title,
    priceRangeV2,
    slug,
    images: [firstImage],
    tags,
    storefrontImages,
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
      className="bg-grey10 border-b border-r border-grey20 hover:bg-pwxBlue transform transition duration-300 ease-in-out group text-black hover:text-white"
      to={slug}
      aria-label={`View ${title} product page`}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex h-full text-center m-auto">
          <div className="pt-8 px-6 md:px-12 flex flex-col">
            <div className="pb-2">
              {/* <div className={productVendorStyle}>{vendor}</div> */}
              <h2 className="text-lg md:text-xl font-semibold leading-none">{title}</h2>
              <h2 className="text-base md:text-lg">
                {tags}
              </h2>
            </div>
            <div className="mt-auto">
              {price}
            </div>
          </div>
        </div>
        {hasImage
          ? (
            <div className="box-border" data-name="product-image-box">
              <div className="transform transition duration-300 ease-in-out scale-100 group-hover:scale-90 pt-6 pb-6 md:pb-12 px-6 md:px-12">
                <GatsbyImage
                  alt={firstImage?.altText ?? title}
                  image={firstImage?.gatsbyImageData ?? storefrontImageData}
                  loading={eager ? "eager" : "lazy"}
                  imgStyle={{ zIndex: '0' }}
                />
              </div>
            </div>
          ) : (
            <div style={{ height: defaultImageHeight, width: defaultImageWidth }} />
          )
        }
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    createdAt
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
