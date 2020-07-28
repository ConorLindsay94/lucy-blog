import React from "react";
import Layout from "../components/Layout";
import { globalStyles } from "../styles/global";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { styles } from "../styles/pages/blog-post";

const BlogPost: React.FC = ({ data }) => {
  const { contentfulBlogPost: blogPost } = data;
  return (
    <Layout>
      <section css={globalStyles.container}>
        <Img
          css={globalStyles.heroImage}
          title={blogPost.title}
          fluid={blogPost.heroImage.fluid}
        />
      </section>
      <section>
        <h1 css={styles.header}>{blogPost.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: blogPost.body.childMarkdownRemark.html,
          }}
        />
      </section>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
