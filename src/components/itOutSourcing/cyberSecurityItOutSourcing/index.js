import React, { useState } from "react";
import {Box, Flex, Container, Text, Heading, chakra, Button} from "@chakra-ui/react";
import HeaderOne from "../../HeaderOne";
import Link from "next/link";
import Image from "next/image";
import heroCYSS from "../../../../public/assets/cyberSecurityITOutsourcing/heroCYSS.png";
import {application, security, tools, benefit, about, sideBarData, network, challenges} from "./data";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";
import LogoMarquee from "../../logoMarquee";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/theme";
import appRoutes from "../../../utils/appRoutes";
import TantaTestimonial from "@/components/tantaTestimonials";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

const CyberSecurityItOutSourcing = ({ testimonials, cases }) => {
	const [activeLink, setActiveLink] = useState({});
	return (
		<>
			<Box mt={"5rem"} minHeight={"100vh"}>
				<HeaderOne
					heading={"it outsourcing"}
					title={"Cybersecurity Services"}
				/>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }}>
					<HeroContent>
						<HeroText>
							<h1>Protect Your Applications and Network</h1>
							<p>
								Managed testing services include a wide range of testing
								activities from test planning, test cases’ design and execution,
								to test reporting and QA process improvements. Within optimal
								testing time and budget.
							</p>
							<CtaButtons>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: {
											service: "services/it_outsourcing/cybersecurity-services",
										},
									}}
									service="services/it_outsourcing"
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
										query: { service: "it_outsourcing-1" },
									}}
								>
									<button className="get-quote">get a quote</button>
								</Link>
							</CtaButtons>
						</HeroText>
						<Image
							src={heroCYSS}
							alt="hero image"
							width={470}
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
												fontSize={"lg"}
												fontWeight={"normal"}
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
							<Box id={"About"} scrollMarginTop={"150px"}>
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
										<Box>
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
							{/*Benefits*/}
							<Box mt={"4rem"} id={"services"} scrollMarginTop={"150px"}>
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
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"1rem"}
								>
									Cybersecurity Services by{" "}
									<chakra.span
										color={"#E9000E"}
										fontSize={{ base: "20px", lg: "30px" }}
										lineHeight={{ lg: "140%", base: "150%" }}
									>
										{" "}
										Tanta Innovative{" "}
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
									mb={"0.9rem"}
								>
									Tanta Innovative provides end-to-end managed testing services,
									delivering the service in the following stages:
								</Text>
								<Flex
									mt={"1.5rem"}
									gap={"2rem"}
									flexWrap={"wrap"}
									justifyContent={"center"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
								>
									{benefit.map((item, index) => (
										<Flex
											key={index}
											flexDir={"column"}
											justifyContent={"center"}
											alignItems={"center"}
											gap={"0.9rem"}
											borderRadius={"8px"}
											border={"1px solid rgba(0, 0, 0, 0.50)"}
											padding={"44px 30px"}
											width={{ lg: "46%", md: "70%", base: "100%" }}
										>
											<Text fontWeight={600} fontSize={{lg:"22px", base:"18px"}}>
												{item.title}
											</Text>
											<Flex flexDir={"column"} gap={"0.9rem"}>
												{item.content.map((nestedItem, index) => (
													<Flex
														key={index}
														gap={"0.7rem"}
														color={"#3B3C3D"}
														fontSize={{ lg: "14px", base: "13px" }}
														alignItems={"flex-start"}
														justifyContent={"flex-start"}
														px={"0.6rem"}
													>
														<Box>
															<RiCheckboxBlankFill
																style={{
																	color: "#E9000E",
																	width: "10px",
																	height: "10px",
																}}
															/>
														</Box>
														<Text mt={"-0.5rem"} fontSize={{lg:"16px", base:"15px"}}>
															{nestedItem}
														</Text>
													</Flex>
												))}
											</Flex>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*Security assessment*/}
							<Box mt={"4rem"} id={"assessment"} scrollMarginTop={"150px"}>
								<Text
									fontWeight="400"
									color={"#636363"}
									fontSize={{ lg: "18px", base: "16px" }}
									my="20px"
									lineHeight="24px"
									letterSpacing="0.085em"
									textTransform="uppercase"
								>
									security assessment
								</Text>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"1rem"}
								>
									Security Assessment and Planning
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
									Tanta Innovative Limited delivers full-scale security
									assessment and planning services for the components of IT
									infrastructures:
								</Text>
								<Flex
									mt={"3rem"}
									gap={"2rem"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
									alignItems={{lg:"none", md:"none", base:"center" }}
								>
									{tools.map((item, index) => (
										<Flex
											key={index}
											py={2}
											flexDir={"column"}
											width={"188px"}
											bg={"rgba(255, 255, 255, 0.00)"}
											alignItems={"center"}
											justifyContent={"center"}
											borderRadius={"8px"}
											borderBottom={"3px solid rgba(0, 0, 0, 0.20)"}
											transition={"all 0.2s ease-in-out"}
											_hover={{
												transform: "scale(1.02)",
											}}
										>
											<Box height={"50px"}>
												<Image
													src={item.image}
													alt="image"
													width={70}
													height={70}
												/>
											</Box>
											<Text
												// mt={index === 2 || index === 3 ? "2rem" : "3rem"}
												mt={"3rem"}
												color={"#222"}
												textAlign={"center"}
												fontSize={{ lg: "13px", base: "13px" }}
												fontWeight={700}
											>
												{item.name}
											</Text>
										</Flex>
									))}
								</Flex>
								<Flex mt={"4rem"} gap={"2.5rem"} flexDir={"column"}>
									{security.map((item, index) => (
										<Flex key={index} gap={"1.5rem"} flexDir={"column"}>
											<Text color={"#2F2F2F"} fontWeight={700} fontSize={{lg:"25px", base:"18px"}}>
												{item.title}
											</Text>
											<Flex flexDir={"column"} gap={"0.9rem"}>
												{item.info.map((nestedItem, index) => (
													<Flex key={index}
														  gap={"0.7rem"}
														  color={"#3B3C3D"}
														  fontSize={{ lg: "14px", base: "13px" }}
														  alignItems={"flex-start"}
														  justifyContent={"flex-start"}>
														<Box>
															<RiCheckboxBlankFill
																style={{
																	color: "#E9000E",
																	width: "10px",
																	height: "10px",
																}}
															/>
														</Box>
														<Text fontSize={{lg:"18px", base:"16px"}} mt={"-.5rem"}>
															{nestedItem}
														</Text>
													</Flex>

												))}

											</Flex>

										</Flex>
									))}
								</Flex>
							</Box>
							{/*Application security*/}
							<Box mt={"4rem"} id={"APP"} scrollMarginTop={"150px"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"1rem"}
								>
									Application Security
								</Heading>
								<Box
									width={{ lg: "60px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
								></Box>
								<Text lineHeight={"170%"} color={"#2a2a2a"} fontSize={{lg:"20px", base:"16px"}}>
									Poorly coded and insufficiently protected applications can put a company at risk and result in data breaches. <chakra.span fontWeight={700}>Tanta Innovative Limited </chakra.span>  offers their skills and knowledge in assessing and testing the security of applications (web, mobile, desktop), as well as finding ways to help their customers to achieve the effective protection of the corporate data stored locally or remotely.
								</Text>
								<Flex
									mt={"1.5rem"}
									gap={"3rem"}
									flexWrap={"wrap"}
									justifyContent={"center"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
								>
									{application.map((item, index) => (
										<Flex key={index}
											  flexDir={"column"}
											  alignItems={"center"}
											  gap={"0.9rem"}
											  borderRadius={"8px"}
											  border={"1px solid rgba(0, 0, 0, 0.50)"}
											  padding={"40px 0px"}
											  width={{ lg: "46%", md: "70%", base: "100%" }}>
											<Box width={"100%"} display={"flex"} p={" 20px 20px"} gap={"1rem"} justifyContent={"flex-start"} alignItems={{lg:"flex-start", base:"center"}} borderBottom={"1px solid rgba(0, 0, 0, 0.30)"}>
												<Image src={item.img} alt="img"/>
												<Text fontWeight={600} fontSize={{lg:"20px", base:"16px"}} >
													{item.title}
												</Text>
											</Box>
											<Text p={" 20px 20px"} color={"#1E1E1E"} fontSize={{lg:"18px", base:"16px"}}>
												{item.content}
											</Text>

										</Flex>
									))}
								</Flex>
							</Box>
							{/*Network Protection*/}
							<Box mt={"4rem"} id={"Net"} scrollMarginTop={"150px"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"1rem"}
								>
									Network Protection
								</Heading>
								<Box
									width={{ lg: "60px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
								></Box>
								<Text lineHeight={"170%"} color={"#2a2a2a"} fontSize={{lg:"20px", base:"16px"}}>
									By increasing corporate network security specifically, you may decrease the risk of becoming the victim of privacy spoofing, identity or company’s proprietary information theft, Man-in-the-Middle and DDoS attacks.
									We apply multiple defense layers to protect your corporate network and the sensitive data stored within it.
									ScienceSoft’s security engineers know various ways to keep your proprietary information safe and reduce the probability that you will have to experience successful
									attack attempts against your network. Read more on https://www.scnsoft.com/services/security#assessment
								</Text>
								<Flex
									mt={"1.5rem"}
									gap={"3rem"}
									flexWrap={"wrap"}
									justifyContent={"center"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
								>
									{network.map((item, index) => (
										<Flex key={index}
											  flexDir={"column"}
											  alignItems={"center"}
											  gap={"0.9rem"}
											  borderRadius={"8px"}
											  border={"1px solid rgba(0, 0, 0, 0.50)"}
											  padding={"40px 0px"}
											  width={{ lg: "46%", md: "70%", base: "100%" }}>
											<Box width={"100%"} display={"flex"} p={" 20px 20px"} gap={"1rem"} justifyContent={"flex-start"} alignItems={{lg:"flex-start", base:"center"}} borderBottom={"1px solid rgba(0, 0, 0, 0.30)"}>
												<Image src={item.img} alt="img"/>
												<Text fontWeight={600} fontSize={{lg:"20px", base:"16px"}} >
													{item.title}
												</Text>
											</Box>
											<Text p={" 20px 20px"} color={"#1E1E1E"} fontSize={{lg:"18px", base:"16px"}}>
												{item.content}
											</Text>

										</Flex>
									))}
								</Flex>
							</Box>
							{/*Service options*/}
							<Box mt={"4rem"} id={"options"} scrollMarginTop={"150px"}>
								<Text
									fontWeight="400"
									color={"#636363"}
									fontSize={{ lg: "18px", base: "16px" }}
									my="20px"
									lineHeight="24px"
									letterSpacing="0.085em"
									textTransform="uppercase"
								>
									Cooperation model
								</Text>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"1rem"}
								>
									Challenges We Solve
								</Heading>
								<Box
									width={{ lg: "60px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
								></Box>
								<Flex mt={"2rem"} flexDir={"column"} gap={"4rem"} flexDirection={{lg:"column", base:"column"}}>
									{challenges.map((item, index) => (
										<Flex key={index} gap={".5rem"} flexDirection={{lg:"row", base:"column"}}>
											<Box>
												<Text mb={".5rem"} color={"#2f2f2f"} fontSize={{lg:"20px", base:"16px"}} fontWeight={700}>
													{item.title}
												</Text>
												<Text mb={"1rem"} color={"#2f2f2f"} fontSize={{lg:"18px", base:"14px"}} lineHeight={"170%"}>
													{item.content}
												</Text>
												<Link href={{
													pathname: appRoutes.contactUs,
													query: {
														service: "services/it_outsourcing/cybersecurity-services",
													},
												}}
													  service="services/it_outsourcing">
													<Button color={"#fff"}
															padding={"0.4rem 1rem"}
															fontSize={{ lg: "18px", base: "14px" }}
															bg={"#E9000E"}
															borderRadius={"8px"}>
														{item.link}
													</Button>
												</Link>

											</Box>
											<Image src={item.image} alt="image" width={398} height={225}/>

										</Flex>
									))}
								</Flex>
							</Box>
							{/* Testimonial Section */}
							<Box id={"testimonial"} scrollMarginTop={"150px"}>
								<TantaTestimonial testimonials={testimonials}/>
							</Box>
							{/*customers & projects*/}
							<Box mt={"4rem"} id={"C&P"} scrollMarginTop={"150px"} mb="4.5rem" w={"100%"}>
								<HandpickedProject cases={cases} title={"SIMILAR PROJECTS"} heading={<>Our Handpicked <chakra.span color={"#E9000E"}>Projects</chakra.span> and <chakra.span color={"#E9000E"}>Services</chakra.span></>}/>
							</Box>



						</Box>
					</Flex>
				</Container>
			</Box>
		</>
	);
};

export default CyberSecurityItOutSourcing;

const HeroContent = styled.div`
	display: flex;
	gap: 3rem;

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
	width: 57%;
	//padding-left: 1.5%;
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
		font-size: 34px;
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
		font-size: 1.2rem;
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
