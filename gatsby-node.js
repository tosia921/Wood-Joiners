const path = require("path")
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
    {
      allSanityProject {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
    
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const ProjectTemplate = path.resolve(`src/templates/project.js`)
  result.data.allSanityProject.edges.forEach(({ node }) => {
    const path = `projects/${node.slug.current}`
    createPage({
      path,
      component: ProjectTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id: node.id,
      },
    })
  })
}
