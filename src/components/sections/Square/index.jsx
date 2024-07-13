import React from "react";

// styles
import styles from "./style.module.css";

export default function ({ ratio, children }) {
  return (
    <div className={styles.square}>
      <div className={styles["container"]}>{children}</div>
    </div>
  );
}
