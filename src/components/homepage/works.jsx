import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./idx.png"
								alt="idx"
								className="work-image"
							/>
							<div className="work-title">Indonesia Stock Exchange</div>
							<div className="work-subtitle">
								IT Quality Control
							</div>
							<div className="work-duration">Jan 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./bni.png"
								alt="bni"
								className="work-image"
							/>
							<div className="work-title">PT Bank Negara Indonesia</div>
							<div className="work-subtitle">
								Fullstack Developer
							</div>
							<div className="work-duration">Feb 2022 - Jul 2022</div>
						</div>

						<div className="work">
							<img
								src="./gowesmart.jpg"
								alt="gowesmart"
								className="work-image"
							/>
							<div className="work-title">Gowesmart</div>
							<div className="work-subtitle">
								Admin
							</div>
							<div className="work-duration">Apr 2020 - Jan 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
