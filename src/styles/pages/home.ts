import { mq } from "../global";

export const styles = {
  recentPostsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [mq[1]]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  recentPost: {
    width: "100%",
    marginTop: "32px",
    "&:first-of-type": {
      marginTop: 0,
    },
    [mq[1]]: {
      marginTop: 0,
      width: "30%",
    },
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    [mq[1]]: {
      fontSize: "32px",
    },
  }
}