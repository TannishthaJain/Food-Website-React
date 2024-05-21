import React from "react";
import styles from "./Subscribe.module.css";
import leaves from './Assets/Leaves.png'

const Subscribe = () => {
  return (
    <div className={styles.MainCont}>

    <img src={leaves}  className={styles.leaves}></img>
  
      <h1>Title Here</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
      </p>
      <div className={styles.SearchBar}>
        <input type="email" placeholder="Your Email" />
        <button type="submit">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Subscribe;