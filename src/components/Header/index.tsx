import { Link } from "gatsby";
import React from "react";
import { styles } from "./styles";
// @ts-ignore
import logo from "../../assets/lucy-in-the-sky-logo.png";
// @ts-ignore
import menuIcon from "../../assets/svg/menu.svg";
// @ts-ignore
import shoppingBag from "../../assets/svg/shopping-bag.svg";

const Header: React.FC = () => {
  return (
    <header css={styles.header}>
      <Link css={styles.logoLink} to="/">
        <img css={styles.logo} src={logo} />
      </Link>
      <svg css={[styles.icon, styles.bag]}>
        <use xlinkHref={`#${shoppingBag.id}`} />
      </svg>
      <svg css={[styles.icon, styles.menu]}>
        <use xlinkHref={`#${menuIcon.id}`} />
      </svg>
    </header>
  );
};

export default Header;
