import { mq } from "../../../styles/global";

export const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5rem",
    position: "absolute",
    bottom: 0,
    width: "100%",
    [mq[2]]: {
      height: "8rem",
    }
  },
  footerInfo: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "8px",
  },
  icon: {
    height: "17px",
    width: "17px",
  },
  link: {
    display: "flex",
    marginRight: "8px",
    "&:last-of-type": {
      marginRight: 0,
    },
  },
  name: {
    marginRight: "8px",
  },
};
