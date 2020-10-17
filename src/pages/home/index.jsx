import React from 'react';
import styles from './home.module.scss';
import pic from '../../assets/dp.jpg';

const Homepage = () => {
  return (
    <div className={styles.Home}>
      <main className={styles.content}>
        <div className={styles.img}>
          <img src={pic} alt="Origho Precious" />
        </div>
        <h1>Hello, I'm Precious!</h1>
        <div className={styles.socialLinks}>
          <a
            href="https://www.twitter.com/precious_origho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.github.com/origho-precious"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="http://linkedin.com/in/orighoprecious"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Homepage;