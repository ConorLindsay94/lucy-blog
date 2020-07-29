import { mq } from "../global";

export const styles = {
  category: {
    position: "relative",
    [mq[2]]: {
      marginTop: "40px",
      "&:first-of-type": {
        margin: 0,
      },
    },
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "column",
  },
  categoryTitle: {
    position: "absolute",
    color: "white",
    textShadow: "0px 4px 5px rgba(0, 0, 0, 1)",
    top: "43%",
    bottom: "50%",
    width: "100%",
    margin: "auto",
    textAlign: "center",
  },
  image: {
    height: "100%",
  },
  imageContainer: {
    height: "300px",
    width: "100%",
  },
};
