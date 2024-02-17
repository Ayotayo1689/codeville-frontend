import HeaderOne from "../../HeaderOne";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import appRoutes from "../../../utils/appRoutes";
// imported components here
import LogoMarquee from "../../logoMarquee";

// imported styling here
import {
	Box,
	Button,
	Card,
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
	UnorderedList,
} from "@chakra-ui/react";

// images and icons are imported here
import { about, herobg, undraw } from "../../../../public/assets/cybersecurity";
import { MdKeyboardArrowRight, MdSquare } from "react-icons/md";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import  {IoIosCheckmark} from "react-icons/io"
import {
	aboutList,
	mainBarData,
	services,
	sideBarData,
} from "./data";
import ServicesForm from "../../servicesForm/servicesForm";
import { breakpoints } from "../../../../styles/theme";
import styled from "styled-components";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

const CybersecurityPage = () => {
	const [activeLink, setActiveLink] = useState({});

	const [showMore, setShowMore] = useState(false);
	const toggleShowMore = () => {
		setShowMore(!showMore);
	};
	const [seeMoreStatus, setSeeMoreStatus] = useState({});
	const handleSetStatus = (key) => {
		setSeeMoreStatus((prevState) => {
			let prevCopy = { ...prevState };
			if (!prevCopy?.[key]) {
				prevCopy = { ...prevCopy, [key]: true };
			} else {
				prevCopy = { ...prevCopy, [key]: false };
			}
			return prevCopy;
		});
	};
	const seeMoreToggle = (list, key) => {
		let newList;
		if (seeMoreStatus[key]) {
			return list;
		} else {
			newList = list.slice(0, 1);
			return newList;
		}
	};

	return (
		<>
			<Box minHeight={"100vh"} mt={"5rem"} overflowX={"hidden"}>
				<HeaderOne heading={"Services"} title={"Cybersecurity Services"} />
				<Container maxW={"7xl"} px={{ lg: "5rem", sm:"2rem", base: "1rem"}}>
					{/* ================= hero section ================= */}
					<Flex
						mb={"1rem"}
						justifyContent={"center"}
						alignItems={"center"}
						flexDir={{ base: "column", md: "row-reverse", lg: "row-reverse" }}
					>
						<Box
							w={{ base: "100%", lg: "60%" }}
							mb={{ sm: "2rem", md: "2rem", lg: "none" }}
						>
							<Flex
								direction={"column"}
								p={{ base: "0 1rem", lg: " 0 2rem" }}
								borderRight={"10px solid #FFFFFF"}
							>
								<Text
									as="h2"
									fontSize={{ base: "22px", md: "28px", lg: "32px" }}
									// w={"39rem"}
									fontWeight={"600"}
									fontFamily={"'Roboto', sans-serif"}
									textAlign={{ base: "center", md: "100%", lg: "right" }}
								>
									Protect Your Applications and Network
								</Text>
								<Text
									fontSize={{ base: "14px", lg: "20px" }}
									// w={{ base: "356px", md: "35rem", lg: "39.188rem" }}
									fontWeight={{ base: "400", lg: "500" }}
									lineHeight={"200%"}
									my={"1.5rem"}
									textAlign={{ base: "center", md: "100%", lg: "right" }}
									fontFamily={"'Roboto', sans-serif"}
								>
									Are you searching for a reliable and trustworthy cybersecurity
									partner to safeguard your business from constantly-evolving
									cyber threats? Our team of cybersecurity experts, armed with
									years of experience and cutting-edge technology, is committed
									to providing top-notch security for your network, data, and
									systems, ensuring protection against even the most complex
									attacks.
								</Text>
								<CtaButtons>
									<Link
										href="#services-form"
										className="request-services">	<button className="request-services">
										Request security services
									</button></Link>
									<Link 	href={{
										pathname: appRoutes.services["cost-calculator"],
										query: { service: "Cybersecurity-2" },
									}}> <button className="get-quote">get a quote</button></Link>
								</CtaButtons>

							</Flex>
						</Box>
						{/* ================= hero section image ================= */}
						<Box width={{lg:"40%", md:"40%", base:"70%"}}>
							<Image src={herobg} alt="hero image"   width={400}
								   height={400} />
						</Box>

					</Flex>

					<Box
						my={"4rem"}
						textAlign={"center"}
						display={"flex"}
						justifyContent={"center"}
						flexDir={"column"}
						alignItems={"center"}
					>
						<Text
							fontSize={{ base: "18px", lg: "30px" }}
							// w={"100%"}
							fontWeight={"700"}
							lineHeight={"35px"}
							my="1.5rem"
							textTransform={"capitalize"}
						>
							From risk assessments and compliance audits to 24/7 threat
							monitoring and incident response,
						</Text>
						<Box width={{lg:"15%", base:"35%"}} height={"3px"} background={"#ff0000"}></Box>
						<Text
							fontSize={{ base: "16px", lg: "20px" }}
							w={"100%"}
							fontWeight={"600"}
							lineHeight={"200%"}
							my={"1rem"}
						>
							We've got you covered. Choose us as your{" "}
							<span style={{ color: "#E9000E" }}>Cybersecurity hero</span> and
							enjoy peace of mind knowing your business is always secure.
						</Text>
					</Box>

					<Flex
						gap={"3rem"}
						justify={"center"}
						align={{ base: "center", lg: "start" }}
						flexDir={{ base: "column", lg: "row" }}
						mb={"7rem"}
						mt={"5rem"}
						px={"1rem"}
					>
						{/*<Sidebar*/}
						{/*	title={'IT CONSULTING'}*/}
						{/*	items={sideBarData}*/}
						{/*	height="auto"*/}
						{/*/>*/}

						<Flex
							flexDir="column"
							boxShadow={"lg"}
							height={"fit-content"}
							// flex={1}
							position={"sticky"}
							top={"10rem"}
							minW={"300px"}
							pb={"1rem"}
							borderBottom={"lg"}
							display={{ base: "none", lg: "flex" }}
							width={{ base: "100%", lg: "30%" }}

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

											<MdKeyboardArrowRight
												cursor={"pointer"}
												size={"2rem"}
												style={{ marginLeft: "47px" }} />
										</Flex>
									);
								})}
							</Box>
						</Flex>
						<Box width={{ base: "100%", lg: "70%" }}>
							{/* ================= Why chose us Section =================  */}
							<Box mb={"4rem"} >
								<Card
									padding={{lg:" 1.5rem 2rem", base:".9rem 1rem"}}
									mb="4rem"
									boxShadow="0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
								>
									<Text
										fontWeight="700"
										fontSize={{ base: "22px", lg: "28px" }}
										textTransform={"capitalize"}
										mb={"1rem"}
									>
										About Tanta Innovative
									</Text>
									<Box
										width={{lg:"15%", base:"34%" }}
										 bg={"#ff0000"}
										height={"3px"}
									></Box>
									<List mt={{lg:"2rem", base:"1rem"}}>
										{aboutList.map((item, key) => (
											<ListItem
												fontWeight="400"
												my={"5px"}
												fontSize={{ base: "13px", md: "16px", lg: "18px" }}
												lineHeight="170%"
												display={"flex"}
												color={"#3A393A"}
												fontFamily={"'Roboto', sans-serif"}
												key={key}
											>
												<ListIcon
													as={MdSquare}
													color="red.500"
													fontSize={{lg:"15px", base:"10px"}}
													mt={"0.5rem"}
												/>{" "}
												{item}
											</ListItem>
										))}
									</List>
								</Card>
							</Box>

							{/* ====================== banner.js image ================ */}
							<Box mb={"4rem"} display={"flex"} justifyContent={"center"}>
								<Image src={about} alt="card image" />
							</Box>

							{/* ======================= security services ===================  */}
							{mainBarData.slice(0, 1).map((item, index) => (
								<Box
									mb="4rem"
									w={"100%"}
									key={index}
									id={item.id}
									scrollMarginTop={"150px"}
								>
									<Text
										fontWeight="700"
										fontSize={{ base: "22px", lg: "28px" }}
										textTransform={"capitalize"}
										mb={"1rem"}
									>
										Cybersecurity Services by{" "}
										<span style={{ color: "#E9000E" }}>Tanta Innovative</span>{" "}
									</Text>
									<span
										style={{
											width: "130px",
											height: "4px",
											background: "#ff0000",
										}}
									></span>
									<Text
										fontWeight="400"
										fontSize={{ base: "14px", lg: "18px" }}
										lineHeight="170%"
										my="15px"
										fontFamily={"'Roboto', sans-serif"}
									>
										{item.title}
									</Text>

									{item.text.map((child, index) => (
										<Text
											fontWeight="400"
											fontSize={{ base: "14px", lg: "18px" }}
											lineHeight="170%"
											display={"flex"}
											key={index}
											fontFamily={"'Roboto', sans-serif"}
										>
											<MdSquare
												style={{
													color: "#E9000E",
													margin: "10px",
													fontSize: "18px",
												}}
											/>{" "}
											{child}
										</Text>
									))}

									<Box
										display={"flex"}
										flexDir={{ base: "column", lg: "row" }}
										justifyContent={"center"}
										mt={"2rem"}
										mr={{base:"0",lg:"-5rem"}}

									>
										{item.cards.map((item, key) => (
											<Card
												p="10px"
												m="15px 9px"
												display="flex"
												justifyContent="center"
												alignItems={"center"}
												flexDir="column"
												key={key}
												boxShadow="0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
												borderRadius={"10px"}
												maxWidth={{base:"100%", lg:"40%"}}
											>
												<Box display={"flex"} width={"50%"} justifyContent={"center"} >
													<Image
														src={item?.image}
														alt="icons"
														width={50}
														// style={{ alignSelf: "center" }}
													/>
												</Box>

												<Text
													fontWeight="700"
													fontSize={{ base: "18px", lg: "20px" }}
													lineHeight="30px"
													color={"#9F000A"}
													textAlign={"center"}
													textTransform={"capitalize"}
													my={"10px"}
												>
													{item?.title}
												</Text>
												<UnorderedList p={" 5px 10px"}>
													{item.text.map((child, index) => (
														<ListItem
															fontWeight="400"
															fontSize={{ base: "14px", lg: "16px" }}
															lineHeight="170%"
															my="5px"
															key={index}
															w={"100%"}
														>
															{child}
														</ListItem>
													))}
												</UnorderedList>
											</Card>
										))}
									</Box>
								</Box>
							))}

							{/* ================== Security Assessment section ================  */}
							{mainBarData.slice(1, 2).map((item, index) => (
								<Box
									key={index}
									id={item.id}
									scrollMarginTop={"150px"}
									mb={"4rem"}
									textAlign={"center"}
									display={"flex"}
									justifyContent={"center"}
									flexDir={"column"}
									alignItems={"center"}
								>
									<Text
										fontSize={{ base: "22px", lg: "28px" }}
										w={"100%"}
										fontWeight={"700"}
										lineHeight={"35px"}
										my="1.5rem"
									>
										<span style={{ color: "#E9000E" }}>Security</span>{" "}
										Assessment and Planning.
									</Text>
									<Box width={{lg:"15%", base:"35%"}} height={"3px"} background={"#ff0000"}></Box>
									<Text
										fontSize={{ base: "14px", lg: "18px" }}
										w={"100%"}
										fontWeight={"500"}
										lineHeight={"200%"}
										my={"1rem"}
									>
										{item.title}
									</Text>

									<Grid gridTemplateColumns="1fr" my={"2.5rem"} px={{lg:"1rem", base:"5rem"}}>
										{/* ------------- first rings here ---------*/}
										<Flex mb={"1.5rem"} align={"center"}>
											<Box
												fontWeight="700"
												fontSize={{ base: "12px", lg: "22px" }}
												lineHeight="32px"
												bg={"#F8ADB2"}
												w={{ base: "130px", lg: "250px" }}
												h={{ base: "130px", lg: "250px" }}
												borderRadius={"50%"}
												display={"flex"}
												alignItems={"center"}
												justifyContent={"center"}
												border="1px solid #ADADAD"
												marginRight={{ base: "-10px", lg: "-30px" }}
											>
												Network Services
											</Box>
											<Box
												fontWeight="700"
												fontSize={{ base: "12px", lg: "22px" }}
												p={"5px"}
												lineHeight="32px"
												bg={"rgba(233, 0, 14, 0.55)"}
												w={{ base: "150px", lg: "300px" }}
												h={{ base: "150px", lg: "300px" }}
												borderRadius={"50%"}
												textAlign={"center"}
												display={"flex"}
												alignItems={"center"}
												justifyContent={"center"}
												boxShadow="0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
												zIndex={"999"}
											>
												Remote Access Software
											</Box>
											<Box
												fontWeight="700"
												fontSize={{ base: "12px", lg: "22px" }}
												lineHeight="32px"
												bg={"#F8ADB2"}
												w={{ base: "130px", lg: "250px" }}
												h={{ base: "130px", lg: "250px" }}
												borderRadius={"50%"}
												display={"flex"}
												alignItems={"center"}
												justifyContent={"center"}
												border="1px solid #ADADAD"
												marginLeft={{ base: "-10px", lg: "-30px" }}
											>
												Employee Behavior{" "}
											</Box>
										</Flex>
										{/* ------------- first rings here ---------*/}
										<Flex align={"center"}>
											<Box
												fontWeight="700"
												fontSize={{ base: "12px", lg: "22px" }}
												lineHeight="32px"
												bg={"#F8ADB2"}
												w={{ base: "130px", lg: "250px" }}
												h={{ base: "130px", lg: "250px" }}
												borderRadius={"50%"}
												display={"flex"}
												alignItems={"center"}
												justifyContent={"center"}
												border="1px solid #ADADAD"
												marginRight={{ base: "-10px", lg: "-30px" }}
											>
												Client Side
											</Box>
											<Box
												fontWeight="700"
												fontSize={{ base: "12px", lg: "22px" }}
												lineHeight="32px"
												bg={"rgba(233, 0, 14, 0.55)"}
												w={{ base: "150px", lg: "300px" }}
												h={{ base: "150px", lg: "300px" }}
												borderRadius={"50%"}
												display={"flex"}
												alignItems={"center"}
												justifyContent={"center"}
												boxShadow="0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
												zIndex={"999"}
											>
												Web, Mobile Desktop Applications
											</Box>
											<Box
												fontWeight="700"
												fontSize={{ base: "12px", lg: "22px" }}
												lineHeight="32px"
												bg={"#F8ADB2"}
												w={{ base: "130px", lg: "250px" }}
												h={{ base: "130px", lg: "250px" }}
												borderRadius={"50%"}
												display={"flex"}
												alignItems={"center"}
												justifyContent={"center"}
												border="1px solid #ADADAD"
												marginLeft={{ base: "-10px", lg: "-30px" }}
											>
												IoT Devices{" "}
											</Box>
										</Flex>
									</Grid>
								</Box>
							))}

							{/* ====================== customers section ===================  */}
							{mainBarData.slice(2, 3).map((item, index) => (
								<Box
									key={index}
									id={item.id}
									scrollMarginTop={"150px"}
									mb={"4rem"}
								>
									<Text
										fontWeight="400"
										fontSize={{lg:"18px", base:"16px"}}
										lineHeight="24px"
										color={"#636363"}
									>
										OUR CUSTOMERS
									</Text>
									<Text
										fontSize={{ base: "22px", lg: "28px" }}
										w={"100%"}
										fontWeight={"700"}
										lineHeight={"35px"}
										my="1rem"
									>
										Valued Customer Base
									</Text>
									<Box width={{lg:"15%", base:"35%"}} height={"3px"} background={"#ff0000"}></Box>
									<Text
										fontSize={{ base: "14px", lg: "18px" }}
										w={"100%"}
										lineHeight={"200%"}
										my={"1rem"}
									>
										{item.title}
									</Text>
									<Box my={"1rem"}>
										<LogoMarquee colored={true} />
									</Box>
								</Box>
							))}

							{/* =================== cybersecurity services section ==================== */}
							{mainBarData.slice(3, 4).map((item, index) => (
								<Box
									key={index}
									id={item.id}
									scrollMarginTop={"150px"}
									mb={"4rem"}
								>
									<Text
										fontWeight="400"
										fontSize={{lg:"18px", base:"16px"}}
										textTransform={"uppercase"}
										lineHeight="24px"
										color={"#636363"}
									>
										Core cybersecurity values
									</Text>
									<Text
										fontSize={{ base: "22px", lg: "28px" }}
										w={"100%"}
										fontWeight={"700"}
										textTransform={"capitalize"}
										lineHeight={"35px"}
										my="1.5rem"
									>
										What makes our Service Unique
									</Text>
									<Box  width={{lg:"15%", base:"35%"}} height={"3px"} background={"#ff0000"}></Box>
									<Text
										fontSize={{ base: "18px", lg: "20px" }}
										w={"100%"}
										fontWeight={"500"}
										lineHeight={"200%"}
										my={"1rem"}
									>
										{item.title}
									</Text>
									<Grid
										gridTemplateColumns={{
											base: "1fr",
											md: "1fr 1fr",
											lg: "1fr 1fr 1fr",
										}}
									>
										{item.cards.map((item, key) => (
											<Card
												p="20px"
												m="15px"
												textAlign={"center"}
												display="flex"
												justifyContent="center"
												alignItems={"center"}
												flexDir="column"
												key={key}
												transition={"all 0.2s ease-in-out"}
												_hover={{
													transform: "scale(1.02)",
												}}
												boxShadow="0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
												borderRadius={"10px"}
											>
												<Box display={"flex"} width={{lg:"50%", base:"20%"}} justifyContent={"center"} >
													<Image src={item?.image} alt="icons" width={70}/>
												</Box>

												<Text
													fontWeight="700"
													fontSize={{ base: "18px", lg: "20px" }}
													lineHeight="30px"
													color={"#9F000A"}
													my={"10px"}
												>
													{item?.title}
												</Text>
												{item.text.map((item, index) => (
													<List key={index} textAlign={"center"}>
														<ListItem
															fontWeight="500"
															fontSize={{ base: "13px", lg: "14px" }}
															lineHeight="170%"
														>
															<span
																style={{
																	width: "10px",
																	height: "4px",
																	background: "#E9000E",
																	margin: "5px",
																}}
															></span>{" "}
															{item}
														</ListItem>
													</List>
												))}
											</Card>
										))}
									</Grid>
								</Box>
							))}

							{/* =================== application security section ==================== */}
							{mainBarData.slice(4, 5).map((item, index) => (
								<Box
									key={index}
									id={item.id}
									scrollMarginTop={"150px"}
									mb={"4rem"}
								>
									<Text
										fontSize={{ base: "22px", lg: "28px" }}
										w={"100%"}
										fontWeight={"700"}
										lineHeight={"35px"}
										my="1.5rem"
									>
										Application Security
									</Text>
									<Box width={{lg:"15%", base:"35%"}} height={"3px"} background={"#ff0000"}></Box>
									<Text
										fontSize={{lg:"18px", base:"14px"}}
										// w={{ base: "100%", md: "100%", lg: "48.75rem" }}
										lineHeight={"170%"}
										my={"1rem"}
										fontFamily={"'Roboto', sans-serif"}
										color={"#1E1E1E;"}
									>
										{item.title}
									</Text>
									<Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
										{item.cards.map((item, key) => (
											<Card
												p="20px"
												m="15px"
												display="flex"
												flexDir="column"
												key={key}
												transition={"all 0.2s ease-in-out"}
												_hover={{
													transform: "scale(1.02)",
												}}
											>
												<Image src={item?.image} alt="icons" />
												<Text
													fontWeight="600"
													fontSize={{ base: "16px", lg: "20px" }}
													lineHeight="30px"
													my={"10px"}
												>
													{item?.title}
												</Text>
												<List>
													{seeMoreToggle(item.text, `1-${key}`).map(
														(item, index) => (
															<ListItem
																fontWeight="400"
																my={"5px"}
																fontSize={{
																	base: "13px",
																	md: "14px",
																	lg: "16px",
																}}
																lineHeight="170%"
																display={"flex"}
																key={index}

															>
																<ListIcon
																	as={MdSquare}
																	color="red.500"
																	fontSize={"16px"}
																	mt={"0.5rem"}
																/>{" "}
																{item}
															</ListItem>
														)
													)}
												</List>

												<Button
													w={"180px"}
													mt={"1.5rem"}
													background="#FFFFFF"
													boxShadow="0px 1.55172px 3.10345px rgba(0, 0, 0, 0.3), 0px 1.55172px 4.65517px 1.55172px rgba(0, 0, 0, 0.15)"
													borderRadius="12.4138px"
													onClick={() => handleSetStatus(`1-${key}`)}
												>
													{!!seeMoreStatus[`1-${key}`]
														? "See Less"
														: "See More"}{" "}
													<BsFillArrowRightCircleFill
														style={{ color: "#E9000E", margin: "8px" }}
													/>
												</Button>
											</Card>
										))}
									</Grid>
								</Box>
							))}

							{/* =================== network protection services section ==================== */}
							{mainBarData.slice(5, 6).map((item, index) => (
								<Box
									key={index}
									id={item.id}
									scrollMarginTop={"150px"}
									mb={"4rem"}
								>
									<Text
										fontSize={{ base: "22px", lg: "28px" }}
										w={"100%"}
										fontWeight={"700"}
										lineHeight={"35px"}
										my="1.5rem"
									>
										Network Protection
									</Text>
									<Box width={{lg:"15%", base:"35%"}} height={"3px"} background={"#ff0000"}></Box>
									<Text
										fontSize={{ base: "14px", lg: "18px" }}
										w={"100%"}
										fontWeight={"400"}
										lineHeight={"170%"}
										my={"1rem"}
									>
										{item.title}
									</Text>
									<Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
										{item.cards.map((item, key) => (
											<Card
												p="20px"
												m="15px"
												display="flex"
												flexDir="column"
												key={key}
												className={`container ${showMore ? "expanded" : ""}`}
											>
												<Image src={item?.image} alt="icons" />
												<Text
													fontWeight="600"
													fontSize={{ base: "16px", lg: "20px" }}
													lineHeight="30px"
													color={"#9F000A"}
													my={"10px"}
												>
													{item?.title}
												</Text>
												<List>
													{seeMoreToggle(item.text, `2-${key}`).map(
														(item, index) => (
															<ListItem
																fontWeight="400"
																my={"5px"}
																fontSize={{
																	base: "13px",
																	md: "14px",
																	lg: "16px",
																}}
																lineHeight="170%"
																display={"flex"}
																key={index}
															>
																<ListIcon
																	as={MdSquare}
																	color="red.500"
																	fontSize={"16px"}
																/>{" "}
																{item}
															</ListItem>
														)
													)}
												</List>

												<Button
													w={"180px"}
													mt={"1.5rem"}
													background="#FFFFFF"
													boxShadow="0px 1.55172px 3.10345px rgba(0, 0, 0, 0.3), 0px 1.55172px 4.65517px 1.55172px rgba(0, 0, 0, 0.15)"
													borderRadius="12.4138px"
													onClick={() => handleSetStatus(`2-${key}`)}
												>
													{!!seeMoreStatus[`2-${key}`]
														? "See Less"
														: "See More"}{" "}
													<BsFillArrowRightCircleFill
														style={{ color: "#E9000E", margin: "8px" }}
													/>
												</Button>
											</Card>
										))}
									</Grid>
								</Box>
							))}

							{/* ============= Service Option ================ */}
							{mainBarData.slice(6, 7).map((item, index) => (
								<Box
									key={index}
									id={item.id}
									scrollMarginTop={"150px"}
									mb={"4rem"}
								>
									<Text
										fontSize={{ base: "22px", lg: "28px" }}
										w={"100%"}
										fontWeight={"700"}
										lineHeight={"35px"}
										my="1.5rem"
									>
										Service Options
									</Text>
									<Box width={{lg:"15%", base:"35%"}} height={"3px"} background={"#ff0000"}></Box>

									{item.cards.map((item, index) => (
										<Flex
											key={index}
											my={"1.5rem"}
											flexDir={{ base: "column", lg: "row" }}
											justifyContent={"start"}
											align={"center"}
										>
											<Image
												src={item.image}
												alt="projects"
												style={{ width: "250px", height: "250px" }}
											/>
											<Box textAlign={"start"} ml={".9rem"} mt={"2rem"}>
												<Text
													fontWeight="700"
													fontSize={{lg:"22px", base:"18px"}}
													lineHeight="30px"
												>
													{item.title}
												</Text>
												<Text
													fontWeight="400"
													fontSize={{lg:"18px", base:"14px"}}
													lineHeight="170%"
													my={".8rem"}
												>
													{item.text}
												</Text>
												<Link href="#services-form" >
													<ContactBtn>{item.button}</ContactBtn>
												</Link>
											</Box>
										</Flex>
									))}
								</Box>
							))}

							{/* ============== Selected project section =========== */}
							<Box id={"case"} scrollMarginTop={"150px"} mb="4.5rem" w={"100%"}>
								<HandpickedProject title={"CASE STUDIES"} heading={"Our Selected IT Consulting Services Projects"}/>
							</Box>

							{/* ======================= summary.js section ===============  */}
							{mainBarData.slice(7, 8).map((item, index) => (
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
																		  key={"index"}
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
							))}

							{/* ======== All cybersecurity Services section ======= */}
							<Box
								mb="4.5rem"
								w={"100%"}
								id={"services"}
								scrollMarginTop={"150px"}
							>
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
								>
									{services.map((object, index) => {
										return (
											<Box key={index} m={"2rem"}>
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
					{/* ========= become an agent section ====== */}
					<Flex
						gap={"4rem"}
						direction={{ base: "column", lg: "row" }}
						w={"100%"}
						p={{ base: "1rem", lg: "0 90px" }}
						my={"2.5rem"}
						id="services-form"
						scrollMarginTop={"150px"}
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
										fontSize={{ base: "24px", lg: "34px" }}
										w={"100%"}
										fontWeight={"700"}
										lineHeight={"40px"}
									>
										Protect your Applications from
										<Text color={"red"}>Cyber-attacks!</Text>
									</Text>
								</Box>
								<Box mt={"4rem"}>
									<Image src={undraw} alt="task image" />
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
								Feel free to briefly describe your Cybersecurity Service needs
								for our team to promptly get back to you.
							</Text>
							<ServicesForm services="Cybersecurity Services" />
						</Box>
					</Flex>
				</Container>
			</Box>
		</>
	);
};

export default CybersecurityPage;

// const Links = styled.div`
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;
//
// 	a {
// 		font-size: 16px;
// 		padding: 15px 18px;
// 		border-radius: 8px;
//
//
// 		${breakpoints.sm} {
// 			font-size: 8px;
// 			padding: 8px 15px;
//
// 		}
//
// 		${breakpoints.md} {
// 			font-size: 14px;
// 		}
// 	}
//
// 	a.request {
// 		font-weight: 500;
// 		font-size: 16px;
// 		line-height: 24px;
// 		background: linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);
// 		color: #ffffff;
// 		text-transform: uppercase;
// 		border: none;
// 		filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
// 		margin-right: 25px;
// 	}
//
// 	a.quote {
// 		font-weight: 500;
// 		font-size: 16px;
// 		line-height: 24px;
// 		text-transform: uppercase;
// 		padding: 10px 30px;
// 		border: 2px solid #000;
// 		filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
// 	}
// `;

export const ContactBtn = styled.p`
	background-color: #e9000e;
	color: #fff;
	padding: 10px 20px;
	width: 200px;
	text-align: center;
	font-size: 14px;
	font-weight: 400;
	border-radius: 6px;
	margin-bottom: 2rem;
`;

const CtaButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
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
