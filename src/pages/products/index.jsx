// import * as React from "react"
// import { graphql } from "gatsby"
// import { Layout } from "../../components/layout"
// import { ProductListing } from "../../components/product-listing"
// import { Seo } from "../../components/seo"
// import { MoreButton } from "../../components/more-button"
// import { NavigationStore } from "../../components/navigation-store"
// import { logo as logoCss, nav } from "../../components/header.module.css"

// export default function Products({ data: { products } }) {
//   return (
//     <Layout>
//       <Seo title="Store" />
//       <NavigationStore className={nav} />
//       <ProductListing products={products.nodes} />
//       {products.pageInfo.hasNextPage && (
//         <MoreButton to={`/search#more`}>More products</MoreButton>
//       )}
//     </Layout>
//   )
// }

// export const query = graphql`
//   {
//     products: allShopifyProduct(
//       sort: { fields: publishedAt, order: ASC }
//       limit: 24
//     ) {
//       nodes {
//         ...ProductCard
//       }
//       pageInfo {
//         hasNextPage
//       }
//     }
//   }
// `
