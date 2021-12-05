import React from 'react';
import styles from './project.module.scss';

const Project = ({ title, repoUrl, siteUrl, stack, children }) => {
  return (
		<div className={styles.Project}>
			<header className={styles.flexbox}>
				{repoUrl ? (
					<a href={repoUrl} target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github"></i>
					</a>
				) : <div />}
				<a href={siteUrl} target="_blank" rel="noopener noreferrer">
					<i className="fas fa-external-link-alt"></i>
				</a>
			</header>
			<div className={styles.content}>
				<h2>{title}</h2>
				<p>{children}</p>
			</div>
			<footer>
				{stack.map((tech, id) => {
					return <p key={id}>{tech}</p>;
				})}
			</footer>
		</div>
	);
};

export default Project;