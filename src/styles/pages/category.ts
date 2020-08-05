import { mq, betweenMq } from "../global";

export const styles = {
  imageContainer: {
    position: "relative",
  },
  productsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  product: {
    width: "47.5%",
    marginRight: "2.5%",
    marginBottom: "32px",
    [betweenMq(0, 576)]: {
      "&:nth-child(2n)": {
        marginRight: 0,
      },
    },
    [mq[0]]: {
      width: "31.6%",
      "&:nth-child(3n)": {
        marginRight: 0,
      },
    },
  },
  productInfo: {
    textAlign: "center",
    padding: "8px 0px",
    "& h3": {
      margin: 0,
      fontSize: "16px",
      [mq[2]]: {
        fontSize: "20px",
      },
    }
  },
  previewImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
    width: "100%",
    overflow: "hidden",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    [mq[1]]: {
      height: "200px",
    },
    [mq[2]]: {
      height: "250px",
    },
  }
}