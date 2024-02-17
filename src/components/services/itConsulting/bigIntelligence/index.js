import React, { useState } from "react";
import HeaderOne from "../../../HeaderOne";
import Image from "next/image";
import Link from "next/link";
import {
	analyticsData,
	insightsData,
	serviceOptions,
	sideBarData,
	summary,
} from "./data";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
	Box,
	Container,
	Text,
	Flex,
	Heading,
	Grid,
	List,
	ListItem,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Button,
} from "@chakra-ui/react";
import LogoMarquee from "../../../logoMarquee";
import ContactUs from "../../../contactUs";

import HeroImg from "../../../../../public/assets/healthcare/itConsultingServices/rafiki.png";
import styled from "styled-components";
import { breakpoints } from "../../../../../styles/theme";
import Insights from "./Insights";
import ServiceOptions from "./ServiceOptions";
import Analytics from "./Analytics";
import { services } from "../../../application_service/data";
import { FaCheck } from "react-icons/fa";
import TantaTestimonial from "../../../tantaTestimonials";
import appRoutes from "../../../../utils/appRoutes";

const BigIntelligence = ({ testimonials }) => {
	const [activeLink, setActiveLink] = useState({});

	return (
		<>
			<Box mt={"5rem"} minHeight={"100vh"}>
				<HeaderOne
					heading={"services"}
					title={
						<>
							big intelligence{" "}
							<Text as={"span"} color={"#eb1a26"}>
								it consulting
							</Text>
						</>
					}
				/>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }}>
					{/* Hero section */}
					<Wrapper>
						<HeroContent>
							<HeroText>
								<h1>BI Consulting</h1>
								<p>
									Reach out to our dedicated team of IT consultants to
									Consulting services for business intelligence (BI) aid in the
									organization of the data collection and parsing process for
									management decision-making. Tanta innovative has provided
									businesses with secure ongoing BI support and logical
									end-to-end BI solutions.
								</p>
								<CtaButtons>
									<Link
										href={{
											pathname: appRoutes.contactUs,
											query: { service: "services/it-consulting" },
										}}
										service="services/it_consulting"
										className="request-services"
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
										<button className="get-quote">get a quote</button>
									</Link>
								</CtaButtons>
							</HeroText>
							<Image
								src={HeroImg}
								alt="hero image"
								width={400}
								height={400}
								className="hero-img"
							/>
						</HeroContent>
					</Wrapper>

					<Flex gap={"5rem"} justify={"center"} mb={"7rem"} mt={"4rem"}>
						<Flex
							display={{ lg: "block", base: "none" }}
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
						</Flex>
						<Box width={{ base: "100%", lg: "70%" }}>
							{/* specify your preference */}
							<Box padding={"1rem"}>
								<Text fontSize={"1.375rem"}>
									Our objective in implementing new technologies is not solely
									to make your company appear "modern," look for possibilities
									to lower the costs of your IT infrastructure while increasing
									the system's efficiency, security, and compliance.{" "}
								</Text>
							</Box>

							{/* ===== insights ======*/}
							<Box mt={"4rem"} id="insight" scrollMarginTop={"150px"}>
								<Heading
									fontWeight="600"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									Get Data Insights Across{" "}
									<Text
										color={"#E9000E"}
										fontSize={{ base: "20px", lg: "30px" }}
									>
										{" "}
										These Areas
									</Text>
								</Heading>
								<Box
									width={{ lg: "60px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
								></Box>
								<Grid
									gridTemplateColumns={"repeat(2, 1fr)"}
									gap={"2rem"}
									mt={"2rem"}
								>
									{insightsData.map((item, index) => (
										<Insights
											text={item.text()}
											lists={item.lists}
											key={index}
										/>
									))}
								</Grid>
							</Box>

							{/* servcie optioms*/}
							<Box mt={"4rem"} id="service" scrollMarginTop={"150px"}>
								<Heading
									fontWeight="600"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									Choose Your Service Options
								</Heading>
								<Box
									width={{ lg: "60px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
								></Box>

								<Grid
									gridTemplateColumns={"repeat(2, 1fr)"}
									gap={"2rem"}
									mt={"2rem"}
								>
									{serviceOptions.map((item, index) => (
										<ServiceOptions
											key={index}
											title={item.title}
											img={item.img}
											lists={item.lists}
											btn={item.btn}
										/>
									))}
								</Grid>
							</Box>

							{/* analytics*/}
							<Box mt={"4rem"} id="analytics" scrollMarginTop={"150px"}>
								<Heading
									fontWeight="600"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									Components of{" "}
									<span style={{ color: "#E9000E" }}>Business Analytics</span>{" "}
									We Deliver
								</Heading>

								<Grid gridTemplateColumns={"repeat(2, 1fr)"} gap={"2rem"}>
									{analyticsData.map((item, index) => (
										<Analytics
											text={item.text}
											img={item.img}
											title={item.title}
											key={index}
										/>
									))}
								</Grid>
							</Box>

							{/* ===== customers ======*/}
							<Box mt={"4rem"} id="insight" scrollMarginTop={"150px"}>
								<Heading
									fontWeight="600"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									What Makes{" "}
									<span style={{ color: "#E9000E" }}>Tanta Innovative</span> a
									Reliable Partner
								</Heading>
								<Box
									width={{ lg: "60px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
								></Box>
								<Text fontSize={"1.375rem"} my={"1rem"}>
									Our belief is that with our technical expertise and IT
									Services, combined with your innovative vision, we can create
									tech systems that will help you scale up your business by
									making life easier for your audience.
								</Text>
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

							{/* ========= testimonials =========== * /}
                            {/* Testimonial Section */}
							<Box
								display={"flex"}
								flexDir="column"
								mb="4.5rem"
								marginLeft={"35px"}
								id="testimonials"
								scrollMarginTop={"150px"}
							>
								<Text
									fontWeight="400"
									color={"#636363"}
									fontSize={{ lg: "18px", base: "16px" }}
									my="20px"
									lineHeight="24px"
									letterSpacing="0.085em"
									textTransform="uppercase"
								>
									TANTA Testimonials
								</Text>
								<Text
									fontWeight="600"
									fontSize={{ base: "22px", lg: "30px" }}
									lineHeight="28px"
									textTransform="capitalize"
									color="#444444"
								>
									{" "}
									See What our clients are saying{" "}
								</Text>
								{/* testimonial card */}
								<TantaTestimonial testimonials={testimonials} />
								{/* testimonial card */}
							</Box>

							{/* ======== summary.js ======= */}
							<Box mb="4.5rem" scrollMarginTop={"150px"}>
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
										{summary.map((item, index) => (
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
										{summary.map((item, index) => (
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
												<Box mt={"1.2rem"}>
													<FaCheck
														style={{ color: "green", fontSize: "24px" }}
													/>
													{item.lists?.map((item, index) => (
														<Text key={index}>{item}</Text>
													))}
												</Box>
												<Link
													href={{
														pathname: appRoutes.contactUs,
														query: { service: "services/cyber-security" },
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

							{/* ======== All consultins Services section ======= */}
							<Box mb="4.5rem" id={"services"} scrollMarginTop={"150px"}>
								<Text fontWeight="700" fontSize="28px" lineHeight="70px">
									All Consulting Services
								</Text>
								<Box
									display={"flex"}
									flexDir={{ base: "column", md: "row", lg: "row" }}
									flexWrap={"wrap"}
									justifyContent={"center"}
								>
									{services.map((object, index) => {
										return (
											<Box
												key={index}
												mx={"2rem"}
												w={"30%"}
												mt={{ base: "2rem", md: "2rem" }}
											>
												<Text
													fontWeight="500"
													fontSize="22px"
													lineHeight="130.5%"
													mb={"13px"}
												>
													{object?.title}
												</Text>
												<div
													style={{
														width: "220px",
														height: "4px",
														background: "#D80808",
														marginBottom: "1rem",
													}}
												></div>

												{object?.subItem.map((item, index) => (
													<List key={index}>
														<ListItem my={"9px"}>{item}</ListItem>
													</List>
												))}
											</Box>
										);
									})}
								</Box>
							</Box>
						</Box>
					</Flex>
				</Container>
			</Box>
			{/* contact us */}
			<Box>
				<ContactUs subtitle="We’re here to support" />
			</Box>
		</>
	);
};

export default BigIntelligence;

const Wrapper = styled.div`
	margin: 0 2rem;

	@media (max-width: 820px) {
		.side-bar {
			display: none;
		}
	}

	${breakpoints.md} {
		.about-box {
			padding-left: 0;
		}
	}
`;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;

	width: 100%;
	border-bottom: 1px solid #e5e5e5;

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
		.hero-img {
			padding-top: 1rem;
		}
	}
`;

const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
	width: 50%;

	@media (max-width: 820px) {
		width: 100%;
	}

	${breakpoints.md} {
	}
	h1 {
		position: relative;
		box-sizing: border-box;
		margin-left: 2rem;
		font-size: 2rem;
		font-weight: 700;
		margin-top: 0;
		padding-top: 0;
		color: #0c0c0c;

		${breakpoints.lg} {
			font-size: 1.7rem;
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
		font-size: 1rem;
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
		//box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3),
		//0 1px 3px 1px rgba(0, 0, 0, 0.15);
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
