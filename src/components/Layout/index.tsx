import { Global } from "@emotion/core";
import React, { useState, useRef, useEffect } from "react";
import { navigate } from "gatsby";
import Helmet from "react-helmet";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import Header from "../Header";
import Footer from "../Footer";
import { globalStyles } from "../../styles/global";

const Layout: React.FC = ({ children }) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const targetElement = useRef(null);

  const toggleMenu = (val: boolean) => {
    setMenuActive(val);
    if (val) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
  };

  const goTo = (path: string) => {
    toggleMenu(false);
    navigate(path);
  };

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  useEffect(() => {
    if (!menuActive) {
      enableBodyScroll(targetElement);
    }
  }, [menuActive]);

  return (
    <div css={globalStyles.pageContainer}>
      <Global styles={globalStyles} />
      <Helmet>
        <title>Lucy in the Sky</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />
      </Helmet>
      <div
        ref={targetElement}
        css={[
          globalStyles.mobileMenu,
          menuActive ? globalStyles.mobileMenuActive : {},
        ]}
      >
        <ul>
          <li>
            <span css={globalStyles.navLink} onClick={() => goTo("/")}>
              Home
            </span>
          </li>
          <li>
            <span css={globalStyles.navLink} onClick={() => goTo("/blog/")}>
              Blog
            </span>
          </li>
          <li>
            <span css={globalStyles.navLink} onClick={() => goTo("/shop/")}>
              Shop
            </span>
          </li>
        </ul>
      </div>
      <Header menuActive={menuActive} toggleMenu={toggleMenu} />
      <main css={globalStyles.childrenContainer}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
