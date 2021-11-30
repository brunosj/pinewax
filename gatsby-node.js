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
        Video: allContentfulVideo {
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
      if (data && data.Video) {
        const component = path.resolve("./src/pages/templates/video-page.jsx")
        data.Video.nodes.map(({ slug }) => {
          createPage({
            path: `/videos/${slug}`,
            component,
            context: { slug },
          })
        })
      }

      resolve()
    })
  })
}
