import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { CtaButtons, HeroContent } from "../heroHeader";
import { breakpoints } from "../../../../../styles/theme";
import appRoutes from "../../../../utils/appRoutes";

const HeroHeader = ({ title, subTitle, text, imageUrl }) => {
	return (
		<Box>
			<HeroContent>
				<HeroText>
					<h1>{title}</h1>
					<Text
						fontSize={"1.12rem"}
						fontWeight={600}
						width={{ md: "100%", lg: "60%" }}
						display={{lg:"block", base:"none"}}
					>
						{subTitle}
					</Text>
					<Text fontSize={"1.12rem"} width={{ md: "100%", lg: "90%" }} textAlign={{base: 'center', md: 'left'}}>
						{text}
					</Text>

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
								query: { service: "it-consulting-6" },
							}}
						>
							<button className="request-services">Get a quote</button>
						</Link>
					</CtaButtons>
				</HeroText>
				<Box
					width={{ base: "100%", md: "100%", lg: "50%" }}
					mt={{ base: "0", md: "0", lg: "4rem" }}
				>
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

export const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
	width: 75%;

	@media (max-width: 992px) {
		width: 100%;
		margin-top: 3rem;
	}

	${breakpoints.md} {
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
		color: #0c0c0c;

		@media (max-width: 820px) {
			font-size: 1.6rem;
			font-weight: 500;
			text-align: center;
		}
	}
`;
