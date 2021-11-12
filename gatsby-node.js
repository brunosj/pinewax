const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        Artist: allContentfulArtist {
          nodes {
            slug
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      }

      if (data && data.Artist) {
        const component = path.resolve("./src/pages/templates/artist-page.jsx")
        data.Artist.nodes.map(({ slug }) => {
          createPage({
            path: `/artists/${slug}`,
            component,
            context: { slug },
          })
        })
      }

      resolve()
    })
  })
}
