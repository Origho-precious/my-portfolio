import React from 'react';
import styles from './project.module.scss';

const Project = ({ title, repoUrl, siteUrl, stack, children }) => {
  return (
    <div className={styles.Project}>
      <header className={styles.flexbox}>
        <i className="fas fa-folder-open"></i>
        <div>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={siteUrl} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </header>
      <h2>{title}</h2>
      <p>
        {children}
      </p>
      <footer>
        {
          stack.map((tech, id) => {
            return <p key={id}>{tech}</p>
          })
        }
      </footer>
    </div>
  );
};

export default Project;