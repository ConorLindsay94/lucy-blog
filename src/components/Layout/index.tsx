import React from "react";
import Header from "../Header";
import { Global } from "@emotion/core";
import { globalStyles } from "../../styles/global";

const Layout: React.FC = ({ children }) => {
  return (
    <main>
      <Global styles={globalStyles} />
      <Header>{children}</Header>
    </main>
  );
};

export default Layout;
