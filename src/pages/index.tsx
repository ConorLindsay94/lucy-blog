import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/pages/home";

const Index: React.FC = ({ data }) => {
  const { allContentfulBlogPost: blogPosts, contentfulAsset: homeHero } = data;
  const recentPosts = blogPosts.edges.slice(0, 3);
  console.log(recentPosts);

  return (
    <Layout>
      <section>
        <Img
          css={globalStyles.heroImage}
          alt={homeHero.title}
          fluid={homeHero.fluid}
        />
      </section>
      <section css={globalStyles.container}>
        <h2 css={styles.title}>Latest blog posts</h2>
        <div css={styles.recentPostsContainer}>
          {recentPosts.map(({ node }) => (
            <article css={styles.recentPost}>
              <Link to={`/blog/${node.slug}`}>
                <Img alt={node.title} fluid={node.heroImage.fluid} />
                <h3>{node.title}</h3>
              </Link>
              <small>{node.publishDate}</small>
              <div
                dangerouslySetInnerHTML={{
                  __html: node.description.childMarkdownRemark.html,
                }}
              />
            </article>
          ))}
        </div>
      </section>
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
