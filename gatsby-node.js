const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const _ = require("lodash");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const slug = createFilePath({ node, getNode, basePath: "contents/posts" });
    
    createNodeField({
      node,
      name: "slug",
      value: `/posts${slug}`, // `/posts` prefix added to the slug
    });

    if (fileNode && fileNode.absolutePath) {
      createNodeField({
        node,
        name: "fileAbsolutePath",
        value: fileNode.absolutePath,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/Post.jsx`);
  const seriesTemplate = path.resolve(`./src/templates/Series.jsx`);

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { fileAbsolutePath: { regex: "/contents/posts/" } }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            series
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
    return;
  }

  const posts = result.data.postsRemark.nodes;

  // Create pages for each post with valid slug and title
  posts.forEach((post, index) => {
    if (post.fields?.slug && post.frontmatter?.title) {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: post.fields.slug,
        component: postTemplate,
        context: {
          id: post.id,
          slug: post.fields.slug,
          series: post.frontmatter.series,
          previousPostId,
          nextPostId,
        },
      });
    }
  });

  // Collect unique series names and create series pages
  const seriesList = _.uniq(posts.map(post => post.frontmatter.series).filter(Boolean));
  
  seriesList.forEach(singleSeries => {
    createPage({
      path: `/series/${_.kebabCase(singleSeries)}`,
      component: seriesTemplate,
      context: {
        series: singleSeries,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      excerpt: String
      html: String
      fields: MarkdownRemarkFields
    }
    
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      update: Date @dateformat
      tags: [String]
      series: String
    }
    
    type MarkdownRemarkFields {
      slug: String
      fileAbsolutePath: String
    }
  `);
};