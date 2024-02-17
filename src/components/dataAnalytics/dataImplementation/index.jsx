import React from "react";
import HeaderOne from "../../HeaderOne";
import {
	Box,
	Container,
	Text,
	Button,
	Image,
	Flex,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	List,
	ListItem,
	ListIcon, useMediaQuery, Hide,
} from "@chakra-ui/react";
import Link from "next/link";
import styled from "styled-components";
import Content from "./content";
import LogoMarquee from "../../logoMarquee";
import {
	aboutTanta,
	benefitsCardData,
	modernization,
	modernizationCardData,
} from "./data";
import { colors } from "../../../../styles/theme";
import { IoIosCheckmark } from "react-icons/io";
import TantaTestimonial from "../../tantaTestimonials";
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from "react-icons/md";
import ContactUs from "../../contactUs";
import appRoutes from "../../../utils/appRoutes";
import { analyticsConsultingSummary } from "../analyticsConsulting/data";
import {HeroHeader, DataImplementationServices}from "./mobile";
import HandpickedProject from "../handpickedProject";



const DataImplementation = ({ testimonials,cases }) => {
	const [isMobile] = useMediaQuery("(max-width: 720px)");
	return (
		<>
			<Box mt={{ base: "5rem", lg: "7rem" }}>
				<HeaderOne heading={"data analytics"} title={"data implementation"} />
			</Box>
			<Container maxW={"7xl"} mb={"1rem"} bg={{ base: "#F7F2FA", lg: "white" }}>
				{isMobile ? (<HeroHeader/>) : (
					<Flex gap={"2rem"} display={{ base: "grid", lg: "flex" }}>
				<Box w={{ base: "100%", lg: "50%" }}>
					<HeroText>
						<h1>
							Data implementation services
							<span style={{ display: "block" }}>
									tailored to your requirements
								</span>
						</h1>
					</HeroText>
					<Text
						p={{ base: "2", lg: "8" }}
						lineHeight={{ base: "6", lg: "8" }}
					>
						Enhance your data capabilities with our top-notch Data
						Implementation services. Our IT firm provides seamless data
						integration, migration, and implementation solutions to optimize
						your business processes and drive actionable insights.
					</Text>
					<Flex
						gap={"0.5rem"}
						textTransform={"uppercase"}
						paddingBottom={{ base: "2", lg: "8" }}
						flexWrap={"wrap"}
						justifyContent={{base:"center"}}
					>
						<Link
							href={{
								pathname: appRoutes.contactUs,
								query: {
									service: "services/data-analytics/data-implementation",
								},
							}}
						>
							<Button
								textTransform={"uppercase"}
								px={{ base: "0.5rem", lg: "2.5rem" }}
								fontSize={"lg"}
								background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
								color={"white"}
								_hover={"none"}
							>
								Request implementation services
							</Button>
						</Link>
						<Link
							href={{
								pathname: appRoutes.services["cost-calculator"],
								query: { service: "dataAnalytics-7" },
							}}
						>
							<Button
								textTransform={"uppercase"}
								px={{ base: "0.5rem", lg: "2.5rem" }}
								fontSize={"lg"}
								border={"2px"}
								borderColor={"#e60000"}
								bg={"white"}
								color={"#e60000"}
								_hover={"none"}
							>
								get a quote
							</Button>
						</Link>
					</Flex>
				</Box>
				<Image
					src={"/assets/dataAnalytics/Consulting-pana.png"}
					alt="hero image"
					width={500}
				/>
			</Flex>
					) }

				<Flex gap={"5rem"} py={{ base: "2", lg: "10" }}>
					<Content />
					<Box w={{ base: "100%", lg: "70%" }}>
						<Box
							id="whyTanta"
							scrollMarginTop={"150px"}
							width={"100%"}
							flex={3}
							mb={"2rem"}
							display={"flex"}
							flexDirection={"column"}
						>
							<Hide below={"sm"}>
								<Text
									color={"#636363"}
									textTransform={"uppercase"}
									fontSize={"18px"}
								>
									about us
								</Text>
							</Hide>
							<Box w={"100%"}>
							{isMobile ? (
									<Text
										fontWeight={"700"}
										fontSize={{ base: "lg", lg: "3xl" }}
										pb={"1rem"}
										textAlign={"center"}
									>
										Why choose us for
										<span style={{ color: `${colors.primaryColor}`}}>{" "}
										 Data Management
									</span>
									</Text>
								) : (
									<Box>
										<Text
											fontWeight={"700"}
											fontSize={{ base: "lg", lg: "3xl" }}
											pb={"1rem"}
										>
											What Makes{" "}
											<span style={{ color: `${colors.primaryColor}` }}>
										Tanta Innovative
									</span>{" "}
											a Trustworthy Partner
										</Text>
										<Box w={"4rem"} bg={"red"} height={"4px"} mb={"20px"}></Box>
									</Box>
							)}
							</Box>

							<Text mb={"20px"} fontSize={{ base: "1rem", lg: "20px" }}>
								Tanta Innovatives is a leading provider of IT consulting and
								software development services that has helped businesses across
								multiple industries succeed. Our{" "}
							</Text>
							{aboutTanta.map((item, i) => {
								return (
									<Flex key={i} gap={3} p={"5px"}>
										<div
											style={{
												backgroundColor: "#E9000E",
												width: "10px",
												minWidth: "10px",
												minHeight: "10px",
												height: "10px",
												marginTop: "0.6rem",
											}}
										></div>
										<Text fontSize={{ base: "1rem", lg: "20px" }}>{item}</Text>
									</Flex>
								);
							})}
							{isMobile ? "" : (
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
							)}
							{isMobile ? (<DataImplementationServices/>) : (
								<Box>
									<Box
										id={"Services"}
										scrollMarginTop={"150px"}
										w={"100%"}
										mt={"50px"}
									>
										<Text
											fontWeight={"700"}
											fontSize={{ base: "lg", lg: "4xl" }}
											pb={"5px"}
										>
											Data Implementation Services by{" "}
											<span style={{ color: `${colors.primaryColor}` }}>
										Tanta Innovative
									</span>
										</Text>
										<Box bg={"red"} height={"3px"} mb={"20px"} w={"7rem"}></Box>
									</Box>
									<Text mb={"20px"} fontSize={{ base: "1rem", lg: "20px" }}>
										Optimize your data processes with Tanta Innovative's Data
										Implementation Services. Seamlessly integrate, migrate, and
										implement data solutions for actionable insights.
									</Text>
									{modernization.map((item, i) => {
										return (
											<Flex key={i} mb={"10px"} gap={3} p={"5px"}>
												<div
													style={{
														backgroundColor: "#E9000E",
														width: "10px",
														minWidth: "10px",
														minHeight: "10px",
														height: "10px",
														marginTop: "0.6rem",
													}}
												></div>
												<Text fontSize={{ base: "1rem", lg: "20px" }}>{item}</Text>
											</Flex>
										);
									})}

									<Flex
										flexWrap={"wrap"}
										mt={"30px"}
										gap={"30px"}
										justifyContent={"center"}
									>
										{modernizationCardData.map((item, index) => {
											return (
												<Box
													p={"20px 25px"}
													key={index}
													border={"1px solid rgba(0, 0, 0, 0.5)"}
													w={"max-content"}
													borderRadius={"8px"}
													minW={"45%"}
													maxWidth={"350px"}
													h={"300px"}
												>
													<Text
														mb={"20px"}
														fontSize={{ base: "lg", lg: "2xl" }}
														fontWeight={"600"}
													>
														{item.title}
													</Text>
													<Box>
														{item.details.map((item, index) => {
															return (
																<Flex key={index} mb={"10px"} gap={3}>
																	<div
																		style={{
																			backgroundColor: "#E9000E",
																			width: "10px",
																			minWidth: "10px",
																			minHeight: "10px",
																			height: "10px",
																			marginTop: "0.5rem",
																		}}
																	></div>
																	<Text fontSize={"15px"}>{item}</Text>
																</Flex>
															);
														})}
													</Box>
												</Box>
											);
										})}
									</Flex>
								</Box>
							)}
						</Box>
						<Flex alignItems={"center"} justifyContent={"center"}>
							<Link
								href={{
									pathname: appRoutes.contactUs,
									query: {
										service: "services/data-analytics/data-implementation",
									},
								}}
								service="services/data-analytics/data-implementation"
								className="request-services"
							>
								<Button
									background={
										"linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%)"
									}
									boxShadow="0px 1px 2px rgba(0, 0, 0, 0.3),
                            0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
									borderRadius={"8px"}
									color={"#ffffff"}
									border={"none"}
									padding={{ lg: "1.3rem 1rem", base: "0 1rem" }}
									fontSize={{ lg: "1rem", base: "10px" }}
									fontWeight={"500"}
									textTransform={"uppercase"}
									my={{base:"1rem",lg:"3rem"}}
								>
									Request analytics consulting services
								</Button>
							</Link>
						</Flex>
						<Box id={"Benefits"} scrollMarginTop={"150px"}>
							<Text
								color={"#636363"}
								textTransform={"uppercase"}
								fontSize={"18px"}
							>
								Benefits
							</Text>
							<Text
								fontWeight={"700"}
								fontSize={{ base: "lg", lg: "4xl" }}
								pb={"5px"}
							>
								Benefits of Data Implementation Service
							</Text>
							<Box bg={"red"} height={"3px"} mb={"20px"} w={"7rem"}></Box>

							<Flex
								flexWrap={"wrap"}
								mt={"30px"}
								gap={"30px"}
								justifyContent={"center"}
								alignItems={"center"}
							>
								{benefitsCardData.map((item, index) => {
									return (
										<Box
											p={"20px 25px"}
											key={index}
											border={"1px solid rgba(0, 0, 0, 0.5)"}
											w={"max-content"}
											borderRadius={"8px"}
											minW={"45%"}
											maxWidth={"320px"}
											h={"270px"}
											justifyContent={"center"}
											textAlign={"center"}
										>
											<Flex justifyContent={"center"} pb={"1rem"}>
												<Image
													src={"/assets/dataAnalytics/checkIcon.png"}
													alt={"icon"}
												/>
											</Flex>
											<Text
												mb={"20px"}
												fontSize={{ base: "lg", lg: "2xl" }}
												fontWeight={"600"}
											>
												{item.title}
											</Text>
											<Text fontSize={"15px"}>{item.details}</Text>
										</Box>
									);
								})}
							</Flex>
						</Box>
						<Box id="Testimonials" maxW={"800px"} scrollMarginTop={"150px"}>
							<TantaTestimonial testimonials={testimonials} />
						</Box>
						<Box id="projects" mt={"5rem"} scrollMarginTop={"150px"}>
							<HandpickedProject cases={cases}/>
						</Box>
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
											fontSize={{ base: "18px", lg: "28px" }}
											lineHeight={{ base: "30px", lg: "70px" }}
											textTransform={"capitalize"}
										>
											Take a Moment to Know{" "}
											<span style={{ color: "#E9000E" }}>Tanta Innovative</span>{" "}
											Better
										</Text>
										<div
											style={{
												width: "100px",
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
																item.items.map((item) => {
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
																		"services/data-analytics/data-implementation",
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
				</Flex>
			</Container>
			<ContactUs subtitle="For Your Data Analytics Projects" />
		</>
	);
};

export default DataImplementation;

const HeroText = styled.div`
	h1 {
		position: relative;
		box-sizing: border-box;
		margin-left: 2rem;
		font-size: 32px;
		font-weight: 700;
		margin-top: 1rem;
		color: #0c0c0c;

		@media (max-width: 520px) {
			font-size: 1.3rem;
		}

		&::before {
			position: absolute;
			content: "";
			top: -3px;
			left: -30px;
			height: 100%;
			width: 3px;
			background: linear-gradient(to bottom, red 30%, transparent, transparent);
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
				transparent,
				transparent,
				transparent,
				transparent,
				transparent
			);
		}
	}
`;
