const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        Project: allContentfulArtist {
          nodes {
            slug
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      }

      if (data && data.Project) {
        const component = path.resolve("./src/pages/templates/artist-page.jsx")
        data.Project.nodes.map(({ slug }) => {
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
