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
    [mq[1]]: {
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