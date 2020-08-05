import React from "react";
import { styles } from "./styles";
import loader from "../../assets/stars.gif";

const LoadingState: React.FC = () => {
  return (
    <div css={styles.container}>
      <img src={loader} />
    </div>
  );
};

export default LoadingState;
