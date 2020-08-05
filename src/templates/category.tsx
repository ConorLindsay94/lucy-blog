import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import contentfulClient from "../services/contentful";
import { config } from "../../config/config";
import { globalStyles } from "../styles/global";
import { styles as categoryStyles } from "../styles/pages/category";

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
      <section>
        <div css={[globalStyles.container, categoryStyles.productsContainer]}>
          {products
            ? products.map((product) => (
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
            : null}
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
    }
  }
`;
