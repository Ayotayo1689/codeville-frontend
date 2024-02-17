import React from "react";
import {
	Box,
	chakra,
	Container,
	Flex,
	Grid,
	Heading,
	List,
	ListIcon,
	ListItem,
	Text,
	Center,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Button,
} from "@chakra-ui/react";
import Link from "next/link";
import appRoutes from "../../../utils/appRoutes";
import Image from "next/image";
import HeaderOne from "../../HeaderOne";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/theme";
import SideBar from "../../services/itConsulting/operationalAnalytics/sidebar";
import {
	benefitsCard,
	handpickedProjects,
	manaagedTestingSidebar,
} from "./data";
import { BsArrowRightShort, BsFillSquareFill } from "react-icons/bs";
import TantaTestimonial from "../../tantaTestimonials";
import { analyticsConsultingSummary } from "../../dataAnalytics/analyticsConsulting/data";
import { IoIosCheckmark } from "react-icons/io";
import Head from "next/head";
import ServicesStages from "./servicesStages";
import BenefitsMobile from "./benefitsMobile";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

function ManagedTesting({ testimonials }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800&family=Manrope:wght@700;800&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap"
					rel="stylesheet"
				></link>
			</Head>

			<Box overflow={{base: "hidden", md: "hidden", lg: "visible"}}>
				<HeaderOne
					heading={"IT OUTSOURCING"}
					title={"Managed Testing Services"}
				/>
				<Container maxW={"7xl"} p={{ base: "2rem", lg: "4rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
					{/*************************************Hero section****************************************************/}
					<HeroContent>
						<HeroText>
							<h1>Get a Real-World Cloud App. Fast and Safe</h1>
							<p>
								Managed testing services include a wide range of testing
								activities from test planning, test cases’ design and execution,
								to test reporting and QA process improvements. Within optimal
								testing time and budget.
							</p>
							<CtaButtons>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: {
											service: "/services/it-outsourcing/managed-testing",
										},
									}}
									service="/services/it-outsourcing/managed-testing"
									className="request-services"
								>
									<button className="request-services">
										REQUEST CLOUD APP DEV SERVICES
									</button>
								</Link>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: {
											service: "/services/it-outsourcing/managed-testing",
										},
									}}
									service="/services/it-outsourcing/managed-testing"
									className="mobile-request-services"
								>
									<button className="mobile-request-services">
										MAKE A REQUEST
									</button>
								</Link>
								<Link
									href={{
										pathname: "/services/cost-calculator",
										query: { service: "it_outsourcing-1" },
									}}
								>
									<button className="get-quote">GET A QUOTE</button>
								</Link>
							</CtaButtons>
						</HeroText>
						<Image
							src="/assets/itOutSourcing/managedTesting/managedHero.png"
							alt="hero image"
							width={470}
							height={400}
							className="hero-img"
						/>
					</HeroContent>

					<Box
						borderTop={"1px solid rgba(0, 0, 0, 0.30)"}
						boxShadow={" 0px 4px 10px 0px rgba(0, 0, 0, 0.50)"}
						mb={"3rem"}
						mt={"0.5rem"}
						display={{ base: "none", md: "block", lg: "block" }}
					></Box>

					{/***********************************SIDEBAR*******************************************************/}

					<Flex fontFamily={"'Roboto', sans-serif"}>
						<SideBar
							title={"CONTENTS"}
							sideData={manaagedTestingSidebar}
							minW={"18rem"}
						/>

						{/******************************************WHY CHOOSE TANTA*******************************/}

						<Box
							ml={{ base: "0px", lg: "5rem" }}
							w={{ base: "100%", md: "100%", lg: "70%" }}
							id="about-us"
							scrollMarginTop={"150px"}
						>
							<Heading
								fontWeight="700"
								fontSize={{ base: "20px", md: "30px", lg: "30px" }}
								color=" #414141"
								lineHeight={{ lg: "140%", base: "150%" }}
								mb={"0.5rem"}
							>
								Why Choose &nbsp;
								<chakra.span color="#E9000E">Tanta Innovative</chakra.span>{" "}
							</Heading>
							<div
								style={{
									width: "6rem",
									height: "2px",
									background: "#D80808",
									marginBottom: " 2rem ",
								}}
							></div>
							<Flex justifyContent={"space-between"}>
								<Box>
									<Center
										mb="1rem"
										w={{ base: "44px", md: "100px", lg: "100px" }}
										m={"auto"}
									>
										<Image
											src="/assets/dataAnalytics/analyticsConsulting/BatchAssign.png"
											alt="logo"
											width={100}
											height={100}
										/>
									</Center>
									<Text
										fontWeight={"700"}
										fontSize={{ base: "14px", md: "25px", lg: "25px" }}
										color={"#2F2F2F"}
										textAlign={"center"}
										mb={"0.5rem"}
									>
										200+
									</Text>

									<Text
										fontWeight={"700"}
										fontSize={{ base: "12px", md: "25px", lg: "25px" }}
										color={"#2F2F2F"}
									>
										Satisfied Customers
									</Text>
								</Box>
								<Box>
									<Center
										mb="1rem"
										w={{ base: "44px", md: "100px", lg: "100px" }}
										m={"auto"}
									>
										<Image
											src="/assets/dataAnalytics/analyticsConsulting/Crowd.png"
											alt="logo"
											width={100}
											height={100}
										/>
									</Center>
									<Text
										fontWeight={"700"}
										fontSize={{ base: "14px", md: "25px", lg: "25px" }}
										color={"#2F2F2F"}
										textAlign={"center"}
										mb={"0.5rem"}
									>
										30+
									</Text>

									<Text
										fontWeight={"700"}
										fontSize={{ base: "12px", md: "25px", lg: "25px" }}
										color={"#2F2F2F"}
									>
										Skilled Employees
									</Text>
								</Box>
								<Box>
									<Center
										mb="1rem"
										w={{ base: "44px", md: "100px", lg: "100px" }}
										m={"auto"}
									>
										<Image
											src="/assets/dataAnalytics/analyticsConsulting/Guarantee.png"
											alt="logo"
											width={100}
											height={100}
										/>
									</Center>
									<Text
										fontWeight={"700"}
										fontSize={{ base: "14px", md: "25px", lg: "25px" }}
										color={"#2F2F2F"}
										textAlign={"center"}
										mb={"0.5rem"}
									>
										80+
									</Text>

									<Text
										fontWeight={"700"}
										fontSize={{ base: "12px", md: "25px", lg: "25px" }}
										color={"#2F2F2F"}
									>
										Senior IT Experts
									</Text>
								</Box>
							</Flex>

							<Flex
								mt={"2rem"}
								color={"rgba(0, 0, 0, 1)"}
								fontSize={"18px"}
								justifyContent={"space-between"}
								display={{ base: "none", md: "flex", lg: "flex" }}
							>
								<Box w={"330px"} height={"264px"}>
									<List>
										<ListItem
											fontWeight={"400"}
											fontSize={"16px"}
											display={"inline"}
										>
											<Flex>
												<ListIcon
													as={BsFillSquareFill}
													color=" #E9000E"
													fontSize={"0.5rem"}
													mt={"0.5rem"}
												/>
												<Text letterSpacing={"1px"}>
													{" "}
													Full-scale{" "}
													<Text as="span" fontWeight={"700"}>
														{" "}
														Project Management
													</Text>{" "}
													Office to handle projects of any complexity.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"16px"}>
											<Flex>
												<ListIcon
													as={BsFillSquareFill}
													color=" #E9000E"
													fontSize={"0.5rem"}
													mt={"0.5rem"}
												/>
												<Text letterSpacing={"1px"}>
													{" "}
													15 years in help-desk on ITIL principles.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"16px"}>
											<Flex>
												<ListIcon
													as={BsFillSquareFill}
													color=" #E9000E"
													fontSize={"0.5rem"}
													mt={"0.5rem"}
												/>
												<Text letterSpacing={"1px"}>
													{" "}
													9 years in DevOps practices.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"16px"}>
											<Flex>
												<ListIcon
													as={BsFillSquareFill}
													color="#E9000E"
													fontSize={"0.5rem"}
													mt={"0.5rem"}
												/>
												<Text letterSpacing={"1px"}>
													{" "}
													Mature{" "}
													<Text as="span" fontWeight={"700"}>
														{" "}
														Quality Management{" "}
													</Text>{" "}
													system proved with ISO 9001 certificate to deliver
													tangible service value and predictable results.
												</Text>
											</Flex>
										</ListItem>
									</List>
								</Box>

								<Box w={"330px"} height={"326px"}>
									<List>
										<ListItem
											fontWeight={"400"}
											fontSize={"16px"}
											display={"inline"}
										>
											<Flex>
												<ListIcon
													as={BsFillSquareFill}
													color=" #E9000E"
													fontSize={"0.5rem"}
													mt={"0.5rem"}
												/>
												<Text letterSpacing={"1px"}>
													Solid security
													<Text as="span" fontWeight={"700"}>
														{" "}
														Management System
													</Text>{" "}
													backed by ISO 27001 certification to protect the
													customers’ data we access.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"16px"}>
											<Flex>
												<ListIcon
													as={BsFillSquareFill}
													color=" #E9000E"
													fontSize={"0.5rem"}
													mt={"0.5rem"}
												/>
												<Text letterSpacing={"1px"}>
													{" "}
													<Text as="span" fontWeight={"700"}>
														76%
													</Text>{" "}
													of our revenue comes from 1+ year-long customers, such
													as eBay, IBM, Baxter, NASA JPL, Nielsen, and more.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"16px"}>
											<Flex>
												<ListIcon
													as={BsFillSquareFill}
													color=" #E9000E"
													fontSize={"0.5rem"}
													mt={"0.5rem"}
												/>
												<Text letterSpacing={"1px"}>
													{" "}
													<Text as="span" fontWeight={"700"}>
														Consulting Expertise
													</Text>{" "}
													In Over 30 Industries To Bridge Business And
													Technology.
												</Text>
											</Flex>
										</ListItem>
									</List>
								</Box>
							</Flex>

							{/**************************************BENEFITS***********************************************/}

							<Box id="service-stages" scrollMarginTop={"150px"}>
								<Text
									color={"#636363"}
									fontSize={"18px"}
									fontWeight={"400"}
									letterSpacing={"1.53px"}
									textAlign={{ base: "center", md: "left", lg: "left" }}
									mt={{ base: "3rem", md: "0px", lg: "0px" }}
								>
									BENEFITS
								</Text>

								<Heading
									fontWeight="700"
									fontSize={{ base: "15px", md: "30px", lg: "30px" }}
									color=" #414141"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
									textAlign={{ base: "center", md: "left", lg: "left" }}
								>
									Why Do Businesses Increasingly Opt for &nbsp;
									<chakra.span color="#E9000E">Cloud?</chakra.span>{" "}
								</Heading>
								<Box
									display={{ base: "none", lg: "block" }}
									style={{
										width: "4rem",
										height: "3px",
										background: "#E9000E",
										marginBottom: " 2rem ",
									}}
								></Box>

								<Text
									color={"#2A2A2A"}
									fontSize={{ base: "13px", md: "20px", lg: "20px" }}
									fontWeight={"400"}
									textAlign={{ base: "center", md: "left", lg: "left" }}
								>
									ScienceSoft provides end-to-end managed testing services,
									delivering the service in the following stages:
								</Text>
								<ServicesStages />
							</Box>

							{/******************Benefits of Our Managed Testing Services********************************/}
							<Box mt={"3rem"} id="benefits" scrollMarginTop={"150px"}>
								<Text
									color={"#636363"}
									fontSize={"18px"}
									fontWeight={"400"}
									letterSpacing={"1.53px"}
									ml={{ base: "20px", md: "0px", lg: "0px" }}
								>
									BENEFITS
								</Text>

								<Heading
									fontWeight="700"
									fontSize={{ base: "13px", md: "30px", lg: "30px" }}
									color=" #414141"
									lineHeight={{ lg: "140%", base: "150%" }}
									ml={{ base: "20px", md: "0px", lg: "0px" }}
									mb={"0.5rem"}
								>
									Benefits of Our &nbsp;
									<chakra.span color="#E9000E">
										Managed Testing
									</chakra.span>{" "}
									Services
								</Heading>
								<Box
									ml={{ base: "20px", md: "0px", lg: "0px" }}
									style={{
										width: "4rem",
										height: "3px",
										background: "#E9000E",
										marginBottom: " 2rem ",
									}}
								></Box>
								<Box
									mt={"3rem"}
									display={{ base: "none", md: "flex", lg: "flex" }}
								>
									<Grid
										gridTemplateColumns={{
											base: "1fr",
											lg: "1fr  1fr",
											md: "1fr 1fr",
											sm: "",
										}}
										flexDir={{ base: "column", lg: "row" }}
										gridGap={"1rem"}
										alignItems={"center"}

									>
										{benefitsCard.map((item, index) => {
											return (
												<Box
													key={index}
													height={"291px"}
													width={{ base: "330px", md: "360px", lg: "375px" }}
													background={"transparent"}
													mb={"3rem"}
													border={"1px solid rgba(0, 0, 0, 0.50)"}
													borderRadius={"8px"}
													ml={"auto"}
													mr={"auto"}

												>
													<Box ml={"1rem"} pt={"1rem"}>
														<Center>
															<Image
																src={item?.image}
																alt="icons"
																style={{
																	width: "65px",
																	height: "65px",
																	marginTop: "1rem",
																	marginBottom: "1rem",
																}}
															/>
														</Center>
														<Text
															color={"#303030"}
															fontSize={"20px"}
															fontWeight={"500"}
															ml={"auto"}
															mr={"auto"}
															textAlign={"center"}
														>
															{item.title}
														</Text>

														<Text
															color={" #3A393A"}
															fontSize={"15px"}
															mt={"1rem"}
															width={{ base: "300px", lg: "315px" }}
															textAlign={"center"}
															ml={"auto"}
															mr={"auto"}
														>
															{item.details}
														</Text>
													</Box>
												</Box>
											);
										})}
									</Grid>
								</Box>
							</Box>
							<BenefitsMobile />

							{/****************************testimonials*************************************/}
							<Box id="testimonials" scrollMarginTop={"150px"}>
								<TantaTestimonial testimonials={testimonials} />
							</Box>

							{/****************Our Handpicked Projects and Services*****************/}

							<Box mt={"2rem"} id="related-projects" scrollMarginTop={"150px"}>
								<HandpickedProject/>
							</Box>


							{/********************************SUMMARY***************************************/}

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
											<TabList borderColor={"#B60E09"} w={"90%"}>
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
																		"services/it-consulting/it-strategy-consulting",
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
					</Flex>
				</Container>
			</Box>
		</>
	);
}

export default ManagedTesting;

const HeroContent = styled.div`
	display: flex;
	gap: 3rem;
	width: 100%;
	padding-bottom: 2.5rem;
	font-family: "Roboto", sans-serif;

	${breakpoints.lg} {
		.hero-img {
			width: 45%;
		}
	}

	@media (max-width: 700px) {
		flex-direction: column-reverse;
		gap: 0;

		.hero-img {
			width: 95%;
			height: 100%;
			margin: 0 auto;
		}
	}

	${breakpoints.md} {
		.hero-img {
			padding-top: 1rem;
			flex-direction: row;
		}
	}
`;

const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
	width: 57%;
	padding-right: 2.5%;

	@media (max-width: 700px) {
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

		${breakpoints.md} {
			font-size: 1.5rem;
			margin-top: 1rem;
			text-align: left;
		}

		@media (max-width: 700px) {
			font-size: 16px;
			font-weight: 700;
			color: #404243;
			width: 307px;
			margin: auto;
		}

		&::before {
			position: absolute;
			content: "";
			top: -3px;
			left: -30px;
			height: 100%;
			width: 3px;
			background: linear-gradient(to bottom, red 30%, white, white);

			@media (max-width: 700px) {
				display: none;
			}
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

			@media (max-width: 700px) {
				display: none;
			}
		}
	}

	p {
		font-size: 22px;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		width: 594px;
		color: #333;
		@media (max-width: 600px) {
			font-size: 12px;
			font-family: "Roboto", sans-serif;
			color: #333;
			text-align: center;
			width: 340px;
		}
		@media (min-width: 768px) and (max-width: 1023px) {
			width: 450px;
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

  @media (max-width: 700px) {
    display: flex;
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
    @media (max-width: 700px) {
     display: none;
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
      min-width: 140px;
      height: 50px;
      text-align: center;
      display: flex;
      justify-content: center;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
      border: 2px solid #263238;
      border-radius: 10px;
      font-size: 14px;
      color: #263238;
    }

    &:hover {
      background-color: #b10000;
      color: #fff;
    }
  }
  .mobile-request-services{
    display: none;
    @media (max-width: 700px) {
      background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
      border-radius: 10px;
      color: #fff;
      border: none;
      font-size: 20px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
      cursor: pointer;
      text-transform: uppercase;
      min-width: 140px;
      height: 50px;

      ${breakpoints.lg} {
        font-size: 0.7rem;
      }

      &:hover {
        opacity: 0.8;
      }
  }
`;
