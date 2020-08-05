import { CSSObject } from "@emotion/core";
import { colors } from "./colors";

const breakpoints = [576, 768, 992, 1200];

export type BreakpointValues = 0 | 576 | 768 | 992 | 1200;

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const betweenMq = (first: BreakpointValues, second: BreakpointValues) => {
  return `@media (min-width:${first}px) and (max-width:${second}px)`;
}

export const globalStyles = {
  "*, *:before, *:after": {
    boxSizing: "border-box",
  } as CSSObject,
  "h1": {
    fontSize: "40px",
  },
  "h2": {
    fontSize: "32px",
  },
  "h3": {
    fontSize: "24px",
  },
  "h1, h2, h3": {
    fontFamily: "Poiret One",
  },
  "a": {
    textDecoration: "none",
    color: colors.black,
  },
  body: {
    margin: 0,
    fontFamily: "Open Sans",
  },
  container: {
    padding: "0px 16px",
    [mq[3]]: {
      padding: 0,
    }
  },
  childrenContainer: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  heroImage: {
    height: "61.8vh",
    maxHeight: "400px",
  },
  pageHeader: {
    textAlign: "center",
    fontSize: "32px",
  },
  mobileMenu: {
    position: "absolute",
    maxWidth: "900px",
    left: 0,
    right: 0,
    margin: "auto",
    width: "100%",
    height: 0,
    backgroundColor: colors.primary,
    top: "100px",
    zIndex: 20,
    transition: "height .2s ease",
    overflow: "hidden",
    [mq[0]]: {
      top: "120px",
    },
    [mq[1]]: {
      top: "150px",
    },
    "& ul": {
      listStyle: "none",
      fontSize: "24px",
      margin: 0,
      padding: 0,
      marginTop: "120px",
      [mq[1]]: {
        fontSize: "32px",
      },
      "& li": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.black,
        fontFamily: "Poiret One",
        letterSpacing: "2px",
        marginTop: "16px",
        "&:first-of-type": {
          marginTop: 0,
        },
        "& span": {
          letterSpacing: "1px",
        },
        "& svg": {
          fill: colors.black,
          height: "35px",
          width: "35px",
        },
      },
    },
  } as CSSObject,
  mobileMenuActive: {
    height: "100vh",
  },
  navLink: {
    cursor: "pointer",
  }
};
