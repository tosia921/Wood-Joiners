exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allContentfulProject {
          edges {
            node {
                slug
            }
          }
        }
      }
    `)
    data.allContentfulProject.edges.forEach(edge => {
      const slug = edge.node.slug;
      actions.createPage({
        path: `projects/${slug}`,
        component: require.resolve(`./src/templates/project.js`),
        context: { slug: slug },
      })
    })
  }