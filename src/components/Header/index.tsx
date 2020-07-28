import { Link } from "gatsby";
import React from "react";
import { styles } from "./styles";
// @ts-ignore
import logo from "../../assets/lucy-in-the-sky-logo.png";
// @ts-ignore
import menuIcon from "../../assets/svg/menu.svg";
// @ts-ignore
import shoppingBag from "../../assets/svg/shopping-bag.svg";
// @ts-ignore
import closeIcon from "../../assets/svg/close.svg";
import { HeaderProps } from "./interfaces/props";

const Header: React.FC<HeaderProps> = ({ menuActive, toggleMenu }) => {
  return (
    <header css={styles.header}>
      <Link css={styles.logoLink} to="/">
        <img css={styles.logo} src={logo} />
      </Link>
      <svg css={[styles.icon, styles.bag]}>
        <use xlinkHref={`#${shoppingBag.id}`} />
      </svg>
      <svg onClick={() => toggleMenu(!menuActive)} css={[styles.icon, styles.menu]}>
        <use xlinkHref={`#${!menuActive ? menuIcon.id : closeIcon.id}`} />
      </svg>
    </header>
  );
};

export default Header;
