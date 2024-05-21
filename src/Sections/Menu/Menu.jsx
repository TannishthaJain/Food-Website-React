import React from 'react';
import {Tilt} from 'react-tilt';
import styles from './Menu.module.css';
import Plate1 from './Assets/Plate1.png';
import Plate2 from './Assets/Plate2.png';
import Plate3 from './Assets/Plate3.png';

const MenuItem = (props) => {
  return (
    <div className={styles.MenuItem}>
      <Tilt className={styles.MenuItemImageTilt} options={{ max: 25, scale: 1.05 }}>
        <div className={styles.MenuItemImage}><img src={props.image} alt={props.title} /></div>
      </Tilt>
      <div className={styles.MenuItemText}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

const Menu = () => {
  const menuItems = [
    {
      image: Plate1,
      title: "SPAGHETTI NAPOLETANA",
      text: "Basil, onion, garlic, extra virgin olive oil"
    },
    {
      image: Plate2,
      title: "Tonnarelli Cacio E Pepe",
      text: "Traditional Roman pasta; pecorino cheese, black pepper"
    },
    {
      image: Plate3,
      title: "Fusili Alla Nonna",
      text: "Broccoli, sausage, garlic & oil"
    }
  ];

  return (
    <div className={styles.MainCont} id='menu'>
      <div className={styles.Title}><h1>Menu</h1></div>
      <div className={styles.SubHeading}>
        <p>We use the freshest produce, cook it from scratch and turn our menu over with the seasons.</p>
      </div>
      <div className={styles.MenuItemCont}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} image={item.image} title={item.title} text={item.text} />
        ))}
      </div>
      <div className={styles.Title}>
        <button className={styles.Button}>SHOW MORE</button>
      </div>
    </div>
  );
}

export default Menu;
