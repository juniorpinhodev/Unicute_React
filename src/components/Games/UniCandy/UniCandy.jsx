import React from "react";
import styles from "./UniCandy.module.css";

const UniCandy = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>UniCandy</h1>
    <div className={styles.message}>
      <p>Aguarde!</p>
      <span className={styles.comingSoon}>Em breve...</span>
    </div>
  </div>
);

export default UniCandy;
