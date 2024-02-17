import React from "react";
import HeaderOne from "../../../HeaderOne";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading, Hide,
	Image,
	List,
	ListIcon,
	ListItem, Show,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Content from "./content";
import { breakpoints, colors } from "../../../../../styles/theme";
import {
	MdOutlineArrowBackIosNew,
	MdOutlineArrowForwardIos,
} from "react-icons/md";
import LogoMarquee from "../../../logoMarquee";
import TantaTestimonial from "../../../tantaTestimonials";
import styled from "styled-components";
import { IoIosCheckmark } from "react-icons/io";
import AllServices from "../it_assesment/allServices";
import IncludeCard from "../it_assesment/includeCard";
import { insightsData, ItIncludeData } from "./data";
import Insights from "../bigIntelligence/Insights";
import { analyticsConsultingSummary } from "../../../dataAnalytics/analyticsConsulting/data";
import appRoutes from "../../../../utils/appRoutes";
import heroCYSS from "../../../../../public/assets/cyberSecurityITOutsourcing/heroCYSS.png";

const DataAnalyticsConsulting = ({ testimonials }) => {
	return (
		<>
			<Box mt={{ base: "5rem", lg: "7rem" }}>
				<HeaderOne
					heading={"SERVICES"}
					title={
						<>
							Data analytics{" "}
							<span style={{ color: `${colors.primaryColor}` }}>
								Consulting
							</span>
						</>
					}
				/>
			</Box>
			<Container maxW={"7xl"} mb={"1rem"} bg={{ base: "#F7F2FA", lg: "white" }}>
				<HeroContent>
					<HeroText>
						<h1>Data Analytics Consulting</h1>
						<p>
							Reach out to our dedicated team of IT consultants to we help
							clients unlock decision intelligence and evolve into an
							insight-driven organization through augmented analytics, agile
							Business Intelligence (BI) systems and advanced data practices.
						</p>
						<CtaButtons>
							<Link
								href={{
									pathname: "/contact-us",
									query: {
										service: "services/data-analytics/data-implementation",
									},
								}}
								service="services/it_outsourcing"
								className="request-services"
							>
								{" "}
								<button className="request-services">
									Request data analytics services
								</button>
							</Link>
							<Link
								href={{
									pathname: appRoutes.services["cost-calculator"],
									query: { service: "itConsulting-6" },
								}}
							>
								<button className="get-quote">get a quote</button>
							</Link>
						</CtaButtons>
					</HeroText>
					<Image
						src={"/assets/healthcare/itConsultingServices/hero-it-con.png"}
						alt="hero image"
						width={470}
						height={400}
						className="hero-img"
					/>
				</HeroContent>
				<Box
					borderBottom={"1px"}
					opacity={"0.2"}
					marginTop={"1.5rem"}
					shadow={"bold"}
				></Box>
				<Flex gap={"5rem"} py={{ base: "2", lg: "10" }}>
					<Content />
					<Box w={{ base: "100%", lg: "70%" }}>
						<Box
							id="Package"
							scrollMarginTop={"150px"}
							width={"100%"}
							flex={3}
							mb={"2rem"}
							display={"flex"}
							flexDirection={"column"}
						>
							<Text
								mb={"20px"}
								mt={"10px"}
								fontSize={{ base: "1rem", lg: "18px" }}
							>
								Our objective in implementing new technologies is not solely to
								make your company appear "modern," look for possibilities to
								lower the costs of your IT infrastructure while increasing the
								system's efficiency, security, and compliance.
							</Text>
							<Flex
								id={"data-analytics"}
								scrollMarginTop={"150px"}
								w={"100%"}
								mt={"3rem"}
								alignItems={"center"}
								justifyContent={"center"}
								flexDirection={"column"}
							>
								<Text
									fontWeight={"700"}
									fontSize={{ base: "lg", lg: "3xl" }}
									pb={"5px"}
								>
									What the Data Analytics Consulting
									<span style={{ color: `${colors.primaryColor}` }}>
										{" "}
										Includes
									</span>
								</Text>
								<Box bg={"red"} height={"3px"} mb={"1rem"} w={"7rem"}></Box>
							</Flex>
							<Flex
								w={"120%"}
								flexWrap={"wrap"}
								gap={"10px"}
								justifyContent={"center"}
								ml={"-15%"}
							>
								{ItIncludeData.map((item, index) => {
									return (
										<IncludeCard
											key={index}
											text={item.details}
											img={item.img}
											head={item.title}
										/>
									);
								})}
							</Flex>
						</Box>

						{/*=======Our Solutions – from Automation to Advanced Data Analytics======*/}
						<Box my={"4rem"} id="Solution" scrollMarginTop={"150px"}>
							<Heading
								fontWeight="700"
								fontSize={{ base: "lg", lg: "3xl" }}
								textTransform="capitalize"
								lineHeight={{ lg: "140%", base: "150%" }}
								mb={"0.5rem"}
							>
								Our Solutions – from Automation{" "}
								<span style={{ display: "block" }}>
									to Advanced{" "}
									<span style={{ color: `${colors.primaryColor}` }}>
										{" "}
										Data Analytics
									</span>
								</span>
							</Heading>
							<Box
								width={{ lg: "60px", base: "50px" }}
								height={"3px"}
								bg={"#D80808"}
							></Box>
							<Grid
								gridTemplateColumns={{
									base: "repeat(1, 1fr)",
									lg: "repeat(2, 1fr)",
								}}
								gap={"2rem"}
								mt={"2rem"}
							>
								{insightsData.map((item, index) => (
									<Insights text={item.text} lists={item.lists} key={index} />
								))}
							</Grid>
						</Box>
						<Box id={"Partner"} scrollMarginTop={"150px"}>
							<Text
								fontWeight={"700"}
								fontSize={{ base: "lg", lg: "3xl" }}
								pb={"5px"}
							>
								What Makes{" "}
								<span style={{ color: `${colors.primaryColor}` }}>
									{" "}
									Tanta Innovative{" "}
								</span>{" "}
								a Reliable <span style={{ display: "block" }}> Partner </span>
							</Text>
							<Box bg={"red"} height={"3px"} mb={"20px"} w={"4rem"}></Box>
							<Text fontSize={"18px"}>
								Our belief is that with our technical expertise and IT Services,
								combined with your innovative vision, we can create tech systems
								that will help you scale up your business by making life easier
								for your audience.
							</Text>
						</Box>
						<Flex mt={"30px"} justifyContent={"center"} alignItems={"center"}>
							<Box maxWidth={"1200px"} position={"relative"}>
								<Flex
									whiteSpace={"nowrap"}
									overflow={"hidden"}
									alignItems={"center"}
									gap={3}
								>
									<MdOutlineArrowBackIosNew fontSize={"4rem"} />
									<div>
										<LogoMarquee colored={true} />
									</div>
									<MdOutlineArrowForwardIos fontSize={"4rem"} />
								</Flex>
							</Box>
						</Flex>
						<Box id="testimonials" maxW={"800px"} scrollMarginTop={"150px"}>
							<TantaTestimonial testimonials={testimonials} />
						</Box>
						<Box id="summary" scrollMarginTop={"120px"}>
							<Box my={"1.5rem"} id="summary" scrollMarginTop={"150px"}>
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

														<List spacing={2} mt={"1rem"}>
															{item.items &&
																Array.isArray(item.items) &&
																item.items.map((item, index) => {
																	return (
																		<ListItem pl={4} key={"index"}>
																			<Flex flexGrow={"1"}>
																				<ListIcon
																					as={IoIosCheckmark}
																					color="green"
																					fontSize={"1.5rem"}
																					mt={"0.2rem"}
																				/>
																				<Text>{item}</Text>
																			</Flex>
																		</ListItem>
																	);
																})}
														</List>

														<Link
															href={{
																pathname: appRoutes.contactUs,
																query: {
																	service:
																		"services/it-consulting/data-analytics-consulting",
																},
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
						<Box id={"Projects"} scrollMarginTop={"150px"}>
							<AllServices />
						</Box>
					</Box>
				</Flex>
			</Container>
		</>
	);
};
export default DataAnalyticsConsulting;

// const HeroText = styled.div`
// 	h1 {
// 		position: relative;
// 		box-sizing: border-box;
// 		margin-left: 2rem;
// 		font-size: 32px;
// 		font-weight: 700;
// 		margin-top: 1rem;
// 		color: #0c0c0c;
//
// 		@media (max-width: 520px) {
// 			font-size: 1.3rem;
// 		}
//
// 		&::before {
// 			position: absolute;
// 			content: "";
// 			top: -3px;
// 			left: -30px;
// 			height: 100%;
// 			width: 3px;
// 			background: linear-gradient(to bottom, red 30%, transparent, transparent);
// 		}
// 		&::after {
// 			position: absolute;
// 			content: "";
// 			top: -3px;
// 			left: -30px;
// 			height: 3px;
// 			width: 100%;
// 			background: linear-gradient(
// 				to right,
// 				red,
// 				transparent,
// 				transparent,
// 				transparent,
// 				transparent,
// 				transparent
// 			);
// 		}
// 	}
// `;

const HeroContent = styled.div`
	display: flex;
	gap: 3rem;

	width: 100%;
	padding-bottom: 2.5rem;
	border-bottom: 4px solid #e5e5e5;

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
	width: 57%;
	//padding-left: 1.5%;
	padding-right: 2.5%;

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
		font-size: 34px;
		font-weight: 700;
		margin-top: 0;
		padding-top: 0;
		color: #0c0c0c;

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
	p {
		font-size: 1.2rem;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		// color: #636363;

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
		background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
		border-radius: 8px;
		color: #fff;
		border: none;
		padding: 0.4rem 1rem;
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

