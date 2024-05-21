import React from "react";
import styles from "./Offers.module.css";
import Plate1 from "./Assets/Plate1.png";
import Plate2 from "./Assets/Plate2.png";

const promoItem = [
  {
    image: Plate1,
    title: "Discount up to <br/> 50% All Excursions",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
    buttonText: "READ MORE",
  },
  {
    image: Plate2,
    title: "January's Promo: <br/> Buy 1 Get 1 Free!",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
    buttonText: "READ MORE",
  },
];

const Offers = () => {
  return (
    <div className={styles["promo-container"]} id="offers">
      {promoItem.map((promo, index) => (
        <div
          key={index}
          className={`${styles["promo-card"]} ${index % 2 === 0 ? styles["left-image"] : styles["right-image"]
            }`}
        >
          <img
            src={promo.image}
            alt={promo.title}
            className={styles["promo-image"]}
          />
          <div className={styles["promo-content"]}>
            <h1 dangerouslySetInnerHTML={{ __html: promo.title }}></h1>
            <p>{promo.description}</p>
            <button className={styles["promo-button"]}>
              {promo.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
