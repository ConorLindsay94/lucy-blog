import React from "react";
import { styles } from "./styles";
import twitterIcon from "../../assets/svg/twitter.svg";
import facebookIcon from "../../assets/svg/facebook.svg";
import instagramIcon from "../../assets/svg/instagram.svg";

const Footer: React.FC = () => {
  return (
    <footer css={styles.footer}>
      <div css={styles.footerInfo}>
        <span css={styles.name}>Lucy Carberry</span>
        <span>|</span>
        <span css={styles.iconContainer}>
          <a css={styles.link} target="_blank" href="https://twitter.com" rel="noreferrer">
            <svg css={styles.icon}>
              <use xlinkHref={`#${twitterIcon.id}`} />
            </svg>
          </a>
          <a css={styles.link} target="_blank" href="https://facebook.com" rel="noreferrer">
            <svg css={styles.icon}>
              <use xlinkHref={`#${facebookIcon.id}`} />
            </svg>
          </a>{" "}
          <a css={styles.link} target="_blank" href="https://instagram.com" rel="noreferrer">
            <svg css={styles.icon}>
              <use xlinkHref={`#${instagramIcon.id}`} />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
