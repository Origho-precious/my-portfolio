import React from "react";
import styles from "./projects.module.scss";
import Project from "../../components/project";

const Projectspage = () => {
	return (
		<div className={styles.Projects}>
			<h1>Some side projects I've built</h1>
			<section>
				<Project
					title="Dizcuzzion"
					repoUrl="https://github.com/Origho-precious/Realtime-Chat-App"
					siteUrl="https://dizcuzz.netlify.app/"
					stack={["React", "Redux", "Firebase"]}
				>
					A realtime chat app for muliple user, users are identified by their
					emails.
				</Project>
				<Project
					title="Iphone-store"
					repoUrl="https://github.com/Origho-precious/ecommerce-project"
					siteUrl="https://iphone-store.netlify.app"
					stack={["React", "Redux"]}
				>
					This is a mini ecommerce App, I built this app to get a better
					understanding of how Redux.
				</Project>
				<Project
					title="Covid19-stats-app"
					repoUrl="https://github.com/Origho-precious/Covid-19-Tracker"
					siteUrl="https://covid19-tracking-app.netlify.app/"
					stack={["HTML", "CSS", "Javascript"]}
				>
					A simple and beautiful app that shows Covid19 stats for a country
					searched for and also the world stat.
				</Project>
				<Project
					title="Mini Youtube Browser"
					repoUrl="https://github.com/Origho-precious/Mini-Youtube-Browser"
					siteUrl="https://mini-youtube-browser.netlify.app"
					stack={["React", "Youtube Api"]}
				>
					An app just like youtube with a search functionality. This app uses
					the youtube Api.
				</Project>
				<Project
					title="Windbnb - Airbnb clone"
					repoUrl="https://github.com/Origho-precious/windbnb"
					siteUrl="https://windbnb-airbnbclone.netlify.app"
					stack={["React", "Firebase"]}
				>
					A mini clone for airbnb for stays in Finland. The data are just random
					though.
				</Project>
				<Project
					title="Github Jobs"
					repoUrl="https://github.com/Origho-precious/Github-Jobs-"
					siteUrl="https://github-jobs-app.netlify.app"
					stack={["React", "Context Api", "Github Api"]}
				>
					An app that enables users to search for Job opening in different
					locations using the Github Api.
				</Project>
				<Project
					title="Mern shop"
					repoUrl="https://github.com/Origho-precious/mernshop"
					siteUrl="https://mern-shop111.herokuapp.com/"
					stack={[
						"React",
						"Redux",
						"Bootstrap",
						"Node",
						"Express",
						"MongoDB",
						"Heroku",
						"Cloudinary",
						"PayPal API",
					]}
				>
					An e-commerce app. it has 2 parts; admin and users part. Admin can add
					& update products, update users and orders. Uses PayPal API for
					payment (test payment details are in repo readme)
				</Project>
			</section>
		</div>
	);
};

export default Projectspage;
