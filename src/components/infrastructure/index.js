import HeaderOne from "../../components/HeaderOne";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Flex,
	Grid,
	List,
	ListIcon,
	ListItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";

// images and icons are imported here
import { bannerImg, herobg } from "../../../public/assets/infrastructure";
import { MdKeyboardArrowRight, MdSquare } from "react-icons/md";
// import { bannerImg } from '../../../public/assets/testing-qa'
import { agents, mainBarData, services, sideBarData } from "./data";
import ServicesForm from "../servicesForm/servicesForm";
import TechSackGrid from "../techStackGrid/techSackGrid";
import TantaTestimonial from "../tantaTestimonials";
import appRoutes from "../../utils/appRoutes";
import {analyticsConsultingSummary} from "../dataAnalytics/analyticsConsulting/data";
import {IoIosCheckmark} from "react-icons/io";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

const InfrastructurePage = ({ stacks, testimonials }) => {
	const [activeLink, setActiveLink] = useState({});

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	return (
		<>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<HeaderOne heading={"Services"} title={"it infrastructure services"} />
				<Container maxW={"7xl"} px={{lg: "5rem", base: "1rem"}}>
					{/* ================= hero section ================= */}
					<Flex
						mb={"1rem"}
						justifyContent={"center"}
						alignItems={"center"}
						flexDir={{ base: "column-reverse", md: "row", lg: "row" }}
					>
						<Box w={{ base: "100%", lg: "50%" }}>
							<Flex
								direction={"column"}
								p={{ base: "0 1rem", lg: " 0 2rem" }}
								borderRight={"10px solid #FFFFFF"}
							>
								<Box borderLeft={"4px solid #E9000E"} p={".5rem 1rem"} mt={{lg:"0", base:"2rem"}}>
									<Text
										as="h2"
										fontSize={{ base: "22px", lg: "35px" }}
										w={"100%"}
										fontWeight={"700"}
									>
										Empowering your Digital Transformation Journey
									</Text>
								</Box>
								<Box mt={"1.5rem"}>
									<Text fontSize={{lg:"1.1rem", base:".9rem"}} textAlign={{lg:"left", base:"center"}}>
										Tanta Innovative provides round-the-clock IT infrastructure
										services designed to optimize servers, databases, and
										applications for medium-sized and large enterprises. With
										our expertise, you can ensure that your IT infrastructure
										remains highly available, fast, resilient, sustainable, and
										cost-efficient. Trust us to keep your systems running
										smoothly and maximize the performance of your critical IT
										assets.
									</Text>

									<ButtonGroup my={"1rem"}
												 display={"flex"}
												 alignItems={"center"}
												 gap={"1rem"}
												 justifyContent={{lg:"flex-start", sm:"flex-start", md:"flex-start", base:"center"}}
												 flexDir={{lg:"row", sm:"row", md:"row", base:"column"}}>
										<Link
											href={{
												pathname: appRoutes.contactUs,
												query: { service: "services/infrastructure-services" },
											}}
											service="services/infrastructure_services"
											className="request-services"
										>
											{" "}
											<Button
												fontWeight="500"
												fontSize={{ base: "12px", lg: "16px" }}
												lineHeight="24px"
												bg={"#CE0000"}
												color={"#FFFFFF"}
												textTransform={"uppercase"}
												variant="solid"
											>
												Request IT infrastructure services{" "}
											</Button>
										</Link>
										<Link
											href={{
												pathname: appRoutes.services["cost-calculator"],
												query: { service: "itInfrastructure-10" },
											}}
										>
											{" "}
											<Button
												fontWeight="500"
												fontSize={{ base: "12px", lg: "16px" }}
												lineHeight="24px"
												colorScheme="red"
												textTransform={"uppercase"}
												variant="outline"
												padding= {"0.5rem 2rem"}
											>
												get a quote
											</Button>
										</Link>
									</ButtonGroup>
								</Box>
							</Flex>
						</Box>
						{/* ================= hero section image ================= */}
						<Box width={{lg:"45%", base:"60%"}} >
							<Image src={herobg} alt={"hero"}  />
						</Box>

					</Flex>
					<Box mb={"2rem"}></Box>

					<Flex
						gap={"3rem"}
						justify={"center"}
						align={{ base: "center", lg: "start" }}
						flexDir={{ base: "column", lg: "row" }}
						mb={"7rem"}
						mt={"7rem"}
						px={"1rem"}
					>
						<Flex
							flexDir="column"
							boxShadow={"lg"}
							height={"fit-content"}
							top={"10rem"}
							pb={"1rem"}
							borderBottom={"lg"}
							display={{ base: "none", lg: "flex" }}
							width={{ base: "100%", lg: "30%" }}
							position={{ base: "", lg: "sticky" }}
							// overflowY="scroll"
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
								Contents
							</Text>
							<Box px={"1rem"}>
								{sideBarData.map((item, index) => {
									return (
										<Flex
											paddingInline={".4rem"}
											justifyContent={"space-between"}
											key={index}
											p={".3rem"}
											cursor={"pointer"}
										>
											<Link
												fontSize={"lg"}
												fontWeight={"normal"}
												onClick={() => {
													setActiveLink({ [item.link]: true });
												}}
												style={{
													color: activeLink[item.link] ? "red" : "",
													fontSize: "18px",
													fontWeight: "400",
													cursor: "pointer",
													width: "100%",
												}}
												href={item.link}
											>
												{item.title}
											</Link>

											<MdKeyboardArrowRight cursor={"pointer"}
																  size={"2rem"}
																  style={{ marginLeft: "47px" }}/>
										</Flex>
									);
								})}
							</Box>
						</Flex>
						<Box width={{ base: "100%", lg: "70%" }}>
							{/* ================= Why chose us Section =================  */}
							<Box mb={"4rem"} id={'about'} scrollMarginTop={"190px"}>
								<Text
									fontWeight="700"
									fontSize={{ base: "26px", lg: "30px" }}
									textTransform={"capitalize"}
									lineHeight={{lg:"70px", base:"50px"}}
								>
									why Choose{" "}
									<span style={{ color: "#E9000E" }}>Tanta Innovative</span>
								</Text>
								<div
									style={{
										width: "130px",
										height: "4px",
										background: "#ff0000",
									}}
								></div>
								{mainBarData.slice(0, 1).map((item, index) => (
									<Box
										mb="4.5rem"
										w={"100%"}
										key={index}
									>
										{item.text.map((child, index) => (
											<Text
												fontWeight="400"
												fontSize={{ base: "16px", lg: "20px" }}
												lineHeight="170%"
												my="15px"
												key={index}
											>
												{child}
											</Text>
										))}

										<Box
											display={"flex"}
											flexDir={{ base: "column", lg: "row" }}
											justifyContent={"center"}
										>
											{item.cards.map((item, key) => (
												<Box
													p="20px"
													m="15px"
													textAlign={"center"}
													display="flex"
													justifyContent="center"
													alignItems={"center"}
													flexDir="column"
													key={key}
												>
													<Image src={item?.image} alt="icons" w={90} h={90} />
													<Text
														fontWeight="700"
														fontSize={{ base: "30px", lg: "35px" }}
														lineHeight="140%"
														color={"#9F000A"}
														my={"10px"}
													>
														{item?.title}
													</Text>
													<Text
														fontWeight="500"
														fontSize={{ base: "20px", lg: "25px" }}
														lineHeight="170%"
														textAlign="center"
														color="#6B6F71"
													>
														{item?.text}
													</Text>
												</Box>
											))}
										</Box>
										{/*  */}
										{item.lists.map((list, key) => {
											return (
												<List key={key}>
													<ListItem
														fontWeight="400"
														fontSize={{ base: "14px", lg: "18px" }}
														lineHeight="170%"
														my={"15px"}
													>
														<ListIcon as={MdSquare} color="red.500" /> {list}
													</ListItem>
												</List>
											);
										})}
									</Box>
								))}
							</Box>

							{/* ================== banner.js section ==================  */}
							<Flex
								background={"#FDE6E7"}
								justifyContent={"center"}
								alignItems={{ base: "center", lg: "start" }}
								flexDir={{ base: "column", lg: "row" }}
								padding={"1.5rem"}
								borderRadius={"3px"}
								mb={"7rem"}
							>
								<Box width={{ base: "100%", lg: "50%" }}>
									<Text
										fontWeight="700"
										fontSize={{ base: "24px", md:"26px", lg: "30px" }}
										lineHeight={{lg:"170%", base:"40px"}}
									>
										WANT TO EXPLORE <br></br>
										<span style={{ color: "#D80808" }}>
											INFRASTRUCTURE SERVICE
										</span>
									</Text>
									<Text
										fontWeight="600"
										fontSize={{ base: "15px", lg: "18px" }}
										lineHeight="170%"
										color="#565656"
										my={"1.5rem"}
									>
										Tanta Innovative will help you build accurate and
										transparent analytics and reporting to eliminate the
										guesswork out of your business processes and identify new
										profit opportunities
									</Text>
									<Link
										href={{
											pathname: appRoutes.contactUs,
											query: { service: "services/infrastructure-services" },
										}}
										service="services/infrastructure_services"
										className="request-services"
									>
										<Button
											bg="#F2666E"
											color={"#fff"}
											borderRadius={"8px"}
											// p={"15px 2rem"}
											mb={{ base: "2rem" }}
										>
											Request IT infrastructure Services
										</Button>
									</Link>
								</Box>
								<Image src={bannerImg} alt="banner-image" />
							</Flex>

							{/* ======================== it infrastructure services =================== */}
							{mainBarData.slice(1, 2).map((item, index) => (
								<Box
									mb="4.5rem"
									width={"100%"}
									key={index}
									scrollMarginTop={"150px"}
									id={'services'}
								>
									<Text
										fontWeight="700"
										fontSize={{ base: "20px", lg: "28px" }}
										lineHeight={{lg:"70px", base:"50px"}}
									>
										{item.title}
										<Text as="span" style={{ color: "#E9000E" }} ml={"3px"}>
											Tanta Innovative
										</Text>{" "}
										Delivers
									</Text>
									<div
										style={{
											width: "130px",
											height: "4px",
											background: "#ff0000",
										}}
									></div>
									{item.text.map((child, index) => (
										<Text
											fontWeight="400"
											fontSize={{ base: "16px", lg: "20px" }}
											lineHeight="170%"
											my="15px"
											key={index}
										>
											{child}
										</Text>
									))}
									<Box>
										{item.lists.map((list, key) => {
											return (
												<List key={key}>
													<ListItem
														fontWeight="400"
														fontSize={{ base: "14px", lg: "18px" }}
														lineHeight="170%"
														my={"15px"}
													>
														<ListIcon as={MdSquare} color="red.500" /> {list}
													</ListItem>
												</List>
											);
										})}
									</Box>
									<Grid
										gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
										justifyContent={"center"}
									>
										{item.cards.map((item, key) => (
											<Box
												m="15px"
												display="flex"
												border="1px solid rgba(0, 0, 0, 0.3)"
												borderRadius="10px"
												flexDir="column"
												key={key}
											>
												<Flex
													borderBottom={"1px solid rgba(0, 0, 0, 0.3)"}
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
														fontSize={{lg:"18px", base:"16px"}}
														lineHeight="170%"
														color="#000000"
													>
														{item?.text}
													</Text>
												</Flex>
											</Box>
										))}
									</Grid>
								</Box>
							))}

							<Box my={"1.5rem"} scrollMarginTop={"160px"} id={"tools"}>
								<Text
									fontWeight="400"
									fontSize={{ base: "14px", lg: "18px" }}
									lineHeight={{lg:"70px", base:"50px"}}
									color={"#636363"}
									textTransform={"uppercase"}
								>
									Technologies and Tools
								</Text>
								<Text
									fontWeight="700"
									fontSize={{ base: "26px", lg: "30px" }}
									textTransform={"capitalize"}
									lineHeight={{lg:"70px", base:"50px"}}
								>
									why Choose Tanta Innovative
								</Text>
								<div
									style={{
										width: "130px",
										height: "4px",
										background: "#ff0000",
									}}
								></div>
								<Text
									fontWeight="400"
									mt={"1.5rem"}
									fontSize={{ base: "16px", lg: "18px" }}
									lineHeight="20px"
								>
									With over 21 IT specialists on staff, 8 of whom are
									senior-level, who are experts in the following technology:
								</Text>

								<TechSackGrid stacks={stacks} />
							</Box>

							{/* ======================== challenges we solve =================== */}
							{mainBarData.slice(2, 3).map((item, index) => (
								<Box
									mb="4.5rem"
									width={"100%"}
									scrollMarginTop={"160px"}
									key={index}
									id={'solve'}
									mt={"3rem"}
								>
									<Text
										fontWeight="400"
										fontSize={{ base: "14px", lg: "18px" }}
										lineHeight="20px"
										color={"#636363"}
										textTransform={"uppercase"}
									>
										challenges we solve
									</Text>
									<Text
										fontWeight="700"
										fontSize={{ base: "20px", lg: "28px" }}
										lineHeight={{lg:"70px", base:"50px"}}
									>
										{item.title}
									</Text>
									<div
										style={{
											width: "130px",
											height: "4px",
											background: "#ff0000",
											marginBottom: "1rem",
										}}
									></div>
									{item.text.map((child, index) => (
										<Text
											fontWeight="400"
											fontSize={{ base: "16px", lg: "20px" }}
											lineHeight="170%"
											my="15px"
											key={index}
										>
											{child}
										</Text>
									))}
									<Grid
										gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
										justifyContent={"center"}
									>
										{item.cards.map((item, key) => (
											<Box
												m="15px"
												display="flex"
												justifyContent={"center"}
												alignItems={"center"}
												border="1px solid rgba(0, 0, 0, 0.3)"
												borderRadius="10px"
												flexDir="column"
												p="20px"
												key={key}
											>
												<Image
													src={item?.image}
													alt="icons"
													style={{ width: "60px", height: "60px" }}
												/>
												<Text
													fontWeight="600"
													fontSize={{lg:"20px", base:"18px"}}
													lineHeight="30px"
													color={"#303030"}
													my={"15px"}
												>
													{item?.title}
												</Text>
												<Text
													mb={"10px"}
													fontWeight="400"
													fontSize={{lg:"18px", base:"16px"}}
													lineHeight="170%"
													color="#000000"
												>
													{item?.text}
												</Text>
											</Box>
										))}
									</Grid>
								</Box>
							))}

							{/* ============== Testimonial Section ============  */}
							<Box
								scrollMarginTop={"140px"}
								id={"reviews"}
								mb="4.5rem"
								w={"100%"}
							>
								<TantaTestimonial testimonials={testimonials} />
							</Box>

							{/* ============== Selected project section =========== */}
							<Box id={'projects'} scrollMarginTop={"150px"}>
								<HandpickedProject title={"consulting projects"}/>
							</Box>

							{/* ======================= summary.js section ===============  */}
							<Box my={"1.5rem"} id={'summary'} scrollMarginTop={"150px"}>
								{analyticsConsultingSummary.map((item, index) => (
									<Box
										mb="4.5rem"
										width={"100%"}
										key={index}

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

														<List spacing={2}   mt={"1rem"}>
															{item.items && Array.isArray(item.items) && item.items.map((item, index) => {
																return (
																	<ListItem pl={4}
																			  key={index}
																	>
																		<Flex flexGrow={"1"} >
																			<ListIcon as={IoIosCheckmark} color='green' fontSize={"1.5rem"} mt={"0.2rem"}/>
																			<Text>
																				{item}
																			</Text>
																		</Flex>
																	</ListItem>
																);
															})}
														</List>

														<Link
															href={{
																pathname: appRoutes.contactUs,
																query: { service: "services/infrastructure-services" },
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
							{/* ======== All Infrastructure Services section ======= */}
							<Box mb="4.5rem" w={"100%"}>
								<Text
									fontWeight="700"
									fontSize={{ base: "20px", lg: "28px" }}
									lineHeight="70px"
								>
									All Applications Services
								</Text>
								<Box
									display={"flex"}
									flexDir={{ base: "column", lg: "row" }}
									justifyContent={"center"}
									alignItems={"start"}
								>
									{services.map((object, index) => {
										return (
											<Box key={index} m={"2rem"}>
												<Flex align={"center"} minH={"4rem"}>
													<Text
														fontWeight="500"
														fontSize="22px"
														lineHeight="130.5%"
														mb={"13px"}
													>
													{object?.title}
													</Text>
												</Flex>
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
					{/* ========= become an agent section ====== */}
					<Flex
						gap={"4rem"}
						direction={{ base: "column", lg: "row" }}
						w={"100%"}
						p={{ base: "1rem", lg: "0 90px" }}
						my={"2.5rem"}
					>
						{/* ========= Get in touch ========= */}
						<Flex w={{ base: "100%", md: "50%" }}>
							<Flex
								direction={"column"}
								p={{ lg: " 0 2rem" }}
								borderRight={"10px solid #FFFFFF"}
							>
								<Box borderLeft={"6px solid #E9000E"} p={".5rem 2rem"}>
									<Text
										as="h2"
										fontSize={{ base: "24px", lg: "35px" }}
										w={"100%"}
										fontWeight={"700"}
									>
										Know Someone who needs
										<Text color={"red"}>Our Services?</Text>
									</Text>
								</Box>
								<Box mt={"1.5rem"}>
									{agents.map((item, index) => (
										<Flex align={"center"} gap={"1rem"} key={index} my={"2rem"}>
											<Image
												src={item?.image}
												alt="icon"
												width={80}
												height={80}
											/>
											<Text
												fontWeight="400"
												fontSize={{ base: "16px", lg: "20px" }}
												lineHeight="170%"
											>
												{item?.text}
											</Text>
										</Flex>
									))}
								</Box>
							</Flex>
							<Box
								width={"20px"}
								h={"100%"}
								bg={"#FFFFFF"}
								boxShadow={"11px 0px 29px rgba(0, 0, 0, 0.25)"}
							>
								{" "}
							</Box>
						</Flex>
						{/* ========= Agent Form========= */}
						<Box w={{ base: "100%", md: "50%" }}>
							<Text
								fontWeight="400"
								fontSize={{ base: "18px", lg: "22px" }}
								lineHeight="170%"
								mb="1rem"
							>
								Please fill in the form below to join our Agent program and get
								access to our personalized agent dashboard.
							</Text>
							<ServicesForm services="infrastructure service" />
						</Box>
					</Flex>
				</Container>
			</Box>
		</>
	);
};

export default InfrastructurePage;
