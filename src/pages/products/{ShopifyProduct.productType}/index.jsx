import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../../components/layout"
import { ProductListing } from "../../../components/product-listing"
import { Seo } from "../../../components/seo"
import slugify from "@sindresorhus/slugify"
import { MoreButton } from "../../../components/more-button"
import { NavigationStore } from "../../../components/navigation-store"
import {
  logo as logoCss,
  nav,
} from "../../../components/header.module.css"

export default function ProductTypeIndex({
  data: { products },
  pageContext: { productType },
}) {

  return (
    <Layout>
      <Seo title={`Category: ${productType}`} />
      <NavigationStore className={nav} />
      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <MoreButton to={`/search?p=${slugify(productType)}#more`}>
          More Products
        </MoreButton>
      )}
    </Layout>
  )
}

export const query = graphql`
  query($productType: String!) {
    products: allShopifyProduct(
      filter: { productType: { eq: $productType } }
      sort: { fields: createdAt, order: DESC }
      limit: 24
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
