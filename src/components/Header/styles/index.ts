import { CSSObject } from "@emotion/core";
import { mq } from "../../../styles/global";

export const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    height: "100px",
    width: "100%",
    borderBottom: "1px solid black",
    padding: "0px 8px",
    [mq[0]]: {
      height: "120px",
    },
    [mq[1]]: {
      height: "150px",
    },
    [mq[4]]: {
      padding: 0
    },
  },
  bag: {
    paddingLeft: "8px",
    order: 1
  },
  logoLink: {
    order: 2,
  },
  menu: {
    paddingRight: "8px",
    order: 3
  },
  icon: {
    height: "25px",
    width: "25px",
    [mq[1]]: {
      height: "30px",
      width: "30px",
    }
  },
  iconContainer: {
    paddingRight: "8px",
    "& svg": {
      marginRight: "16px",
      "&:last-of-type": {
        marginRight: 0,
      }
    },
    [mq[1]]: {
      paddingRight: "16px",
    }
  },
  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    margin: "auto",
    height: "100px",
    [mq[0]]: {
      height: "120px",
    },
    [mq[1]]: {
      height: "150px",
    }
  } as CSSObject
}