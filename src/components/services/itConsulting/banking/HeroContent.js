import Link from "next/link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../../styles/theme";
import appRoutes from "../../../../utils/appRoutes";

const HeroContentComp = ({
	title,
	description,
	image,
	redBtnText,
	normalBtnText,
	redBtnpathname,
	redBtnquery,
	redBtnservice,
							 normalBtnpathname,
							 normalBtnservice
}) => {
	return (
		<HeroContent>
			<HeroText>
				<h1>{title}</h1>
				<p>{description}</p>
				<CtaButtons>
					<Link
						href={{
							pathname: redBtnpathname,
							query: { service: redBtnquery },
						}}
						service={redBtnservice}
						className="request-services"
					>
						{" "}
						<button className="request-services">{redBtnText}</button>
					</Link>
					{normalBtnText && (
						<Link
							href={{
								pathname: normalBtnpathname,
								query: { service: normalBtnservice },
							}}
						>
							{" "}
							<button className="get-quote">{normalBtnText}</button>
						</Link>
					)}
				</CtaButtons>
			</HeroText>
			<Image
				src={image}
				alt="hero image"
				width={400}
				height={400}
				className="hero-img"
			/>
		</HeroContent>
	);
};

export default HeroContentComp;

const Wrapper = styled.div`
	margin: 0 2rem;

	@media (max-width: 820px) {
		.side-bar {
			display: none;
		}
	}

	${breakpoints.md} {
		.about-box {
			padding-left: 0;
		}
	}
`;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;

	width: 100%;
	border-bottom: 1px solid #e5e5e5;

	${breakpoints.lg} {
		.hero-img {
			width: 45%;
		}
	}
	@media (max-width: 820px) {
		flex-direction: column-reverse;
		gap: 0;

		.hero-img {
			width: 50%;
			height: 50%;
			margin: 0 auto;
			padding-top: 2rem;
		}
	}

	${breakpoints.md} {
		.hero-img {
			padding-top: 1rem;
		}
	}
`;

const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
	width: 50%;

	@media (max-width: 820px) {
		width: 100%;
	}

	${breakpoints.md} {
	}
	h1 {
		position: relative;
		box-sizing: border-box;
		//margin-left: 2rem;
		font-size: 2rem;
		font-weight: 700;
		margin-top: 0;
		padding-top: 0;
		color: #0c0c0c;

		${breakpoints.lg} {
			font-size: 1.7rem;
		}

		@media (max-width: 820px) {
			font-size: 1.5rem;
			font-weight: 500;
			text-align: center;
		}
	}
	p {
		font-size: 1rem;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		color: #636363;

		@media (max-width: 820px) {
			font-size: 0.9rem;
			text-align: center;
		}
	}
`;

const CtaButtons = styled.div`
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
		//box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3),
		//0 1px 3px 1px rgba(0, 0, 0, 0.15);
		border-radius: 8px;
		color: #fff;
		border: none;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.2rem;
		cursor: pointer;
		text-transform: uppercase;
		min-width: 190px;

		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		&:hover {
			opacity: 0.8;
		}
	}
	.get-quote {
		background-color: #fff;
		color: #b10000;
		border: 1px solid #b10000;
		padding: 0.5rem 2rem;
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		text-align: center;
		text-transform: uppercase;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
		min-width: 100px;
		${breakpoints.lg} {
			font-size: 0.7rem;
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
