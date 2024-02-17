import React, { useState } from "react";
import {
	Box,
	Flex,
	Container,
	Text,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Heading,
	List,
	ListItem,
	ListIcon,
	Button,
} from "@chakra-ui/react";
import Image from "next/image";
import HeroIMG from "../../../../../public/assets/consulting/big_data/hero.svg";
import styled from "styled-components";
import { sideBarData } from "./data";
import Link from "next/link";
import { breakpoints } from "../../../../../styles/theme";
import LogoMarquee from "../../../logoMarquee";
import { MdKeyboardArrowRight } from "react-icons/md";
import arrowLeft from "../../../../../public/assets/medicalSoftwarePage/arrowLeft.svg";
import arrowRight from "../../../../../public/assets/medicalSoftwarePage/arrowRight.svg";
import { IoIosCheckmark } from "react-icons/io";
import DataTestimonial from "../../../dataAnalytics/data_analytics_modernization/dataTestimonial";
import IncludeCard from "./includeCard";
import AllServices from "./allServices";
import appRoutes from "../../../../utils/appRoutes";
import { analyticsConsultingSummary } from "../../../dataAnalytics/analyticsConsulting/data";
import MobileFooter from "../../../mobileFoot";

const BigDataConsulting = ({ testimonials }) => {
	const [activeLink, setActiveLink] = useState({});
	return (
		<>
			<Box
				id={"it_asessment"}
				scrollMarginTop={"130px"}
				mt={"5rem"}
				minHeight={"100vh"}
			>
				<Box
					minHeight={{ base: "23vh", lg: "35vh" }}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					flexDirection={"column"}
					mb={{ base: "2rem" }}
					backgroundImage={{
						base: "none",
						lg: "/assets/headerbg.png",
					}}
					backgroundPosition={"center top"}
					backgroundRepeat={"no-repeat"}
					backgroundSize={"100%"}
					textAlign={{ base: "center" }}
				>
					<Text
						display={{ base: "none", lg: "block" }}
						textTransform={"uppercase"}
						fontSize={{ base: "18px", lg: "24px" }}
						textAlign={{ base: "center" }}
					>
						SERVICES
					</Text>
					<Heading
						as={"h6"}
						variant={"h5"}
						fontWeight={"bold"}
						textTransform={"uppercase"}
						fontSize={{ base: "18px", lg: "43px" }}
						px={{ base: "0.4rem" }}
					>
						Big data <Span>Consulting</Span>
					</Heading>
				</Box>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
					<HeroContent>
						<HeroText>
							<h1>Big Data Consulting</h1>
							<p>
								Reach out to our dedicated team of IT consultants to Consulting
								services on Big data consulting for advisory activities designed
								to offer businesses seeking to transform their data into a
								measurable value driver, expert advice and professional help.
							</p>
							<CtaButtons>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: {
											service: "services/it-consulting/big-data-consulting",
										},
									}}
									service="services/data_analytics"
								>
									{" "}
									<button className="request-services">
										Schedule a meeting
									</button>
								</Link>
								<Link
									href={{
										pathname: appRoutes.services["cost-calculator"],
										query: { service: "itConsulting-6" },
									}}
								>
									{" "}
									<button className="get-quote">get a quote</button>
								</Link>
							</CtaButtons>
						</HeroText>
						<Image
							style={{ position: "relative", top: "13px",margin:"0 auto" }}
							src={HeroIMG}
							alt="hero image"
							width={400}
							height={400}
							// className="hero-img"
						/>
					</HeroContent>

					<Flex gap={"2rem"} justify={"center"} mb={"3rem"} mt={"7rem"}>
						<Flex
							display={{ lg: "block", base: "none" }}
							flexDir="column"
							boxShadow={"lg"}
							height={"fit-content"}
							flex={1}
							minW={"310px"}
							position="sticky"
							top="10rem"
							pb={"1rem"}
							borderBottom={"lg"}
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
								textTransform={"uppercase"}
								background={
									"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
								}
							>
								big data consulting
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
						</Flex>

						<Box width={{base:"95vw",md:"100%"}}  px={"2rem"}>
							<Box

								// width={{base:"80%",md:"100%"}}
								mb={"2rem"}
								display={"flex"}
								flexDirection={"column"}
								// justifyContent={"center"}
								// alignItems={"center"}
							>
								<Text
									textAlign={{base:"center",md:"left"}}
									id={"included_packages"}
									scrollMarginTop={"150px"}
									color={"#333333"}
									fontSize={{base:"14px",md:"20px"}}

								>
									Big data consulting services are advisory activities designed
									to offer businesses seeking to transform their data into a
									measurable value driver, expert advice and professional help.
									Terabytes of fast-moving, wide-ranging data are collected,
									processed, and used by businesses with the aid of big data
									experts. At Tanta Innovatives, we use our years of experience
									in IT and data analytics to create cutting-edge big data
									ecosystems and enhance those that already exist. We are eager
									to impart our knowledge, whether you are developing a new
									disruptive software product or an enterprise solution.{" "}
								</Text>
							</Box>

							<Box
								id={"big_data_services"}
								scrollMarginTop={"130px"}
								mb={"20px"}
								maxW={"500px"}
							>
								<Text mb={"10px"} fontWeight={"700"} fontSize={{base:"15px",md:"29px"}}>
									End to End <Span>Big Data services</Span> we offer
								</Text>
								<Box width={"60px"} bg={"red"} height={"3px"}></Box>
							</Box>

							<IncludeCard />

							<Box
								width={"100%"}
								flex={3}
								mb={"2rem"}
								display={"flex"}
								flexDirection={"column"}
								// justifyContent={"center"}
								// alignItems={"center"}
							>
								<Box
									display={{base:"none",md:"block"}}
									w={"100%"}
									id={"reliable_partner"}
									scrollMarginTop={"150px"}
								>
									<Text fontWeight={"700"} fontSize={{base:"15px",md:"29px"}} maxWidth={"600px"}>
										What Makes <Span>Tanta Innovative</Span> a Reliable Partner
									</Text>
									<Box
										maxWidth={"60px"}
										bg={"red"}
										height={"3px"}
										mb={"20px"}
									></Box>
								</Box>
								<Text mb={"20px"} fontSize={{base:"12px",md:"20px"}}>
									Our belief is that with our technical expertise and IT
									Services, combined with your innovative vision, we can create
									tech systems that will help you scale up your business by
									making life easier for your audience.
								</Text>

								<Flex
									mt={"30px"}
									justifyContent={"center"}
									alignItems={"center"}
								>
									<Image src={arrowLeft} alt={"arrow left icon"} />
									<Box maxWidth={"1200px"} position={"relative"}>
										<Box whiteSpace={"nowrap"} overflow={"hidden"}>
											<div>
												<LogoMarquee colored={true} />
											</div>
										</Box>
									</Box>
									<Image src={arrowRight} alt={"arrow left icon"} />
								</Flex>

								<Box
									id={"customer_review"}
									scrollMarginTop={"150px"}
									maxW={"800px"}
								>
									<DataTestimonial testimonials={testimonials} />
								</Box>

								<Box  display={{base:"none",md:"block"}} id="summary" scrollMarginTop={"120px"}>
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
													fontSize={{ base:"15px", lg: "28px" }}
													// lineHeight="70px"
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
																fontSize={{base:"14px",md:"18px"}}
																padding={{ base: "8px 10px", lg: "16px 24px" }}
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
													<TabPanels fontSize={{base:"14px",md:"18px"}}>
														{item.cards.map((item, index) => (
															<TabPanel key={index}>
																<Text
																	fontWeight="700"
																	// fontSize={{ base: "16px", lg: "18px" }}
																	lineHeight="170%"
																	my={"1rem"}
																>
																	{item.title}
																</Text>
																<Text
																	fontWeight="400"
																	// fontSize={{ base: "16px", lg: "18px" }}
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
																				"services/it-consulting/big-data-consulting",
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

								<Box display={{base:"none",md:"block"}} id="consulting_services" scrollMarginTop={"150px"}>
									<AllServices />
								</Box>
							</Box>
						</Box>

					</Flex>

				</Container>
				<Box display={{base:"block",md:"none"}}>
					<MobileFooter/>
				</Box>
			</Box>
			{/*<Box>*/}
			{/*    <ContactUs subtitle='For Your Data Analytics Projects'/>*/}
			{/*</Box>*/}
		</>
	);
};

export default BigDataConsulting;

const Span = styled.span`
	color: red;
`;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;

	width: 100%;
	border-bottom: 1px solid rgba(217, 217, 217, 1);

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
			//padding-top: 2rem;
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
	justify-content: space-evenly;
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
		padding-top: 20px;
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
		font-size: 20px;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;

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
		background-color: #fff;
		color: #b10000;
		border-radius: 8px;
		border: 1px solid #b10000;
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
		background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
		border-radius: 8px;
		color: #fff;
		border: none;
		//background-color: #fff;
		//color: #b10000;
		//border: 1px solid #b10000;
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
