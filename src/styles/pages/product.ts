import { mq } from "../global";

export const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    [mq[1]]: {
      marginTop: "16px",
      flexDirection: "row",
      justifyContent: "space-between",
    }
  },
  container: {
    width: "100%",
    [mq[1]]: {
      "&:first-of-type": {
        width: "60%",
      },
      "&:last-of-type": {
        width: "35%",
      },
    }
  },
  header: {
    textAlign: "center",
    [mq[1]]: {
      textAlign: "left",
    }
  },
  description: {
    textAlign: "center",
    [mq[1]]: {
      textAlign: "left",
    }
  },
  imageContainer: {
    height: "350px",
    [mq[0]]: {
      height: "400px",
    },
    [mq[1]]: {
      height: "500px",
    }
  },
  image: {
    height: "100%",
  }
}