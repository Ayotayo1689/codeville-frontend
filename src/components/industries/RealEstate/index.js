import React, { useState } from "react";
import {
	Box, Button,
	Container,
	Flex, List, ListIcon, ListItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { about, realEstateServices, sideBarData } from "./data";

import LogoMarquee from "../../logoMarquee";
import HeroImg from "../../../../public/assets/realEstate/heroimg.svg";
import HeaderOne from "../../HeaderOne";
import LandingLayout from "../../../layouts/landing.layout";
import { breakpoints} from "../../../../styles/theme";
import { IoIosCheckmark } from "react-icons/io";
import {
	caseStudies,
} from "../../services/itConsulting/data";
import { BsArrowRightShort } from "react-icons/bs";
import ServicesCards from "./servicesCard";
import TechSackGrid from "../../techStackGrid/techSackGrid";
import TantaTestimonial from "../../tantaTestimonials";
import {analyticsConsultingSummary} from "../../dataAnalytics/analyticsConsulting/data";
import appRoutes from "../../../utils/appRoutes";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

function RealEstateHousing({ stacks, testimonials }) {
	const [activeLink, setActiveLink] = useState({});


	return (
		<>
			<RealEstate>
				<HeaderOne
					heading={"INDUSTRIES"}
					title={"Explore our IT Services for Real Estate Industry"}
				/>
				<Container maxW={"7xl"} p={{ base: "0rem", lg: "4rem" }}>
					<Wrapper>
						<HeroContent>
							<HeroText>
								<h1>Revolutionizing Real Estate Technology</h1>
								<p>
									Tanta Innovative offers cutting-edge real estate technology
									solutions to revolutionize the way realtors do business,
									enabling them to streamline their operations, enhance customer
									experiences, and gain a competitive edge in the market.
								</p>
								<CtaButtons>
									<Link
										href={{
											pathname: "/contact-us",
											query: {
												service: "services/industries/real-estate-and-housing",
											},
										}}
									>
										<button className="request-services">
											Request Our Services
										</button>
									</Link>
									<Link href={{
										pathname: appRoutes.services["cost-calculator"],
										query: {service: "retail-11"},
									}}>
										<button className="get-quote">get a quote</button>
									</Link>
								</CtaButtons>
							</HeroText>
							<Image
								src={HeroImg}
								alt="hero image"
								style={{ width: "100%", height: "100%" }}
								className="hero-img"
							/>
						</HeroContent>

						<Box mb={"2rem"} mt={"4rem"}>
							<Flex gap={"2rem"} justify={"center"}>
								{/* ================Fixed Sidebar Here================ */}
								<Flex
									flexDir="column"
									boxShadow={"lg"}
									height="400px"
									minW={"300px"}
									position="sticky"
									top="10rem"
									pb={"1rem"}
									borderBottom={"lg"}
									width={{ base: "100%", lg: "25%" }}
									className="side-bar"
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
										background={
											"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
										}
									>
										REAL ESTATE
									</Text>
									<Box px={"1rem"}>
										{sideBarData.map((item, index) => {
											return (
												<Flex
													justifyContent={"space-between"}
													alignItems={"center"}
													key={index}
													py={".3rem"}
												>
													<Link
														onClick={() => {
															setActiveLink({ [item.goto]: true });
														}}
														style={{
															color: activeLink[item.goto] ? "red" : "",
															fontSize: "17px",
															fontWeight: "400",
															cursor: "pointer",
															width: "100%",
														}}
														href={item.goto}
													>
														{item.title}
													</Link>

													<MdKeyboardArrowRight
														style={{ marginLeft: "47px" }}
														cursor={"pointer"}
														size={"2rem"}
													/>
												</Flex>
											);
										})}
									</Box>
								</Flex>

								<Box width={{ base: "100%", lg: "65%" }}>
									{/* ================TANTAIN HEALTHCARE SERVICES SECTION================ */}
									<Box id="about" scrollMarginTop={"150px"}>
										<About>
											<div className="why">
												<h3>
													Unboxing enterprise opportunities with{" "}
													<span>Real Estate</span> IT solutions
												</h3>
												<div></div>
												<p>
													Tanta Innovative provides advanced real estate IT
													solutions to meet the growing demand for vertical
													living and smart homes in today's modern lifestyle.
													From smart towns to smart homes, our robust technology
													solutions cater to the evolving needs of the real
													estate industry, providing enhanced customer
													experiences and streamlined operations for our
													clients.
												</p>
											</div>
											<AboutContainer>
												{about.map((item) => {
													return (
														<AboutCard key={item.index}>
															<Image
																src={item.img}
																alt={item.title}
																className="about-img"
															/>
															<h3>{item.title}</h3>
														</AboutCard>
													);
												})}
											</AboutContainer>
										</About>
									</Box>

									{/* ================OUR CUSTOMERS' SECTION================ */}
									<Box id="partners" scrollMarginTop={"150px"}>
										<OurExperience>
											<div className="experience">
												<h3>
													What Makes <span>Tanta Innovative</span> a Reliable
													Partner
												</h3>
												<div></div>
												<p>
													Our belief is that with our technical expertise and IT
													Services for Real-Estate Industry, combined with your
													innovative vision, we can create tech systems that
													will help you scale up your business by making life
													easier for your audience.
												</p>
											</div>
											<LogoMarquee colored={true} />
										</OurExperience>
									</Box>

									{/* ================OUR EXPERTISE  SECTION================ */}
									<Box id="expertise" scrollMarginTop={"150px"}>
										<OurExpertise>
											<div className="expertise">
												<h2>our tech expertise</h2>
												<h3>
													Our <span>Capabilities</span> and Technological{" "}
													<span>Expertise</span>
												</h3>
												<div></div>
												<p>
													Our belief is that with our technical expertise and IT
													Services for Real-Estate Industry, combined with your
													innovative vision, we can create tech systems that
													will help you scale up your business by making life
													easier for your audience.
												</p>
											</div>
											<Box
												my={"1.5rem"}
												id="capacity"
												scrollMarginTop={"150px"}
											>
												<TechSackGrid stacks={stacks} />
											</Box>
										</OurExpertise>
									</Box>

									{/* ================OUR SERVICES  SECTION================ */}

									<Box id="services" scrollMarginTop={"60px"}>
										<Services>
											<div className="services">
												<h2>Our services</h2>
												<h3>
													Our IT Services for <span>Real Estate Industry</span>{" "}
												</h3>
												<div></div>
												<p>
													Unlock your business's potential with our innovative
													IT consulting services. Our team of experts delivers
													personalized solutions to help you achieve your goals.
													We offer tailored solutions to help you achieve your
													goals and stay ahead of the competition.
												</p>
											</div>
											<CardContainer>
												{realEstateServices.map((item, index) => {
													return (
														<ServicesCards
															key={index}
															title={item?.title}
															img={item?.img}
															details={item?.details}
														/>
													);
												})}
											</CardContainer>
										</Services>
									</Box>

									{/* ================REASONS TO WORK WITH US SECTION================ */}
									<Box
										id="customers"
										scrollMarginTop={"150px"}
										sx={{ margin: "2rem 0" }}
									>
										<TantaTestimonial testimonials={testimonials} />
									</Box>

									{/* ================CONSULTING IT SERVICES'  SECTION================ */}
									<Box id="projects" scrollMarginTop={"150px"}>
										<HandpickedProject title={"consulting projects"} heading={"Our Selected IT Consulting Services Projects"}/>
									</Box>

									{/* SUMMARY SECTION */}
									<Box id="summary" scrollMarginTop={"150px"}>
										<Box my={"1.5rem"}>
											{analyticsConsultingSummary.map((item, index) => (
												<Box
													mb="4.5rem"
													width={"100%"}
													key={index}
													id={item.id}
													scrollMarginTop={"150px"}
												>
													<Text
														fontWeight="400"
														fontSize={{ base: "14px", lg: "18px" }}
														lineHeight="20px"
														color={"#636363"}
														textTransform={"uppercase"}
													>
														summary
													</Text>
													<Text
														fontWeight="700"
														fontSize={{ base: "20px", lg: "28px" }}
														lineHeight="70px"
														textTransform={"capitalize"}
													>
														Take a Moment to Know{" "}
														<span style={{ color: "#E9000E" }}>Tanta Innovative</span>{" "}
														Better
													</Text>
													<div
														style={{
															width: "130px",
															height: "4px",
															background: "#ff0000",
														}}
													></div>
													<Tabs size="md" variant="enclosed" mt={"2rem"}>
														<TabList borderColor={"#B60E09"}>
															{item.cards.map((item, index) => (
																<Tab
																	padding={{ base: "8px 18px", lg: "16px 24px" }}
																	mr={{ base: "0px", lg: "4rem" }}
																	_selected={{
																		color: "white",
																		background: "#AE0000",
																		boxShadow: "0px 2px 4px rgba(165, 163, 174, 0.3)",
																		borderRadius: "10px 10px 0px 0px",
																	}}
																	key={index}
																>
																	{item.title}
																</Tab>
															))}
														</TabList>
														<TabPanels>
															{item.cards.map((item, index) => (
																<TabPanel key={index}>
																	<Text
																		fontWeight="700"
																		fontSize={{ base: "16px", lg: "18px" }}
																		lineHeight="170%"
																		my={"1rem"}
																	>
																		{item.title}
																	</Text>
																	<Text
																		fontWeight="400"
																		fontSize={{ base: "16px", lg: "18px" }}
																		lineHeight="170%"
																	>
																		{item.text}
																	</Text>

																	<List spacing={2}   mt={"1rem"}>
																		{item.items && Array.isArray(item.items) && item.items.map((item, index) => {
																			return (
																				<ListItem pl={4}
																						  key={"index"}
																				>
																					<Flex flexGrow={"1"} >
																						<ListIcon as={IoIosCheckmark} color='green' fontSize={"1.5rem"} mt={"0.2rem"}/>
																						<Text>
																							{item}
																						</Text>
																					</Flex>
																				</ListItem>
																			);
																		})}
																	</List>

																	<Link
																		href={{
																			pathname: appRoutes.contactUs,
																			query: { service: "industries/real-estate-and-housing" },
																		}}
																		service="cyber_security"
																		className="request-services"
																	>
																		<Button
																			fontWeight="500"
																			fontSize={{ base: "14px", lg: "16px" }}
																			mt={"2rem"}
																			lineHeight="24px"
																			bg={"#CE0000"}
																			color={"#FFFFFF"}
																			variant="solid"
																		>
																			Get Started
																		</Button>
																	</Link>
																</TabPanel>
															))}
														</TabPanels>
													</Tabs>
												</Box>
											))}
										</Box>
									</Box>
									{/*============End================*/}
								</Box>
							</Flex>
						</Box>
					</Wrapper>
				</Container>
			</RealEstate>
		</>
	);
}

RealEstateHousing.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default RealEstateHousing;

const RealEstate = styled.div`
	margin-top: 5rem;
`;

const Wrapper = styled.div`
	margin: 0 2rem;

	${breakpoints.md} {
		.about-box {
			padding-left: 0;
		}
	}

	@media (max-width: 1000px) {
		.side-bar {
			display: none;
		}
	}
`;

// HERO SECTION
const HeroContent = styled.div`
	display: flex;
	gap: 2rem;
	justify-content: space-between;
	border-bottom: 1px solid #e5e5e5;

	@media (max-width: 820px) {
		flex-direction: column-reverse;
		gap: 0;

		.hero-img {
			width: 50%;
			height: 50%;
			margin: -2rem auto 1.5rem auto;

			${breakpoints.lg} {
				width: 45%;
			}

			@media (max-width: 820px) {
				width: 100%;
			}

			${breakpoints.md} {
				width: 100%;
				height: 100%;
				padding-top: 0;
			}
		}
	}
`;

const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	@media (max-width: 820px) {
		width: 100%;
	}

	h1 {
		box-sizing: border-box;
		padding-left: 2rem;
		font-size: 2.2rem;
		font-weight: 700;
		color: #0c0c0c;
		border-left: 2px solid #e9000e;

		${breakpoints.lg} {
			font-size: 1.7rem;
		}

		@media (max-width: 820px) {
			font-size: 1.5rem;
			font-weight: 500;
		}

		${breakpoints.sm} {
			margin-top: 1.5rem;
		}
	}

	p {
		font-size: 1.2rem;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		color: #636363;

		@media (max-width: 820px) {
			font-size: 0.9rem;
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
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
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
		min-width: 120px;

		${breakpoints.lg} {
			font-size: 0.7rem;
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

// ABOUT SECTION
const About = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 0;

	.why {
		margin-bottom: -0.5rem;

		h3 {
			font-size: 30px;
			font-weight: 600;
			color: #414141;
			line-height: 170%;

			span {
				color: #e9000e;
			}

			${breakpoints.lg} {
				font-size: 1.2rem;
				width: 100%;
			}

			@media (max-width: 768px) {
				font-size: 1rem;
			}

			${breakpoints.md} {
				font-size: 1.2rem;
			}

			${breakpoints.sm} {
				font-size: 1rem;
			}
		}

		div {
			width: 50px;
			height: 3px;
			background-color: #e9000e;
			margin: 0.5rem 0;
		}
	}

	.about {
		display: flex;
		gap: 0.5rem;

		p {
			${breakpoints.lg} {
				font-size: 1rem;
			}

			${breakpoints.md} {
				font-size: 0.9rem;
			}

			${breakpoints.sm} {
				font-size: 0.8rem;
			}
		}

		svg {
			color: #e9000e;
			padding-top: 0.5rem;
		}
	}
`;

const AboutContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 3rem;
	flex-wrap: wrap;
	margin: 2rem 0;
	width: 100%;

	${breakpoints.lg} {
		gap: 1rem;
	}

	${breakpoints.sm} {
		justify-content: space-between;
		margin-bottom: 0;
	}
`;

const AboutCard = styled.div`
	background: #ffffff;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
	}

	${breakpoints.sm} {
		width: 100%;
		margin-bottom: 1rem;
	}

	.about-img {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		padding: 0.3rem;
		border-bottom: 3px solid #e9000e;
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 1rem;
		font-weight: 500;
		width: 200px;
		text-align: center;
		word-wrap: break-word;

		${breakpoints.sm} {
			width: 100%;
		}
	}
`;

// OUR EXPERIENCE
const OurExperience = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 4rem;

	${breakpoints.lg} {
		margin-top: 4rem;
	}

	.experience {
		margin-bottom: 1rem;

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
		}

		p {
			font-size: 1rem;
			padding: 1rem 0;
			line-height: 170%;
		}
	}
`;

// OUR EXPERTISE
const OurExpertise = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 4rem;

	.expertise {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;

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
			width: 90%;

			span {
				color: #e9000e;
			}

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}
		}

		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.2rem;
		}

		p {
			font-size: 18px;
			font-weight: 400;
			color: #2a2a2a;

			${breakpoints.lg} {
				margin-top: 0;
				font-size: 18px;
			}

			@media (max-width: 850px) {
				font-size: 1rem;
			}
		}
	}
`;

const StackContainer = styled.div`
	box-sizing: border-box;

	.icon {
		${breakpoints.sm} {
			width: 110px;
			height: 80px;
		}
	}
`;

// OUR SERVICES
const Services = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 7rem;
	margin-bottom: 1rem;

	${breakpoints.lg} {
		padding-top: 4rem;
	}

	.services {
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
			width: 90%;

			span {
				color: #e9000e;
			}

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}
		}

		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.5rem;
		}

		p {
			font-size: 20px;
			font-weight: 400;
			color: #2a2a2a;

			${breakpoints.lg} {
				margin-top: 0;
				font-size: 18px;
			}

			@media (max-width: 850px) {
				font-size: 1rem;
			}
		}
	}
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 2rem;
	flex-wrap: wrap;
	margin-bottom: 2rem;

	${breakpoints.lg} {
		gap: 1rem;
	}

	${breakpoints.md} {
		gap: 0.5rem;
	}
`;

const ServicesCard = styled.div`
	width: 45%;
	padding: 0.5rem;
	border-radius: 8px;
	box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
		0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);
	transition: all 0.2s ease-in-out;
	margin-bottom: 1rem;
	@media (min-width: 700px) and (max-width: 929px) {
		width: 90%;
		margin: 0 auto;
	}

	@media (max-width: 600px) {
		width: 90%;
		margin: 0 auto;
	}

	&:hover {
		transform: scale(1.01);
	}

	.service-img {
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 0 auto 1rem auto;

		${breakpoints.lg} {
			width: 40px;
			height: 40px;
		}
	}

	h3 {
		font-size: 20px;
		font-weight: 600;
		color: #0c0c0c;
		margin-bottom: 1rem;
		text-align: center;
		padding-top: 10px;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}

		${breakpoints.lg} {
			font-size: 1rem;
		}
	}

	p {
		font-size: 18px;
		font-weight: 400;
		color: #636363;
		margin-bottom: 2rem;
		text-align: center;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}
	}

	button {
		background: #ffffff;
		box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
			0 1.55172px 4.65517px 1.55172px rgba(0, 0, 0, 0.15);
		border-radius: 12.4138px;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		color: #656565;
		padding: 0.3rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		transition: all 0.2s ease-in-out;
		margin: 0 auto;

		@media (max-width: 850px) {
			font-size: 0.8rem;
		}

		@media (max-width: 800px) {
			font-size: 0.4rem;
		}

		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		.icon {
			color: #fff;
			background-color: #e9000e;
			padding: 0.1rem;
			border-radius: 50%;
			font-size: 25px;

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}

			${breakpoints.lg} {
				font-size: 1rem;
			}
		}

		&:hover {
			opacity: 0.5;
		}
	}
`;

const CardData = styled.div`
	padding: 1rem 0.5rem 1rem 0.5rem;

	.img-box {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.8rem;

		.icon {
			color: #151616;
			background-color: #d6dde1;
			padding: 0.1rem;
			margin-top: -3rem;
			border-radius: 50%;
			font-size: 25px;
			transition: all 0.2s ease-in-out;

			&:hover {
				background-color: #e9000e;
				color: #fff;
			}
		}
	}

	h3 {
		font-size: 1.2rem;
		font-weight: 600;
		text-align: center;

		${breakpoints.lg} {
			font-size: 1rem;
		}

		${breakpoints.sm} {
			font-size: 0.8rem;
		}
	}
`;

// CONSULTING IT SERVICES
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
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 2rem;
	flex-wrap: wrap;
	margin-bottom: 2rem;

	${breakpoints.lg} {
		gap: 1rem;
	}

	${breakpoints.md} {
		gap: 0.5rem;
	}
`;

export const CasesCard = styled.div`
	width: 47%;
	border-radius: 8px;
	box-shadow: 0 1.55172px 1.10345px rgba(0, 0, 0, 0.3),
		0 1.10345px 1.31034px 1.10345px rgba(0, 0, 0, 0.15);
	transition: all 0.2s ease-in-out;
	margin-bottom: 1rem;

	//@media (min-width: 700px) and (max-width: 929px) {
	@media (max-width: 1000px) {
		width: 75%;
		max-width: 360px;
		margin: 0.5rem auto;
	}

	@media (max-width: 600px) {
		width: 70%;
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
