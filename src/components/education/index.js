import HeaderOne from "../../components/HeaderOne";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";
import LogoMarquee from "../logoMarquee";
import {
	Box,
	Flex,
	Text,
	Container,
	Grid,
	List,
	ListItem,
	UnorderedList,
	ListIcon, Heading,
} from "@chakra-ui/react";

// images and icons are imported here
import { herobg, bannerImg } from "../../../public/assets/education";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { MdSquare } from "react-icons/md";

import {
	mainBarData,
	sideBarData,
	eLearning,
	solution,
} from "./data";
import ServicesForm from "../servicesForm/servicesForm";
import TechSackGrid from "../techStackGrid/techSackGrid";
import appRoutes from "../../utils/appRoutes";
import {breakpoints} from "../../../styles/theme";

const EducationPage = ({ stacks }) => {
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
				<HeaderOne
					heading={"Industries"}
					title={"e-Learning Software Development Services"}
				/>
				<Container maxW={"7xl"} px={{lg: "5rem", base: "2rem"}}>
					{/* ================= hero section ================= */}
					<Flex
						justifyContent={"center"}
						alignItems={"center"}
						gap={"4rem"}
						mt={{lg:"5rem", base:"2rem"}}
						flexDirection={{lg: "row", base: "column"}}
					>
						{/* ================= hero section image ================= */}
						<Box width={{lg: "120%", base: "50%"}} paddingTop={{lg: "0", base: "1rem"}}>
							<Image
								src={herobg} alt={"hero"}
								width={429}
								height={409}
							/>
						</Box>

						<Flex
							flexDirection={"column"}
							gap={"15px"}
							alignItems={{lg: "flex-end", base: "none"}}
							justifyContent={"center"}
						>
							<Box
								borderRight={{lg: "3px solid #FF0000", base: "none"}}
								borderLeft={{lg: "none", base: "3px solid #FF0000"}}
								px={"1rem"}
							>
								<Heading
									fontSize={{lg: "36px", base: "20px"}}
									textAlign={{lg: "right", base: "left"}}
									color={"#1F1F1F"}
									lineHeight={"170%"}
								>
									Transform Your Corporate Learning with Tanta Innovative's
									eLearning Solutions
								</Heading>
							</Box>
							<Text
								textAlign={{lg: "right", base: "left"}}
								color={"#333333"}
								lineHeight={"170%"}
								fontSize={{lg: "20px", base: "15px"}}
								fontWeight={"400"}
							>
								Tanta Innovative has been developing eLearning solutions
								aimed at promoting the digital transformation of corporate
								learning and increasing the return on investment (ROI) in
								human capital since 2008. Their team is prepared to optimize
								your company's learning processes with technology or update
								your existing eLearning software.
							</Text>
							<CtaButtons>
								<Link
									href={{
										pathname:appRoutes.contactUs,
										query: { service: "industries/education" },
									}}
									service="industries/education"
									className="request-services"
								>
									{" "}
									<button className="request-services">
										Request education services
									</button>
								</Link>
								<Link
									href={{
										pathname: appRoutes.services["cost-calculator"],
										query: { service: "education-4" },
									}}
								>
									{" "}
									<button className="get-quote">get a quote</button>
								</Link>
							</CtaButtons>
						</Flex>
					</Flex>
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
							flex={1}
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
											alignItems={"center"}
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
							<Box mb={"4rem"}>
								<Text
									fontWeight="400"
									fontSize={{ base: "15px", lg: "20px" }}
									textTransform={"capitalize"}
									lineHeight={{ base: "28px", lg: "30px" }}
									mb={"2rem"}
								>
									The objective of developing eLearning is to design tools such
									as LMS, LCMS, and LXP that aid organizations in enhancing
									learning effectiveness and reducing learning expenses.
								</Text>
								<Text
									fontWeight="700"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform={"capitalize"}
									lineHeight={{ base: "34px", lg: "70px" }}
								>
									Types of eLearning Solutions{" "}
									<span style={{ color: "#E9000E" }}>Tanta Innovative</span>{" "}
									Builds
								</Text>
								<div
									style={{
										width: "130px",
										height: "4px",
										background: "#ff0000",
									}}
								></div>
								<Grid
									gridTemplateColumns={{
										base: "1fr",
										md: "1fr 1fr",
										lg: "1fr 1fr 1fr",
									}}
									px={{ base: "5px" }}
								>
									{eLearning.map((item, index) => (
										<Box
											m={"1.5rem"}
											key={index}
											border="0.75px solid rgba(0, 0, 0, 0.3)"
											borderRadius="8px"
										>
											<Box
												borderBottom={"0.75px solid rgba(0, 0, 0, 0.3)"}
												p={"10px"}
											></Box>
											<Box p={"1rem .5rem"} position={'relative'}>
												<Text
													fontWeight={"400"}
													fontSize={"15px"}
													lineHeight={"26px"}
													mb={'.8rem'}
												>
													{item}
												</Text>
												{/*<ReadMoreLink>*/}
												{/*	Read more{" "}*/}
												{/*	<BsArrowRightShort*/}
												{/*		style={{ margin: "5px", alignSelf: "center" }}*/}
												{/*	/>*/}
												{/*</ReadMoreLink>*/}
											</Box>
										</Box>
									))}
								</Grid>
							</Box>

							{/* ====================== e-learning software we provide section ============= */}
							{mainBarData.slice(0, 1).map((item, index) => (
								<Box
									mb="4.5rem"
									w={"100%"}
									key={index}
									scrollMarginTop={"160px"}
									id={item.id}
								>
									<Text
										fontWeight="700"
										fontSize={{ base: "20px", lg: "24px" }}
										lineHeight="34px"
									>
										Main Characteristics of the eLearning Software We <br></br>{" "}
										Provide at{" "}
										<span style={{ color: "#E9000E" }}>Tanta Innovative</span>
									</Text>
									<div
										style={{
											width: "130px",
											height: "4px",
											background: "#ff0000",
										}}
									></div>

									<Grid
										gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
										justifyContent={"center"}
										mt={"2rem"}
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
												<UnorderedList p={" 20px 15px"}>
													{item.text.map((child, index) => (
														<ListItem
															fontWeight="400"
															fontSize={{ base: "14px", lg: "16px" }}
															lineHeight="170%"
															my="10px"
															key={index}
														>
															{child}
														</ListItem>
													))}
												</UnorderedList>
											</Box>
										))}
									</Grid>
									<Box my={"1rem"}>
										<LogoMarquee colored={true} />
									</Box>
								</Box>
							))}

							{/* ================== reason to choose us ==================  */}
							{mainBarData.slice(1, 2).map((item, index) => (
								<Box key={index} id={item.id} scrollMarginTop={"160px"}>
									<Text
										fontWeight="700"
										fontSize={{ base: "20px", lg: "24px" }}
										lineHeight="34px"
									>
										Reasons To Choose <br></br>{" "}
										<span style={{ color: "#E9000E" }}>Tanta Innovative</span>{" "}
										For Your ELearning Solutions
									</Text>
									<div
										style={{
											width: "130px",
											height: "4px",
											background: "#ff0000",
										}}
									></div>

									<Flex mt={"2rem"} mb={"2rem"} justify={"center"} flexDir={{lg:"row", base:"column"}}>
										{item.cards.map((item, key) => (
											<Box
												m="15px"
												display="flex"
												justifyContent={"center"}
												alignItems={"center"}
												flexDir="column"
												key={key}
											>
												<Image
													src={item?.image}
													alt="icons"
													style={{ width: "60px", height: "60px" }}
												/>
												<Text
													fontWeight="600"
													fontSize="32px"
													lineHeight="38px"
												>
													{item?.title}
												</Text>
												<Text
													fontWeight="500"
													fontSize="20px"
													lineHeight="24px"
													my={"1rem"}
													color={"#6B6F71"}
												>
													{item.text}
												</Text>
											</Box>
										))}
									</Flex>
									{/* ================= logo marquees ============== */}
								</Box>
							))}

							{/* ================== e-learning solution section ==================  */}
							<Box>
								<Text
									fontWeight="700"
									fontSize={{ base: "20px", lg: "28px" }}
									lineHeight={{ base: "38px", lg: "40px" }}
									textTransform={"capitalize"}
									mb={"2rem"}
								>
									We <span style={{ color: "#E9000E" }}>develop</span> eLearning
									solutions for various industries:
								</Text>
								<Box borderLeft={"6px solid #E9000E"} p={{lg:".5rem 2rem", base:".5rem .4rem"}}>
									<Grid
										gridTemplateColumns={{
											base: "1fr 1fr",
											lg: "1fr 1fr 1fr 1fr",
										}}
										gap={2}
									>
										{solution.map((item, index) => (
											<Box
												display={"flex"}
												key={index}
												flexDir={"column"}
												justifyContent={"center"}
												alignItems={"center"}
												border="0.79562px solid #878A99"
												filter="drop-shadow(0px 5px 20px rgba(75, 70, 92, 0.4))"
												borderRadius="10px"
												p={"15px 10px"}
											>
												<Box width={{lg:"100%", base:"30%"}}>
													<Image src={item.image} alt="image" />
												</Box>

												<Text
													fontWeight="500"
													fontSize={{lg:"20px", base:"16px"}}
													textAlign={"center"}
													lineHeight="24px"
													color="#6B6F71"
													mt={".5rem"}
												>
													{item.text}
												</Text>
											</Box>
										))}
									</Grid>
								</Box>
							</Box>

							{/* ================== banner.js section ==================  */}
							<Flex
								background={"#FDE6E7"}
								justifyContent={"center"}
								alignItems={{ base: "center", lg: "start" }}
								flexDir={"column"}
								padding={"1.5rem .9rem"}
								borderRadius={"3px"}
								my={"4rem"}
								w={"100%"}
							>
								<Text
									fontWeight="700"
									fontSize={{ base: "22px", lg: "32px" }}
									lineHeight="170%"
								>
									How You Benefit From Partnering With<br></br>
									<span style={{ color: "#D80808" }}> Tanta Innovative</span>
								</Text>
								<Box
									w={"100%"}
									display={"flex"}
									flexDir={{ base: "column", lg: "row" }}
									alignItems={"center"}
								>
									<Grid
										gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
										w={{ base: "100%", lg: "70%" }}
									>
										<Box
											background={"rgba(255, 114, 94, 0.42)"}
											borderRadius="10px"
											p={"1rem"}
											m={"1rem"}
											fontSize={{lg:"16px", base:"14px"}}
										>
											Our commitment to quality service delivery is reflected in
											our mature ISO 9001-certified quality management system,
											ensuring excellent software quality.
										</Box>
										<Box
											background={"rgba(255, 114, 94, 0.42)"}
											borderRadius="10px"
											p={"1rem"}
											m={"1rem"}
											fontSize={{lg:"16px", base:"14px"}}
										>
											We offer fast delivery of a viable MVP within 3-5 months
											by utilizing agile iterative development and implementing
											CI/CD practices.
										</Box>
										<Box
											background={"rgba(255, 114, 94, 0.42)"}
											borderRadius="10px"
											p={"1rem"}
											m={"1rem"}
											fontSize={{lg:"16px", base:"14px"}}
										>
											Cost-efficiency due to using OOTB software components,
											public APIs, and cloud-native architectures and continuous
											project cost optimization by Our PMs
										</Box>
										<Box
											background={"rgba(255, 114, 94, 0.42)"}
											borderRadius="10px"
											p={"1rem"}
											m={"1rem"}
											fontSize={{lg:"16px", base:"14px"}}
										>
											Guaranteed security of our customers' data due to Our
											robust security management practices supported by an ISO
											27001 certificate
										</Box>
									</Grid>
									<ImgContainer>
										<Image src={bannerImg} alt="banner-image" />
									</ImgContainer>
								</Box>
							</Flex>

							{/* ==================== our services ======================== */}
							{mainBarData.slice(2, 3).map((item, index) => (
								<Box key={index} id={item.id} scrollMarginTop={"160px"}>
									<Text
										fontWeight="700"
										fontSize={{ base: "22px", lg: "30px" }}
										textTransform={"capitalize"}
										lineHeight="44px"
									>
										Our Service Options To{" "}
										<span style={{ color: "#E9000E" }}>Choose From:</span>
									</Text>
									<Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
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
												<UnorderedList p={" 20px 15px"}>
													{item.text.map((child, index) => (
														<ListItem
															fontWeight="400"
															fontSize={{ base: "14px", lg: "16px" }}
															lineHeight="170%"
															my="10px"
															key={index}
														>
															{child}
														</ListItem>
													))}
												</UnorderedList>
												<Flex
													p={" 20px 15px"}
													flexDir={"column"}
													justifyContent={"center"}
													alignItems={"center"}
												>
													<RequestLink as={Link} href={{
														pathname: appRoutes.services["cost-calculator"],
														query: { service: "education-4" },
													}}>
														Request Service{" "}
														<BsArrowRightShort
															style={{ fontSize: "20px", margin: "5px" }}
														/>
													</RequestLink>
												</Flex>
											</Box>
										))}
									</Grid>
								</Box>
							))}

							{/* =================== OUR TECH EXPERTISE SECTION ======================  */}
							{mainBarData.slice(3, 4).map((item, index) => (
								<Box
									my={"1.5rem"}
									key={index}
									id={item.id}
									scrollMarginTop={"160px"}
								>
									<Text
										fontWeight="400"
										fontSize={{ base: "14px", lg: "18px" }}
										lineHeight="20px"
										color={"#636363"}
										textTransform={"uppercase"}
									>
										{" "}
										{item.title}
									</Text>
									<Text
										fontWeight="700"
										fontSize={{ base: "22px", lg: "30px" }}
										textTransform={"capitalize"}
										lineHeight="44px"
									>
										Our Capabilities and Technological Expertise
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
										lineHeight={{lg:"170%", base:"150%"}}
									>
										{item.text}
									</Text>

									<TechSackGrid stacks={stacks} />
								</Box>
							))}

							<Box mb={"4rem"}>
								<Text
									fontWeight="700"
									fontSize={{ base: "22px", lg: "30px" }}
									textTransform={"capitalize"}
									lineHeight={{lg:"170%", base:"170%"}}
								>
									<span style={{ color: "#E9000E" }}>Our eLearning</span>{" "}
									software development services are offered within the following{" "}
									<span style={{ color: "#E9000E" }}>timeframes:</span>
								</Text>
								<div
									style={{
										width: "130px",
										height: "4px",
										background: "#ff0000",
									}}
								></div>
								<List my={"2rem"} spacing={3} >
									<ListItem fontSize={{lg:"18px", base:"16px"}}>
										<ListIcon as={MdSquare} color="red.500" />
										The development of a minimum viable product (MVP) takes
										around 3 to 6 months.
									</ListItem>
									<ListItem fontSize={{lg:"18px", base:"16px"}}>
										<ListIcon as={MdSquare} color="red.500" />
										If the MVP includes an innovative feature aimed at
										increasing learner engagement, the development timeline
										typically extends to 4 to 6 months.
									</ListItem>
									<ListItem fontSize={{lg:"18px", base:"16px"}}>
										<ListIcon as={MdSquare} color="red.500" />
										Creating an eLearning module with basic features or
										automating a single learning management process, such as
										performance assessment, can be done in 4 to 6 months.
									</ListItem>
									<ListItem fontSize={{lg:"18px", base:"16px"}}>
										<ListIcon as={MdSquare} color="red.500" />
										Thanks to the high value added by innovative technology, the
										investment payback period ranges from 0.1 to 0.9 years.
									</ListItem>

									<ListItem fontSize={{lg:"18px", base:"16px"}}>
										<ListIcon as={MdSquare} color="red.500" /> Releases of new
										software versions occur every 2 to 6 weeks.
									</ListItem>
									<ListItem fontSize={{lg:"18px", base:"16px"}}>
										<ListIcon as={MdSquare} color="red.500" /> Minor changes and
										hotfixes are made multiple times a day.
									</ListItem>
								</List>
							</Box>

							{/* ======== All Education Services section ======= */}
							{mainBarData.slice(3, 4).map((item, index) => (
								<Box
									mb="4.5rem"
									w={"100%"}
									key={index}
									id={"benefits"}
									scrollMarginTop={"160px"}
								>
									<Text
										fontWeight="700"
										fontSize={{ base: "22px", lg: "28px" }}
										textTransform={"capitalize"}
										lineHeight="38px"
										mb={{ base: "1rem", lg: "2rem" }}
									>
										<span style={{ color: "#E9000E" }}>
											Benefits of Investing
										</span>{" "}
										in eLearning Software Development at Present By adopting a
										well-executed eLearning solution{" "}
									</Text>
									<Text
										fontSize={"14px"}
										color={"#686868"}
										textTransform={"capitalize"}
										mb={"10px"}
									>
										you can enjoy the following advantages
									</Text>
									<div
										style={{
											width: "130px",
											height: "4px",
											background: "#ff0000",
										}}
									></div>
									<Grid
										gridTemplateColumns={{
											base: "1fr",
											md: "1fr 1fr",
											lg: "1fr 1fr 1fr 1fr",
										}}
									>
										{item.cards.map((object, index) => {
											return (
												<Box key={index} m={"1rem"} textAlign={"center"}>
													<Text
														fontWeight="500"
														fontSize="22px"
														lineHeight="130.5%"
														mb={"13px"}
													>
														{object?.title}
													</Text>
													<Text>{object.text}</Text>
												</Box>
											);
										})}
									</Grid>
								</Box>
							))}
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
										Need a ELearning Solution? <br></br>
										<Text color={"red"}>Let Our Experts Guide You</Text>
									</Text>
								</Box>
								<Box>
									<Image src={"/assets/testing-qa/task.png"} alt="task image" width={400} height={600}/>
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
								Feel free to briefly describe your Educational Service needs for
								our team to promptly get back to you.
							</Text>
							<ServicesForm services="E-learning Services" />
						</Box>
					</Flex>
				</Container>
			</Box>
		</>
	);
};

export default EducationPage;

export const ImgContainer = styled.div`
	width: 300px;
	margin-left: -15px;
	img {
		align-self: center;
	}

	@media (max-width: 770px) {
		width: 200px;
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

const ReadMoreLink = styled.a`
	display: flex; 
	justify-content: flex-end; 
	align-items: center; 
	color: #E9000E; 
	font-weight: 400; 
	font-size: 12px; 
	text-align: end; 
	line-height: 20px;
	
	position: absolute;
	bottom: 5px;
	right: 5px;
	cursor: pointer;
`;

const RequestLink = styled.a`
	display: flex;
	align-items: center;
	text-align: center;
	font-weight: 400; 
	font-size: 18px;
	line-height: 170%;
	color: #E9000E;
	cursor: pointer;
	
	${breakpoints.sm} {
		font-size:  16px;
	}
`;