import React, { useState } from "react";
import customers from "../../../../public/assets/cloudMigration/customer.svg";
import employees from "../../../../public/assets/cloudMigration/employees.svg";
import experts from "../../../../public/assets/cloudMigration/experts.svg";
import arrow from "../../../../public/assets/cloudMigration/accodionarrow.svg";
import {
	Accordion, AccordionButton, AccordionItem, AccordionPanel,
	Box,
	Button,
	chakra,
	Container,
	Flex,
	Heading,
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
import HeaderOne from "../../HeaderOne";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../../../../public/assets/cloudMigration/heroImg.png";
import product from "../../../../public/assets/cloudMigration/product.png";
import arrowRight from "../../../../public/assets/cloudMigration/arrowRight.png";
import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/theme";
import {
	cloudMigration,
	sideBarData,
	tools,
	get,
	benefit,
	allCloud,
	amount,
	keyStages,
	approach,
	questions,
	pains,
	most,
} from "./data";
import { MdKeyboardArrowRight } from "react-icons/md";
import LogoMarquee from "../../logoMarquee";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { RxCaretDown } from "react-icons/rx";
import { BsArrowRightShort } from "react-icons/bs";
import RelatedProjects from "./relatedProjects";
import { IoIosCheckmark } from "react-icons/io";
import { analyticsConsultingSummary } from "../../dataAnalytics/analyticsConsulting/data";
import appRoutes from "../../../utils/appRoutes";
import ContactUs from "../../contactUs";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

const CloudMigrationServices = () => {
	const [activeLink, setActiveLink] = useState({});

	return (
		<>
			<Box mt={"5rem"} minHeight={"100vh"}>
				<HeaderOne heading={"services"} title={"it outsourcing"} />
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
					<HeroContent>
						<HeroText>
							<h1>Cloud Migration Services</h1>
							<p>
								For half a decade, Tanta's cloud experts have been providing
								cloud migration services to help companies seamlessly move their
								applications and databases to the cloud. Their experienced team
								plans and executes secure and efficient cloud migration
								projects, resulting in enhanced application performance and
								substantial reductions in IT infrastructure costs.
							</p>
							<CtaButtons>
								<Link
									href={{
										pathname: "/contact-us",
										query: { service: "services/it-consulting" },
									}}
									service="services/it_consulting"
									className="request-services"
								>
									{" "}
									<button className="request-services">
										REQUEST A CONSULTATION
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
							src={heroImg}
							alt="hero image"
							width={400}
							height={400}
							// className="hero-img"
						/>
					</HeroContent>
					<Accordion display={{base:"block",md:"none"}} allowToggle mb={'1rem'} bg="#F7F2FA"
							   boxShadow='0px 2px 4px rgba(165, 163, 174, 0.3)' borderRadius='6px'>
						<AccordionItem>
							<h2>
								<AccordionButton minH={"60px"} borderRadius={"10px"} color={"white"} bg={"#AE0000"} _expanded={{
									color: 'white',
									background: '#AE0000',
									boxShadow: '0px 2px 4px rgba(165, 163, 174, 0.3)',
									borderRadius: '6px',
								}}>
									<Box as="span" flex='1' fontWeight={"700"} textAlign='left' display={'flex'}>
										Discover the Reliability of Tanta as an Analytics Consulter
									</Box>
									<Image src={arrow} alt={"arrow"}/>
								</AccordionButton>
							</h2>
							<AccordionPanel pb={0}>

							</AccordionPanel>
						</AccordionItem>
					</Accordion>
					{/*<Flex w={"100%"} gap={"20px"} >*/}
					{/*	<Flex flex={"1"} gap={"5px"} flexDir={"column"} alignItems={"center"}>*/}
					{/*		<Image src={customers} alt={"customers"}/>*/}
					{/*		<Text fontWeight={"700"}>200+</Text>*/}
					{/*		<Text fontWeight={"700"}>Satisfied Customers</Text>*/}

					{/*	</Flex>*/}
					{/*	<Flex flex={"1"} gap={"5px"} flexDir={"column"} alignItems={"center"}>*/}
					{/*		<Image src={employees} alt={"customers"}/>*/}
					{/*		<Text fontWeight={"700"}>30+</Text>*/}
					{/*		<Text fontWeight={"700"}>Skilled Employees</Text>*/}

					{/*	</Flex>*/}
					{/*	<Flex flex={"1"} gap={"5px"} flexDir={"column"} alignItems={"center"}>*/}
					{/*		<Image src={experts} alt={"customers"}/>*/}
					{/*		<Text fontWeight={"700"}>80%</Text>*/}
					{/*		<Text fontWeight={"700"}>Senior IT Experts</Text>*/}


					{/*	</Flex>*/}

					{/*</Flex>*/}
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
							pb={{base:"20px",md:"1rem"}}
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
						</Box>
						<Box  width={{ base: "100%", lg: "70%" }}>
							{/*why choose Tanta Innovative*/}
							<Box display={{base:"none",md:"block"}} id="CR" scrollMarginTop={"150px"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									Why Choose{" "}
									<chakra.span
										color={"#E9000E"}
										fontSize={{ base: "20px", lg: "30px" }}
										lineHeight={{ lg: "140%", base: "150%" }}
									>
										{" "}
										Tanta Innovative
									</chakra.span>
								</Heading>
								<Box
									width={{ lg: "80px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
								></Box>
							</Box>
							<Flex display={{base:"none",md:"flex"}}
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
							<Flex display={{base:"none",md:"flex"}} direction={{ base: "column", lg: "row" }} gap={"6"}>
								<List
									spacing={3}
									// paddingBlock={"0.5rem"}
									fontSize={"17px"}
									textTransform={"capitalize"}
								>
									<ListItem display={"flex"} justifyContent={"center"}>
										<ListIcon
											as={RiCheckboxBlankFill}
											color={`${colors.primaryColor}`}
											width={4}
											height={4}
											mt={"0.5rem"}
										/>
										34 years in IT, 1 years in cloud database and application
										migration services.
									</ListItem>
									<ListItem display={"flex"} justifyContent={"center"}>
										<ListIcon
											as={RiCheckboxBlankFill}
											color={`${colors.primaryColor}`}
											width={4}
											height={4}
											mt={"0.5rem"}
										/>
										15 years in help-desk on ITIL principles and services.
									</ListItem>
									<ListItem display={"flex"} justifyContent={"center"}>
										<ListIcon
											as={RiCheckboxBlankFill}
											color={`${colors.primaryColor}`}
											width={4}
											height={4}
											mt={"0.5rem"}
										/>
										31 industries covered: healthcare, financial services,
										retail, manufacturing, marketing and advertising, telecoms,
										and more.
									</ListItem>
								</List>
								<List
									spacing={3}
									// paddingBlock={"0.5rem"}
									fontSize={"17px"}
									textTransform={"capitalize"}
								>
									<ListItem display={"flex"} justifyContent={"center"}>
										<ListIcon
											as={RiCheckboxBlankFill}
											color={`${colors.primaryColor}`}
											width={4}
											height={4}
											mt={"0.5rem"}
										/>
										62% of our revenue is coming from partnerships that last for
										more than 2 years.
									</ListItem>
									<ListItem display={"flex"} justifyContent={"center"}>
										<ListIcon
											as={RiCheckboxBlankFill}
											color={`${colors.primaryColor}`}
											width={4}
											height={4}
											mt={"0.5rem"}
										/>
										Security of the customers’ data we access guaranteed by ISO
										27001-based information security management system.
									</ListItem>
									<ListItem display={"flex"} justifyContent={"center"}>
										<ListIcon
											as={RiCheckboxBlankFill}
											color={`${colors.primaryColor}`}
											width={4}
											height={4}
											mt={"0.5rem"}
										/>
										3ISO 9001-certified quality management system based on
										mature practices and policies, result-oriented people and
										transparent collaboration with clients.
									</ListItem>
								</List>
							</Flex>
							{/*cloud migration of your choice*/}
							<Box
								id={"Services"}
								position={"relative"}
								scrollMarginTop={"150px"}
								bg={"#FDE6E7"}
								px={{base:"2px",md:"1rem"}}
								py={"2rem"}
								rounded={"lg"}
								mt={{base:"0px",md:"4rem"}}
								height={"fit-content"}
								display={"flex"}
								flexDir={"column"}
								alignItems={"center"}
								boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
							>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", md: "28px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
									textAlign={"center"}
									width={"69%"}
								>
									SELECT THE{" "}
									<chakra.span
										color={"#E9000E"}
										fontSize={{ base: "20px", md: "28px", lg: "28px" }}
										lineHeight={{ lg: "140%", base: "150%" }}
									>
										CLOUD MIGRATION{" "}
									</chakra.span>
									OF YOUR
									<chakra.span
										color={"#E9000E"}
										fontSize={{ base: "20px", md: "28px", lg: "28px" }}
										lineHeight={{ lg: "140%", base: "150%" }}
									>
										{" "}
										CHOICE
									</chakra.span>
								</Heading>
								<Box
									width={{ lg: "80px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
									position={"absolute"}
									top={"80px"}
									left={"150px"}
									display={{ lg: "block", base: "none" }}
								></Box>
								<Flex
									gap={"1rem"}
									height={"fit-content"}
									mt={"2rem"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
								>
									{cloudMigration.map((item, index) => (
										<Flex
											key={index}
											flexDir={"column"}
											bg={"#fff"}
											p={"2rem"}
											borderRadius={"10px"}
											gap={"1rem"}
											boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
											transition={"all 0.2s ease-in-out"}
											_hover={{
												transform: "scale(1.02)",
											}}
										>
											<Box display={"flex"} justifyContent={"center"}>
												<Image
													src={item.img}
													alt="img"
													width={225}
													height={218}
												/>
											</Box>
											<Heading
												color={"#2F2F2F"}
												textAlign={{base:"center",md:"left"}}
												fontWeight={{base:700,md:600}}
												fontSize={{base:"16px",md:"22px"}}
												mt={index === 1 ? "1.3rem" : "0"}
											>
												{item.title}
											</Heading>
											<Text
												fontSize={"14px"}
												color={"#2A2A2A"}
												textTransform={"capitalize"}
												lineHeight={"24px"}
											>
												{item.content}
											</Text>
											<Flex justifyContent={{base:"center",md:"flex-end"}} mt={"0.5rem"}>
												<Link
													href={{
														pathname: appRoutes.contactUs,
														query: {service: "services/it-outsourcing/cloud-migration-services"},
													}}
													service={`services/it-outsourcing/cloud-migration-services/${item.link}`}
													className="request-services"
												><Button
													color={"#fff"}
													border={"none"}
													padding={"7px 23.84px 8.03px 23px"}
													borderRadius={"0"}
													fontSize={"16px"}
													textAlign={"center"}
													background={
														"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"
													}
												>
													{item.link}
												</Button></Link>
											</Flex>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*Methodology*/}
							<Box  mt={{base:"2rem",md:"5rem"}} id={"Methodology"} scrollMarginTop={"150px"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "28px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									CLOUDS WE WORK WITH AT{" "}
								</Heading>
								<Text
									color={"#E9000E"}
									fontSize={{ base: "20px", lg: "28px" }}
									lineHeight={{ lg: "140%", base: "150%" }}
									fontWeight="700"
									mb={"1rem"}
								>
									{" "}
									Tanta Innovative
								</Text>
								<Box bg={{base:"white",md:"white"}} mb={"2rem"} >
									<Box
										width={{ lg: "80px", base: "50px" }}
										height={"3px"}
										bg={"#D80808"}
										mb={"2.5rem"}
									></Box>
									<Flex
										gap={"0.5rem"}
										flexDir={{ lg: "row", md: "row", base: "row" }}
										mb={{base:"20px",md:"0"}}
									>
										{tools.map((item, index) => (
											<Flex
												flex={1}
												key={index}
												py={2}
												flexDir={"column"}
												bg={"rgba(255, 255, 255, 0.00)"}
												alignItems={"center"}
												boxShadow={
													"0px -1px 5px 0px rgba(0, 0, 0, 0.05), 0px 2px 5px 0px rgba(0, 0, 0, 0.10)"
												}
												transition={"all 0.2s ease-in-out"}
												_hover={{
													transform: "scale(1.02)",
												}}
											>
												{/*<Box width={{ lg: "100%", md: "80%", base: "80%" }}>*/}
												<Image  src={item.image} alt="image" />
												{/*</Box>*/}

												<Text
													color={"#222"}
													textAlign={"center"}
													fontSize={{ lg: "18px", base: "14px" }}
													fontWeight={700}
												>
													{item.name}
												</Text>
											</Flex>
										))}
									</Flex>
								</Box>
							</Box>
							{/*WHAT YOU GET WITH MIGRATION SERVICES*/}

							<Accordion display={{base:"block",md:"none"}} allowToggle mb={'1rem'} bg="#F7F2FA"
									   boxShadow='0px 2px 4px rgba(165, 163, 174, 0.3)' borderRadius='6px'>
								<AccordionItem>
									<h2>
										<AccordionButton borderRadius={"10px"} minH={"60px"} color={"white"} bg={"#AE0000"} _expanded={{
											color: 'white',
											background: '#AE0000',
											boxShadow: '0px 2px 4px rgba(165, 163, 174, 0.3)',
											borderRadius: '6px',
										}}>
											<Box as="span" flex='1' fontWeight={"700"} fontSize={"15px"} textAlign='left' display={'flex'}>
												WHAT YOU GET WITH Migration Services
											</Box>
											<Image src={arrow} alt={"arrow"}/>
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>


										<Flex
											mt={"3rem"}
											gap={"2rem"}
											flexWrap={"wrap"}
											justifyContent={"center"}
											flexDir={{ lg: "row", md: "row", base: "column" }}
										>
											{get.map((item, index) => (
												<Flex
													key={index}
													bg={"rgba(233, 0, 14, 0.10)"}
													borderRadius={"0px 0px 30px 30px"}
													height={{ lg: "313px", base: "400px" }}
													flexDir={"column"}
													width={{ lg: "47%", md: "70%", base: "100%" }}
												>
													<Flex
														fontSize={"20px"}
														color={"#fff"}
														p={2}
														gap={"0.5rem"}
														justifyContent={"center"}
														alignItems={"center"}
														height={"59px"}
														bg={item.color}
													>
														<Image
															src={item.icon}
															alt="icon"
															width={38}
															height={38}
														/>
														<Text>{item.heading}</Text>
													</Flex>
													<Box mb={"3rem"}>
														{item.texts.map((nestedItem, index) => (
															<Flex
																key={nestedItem.id}
																gap={"0.5rem"}
																color={"#3B3C3D"}
																fontSize={{ lg: "16px", base: "15px" }}
																alignItems={"center"}
																mt={"1rem"}
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
																{nestedItem.text()}
															</Flex>
														))}
													</Box>
												</Flex>
											))}
										</Flex>

									</AccordionPanel>
								</AccordionItem>
							</Accordion>

							<Box display={{base:"none",md:"block"}} mt={"5rem"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "28px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									WHAT YOU GET WITH{" "}
								</Heading>
								<Text
									color={"#E9000E"}
									fontSize={{ base: "20px", lg: "28px" }}
									lineHeight={{ lg: "140%", base: "150%" }}
									fontWeight="700"
									mb={"1rem"}
								>
									{" "}
									Migration Services
								</Text>
								<Box
									width={{ lg: "80px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"2.5rem"}
								></Box>
								<Flex
									mt={"3rem"}
									mb={{base:"20px",md:"0"}}
									gap={"2rem"}
									flexWrap={"wrap"}
									justifyContent={"center"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
								>
									{get.map((item, index) => (
										<Flex
											key={index}
											bg={"rgba(233, 0, 14, 0.10)"}
											borderRadius={"0px 0px 30px 30px"}
											height={{ lg: "313px", base: "400px" }}
											flexDir={"column"}
											width={{ lg: "47%", md: "70%", base: "100%" }}
										>
											<Flex
												fontSize={"20px"}
												color={"#fff"}
												p={2}
												gap={"0.5rem"}
												justifyContent={"center"}
												alignItems={"center"}
												height={"59px"}
												bg={item.color}
											>
												<Image
													src={item.icon}
													alt="icon"
													width={38}
													height={38}
												/>
												<Text>{item.heading}</Text>
											</Flex>
											<Box mb={"3rem"}>
												{item.texts.map((nestedItem, index) => (
													<Flex
														key={nestedItem.id}
														gap={"0.5rem"}
														color={"#3B3C3D"}
														fontSize={{ lg: "16px", base: "15px" }}
														alignItems={"center"}
														mt={"1rem"}
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
														{nestedItem.text()}
													</Flex>
												))}
											</Box>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*BENEFITS*/}
							<Accordion display={{base:"block",md:"none"}} allowToggle mb={'1rem'} bg="#F7F2FA"
									   boxShadow='0px 2px 4px rgba(165, 163, 174, 0.3)' borderRadius='6px'>
								<AccordionItem>
									<h2>
										<AccordionButton borderRadius={"10px"} minH={"60px"} color={"white"} bg={"#AE0000"} _expanded={{
											color: 'white',
											background: '#AE0000',
											boxShadow: '0px 2px 4px rgba(165, 163, 174, 0.3)',
											borderRadius: '6px',
										}}>
											<Box as="span" flex='1' fontWeight={"700"} textAlign='left' display={'flex'}>
												BENEFITS OF CLOUD MIGRATION WITH Tanta Innovatives
											</Box>
											<Image src={arrow} alt={"arrow"}/>
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>

										<Flex mt={"1rem"} flexDir={"column"} gap={"1rem"}>
											{benefit.map((item, index) => (
												<Flex
													key={index}
													height={"fit-content"}
													gap={"1.2rem"}
													justifyContent={"center"}
													boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
													padding={" 20px 33px 20px 33px"}
													transition={"all 0.2s ease-in-out"}
													_hover={{
														transform: "scale(1.02)",
													}}
												>
													<Box mt={"0.2rem"}>
														<Image
															src={item.img}
															alt="img"
															width={150}
															height={150}
														/>
													</Box>
													<Box>
														<Text
															color={"#444"}
															fontSize={{ lg: "22px", base: "20px" }}
															fontWeight={700}
															mb={"0.5rem"}
														>
															{item.title}
														</Text>
														<Box
															width={{ lg: "30px", base: "20px" }}
															height={"3px"}
															bg={"#D80808"}
															mb={"1rem"}
														></Box>
														<Text fontSize={"16px"} color={"#3B3C3D"}>
															{item.content}
														</Text>
														{/*<Link*/}
														{/*	href={item.link}*/}
														{/*	style={{*/}
														{/*		backgroundColor: "transparent",*/}
														{/*		display: "flex",*/}
														{/*		justifyContent: "flex-start",*/}
														{/*		alignItems: "flex-start",*/}
														{/*	}}*/}
														{/*>*/}
														{/*	<Button*/}
														{/*		border={"none"}*/}
														{/*		color={"#e90002"}*/}
														{/*		fontSize={"14px"}*/}
														{/*		padding={"0"}*/}
														{/*		fontWeight={500}*/}
														{/*		textTransform={"uppercase"}*/}
														{/*		bgColor={"transparent"}*/}
														{/*		_hover={{ bgColor: "transparent" }}*/}
														{/*	>*/}
														{/*		See the tactics we use{" "}*/}
														{/*		<RxCaretDown*/}
														{/*			style={{*/}
														{/*				color: "#E9000E",*/}
														{/*				fontSize: "25px",*/}
														{/*				transition: "all 0.2s ease-in-out",*/}
														{/*			}}*/}
														{/*		/>*/}
														{/*	</Button>*/}
														{/*</Link>*/}
													</Box>
												</Flex>
											))}
										</Flex>

									</AccordionPanel>
								</AccordionItem>
							</Accordion>

							<Box display={{base:"none",md:"block"}} mt={"5rem"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "28px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									BENEFITS OF CLOUD MIGRATION WITH{" "}
								</Heading>
								<Text
									color={"#E9000E"}
									fontSize={{ base: "20px", lg: "28px" }}
									lineHeight={{ lg: "140%", base: "150%" }}
									fontWeight="700"
									mb={"1rem"}
								>
									{" "}
									Tanta Innovatives
								</Text>
								<Box
									width={{ lg: "80px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"2.5rem"}
								></Box>
								<Flex mt={"1rem"} flexDir={"column"} gap={"1rem"}>
									{benefit.map((item, index) => (
										<Flex
											key={index}
											height={"fit-content"}
											gap={"1.2rem"}
											justifyContent={"center"}
											boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
											padding={" 20px 33px 20px 33px"}
											transition={"all 0.2s ease-in-out"}
											_hover={{
												transform: "scale(1.02)",
											}}
										>
											<Box mt={"0.2rem"}>
												<Image
													src={item.img}
													alt="img"
													width={150}
													height={150}
												/>
											</Box>
											<Box>
												<Text
													color={"#444"}
													fontSize={{ lg: "22px", base: "20px" }}
													fontWeight={700}
													mb={"0.5rem"}
												>
													{item.title}
												</Text>
												<Box
													width={{ lg: "30px", base: "20px" }}
													height={"3px"}
													bg={"#D80808"}
													mb={"1rem"}
												></Box>
												<Text fontSize={"16px"} color={"#3B3C3D"}>
													{item.content}
												</Text>
												{/*<Link*/}
												{/*	href={item.link}*/}
												{/*	style={{*/}
												{/*		backgroundColor: "transparent",*/}
												{/*		display: "flex",*/}
												{/*		justifyContent: "flex-start",*/}
												{/*		alignItems: "flex-start",*/}
												{/*	}}*/}
												{/*>*/}
												{/*	<Button*/}
												{/*		border={"none"}*/}
												{/*		color={"#e90002"}*/}
												{/*		fontSize={"14px"}*/}
												{/*		padding={"0"}*/}
												{/*		fontWeight={500}*/}
												{/*		textTransform={"uppercase"}*/}
												{/*		bgColor={"transparent"}*/}
												{/*		_hover={{ bgColor: "transparent" }}*/}
												{/*	>*/}
												{/*		See the tactics we use{" "}*/}
												{/*		<RxCaretDown*/}
												{/*			style={{*/}
												{/*				color: "#E9000E",*/}
												{/*				fontSize: "25px",*/}
												{/*				transition: "all 0.2s ease-in-out",*/}
												{/*			}}*/}
												{/*		/>*/}
												{/*	</Button>*/}
												{/*</Link>*/}
											</Box>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*The Express Payment Solution Ltd*/}
							<Box
								mt={{base:"30px",md:"10rem"}}
								height={"fit-content"}
								bg={"#FDE6E7"}
								position={"relative"}
							>
								<Box pt={"20px"} display={{base:"block",md:"none"}}>

									<Text color={"#222"} fontSize={{base:"14px"}}
										  fontWeight={700}
										  maxW={{base:"90%", md:"60%", lg: "55%"}}
									      textAlign={{base:"center", md:"left", lg: "left"}}
										  ml={{base:"auto", md:"0", lg: "0"}}
										  mr={{base:"auto", md:"0", lg: "0"}}
									>
										The Xpress Payment Solutions Ltd Includes Tanta’s Innovatives in the List of
										the Nigeria’s Fastest-Growing Companies 2023
									</Text>


									<Flex alignItems={"center"} gap={"20px"} flexDir={{base:"column", md:"row", lg: "row"}}>
										<Text maxW={{base:"80%", md:"55%", lg: "55%"}} fontSize={"13px"} color={"#3B3C3D"} mt={"0.5rem"}>
											For the second year in a row, Tanta Innovatives ranks
											among 500 Nigerian companies with the highest revenue
											growth. This achievement is the result of our unfailing
											commitment to provide high-quality IT services and create
											best- value solutions that meet and even exceed our
											clients’ expectations.
										</Text>

										{/*<Flex    maxH={"200px"} w={"40%"} objectFit={"cover"}>*/}
											<Image style={{objectFit:"cover"}} src={product} alt="product" width={200} height={200} />
										{/*</Flex>*/}

									</Flex>
											{/*<Link*/}
											{/*	href={"#"}*/}
											{/*	style={{*/}
											{/*		backgroundColor: "transparent",*/}
											{/*		display: "flex",*/}
											{/*		justifyContent: "center",*/}
											{/*	}}*/}
											{/*>*/}
											{/*	<Button*/}
											{/*		border={"none"}*/}
											{/*		color={"#e90002"}*/}
											{/*		fontSize={"18px"}*/}
											{/*		padding={"0"}*/}
											{/*		mt={"1rem"}*/}
											{/*		mb={"2rem"}*/}
											{/*		fontWeight={500}*/}
											{/*		bgColor={"transparent"}*/}
											{/*		_hover={{ bgColor: "transparent" }}*/}
											{/*	>*/}
											{/*		Read a press release{" "}*/}
											{/*		<BsArrowRightShort*/}
											{/*			style={{*/}
											{/*				color: "#E9000E",*/}
											{/*				fontSize: "25px",*/}
											{/*				transition: "all 0.2s ease-in-out",*/}
											{/*			}}*/}
											{/*		/>*/}
											{/*	</Button>*/}
											{/*</Link>*/}
								</Box>





								<Flex
									display={{base:"none",md:"flex"}}
									padding={"1rem"}
									gap={"1.5rem"}
									justifyContent={"space-between"}
									alignItems={"center"}
								>
									<Flex
										mb={"2rem"}
										height={"fit-content"}
										flexDir={"column"}
										justifyContent={"center"}
									>
										<Text color={"#222"} fontSize={"21px"} fontWeight={700}>
											The Xpress Payment Solutions Ltd Includes
										</Text>
										<Text color={"#222"} fontSize={"21px"} fontWeight={700}>
											Tanta’s Innovatives in the List of the Nigeria’s
										</Text>
										<Text color={"#222"} fontSize={"21px"} fontWeight={700}>
											Fastest-Growing Companies 2023
										</Text>
										<Text fontSize={"18px"} color={"#3B3C3D"} mt={"2rem"}>
											For the second year in a row, Tanta Innovatives ranks
											among 500 Nigerian companies with the highest revenue
											growth. This achievement is the result of our unfailing
											commitment to provide high-quality IT services and create
											best- value solutions that meet and even exceed our
											clients’ expectations.
										</Text>
										{/*<Link*/}
										{/*	href={"#"}*/}
										{/*	style={{*/}
										{/*		backgroundColor: "transparent",*/}
										{/*		display: "flex",*/}
										{/*		justifyContent: "flex-end",*/}
										{/*	}}*/}
										{/*>*/}
										{/*	<Button*/}
										{/*		border={"none"}*/}
										{/*		color={"#e90002"}*/}
										{/*		fontSize={"18px"}*/}
										{/*		padding={"0"}*/}
										{/*		mt={"2rem"}*/}
										{/*		fontWeight={500}*/}
										{/*		bgColor={"transparent"}*/}
										{/*		_hover={{ bgColor: "transparent" }}*/}
										{/*	>*/}
										{/*		Read a press release{" "}*/}
										{/*		<BsArrowRightShort*/}
										{/*			style={{*/}
										{/*				color: "#E9000E",*/}
										{/*				fontSize: "25px",*/}
										{/*				transition: "all 0.2s ease-in-out",*/}
										{/*			}}*/}
										{/*		/>*/}
										{/*	</Button>*/}
										{/*</Link>*/}
									</Flex>
									<Image src={product} alt="product" width={248} height={212} />
									<Box
										padding={"8.5px 16.38px 9.5px 17px"}
										position={"absolute"}
										top={267}
										right={75}
										bg={"#E9000E"}
									>
										<Link
											href={{
												pathname: appRoutes.contactUs,
												query: {service: "services/it-outsourcing/cloud-migration-services"},
											}}
											service={`services/it-outsourcing/cloud-migration-services`}
											className="request-services"
										><Text fontSize={"15px"} fontWeight={600} color={"#fff"}>
											Reach out to Tanta Innovative
										</Text></Link>
									</Box>
								</Flex>
							</Box>
							{/*HOW LONG DOES CLOUD MIGRATION TAKE?*/}
							<Box mt={"4rem"}>
								<Box  m={"0 auto"} maxW={{base:"320px",md:"100%"}}>
									<Box  display={{base:"flex",md:"block"}} gap={"7px"} >
										<Heading
											fontWeight="700"
											fontSize={{ base: "16px", lg: "28px" }}
											textTransform="uppercase"
											color="#444444"
											lineHeight={{ lg: "140%", base: "150%" }}
										>
											how long does <chakra.span color={{base:"black",md:"#E9000E"}}> cloud migration</chakra.span> take?
										</Heading>
									</Box>
									<Box
										width={{ lg: "80px", base: "50px" }}
										height={"3px"}
										bg={"#D80808"}
										mb={{base:"10px",md:"2.5rem"}}
									></Box>
								</Box>
								<Box
									padding={{base:"8px 6px",md:" 23px 30px 22px 30px"}}
									bg={{base:"none",md:"#FDE6E7"}}
									height={"fit-content"}
								>
									<Text color={"#3B3C3D"} fontSize={{base:"15px",md:"18px"}}>
										There are multiple factors that influence the migration
										timeline, e.g., the chosen cloud migration method, the
										complexity or workloads and data volume to migrate, the
										scope of the target infrastructure, the required code and
										configuration changes. Based on Tanta’s Innovatives
										experience, a typical migration of a simple app takes ~2–2.5
										months, medium and complex apps – 6+ months, a DWH – ~2–8
										months.
									</Text>
								</Box>
							</Box>
							{/*HOW MUCH DOES CLOUD MIGRATION COST?*/}
							<Box mt={"4rem"}>
								<Box  m={"0 auto"} maxW={{base:"320px",md:"100%"}}>
									<Box  display={{base:"flex",md:"block"}} gap={"7px"} >
										<Heading
											fontWeight="700"
											fontSize={{ base: "16px", lg: "28px" }}
											textTransform="uppercase"
											color="#444444"
											lineHeight={{ lg: "140%", base: "150%" }}
										>
											HOW MUCH DOES <chakra.span color={{base:"#444444",md:"#E9000E"}}> cloud migration</chakra.span> cost?
										</Heading>
									</Box>
									<Box
										width={{ lg: "80px", base: "50px" }}
										height={"3px"}
										bg={"#D80808"}
										mb={{base:"10px",md:"2.5rem"}}
									></Box>
								</Box>
								<Flex
									mt={"3rem"}
									gap={"1.5rem"}
									flexWrap={"wrap"}
									justifyContent={"center"}
									flexDir={{ lg: "row", md: "row", base: "row" }}
								>
									{amount.map((item, index) => (
										<Flex
											key={index}
											flexDir={"column"}
											// justifyContent={"center"}
											alignItems={"center"}
											// maxH={"150px"}
											gap={"1.1rem"}
											borderRadius={" 0px 0px 10px 10px"}
											padding={"20px 0px 56px 0px"}
											borderTop={"9px solid #E9000E"}
											transition={"all 0.2s ease-in-out"}
											_hover={{
												transform: "scale(1.02)",
											}}
											boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
											width={{ lg: "47%", md: "70%", base: "100%" }}
										>
											<Image src={item.img} alt="img" width={58} height={40} />
											<Text color={"#444"} fontSize={{base:"14px",md:"18px"}} fontWeight={700}>
												{item.cost}
											</Text>
											<Text
												color={"#444"}
												fontSize={{base:"14px",md:"16px"}}
												textAlign={"center"}
												px={{base:"10px",md:"1rem"}}
											>
												{item.detail}
											</Text>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*DELAY CLOUD MIGRATION DUE TO UNCERTAINTY*/}
							<Box
								mt={"2rem"}
								bg={"linear-gradient(221deg, #AC2121 0%, #E9000E 100%)"}
								padding={"1.5rem"}
							>
								<Heading
									color={"#fff"}
									fontSize={{base:"14px",md:"20px"}}
									fontWeight={700}
									mb={"1rem"}
								>
									Delaying Cloud Migration due to Uncertainty?
								</Heading>
								<Text color={"#fff"} fontSize={{base:"13px",md:"16px"}} mb={"1rem"}>
									Tanta’s Innovatives cloud consultants and architects can
									accurately calculate your migration project timelines and
									costs.
								</Text>
								<Button
									bg={"#F8B3B7"}
									padding={"11.5px 19.38px 12.5px 20px"}
									borderRadius={0}
									cursor={"default"}
									_hover={{ bgColor: "#F8B3B7" }}
								>
									<Link
										href={{
											pathname: appRoutes.contactUs,
											query: {service: "services/it-outsourcing/cloud-migration-services"},
										}}
										service={`services/it-outsourcing/cloud-migration-services`}
										className="request-services"
									><Text fontSize={{base:"13px",md:"16px"}} color={"#222"} fontWeight={600}>
										Get a project estimation
									</Text></Link>
								</Button>
							</Box>
							{/*THE KEY STAGES*/}
							<Accordion mt={"30px"} display={{base:"block",md:"none"}} allowToggle mb={'1rem'} bg="#F7F2FA"
									   boxShadow='0px 2px 4px rgba(165, 163, 174, 0.3)' borderRadius='6px'>
								<AccordionItem>
									<h2>
										<AccordionButton borderRadius={"10px"} minH={"60px"} color={"white"} bg={"#AE0000"} _expanded={{
											color: 'white',
											background: '#AE0000',
											boxShadow: '0px 2px 4px rgba(165, 163, 174, 0.3)',
											borderRadius: '6px',
										}}>
											<Box as="span" flex='1' fontWeight={"700"} textAlign='left' display={'flex'}>
												THE KEY STAGES OF OUR CLOUD MIGRATION PROJECTS
											</Box>
											<Image src={arrow} alt={"arrow"}/>
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										<Flex
											flexDir={"column"}
											bg={"#fff"}
											boxShadow={"0px 4px 20px 0px rgba(15, 20, 34, 0.40)"}
											transition={"all 0.2s ease-in-out"}
											_hover={{
												transform: "scale(1.02)",
											}}
											padding={"10px 0px 0px 0px"}
											alignItems={"flex-start"}
										>
											{keyStages?.map((item, index) => (
												<Flex key={index} gap={"20px"} mb={"1rem"}>
													<Box
														border={"1px solid #DADFE3"}
														height={"40px"}
														display={"flex"}
														justifyContent={"center"}
														alignItems={"center"}
														padding={{lg:"11px 14px 11px 15px", base:"3px 5px 3px 5px"}}
														bg={"#fff"}
													>
														{item?.numbers}
													</Box>
													<Flex
														flexDir={"column"}
														gap={"1rem"}
														width={"100%"}
														alignItems={"flex-start"}
														padding={"0px 0px 11.84px 0px"}
													>
														<Text
															fontSize={{lg:"19px", base:"16px"}}
															fontWeight={700}
															color={"#3B3C3D"}
														>
															{item?.title}
														</Text>
														<Text
															fontSize={{lg:"16px", base:"14px"}}
															mb={index === 3 ? "-.5rem" : "1.2rem"}
														>
															{item?.content}
														</Text>
														{item?.subContent?.map((nestedItem1, index) => (
															<Flex
																key={nestedItem1.id}
																gap={"1rem"}
																color={"#3B3C3D"}
																fontSize={{ lg: "16px", base: "14px" }}
																alignItems={"center"}
																mt={index === 0 ? "-1.5rem" : ""}
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
																{nestedItem1?.list()}
															</Flex>
														))}
													</Flex>
												</Flex>
											))}
										</Flex>

									</AccordionPanel>
								</AccordionItem>
							</Accordion>


							<Box mt={"4rem"} display={{base:"none",md:"block"}}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "28px" }}
									textTransform="uppercase"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									the key stages of our{" "}
								</Heading>
								<Heading
									color={"#E9000E"}
									fontSize={{ base: "20px", lg: "28px" }}
									lineHeight={{ lg: "140%", base: "150%" }}
									fontWeight="700"
									textTransform="uppercase"
									mb={"1rem"}
								>
									{" "}
									cloud migration{" "}
									<chakra.span color={"#444"}> project</chakra.span>
								</Heading>
								<Box
									width={{ lg: "80px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"2.5rem"}
								></Box>
								<Flex
									flexDir={"column"}
									bg={"#fff"}
									boxShadow={"0px 4px 20px 0px rgba(15, 20, 34, 0.40)"}
									transition={"all 0.2s ease-in-out"}
									_hover={{
										transform: "scale(1.02)",
									}}
									padding={"10px 0px 0px 0px"}
									alignItems={"flex-start"}
								>
									{keyStages?.map((item, index) => (
										<Flex key={index} gap={"20px"} mb={"1rem"}>
											<Box
												border={"1px solid #DADFE3"}
												height={"40px"}
												display={"flex"}
												justifyContent={"center"}
												alignItems={"center"}
												padding={"11px 14px 11px 15px"}
												bg={"#fff"}
											>
												{item?.numbers}
											</Box>
											<Flex
												flexDir={"column"}
												gap={"1rem"}
												width={"100%"}
												alignItems={"flex-start"}
												padding={"0px 0px 11.84px 0px"}
											>
												<Text
													fontSize={"19px"}
													fontWeight={700}
													color={"#3B3C3D"}
												>
													{item?.title}
												</Text>
												<Text
													fontSize={"16px"}
													mb={index === 3 ? "-.5rem" : "1.2rem"}
												>
													{item?.content}
												</Text>
												{item?.subContent?.map((nestedItem1, index) => (
													<Flex
														key={nestedItem1.id}
														gap={"1rem"}
														color={"#3B3C3D"}
														fontSize={{ lg: "16px", base: "15px" }}
														alignItems={"center"}
														mt={index === 0 ? "-1.5rem" : ""}
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
														{nestedItem1?.list()}
													</Flex>
												))}
											</Flex>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*MORE DETAILS ABOUT APPROACH*/}
							<Box  mt={"4rem"} id={"KPI"} scrollMarginTop={"150px"}>
								<Heading ml={{base:"10%",md:"0px"}}
									fontWeight="700"
									fontSize={{ base: "20px", lg: "28px" }}
									textTransform="uppercase"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									GET MORE DETAILS ABOUT{" "}
								</Heading>
								<Heading ml={{base:"10%",md:"0px"}}
									color={"#E9000E"}
									fontSize={{ base: "20px", lg: "28px" }}
									lineHeight={{ lg: "140%", base: "150%" }}
									fontWeight="700"
									mb={"1rem"}
								>
									{" "}
									Tanta’s Innovatives{" "}
									<chakra.span textTransform="uppercase" color={"#444"}>
										{" "}
										APPROACH TO:
									</chakra.span>
								</Heading>
								<Box ml={{base:"10%",md:"0px"}}
									width={{ lg: "80px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"2.5rem"}
								></Box>
								<Flex
									gap={"0.5rem"}
									flexWrap={{base:"wrap",md:"nowrap"}}
									flexDir={{ lg: "row", md: "row", base: "row" }}
									justifyContent={"center"}
									alignItems={"center"}
								>
									{approach.map((item, index) => (
										<Flex

											key={index}
											gap={"1.9rem"}
											transition={"all 0.2s ease-in-out"}
											_hover={{
												transform: "scale(1.02)",
											}}
											flexDir={"column"}
											width={{ lg: "25%", base: "46%" }}
											justifyContent={"flex-end"}
											alignItems={"flex-end"}
											borderRadius={"10px"}
											boxShadow={" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
											padding={" 20px 10px 10px 10px"}
										>
											<Text
												textAlign={"center"}
												color={"#222"}
												fontSize={{ lg: "14px", base: "16px" }}
												fontWeight={700}
											>
												{item.text}
											</Text>
											<Image
												src={item.icon}
												alt="icon"
												width={12}
												height={12}
											/>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*COMMON QUESTIONS ABOUT MIGRATION SERVICES ANSWERED*/}
							<Box display={{base:"none",md:"block"}} mt={"4rem"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "28px" }}
									textTransform="uppercase"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									COMMON QUESTIONS ABOUT{" "}
								</Heading>
								<Heading
									color={"#E9000E"}
									fontSize={{ base: "20px", lg: "28px" }}
									lineHeight={{ lg: "140%", base: "150%" }}
									fontWeight="700"
									mb={"1rem"}
								>
									{" "}
									MIGRATION SERVICES{" "}
									<chakra.span textTransform="uppercase" color={"#444"}>
										{" "}
										ANSWERED:
									</chakra.span>
								</Heading>
								<Box
									width={{ lg: "80px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"2.5rem"}
								></Box>
								<Flex
									flexDir={"column"}
									padding={"20px 15px"}
									bg={"#FDE6E7"}
									gap={"2rem"}
								>
									{questions.map((item, index) => (
										<Flex key={index} justifyContent={"space-between"}>
											<Text
												fontSize={{ lg: "18px", base: "16px" }}
												fontWeight={600}
												width={"60%"}
											>
												{item.test}
											</Text>
											<Flex
												border={"none"}
												fontSize={"16px"}
												justifyContent={"space-between"}
												textTransform={"capitalize"}
												gap={"1rem"}
											>
												<Text>{item.answers}</Text>
												<RxCaretDown
													style={{
														fontSize: "25px",
													}}
												/>
											</Flex>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*FEATURED CLOUD MIGRATION PROJECTS*/}
							{/*<Box display={{base:"none",md:"block"}} mt={"5rem"} id={"RP"} scrollMarginTop={"150px"}>*/}
							{/*	<Heading*/}
							{/*		fontWeight="700"*/}
							{/*		fontSize={{ base: "20px", lg: "28px" }}*/}
							{/*		textTransform="capitalize"*/}
							{/*		color="#444444"*/}
							{/*		lineHeight={{ lg: "140%", base: "150%" }}*/}
							{/*	>*/}
							{/*		FEATURED CLOUD MIGRATION PROJECTS BY{" "}*/}
							{/*	</Heading>*/}
							{/*	<Text*/}
							{/*		color={"#E9000E"}*/}
							{/*		fontSize={{ base: "20px", lg: "28px" }}*/}
							{/*		lineHeight={{ lg: "140%", base: "150%" }}*/}
							{/*		fontWeight="700"*/}
							{/*		mb={"1rem"}*/}
							{/*	>*/}
							{/*		{" "}*/}
							{/*		Tanta’s Innovatives*/}
							{/*	</Text>*/}
							{/*	<Box*/}
							{/*		width={{ lg: "80px", base: "50px" }}*/}
							{/*		height={"3px"}*/}
							{/*		bg={"#D80808"}*/}
							{/*		mb={"1rem"}*/}
							{/*	></Box>*/}
							{/*	<RelatedProjects />*/}
							{/*</Box>*/}


							{/*----------FEATURED CLOUD MIGRATION PROJECTS-----------*/}
							<HandpickedProject heading={"FEATURED CLOUD MIGRATION PROJECTS\n" +
								"BY Tanta Innovatives "} title={" "}/>

							{/*RELY ON 10-YEAR CLOUD MIGRATION EXPERTISE*/}
							<Box display={{base:"none",md:"block"}}
								mt={"3rem"}
								bg={"#FDE6E7"}
								padding={"10px 20px 20px 22px"}
								flexDir={"column"}
								gap={"29px"}
							>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "24px" }}
									color="#222"
									mb={"0.8rem"}
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									Rely on 10-Year Cloud Migration Expertise
								</Heading>
								<Box
									width={{ lg: "40px", base: "20px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1.5rem"}
								></Box>
								<Text color={"#3B3C3D"} fontSize={"16px"}>
									Tanta’s Innovatives team is ready to cover end-to-end cloud
									migration of your applications or a DWH and ensure reduced
									cloud infrastructure costs and higher software performance.
								</Text>
								<Flex justifyContent={"flex-end"}>
									<Box
										padding={"15.5px 9.81px 15.5px 9px"}
										width={"31%"}
										mt={"3.5rem"}
										bg={"linear-gradient(221deg, #AC2121 0%, #E9000E 100%)"}
									>
										<Link
											href={{
												pathname: appRoutes.contactUs,
												query: {service: "services/it-outsourcing/cloud-migration-services"},
											}}
											service={`services/it-outsourcing/cloud-migration-services`}
											className="request-services"
										><Text fontSize={"15px"} fontWeight={600} color={"#fff"}>
											GO FOR RELIABLE MIGRATION
										</Text></Link>
									</Box>
								</Flex>
							</Box>
							{/*MIGRATION PAINS Tanta’s Innovatives CURES*/}
							<Box display={{base:"none",md:"block"}} mt={"4rem"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "28px" }}
									textTransform="uppercase"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									MIGRATION PAINS{" "}
								</Heading>
								<Heading
									color={"#E9000E"}
									fontSize={{ base: "20px", lg: "28px" }}
									lineHeight={{ lg: "140%", base: "150%" }}
									fontWeight="700"
									mb={"1rem"}
								>
									{" "}
									Tanta’s Innovatives{" "}
									<chakra.span textTransform="uppercase" color={"#444"}>
										{" "}
										CURES{" "}
									</chakra.span>
								</Heading>
								<Box
									width={{ lg: "80px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"2.5rem"}
								></Box>
								<Flex
									flexWrap={"wrap"}
									gap={"0.9rem"}
									justifyContent={"center"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
								>
									{pains.map((item, index) => (
										<Flex
											key={index}
											border={"0.5px solid #444"}
											flexDir={"column"}
											width={{ lg: "32%", md: "70%", base: "100%" }}
											gap={"1rem"}
											padding={"20px 10px 10px 10px"}
										>
											<Flex gap={"0.5rem"} alignItems={"center"}>
												<Image
													src={item.icon}
													alt="target"
													width={32}
													height={32}
												/>
												<Text
													fontSize={"16px"}
													fontWeight={700}
													color={"#ED1C24"}
												>
													{item.title}
												</Text>
											</Flex>
											<Text fontSize={"14px"} color={"#3B3C3D"}>
												{item.content}
											</Text>
											{/*<Link*/}
											{/*	href={"#"}*/}
											{/*	style={{*/}
											{/*		backgroundColor: "transparent",*/}
											{/*		display: "flex",*/}
											{/*		justifyContent: "flex-end",*/}
											{/*	}}*/}
											{/*>*/}
											{/*	<Button*/}
											{/*		border={"none"}*/}
											{/*		color={"#e90002"}*/}
											{/*		fontSize={"14px"}*/}
											{/*		padding={"0"}*/}
											{/*		display={"flex"}*/}
											{/*		gap={"0.4rem"}*/}
											{/*		bgColor={"transparent"}*/}
											{/*		_hover={{ bgColor: "transparent" }}*/}
											{/*	>*/}
											{/*		<Text>Click to see</Text>*/}
											{/*		<Image*/}
											{/*			src={arrowRight}*/}
											{/*			alt="arrowRight"*/}
											{/*			width={24}*/}
											{/*			height={24}*/}
											{/*		/>*/}
											{/*	</Button>*/}
											{/*</Link>*/}
										</Flex>
									))}
								</Flex>
							</Box>
							{/*GET THE MOST OUT OF CLOUD*/}
							<Box display={{base:"none",md:"block"}} mt={"4rem"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "28px" }}
									textTransform={"uppercase"}
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									get the most out of{" "}
								</Heading>
								<Text
									color={"#E9000E"}
									fontSize={{ base: "20px", lg: "28px" }}
									lineHeight={{ lg: "140%", base: "150%" }}
									fontWeight="700"
									textTransform={"uppercase"}
									mb={"1rem"}
								>
									{" "}
									cloud
								</Text>
								<Box
									width={{ lg: "80px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1rem"}
								></Box>
								<Flex gap={"1rem"} mt={"1.5rem"}>
									{most.map((item, index) => (
										<Flex
											key={index}
											flexDir={"column"}
											borderRight={"0.5px solid #444"}
											alignItems={"flex-start"}
											gap={"22px"}
											padding={" 0px 10px"}
										>
											<Text
												color={"#E9000E"}
												fontSize={{ lg: "40px", md: "38px", base: "34" }}
												fontWeight={600}
											>
												{item.rate}
											</Text>
											<Text
												color={"#333"}
												fontSize={{ lg: "16px", base: "14px" }}
											>
												{item.text}
											</Text>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*MIGRATE TO THE CLOUD WITH TANTA INNOVATIVES*/}
							<Box display={{base:"none",md:"block"}} mt={"4rem"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "24px" }}
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									Migrate to the Cloud with
									<chakra.span
										color={"#E9000E"}
										fontSize={{ base: "20px", lg: "24px" }}
										lineHeight={{ lg: "140%", base: "150%" }}
										fontWeight="700"
										mb={"1rem"}
									>
										{" "}
										Tanta’s Innovatives
									</chakra.span>
								</Heading>
								<Text fontSize={"18px"} color={"#3B3C3D"} mt={"1rem"}>
									Tanta’s Innovatives team can carry out cloud migration with
									minimum disruption and ensure you get sustainable business
									benefits from your new cloud solutions.
								</Text>
								<Flex mt={"1.5rem"}>
									<Link
										href={{
											pathname: appRoutes.contactUs,
											query: {service: "services/it-outsourcing/cloud-migration-services"},
										}}
										service={`services/it-consulting/it-outsourcing/cloud-migration-services`}
										className="request-services"
									><Button
										color={"#fff"}
										border={"none"}
										padding={"17px 13px 18px 14px"}
										textTransform={"uppercase"}
										borderRadius={"8px"}
										fontWeight={600}
										fontSize={"14px"}
										textAlign={"center"}
										background={
											"linear-gradient(221deg, #AC2121 0%, #E9000E 100%)"
										}
									>
										migrate to the cloud smoothly
									</Button></Link>
								</Flex>
							</Box>
							{/*SUMMARY*/}
							<Box display={{base:"none",md:"block"}} mt={"4rem"} id="Summary" scrollMarginTop={"150px"}>
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
																			<ListItem pl={4} key={"index"}>
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
																			"services/it-outsourcing/cloud-migration-services",
																	},
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
							</Box>
							{/*ALL ABOUT CLOUD*/}
							<Box display={{base:"none",md:"block"}} mt={"5rem"} padding={"32px 16px 8px 32px"} bg={"#FDE6E7"}>
								<Text color={"#444"} fontSize={"22px"} fontWeight={700}>
									All about Cloud
								</Text>
								<Flex flexWrap={"wrap"} mt={"0.5rem"} gap={"0.5rem"}>
									{allCloud.map((item, index) => (
										<Flex
											key={index}
											gap={"10px"}
											width={{ lg: "32%", md: "70%", base: "100%" }}
											flexDir={"column"}
											padding={"15px 10px 5px 0px;"}
										>
											<Text fontSize={"16px"} fontWeight={700} width={"100%"}>
												{item.title}
											</Text>
											{item?.content?.map((nestedItem, index) => (
												<Text
													key={index}
													fontSize={"15px"}
													color={"#444"}
													width={"100%"}
												>
													{nestedItem.list}
												</Text>
											))}
										</Flex>
									))}
								</Flex>
							</Box>
						</Box>
					</Flex>
				</Container>

			</Box>
			<Box display={{base:"block",md:"none"}}>
				<ContactUs subtitle="We’re here to support"/>
			</Box>
		</>
	);
};

export default CloudMigrationServices;

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
	padding-left: 2.5%;
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
		font-size: 36px;
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
flex: 1;
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
		flex: 1;
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
