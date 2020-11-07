import React from 'react';
import styles from './resources.module.scss';

const Resources = () => {
    return (
      <div className={styles.Resources}>
        <h1>Resources I've Used</h1>
        <ul className={styles.list}>
          <li>
            <a
              href="https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Complete 2020 Web Development Bootcamp
            </a>
            <small>Created by Dr Angela Yu</small>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/modern-html-css-from-the-beginning/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Modern HTML & CSS From The Beginning (Including Sass)
            </a>
            <small>Created by Brad Traversy</small>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/modern-javascript-from-the-beginning/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Modern Javascript from the Beginning
            </a>
            <small>Created by Brad Traversy</small>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Javascript - The Complete Guide 2020 (Beginner + Advanced)
            </a>
            <small>Created by Maximilian Schwarzmuller</small>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              20 Web Projects With Vanilla Javascript
            </a>
            <small>Created by Maximilian Schwarzmuller</small>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React - The Complete Guide (incl Hooks, React Router, Redux)
            </a>
            <small>Created by Maximilian Schwarzmuller</small>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/react-redux/learn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Modern React and Redux - Stephen Grider
            </a>
            <small>Created by Stephen Grider</small>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)
            </a>
            <small>Created by Andrei Neagoie & Yihua Zhang</small>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/react-redux-tutorial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advanced React and Redux
            </a>
            <small>Created by Stephen Grider</small>
          </li>
        </ul>
      </div>
    );
}

export default Resources;