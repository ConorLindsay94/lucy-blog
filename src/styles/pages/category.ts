import { mq } from "../global";

export const styles = {
  productsContainer: {
    display: "flex",
    flexDirection: "column",
    [mq[2]]: {
      flexDirection: "row",
    },
  },
  product: {
    width: "100%",
    [mq[0]]: {
      width: "50%",
    },
    [mq[2]]: {
      width: "30%",
    },
  },
  productInfo: {
    textAlign: "center",
    padding: "8px 0px",
    "& h3": {
      margin: 0,
    }
  },
  previewImage: {
    width: "100%",
    "& img": {
      width: "100%",
    }
  }
}