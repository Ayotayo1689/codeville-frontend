import React, { useState } from "react";
import HeaderOne from "../../../HeaderOne";
import {
	Box,
	Button,
	chakra,
	Container,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../../../../../styles/theme";
import HeroRetail from "../../../../../public/assets/retailItConsulting/HeroRetail.png";
import { capabilities, expertise, offer, sideBarData } from "./data";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";
import retailImg from "../../../../../public/assets/retailItConsulting/retailImg.png";
import ContactUs from "../../../contactUs";
import appRoutes from "@/utils/appRoutes";

const RetailItServices = () => {
	const [activeLink, setActiveLink] = useState({});

	return (
		<>
			<Box mt={"5rem"} minHeight={"100vh"}>
				<HeaderOne
					heading={"services"}
					title={
						<>
							retail it services{" "}
							<chakra.span color={"#eb5046"}>consulting</chakra.span>
						</>
					}
				/>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
					<HeroContent>
						<HeroText>
							<h1>Retail IT Services and Solutions</h1>
							<p>
								Our Retail IT services are designed to enhance corporate
								productivity and deliver exceptional customer-centric
								experiences across both digital and physical sales channels.
								With over 13 years of industry expertise, our team of retail IT
								specialists offers specialized software solutions tailored to
								the unique needs of the entire retail ecosystem. Discover how
								our solutions can optimize your retail operations.
							</p>
							<Flex
								gap={"1rem"}
								flexDir={{ lg: "row", base: "column" }}
								alignItems={"center"}
							>
								<Link
									href={{
										pathname: "/contact-us",
										query: {
											service: "services/it-consulting/retail-ItConsulting",
										},
									}}
									service="services/it_consulting"
								>
									<Button
										color={"#E9000E"}
										padding={"0.4rem 1rem"}
										fontSize={{ lg: "18px", base: "15px" }}
										bg={"#fff"}
										border={"0.5px solid #E9000E"}
										borderRadius={"8px"}
									>
										Schedule a meeting
									</Button>
								</Link>
								<Link
									href={{
										pathname: appRoutes.services["cost-calculator"],
										query: { service: "itConsulting-6" },
									}}
								>
									<Button
										padding={"0.4rem 1rem"}
										fontSize={{ lg: "18px", base: "15px" }}
										borderRadius={"8px"}
										bg={"linear-gradient(221deg, #AC2121 0%, #E9000E 100%)"}
										color={"#fff"}
									>
										Get a quote
									</Button>
								</Link>
							</Flex>
						</HeroText>
						<Image
							src={HeroRetail}
							alt="hero image"
							width={500}
							height={404}
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
								fontWeight={600}
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
							{/*OUR EXPERTISE*/}
							<Box id={"OE"} scrollMarginTop={"150px"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "19px", lg: "24px" }}
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									Our Expertise
								</Heading>
								<Box
									width={{ lg: "50px", base: "30px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
								></Box>
								<Text fontSize={{ lg: "18px", base: "16px" }} color={"#3B3C3D"}>
									Since 2008, our retail portfolio has expanded to include:
								</Text>
								<Box>
									{expertise.map((item, index) => (
										<Flex
											key={index}
											gap={"0.5rem"}
											color={"#3B3C3D"}
											fontSize={{ lg: "16px", base: "14px" }}
											alignItems={"center"}
											mt={"1rem"}
										>
											<Box marginBottom={{ lg: "0.1rem", base: "1rem" }}>
												<RiCheckboxBlankFill
													style={{
														color: "#D80808",
														width: "7px",
														height: "7px",
													}}
												/>
											</Box>
											{item}
										</Flex>
									))}
								</Box>
							</Box>
							<Link
								href={{
									pathname: "/contact-us",
									query: {
										service: "services/it-consulting/retail-ItConsulting",
									},
								}}
								service="services/it_consulting"
								style={{ display: "flex", justifyContent: "flex-start" }}
							>
								<Button
									mt={"1rem"}
									padding={{ lg: "0.4rem 1rem", base: "0.2rem 1.5rem" }}
									fontSize={{ lg: "18px", base: "15px" }}
									borderRadius={"8px"}
									bg={"linear-gradient(221deg, #AC2121 0%, #E9000E 100%)"}
									color={"#fff"}
								>
									Get help
								</Button>
							</Link>
							{/*We Offer Software Solutions*/}
							<Box id={"SWC"} scrollMarginTop={"150px"} mt={"4rem"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "19px", lg: "24px" }}
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									We Offer Software Solutions
								</Heading>
								<Box
									width={{ lg: "50px", base: "30px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
								></Box>
								<Flex flexDir={"column"} gap={"1.3rem"} mt={"1rem"}>
									{offer.map((item, index) => (
										<Flex key={index} flexDir={"column"}>
											<Text
												fontWeight={600}
												fontSize={{ lg: "21px", base: "17px" }}
												color={"#6D0805"}
												mt={"0.5rem"}
											>
												{item.title}
											</Text>
											<Box mt={"-1rem"}>
												{item?.content?.map((nestedItem, index) => (
													<Flex
														key={index}
														gap={"0.5rem"}
														color={"#404243"}
														fontSize={{ lg: "16px", base: "14px" }}
														alignItems={"center"}
														mt={"1rem"}
													>
														<Box marginBottom={"0.1rem"}>
															<RiCheckboxBlankFill
																style={{
																	color: "#6D0805",
																	width: "7px",
																	height: "7px",
																}}
															/>
														</Box>
														{nestedItem?.list()}
													</Flex>
												))}
											</Box>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*OUR CAPABILITIES*/}
							<Box id={"OC"} scrollMarginTop={"150px"} mt={"4rem"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "19px", lg: "24px" }}
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									Our capabilities
								</Heading>
								<Box
									width={{ lg: "80px", base: "30px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
								></Box>
								<Text fontSize={{ lg: "18px", base: "16px" }} color={"#3B3C3D"}>
									Our technological competencies cover the full cycle of retail
									software development services:
								</Text>
								<Box>
									{capabilities.map((item, index) => (
										<Flex
											key={index}
											gap={"0.5rem"}
											color={"#3B3C3D"}
											fontSize={{ lg: "16px", base: "14px" }}
											alignItems={"center"}
											mt={"1rem"}
										>
											<Box marginBottom={"0.1rem"}>
												<RiCheckboxBlankFill
													style={{
														color: "#D80808",
														width: "7px",
														height: "7px",
													}}
												/>
											</Box>
											{item}
										</Flex>
									))}
								</Box>
								<Text
									fontSize={{ lg: "17px", base: "15px" }}
									color={"#151616"}
									mt={"1rem"}
								>
									These services are delivered by on-demand, scalable teams of
									ideators and practitioners who include business analysts,
									software consultants and engineers, graphic designers and
									quality assurance professionals. Our strategic relations with
									the technology leaders open extra opportunities for us and
									help to ease implementations for our customers.
								</Text>
							</Box>
							{/*get a customized healthcare analytics solution*/}
							<Box
								id={"Benefits"}
								scrollMarginTop={"150px"}
								mt={"6rem"}
								height={{
									lg: "600px",
									base: "850px",
									sm: "670px",
									md: "650px",
								}}
								bg={"#FDE6E7"}
								display={"flex"}
							>
								<Flex
									padding={{
										lg: "0 2rem 0.8rem 2rem",
										base: "2rem 2rem 10rem 2rem",
									}}
									gap={{ lg: "1.5rem", base: ".5rem" }}
									flexDir={{ lg: "row", base: "column" }}
									justifyContent={{ lg: "space-between", base: "none" }}
									alignItems={"center"}
								>
									<Flex flexDir={"column"}>
										<Heading
											fontWeight="700"
											fontSize={{ base: "20px", lg: "28px" }}
											textTransform="capitalize"
											color="#444444"
											lineHeight={{ lg: "140%", base: "150%" }}
											mb={"0.5rem"}
										>
											Get a Customized
											<chakra.span
												color={"#E9000E"}
												fontSize={{ base: "20px", lg: "28px" }}
												lineHeight={{ lg: "140%", base: "150%" }}
											>
												{" "}
												Healthcare Analytics Solution
											</chakra.span>
										</Heading>
										<Box
											width={{ lg: "50px", base: "30px" }}
											height={"3px"}
											bg={"#D80808"}
											mb={"1rem"}
										></Box>
										<Text
											fontSize={{ base: "16px", lg: "17px" }}
											color={"#3B3C3D"}
											mt={"2rem"}
										>
											To ensure the rapid distribution of analytics insights to
											target users (front-line healthcare staff, managers,
											health analysts, etc.), Tanta Innovatives data analytics
											professionals will assist you in designing and developing
											a comprehensive healthcare analytics solution. APPLICATION
											OF HEALTHCARE ANALYTICS IS REQUIRED
										</Text>
									</Flex>
									<Image
										src={retailImg}
										alt="product"
										width={268}
										height={212}
										style={{ marginTop: "5rem" }}
									/>
								</Flex>
							</Box>
						</Box>
					</Flex>
				</Container>
				<ContactUs subtitle="We’re here to support" />
			</Box>
		</>
	);
};

export default RetailItServices;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;

	width: 100%;
	padding-bottom: 1.5rem;
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
		box-sizing: border-box;
		font-size: 36px;
		font-weight: 700;
		margin-top: 1.5rem;
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
			font-size: 1.3rem;
			font-weight: 500;
		}
	}

	p {
		font-size: 18px;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		line-height: 32.04px;

		@media (max-width: 820px) {
			font-size: 0.9rem;
			text-align: center;
		}
	}
`;
