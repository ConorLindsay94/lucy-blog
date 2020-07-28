import React, { useState, useRef, useEffect } from "react";
import Helmet from "react-helmet";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import Header from "../Header";
import { Global } from "@emotion/core";
import { globalStyles } from "../../styles/global";
import { navigate } from "gatsby";

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
    <main>
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
            <span onClick={() => goTo("/")}>Home</span>
          </li>
          <li>
            <span onClick={() => goTo("/blog/")}>Blog</span>
          </li>
          <li>
            <span onClick={() => goTo("/shop/")}>Shop</span>
          </li>
        </ul>
      </div>
      <Header menuActive={menuActive} toggleMenu={toggleMenu} />
      <div css={globalStyles.childrenContainer}>{children}</div>
    </main>
  );
};

export default Layout;
