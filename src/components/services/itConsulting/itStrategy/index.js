import React, { useState } from "react";
import {
	Box,
	chakra,
	Container,
	Flex,
	Grid,
	Heading,
	List,
	ListItem,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import amico from "../../../../../public/assets/itStrategyConsulting/amico.png";
import HeaderOne from "../../../HeaderOne";
import styled from "styled-components";
import { breakpoints } from "../../../../../styles/theme";
import { MdKeyboardArrowRight } from "react-icons/md";
import Summary from "./summary";
import { itStrategy, sidebar } from "./data";
import LogoMarquee from "../../../logoMarquee";
import TantaTestimonial from "../../../tantaTestimonials";
import appRoutes from "../../../../utils/appRoutes";

function ItStrategy({ testimonials }) {
	const [activeLink, setActiveLink] = useState({});
	return (
		<>
			<Box fontFamily={"'Roboto', sans-serif"} overflow={"hidden"}>
				{/*************************************Hero section****************************************************/}

				<HeaderOne
					heading={"SERVICES"}
					title={
						<>
							IT Strategy{" "}
							<Text as="span" color={"rgba(235, 80, 70, 1)"}>
								{" "}
								Consulting
							</Text>
						</>
					}
				/>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }}>
					<Box>
						<HeroContent>
							<HeroText>
								<h1>Information Technology Consulting</h1>
								<p>
									Reach out to our dedicated team of IT consultants to discuss
									your project needs, explore innovative solutions, and discover
									how we can transform your ideas into reality, explore
									innovative solutions, and discover how we can transform your
									ideas into reality.
								</p>
								<CtaButtons>
									<Link
										href={{
											pathname: appRoutes.contactUs,
											query: {
												service:
													"services/it-consulting/it-strategy-consulting",
											},
										}}
										service="services/it_consulting/it_strategy_consulting"
										className="request-services"
									>
										<button className="request-services">
											REQUEST IT CONSULTING SERVICE
										</button>
									</Link>
									<Link
										href={{
											pathname: appRoutes.contactUs,
											query: {
												service:
													"services/it-consulting/it-strategy-consulting",
											},
										}}
										service="services/it-consulting/it-strategy-consulting"
										className="mobile-request-services"
									>
										<button className="mobile-request-services">
											SCHEDULE A MEETING
										</button>
									</Link>
									<Link
										href={{
											pathname: appRoutes.services["cost-calculator"],
											query: { service: "it-consulting-6" },
										}}
									>
										{" "}
										<button className="get-quote">get a quote</button>
									</Link>
								</CtaButtons>
							</HeroText>
							<Image
								src={amico}
								alt="hero image"
								width={500}
								height={400}
								className="hero-img"
							/>
						</HeroContent>
						<Box
							borderTop={"1px solid rgba(0, 0, 0, 0.30)"}
							boxShadow={" 0px 4px 10px 0px rgba(0, 0, 0, 0.50)"}
							mb={"3rem"}
							mt={"2rem"}
							display={{ base: "none", md: "block", lg: "block" }}
							// w={{ base: "", md: "100%", lg: "" }}
						></Box>
					</Box>

					{/****************************************Sidebar***********************************/}
					<Flex gap={"2rem"} mt={"2rem"}>
						<Flex
							flexDir="column"
							boxShadow={"lg"}
							flex={1}
							display={{ base: "none", lg: "flex" }}
							width={"30%"}
							position={"sticky"}
							top={"10rem"}
							pb={"1rem"}
							borderBottom={"lg"}
							height={"10rem"}
							borderRadius={"8px"}
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
								background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
							>
								CONTENTS
							</Text>
							<Box px={"1rem"}>
								{sidebar.map((item, index) => {
									return (
										<Flex
											alignItems={"center"}
											key={index}
											color={"#2A2A2A"}
											fontSize={"20px"}
											p={".3rem"}
										>
											<Link
												onClick={() => {
													setActiveLink({ [item?.id]: true });
												}}
												style={{
													color: activeLink[item?.id] ? "red" : "",
													fontSize: "20px",
													fontWeight: "400",
													cursor: "pointer",
													width: "100%",
												}}
												href={`#${item?.id}`}
											>
												{item?.title}
											</Link>

											<MdKeyboardArrowRight
												cursor={"pointer"}
												height={"18px"}
												width={"18px"}
												color={"rgba(42, 42, 42, 1)"}
											/>
										</Flex>
									);
								})}
							</Box>
						</Flex>

						{/********************RIGHT CONTENT**********************************/}
						<Box
							w={{ base: "100%", md: "70%", lg: "70%" }}
							id="Included"
							scrollMarginTop={"150px"}
						>
							<Box>
								<Text
									w={{ base: "22.438", md: "45rem", lg: "54rem" }}
									fontSize={{ base: "13px", md: "20px", lg: "22px" }}
									color={"rgba(51, 51, 51, 1)"}
									textAlign={{ base: "center", md: "left", lg: "left" }}
									fontWeight={{ base: "400", md: "", lg: "" }}
									display={{ base: "flex", md: "block", lg: "" }}
									justifyContent={{ base: "center", md: "", lg: "" }}
								>
									Our objective in implementing new technologies is not solely
									to make your company appear "modern," but rather to deliver
									tangible business results through the utilization of IT. We
									optimize IT services to make them more reliable and
									cost-effective and help introduce new IT services fast.
								</Text>
							</Box>
							{/***************************What the IT Strategy Includes***********************************/}
							<Box scrollMarginTop={"150px"} mt={"2rem"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", md: "30px", lg: "30px" }}
									color=" #414141"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
									textAlign={"center"}
									display={{ base: "none", md: "block", lg: "block" }}
								>
									What the IT Strategy&nbsp;
									<chakra.span color="rgba(255, 0, 0, 1)">
										Includes
									</chakra.span>{" "}
								</Heading>
								<Box
									display={{ base: "none", md: "block", lg: "block" }}
									style={{
										width: "8.875rem",
										height: "4px",
										background: "rgba(255, 0, 0, 1)",
										marginBottom: " 2rem ",
										marginLeft: "auto",
										marginRight: "auto",
									}}
								></Box>

								<Box
									position={"relative"}
									left={{ base: "0", md: "5rem", lg: "0" }}
								>
									<Grid
										gridTemplateColumns={{
											base: "1fr",
											lg: "1fr 1fr 1fr",
											md: "1fr 1fr",
											sm: "",
										}}
										flexDir={{ base: "column", lg: "row" }}
										gridGap={"1rem"}
									>
										{itStrategy.map((item, index) => {
											return (
												<Box key={"index"}>
													<Image
														src={item?.img}
														alt="icons"
														style={{
															width: "80px",
															height: "80px",
															margin: "auto",
														}}
													/>
													<Box
														border={"1px solid red"}
														w={{ base: "6rem", md: "4rem", lg: "4rem" }}
														mt={{ base: "1rem", md: "0.5rem", lg: "0.5rem" }}
														mb={{ base: "1.5rem", md: "0rem", lg: "0rem" }}
														background={"var(--primary-500, #F2666E)"}
														ml={"auto"}
														mr={"auto"}
													></Box>

													<Text
														fontSize={"17px"}
														fontWeight={"500"}
														color={"var(--neutral-900, #151616)"}
														textAlign={"center"}
													>
														{item?.title}
													</Text>

													<Text
														mt={"0.5rem"}
														fontSize={"15px"}
														w={"16.5rem"}
														mb={"3rem"}
														color={"#1E1E1E"}
														textAlign={{
															base: "center",
															md: "left",
															lg: "left",
														}}
														mr={{ base: "auto", md: "0", lg: "0" }}
														ml={{ base: "auto", md: "0", lg: "0" }}
													>
														{item?.details}
													</Text>
												</Box>
											);
										})}
									</Grid>
								</Box>

								{/***********What Makes Tanta Innovative a Reliable Partner**************/}

								<Box id="our_customers" scrollMarginTop={"150px"}>
									<Heading
										fontWeight="700"
										fontSize={{ base: "20px", lg: "30px" }}
										color=" #414141"
										lineHeight={{ lg: "140%", base: "150%" }}
										mb={"0.5rem"}
										w={"37.563rem"}
										display={{ base: "none", md: "block", lg: "block" }}
									>
										What Makes &nbsp;
										<chakra.span color="#E9000E">
											Tanta Innovative
										</chakra.span>{" "}
										a Reliable Partner
									</Heading>
									<Box
										display={{ base: "none", md: "block", lg: "block" }}
										style={{
											width: "3rem",
											height: "2px",
											background: "rgba(233, 0, 14, 1)",
											marginBottom: " 2rem ",
										}}
									></Box>

									<Text
										fontSize={"18px"}
										w={{ base: "0", md: "45rem", lg: "50.313rem" }}
										color={"#000"}
										mb={"2rem"}
										display={{ base: "none", md: "block", lg: "block" }}
									>
										Our belief is that with our technical expertise and IT
										Services, combined with your innovative vision, we can
										create tech systems that will help you scale up your
										business by making life easier for your audience.
									</Text>
								</Box>

								<Text
									fontWeight="400"
									fontSize={"14px"}
									letterSpacing={" 0.765px"}
									color=" #414141"
									display={{ base: "block", md: "none", lg: "none" }}
								>
									OUR CUSTOMERS
								</Text>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "30px" }}
									color=" #414141"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
									w={"37.563rem"}
									display={{ base: "block", md: "none", lg: "none" }}
								>
									Valued Customer Base
								</Heading>
								<Box
									display={{ base: "block", md: "none", lg: "none" }}
									style={{
										width: "3rem",
										height: "2px",
										background: "rgba(233, 0, 14, 1)",
										marginBottom: " 2rem ",
									}}
								></Box>
								<Text
									fontSize={"12px"}
									w={"22rem"}
									color={"#000"}
									mb={"2rem"}
									display={{ base: "block", md: "none", lg: "none" }}
								>
									Tanta Innovatives is a leading provider of IT consulting and
									software development services that has helped businesses
									across multiple industries succeed. Our
								</Text>
								<LogoMarquee colored={true} />

								<Box id="testimonials" scrollMarginTop={"150px"}>
									<TantaTestimonial testimonials={testimonials} />
								</Box>

								<Summary />

								{/********************All IT Consulting Services**********************/}
								<Box
									mb={"3rem"}
									textAlign={{ base: "center", md: "left", lg: "left" }}
								>
									<Text
										fontSize={{ base: "20px", md: "30px", lg: "30px" }}
										fontWeight={"700"}
										color={"#565656"}
									>
										All IT Consulting Services
									</Text>

									<Flex
										justifyContent={"space-between"}
										mt={"2rem"}
										flexDir={{ base: "column", md: "row", lg: "row" }}
										flexWrap={"wrap"}
									>
										<Box>
											<Box>
												<Text
													fontSize={"22px"}
													fontWeight={"500"}
													color={"#303030"}
												>
													Services
												</Text>
												<Box
													border={"2px solid red"}
													borderRadius={"2px"}
													width={"12.5rem"}
													mt={"0.5rem"}
													background={"var(--primary-500, #F2666E)"}
													mr={{ base: "auto", md: "2rem", lg: "0" }}
													ml={{ base: "auto", md: "0", lg: "0" }}
												></Box>
											</Box>

											<List spacing={3} mt={"1rem"}>
												<ListItem>Cybersecurity Services</ListItem>
												<ListItem>Cybersecurity Consulting</ListItem>
												<ListItem>Security Program Development</ListItem>
												<ListItem>Managed Application Services</ListItem>
												<ListItem>Identity and Access Management</ListItem>
											</List>
										</Box>

										<Box>
											<Box>
												<Text
													fontSize={"22px"}
													fontWeight={"500"}
													color={"#303030"}
													mt={{ base: "2rem", md: "0", lg: "0" }}
												>
													Security Testing
												</Text>
												<Box
													border={"2px solid red"}
													borderRadius={"2px"}
													width={"12.5rem"}
													mt={"0.5rem"}
													background={"var(--primary-500, #F2666E)"}
													mr={{ base: "auto", md: "2rem", lg: "0" }}
													ml={{ base: "auto", md: "0", lg: "0" }}
												></Box>
											</Box>
											<List spacing={3} mt={"1rem"}>
												<ListItem>End-to-End Application Services</ListItem>
												<ListItem>Application Management</ListItem>
												<ListItem>Application Development</ListItem>
												<ListItem>Managed Application Services</ListItem>
												<ListItem>Application Modernization</ListItem>
											</List>
										</Box>

										<Box>
											<Box>
												<Text
													fontSize={"22px"}
													fontWeight={"500"}
													color={"#303030"}
													mt={{ base: "2rem", md: "2rem", lg: "0" }}
												>
													Compliance Services
												</Text>
												<Box
													border={"2px solid red"}
													borderRadius={"2px"}
													width={"12.5rem"}
													mt={"0.5rem"}
													background={"var(--primary-500, #F2666E)"}
													mr={{ base: "auto", md: "0", lg: "0" }}
													ml={{ base: "auto", md: "0", lg: "0" }}
												></Box>
											</Box>
											<List spacing={3} mt={"1rem"}>
												<ListItem>End-to-End Application Services</ListItem>
												<ListItem>Application Management</ListItem>
												<ListItem>Application Development</ListItem>
												<ListItem>Managed Application Services</ListItem>
												<ListItem>Application Modernization</ListItem>
											</List>
										</Box>
									</Flex>
								</Box>
							</Box>
						</Box>
					</Flex>
				</Container>
			</Box>
		</>
	);
}

export default ItStrategy;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;
	width: 100%;
	font-family: "Roboto", sans-serif;

	${breakpoints.lg} {
		.hero-img {
			width: 45%;
		}
	}

	@media (max-width: 700px) {
		flex-direction: column-reverse;
		gap: 0;

		.hero-img {
			min-width: 90%;
			height: 100%;
			position: relative;
			left: 1rem;
		}
	}

	${breakpoints.md} {
		.hero-img {
			padding-top: 1rem;
			width: 40%;
			position: relative;
			right: 2rem;
		}
`;

const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;

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
		font-size: 40px;
		font-weight: 700;
		margin-top: 0;
		padding-top: 0;
		color: rgba(64, 66, 67, 1);

		${breakpoints.lg} {
			font-size: 1.7rem;
			text-align: center;
			margin-top: 1rem;
		}

		${breakpoints.md} {
			font-size: 2rem;
			margin-top: 1rem;
			text-align: left;
		}

		@media (max-width: 700px) {
			font-size: 20px;
			font-weight: 700;
			color: #404243;
			text-align: center;
		}

		&::before {
			position: absolute;
			content: "";
			top: -3px;
			left: -30px;
			height: 100%;
			width: 3px;
			background: linear-gradient(to bottom, red 30%, white, white);

			@media (max-width: 700px) {
				display: none;
			}
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
			@media (max-width: 700px) {
				display: none;
			}
		}
	}

	> p {
		font-size: 22px;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		margin-top: 2rem;
		color: #333;
		width: 645px;

		${breakpoints.sm} {
			font-size: 12px;
			font-family: "Roboto", sans-serif;
			color: #333;
			display: flex;
			justify-content: center;
			max-width: 350px;
			text-align: center;
		}

		${breakpoints.md} {
			width: 420px;
			padding: 0;
			font-size: 14px;
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
		flex-direction: row;
		gap: 1rem;
	}

	.request-services {
		border-radius: 8px;
		background: var(
			--tanta-gradient,
			linear-gradient(221deg, #ac2121 0%, #e9000e 100%)
		);
		box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15),
			0 1px 2px 0 rgba(0, 0, 0, 0.3);
		border: none;
		height: 49px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		width: 17.875rem;
		color: #fff;
		text-align: center;
		font-size: 16px;
		font-weight: 500;
		text-transform: uppercase;
		


		${breakpoints.md} {
			width: 13rem;
			position: relative;
			right: 0.5rem;
		}

		${breakpoints.lg} {
			font-size: 0.7rem;
		}
		@media (max-width: 700px) {
			display: none;
		}

		&:hover {
			opacity: 0.8;
		}
	}

	.get-quote {
		background-color: #fff;
		color: var(--secondary-50, #b60e09);
		border: 2px solid rgba(182, 14, 9, 1);
		padding: 0 36px;
		width: 195px;
		height: 49px;
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		text-align: center;
		text-transform: uppercase;
		border-radius: 10px;
		transition: all 0.2s ease-in-out;
		min-width: 100px;

		// ${breakpoints.lg} {
		// 	font-size: 0.7rem;
		// 	padding: 0.5rem 1.5rem;
		// }

		${breakpoints.sm} {
			width: 97.5px;
			height: 26px;
			font-size: 10px;
			text-align: center;
			display: flex;
			justify-content: center;
			border-radius: 4px;
			padding: 0;
		}
		${breakpoints.md} {
			width: 170px;
			font-size: 14px;
			
		}

		&:hover {
			background-color: #b10000;
			color: #fff;
		}
	}

	.mobile-request-services{
		display: none;
		@media (max-width: 700px) {
			background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
			border-radius: 4px;
			color: #fff;
			border: none;
			font-size: 10px;
			font-weight: 500;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.2rem;
			cursor: pointer;
			text-transform: uppercase;
			width: 143px;
			height: 26px;

			

			&:hover {
				opacity: 0.8;
			}
			
		}
`;
