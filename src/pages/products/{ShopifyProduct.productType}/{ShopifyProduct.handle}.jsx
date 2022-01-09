import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../../components/layout"
import isEqual from "lodash.isequal"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { StoreContext } from "../../../context/store-context"
import { AddToCart } from "../../../components/add-to-cart"
import { AddToCartVinyl } from "../../../components/add-to-cartVinyl"
import ReleaseIcon from "../../../icons/releaseIcon"
import { FaSpotify, FaApple } from 'react-icons/fa';
import { SiTidal, SiBandcamp } from 'react-icons/si';
import { BsFillVinylFill } from 'react-icons/bs';
import { NumericInput } from "../../../components/numeric-input"
import { formatPrice } from "../../../utils/format-price"
import { Seo } from "../../../components/seo"
import { CgChevronRight as ChevronIcon } from "react-icons/cg"
import {
  productBox,
  container,
  header,
  productImageWrapper,
  productImageList,
  productImageListItem,
  scrollForMore,
  noImagePreview,
  optionsWrapper,
  priceValue,
  selectVariant,
  labelFont,
  breadcrumb,
  tagList,
  addToCartStyle,
  metaSection,
  productDescription,
} from "./product-page.module.css"
import {
  stroke,
  buyButton,
  icon,
} from "../../../components/releasesInfo.module.css"

export default function Product({ data: { product, suggestions, cms, cmsMerch } }) {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    images,
    tags,
    storefrontId,
    images: [firstImage],
  } = product

  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? []

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  const handleOptionChange = (index, event) => {
    const value = event.target.value

    if (value === "") {
      return
    }

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }

    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    setVariant({ ...selectedVariant })
  }

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  )

  const hasVariants = variants.length > 1
  const hasImages = images.length > 0
  const hasMultipleImages = true || images.length > 1

  // linking the Shopify product with the release data from Contentful
  const productId = product.storefrontId
  const allProductCms = cms.nodes
  const productCms =  allProductCms.filter(node => node.shopifyProduct === productId)
  const allProductCmsMerch = cmsMerch.nodes
  const productCmsMerch =  allProductCmsMerch.filter(node => node.shopifyProduct === productId)

  const Bold = ({ children }) => <span className="font-semibold">{children}</span>
  const Italic = ({ children }) => <span className="italic">{children}</span>  

  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <div className="text-base pb-3">{children}</div>,
      [BLOCKS.HEADING_1]: (node, children) => <div className="text-xl text-gray-900 font-semibold pt-4 pb-3">{children}</div>,
      [BLOCKS.HEADING_2]: (node, children) => <div className="text-large text-gray-900 font-normal underline pt-4 pb-3">{children}</div>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-6">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-6 pb-0">{children}</ol>,
    },
  }

  return (
    <Layout>
      {firstImage ? (
        <Seo
          title={title}
          description={description}
          image={getSrc(firstImage.gatsbyImageData)}
        />
      ) : undefined}
      <div className="min-h-[90vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {hasImages && (
            <div className="">
              <div
                role="group"
                aria-label="gallery"
                aria-describedby="instructions"
                className="my-0 md:my-12"
              >
                <ul className={productImageList}>
                  {images.map((image, index) => (
                    <li
                      key={`product-image-${image.id}`}
                      className={productImageListItem}
                    >
                      <GatsbyImage
                        objectFit="contain"
                        loading={index === 0 ? "eager" : "lazy"}
                        alt={
                          image.altText
                            ? image.altText
                            : `Product Image of ${title} #${index + 1}`
                        }
                        image={image.gatsbyImageData}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              {hasMultipleImages && (
                <div className={scrollForMore} id="instructions">
                  <span aria-hidden="true">←</span> scroll for more{" "}
                  <span aria-hidden="true">→</span>
                </div>
              )}
            </div>
          )}
          {!hasImages && (
            <span className={noImagePreview}>No Preview image</span>
          )}

          <div className="">
          <div className="mt-6 md:mt-12 mx-5 md:mx-12 lg:pr-48">
            {/* <div className={breadcrumb}>
              <Link to={product.productTypeSlug}>Store</Link>
              <ChevronIcon size={12} />
            </div> */}
            <h1 className="text-sm md:text-lg font-bold pt-4 pb-3 ">{product.variants[0].sku}</h1>
                        <p className="font-faune uppercase text-3xl md:text-5xl"><span className={stroke}>{tags}</span>
                        </p>
                        <p className="font-normal text-2xl md:text-3xl"><span className="">{title}</span>
                        </p>

            {product.productType === "Merch" && (
            <div className="pt-6 md:pt-12 pb-3 md:pb-12">
            {/* <p className="text-lg pt-6 md:pt-12 pb-12 md:pb-24">{description}</p> */}
              {productCmsMerch[0].description && renderRichText(productCmsMerch[0].description, richTextOptions)}
              </div>
            )}

            {product.productType === "Music" && (
            <div className="pt-6 md:pt-12 pb-3 md:pb-12">
              {productCms[0].description && renderRichText(productCms[0].description, richTextOptions)}

              <div className="flex items-center pt-6 gap-5">
                         {productCms[0].urlBandcamp && (
                             <ReleaseIcon 
                                url={productCms[0].urlBandcamp}
                                icon={<SiBandcamp/>}
                                text="Bandcamp"
                                textMargin="ml-0 md:ml-2"
                                />
                        )}
                        {productCms[0].urlListen && (
                            <ReleaseIcon 
                            url={productCms[0].urlListen}
                            icon={<FaSpotify/>}
                            text="Spotify"
                            textMargin="ml-0 md:ml-2"
                            />
                        )}
                        {productCms[0].urlAppleMusic && (
                            <ReleaseIcon 
                            url={productCms[0].urlListen}
                            icon={<FaApple/>}
                            text="Apple Music"
                            textMargin="ml-0 md:ml-2"
                            />
                        )}

                        </div>

            </div>
            
            )}
          </div>

          <div className="">
          <div className="ml-5 md:ml-12 flex items-center py-6 text-lg font-semibold">
            <fieldset className="">
              {hasVariants &&
                options.map(({ id, name, values }, index) => (
                  <div className={selectVariant} key={id}>
                    <select
                      aria-label="Variants"
                      onChange={(event) => handleOptionChange(index, event)}
                    >
                      <option value="">{`Select ${name}`}</option>
                      {values.map((value) => (
                        <option value={value} key={`${name}-${value}`}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
            </fieldset>

            {product.productType === "Music" && (
            <div className="text-xl">
              Vinyl
              <span className="text-base ml-3">{productCms[0].vinylVariant}</span>

            </div>
            )}
            <div className="ml-auto mr-3">
              {price}
            </div>

            {product.productType === "Music" && (
            <div className="ml-auto mr-5 md:mr-12">
              {/* <NumericInput
                aria-label="Quantity"
                onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                onChange={(event) => setQuantity(event.currentTarget.value)}
                value={quantity}
                min="1"
                max="20"
              /> */}  
              <AddToCartVinyl
                variantId={productVariant.storefrontId}
                quantity={quantity}
                available={available}
              />
            </div>
            )}
            {product.productType !== "Music" && (
            <div className="ml-auto mr-5 md:mr-12">
              {/* <NumericInput
                aria-label="Quantity"
                onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                onChange={(event) => setQuantity(event.currentTarget.value)}
                value={quantity}
                min="1"
                max="20"
              /> */}  
              <AddToCart
                variantId={productVariant.storefrontId}
                quantity={quantity}
                available={available}
              />
            </div>
            )}
          </div>
            {/* <div className={metaSection}>
              <span className={labelFont}>Type</span>
              <span className={tagList}>
                <Link to={product.productTypeSlug}>{product.productType}</Link>
              </span>
              <span className={labelFont}>Tags</span>
              <span className={tagList}>
                {product.tags.map((tag) => (
                  <Link to={`/search?t=${tag}`}>{tag}</Link>
                ))}
              </span>
            </div> */}
          </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $productType: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      productType
      productTypeSlug: gatsbyPath(
        filePath: "/products/{ShopifyProduct.productType}"
      )
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        # altText
        id
        gatsbyImageData(layout: CONSTRAINED, width: 640, aspectRatio: 1)
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        selectedOptions {
          name
          value
        }
        sku
      }
      options {
        name
        values
        id
      }
    }
    suggestions: allShopifyProduct(
      limit: 3
      filter: { productType: { eq: $productType }, id: { ne: $id } }
    ) {
      nodes {
        ...ProductCard
      }
    }
    cms: allContentfulRelease(filter: { shopifyProduct: {ne: "null"}}) {
      nodes {
        id
        title
        format
        vinylVariant
        urlAppleMusic
        urlListen
        urlBandcamp
        shopifyProduct
        description {
          raw
        }
    }
  }
  cmsMerch: allContentfulMerch(filter: {shopifyProduct: {ne: "null"}}) {
    nodes {
        title
        description {
          raw
        }
        releaseDate
        slug
        pictures {
          gatsbyImageData
        }
        shopifyProduct
      }
    }
  }
`
