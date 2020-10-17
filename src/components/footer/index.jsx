import React from 'react';
import styles from './footer.module.scss';

const Footer = (props) => {
    return (
      <div className={styles.footer}>
        <p>Inspired by</p>
        <a
          href="https://lucybain.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucy Bain
        </a>
      </div>
    );
}

export default Footer;