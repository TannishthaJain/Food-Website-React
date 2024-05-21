import React from "react";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <div className={styles.MainCont} id="info">
      <div className={styles.Title}>
        <h1>Lorem Ipsum Dolor</h1>
      </div>
      <div className={styles.TextCont}>
        <div className={styles.SubHeading}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex quia voluptas sit aspernatur
          </p>
        </div>
        <div className={styles.SubHeading}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
      </div>
      <div className={styles.Title}>
        <button className={styles.Button}>MORE INFO</button>
      </div>
    </div>
  );
};

export default Info;
