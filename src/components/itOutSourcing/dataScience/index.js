import React, { useState } from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	List,
	ListIcon,
	ListItem,
	chakra,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import heroDS from "../../../../public/assets/dataScience/heroDS.png";
import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/theme";
import HeaderOne from "../../HeaderOne";
import { neutral, sideBarData, solutions, specific } from "./data";
import { MdKeyboardArrowRight } from "react-icons/md";
import LogoMarquee from "../../logoMarquee";
import { RiCheckboxBlankFill, RiCheckFill } from "react-icons/ri";
import ContactUs from "../../contactUs";
import appRoutes from "../../../utils/appRoutes";

const DataScience = () => {
	const [activeLink, setActiveLink] = useState({});

	return (
		<Box mt={"5rem"} minHeight={"100vh"}>
			<HeaderOne heading={"It Outsourcing"} title={<>Data Science <chakra.span color={"#E9000E"}>Consulting</chakra.span></>}/>
			<Box>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
					<HeroContent>
						<HeroText>
							<h1>Data Science Consulting Services</h1>
							<p>
								Tanta Innovatives offers data science services that assist
								companies in conducting data experiments to uncover valuable
								business insights. Our data science consulting utilizes advanced
								technologies such as Machine Learning, Artificial Intelligence,
								and Deep Learning to address our clients' specific analytics
								requirements.
							</p>
						</HeroText>
						<Box width={{ lg: "59%", base: "100%" }}>
							<Image
								src={heroDS}
								alt="hero image"
								width={560}
								height={370}
								className="hero-img"
							/>
						</Box>
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
							{/*why choose Tanta Innovative*/}
							<Box id="about" scrollMarginTop={"150px"}>
								<Text
									fontWeight="700"
									fontSize={{ base: "20px", lg: "30px" }}
									fontFamily={"Sumana"}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									Why Tanta is a Trusted Technology Partner
								</Text>
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
								<Flex
									direction={{ base: "column", lg: "row" }}
									gap={"6"}
									justifyContent={"flex-start"}
								>
									<List
										spacing={3}
										paddingBlock={"0.5rem"}
										fontSize={{ lg: "16px", base: "14px" }}
										textTransform={"capitalize"}
									>
										<ListItem display={"flex"} justifyContent={"flex-start"}>
											<ListIcon
												as={RiCheckFill}
												color={`${colors.primaryColor}`}
												width={4}
												height={4}
												mt={"0.2rem"}
											/>
											Over a decade of experience in the information technology
											market, serving healthcare organizations.
										</ListItem>
										<ListItem display={"flex"} justifyContent={"flex-start"}>
											<ListIcon
												as={RiCheckFill}
												color={`${colors.primaryColor}`}
												width={4}
												height={4}
												mt={"0.2rem"}
											/>
											A trusted IT for manufacturing firm with a strong track
											record of 13 years in the industry.
										</ListItem>
										<ListItem display={"flex"} justifyContent={"flex-start"}>
											<ListIcon
												as={RiCheckFill}
												color={`${colors.primaryColor}`}
												width={4}
												height={4}
												mt={"0.2rem"}
											/>
											Proven expertise in streamlining IT processes and
											resolving issues promptly for manufacturing organizations.
										</ListItem>
										<ListItem display={"flex"} justifyContent={"flex-start"}>
											<ListIcon
												as={RiCheckFill}
												color={`${colors.primaryColor}`}
												width={4}
												height={4}
												mt={"0.2rem"}
											/>
											Embracing the latest technologies to drive innovation and
											enhance patient care in the healthcare industry.
										</ListItem>
										<ListItem display={"flex"} justifyContent={"flex-start"}>
											<ListIcon
												as={RiCheckFill}
												color={`${colors.primaryColor}`}
												width={4}
												height={4}
												mt={"0.2rem"}
											/>
											Tailored IT solutions designed specifically for the
											manufacturing industry, addressing its unique needs and
											requirements.
										</ListItem>
										<ListItem display={"flex"} justifyContent={"flex-start"}>
											<ListIcon
												as={RiCheckFill}
												color={`${colors.primaryColor}`}
												width={4}
												height={4}
												mt={"0.2rem"}
											/>
											Committed to safeguarding the IT infrastructure of
											manufacturing providers and supporting their continuous
											evolution.
										</ListItem>
										<ListItem display={"flex"} justifyContent={"flex-start"}>
											<ListIcon
												as={RiCheckFill}
												color={`${colors.primaryColor}`}
												width={4}
												height={4}
												mt={"0.2rem"}
											/>
											Dedicated team of experts with extensive knowledge and
											experience in manufacturing IT services.
										</ListItem>
									</List>
								</Flex>
							</Box>
							{/*solutions we offer*/}
							<Box mt={"4rem"} id={"SWC"} scrollMarginTop={"150px"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "24px" }}
									textTransform="capitalize"
									color="#222"
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									Tanta's Big Data Services
								</Heading>
								<Box
									width={{ lg: "100px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1.5rem"}
								></Box>
								<Flex
									mt={"0.5rem"}
									gap={"0.7rem"}
									flexWrap={"wrap"}
									justifyContent={"center"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
								>
									{solutions.map((item, index) => (
										<Flex
											key={index}
											flexDir={"column"}
											justifyContent={"center"}
											alignItems={"center"}
											gap={"1.1rem"}
											border={"0.79px solid #DADFE3"}
											padding={"30px 20px 56px 20px"}
											borderTop={"9px solid #E9000E"}
											transition={"all 0.2s ease-in-out"}
											_hover={{
												transform: "scale(1.02)",
											}}
											boxShadow={
												"0px 1.5803072452545166px 15.803072929382324px 0px rgba(0, 0, 0, 0.05)"
											}
											width={{ lg: "49%", md: "70%", base: "100%" }}
										>
											<Image src={item.img} alt="img" width={94} height={85} />
											<Text
												fontWeight={700}
												fontSize={"16px"}
												textAlign={"center"}
											>
												{item.title}
											</Text>
											<Flex flexDir={"column"} gap={"0.9rem"}>
												{item?.content?.map((nestedItem, index) => (
													<Flex
														key={nestedItem.id}
														gap={"0.5rem"}
														color={"#3B3C3D"}
														fontSize={{ lg: "14px", base: "13px" }}
														alignItems={"flex-start"}
														justifyContent={"flex-start"}
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
														<Text mt={"-0.3rem"}>{nestedItem?.list}</Text>
													</Flex>
												))}
											</Flex>
											{index === 0 ? (
												<Flex justifyContent={"flex-end"} mt={"0.5rem"}>
													<Link
														href={{
															pathname: "/services/cost-calculator",
															query: { service: "it_outsourcing-1" },
														}}
													>
														<Button
															color={"#fff"}
															border={"none"}
															padding={"7px 23.84px 8.03px 23px"}
															borderRadius={"0"}
															fontSize={{ lg: "16px", base: "14px" }}
															textAlign={"center"}
															background={
																"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"
															}
														>
															{item?.link}
														</Button>
													</Link>
												</Flex>
											) : (
												""
											)}
										</Flex>
									))}
								</Flex>
							</Box>
							{/*Big Data Analytics Use Cases Tanta Covers*/}
							<Box mt={"4rem"} id={"HOOS"} scrollMarginTop={"150px"}>
								<Heading
									fontWeight="700"
									fontSize={{ base: "20px", lg: "24px" }}
									textTransform="capitalize"
									color="#222"
									mb={"0.2rem"}
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									Big Data Analytics Use Cases Tanta Covers
								</Heading>
								<Box
									width={{ lg: "100px", base: "50px" }}
									height={"3px"}
									bg={"#D80808"}
									mb={"1.5rem"}
								></Box>
								<Text fontSize={"16px"} fontWeight={700}>
									Industry-neutral big data analytics use cases
								</Text>
								<Flex
									mt={"0.9rem"}
									gap={"0.7rem"}
									flexWrap={"wrap"}
									justifyContent={"center"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
								>
									{neutral.map((item, index) => (
										<Flex
											key={index}
											flexDir={"column"}
											justifyContent={"center"}
											alignItems={"center"}
											gap={"0.9rem"}
											border={"0.79px solid #DADFE3"}
											padding={"30px 20px 20px 20px"}
											borderTop={"9px solid #E9000E"}
											transition={"all 0.2s ease-in-out"}
											_hover={{
												transform: "scale(1.02)",
											}}
											boxShadow={
												"0px 1.5803072452545166px 15.803072929382324px 0px rgba(0, 0, 0, 0.05)"
											}
											width={{ lg: "49%", md: "70%", base: "100%" }}
										>
											<Text fontSize={"16px"} fontWeight={700}>
												{item.title}
											</Text>
											<Flex flexDir={"column"} gap={"0.9rem"}>
												{item?.content?.map((nestedItem, index) => (
													<Flex
														key={nestedItem.id}
														gap={"0.5rem"}
														color={"#3B3C3D"}
														fontSize={{ lg: "14px", base: "13px" }}
														alignItems={"flex-start"}
														justifyContent={"flex-start"}
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
														<Text mt={"-0.3rem"}>{nestedItem?.list}</Text>
													</Flex>
												))}
											</Flex>
										</Flex>
									))}
								</Flex>
								<Text fontSize={"16px"} fontWeight={700} mt={"3rem"}>
									Industry-specific big data analytics use cases
								</Text>
								<Flex
									mt={"0.9rem"}
									gap={"0.7rem"}
									flexWrap={"wrap"}
									justifyContent={"center"}
									flexDir={{ lg: "row", md: "row", base: "column" }}
								>
									{specific?.map((item1, index) => (
										<Flex
											key={index}
											flexDir={"column"}
											justifyContent={"center"}
											alignItems={"center"}
											gap={"0.9rem"}
											border={"0.79px solid #DADFE3"}
											padding={"30px 20px 20px 20px"}
											borderTop={"9px solid #E9000E"}
											transition={"all 0.2s ease-in-out"}
											_hover={{
												transform: "scale(1.02)",
											}}
											boxShadow={
												"0px 1.5803072452545166px 15.803072929382324px 0px rgba(0, 0, 0, 0.05)"
											}
											width={{ lg: "49%", md: "70%", base: "100%" }}
										>
											<Text fontSize={"16px"} fontWeight={700}>
												{item1?.title}
											</Text>
											<Flex flexDir={"column"} gap={"0.9rem"}>
												{item1?.content?.map((nestedItem1, index) => (
													<Flex
														key={nestedItem1.id}
														gap={"0.5rem"}
														color={"#3B3C3D"}
														fontSize={{ lg: "14px", base: "13px" }}
														alignItems={"flex-start"}
														justifyContent={"flex-start"}
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
														<Text mt={"-0.3rem"}>{nestedItem1?.list}</Text>
													</Flex>
												))}
											</Flex>
										</Flex>
									))}
								</Flex>
							</Box>
							{/*lets talk*/}
							<Box
								id={"BWG"}
								scrollMarginTop={"150px"}
								mt={"2rem"}
								width={"95%"}
								padding={{ lg: "20px 38px 40px 10px", base: "20px" }}
								boxShadow={
									"0px 1.7786115407943726px 17.786115646362305px 0px rgba(0, 0, 0, 0.10)"
								}
							>
								<Heading
									fontWeight="700"
									fontSize={{ base: "17px", lg: "22px" }}
									textTransform="capitalize"
									color="#222"
									mb={"0.5rem"}
									lineHeight={{ lg: "140%", base: "150%" }}
								>
									Let's Talk
								</Heading>
								<Box
									width={{ lg: "40px", base: "50px" }}
									height={"2px"}
									bg={"gold"}
								></Box>
								<Flex
									mt={"1rem"}
									gap={"1rem"}
									flexDir={{ lg: "row", base: "column" }}
								>
									<Flex width={{ lg: "80%", base: "100%" }} flexDir={"column"}>
										<Text fontSize={{ lg: "16px", base: "14px" }}>
											We are ready to work from a rough concept up
										</Text>
										<Text fontSize={{ lg: "16px", base: "14px" }}>
											to bring your ideas to life. Contact us today for a free
											consultation
										</Text>
									</Flex>
									<Link
										href={{
											pathname: appRoutes.contactUs,
											query: {
												service: "services/it-outsourcing/data-science",
											},
										}}
										service="services/it_outsourcing"
										className="request-services"
									>
										<Flex justifyContent={{ lg: "flex-end", base: "center" }}>
											<Button
												color={"#fff"}
												border={"none"}
												padding={"1rem 0.5rem"}
												borderRadius={"0"}
												textTransform={"uppercase"}
												fontSize={{ lg: "14px", base: "11px" }}
												textAlign={"center"}
												background={
													"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"
												}
											>
												Request a consultation
											</Button>
										</Flex>
									</Link>
								</Flex>
							</Box>
						</Box>
					</Flex>
				</Container>
			</Box>
			{/* contact us */}
			<Box>
				<ContactUs subtitle="We’re here to support" />
			</Box>
		</Box>
	);
};

export default DataScience;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;

	width: 100%;
	padding-bottom: 5.5rem;
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
			font-size: 1.3rem;
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
		font-size: 20px;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		// color: #636363;

		@media (max-width: 820px) {
			font-size: 0.9rem;
			text-align: center;
		}
	}
`;
