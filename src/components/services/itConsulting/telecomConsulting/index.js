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
import heroTelecom from "../../../../../public/assets/telecomConsulting/heroTelecom.png";
import styled from "styled-components";
import { breakpoints } from "../../../../../styles/theme";
import { business, operations, sideBarData } from "./data";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";
import ContactUs from "../../../contactUs";
import TantaTestimonial from "../../../tantaTestimonials";
import appRoutes from "../../../../utils/appRoutes";

const TelecomConsulting = ({ testimonials }) => {
	const [activeLink, setActiveLink] = useState({});

	return (
		<>
			<Box mt={"5rem"} minHeight={"100vh"}>
				<HeaderOne
					heading={"services"}
					title={
						<>
							custom telecom{" "}
							<chakra.span color={"#eb5046"}>consulting</chakra.span>
						</>
					}
				/>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
					<HeroContent>
						<HeroText>
							<h1>Custom Telecom Software</h1>
							<p>
								Telecommunications software plays a crucial role in effectively
								managing and coordinating various forms of electronic data
								exchange, such as text, voice, and video. This versatile
								software is utilized by telecommunication service providers to
								efficiently administer their networks, by manufacturers of
								telecom equipment for designing and testing purposes, and by
								enterprises to effectively manage their own telecommunications
								requirements.
							</p>
							<Flex
								gap={"1rem"}
								flexDir={{ lg: "row", base: "column" }}
								alignItems={"center"}
							>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: {
											service: "services/it-consulting/telecom-consulting",
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
							src={heroTelecom}
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
							{/*Operations System Support*/}
							<Box id={"OSS"} scrollMarginTop={"150px"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "19px", lg: "24px" }}
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									Operations Support Systems (OSS)
								</Heading>
								<Box
									width={{ lg: "50px", base: "30px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
								></Box>
								<Flex flexDir={"column"} gap={"1.3rem"}>
									{operations.map((item, index) => (
										<Flex key={index} flexDir={"column"}>
											<Text
												fontWeight={600}
												fontSize={{ lg: "21px", base: "17px" }}
												color={"#6D0805"}
												mt={"0.5rem"}
											>
												{item.title}
											</Text>
											<Text
												fontSize={{ lg: "18px", base: "15px" }}
												color={"#151616"}
												mt={"0.5rem"}
											>
												{item.content}
											</Text>
											<Box mt={"0.4rem"}>
												{item?.subContent?.map((nestedItem, index) => (
													<Flex
														key={index}
														gap={"0.5rem"}
														color={"#3B3C3D"}
														fontSize={{ lg: "16px", base: "14px" }}
														alignItems={"center"}
													>
														<Box marginBottom={"0.1rem"}>
															<RiCheckboxBlankFill
																style={{
																	color: "#6D0805",
																	width: "6px",
																	height: "6px",
																}}
															/>
														</Box>
														{nestedItem.list}
													</Flex>
												))}
											</Box>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*BUSINESS SUPPORT SYSTEM*/}
							<Box mt={"4rem"} id={"BSS"} scrollMarginTop={"150px"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "19px", lg: "24px" }}
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									Business Support Systems (BSS)
								</Heading>
								<Box
									width={{ lg: "50px", base: "30px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1.5rem"}
								></Box>
								<Text fontSize={{ lg: "18px", base: "16px" }} color={"#151616"}>
									Witnessing the ever-growing transformation of the telecom
									industry, our clients are able to run their businesses in step
									with the change and create completely new business models
									thanks to:
								</Text>
								<Flex flexDir={"column"} gap={"1.3rem"} mt={"1rem"}>
									{business.map((item, index) => (
										<Flex key={index} flexDir={"column"}>
											<Text
												fontWeight={600}
												fontSize={{ lg: "21px", base: "17px" }}
												color={"#6D0805"}
												mt={"0.5rem"}
											>
												{item.title}
											</Text>
											<Text
												fontSize={{ lg: "18px", base: "15px" }}
												color={"#151616"}
												mt={index === 0 ? "-0.5rem" : "0.5rem"}
											>
												{item.content}
											</Text>
											<Box mt={index === 3 ? "-1rem" : "0.2rem"}>
												{item?.subContent?.map((nestedItem, index) => (
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
							{/*Tanta Testimonials*/}
							<Box
								mt={"4rem"}
								mb={"3rem"}
								id={"Testimonials"}
								scrollMarginTop={"150px"}
							>
								<TantaTestimonial testimonials={testimonials} />
							</Box>
						</Box>
					</Flex>
				</Container>
				<ContactUs subtitle="We’re here to support" />
			</Box>
		</>
	);
};

export default TelecomConsulting;

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
