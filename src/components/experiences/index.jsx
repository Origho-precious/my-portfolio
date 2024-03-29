import React, { Component } from "react";
import styles from "./experiences.module.scss";

class Experiences extends Component {
	state = {
		show: 0,
	};

	renderContent = () => {
		const { show } = this.state;
		if (show === 0) {
			return (
				<div className={styles.experience}>
					<header>
						<h3>
							Frontend developer <span>@IjatTechnologies</span>
						</h3>
						<p>August 2019 - November 2020</p>
					</header>
					<div className={styles.text}>
						<ul>
							<li>
								<i className="fas fa-play" />
								<p>
									Writing modern, and performant code for client projects and
									company projects
								</p>
							</li>
							<li>
								<i className="fas fa-play" />
								<p>
									Working with varieties of Languages, libraries, platforms and
									frameworks e.g HTML, CSS(Sass), Bootstrap 4, Javascript,
									Reactjs, Redux etc
								</p>
							</li>
						</ul>
					</div>
				</div>
			);
		} else if (show === 1) {
			return (
				<div className={styles.experience}>
					<header>
						<h3>
							Frontend Developer - Contract
							<span>
								<a href="https://www.thedogecapital.com" trget="_blank">
									thedogecapital
								</a>
							</span>
						</h3>
						<p>November 2021 - Present</p>
					</header>
					<div className={styles.text}>
						<ul>
							<li>
								<i className="fas fa-play" />
								<p>
									I'm working with thedogecapital to revamp their web app. On
									this project, I'm working with Next.js, TypeScript and Redux.
									I'm also interacting with a Solana smart contract.
								</p>
							</li>
						</ul>
					</div>
				</div>
			);
		} else if (show === 2) {
			return (
				<div className={styles.experience}>
					<header>
						<h3>
							Software developer - Part-time<span>@Useparallel</span>
						</h3>
						<p>December 2020 - Present</p>
					</header>
					<div className={styles.text}>
						<ul>
							<li>
								<i className="fas fa-play" />
								<p>
									I work at{" "}
									<a href="https://beta.useparallel.com" trget="_blank">
										Parallel
									</a>{" "}
									as a Software developer. Here we work with: Nextjs,
									Typescript, Redux, Tailwindcss and styled-components on the
									frontend.
								</p>
							</li>
							<li>
								<i className="fas fa-play" />
								<p>On the backend, we use Nodejs and loopbackjs</p>
							</li>
						</ul>
					</div>
				</div>
			);
		}
	};

	render() {
		const { show } = this.state;

		return (
			<div className={styles.Experience}>
				<nav className={styles.sidebar}>
					<div className={styles.line} />
					<div>
						<p
							className={show === 0 ? styles.active : null}
							onClick={() => this.setState({ show: 0 })}
						>
							Ijat
						</p>
						<p
							className={show === 1 ? styles.active : null}
							onClick={() => this.setState({ show: 1 })}
						>
							Freelance/Contracting
						</p>
						<p
							className={show === 2 ? styles.active : null}
							onClick={() => this.setState({ show: 2 })}
						>
							Parallel
						</p>
					</div>
				</nav>
				<div className={styles.content}>{this.renderContent()}</div>
			</div>
		);
	}
}

export default Experiences;
