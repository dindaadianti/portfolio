import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
						Here are a few accomplishments from my work experience:
						</div>

						<div className="subtitle projects-subtitle">
						I have been involved in various projects for 1 year, including JATS, ERP, SMARTS, IDX Website, and Customer Care. I conducted testing for the INET project (CR43 and CR47), provided data feeds for SMARTS testing, documented test results, and participated in mock trading. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
