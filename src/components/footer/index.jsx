import React from 'react';
import styles from './footer.module.scss';

const Footer = (props) => {
    return (
      <div className={styles.footer}>
        <p>Built by Origho Precious, inspired by</p>
        <a
          href="https://lucybain.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucy Bain
        </a>{" "}
        &nbsp; and&nbsp;
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </a>
      </div>
    );
}

export default Footer;