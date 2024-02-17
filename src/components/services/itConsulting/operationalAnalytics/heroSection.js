import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../../../../../styles/theme";
import appRoutes from "../../../../utils/appRoutes";

function HeroSection({ title, description, image, requestBtn, quoteBtn }) {
	return (
		<>
			<Box>
				<HeroContent>
					<HeroText>
						<h1>{title}</h1>
						<p>{description}</p>
						<CtaButtons>
							<Link
								href={{
									pathname: appRoutes.contactUs,
									query: {
										service: "services/it-consulting/it-strategy-consulting",
									},
								}}
								service="it_consulting/operational_analytics"
								className="request-services"
							>
								<button className="request-services">{requestBtn}</button>
							</Link>
							<Link
								href={{
									pathname: appRoutes.services["cost-calculator"],
									query: { service: "itConsulting-6" },
								}}
							>
								<button className="get-quote">{quoteBtn}</button>
							</Link>
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
			</Box>
		</>
	);
}
export default HeroSection;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;
	width: 100%;

	${breakpoints.lg} {
		.hero-img {
			width: 45%;
		}
	}

	@media (max-width: 700px) {
		flex-direction: column-reverse;
		gap: 0;

		.hero-img {
			min-width: 90%;
			height: 100%;
			position: relative;
			left: 1rem;
		}
		@media (min-width: 768px) and (max-width: 1023px) {
			width: 40%;
		}
	}
	}

`;

const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
	width: 100%;

	@media (max-width: 600px) {
		width: 95%;
		padding-left: 2.5%;
		padding-right: 2.5%;
		justify-content: center;
		align-items: center;
		margin-top: 1rem;
	}

	${breakpoints.md} {
	}

	h1 {
		position: relative;
		box-sizing: border-box;
		margin-left: 2rem;
		font-size: 40px;
		font-weight: 700;
		margin-top: 0;
		padding-top: 0;
		color: rgba(64, 66, 67, 1);

		${breakpoints.lg} {
			font-size: 1.7rem;
			text-align: center;
			margin-top: 1rem;
		}

		@media (min-width: 768px) and (max-width: 1023px) {
			font-size: 2rem;
			margin-top: 1rem;
			
		}

		@media (max-width: 600px) {
			font-size: 1.5rem;
			font-weight: 500;
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

	> p {
		font-size: 22px;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		color: #333;
		width: 645px;

		@media (max-width: 600px) {
			font-size: 11px;
			text-align: center;
			width: 100%;
			justify-content: center;
			display: flex;
		}
		@media (min-width: 768px) and (max-width: 1023px) {
			font-size: 16px;
			width: 20rem;
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
		flex-direction: row;
		gap: 1rem;
	}

	.request-services {
		border-radius: 8px;
		background: #fff;
		border: 1px solid rgba(233, 0, 14, 1);
		height: 47px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		width: 17.75rem;
		color: var(--primary-900, #e9000e);
		text-align: center;
		font-size: 24px;

		@media (max-width: 600px) {
			background: var(
				--tanta-gradient,
				linear-gradient(221deg, #ac2121 0%, #e9000e 100%)
			);
			color: white;
			text-transform: uppercase;
			font-size: 16px;
			width: 143px;
			height: 24px;
			border-radius: 4px;
		}

		@media (min-width: 768px) and (max-width: 1023px) {
			width: 14rem;
			font-size: 28px;
			text-transform: uppercase;

		}

		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		&:hover {
			opacity: 0.8;
		}
	}

	.get-quote {
		background: var(
			--tanta-gradient,
			linear-gradient(221deg, #ac2121 0%, #e9000e 100%)
		);
		color: #fff;
		border: none;
		padding: 0 36px;
		width: 11.063rem;
		height: 49px;
		font-size: 20px;
		display: flex;
		align-items: center;
		text-align: center;
		border-radius: 10px;
		transition: all 0.2s ease-in-out;
		min-width: 100px;

		${breakpoints.lg} {
			font-size: 0.7rem;
			padding: 0.5rem 1.5rem;
		}

		@media (max-width: 600px) {
			border: 1px solid rgba(233, 0, 14, 1);
			color: var(--primary-900, #e9000e);
			text-transform: uppercase;
			font-size: 10px;
			width: 143px;
			height: 24px;
			border-radius: 4px;
			background: transparent;
			display: flex;
			justify-content: center;
		}
		@media (min-width: 768px) and (max-width: 1023px) {
			width: 9rem;
			font-size: 12px;
			text-transform: uppercase;
			display: flex;
			justify-content: center;

		}

		&:hover {
			background-color: #b10000;
			color: #fff;
		}
	}
`;
