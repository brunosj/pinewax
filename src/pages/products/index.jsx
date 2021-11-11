import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
import { Seo } from "../../components/seo"
import { MoreButton } from "../../components/more-button"
import { title } from "./index.module.css"
import { NavigationStore } from "../../components/navigation-store"
import {
  header,
  container,
  logo as logoCss,
  searchButton,
  nav,
} from "../../components/header.module.css"

export default function Products({ data: { products } }) {
  return (
    <Layout>
      <Seo title="All Products" />
      <NavigationStore className={nav} />
      {/* <div className="container">All Products</div> */}
      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <MoreButton to={`/search#more`}>More products</MoreButton>
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    products: allShopifyProduct(
      sort: { fields: publishedAt, order: ASC }
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
