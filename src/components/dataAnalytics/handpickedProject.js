import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import styled from "styled-components";
import { breakpoints } from "../../../styles/theme";
import appRoutes from "../../utils/appRoutes";
import axiosInstance from "@/utils/config";

function HandpickedProject({ cases, heading, title }) {
	const [data, setData] = useState([]);

	// Define the async function to fetch data from the API
	const fetchData = async () => {
		try {
			const response = await axiosInstance.get("/api/casestudy/");
			setData(response.data); // Update the state with the fetched data
		} catch (error) {
			// Handle any errors that occurred during the API call
			console.error("Error fetching data:", error);
		}
	};

	// useEffect hook with an empty dependency array (runs only once on component mount)
	useEffect(() => {
		fetchData(); // Call the async function to fetch data when the component mounts
	}, []);

	return (
		<>
			<Projects>
				<div className="projects">
					{title ? <h2>{title}</h2> : <h2>SIMILAR PROJECTS</h2>}
					{heading ? (
						<h3>{heading}</h3>
					) : (
						<h3>
							Our Handpicked <span>Projects</span> and <span>Services</span>
						</h3>
					)}
					<div></div>
				</div>
				<CasesContainer>
					{data.map((item, index) => {
						return (
							<CasesCard className="services-card" key={index}>
								<Image
									src={item?.project_logo}
									alt={item?.title}
									style={{
										width: "fit-content",
										height: "150px",
									}}
								/>
								<div>
									<h3>{item?.title}</h3>
									<h5>{item?.industry}</h5>
									<p>{item?.long_description.slice(0, 120).trim() + "..."}</p>
									<Link
										href={`${appRoutes.caseStudies}/${
											item.id
										}/${item?.slug?.replace(/_/g, "-")}`}
									>
										<button>
											View Case Study
											<BsArrowRightShort className="icon" />
										</button>
									</Link>
								</div>
							</CasesCard>
						);
					})}
				</CasesContainer>
			</Projects>
		</>
	);
}
export default HandpickedProject;

export const Projects = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 4rem;

	${breakpoints.lg} {
		margin-top: 4rem;
	}

	.projects {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;
		margin-bottom: 1rem;

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}

			@media (max-width: 850px) {
				font-size: 0.9rem;
			}
		}
		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;

			span {
				color: #e9000e;
			}

			${breakpoints.lg} {
				font-size: 1.5rem;
			}
			@media (min-width: 700px) and (max-width: 929px) {
				font-size: 1.2rem;
			}
			@media (max-width: 850px) {
				font-size: 1rem;
			}
			@media (max-width: 600px) {
				font-size: 1.2rem;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.2rem;
		}
	}
`;

export const CasesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
	margin-bottom: 2rem;

	${breakpoints.lg} {
		gap: 1rem;
	}

	${breakpoints.md} {
		gap: 2rem;
	}
`;

export const CasesCard = styled.div`
	border-radius: 8px;
	box-shadow: 0 1.55172px 1.10345px rgba(0, 0, 0, 0.3),
		0 1.10345px 1.31034px 1.10345px rgba(0, 0, 0, 0.15);
	transition: all 0.2s ease-in-out;
	margin-bottom: 1rem;

	img {
		border-radius: 10px 10px 0 0;
	}

	@media (min-width: 821px) and (max-width: 999px) {
		margin: 0.5rem auto;
	}

	@media (max-width: 700px) {
		margin: 0.5rem auto;
	}

	${breakpoints.sm} {
		width: 100%;
	}

	&:hover {
		transform: scale(1.01);
	}
	div {
		padding: 0 0.5rem;
		h3 {
			font-size: 1.1rem;
			font-weight: 600;
			color: #0c0c0c;
			padding-top: 10px;

			@media (max-width: 1200px) {
				font-size: 1rem;
			}

			${breakpoints.lg} {
				font-size: 1rem;
			}
		}
		h5 {
			text-transform: uppercase;
			color: #e9000e;
			font-weight: 300;
			font-size: 0.8rem;
			margin: 0.5rem 0;
		}
		p {
			font-size: 0.87rem;
			font-weight: 400;
			color: #303030;
			margin-bottom: 2rem;
		}
		button {
			background: #ffffff;
			border: none;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.3rem;
			color: #e9000e;
			padding-bottom: 1rem;
			font-size: 1rem;
			font-weight: 500;
			transition: all 0.2s ease-in-out;
			margin: 0 auto;

			.icon {
				color: #e9000e;
				font-size: 25px;
			}

			&:hover {
				opacity: 0.5;
			}
		}
	}
`;
