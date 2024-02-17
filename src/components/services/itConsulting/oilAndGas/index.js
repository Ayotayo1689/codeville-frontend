import React from "react";
import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	List,
	ListIcon,
	ListItem,
	Text,
} from "@chakra-ui/react";
import HeaderOne from "../../../HeaderOne";
import Header from "./header";
import rafiki from "../../../../../public/assets/itConsultingOilAndGas/rafiki.png";
import SideBar from "../operationalAnalytics/sidebar";
import {
	advantages,
	benefits,
	business,
	oilAndGasSidebar,
	production,
	services,
} from "./data";
import BusinessAdmin from "./businessAdmin";
import LogoMarquee from "../../../logoMarquee";
import { BsCheck, BsFillSquareFill } from "react-icons/bs";
import Image from "next/image";
import Banner from "../operationalAnalytics/banner";
import BannerImg from "../../../../../public/assets/operationalAnalysis/BannerImg.png";
import ContactUs from "../../../contactUs";
import MobileSlider from "./mobileSlider";
import TantaTestimonial from "../../../tantaTestimonials";
import Summary from "../itStrategy/summary";
import AllConsultingServices from "./allConsultingServices";

function OilAndGas({ testimonials }) {
	return (
		<>
			<Box>
				<HeaderOne
					heading={"SERVICES"}
					title={
						<>
							<Text color={"#444"}>
								OIL AND GAS{" "}
								<Text as="span" color="rgba(235, 80, 70, 1)">
									CONSULTING
								</Text>
							</Text>
						</>
					}
				/>

				<Container maxW={"7xl"} p={{ base: "1rem", lg: "4rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
					<Header
						title={"IT Services for Oil and\n" + "Gas Businesses"}
						description={
							"Tanta has been providing IT solutions for the oil and gas sector since 2010" +
							" by utilizing " +
							"big data, the cloud, the IIoT, sophisticated analysis, virtual reality (VR), " +
							"and augmented reality (AR). "
						}
						quoteBtn={"Get Help"}
						pathname={"/contact-us"}
						image={rafiki}
					/>
					<Box
						borderTop={"1px solid rgba(0, 0, 0, 0.30)"}
						boxShadow={" 0px 4px 10px 0px rgba(0, 0, 0, 0.50)"}
						mb={"3rem"}
						mt={"0.5rem"}
					></Box>

					<Flex>
						<SideBar
							title={"CONTENTS"}
							sideData={oilAndGasSidebar}
							minW={"21rem"}
							color={"#2A2A2A"}
						/>
						<Box
							fontFamily={"'Open Sans', sans-serif"}
							ml={{ base: "0", md: "2rem", lg: "2rem" }}
							id={"about_tanta"}
							scrollMarginTop={"150px"}
							width={"100%"}
							overflow={{ base: "hidden", md: "visible", lg: "visible" }}
						>
							<Box>
								<Text
									color={"#222"}
									fontSize={{ base: "17px", md: "24px", lg: "24px" }}
									fontWeight={"700"}
									w={"24.813rem"}
								>
									We Provide IT Solutions for Oil and Gas
								</Text>

								<Box
									w={{ base: "3rem", md: "8rem", lg: "8rem" }}
									h={"4px"}
									bg={"#D80808"}
									mb={{ base: "1rem", md: "0.5rem", lg: "0.5rem" }}
									mt={{ base: "0.5rem", md: "0", lg: "0" }}
								></Box>
								<Text
									color={"#3B3C3D"}
									fontSize={{ base: "11px", md: "18px", lg: "18px" }}
									w={{ base: "100%", md: "100%", lg: "55rem" }}
									textAlign={{ base: "center", md: "left", lg: "left" }}
								>
									Oil and gas IT solutions support the industry's adoption of
									digital transformation for greater oil recovery, improved
									drilling quality and efficiency, optimal reservoir management,
									and other benefits.
								</Text>
							</Box>

							{/*********************Business administration**************************************/}

							<Box mt={"3rem"} id={"solutions"} scrollMarginTop={"150px"}>
								<Text
									color={"#222"}
									fontSize={{ base: "17px", md: "24px", lg: "24px" }}
									fontWeight={"700"}
									w={"24.813rem"}
								>
									Business administration
								</Text>

								<Box
									w={{ base: "3rem", md: "8rem", lg: "8rem" }}
									h={"4px"}
									bg={"#D80808"}
									mb={{ base: "1rem", md: "0.5rem", lg: "0.5rem" }}
									mt={{ base: "0.5rem", md: "0", lg: "0" }}
								></Box>
								<Box display={{ base: "none", md: "block", lg: "block" }}>
									<BusinessAdmin
										Data={business}
										width={{
											base: "20.625rem",
											md: "20.938rem",
											lg: "25.938rem",
										}}
										height={"29rem"}
										w={{ base: "17.938rem", md: "20.688rem", lg: "22.688rem" }}
									/>
								</Box>
								<MobileSlider />
							</Box>

							{/************************************Production and Exploration**************************/}
							<Box
								mt={"3rem"}
								display={{ base: "none", md: "block", lg: "block" }}
							>
								<Text
									color={"#222"}
									fontSize={{ base: "17px", md: "24px", lg: "24px" }}
									fontWeight={"700"}
									w={"24.813rem"}
								>
									Production and Exploration
								</Text>

								<Box
									w={{ base: "3rem", md: "8rem", lg: "8rem" }}
									h={"4px"}
									bg={"#D80808"}
									mb={{ base: "1rem", md: "2rem", lg: "2rem" }}
									mt={{ base: "0.5rem", md: "0", lg: "0" }}
								></Box>
								<Box>
									<Grid
										gridTemplateColumns={{
											base: "1fr",
											lg: "1fr 1fr",
											md: "1fr 1fr",
											sm: "none",
										}}
										justifyContent={"center"}
										flexDir={{ base: "column", lg: "row" }}
										gridGap={"1rem"}
										alignItems={"center"}
									>
										{production.map((item, index) => {
											return (
												<Box
													key={"index"}
													height={"29.063rem"}
													width={{
														base: "20.625rem",
														md: "20.938rem",
														lg: "25.938rem",
													}}
													bg={"rgba(255, 255, 255, 0.002);"}
													boxShadow={" 0px 2px 20px rgba(0, 0, 0, 0.05)"}
													border={"1px solid #DADFE3"}
													boxSizing={"border-box"}
													position={"relative"}
												>
													<Box
														height={"10px"}
														width={{
															base: "20.625rem",
															md: "20.938rem",
															lg: "25.938rem",
														}}
														mb={"1rem"}
														bg={" #E9000E"}
													></Box>
													<Box
														width={{ base: "45px", md: "90px", lg: "90px" }}
														height={{ base: "45px", md: "90px", lg: "90px" }}
														m={"auto"}
														position={"relative"}
													>
														<Image src={item?.img} alt="icons" />
													</Box>
													<Text
														fontSize={"17px"}
														fontWeight={"700"}
														color={" #3B3C3D"}
														m={"1rem auto"}
														textAlign={"center"}
														w={"20.4rem"}
													>
														{item.title}
													</Text>

													<List
														mt={"1rem"}
														w={{
															base: "17.938rem",
															md: "20.688rem",
															lg: "22rem",
														}}
													>
														{item.content.map((item, index) => {
															return (
																<ListItem pl={4} key={"index"}>
																	<Flex flexGrow={"1"}>
																		<ListIcon
																			as={BsFillSquareFill}
																			color="red"
																			fontSize={"0.5rem"}
																			mt={"0.3rem"}
																		/>
																		<Text
																			fontSize={{
																				base: "11px",
																				md: "12.642px",
																				lg: "12.642px",
																			}}
																		>
																			{item}
																		</Text>
																	</Flex>
																</ListItem>
															);
														})}
													</List>
												</Box>
											);
										})}
									</Grid>
								</Box>
							</Box>
							{/*********************Tanta is a Trusted Technology Partner*********************************/}
							<Box>
								<Box
									mt={"3rem"}
									display={{ base: "none", md: "block", lg: "block" }}
								>
									<Text
										color={"rgba(21, 22, 22, 1)"}
										fontSize={"36px"}
										fontFamily={" Sumana"}
									>
										Why Tanta is a Trusted Technology Partner
									</Text>

									<div
										style={{
											width: "8rem",
											height: "4px",
											background: "#D80808",
											marginBottom: " 2rem ",
										}}
									></div>

									<Box w={"44rem"}>
										<LogoMarquee colored={true} />
									</Box>

									<List spacing={3} width={"537px"}>
										<ListItem
											fontWeight={"400"}
											fontSize={"16px"}
											display={"inline"}
										>
											<Flex>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text>
													{" "}
													Over a decade of experience in the information
													technology market, serving healthcare organizations.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"16px"}>
											<Flex>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text>
													{" "}
													A trusted IT for manufacturing firm with a strong
													track record of 13 years in the industry.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"16px"}>
											<Flex>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text>
													{" "}
													Proven expertise in streamlining IT processes and
													resolving issues promptly for manufacturing
													organizations.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"16px"}>
											<Flex>
												<ListIcon
													as={BsCheck}
													color="#E9000E"
													fontSize={"2rem"}
												/>
												<Text>
													{" "}
													Embracing the latest technologies to drive innovation
													and enhance patient care in the healthcare industry.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"16px"}>
											<Flex>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text>
													Tailored IT solutions designed specifically for the
													manufacturing industry, addressing its unique needs
													and requirements.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"16px"}>
											<Flex>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text>
													{" "}
													Committed to safeguarding the IT infrastructure of
													manufacturing providers and supporting their
													continuous evolution.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"16px"}>
											<Flex>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text>
													Dedicated team of experts with extensive knowledge and
													experience in manufacturing IT services.
												</Text>
											</Flex>
										</ListItem>
									</List>
								</Box>
								{/******Benefits of Developing Your IT Solution for the Oil and Gas Industry**************/}
								<Box
									mt={"3rem"}
									id={"benefits"}
									scrollMarginTop={"150px"}
									display={{ base: "none", md: "block", lg: "block" }}
								>
									<Text
										color={"rgba(21, 22, 22, 1)"}
										fontSize={"36px"}
										fontFamily={"Sumana"}
										w={"35.76rem"}
									>
										Benefits of Developing Your IT Solution for the Oil and Gas
										Industry
									</Text>

									<div
										style={{
											width: "8rem",
											height: "4px",
											background: "#D80808",
											marginBottom: " 0.5rem ",
										}}
									></div>

									<Grid
										gridTemplateColumns={{
											base: "none",
											lg: "1fr 1fr",
											md: "1fr 1fr",
											sm: "none",
										}}
										justifyContent={"center"}
										flexDir={{ base: "column", lg: "row" }}
										alignItems={"center"}
										gap={"1rem"}
										mt={"2rem"}
										w={"80%"}
									>
										{benefits.map((item, index) => {
											return (
												<Box
													key={"index"}
													height={"27rem"}
													width={"19.375rem"}
													bg={"rgba(255, 255, 255, 0.002);"}
													boxShadow={" 0px 2px 20px rgba(0, 0, 0, 0.05)"}
													border={"1px solid #DADFE3"}
													boxSizing={"border-box"}
													position={"relative"}
												>
													<Box
														height={"10px"}
														width={"19.3rem"}
														mb={"1rem"}
														bg={" #E9000E"}
													></Box>

													<Image
														src={item?.img}
														alt="icons"
														style={{
															width: "94.818px",
															height: "85.337px",
															margin: "auto",
															position: "relative",
														}}
													/>
													<Text
														fontSize={"18px"}
														fontWeight={"700"}
														color={"rgba(68, 68, 68, 1)"}
														w={"14rem"}
														m={"1rem auto"}
														textAlign={"center"}
													>
														{item?.title}
													</Text>

													<Text
														w={"17rem"}
														fontSize={"16px"}
														color={"rgba(68, 68, 68, 1)"}
														m={" auto"}
														textAlign={"center"}
													>
														{item?.details}
													</Text>
												</Box>
											);
										})}
									</Grid>
								</Box>

								{/**************Advantages of Digitizing Your Oil and Gas Operations******************/}
								<Box
									mt={"3rem"}
									id={"highlights"}
									scrollMarginTop={"150px"}
									display={{ base: "none", md: "block", lg: "block" }}
								>
									<Text
										color={"rgba(21, 22, 22, 1)"}
										fontSize={"36px"}
										fontFamily={"Sumana"}
										w={"30rem"}
									>
										Advantages of Digitizing Your Oil and Gas Operations
									</Text>

									<div
										style={{
											width: "7rem",
											height: "4px",
											background: "#D80808",
											marginBottom: " 0.5rem ",
										}}
									></div>
									<Text fontSize={"18px"}>
										The benefits of digital transformation in the oil and gas
										industry might be significant*.
									</Text>

									<Box w={"80%"} mt={"2rem"}>
										<Grid
											gridTemplateColumns={{
												base: "1fr",
												lg: "1fr 1fr 1fr",
												md: "1fr 1fr",
												sm: "",
											}}
											flexDir={{ base: "column", lg: "row" }}
											gap={"2rem"}
										>
											{advantages.map((item, index) => {
												return (
													<Box key={"index"}>
														<Text
															fontSize={"33px"}
															fontWeight={"600"}
															color={"rgba(233, 0, 14, 1)"}
														>
															{item?.title}
														</Text>

														<Text
															mt={"0.5rem"}
															fontSize={"14px"}
															w={"14rem"}
															color={"#1E1E1E"}
														>
															{item?.details}
														</Text>
													</Box>
												);
											})}
										</Grid>
									</Box>
								</Box>

								{/************************************Choose Your Service Option*********************/}
								<Box
									mt={"3rem"}
									display={{ base: "none", md: "block", lg: "block" }}
								>
									<Text color={"#222"} fontSize={"36px"} fontFamily={"Sumana"}>
										Choose Your Service Option{" "}
									</Text>

									<div
										style={{
											width: "7rem",
											height: "4px",
											background: "#D80808",
										}}
									></div>

									<BusinessAdmin
										Data={services}
										width={{
											base: "20.625rem",
											md: "20.938rem",
											lg: "25.938rem",
										}}
										height={"29rem"}
										showButton={true}
									/>
								</Box>

								<Box w={{ base: "100%", md: "60%", lg: "60%" }}>
									<Banner
										title1={"Get a Customized"}
										title2={"Healthcare Analytics Solution"}
										text={
											"To ensure the rapid distribution of analytics insights to target users" +
											" (front-line healthcare staff, managers, health analysts, etc.), " +
											"Tanta Innovatives data analytics professionals will assist you in designing " +
											"and developing a comprehensive healthcare analytics solution. APPLICATION" +
											" OF HEALTHCARE ANALYTICS IS REQUIRED "
										}
										image={BannerImg}
									/>
								</Box>
								{/*<Text*/}
								{/*	fontWeight="400"*/}
								{/*	fontSize={"14px"}*/}
								{/*	letterSpacing={" 0.765px"}*/}
								{/*	color=" #414141"*/}
								{/*	display={{ base: "block", md: "none", lg: "none" }}*/}
								{/*	mt={"2rem"}*/}
								{/*>*/}
								{/*	OUR CUSTOMERS*/}
								{/*</Text>*/}
								{/*<Heading*/}
								{/*	fontWeight="700"*/}
								{/*	fontSize={{ base: "20px", lg: "30px" }}*/}
								{/*	color=" #414141"*/}
								{/*	lineHeight={{ lg: "140%", base: "150%" }}*/}
								{/*	mb={"0.5rem"}*/}
								{/*	w={"37.563rem"}*/}
								{/*	display={{ base: "block", md: "none", lg: "none" }}*/}
								{/*>*/}
								{/*	Valued Customer Base*/}
								{/*</Heading>*/}
								{/*<Box*/}
								{/*	display={{ base: "block", md: "none", lg: "none" }}*/}
								{/*	style={{*/}
								{/*		width: "3rem",*/}
								{/*		height: "2px",*/}
								{/*		background: "rgba(233, 0, 14, 1)",*/}
								{/*		marginBottom: " 2rem ",*/}
								{/*	}}*/}
								{/*></Box>*/}
								{/*<Text*/}
								{/*	fontSize={"12px"}*/}
								{/*	w={"22rem"}*/}
								{/*	color={"#000"}*/}
								{/*	mb={"2rem"}*/}
								{/*	display={{ base: "block", md: "none", lg: "none" }}*/}
								{/*>*/}
								{/*	Tanta Innovatives is a leading provider of IT consulting and*/}
								{/*	software development services that has helped businesses*/}
								{/*	across multiple industries succeed. Our*/}
								{/*</Text>*/}
								{/*<Box*/}
								{/*	w={{ base: "100%", md: "44rem", lg: "44rem" }}*/}
								{/*	display={{ base: "block", md: "none", lg: "none" }}*/}
								{/*>*/}
								{/*	<LogoMarquee colored={true} />*/}
								{/*</Box>*/}
								<Box
									id="testimonials"
									scrollMarginTop={"150px"}
									display={{ base: "block", md: "none", lg: "none" }}
								>
									<TantaTestimonial testimonials={testimonials} />
								</Box>

								<Box
									mt={"3rem"}
									display={{ base: "block", md: "none", lg: "none" }}
								>
									<Text color={"#222"} fontSize={"18px"} fontWeight={"700"}>
										Why Outsource at Tanta{" "}
									</Text>

									<Box
										w={{ base: "3rem", md: "8rem", lg: "8rem" }}
										h={"4px"}
										bg={"#D80808"}
										mb={{ base: "1rem", md: "0.5rem", lg: "2rem" }}
										mt={{ base: "0.5rem", md: "0", lg: "0" }}
									></Box>

									<Box
										w={{ base: "100%", md: "44rem", lg: "44rem" }}
										display={{ base: "block", md: "none", lg: "none" }}
									>
										<LogoMarquee colored={true} />
									</Box>

									<List spacing={3} width={"365px"} mt={"3rem"}>
										<ListItem
											fontWeight={"400"}
											fontSize={"14px"}
											display={"inline"}
										>
											<Flex justifyContent={"center"}>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text width={"233px"} textAlign={"center"} >
													{" "}
													Over a decade of experience in the information
													technology market, serving healthcare organizations.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"14px"}>
											<Flex justifyContent={"center"}>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text width={"233px"} textAlign={"center"}>
													{" "}
													A trusted IT for manufacturing firm with a strong
													track record of 13 years in the industry.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"14px"}>
											<Flex justifyContent={"center"}>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text width={"233px"} textAlign={"center"}>
													{" "}
													Proven expertise in streamlining IT processes and
													resolving issues promptly for manufacturing
													organizations.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"14px"}>
											<Flex justifyContent={"center"}>
												<ListIcon
													as={BsCheck}
													color="#E9000E"
													fontSize={"2rem"}
												/>
												<Text width={"233px"} textAlign={"center"}>
													{" "}
													Embracing the latest technologies to drive innovation
													and enhance patient care in the healthcare industry.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"14px"}>
											<Flex justifyContent={"center"}>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text width={"233px"} textAlign={"center"}>
													Tailored IT solutions designed specifically for the
													manufacturing industry, addressing its unique needs
													and requirements.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"14px"}>
											<Flex justifyContent={"center"}>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text width={"233px"} textAlign={"center"}>
													{" "}
													Committed to safeguarding the IT infrastructure of
													manufacturing providers and supporting their
													continuous evolution.
												</Text>
											</Flex>
										</ListItem>
										<ListItem fontWeight={"400"} fontSize={"14px"}>
											<Flex justifyContent={"center"}>
												<ListIcon
													as={BsCheck}
													color=" #E9000E"
													fontSize={"2rem"}
												/>
												<Text width={"233px"} textAlign={"center"}>
													Dedicated team of experts with extensive knowledge and
													experience in manufacturing IT services.
												</Text>
											</Flex>
										</ListItem>
									</List>
									<Box display={{ base: "block", md: "none", lg: "none" }}>
										<Summary />
										<AllConsultingServices />
									</Box>
								</Box>
							</Box>
						</Box>
					</Flex>
				</Container>
				<ContactUs subtitle="We’re here to support" />
			</Box>
		</>
	);
}

export default OilAndGas;
