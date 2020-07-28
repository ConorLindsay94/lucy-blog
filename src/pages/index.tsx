import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { globalStyles } from "../styles/global";

const Index = ({ data }) => {
  const { contentfulAsset: homeHero } = data;
  return (
    <Layout>
      <Img
        css={globalStyles.heroImage}
        alt={homeHero.title}
        fluid={homeHero.fluid}
      />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentfulAsset(title: { eq: "Home hero" }) {
      id
      title
      fluid(maxHeight: 480, resizingBehavior: PAD, background: "rgb:000000") {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
      }
    }
  }
`;
