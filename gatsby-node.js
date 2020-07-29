const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.tsx");
    const categoryPage = path.resolve("./src/templates/category.tsx");
    const productPage = path.resolve("./src/templates/product.tsx");
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulCategory {
              edges {
                node {
                  slug
                  products {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;
        const categories = result.data.allContentfulCategory.edges;
        posts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });
        categories.forEach((category) => {
          const products = category.node.products;
          createPage({
            path: `/shop/${category.node.slug}/`,
            component: categoryPage,
            context: {
              slug: category.node.slug,
            },
          });
          if (products && products.length) {
            products.forEach((product) => {
              console.log(product)
              createPage({
                path: `/shop/${category.node.slug}/${product.slug}/`,
                component: productPage,
                context: {
                  slug: product.slug,
                },
              });
            });
          }
        });
      })
    );
  });
};
