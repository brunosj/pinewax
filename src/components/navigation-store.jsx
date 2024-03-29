// import { graphql, useStaticQuery, Link } from "gatsby"
// import * as React from "react"
// import slugify from "@sindresorhus/slugify"
// import { navLink, navStyleLowerCase, activeLink } from "./navigation.module.css"

// export function NavigationStore({ className }) {
//   const {
//     allShopifyProduct: { productTypes },
//   } = useStaticQuery(graphql`
//     query {
//       allShopifyProduct {
//         productTypes: distinct(field: productType)
//       }
//     }
//   `)

//   return (
//     <div className="ml-auto flex border-b border-t border-grey20 text-sm">
//       <nav className={[navStyleLowerCase, className].join(" ")}>
//         <Link
//           key="All"
//           className={navLink}
//           to="/products/"
//           activeClassName={activeLink}
//         >
//           all products
//         </Link>
//         {productTypes.map((name) => (
//           <Link
//             key={name}
//             className={navLink}
//             to={`/products/${slugify(name)}`}
//             activeClassName={activeLink}
//           >
//             {name}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   )
// }
