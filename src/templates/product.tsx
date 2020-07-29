import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { styles } from "../styles/pages/product";

const Product: React.FC = ({ data }) => {
  const product = data.contentfulProduct;

  return (
    <Layout>
      <section>
        <h1 css={styles.header}>{product.name}</h1>
        <div css={styles.description}>
          {documentToReactComponents(product.description.json)}
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
        fluid {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`;
