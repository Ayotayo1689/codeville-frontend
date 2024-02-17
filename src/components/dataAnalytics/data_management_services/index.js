import React, { useState } from "react";
import { Box, Flex, Container, Text } from "@chakra-ui/react";
import Image from "next/image";
import ListIcon from "../../../../public/assets/medicalSoftwarePage/ListIcon.svg";
import HeroIMG from "../../../../public/assets/dataAnalytics/dataManagementServices/hero.svg";
import styled from "styled-components";
import { dataManagementData, sideBarData } from "./data";
import Link from "next/link";
import { breakpoints } from "../../../../styles/theme";
import HeaderOne from "../../HeaderOne";
import LogoMarquee from "../../logoMarquee";
import ContactUs from "../../contactUs";
import { MdKeyboardArrowRight } from "react-icons/md";
import arrowLeft from "../../../../public/assets/medicalSoftwarePage/arrowLeft.svg";
import arrowRight from "../../../../public/assets/medicalSoftwarePage/arrowRight.svg";
import DataTestimonial from "../data_analytics_modernization/dataTestimonial";
import DataProgram from "../../../../public/assets/dataAnalytics/dataManagementServices/dataProgram.svg";
import ManagementTech from "./managementProgramCard";
import DataManagementCategory from "./dataManagementCategory";
import CooperationModel from "./cooperationModel";
import ChallengesWeSolve from "./challengesWeSolve";
import appRoutes from "../../../utils/appRoutes";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

const wordsToStyle = [
	"Governance",
	"Integration",
	"Architecture",
	"Management",
	"Quality",
	"Security",
	"Storage",
];

const DataManagementServices = ({ testimonials }) => {
	const [activeLink, setActiveLink] = useState({});
	return (
		<>
			<Box mt={"5rem"} minHeight={"100vh"}>
				<HeaderOne
					heading={"data analytics"}
					title={"Data Management Services"}
				/>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
					<HeroContent>
						<HeroText>
							<h1 style={{ maxWidth: "500px" }}>
								Turn your data into a strategic asset with our expert services.
							</h1>
							<p>
								Data analytics implies building an infrastructure for data
								aggregation, analysis, and reporting. An experienced provider of
								data analytics services, ScienceSoft delivers on simple and
								complex needs with tailored business analytics solutions.{" "}
							</p>
							<CtaButtons>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: {
											service:
												"services/data-analytics/data_management_services",
										},
									}}
									service="services/data_analytics/data_management_services"
									className="request-services"
								>
									{" "}
									<button className="request-services">
										Request analytics services
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
							minW={"300px"}
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
							<Box w={"100%"} id={"About_us"} scrollMarginTop={"150px"}>
								<Text
									fontWeight={"700"}
									fontSize={{lg:"29px", base:"20px"}}
									mb={"15px"}
									maxWidth={"800px"}
								>
									Why Choose Us for <Span>Data Management</Span>
								</Text>
								<Box
									maxWidth={{lg:"120px", base:"50px"}}
									bg={"red"}
									height={"4px"}
									mb={"20px"}
								></Box>
							</Box>

							<DataManagementCategory />

							<Box
								w={"100%"}
								mt={"50px"}
								id={"Data_Management"}
								scrollMarginTop={"150px"}
							>
								<Text
									fontWeight={"700"}
									fontSize={{lg:"29px", base:"20px"}}
									mb={"15px"}
									maxWidth={"800px"}
								>
									<Span>Tanta Innovative </Span>Data Management Program
								</Text>
								<Box
									maxWidth={"120px"}
									bg={"red"}
									height={"4px"}
									mb={"20px"}
								></Box>
							</Box>
							<Text mb={"40px"} fontSize={{lg:"20px", base:"16px"}}>
								We deploy a comprehensive data management program to effectively
								handle your corporate data at every stage, incorporating the
								following components:
							</Text>

							<Image src={DataProgram} alt={"DataProgram"} />

							<Flex flexWrap={"wrap"} mt={"30px"} gap={"30px"}>
								{dataManagementData.map((item, index) => {
									const words = item.title.split(" ");
									return (
										<Box
											p={"20px 25px"}
											fontSize={"22px"}
											key={index}
											boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
											w={"max-content"}
											borderRadius={"8px"}
											minW={"45%"}
											maxWidth={"350px"}
											maxH={"400px"}
										>
											<Text fontWeight={"700"} key={index} fontSize={{lg:"20px", base:"18px"}}>
												{words.map((word, wordIndex) => {
													const isHighlighted = wordsToStyle.includes(word);
													return (
														<Span
															key={wordIndex}
															style={{
																color: isHighlighted ? "red" : "black",
															}}
														>
															{word}{" "}
														</Span>
													);
												})}
											</Text>
											<Box mb={"20px"} w={{lg:"60px", base:"40px"}} bg={"red"} h={"3px"}></Box>
											<Box>
												{item.details.map((item, index) => {
													return (
														<Flex alignItems={"start"} key={index} mb={"10px"}>
															<Image
																style={{ margin: "10px 15px" }}
																src={ListIcon}
																alt={"jh"}
															/>
															<Text fontSize={"15px"}>{item}</Text>
														</Flex>
													);
												})}
											</Box>
										</Box>
									);
								})}
							</Flex>

							<Box id={"Challenges_We_Solve"} scrollMarginTop={"130px"}>
								<ChallengesWeSolve />
							</Box>

							<Box id={"Cooperation_model"} scrollMarginTop={"80px"}>
								<CooperationModel />
							</Box>

							<Box id={"Technologies_We_Use"} scrollMarginTop={"100px"}>
								<ManagementTech />
							</Box>

							<Box>
								<Box
									id={"Success_Stories"}
									scrollMarginTop={"130px"}
									w={"100%"}
									m={"80px 0 30px 0"}
								>
									<Text fontSize={{lg:"18px", base:"16px"}} color={"#636363"}>
										OUR CUSTOMERS
									</Text>
									<Text
										mb={"15px"}
										fontWeight={"700"}
										fontSize={{lg:"29px", base:"22px"}}
										maxWidth={"650px"}
									>
										Valued Customer Base
									</Text>
									<Box
										maxWidth={{lg:"120px", base:"60px"}}
										bg={"red"}
										height={"4px"}
										mb={"20px"}
									></Box>
								</Box>
								<Text fontSize={"20px"} maxW={"750px"}>
									Tanta Innovatives is a leading provider of IT consulting and
									software development services that has helped businesses
									across multiple industries succeed. Our
								</Text>
							</Box>

							<Flex mt={"30px"} justifyContent={"center"} alignItems={"center"}>
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

							<Box id="testimonials" maxW={"800px"} scrollMarginTop={"100px"}>
								<DataTestimonial testimonials={testimonials} />
							</Box>

							< HandpickedProject/>
						</Box>
					</Flex>
				</Container>
			</Box>
			<Box>
				<ContactUs subtitle="For Your Data Analytics Projects" />
			</Box>
		</>
	);
};

export default DataManagementServices;

const Span = styled.span`
	color: red;
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
