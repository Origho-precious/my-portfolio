import React from "react";
import styles from "./resume.module.scss";
import resume from "../../assets/resume.pdf";
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
					, My name is Precious Origho, I'm a Software Developer and Technical
					writer who loves building web applications, learning and explaining
					Programming concepts. I’m also a core team member of Google’s
					Developer Student Club. I have 2+ years of experience working as a
					Software Developer. <br /> I'm a Blockchain Developer also. I write
					smart contracts with Solidity and have experience connecting frontend
					apps to smart contracts written in Ethereum, Solana and Near
					blockchains.
				</p>
				<p style={{ marginTop: "1rem" }}>Technologies I know:</p>
				<ul>
					<li>
						<i className="fas fa-play" /> <p>HTML & CSS(Sass)</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>Javascript</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>TypeScript</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>Reactjs (& Nextjs)</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>Nodejs & Expressjs</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>MongoDB</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>Solidity</p>
					</li>
					<li>
						<i className="fas fa-play" />
						<p>web3.js</p>
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
