import { graphql } from "gatsby";
import Img from "gatsby-image";
import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import contentfulClient from "../services/contentful";
import { config } from "../../config/config";
import { globalStyles } from "../styles/global";
import { styles as categoryStyles } from "../styles/pages/category";
import LoadingState from "../components/LoadingState";

const categoryTypes = config.contentTypes.find(
  (data) => data.name === "category"
)!.entries;

const Category: React.FC = ({ data }) => {
  const [products, setProducts] = useState<Array<any> | null>(null);
  const staticCategory = data.contentfulCategory;

  useEffect(() => {
    contentfulClient
      .getEntries({
        content_type: "product",
        "fields.category.sys.id": categoryTypes.find(
          (category) => category.name === staticCategory.name
        )?.id,
      })
      .then((response) => setProducts(response.items))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <section css={categoryStyles.imageContainer}>
        <Img
          css={[globalStyles.heroImage, globalStyles.heroImageCategory]}
          title={staticCategory.name}
          fluid={staticCategory.displayImage.fluid}
        />
        <h1 css={globalStyles.categoryTitle}>{staticCategory.name}</h1>
      </section>
      <section>
        <div css={[globalStyles.container, categoryStyles.productsContainer]}>
          {products ? (
            products.map((product) => (
              <article css={categoryStyles.product}>
                <div
                  style={{
                    backgroundImage: `url("${product.fields.images[0].fields.file.url}")`,
                  }}
                  css={categoryStyles.previewImage}
                ></div>
                <div css={categoryStyles.productInfo}>
                  <h3>{product.fields.name}</h3>
                  <small>£{parseFloat(product.fields.price)}</small>
                </div>
              </article>
            ))
          ) : (
            <LoadingState />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Category;

export const query = graphql`
  query($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      id
      name
      slug
      displayImage {
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
