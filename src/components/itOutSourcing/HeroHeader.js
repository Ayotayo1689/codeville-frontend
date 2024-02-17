import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import {
	CtaButtons,
	HeroContent,
	HeroText,
} from "../services/itConsulting/heroHeader";
import appRoutes from "../../utils/appRoutes";

const HeroHeader = ({ title, text, imageUrl, serviceTitle }) => {
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
							service="services/it-consulting"
							className=""
						>
							<button className="request-services">{serviceTitle}</button>
						</Link>
						<Link
							href={{
								pathname: appRoutes.services["cost-calculator"],
								query: { service: "itConsulting-6" },
							}}
						>
							<button className="get-quote">Get a quote</button>
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
