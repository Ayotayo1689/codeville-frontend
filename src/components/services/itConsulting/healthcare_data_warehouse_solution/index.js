import React, { useState } from "react";
import {
	Box,
	Container,
	Flex,
	Heading,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import Image from "next/image";
import HeroIMG from "../../../../../public/assets/consulting/healthcare_data_warehouse_solution/hero.svg";
import SolutionIMG from "../../../../../public/assets/consulting/healthcare_data_warehouse_solution/solution_img.svg";
import styled from "styled-components";
import { sideBarData, SolutionArchitecture } from "./data";
import Link from "next/link";
import { breakpoints } from "../../../../../styles/theme";
import LogoMarquee from "../../../logoMarquee";
import { MdKeyboardArrowRight } from "react-icons/md";
import arrowLeft from "../../../../../public/assets/medicalSoftwarePage/arrowLeft.svg";
import arrowRight from "../../../../../public/assets/medicalSoftwarePage/arrowRight.svg";
import { benefits, summary } from "../../../services/itConsulting/data";
import { IoIosCheckmark } from "react-icons/io";
import DataTestimonial from "../../../dataAnalytics/data_analytics_modernization/dataTestimonial";
import IncludeCard from "./includeCard";
import AllServices from "./allServices";
import appRoutes from "../../../../utils/appRoutes";

const HealthCareDataWarehouseSolution = ({ testimonials }) => {
	const [activeLink, setActiveLink] = useState({});
	return (
		<>
			<Box
				id={"package"}
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
						Healthcare data warehouse <Span>solution</Span>
					</Heading>
					<Text
						position={"relative"}
						top={{ base: "1rem", lg: "1.7rem" }}
						bgColor={"red"}
						width={"8rem"}
						height={".2rem"}
						textAlign={{ base: "center" }}
					></Text>
				</Box>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }}>
					<HeroContent>
						<HeroText>
							<h1>Healthcare Data Warehouse Solution</h1>
							<p>
								A healthcare data warehouse is a central location where data
								from various healthcare organizations is stored, processed, and
								organized for analytical querying and reporting. A DWH can aid
								with operational cost reduction, staff management, and clinical
								outcome optimization.
							</p>
							<CtaButtons>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: {
											service:
												"services/it-consulting/healthcare-data-warehouse-solution",
										},
									}}
									service="services/data_analytics"
								>
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
							src={HeroIMG}
							alt="hero image"
							width={400}
							height={400}
							className="hero-img"
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
								Healthcare Analytics
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

						<Box>
							<Box
								width={"100%"}
								flex={3}
								mb={"2rem"}
								display={"flex"}
								flexDirection={"column"}
								// justifyContent={"center"}
								// alignItems={"center"}
							>
								<Text
									id={"objective"}
									scrollMarginTop={"150px"}
									fontWeight={"700"}
									maxW={"500px"}
									fontSize={"30px"}
								>
									{" "}
									Healthcare Data <Span>
										Warehouse Solution Architecture
									</Span>{" "}
								</Text>
								<Text
									position={"relative"}
									top={{ base: "1rem", lg: ".5rem" }}
									bgColor={"red"}
									width={"4rem"}
									height={".2rem"}
								></Text>
							</Box>

							<Flex
								w={"110%"}
								flexWrap={"wrap"}
								gap={"50px"}
								justifyContent={"spa"}
								alignItems={"center"}
							>
								{SolutionArchitecture.map((item, index) => {
									return (
										<IncludeCard
											key={index}
											text={item.details}
											head={item.title}
										/>
									);
								})}
							</Flex>

							{/*<IncludeCard/>*/}

							<Box
								id={"customized_healthcare_solution"}
								scrollMarginTop={"80px"}
							></Box>

							<Flex
								bg={"rgba(253, 230, 231, 1)"}
								p={"20px"}
								flexDir={"column"}
								w={"fit-content"}
								justifyContent={"center"}
								minH={"450px"}
								m={"80px 0"}
								overflow={"hidden"}
							>
								<Box position={"relative"} top={"50px"}>
									<Text maxW={"400px"} fontSize={"30px"} fontWeight={"600"}>
										Get a Customized <Span>Healthcare Analytics Solution</Span>
									</Text>
									<Box w={"55px"} border={"2px solid red"}></Box>
								</Box>
								<Flex justifyContent={"center"} alignItems={"center"}>
									<Text
										color={"black"}
										fontWeight={"500"}
										zIndex={"1"}
										fontSize={"18px"}
										minW={"500px"}
										ml={"70px"}
									>
										To ensure the rapid distribution of analytics insights to
										target users (front-line healthcare staff, managers, health
										analysts, etc.), Tanta Innovatives data analytics
										professionals will assist you in designing and developing a
										comprehensive healthcare analytics solution. <br />{" "}
										<b>APPLICATION OF HEALTHCARE ANALYTICS IS REQUIRED</b>
									</Text>
									<Image
										src={SolutionIMG}
										style={{ position: "relative", right: "40px" }}
										alt={"solution-image"}
									/>
								</Flex>
							</Flex>

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
									w={"100%"}
									id={"reliable_partner"}
									scrollMarginTop={"150px"}
								>
									<Text fontWeight={"700"} fontSize={"29px"} maxWidth={"600px"}>
										What Makes <Span>Tanta Innovative</Span> a Reliable Partner
									</Text>
									<Box
										maxWidth={"60px"}
										bg={"red"}
										height={"3px"}
										mb={"20px"}
									></Box>
								</Box>
								<Text mb={"20px"} fontSize={"20px"}>
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

								<Box id="summary" scrollMarginTop={"120px"}>
									<Summary>
										<div className="summary">
											<h2>summary</h2>
											<h3>
												Take a Moment to Know <span>Tanta Innovative</span>{" "}
												Better
											</h3>
											<div></div>
										</div>

										<Box my={"1.5rem"}>
											<Tabs>
												<TabList
													justifyContent={"space-between"}
													gap={"1rem"}
													borderColor={"#B60E09"}
												>
													{summary.map((item, index) => {
														return (
															<Tab
																key={index}
																borderRadius={"0.5rem 0.5rem 0 0"}
																fontWeight={"semibold"}
																_selected={{
																	backgroundColor: "#B60E09",
																	color: "white",
																}}
																fontSize={{
																	base: "0.8rem",
																	sm: "0.8rem",
																	md: "0.8rem",
																	lg: "1.2rem",
																}}
															>
																{item}
															</Tab>
														);
													})}
												</TabList>

												<TabPanels>
													<TabPanel>
														<ListItems>
															<Text
																fontSize={{
																	md: "1rem",
																	lg: "1.2rem",
																}}
															>
																Leverage agile frameworks to provide a robust
																synopsis for high level overviews. Iterative
																approaches to corporate
															</Text>

															<ul>
																{benefits.map((benefit, index) => (
																	<li key={index}>
																		<IoIosCheckmark className="icon" />
																		{benefit}
																	</li>
																))}
															</ul>

															<Link href={"/"}>
																<button> Get Started</button>
															</Link>
														</ListItems>
													</TabPanel>

													<TabPanel>
														<ListItems>
															<Text
																fontSize={{
																	md: "1rem",
																	lg: "1.2rem",
																}}
															>
																Leverage agile frameworks to provide a robust
																synopsis for high level overviews. Iterative
																approaches to corporate
															</Text>

															<ul>
																{benefits.map((benefit, index) => (
																	<li key={index}>
																		<IoIosCheckmark className="icon" />
																		{benefit}
																	</li>
																))}
															</ul>

															<Link href={"/"}>
																<button> Get Started</button>
															</Link>
														</ListItems>
													</TabPanel>

													<TabPanel>
														<ListItems>
															<Text
																fontSize={{
																	md: "1rem",
																	lg: "1.2rem",
																}}
															>
																Leverage agile frameworks to provide a robust
																synopsis for high level overviews. Iterative
																approaches to corporate
															</Text>

															<ul>
																{benefits.map((benefit, index) => (
																	<li key={index}>
																		<IoIosCheckmark className="icon" />
																		{benefit}
																	</li>
																))}
															</ul>

															<Link href={"/"}>
																<button> Get Started</button>
															</Link>
														</ListItems>
													</TabPanel>
												</TabPanels>
											</Tabs>
										</Box>
									</Summary>
								</Box>

								<Box id="consulting_services" scrollMarginTop={"150px"}>
									<AllServices />
								</Box>
							</Box>
						</Box>
					</Flex>
				</Container>
			</Box>
			{/*<Box>*/}
			{/*    <ContactUs subtitle='For Your Data Analytics Projects'/>*/}
			{/*</Box>*/}
		</>
	);
};

export default HealthCareDataWarehouseSolution;

const Span = styled.span`
	color: #e9000e;
`;

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
		font-size: 33px;
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
		font-size: 22px;
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

const Summary = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 4rem;

	${breakpoints.lg} {
		margin-top: 4rem;
	}

	.summary {
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
	}
`;

const ListItems = styled.div`
	ul {
		list-style: none;
		padding: 0;
		margin-left: 1rem;
		margin-top: 1.5rem;

		${breakpoints.lg} {
			margin-left: 0;
		}

		li {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 1.12rem;
			font-weight: 400;
			color: #303030;
			margin-bottom: 0.5rem;
			text-align: left;

			${breakpoints.lg} {
				font-size: 1rem;
			}

			${breakpoints.md} {
				font-size: 0.85rem;
			}
		}
	}

	button {
		background: #e9000e;
		border-radius: 8px;
		border: none;
		padding: 0.5rem 2.5rem;
		font-size: 1rem;
		font-weight: 600;
		color: #fff;
		margin-top: 1rem;
	}
`;
