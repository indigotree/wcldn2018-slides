const path = require('path');

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    // Remove trailing slash
    const newPage = Object.assign({}, page, {
      path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``)
    });

    if (newPage.path !== page.path) {
      // Remove the old page
      deletePage(page);
      // Add the new page
      createPage(newPage);
    }

    resolve();
  });
};

// Create slides from WordPress.
exports.createPages = ({ boundActionCreators, graphql }) => {

  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve(`src/templates/slide.js`);

  return graphql(`
  {
    allWordpressPost(
      sort:{
        fields:date
        order:ASC
      }
    ) {
      edges {
        node {
          id
          title
          content
          date
          slug
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    let i = 1;
    result.data.allWordpressPost.edges.forEach(edge => {
      const absolutePath = `${edge.node.slug}`;
      const fileName = path.basename(absolutePath, path.extname(absolutePath));

      createPage({
        path: i,
        component: blogPostTemplate,
        context: { 
          absolutePath,
          id: `${edge.node.id}`
        }
      });
      i++;
    });
  });
};
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /webfontloader/,
      loader: 'null-loader'
    })
  }
}