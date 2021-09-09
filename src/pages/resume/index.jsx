import React from "react";
import styles from "./resume.module.scss";
import resume from "../../assets/Origho Precious Resume.docx";
import Experiences from "../../components/experiences";
import Education from "../../components/education";

const Resume = () => {
	return (
		<div className={styles.Resume}>
			<section className={styles.intro}>
				<header>
					<h1>Overview</h1>
					<a href={resume} download>
						Download Resume
					</a>
				</header>
				<p>
					Hello{" "}
					<span aria-label="img" role="img">
						👋
					</span>
					, My name is Precious Origho, a Sofware Developer based in
					Portharcourt, Rivers State, Nigeria. I enjoy creating the frontend of
					things that live on the internet as well as building servers they
					interact with, whether that be websites app, or anything in between. I
					keep learning new technologies to improve my skillset and build more
					pixel-perfect, and performant web apps. I'm currently interested in
					blockchain development and will be exploring it pretty soon.
				</p>
				<p style={{ marginTop: "1rem" }}>Technologies I work with currently:</p>
				<ul>
					<li>
						<i className="fas fa-play" /> <p>HTML & CSS(Sass)</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>TailwindCSS</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>Styled-Components</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>Javascript</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>Reactjs & Redux</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>Nextjs</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>TypeScript</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>Nodejs & Expressjs</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>MongoDB</p>
					</li>
				</ul>
			</section>
			<section className={styles.experiences}>
				<h1>Experiences</h1>
				<Experiences />
			</section>
			<section className={styles.education}>
				<h1>Education</h1>
				<Education />
			</section>
		</div>
	);
};

export default Resume;
