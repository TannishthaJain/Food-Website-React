import React from "react";
import styles from "./Pizza.module.css";
import pizza from "./Assets/pizza.png";

const Pizza = () => {
  return (
    <div className={styles.MainCont}>
      <div className={styles.pizza}>
        {" "}
        <img src={pizza}></img>{" "}
      </div>

      <div className={styles.Content}>
        <div className={styles.Title}>
          <h1>Lorem Ipsum Dolor Sit Amet</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>
        <hr className={styles.LineBreak} />
      </div>
    </div>
  );
};

export default Pizza;
