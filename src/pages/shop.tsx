import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { styles } from "../styles/pages/shop";

const Shop: React.FC = ({ data }) => {
  const categories = data.allContentfulCategory.edges;

  console.log(categories);
  return (
    <Layout>
      <Helmet>
        <title>Lucy in the Sky | Shop</title>
      </Helmet>
      <section css={styles.categoriesContainer}>
        {categories.map(({ node }) => (
          <article css={styles.category}>
            <div css={styles.imageContainer}>
              <Img css={styles.image} title={node.title} fluid={node.displayImage.fluid} />
            </div>
            <h2 css={styles.categoryTitle}>{node.name}</h2>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Shop;

export const pageQuery = graphql`
  query ShopQuery {
    allContentfulCategory {
      edges {
        node {
          id
          name
          displayImage {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  }
`;
