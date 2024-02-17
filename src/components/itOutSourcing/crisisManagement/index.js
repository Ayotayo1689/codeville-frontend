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
} from "@chakra-ui/react";
import HeaderOne from "../../HeaderOne";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/theme";
import Link from "next/link";
import Image from "next/image";
import heroCrisis from "../../../../public/assets/crisisManagement/heroCrisis.png";
import {
	about,
	approach,
	leverage,
	sideBarData,
	option,
	benefit,
} from "./data";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";
import LogoMarquee from "../../logoMarquee";
import TantaTestimonial from "../../tantaTestimonials";
import { IoIosCheckmark } from "react-icons/io";
import { analyticsConsultingSummary } from "../../dataAnalytics/analyticsConsulting/data";
import appRoutes from "../../../utils/appRoutes";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

const CrisisManagement = ({ testimonials }) => {
	const [activeLink, setActiveLink] = useState({});
	return (
		<>
			<Box mt={"5rem"} minHeight={"100vh"}>
				<HeaderOne
					heading={"it outsourcing"}
					title={"crisis management consulting"}
				/>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
					<HeroContent>
						<HeroText>
							<h1>Prepare your infrastructure for new possibilities!</h1>
							<p>
								Maximize your resilience and minimize disruptions with Crisis
								Management Consulting. Our IT Outsourcing services help your
								business navigate challenging times with strategic expertise and
								reliable support. Trust us for comprehensive crisis management
								solutions.
							</p>
							<CtaButtons>
								<Link
									href={{
										pathname: "/contact-us",
										query: {
											service:
												"services/it-outsourcing/crisis-management-consulting",
										},
									}}
									service="services/it-outsourcing"
									className="request-services"
								>
									{" "}
									<button className="request-services">
										Request data analytics services
									</button>
								</Link>
								<Link
									href={{
										pathname: "/services/cost-calculator",
										query: { service: "it-outsourcing-1" },
									}}
								>
									<button className="get-quote">get a quote</button>
								</Link>
							</CtaButtons>
						</HeroText>
						<Image
							src={heroCrisis}
							alt="hero image"
							width={400}
							height={400}
							className="hero-img"
						/>
					</HeroContent>
					<Flex gap={"5rem"} justify={"center"} mb={"4rem"} mt={"5rem"}>
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
												href={`#${item?.id}`}
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
							<Box id="About" scrollMarginTop={"150px"}>
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
										<RiCheckboxBlankFill
											style={{
												color: "#E9000E",
												width: "10px",
												height: "10px",
											}}
										/>
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
								<Heading
									fontWeight="700"
									mt={"4rem"}
									fontSize={{ base: "20px", lg: "24px" }}
									textTransform="capitalize"
									color="#444444"
									mb={"0.9rem"}
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									Crisis Management
								</Heading>
								<Box
									width={{ lg: "50px", base: "30px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1.5rem"}
								></Box>
								<Text color={"#2a2a2a"} fontSize={"18px"} mb={"2rem"}>
									Crisis management consulting services include the elaboration
									and application of a tailored strategy to help companies
									maintain operability in response to a critical situation, like
									the COVID-19 pandemic, a natural disaster or any other force
									majeure.
								</Text>
								<Link
									href={{
										pathname: "/contact-us",
										query: {
											service:
												"services/it-outsourcing/crisis-management-consulting",
										},
									}}
									service="services/it-outsourcing"
									className="request-services"
								>
									<Flex justifyContent={"flex-start"}>
										<Button
											color={"#fff"}
											border={"none"}
											padding={"14px 23px 14px 21px"}
											borderRadius={"8px"}
											textTransform={"uppercase"}
											fontSize={"16px"}
											textAlign={"center"}
											background={
												"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"
											}
										>
											Request a consultation
										</Button>
									</Flex>
								</Link>
								<Heading
									fontWeight="700"
									mt={"4rem"}
									fontSize={{ base: "20px", lg: "24px" }}
									textTransform="capitalize"
									color="#444444"
									mb={"0.9rem"}
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									Leverage Technology to Handle Any Type of Crisis
								</Heading>
								<Box
									width={{ lg: "50px", base: "30px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1.5rem"}
								></Box>
								<Text color={"#2a2a2a"} fontSize={"18px"} mb={"2rem"}>
									We tailor our crisis management consulting services to your
									changing business needs depending on a type of crisis you’re
									in, for example:
								</Text>
								<Flex flexDir={"column"} gap={"2rem"} paddingLeft={"1rem"}>
									{leverage.map((item, index) => (
										<Flex key={index} flexDir={"column"} gap={"0.7rem"}>
											<Text fontSize={"20px"} fontWeight={700}>
												{item.title}
											</Text>
											<Flex flexDir={"column"} gap={"0.9rem"}>
												{item?.content?.map((nestedItem, index) => (
													<Flex
														key={index}
														gap={"0.5rem"}
														color={"#3B3C3D"}
														fontSize={{ lg: "14px", base: "13px" }}
														alignItems={"flex-start"}
														justifyContent={"flex-start"}
														px={"0.6rem"}
													>
														<Box marginBottom={"0.1rem"}>
															<RiCheckboxBlankFill
																style={{
																	color: "#E9000E",
																	width: "10px",
																	height: "10px",
																}}
															/>
														</Box>
														<Text mt={"-0.3rem"} fontSize={"16px"}>
															{nestedItem}
														</Text>
													</Flex>
												))}
											</Flex>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*Our Approach*/}
							<Box id={"approach"} scrollMarginTop={"150px"} mt={"5rem"}>
								<Text
									fontWeight="400"
									color={"#636363"}
									fontSize={{ lg: "18px", base: "16px" }}
									my="20px"
									lineHeight="24px"
									letterSpacing="0.085em"
									textTransform="uppercase"
								>
									our approach
								</Text>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"1rem"}
								>
									Weigh{" "}
									<chakra.span
										color={"#E9000E"}
										fontSize={{ base: "20px", lg: "30px" }}
										lineHeight={{ lg: "140%", base: "150%" }}
									>
										{" "}
										Tanta Innovatives{" "}
									</chakra.span>
									Sound Approach to Crisis Management Consulting
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
									Our approach ensures a valid response to a critical situation
									and is based on 4 key principles:
								</Text>
								<Flex
									mt={"1.5rem"}
									gap={"2rem"}
									flexWrap={"wrap"}
									justifyContent={"center"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
								>
									{approach.map((item, index) => (
										<Flex
											key={index}
											flexDir={"column"}
											justifyContent={"center"}
											alignItems={"center"}
											gap={"0.9rem"}
											border={"0.79px solid #DADFE3"}
											padding={"58px 28px"}
											transition={"all 0.2s ease-in-out"}
											_hover={{
												transform: "scale(1.02)",
											}}
											boxShadow={
												"0px 1.5803072452545166px 15.803072929382324px 0px rgba(0, 0, 0, 0.05)"
											}
											width={{ lg: "46%", md: "70%", base: "100%" }}
										>
											<Image src={item.img} width={86} height={90} alt="img" />
											<Text
												fontWeight={600}
												fontSize={"18px"}
												color={"#2A2A2A"}
											>
												{item.title}
											</Text>
											<Text
												fontSize={"17px"}
												color={"#2A2A2A"}
												textAlign={"center"}
											>
												{item.text}
											</Text>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*Service options*/}
							<Box mt={"4rem"} id={"SO"} scrollMarginTop={"150px"}>
								<Text
									fontWeight="400"
									color={"#636363"}
									fontSize={{ lg: "18px", base: "16px" }}
									my="20px"
									lineHeight="24px"
									letterSpacing="0.085em"
									textTransform="uppercase"
								>
									service options
								</Text>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "24px" }}
									textTransform="capitalize"
									color="#444444"
									mb={"0.9rem"}
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									Choose Your Service Option
								</Heading>
								<Box
									width={{ lg: "50px", base: "30px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1.5rem"}
								></Box>
								<Flex  mt={"3rem"} gap={"2rem"} flexDir={{base: "column", md: "column", lg: "column"}}>
									{option.map((item, index) => (
										<Flex key={index} gap={"2rem"} flexDir={{base: "column", md: "row", lg: "row"}}>
										<Box
											w={{base: "100%", md: "60%", lg: "100%"}}
											height={{base: "90%", md: "225px", lg: "225px"}}
										>
											<Image
												src={item.image}
												alt="image"
												width={230}
												height={250}
											/></Box>
											<Flex
												flexDir={"column"}
												gap={"1rem"}
												justifyContent={"center"}
												ml={{lg:index === 1 ? "-2.7rem" : "0rem", base:"0rem"}}
											>
												<Text
													fontWeight={700}
													fontSize={"20px"}
													color={"#2f2f2f"}
												>
													{item.title}
												</Text>
												<Text
													fontSize={"16px"}
													color={"#2f2f2f"}
													lineHeight={"170%"}
												>
													{item.text}
												</Text>
												<Flex justifyContent={"flex-start"}>
													<Link
														href={{
															pathname: "/contact-us",
															query: {
																service:
																	"services/it-outsourcing/crisis-management-consulting",
															},
														}}
														service="services/it-outsourcing"
														className="request-services"
													>
														<Button
															color={"#fff"}
															border={"none"}
															padding={"14px 23px 14px 21px"}
															borderRadius={"8px"}
															textTransform={"uppercase"}
															fontSize={"15px"}
															textAlign={"center"}
															bg={"#E9000E"}
														>
															{item.btn}
														</Button>
													</Link>

												</Flex>
											</Flex>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*Service Timeframes*/}
							<Box mt={"4rem"} id={"support"} scrollMarginTop={"150px"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "24px" }}
									textTransform="capitalize"
									color="#444444"
									mb={"0.9rem"}
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									Service TimeFrames
								</Heading>
								<Box
									width={{ lg: "50px", base: "30px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1.5rem"}
								></Box>
								<Flex>
									<Box
										width={{base: "60%", md: "70%", lg: "70%"}}
										border={"1px solid rgba(0, 0, 0, 0.30)"}
										padding={{base: "0px 0rem 0px 5px", md: "27px 0px 27px 33px", lg: "27px 0px 27px 33px"}}

									>
										<Text fontSize={{base: "16px", md: "18px", lg: "18px"}} color={"#2a2a2a"}>
											Service
										</Text>
									</Box>
									<Box
										borderTop={"1px solid rgba(0, 0, 0, 0.30)"}
										borderRight={"1px solid rgba(0, 0, 0, 0.30)"}
										borderBottom={"1px solid rgba(0, 0, 0, 0.30)"}
										padding={{base: "0px 0px", md: "27px 22px", lg:"27px 22px"}}
										width={{base: "40%", md: "30%", lg: "30%"}}
										bg={"#FDE6E7"}
									>
										<Text  fontSize={{base: "12px", md: "16px", lg: "18px"}} color={"#2a2a2a"}>
											>1,000-employee org
										</Text>
									</Box>
								</Flex>
								<Flex>
									<Box
										padding= {{base: "0px 10px 0px 6px", md: "25px 0px 0px 34px", lg: "25px 0px 0px 34px"}}
										borderLeft={"1px solid rgba(0, 0, 0, 0.30)"}
										borderRight={"1px solid rgba(0, 0, 0, 0.30)"}
										borderBottom={"1px solid rgba(0, 0, 0, 0.30)"}
										width={{base: "60%", md: "70%", lg: "70%"}}
									>
										<Text mt={"0.5rem"} fontSize={{base: "12px", md: "16px", lg: "18px"}}>
											Analysis of current business processes
										</Text>
										<Text mt={"0.5rem"} fontSize={{base: "12px", md: "16px", lg: "18px"}}>
											Crisis management consulting and crisis response planning
										</Text>
										<Text mt={"0.5rem"} fontSize={{base: "12px", md: "16px", lg: "18px"}}>
											Business intelligence and business analytics
										</Text>
										<Text mt={"0.5rem"} fontSize={{base: "12px", md: "16px", lg: "18px"}}>
											Remote work enablement and productivity consulting
										</Text>
										<Text mt={"0.5rem"} fontSize={{base: "12px", md: "16px", lg: "18px"}}>
											IT service management consulting and implementation
										</Text>
									</Box>
									<Box
										height={"250px"}
										padding={{base: "0px 0px 0px 10px", md: "27px 65px", lg:"27px 65px"}}
										borderRight={"1px solid rgba(0, 0, 0, 0.30)"}
										borderBottom={"1px solid rgba(0, 0, 0, 0.30)"}
										width={{base: "40%", md: "30%", lg: "30%"}}

									>
										<Text  mt={{base: "1rem", md: "0.5rem", lg: "0.5rem"}}  fontSize={{base: "12px", md: "16px", lg: "18px"}}>
											5 days
										</Text>
										<Text mt={{base: "1.5rem", md: "0.5rem", lg: "0.5rem"}} fontSize={{base: "12px", md: "16px", lg: "18px"}}>
											5 days
										</Text>
										<Text mt={{base: "1.5rem", md: "0.5rem", lg: "0.5rem"}} fontSize={{base: "12px", md: "16px", lg: "18px"}}>
											1 - 2 days
										</Text>
										<Text  mt={{base: "1.5rem", md: "0.5rem", lg: "0.5rem"}}  fontSize={{base: "12px", md: "16px", lg: "18px"}}>
											7 days
										</Text>
										<Text  mt={{base: "1.5rem", md: "0.5rem", lg: "0.5rem"}}  fontSize={{base: "12px", md: "16px", lg: "18px"}}>
											1 - 2 days
										</Text>
									</Box>
								</Flex>
							</Box>
							{/*Benefits*/}
							<Box mt={"4rem"} id={"Benefits"} scrollMarginTop={"150px"}>
								<Text
									fontWeight="400"
									color={"#636363"}
									fontSize={{ lg: "18px", base: "16px" }}
									my="20px"
									lineHeight="24px"
									letterSpacing="0.085em"
									textTransform="uppercase"
								>
									benefits
								</Text>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "24px" }}
									textTransform="capitalize"
									color="#444444"
									mb={"0.9rem"}
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									Opt for Crisis Management Consulting ASAP
								</Heading>
								<Box
									width={{ lg: "50px", base: "30px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1.5rem"}
								></Box>
								<Flex
									gap={"3rem"}
									flexWrap={"wrap"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
									justifyContent={"center"}
									alignItems={'center'}
								>
									{benefit.map((item, index) => (
										<Flex
											key={index}
											py={2}
											flexDir={"column"}
											width={{ base:'100%', lg: "29%"}}
											gap={"1.2rem"}
											padding={"22px 30px"}
											alignItems={"center"}
											border={"1px solid rgba(0, 0, 0, 0.50)"}
											borderRadius={"8px"}
										>
											<Text
												color={"#B60E09"}
												fontSize={"32px"}
												fontWeight={500}
											>
												{item.rate}
											</Text>
											<Text fontSize={"16px"}>{item.text}</Text>
										</Flex>
									))}
								</Flex>
							</Box>

							{/*Testimonial Section*/}
							<Box mt={"4rem"} id="C&P" scrollMarginTop={"150px"}>
								<TantaTestimonial testimonials={testimonials} />
							</Box>

							{/* success stories */}
							<HandpickedProject/>

							{/*SUMMARY*/}
							<Box mt={"4rem"} id="Summary" scrollMarginTop={"150px"}>
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
															padding={{ base: "8px 18px", lg: "16px 24px" }}
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
																			<ListItem pl={4} key={index}>
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
																			"services/it-outsourcing/crisis-management-consulting",
																	},
																}}
																service="cyber-security"
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
			</Box>
		</>
	);
};
export default CrisisManagement;
const HeroContent = styled.div`
	display: flex;
	gap: 1rem;
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
	width: 60%;
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
