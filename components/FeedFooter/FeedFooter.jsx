import React from "react";
import Logo from "../Logo/Logo";
import styles from "./FeedFooter.module.css";

function FeedFooter() {
  return (
    <div className={styles.container}>
      <Logo width={"5rem"} height={"4rem"} />
      <p className={styles.copyright}>© All Rights Reserved.</p>
    </div>
  );
}

export default FeedFooter;
