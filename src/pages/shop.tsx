import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { styles } from "../styles/pages/shop";
import { globalStyles } from "../styles/global";

const Shop: React.FC = ({ data }) => {
  const categories = data.allContentfulCategory.edges;

  return (
    <Layout>
      <Helmet>
        <title>Lucy in the Sky | Shop</title>
      </Helmet>
      <section css={styles.categoriesContainer}>
        {categories.map(({ node }) => (
          <article css={styles.category}>
            <Link to={`/shop/${node.slug}/`}>
              <div css={styles.imageContainer}>
                <Img
                  css={styles.image}
                  title={node.title}
                  fluid={node.displayImage.fluid}
                />
              </div>
              <h2 css={globalStyles.categoryTitle}>{node.name}</h2>
            </Link>
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
          slug
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
