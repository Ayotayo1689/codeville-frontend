import React, { useState } from "react";
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Container,
	Flex,
	Grid, Heading,
	List,
	ListIcon,
	ListItem,
	Text,
} from "@chakra-ui/react";
import HeaderOne from "../HeaderOne";
import styled from "styled-components";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
	BestValue,
	CardsData,
	Consulting,
	EcosystemSetUP,
	Experience,
	IotSideBarData,
} from "./data";
import Link from "next/link";

import Banner from "./banner";
import LogoMarquee from "../../components/logoMarquee";
import { BsFillSquareFill } from "react-icons/bs";
import appRoutes from "../../utils/appRoutes";
import {breakpoints} from "../../../styles/theme";

function IotServices() {
	const [expandedAccordionId, setExpandedAccordionId] = useState(-1);

	const handleAccordionToggle = (accordionId) => {
		setExpandedAccordionId((prevAccordionId) => {
			return prevAccordionId === accordionId ? -1 : accordionId;
		});
	};
	const [activeLink, setActiveLink] = useState({});
	return (
		<>
			<Box
				mt={"5rem"}
				minHeight={"100vh"}
			>
				<HeaderOne heading={"Services"} title={"INTERNET OF THINGS (IOT)"} />
				<Container maxW={"7xl"} px={{ lg: "5rem", sm:"2rem", base: "1rem"}}>
					{/* ================= header section ================= */}
					<Flex
						mb={"1rem"}
						justifyContent={"center"}
						alignItems={"center"}
						gap={{lg:"4rem", base:"2rem"}}
						flexDir={{ base: "column-reverse", md: "row", lg: "row" }}
					>
						<Flex
							flexDirection={"column"}
							gap={"15px"}
							alignItems={{lg: "flex-start", base: "none"}}
							justifyContent={"center"}
						>
							<Box
								borderLeft={"3px solid #FF0000"}
								px={"1rem"}
								w={{base: "298px", md: "25rem", lg: "596px", }}
							>
								<Heading
									fontSize={{lg: "38px", base: "20px"}}
									textAlign={{lg: "left", base: "left"}}
									color={"#1F1F1F"}
								>
									On a Mission to Build Sustainable Future
								</Heading>
							</Box>
							<Text
								textAlign={{lg: "left", base: "left"}}
								color={"#333333"}
								lineHeight={{lg:"170%", base:"150%"}}
								px={".5rem"}
								fontSize={{lg: "20px", base: "15px"}}
								fontWeight={"400"}
								w={{base: "353px", md: "25rem", lg: "563px", }}
								mb={{base: "0", md: "2rem", lg: "3rem", }}
							>
								At Tanta innovative, we drive value-centered IoT solutions
								and build multi-level data pipelines for that: from edge
								computing to cloud data processing and data science.
							</Text>
							<CtaButtons>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: { service: "services/iot-services" },
									}}
									service="services/iot_services"
									className="request-services"
								>
									{" "}
									<button className="request-services">
										Request a robust financial software
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
										REQUEST IOT SERVICES
									</button>
								</Link>
								<Link
									href={{
										pathname: appRoutes.services["cost-calculator"],
										query: { service: "iotServices-8" },
									}}
								>
									{" "}
									<button className="get-quote">get a quote</button>
								</Link>
							</CtaButtons>
						</Flex>
						<Box width={{lg: "75%", base: "50%"}} paddingTop={{lg: "0", base: ".5rem"}}>
							<Image
								src={"/assets/iotServices/HeroImg.png"}
								alt="hero image"
								width={400}
								height={200}
							/>
						</Box>
					</Flex>


					<Flex gap={"3rem"} justify={"center"} mb={"7rem"} mt={{lg:"4rem", base:"2rem"}}>
							{/*====================Sticky sidebarSection====================================*/}
							<Flex
								flexDir="column"
								boxShadow={"lg"}
								height="20.2rem"
								flex={1}
								display={{ base: "none", lg: "flex" }}
								minW={"300px"}
								position={{ base: "", lg: "sticky" }}
								top="10rem"
								pb={"1rem"}
								borderBottom={"lg"}
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
									background={"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"}
								>
									IoT Services
								</Text>
								<Box px={"1rem"}>
									{IotSideBarData.map((item, index) => {
										return (
											<Flex
												justifyContent={"space-between"}
												alignItems={"center"}
												key={index}
												p={".3rem"}
											>
												<Link
													onClick={() => {
														setActiveLink({ [item.link]: true });
													}}
													style={{
														color: activeLink[item.goto] ? "red" : "",
														fontSize: "18px",
														fontWeight: "400",
														cursor: "pointer",
														width: "100%",
													}}
													href={item.link}
												>
													{item.title}
												</Link>

												<MdKeyboardArrowRight
													cursor={"pointer"}
													size={"2rem"}
													style={{marginLeft: "47px"}}
												/>
											</Flex>
										);
									})}
								</Box>
							</Flex>

							<Box
								width={{base: "100%", lg: "100%"}}
							>
								{/* ===========Why Choose Tanta Innovatives============*/}

								<Box
									width={{base: "100%", lg: "100%"}}
									id="whychoosetanata"
									scrollMarginTop={"150px"}
								>
									<Text
										fontSize={{lg: "28px", base: "20px"}}
										fontWeight={"700"}
										mt={{lg:"1rem", base:"0"}}
										color={"#404243"}
									>
										Why Choose{" "}
										<Text as="span" color=" #E9000E">
											Tanta Innovatives
										</Text>
									</Text>
									<div
										style={{
											width: "3rem",
											height: "3px",
											background: "#ff0000",
											marginTop: "1rem",
											marginBottom: " 2rem ",
										}}
									></div>

									<Text fontSize={{lg: "20px", base: "15px"}} mt={"0.5rem"}>
										Internet of Things (IoT) services help elaborate your idea
										of IoT adoption and set up secure technology infrastructure
										for advanced data tasks. Seeing a great and wide-ranging
										value of IoT, we apply the technology for a number of key
										purposes.
									</Text>
								</Box>

								<Box
									alignItems={"center"}
									display={{ base: "none", md: "block" }}
									mt={"1rem"}
								>
									<Grid
										gridTemplateColumns={{
											base: "none",
											lg: "1fr 1fr",
											md: "1fr 1fr",
											sm: "none",
										}}
										justifyContent={"center"}
										flexDir={{ base: "column", lg: "row" }}
									>
										{CardsData.map((item, index) => (
											<Box
												m="15px"
												display="flex"
												border="2px solid rgba(0, 0, 0, 0.3)"
												borderRadius="10px"
												flexDir="column"
												key={index}
											>
												<Flex
													borderBottom={"2px solid rgba(0, 0, 0, 0.3)"}
													p="20px 15px"
													align={"center"}
												>
													<Image
														src={item?.image}
														alt="icons"
														style={{ width: "60px", height: "60px" }}
													/>
													<Text
														fontWeight="600"
														fontSize="18px"
														lineHeight="30px"
														color={"#303030"}
														ml={"15px"}
													>
														{item?.title}
													</Text>
												</Flex>
												<Flex p={" 20px 15px"} flexDir={"column"}>
													<Text
														mb={"10px"}
														fontWeight="400"
														fontSize="18px"
														lineHeight="170%"
														color="#000000"
													>
														{item?.text}
													</Text>
													<Text
														display={"flex"}
														alignItems={"center"}
														fontWeight="400"
														fontSize="18px"
														lineHeight="170%"
														color="#E9000E"
													>
														{item?.footer}
													</Text>
												</Flex>
											</Box>
										))}
									</Grid>
								</Box>

								<Accordion
									allowToggle
									display={{ base: "block", md: "none", lg: "none" }}
									mt={"2rem"}
									p={"1rem 0"}

								>
									{CardsData.map((item, index) => (
										<AccordionItem
											mb={"1rem"}
											display="flex"
											border="2px solid rgba(0, 0, 0, 0.3)"
											borderRadius="10px"
											flexDir="column"
											justifyContent={"center"}
											key={index}

										>
											<AccordionButton
												onClick={() => {
													handleAccordionToggle(index);
												}}
											>
												<Flex
													borderBottom={
														expandedAccordionId === index
															? ("2px solid rgba(0, 0, 0, 0.3)")
															: ("none")
													}
													p="20px 15px"
													align={"center"}
													justifyContent={"center"}
													alignItems={"center"}
													gap={"2rem"}
												>
													<Image
														src={item?.image}
														alt="icons"
														style={{ width: "50px", height: "50px" }}
													/>
													<Text
														fontWeight="600"
														fontSize="16px"
														lineHeight="30px"
														color={"#303030"}
													>
														{item?.title}
													</Text>
												</Flex>
											</AccordionButton>

											<AccordionPanel
												pb={4}
												isExpanded={expandedAccordionId === index}
											>
												<Flex p={" 20px 10px"} flexDir={"column"}>
													<Text
														mb={"10px"}
														fontWeight="400"
														fontSize="14px"
														lineHeight="170%"
														color="#000000"
													>
														{item?.text}
													</Text>
													<Text
														display={"flex"}
														alignItems={"center"}
														fontWeight="400"
														fontSize="14px"
														lineHeight="170%"
														color="#E9000E"
													>
														{item?.footer}
													</Text>
												</Flex>
											</AccordionPanel>
										</AccordionItem>
									))}
								</Accordion>
								{/* ================== banner.js section ==================  */}
								<Banner />

								<Box
									color="#414141"
									fontWeight={"700"}
									fontSize={{lg: "26px", base: "22px"}}
									p={{ base: "1rem", md: "0", lg: "0" }}
									id="fromplantolaunch"
									scrollMarginTop={"150px"}
								>
									<Text fontSize={{lg: "26px", base: "22px"}}>From Planning to Launch</Text>
									<div
										style={{
											width: "3rem",
											height: "3px",
											background: "#ff0000",
										}}
									></div>
									We Hand You a Turnkey IoT Solution
								</Box>
								<Box
									borderRadius="27px"
									flexDir="column"
									border="1px"
									borderColor="red"
									bg={"rgba(217, 217, 217, 0.23)"}
									mt={"2rem"}
								>
									<Text
										color={"#3A393A"}
										fontSize={{lg: "24px", base: "20px"}}
										fontWeight={"700"}
										p="2rem  2rem 0 2rem"
									>
										Consulting for the best value from IoT adoption
									</Text>
									<div
										style={{
											width: "3rem",
											height: "3px",
											background: "#ff0000",
											marginLeft: "2rem",
											marginBottom: " 2rem ",
										}}
									></div>

									<List spacing={4} paddingBlock={"1rem"}>
										{Consulting.map((item, index) => (
											<ListItem key={index}>
												<Flex p="0.5rem 2rem" gap={"1rem"}>
													<ListIcon
														as={BsFillSquareFill}
														color="red"
														mt={"0.6rem"}
														width={"10px"}
														height={"10px"}
													/>
													<Text  fontSize={{lg: "20px", base: "17px"}}>{item}</Text>
												</Flex>
											</ListItem>
										))}
									</List>
								</Box>

								<Box
									borderRadius="27px"
									flexDir="column"
									border="1px"
									borderColor="#22AE16"
									bg={"rgba(217, 217, 217, 0.23)"}
									mt={"2rem"}
								>
									<Text
										color={"#3A393A"}
										fontSize={{lg: "24px", base: "20px"}}
										fontWeight={"700"}
										p="2rem  2rem 0 2rem"
									>
										IoT ecosystem setup: data collection, analysis and
										presentation
									</Text>
									<div
										style={{
											width: "3rem",
											height: "3px",
											background: "#22AE16",
											marginLeft: "2rem",
											marginBottom: " 2rem ",
										}}
									></div>
									<List spacing={5} paddingBlock={"1rem"} position={"relative"}>
										{EcosystemSetUP.map((item, index) => (
											<ListItem key={index}>
												<Flex p="0.5rem 2rem" gap={"1rem"}>
													<ListIcon
														as={BsFillSquareFill}
														color="#22AE16"
														mt={"0.6rem"}
														width={"10px"}
														height={"10px"}
													/>
													<Text fontSize={{lg: "20px", base: "17px"}}>{item}</Text>
												</Flex>
											</ListItem>
										))}
									</List>
								</Box>

								<Box
									borderRadius="27px"
									flexDir="column"
									border="1px"
									borderColor="#0061B2"
									bg={"rgba(217, 217, 217, 0.23)"}
									mt={"2rem"}
								>
									<Text
										color={"#3A393A"}
										fontSize={{lg: "24px", base: "20px"}}
										fontWeight={"700"}
										p="2rem  2rem 0 2rem"
									>
										Consulting for the best value from IoT adoption
									</Text>
									<div
										style={{
											width: "3rem",
											height: "3px",
											background: "#0061B2",
											marginLeft: "2rem",
											marginBottom: " 2rem ",
										}}
									></div>

									<List spacing={5} paddingBlock={"1rem"} position={"relative"}>
										{BestValue.map((item, index) => (
											<ListItem key={index}>
												<Flex p="0.5rem 2rem" gap={"1rem"}>
													<ListIcon
														as={BsFillSquareFill}
														color="#0061B2"
														mt={"0.6rem"}
														width={"10px"}
														height={"10px"}
													/>
													<Text fontSize={{lg: "20px", base: "17px"}}>{item}</Text>
												</Flex>
											</ListItem>
										))}
									</List>
								</Box>
								<Box id="ouriotarchitecture" scrollMarginTop={"150px"}>
									<Text
										textAlign={"center"}
										color={"#3A393A"}
										fontSize={"1.5rem"}
										fontWeight={"700"}
										mt={{lg:"3rem", base:"2rem"}}
										mb={{lg:"3rem", base:"1.5rem"}}
									>
										Our IoT Architecture
									</Text>
									<IotEcosystem>
										<Image
											src={"/assets/iotServices/iotEcosystem.png"}
											alt=" image"
											width={500}
											height={300}
											className="iot-ecosystem-image"
										/>
									</IotEcosystem>
								</Box>

								<Box p={{ base: "2rem", md: "0", lg: "0" }}>
									<Text
										fontSize={"1.4rem"}
										fontWeight={"600"}
										mt={"3rem"}
										borderBottom={"1rem"}
									>
										<Text as="span" color=" #E9000E">
											Trust Our Experience
										</Text>{" "}
										Speaks Of Our IoT Value after.
									</Text>

									<div
										style={{
											width: "6rem",
											height: "2px",
											background: "red",
											marginBottom: " 2rem ",
										}}
									></div>
									<LogoMarquee colored={true} />
								</Box>
								<Box>
									<Box id="trustourexperience" scrollMarginTop={"250px"}>
										<List
											spacing={1}
											paddingBlock={"1rem"}
											position={"relative"}
										>
											{Experience.map((item, index) => (
												<ListItem key={index}>
													<Flex p="0.5rem 2rem" gap={".5rem"}>
														<ListIcon
															as={BsFillSquareFill}
															color="red"
															mt={"0.6rem"}
															width={"10px"}
															height={"10px"}
														/>
														<Text fontSize={{lg: "20px", base: "16px"}}>{item}</Text>
													</Flex>
												</ListItem>
											))}
										</List>
									</Box>
								</Box>
								<Banner />
							</Box>
						</Flex>

				</Container>
			</Box>
		</>
	);
}

export default IotServices;

const IotEcosystem = styled.div`
	.iot-ecosystem-image {
		width: 100vw;
		margin: auto;
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
		flex-direction: row;
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
		@media (max-width: 600px) {
			display: none;
		}

		@media (min-width: 768px) and (max-width: 1023px) {
			display: none;
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
		@media (min-width: 768px) and (max-width: 1023px) {
			padding: 0.7rem 2rem;
		}

		&:hover {
			background-color: #b10000;
			color: #fff;
		}
	}
	.mobile-request-services{
		display: none;
		@media (max-width: 600px)  {
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
			min-width: 150px;
			height: 50px;

		

			${breakpoints.lg} {
				font-size: 0.7rem;
			}

			

			&:hover {
				opacity: 0.8;
			}
		}
		@media (min-width: 768px) and (max-width: 1023px) {
			background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
			border-radius: 8px;
			color: #fff;
			border: none;
			font-size: 14px;
			font-weight: 500;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.2rem;
			cursor: pointer;
			text-transform: uppercase;
			width: 190px;
			height: 45px;
		}
`;

