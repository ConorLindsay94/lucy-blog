import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { styles } from "../styles/pages/product";

const Product: React.FC = ({ data }) => {
  const { name, description, images } = data.contentfulProduct;

  return (
    <Layout>
      <section css={styles.wrapper}>
        <div css={styles.container}>
          <div css={styles.imageContainer}>
            <Img
              css={styles.image}
              imgStyle={{
                objectFit: "none",
                objectPosition: "50% 50%",
              }}
              title={images[0].id}
              fluid={images[0].fluid}
            />
          </div>
        </div>
        <div css={styles.container}>
          <h1 css={styles.header}>{name}</h1>
          <div css={styles.description}>
            {documentToReactComponents(description.json)}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      description {
        json
      }
      images {
        id
        fluid(maxHeight: 480, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;
