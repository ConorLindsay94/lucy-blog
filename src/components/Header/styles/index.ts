import { CSSObject } from "@emotion/core";
import { mq } from "../../../styles/global";
import { colors } from "../../../styles/colors";

export const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "900px",
    margin: "0 auto",
    height: "100px",
    width: "100%",
    borderBottom: `2px solid ${colors.peach}`,
    [mq[0]]: {
      height: "120px",
    },
    [mq[1]]: {
      height: "150px",
    },
    [mq[3]]: {
      padding: 0
    },
  },
  bag: {
    marginLeft: "16px",
    order: 1,
    [mq[3]]: {
      marginLeft: "8px",
    },
  },
  logoLink: {
    order: 2,
  },
  menu: {
    cursor: "pointer",
    marginRight: "16px",
    order: 3,
    [mq[3]]: {
      marginRight: "8px",
    },
  },
  icon: {
    height: "25px",
    width: "25px",
    [mq[1]]: {
      height: "30px",
      width: "30px",
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