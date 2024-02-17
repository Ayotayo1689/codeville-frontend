import React, { useState } from "react";
import {Box, chakra, Container, Flex, Heading, Text, useMediaQuery} from "@chakra-ui/react";
import HeaderOne from "../../HeaderOne";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/theme";
import consultingImg from "../../../../public/assets/dataAnalytics/analyticsConsulting/consultingImg.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { analyticsConsultingsidebar } from "./data";
import About from "./about";
import ConsultingServices from "./consultingServices";
// import HandpickedProject from "./handpickedProject";
import Summary from "./summary";
import ContactUs from "../../contactUs/index";
import appRoutes from "../../../utils/appRoutes";
import {AnalyticsConsultingCard, HeroHeader, WhyTantaMobile} from "./mobile";
import TantaTestimonial from "../../tantaTestimonials";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

function AnalyticsConsulting({ testimonials }) {
	const [activeLink, setActiveLink] = useState({});
	const [isMobile] = useMediaQuery("(max-width: 720px)");
	return (
		<>
			<Box>
				<HeaderOne heading={"data analytics"} title={"Analytics Consulting"} />
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "1rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
					{isMobile ? (<HeroHeader/>) : (
						<HeroContent>
							<HeroText>
								<h1>
						 			Looking for improved analytics services to meet your needs?
								</h1>
								<p>
									Data analytics implies building an infrastructure for data
									aggregation, analysis, and reporting. An experienced provider of
									data analytics services, ScienceSoft delivers on simple and
									complex needs with tailored business analytics solutions.
								</p>
								<CtaButtons>
									<Link
										href={{
											pathname: appRoutes.contactUs,
											query: {
												service: "services/data-analytics/analytics-consulting",
											},
										}}
										service="services/data-analytics/analytics-consulting"
										className="request-services"
									>
										{" "}
										<button className="request-services" style={{paddingLeft:"1rem", paddingRight:"1rem"}}>
											Request analytics Consulting services
										</button>
									</Link>
									<Link
										href={{
											pathname: appRoutes.services["cost-calculator"],
											query: { service: "dataAnalytics-7" },
										}}
									>
										{" "}
										<button className="get-quote">get a quote</button>
									</Link>
								</CtaButtons>
							</HeroText>
							<Image
								src={consultingImg}
								alt="hero image"
								width={500}
								height={400}
								className="hero-img"
							/>
						</HeroContent>
					)}
					<Box>
						<Flex gap={"2rem"} mt={"2rem"}>
							{/*====================Sticky sidebarSection====================================*/}
							<Flex
								flexDir="column"
								boxShadow={"lg"}
								flex={1}
								display={{ base: "none", lg: "flex" }}
								width={"5rem"}
								position={"sticky"}
								top={"10rem"}
								pb={"1rem"}
								borderBottom={"lg"}
								height={"18rem"}
								borderRadius={"8px"}
							>
								<Text
									as="h2"
									fontSize={"2xl"}
									fontWeight={"semibold"}
									mb={"1rem"}
									color={"white"}
									textAlign={"center"}
									paddingBlock={".5rem"}
									borderTopRadius={"lg"}
									background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
								>
									CONTENTS
								</Text>
								<Box px={"1rem"}>
									{analyticsConsultingsidebar.map((item, index) => {
										return (
											<Flex
												// justifyContent={"space-between"}
												alignItems={"center"}
												key={index}
												color={"#2A2A2A"}
												fontSize={"20px"}
												p={".3rem"}
											>
												<Link
													onClick={() => {
														setActiveLink({ [item?.id]: true });
													}}
													style={{
														color: activeLink[item?.id] ? "red" : "",
														fontSize: "20px",
														fontWeight: "400",
														cursor: "pointer",
														width: "100%",
														// lineHeight: "2.5rem",
													}}
													href={`#${item?.id}`}
												>
													{item?.title}
												</Link>

												<MdKeyboardArrowRight
													cursor={"pointer"}
													size={"2rem"}
												/>
											</Flex>
										);
									})}
								</Box>
							</Flex>
							<Box w={{ base: "100%", lg: "70%" }} id="about_us" scrollMarginTop={"150px"}>
								{isMobile ?( <WhyTantaMobile/> ) : (
									<>
										<Heading
											fontWeight="700"
											fontSize={{ base: "20px", lg: "30px" }}
											color=" #414141"
											lineHeight={{ lg: "140%", base: "150%" }}
											mb={"0.5rem"}
											ml={"2rem"}
										>
											Discover The Reliability Of&nbsp;
											<chakra.span
												color="#E9000E"
												fontSize={{ base: "20px", lg: "30px" }}
											>
												Tanta Innovative Limited
											</chakra.span>{" "}
											As An Analytics Consulter
										</Heading>
										<div
											style={{
												width: "6rem",
												height: "2px",
												background: "#D80808",
												marginBottom: " 2rem ",
												marginLeft: "2rem",
											}}
										></div>
										<About />

									</>
								)}
								{isMobile ? (<AnalyticsConsultingCard/>) : (
									<>
										<ConsultingServices/>
									</>
								)}
								<Box id="testimonials" scrollMarginTop={"150px"}>
									<TantaTestimonial testimonials={testimonials}/>
								</Box>
								{/*{isMobile ? (<OurHandPickedMobile/>) : (*/}
									<Box id={"similar_projects"} scrollMarginTop={"150px"} >
										<HandpickedProject />
									</Box>
								{/*)}*/}
								<Summary />
							</Box>
						</Flex>
					</Box>
				</Container>
				<ContactUs subtitle="We’re here to support" />
			</Box>
		</>
	);
}
export default AnalyticsConsulting;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;
	width: 100%;

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
		.heroImg {
			padding-top: 1rem;
		}
	}
`;

const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;

	@media (max-width: 820px) {
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
		font-size: 32px;
		font-weight: 700;
		margin-top: 0;
		padding-top: 0;
		color: rgba(64, 66, 67, 1);

		${breakpoints.lg} {
			font-size: 1.7rem;
			text-align: center;
			margin-top: 1rem;
		}

		${breakpoints.md} {
			font-size: 0.7rem;
			text-align: center;
			margin-top: 1rem;
		}

		@media (max-width: 820px) {
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
		margin-top: 2rem;
		color: #333;
		width: 645px;

		@media (max-width: 820px) {
			font-size: 1rem;
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
		border-radius: 10px;
		background: var(
			--tanta-gradient,
			linear-gradient(221deg, #ac2121 0%, #e9000e 100%)
		);
		box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
		border: none;
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		cursor: pointer;
		color: #fff;
		text-align: center;
		font-size: 16px;
		//font-family: Roboto;
		font-weight: 500;
		line-height: 24px;
		text-transform: uppercase;

		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		&:hover {
			opacity: 0.8;
		}
	}
	.get-quote {
		background-color: #fff;
		color: #263238;
		border: 2px solid #ac2121 ;
		padding: 0.5rem 2rem;
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		text-align: center;
		text-transform: uppercase;
		border-radius: 10px;
		transition: all 0.2s ease-in-out;
		min-width: 100px;
		box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
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
