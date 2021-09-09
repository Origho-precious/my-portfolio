import React from "react";
import styles from "./projects.module.scss";
import Project from "../../components/project";
import { projects } from "../../projects";

const Projectspage = () => {
	return (
		<div className={styles.Projects}>
			<h1>Some side projects I've built</h1>
			<section>
				{projects.map((project) => (
					<Project
						key={project.id}
						title={project.title}
						repoUrl={project.repoUrl}
						siteUrl={project.siteUrl}
						stack={project.stack}
					>
						{project.description}
					</Project>
				))}
			</section>
		</div>
	);
};

export default Projectspage;
