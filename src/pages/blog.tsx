import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import { globalStyles } from "../styles/global";

const Blog: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Lucy in the Sky | Blog</title>
      </Helmet>
    </Layout>
  );
};

export default Blog;
