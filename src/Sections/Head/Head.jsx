import React from 'react';
import styles from './Head.module.css';

// images
import largePlate from './Assets/LargePlate.png';
import smallPlate from './Assets/SmallPlate.png';
import leaves from './Assets/leaves.png';
import logo from './Assets/logo1.jpg';

const Head = () => {
  const buttonText = "READ MORE";

  return (
    <div className={styles.MainCont}>
      <div className={styles.largePlate}><img src={largePlate} alt="Large Plate" /></div>
      <div className={styles.smallPlate}><img src={smallPlate} alt="Small Plate" /></div>
      <div className={styles.leaves}><img src={leaves} alt="Leaves" /></div>
      <div className={styles.Content}>
        <div className={styles.Logo}><img src={logo} alt="Logo" /></div>
        <h1>Italian Food</h1>
        <h3>The soul of Italy</h3>
        <button className={styles.waveButton}>
          {buttonText.split('').map((letter, index) => (
            <span key={index} className={styles.waveLetter} style={{ '--index': index }}>
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </button>
        <p>A refreshing take on a classic Italian-American restaurant inspired by the 
        flavors of New York, the Luchini menu highlights handmade pasta, pizzas, salads,
         and timeless dishes served in a welcoming and lively space. </p>
      </div>
    </div>
  );
};

export default Head;
