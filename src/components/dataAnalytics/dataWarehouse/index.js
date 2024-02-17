import React, { useState } from "react";
import {
	Box,
	Flex,
	Container,
	Text,
	Heading,
	chakra,
	Button,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	List,
	ListItem,
	ListIcon,
	Grid,
} from "@chakra-ui/react";
import HeaderOne from "../../HeaderOne";
import heroIMG2 from "../../../../public/assets/dataAnalytics/heroIMG2.png";
import { services, sideBarData, about, techniques, projects } from "./data";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import LogoMarquee from "../../logoMarquee";
import Image from "next/image";
import { RxCaretDown } from "react-icons/rx";
import { RiCheckboxBlankFill } from "react-icons/ri";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/theme";
import ContactUs from "../../contactUs";
import { IoIosCheckmark } from "react-icons/io";
import DataCard from "./portfolioCardData";
import Head from "next/head";
import TantaTestimonial from "../../tantaTestimonials";
import appRoutes from "../../../utils/appRoutes";
import { analyticsConsultingSummary } from "../analyticsConsulting/data";
import { TiArrowRightThick } from "react-icons/ti";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

const DataWarehouse = ({ portfolio1, testimonials }) => {
	const [activeLink, setActiveLink] = useState({});

	return (
		<>
			<Head>
				<title> Data Warehouse - Tanta Innovative </title>
				<meta
					name="description"
					content=" Leverage the power of data with our Data Warehouse as a Service. Our IT company provides scalable and
                                secure solutions for efficient data management"
				/>
			</Head>
			<Box mt={"5rem"} minHeight={"100vh"}>
				<HeaderOne
					heading={"data analytics"}
					title={"data warehouse services"}
				/>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
					<HeroContent>
						<HeroText>
							<h1>
								Turn your data into a strategic asset with our expert services.
							</h1>
							<p>
								Leverage the power of data with our Data Warehouse as a Service.
								Our IT company provides scalable and secure solutions for
								efficient data management, analysis, and reporting, driving
								informed decision-making for your business.
							</p>
							<CtaButtons>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: {
											service: "services/data-analytics/data-warehouse",
										},
									}}
									service="services/data-analytics"
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
										query: { service: "dataAnalytics-7" },
									}}
								>
									<button className="get-quote">get a quote</button>
								</Link>
							</CtaButtons>
						</HeroText>
						<Image
							src={heroIMG2}
							alt="hero image"
							width={400}
							height={400}
							className="hero-img"
						/>
					</HeroContent>
					<Flex gap={"3rem"} justify={"center"} mb={"4rem"} mt={"5rem"}>
						<Box
							display={{ lg: "flex", base: "none" }}
							flexDir="column"
							boxShadow={"lg"}
							height={"fit-content"}
							flex={1}
							width={{ base: "100%", lg: "30%" }}
							position={{ base: "", lg: "sticky" }}
							top="10rem"
							pb={"1rem"}
							borderBottom={"lg"}
						>
							{/* sticky sidebar */}
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
								CONTENTS
							</Text>
							<Box px={"1rem"}>
								{sideBarData.map((item, index) => {
									return (
										<Flex
											paddingInline={".4rem"}
											justifyContent={"space-between"}
											alignItems={"center"}
											key={index}
											p={".3rem"}
										>
											<Link
												onClick={() => {
													setActiveLink({ [item.id]: true });
												}}
												style={{
													color: activeLink[item.id] ? "red" : "",
													fontSize: "18px",
													fontWeight: "400",
													cursor: "pointer",
													width: "100%",
												}}
												href={`#${item.id}`}
											>
												{item.title}
											</Link>

											<MdKeyboardArrowRight
												cursor={"pointer"}
												size={"2rem"}
												style={{ marginLeft: "47px" }}
											/>
										</Flex>
									);
								})}
							</Box>
						</Box>
						<Box width={{ base: "100%", lg: "70%" }}>
							{/* About us section */}
							<Box id="About_us" scrollMarginTop={"150px"}>
								<Text
									fontWeight="400"
									color={"#636363"}
									fontSize={{ lg: "18px", base: "16px" }}
									my="20px"
									lineHeight="24px"
									letterSpacing="0.085em"
									textTransform="uppercase"
								>
									ABOUT US
								</Text>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"1rem"}
								>
									What Makes{" "}
									<chakra.span
										color={"#E9000E"}
										fontSize={{ base: "20px", lg: "30px" }}
										lineHeight={{ lg: "140%", base: "150%" }}
									>
										{" "}
										Tanta Innovative{" "}
									</chakra.span>
									a Trustworthy Partner
								</Heading>
								<Box
									width={{ lg: "60px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
								></Box>
								<Text
									color={"#303030"}
									fontSize={{ lg: "18px", base: "15px" }}
									lineHeight={{ lg: "170%", base: "170%" }}
									mb={"0.9rem"}
								>
									Tanta Innovatives is a leading provider of IT consulting and
									software development services that has helped businesses
									across multiple industries succeed. Our
								</Text>
								{about.map((item, index) => (
									<Flex
										gap={"0.5rem"}
										color={"#303030"}
										fontSize={{ lg: "18px", base: "15px" }}
										lineHeight={{ lg: "170%", base: "170%" }}
										alignItems={"center"}
										key={index}
									>
										<Box marginBottom={{lg:"0.1rem", base:"1.7rem"}}>
											<RiCheckboxBlankFill
												style={{
													color: "#E9000E",
													width: "10px",
													height: "10px",
												}}
											/>
										</Box>

										{item}
									</Flex>
								))}
								<Flex
									justifyContent={"center"}
									alignItems={"center"}
									flexDirection={"column"}
									margin={{ lg: "3rem 0", base: "1.5rem 0.8rem" }}
								>
									<Box maxWidth={"1200px"} position={"relative"}>
										<Box whiteSpace={"nowrap"} overflow={"hidden"}>
											<div>
												<LogoMarquee colored={true} />
											</div>
										</Box>
									</Box>
								</Flex>
							</Box>
							{/*DWH SERVICES*/}
							<Box mt={"5rem"} id="Services" scrollMarginTop={"150px"}>
								<Text
									fontWeight="400"
									color={"#636363"}
									fontSize={{ lg: "18px", base: "16px" }}
									my="20px"
									lineHeight="24px"
									letterSpacing="0.085em"
									textTransform="uppercase"
								>
									dwh services
								</Text>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"1rem"}
								>
									Data Warehouse provided by{" "}
									<chakra.span
										color={"#E9000E"}
										fontSize={{ base: "20px", lg: "30px" }}
										lineHeight={{ lg: "140%", base: "150%" }}
									>
										{" "}
										Tanta Innovative Limited
									</chakra.span>
								</Heading>
								<Box
									width={{ lg: "60px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
								></Box>
								<Text
									color={"#303030"}
									fontSize={{ lg: "18px", base: "15px" }}
									lineHeight={{ lg: "170%", base: "170%" }}
									// textAlign={"justify"}
									mb={"2rem"}
								>
									Unlock the potential of your data with our comprehensive Data
									Warehouse services. Our IT firm offers scalable solutions for
									efficient data management, analysis, and reporting, empowering
									your business with valuable insights.
								</Text>
								<Box>
									{services.map((item, index) => {
										return (
											<Flex key={index} flexDir={"column"} gap={"1rem"}>
												<Flex gap={"1.5rem"} alignItems={"flex-start"}>
													<Image
														src={item.img}
														alt="img"
														width={60}
														height={60}
													/>
													<Box>
														<Text
															color={"#2f2f2f"}
															fontWeight="600"
															fontSize={{ lg: "25px", base: "16px" }}
															lineHeight={{ lg: "170%", base: "170%" }}

														>
															{item.title}
														</Text>
														<Text
															color={"#2a2a2a"}
															fontSize={{ lg: "18px", base: "15px" }}
															lineHeight={{ lg: "170%", base: "170%" }}
															mb={index === 0 ? "1rem" : "3rem"}

														>
															{item.details}
														</Text>
														<Box mb={"3rem"}>
															{item?.items?.map((nestedItem) => (
																<>
																	<Flex
																		key={nestedItem.id}
																		gap={"0.7rem"}
																		color={"#303030"}
																		fontSize={{ lg: "18px", base: "14px" }}
																		alignItems={"center"}
																		mt={"0.5rem"}
																		paddingLeft={"0.5rem"}

																	>
																		<Box marginBottom={{lg:"0.1rem", base:"1.1rem"}}>
																			<RiCheckboxBlankFill
																				style={{
																					color: "#E9000E",
																					marginBottom: "0.1rem",
																					width: "10px",
																					height: "10px",
																				}}
																			/>
																		</Box>

																		{nestedItem.name}
																	</Flex>
																</>
															))}
														</Box>
													</Box>
												</Flex>

											</Flex>
										);
									})}
								</Box>
								{/*Portfolio*/}
								<Box mt={"5rem"} id="DWH" scrollMarginTop={"150px"}>
									<Text
										fontWeight="400"
										color={"#636363"}
										fontSize={{ lg: "18px", base: "16px" }}
										my="20px"
										lineHeight="24px"
										letterSpacing="0.085em"
										textTransform="uppercase"
									>
										our portfolio
									</Text>
									<Heading
										fontWeight="700"
										fontSize={{ base: "20px", lg: "30px" }}
										textTransform="capitalize"
										color="#444444"
										lineHeight={{ lg: "140%", base: "150%" }}
										mb={"1rem"}
									>
										Data Warehouse Portfolio
									</Heading>
									<Box
										width={{ lg: "60px", base: "50px" }}
										height={"3px"}
										bg={"#D80808"}
										mb={"1rem"}
									></Box>
									<Text
										color={"#303030"}
										fontSize={{ lg: "18px", base: "15px" }}
										lineHeight={{ lg: "170%", base: "170%" }}
										mb={"3rem"}
									>
										We empower our clients to thrive in a rapidly-changing world
										by embracing and leveraging technological advancements
									</Text>
									<DataCard portfolio1={portfolio1} />
								</Box>
								{/* Testimonial Section */}
								<Box
									mb="4.5rem"
									id="C&P"
									scrollMarginTop={"150px"}
									mt={"4rem"}
								>
									{/* testimonial card */}
									<TantaTestimonial testimonials={testimonials} />
									{/* testimonial card */}
								</Box>

								{/* similar projects */}
								<HandpickedProject/>

								<Box id={"OWE"} scrollMarginTop={"150px"}>
									<Techniques>
										<div className="techniques">
											<h3>
												We Rely on Trusted Consulting Techniques and Best
												Practices
											</h3>
											<div></div>
										</div>
										<TechContainer>
											{techniques.map((item) => {
												return (
													<TechCard className="tech-card" key={item.title}>
														<CardData>
															<h3 className="title">{item.title}</h3>
															<ul>
																{item.items.map((nestedItem) => (
																	<li key={nestedItem.id}>
																		<IoIosCheckmark className="icon" />
																		{nestedItem.name}
																	</li>
																))}
															</ul>
														</CardData>
													</TechCard>
												);
											})}
										</TechContainer>
									</Techniques>
								</Box>
								<Box id="Summary" scrollMarginTop={"150px"}>
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
													<span style={{ color: "#E9000E" }}>
														Tanta Innovative
													</span>{" "}
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
																padding={{
																	base: "8px 18px",
																	lg: "16px 24px",
																}}
																mr={{ base: "0px", lg: "4rem" }}
																_selected={{
																	color: "white",
																	background: "#AE0000",
																	boxShadow:
																		"0px 2px 4px rgba(165, 163, 174, 0.3)",
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
																				"services/data-analytics/data-warehouse",
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
							</Box>
						</Box>
					</Flex>
				</Container>
			</Box>
			{/* contact us */}
			<Box>
				<ContactUs subtitle="For Your Data Analytics Projects" />
			</Box>
		</>
	);
};
export default DataWarehouse;

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
	width: 60%;
	padding-left: 2.5%;
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
		font-size: 32px;
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
		font-size: 1.1rem;
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

const Techniques = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 2rem;
	margin-bottom: 1rem;

	${breakpoints.lg} {
		padding-top: 3rem;
	}

	.techniques {
		margin-bottom: 1rem;

		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;

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
			margin-top: 1rem;
			margin-bottom: 0.5rem;
		}
	}
`;

const TechContainer = styled.div`
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

const TechCard = styled.div`
	width: 45%;
	margin-bottom: 1rem;
	padding-right: 0.2rem;
	padding-left: 0.2rem;
	border-radius: 8px;
	transition: all 0.2s ease-in-out;
	box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
		0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);

	@media (min-width: 700px) and (max-width: 929px) {
		width: 90%;
		margin: 0 auto;
	}

	@media (max-width: 600px) {
		width: 90%;
		margin: 0 auto;
	}

	${breakpoints.sm} {
		width: 100%;
	}

	&:hover {
		transform: scale(1.01);
	}

	.title {
		font-size: 1.1rem;
		font-weight: 400;
		color: #b60e09;
		margin-bottom: 1rem;
		text-decoration-line: underline;
		padding-top: 10px;
		text-transform: capitalize;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}

		${breakpoints.lg} {
			font-size: 1rem;
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 14px;
			font-weight: 400;
			color: #303030;
			margin-bottom: 0.5rem;
			text-align: left;

			.icon {
				color: #22ae16;
			}
		}
	}
`;

const CardData = styled.div`
	padding: 0.5rem 0.5rem 1rem 0.5rem;

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
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;

		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		${breakpoints.md} {
			font-size: 0.9rem;
		}

		${breakpoints.sm} {
			font-size: 0.6rem;
		}
	}
`;

// const Boxes = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   gap: 2rem;
//   flex-wrap: wrap;
//   margin-bottom: 2rem;
//
//   ${breakpoints.lg} {
//     gap: 1rem;
//   }
//
//   ${breakpoints.md} {
//     gap: 0.5rem;
//   }
//
// `;
//
// const CardContainer = styled.div`
//   position: relative;
//   height: 256px;
//   background-color: #f2f2f2;
//   border-radius: 8px;
//   overflow: hidden;
//   width: 30%;
//   margin-bottom: 1rem;
//   transition: all 0.2s ease-in-out;
//
//   @media (max-width: 1064px) {
//     width: 100%;
//     margin: 0.5rem auto;
//   }
//   @media (max-width: 991px) {
//     width: 40%;
//     margin: 0.5rem auto;
//   }
//
//   @media (max-width: 700px) {
//     width: 100%;
//   }
//
//   &:hover {
//     transform: scale(1.01);
//   }
// `;
//
//
// const CardBackground = styled.div`
//   width: 100%;
//   height: 100%;
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
// `;
//
// const CardContent = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   padding: 10px;
//   background-color: rgba(0, 0, 0, 0.6);
//   color: #fff;
// `;
//
// const Title = styled.h2`
//   font-size: 1rem;
//   margin-bottom: 8px;
//   font-weight: bold;
// `;
//
// const Description = styled.p`
//   font-size: 0.99rem;
//   font-style: italic;
// `;
//
// const CardIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   width: 30px;
//   height: 30px;
//   background-color: #fff;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//
//   svg {
//     font-size: 20px;
//     color: #000;
//
//   }
// `;
//
