import React from "react";
import HeaderOne from "../../../HeaderOne";
import {Box, Button, Container, Flex, Grid, Image, Text} from "@chakra-ui/react";
import Link from "next/link";
import Content from "./content";
import {colors} from "../../../../../styles/theme";
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from "react-icons/md";
import LogoMarquee from "../../../logoMarquee";
import styled from "styled-components";
import {advantages, offeringLength, outSourceData, ServiceOption, solutionsData} from "./data";
import {FaCheck} from "react-icons/fa";
import ContactUs from "../../../contactUs";
import {AiFillStar} from "react-icons/ai";
import ServiceOptions from "../bigIntelligence/ServiceOptions";
import SolutionCards from "../healthcareDataAnalytics/solutionsCard";
import {SectionHeading} from "../logisticsConsulting";
import PinkBanner from "../pinkBanner";
import TantaTestimonial from "../../../tantaTestimonials";
import appRoutes from "../../../../utils/appRoutes";

const ManufacturingConsulting = ({testimonials}) => {
    return (
			<>
				<Box mt={{ base: "5rem", lg: "7rem" }}>
					<HeaderOne
						heading={"SERVICES"}
						title={
							<>
								MANUFACTURING{" "}
								<span style={{ color: `${colors.primaryColor}` }}>
									Consulting
								</span>
							</>
						}
					/>
				</Box>
				<Container
					maxW={"7xl"}
					mb={"1rem"}
					bg={{ base: "#F7F2FA", lg: "white" }}
				>
					<Flex gap={"3rem"} direction={{base: "column-reverse", lg: "unset"}}>
						<Box w={{ base: "100%", lg: "50%" }}>
							<HeroText>
								<h1>
									IT Services and Solutions
									<span style={{ display: "block" }}>for Manufacturers</span>
								</h1>
							</HeroText>
							<Text
								p={{ base: "2", lg: "8" }}
								lineHeight={{ base: "6", lg: "8" }}
								textAlign={{base: "center", lg: "unset"}}
							>
								Tanta has13 years of expertise building software for the
								manufacturing sector and offers strong solutions and related
								services to support and modernize your enterprise's operations,
								ensuring greater operational efficiency and streamlined business
								expenses while avoiding IT budget overruns.
							</Text>
							<Flex justify={{base: "center", lg: "unset"}} mt={{base: "1.5rem", lg: "unset"}}>
								<Link
									href={{
										pathname: appRoutes.services["cost-calculator"],
										query: { service: "itConsulting-6" },
									}}
								>
									<Button
										background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
										px={{ base: "1rem", lg: "2.5rem" }}
										borderRadius={"lg"}
										color={"white"}
										_hover={"none"}
										ml={{base: "0", lg: "2rem"}}
									>
										Get help
									</Button>
								</Link>
							</Flex>
						</Box>
						<Image
							src={"/assets/consulting/amico.png"}
							alt="hero image"
							width={{ base: 300, lg: 400 }}
						/>
					</Flex>
					<Box
						borderBottom={"1px"}
						opacity={"0.2"}
						marginTop={"1.5rem"}
						shadow={"bold"}
					></Box>
					<Flex gap={"5rem"} py={{ base: "2", lg: "10" }}>
						<Content />
						<Box
							w={{ base: "100%", lg: "70%" }}
							id={"service"}
							scrollMarginTop={"150px"}
						>
							<Box
								id="Package"
								scrollMarginTop={"150px"}
								width={"100%"}
								flex={3}
								mb={"2rem"}
								display={"flex"}
								flexDirection={"column"}
							>
								<Text
									mb={"20px"}
									mt={"10px"}
									fontSize={{ base: "1rem", lg: "18px" }}
								>
									IT solutions for manufacturing are intended to streamline a
									manufacturer's operations, from supply chain management to
									sales management, allowing the organization to increase
									productivity while decreasing operating expenses.
								</Text>
							</Box>

							{/*=======Why Outsource at Tanta======*/}

							<Box id={"whyUs"} scrollMarginTop={"150px"}>
								<Text
									fontWeight={"700"}
									fontSize={{ base: "lg", lg: "3xl" }}
									pb={"5px"}
								>
									Why Outsource at Tanta
								</Text>
								<Box bg={"red"} height={"3px"} mb={"20px"} w={"4rem"}></Box>
								<Flex
									mt={"30px"}
									justifyContent={"center"}
									alignItems={"center"}
								>
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
								<Box w={{ base: "100%", lg: "563px" }} pt={"1rem"}>
									{outSourceData.map((item, index) => {
										return (
											<Flex
												key={index}
												gap={"3"}
												pb={"1rem"}
												alignItems={"center"}
											>
												<div>
													<FaCheck color={"red"} />
												</div>
												<div style={{ fontSize: "16px" }}>{item.details}</div>
											</Flex>
										);
									})}
								</Box>
							</Box>

							{/*===================IT Solutions for Manufacturing to Optimize Your Operations=============*/}
							<Box id="it-Solution" scrollMarginTop={"150px"} my={"2rem"}>
								<SectionHeading
									heading={
										<>
											IT Solutions for Manufacturing to Optimize{" "}
											<span style={{ display: "block" }}> Your Operations</span>
										</>
									}
								/>
								<div
									style={{
										display: "grid",
										gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
										gridGap: "1rem",
										marginTop: "2rem",
									}}
								>
									{solutionsData.map((item, index) => {
										return (
											<SolutionCards
												key={index}
												title={
													<div
														style={{
															textDecoration: "none",
															display: "inline",
														}}
													>
														{item?.title}
													</div>
												}
												imageUrl={item?.image}
												listItems={item?.listItems}
											/>
										);
									})}
								</div>
							</Box>

							{/*=====================What our Clients Say About Us=====================*/}

							<Box mt={"3rem"} id="testimonies" scrollMarginTop={"150px"}>
								<TantaTestimonial testimonials={testimonials} />
							</Box>

							{/*======================Tanta's Manufacturing Offering Lengths===================*/}
							<Box id={"offerings"} scrollMarginTop={"150px"}>
								<Text
									fontWeight={"400"}
									fontSize={{ base: "lg", lg: "3xl" }}
									pb={"5px"}
								>
									Tanta's Manufacturing Offering Lengths
								</Text>
								<Box bg={"red"} height={"3px"} mb={"20px"} w={"4rem"}></Box>
								<Box pt={"1rem"}>
									{offeringLength.map((item, index) => {
										return (
											<Flex
												key={index}
												gap={"3"}
												pb={"1rem"}
												alignItems={"center"}
											>
												<div style={{ color: `${colors.primaryColor}` }}>
													<AiFillStar fontSize={"2rem"} />
												</div>
												<div style={{ fontSize: "16px" }}>{item.details}</div>
											</Flex>
										);
									})}
								</Box>
							</Box>

							{/*====================Choose Your Service Option====================*/}

							<Box
								justifyContent={"center"}
								id={"options"}
								scrollMarginTop={"100px"}
								pt={"3rem"}
							>
								<Text
									fontWeight={"700"}
									fontSize={{ base: "lg", lg: "3xl" }}
									pb={"5px"}
								>
									Choose Your Service Option
								</Text>
								<Box bg={"red"} height={"3px"} mb={"20px"} w={"4rem"}></Box>
								<Flex gap={"2rem"} mt={"2rem"} flexWrap={"wrap"}>
									{ServiceOption.map((item, index) => (
										<ServiceOptions
											key={index}
											title={
												<span style={{ fontSize: "16px", textAlign: "center" }}>
													{item.title}
												</span>
											}
											img={item.img}
											lists={item.lists}
											btn={item.link}
											description={item.description}
										/>
									))}
								</Flex>
							</Box>
							{/*================Reinforce Your Business Operations with IT Solutions=========================*/}
							<Box my={"3rem"} id={"reinforce"} scrollMarginTop={"150px"}>
								<Text
									color={"rgba(21, 22, 22, 1)"}
									fontSize={{base: "1.5rem", lg: "36px"}}
									fontFamily={"Sumana"}
									// w={"30rem"}
								>
									Reinforce Your Business Operations with IT Solutions
								</Text>
								<div
									style={{
										width: "7rem",
										height: "4px",
										background: "black",
										marginBottom: " 0.5rem ",
									}}
								></div>
								<Box></Box>
								<Text fontSize={"18px"} mt={".7rem"}>
									By leveraging IT at your manufacturing company, you can
									achieve a number of gains, including:
								</Text>
								<Box w={"40%"} mt={"2rem"}>
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
										{advantages.map((item, index) => {
											return (
												<Box key={"index"}>
													<Box borderLeft={"2px solid #ABB1B4"} px={"1rem"}>
														<Text fontSize={"33px"} fontWeight={"600"}>
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
												</Box>
											);
										})}
									</Grid>
								</Box>
							</Box>

							{/* PINK BANNER SECTION */}

							<Box id="projects" scrollMarginTop={"150px"}>
								<PinkBanner
									title={
										<>
											Get a Customized{" "}
											<span style={{ color: "#E9000E" }}>
												{" "}
												Healthcare Analytics Solution
											</span>{" "}
										</>
									}
									text={
										"To ensure the rapid distribution of analytics insights to target users (front-line healthcare staff, managers, health analysts, etc.), Tanta Innovatives data analytics professionals will assist you in designing and developing a comprehensive healthcare analytics solution. APPLICATION OF HEALTHCARE ANALYTICS IS REQUIRED"
									}
								/>
							</Box>
						</Box>
					</Flex>
				</Container>
				<ContactUs subtitle={"We’re here to support"} />
			</>
		);
}
export default ManufacturingConsulting;

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
	`
