import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container} id='contact'>
      <div className={styles.Cont}>
        <h2 className={styles.title}>Title Here</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consecte-tur adipiscing elit. Aliquam at dignis-sim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.
        </p>
        
        <div className={styles.socialIcons}>
          <i className={`fab fa-instagram ${styles.icon}`}></i>
          <i className={`fab fa-facebook ${styles.icon}`}></i>
          <i className={`fab fa-twitter ${styles.icon}`}></i>
          <i className={`fab fa-whatsapp ${styles.icon}`}></i>
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>About</h3>
        <ul className={styles.list}>
          <li>History</li>
          <li>Our Team</li>
          <li>Brand Guidelines</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Services</h3>
        <ul className={styles.list}>
          <li>How to Order</li>
          <li>Our Product</li>
          <li>Order Status</li>
          <li>Promo</li>
          <li>Payment Method</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Other</h3>
        <ul className={styles.list}>
          <li>Contact Us</li>
          <li>Help</li>
          <li>Privacy</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
