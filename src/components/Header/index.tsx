import React from "react";
import { styles } from "./styles";

const Header: React.FC = ({ children }) => {
  return (
    <header css={styles.header}>
      <span>Hello</span>
    </header>
  );
};

export default Header;