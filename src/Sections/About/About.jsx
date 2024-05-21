import React from 'react'
import styles from './About.module.css'

const Cards = (props) => {
  return (
    <div className={styles.Cards}>
      <div className={styles.CardsText}>
        <h1 className="Title">Lorem Ipsum</h1>
        <p className="text">Lorem ipsum dolor sit amet, consecte
          sectetur adipisicing elit, tation omne
          ullamco laboris nisi ut aliqolore.</p>
      </div>
    </div>
  )

}

const About = () => {
  return (
    <div className={styles.MainCont}>
      <div className={styles.CardCont}>
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className={styles.SubHeading}>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis</h2><br></br>
        <h3>Lorem Ipsum</h3>
      </div>
    </div>

  )
}

export default About
