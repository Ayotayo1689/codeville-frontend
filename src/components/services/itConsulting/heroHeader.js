import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/theme";
import appRoutes from "../../../utils/appRoutes";

const HeroHeader = ({ title, text, imageUrl }) => {
	return (
		<Box>
			<HeroContent>
				<HeroText>
					<h1>{title}</h1>
					<p>{text}</p>
					<CtaButtons>
						<Link
							href={{
								pathname: appRoutes.contactUs,
								query: { service: "services/it-consulting" },
							}}
							service="services/it_consulting"
							className=""
						>
							<button className="get-quote ">Schedule a meeting</button>
						</Link>
						<Link
							href={{
								pathname: appRoutes.services["cost-calculator"],
								query: { service: "itConsulting-6" },
							}}
						>
							<button className="request-services">Get a quote</button>
						</Link>
					</CtaButtons>
				</HeroText>
				<Box width={{ base: "100%", md: "100%", lg: "50%" }}>
					<Image
						src={imageUrl}
						alt="hero image"
						width={"100%"}
						height={"100%"}
						className="hero-img"
					/>
				</Box>
			</HeroContent>
		</Box>
	);
};
export default HeroHeader;

export const HeroContent = styled.div`
	display: flex;
	gap: 1rem;
	width: 100%;
	border-bottom: 1px solid #e5e5e5;

	@media (max-width: 992px) {
		flex-direction: column-reverse;
		gap: 0;

		.hero-img {
			margin: 0 auto;
		}
	}
`;

export const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
	width: 50%;

	@media (max-width: 992px) {
		width: 100%;
		margin-top: 3rem;
	}

	${breakpoints.md} {
	}

	h1 {
		position: relative;
		box-sizing: border-box;
		margin-left: 2rem;
		font-size: 2.5rem;
		font-weight: 700;
		margin-top: 0;
		padding-top: 0;
		color: #0c0c0c;

		${breakpoints.lg} {
			font-size: 2rem;
		}

		@media (max-width: 820px) {
			font-size: 1.6rem;
			font-weight: 500;
			text-align: center;
		}

		&::before {
			position: absolute;
			content: "";
			top: -3px;
			left: -30px;
			height: 100%;
			width: 3px;
			background: linear-gradient(to bottom, red 30%, white, white);
		}

		&::after {
			position: absolute;
			content: "";
			top: -3px;
			left: -30px;
			height: 3px;
			width: 100%;
			background: linear-gradient(
				to right,
				red,
				white,
				white,
				white,
				white,
				white
			);
		}
	}

	p {
		font-size: 1.375rem;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		line-height: 170%;
		color: #636363;

		@media (max-width: 820px) {
			font-size: 1.1rem;
			text-align: center;
		}
	}
`;

export const CtaButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
	margin-bottom: 2rem;

	${breakpoints.sm} {
		flex-direction: column;
		gap: 1rem;
	}

	.request-services {
		background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
		border-radius: 8px;
		color: #fff;
		border: none;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		text-transform: uppercase;
		gap: 0.2rem;
		cursor: pointer;
		min-width: 190px;

		&:hover {
			opacity: 0.8;
		}
	}

	.get-quote {
		background-color: #fff;
		color: #e9000e;
		border: 1px solid #e9000e;
		padding: 0.5rem 2rem;
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		text-align: center;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
		min-width: 100px;
		text-transform: uppercase;

		${breakpoints.lg} {
			padding: 0.5rem 1.5rem;
		}

		${breakpoints.sm} {
			min-width: 190px;
			text-align: center;
			display: flex;
			justify-content: center;
		}

		&:hover {
			background-color: #b10000;
			color: #fff;
		}
	}
`;
