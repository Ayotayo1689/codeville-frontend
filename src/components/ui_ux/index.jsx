import React, { useState } from "react";
import HeaderOne from "../HeaderOne";
import LandingLayout from "../../layouts/landing.layout";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
	advatagesOfTanta,
	ProductImg,
	ServiceTabs,
	sideBarData,
	sideBarList,
	sideBarList2,
} from "./data";
import { colors} from "../../../styles/theme";
import LogoMarquee from "../logoMarquee";
import { AdvantageOfTantaMobile, WhyTantaMobile } from "./mobile";
import {
	Box,
	Button,
	Container,
	Flex,
	Hide,
	Image,
	List,
	ListItem,
	Show,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import appRoutes from "../../utils/appRoutes";

const UiUxPages = () => {
	const [activeLink, setActiveLink] = useState({});
	const [isMobile] = useMediaQuery("(max-width: 720px)");

	return (
		<>
			<Head>
				<title>UI/UX Design and Development - Tanta Innovation</title>
				<meta
					name="description"
					content="Whether you're seeking to rejuvenate your current website or create a brand new one from the
                            ground up, we are ready to assist you."
				/>
			</Head>
			<Box mt={{ base: "5rem", lg: "7rem" }}>
				<HeaderOne heading={"Services"} title={"Web design and Development"} />
			</Box>
			<Container maxW={"7xl"} mb={"1rem"} bg={{ base: "#F7F2FA", lg: "white" }}>
				{/* =============First layer- Crafting digital experiences that stand out. =============*/}
				<Flex gap={"2rem"} display={{ base: "grid", lg: "flex" }}>
					<Show below="md">
						<Box w={{ base: "100%", lg: "50%" }}>
							<Image
								src={"/assets/softwareDevelopment/hero-img.png"}
								alt="hero image"
								width={340}
								height={200}
							/>
						</Box>
					</Show>
					<Box w={{ base: "100%", lg: "50%" }}>
						<Box borderLeft={"2px solid #B20000"} px={"1rem"}>
							<Text fontSize={{ base: "22px", lg: "4xl" }} fontWeight={"bold"}>
								Crafting digital experiences that stand out.
							</Text>
						</Box>
						<Text
							p={{ base: "2", lg: "5" }}
							lineHeight={{ base: "6", lg: "8" }}
							fontSize={{lg:"18px", base:"14px"}}
							mb={"1rem"}
						>
							Whether you're seeking to rejuvenate your current website or
							create a brand new one from the ground up, we are ready to assist
							you. With our expertise in web design and development, we
							guarantee that your website will not only have an appealing
							appearance but also operate seamlessly, delivering an exceptional
							online experience for your users. Don't hesitate any longer—let's
							embark on the journey of crafting a website that will distinguish
							you from your competitors!
						</Text>
						<Flex
							gap={"0.5rem"}
							textTransform={"uppercase"}
							paddingBottom={{ base: "2", lg: "8" }}
							flexWrap={"wrap"}
							justifyContent={{base:"center"}}
						>
							<Link
								href={{
									pathname: appRoutes.contactUs,
									query: {
										service: "services/ui-ux",
									},
								}}
							>
								<Button
									textTransform={"uppercase"}
									px={{ base: "0.5rem", lg: "2.5rem" }}
									fontSize={{base:"0.6rem",lg:"lg"}}
									background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
									color={"white"}
									_hover={"none"}
								>
									Request UI/UX services
								</Button>
							</Link>
							<Link
								href={{
									pathname: appRoutes.services["cost-calculator"],
									query: { service: "uiux-9" },
								}}
							>
								<Button
									textTransform={"uppercase"}
									px={{ base: "0.5rem", lg: "2.5rem" }}
									fontSize={{base:"0.6rem",lg:"lg"}}
									border={"2px"}
									borderColor={"#e60000"}
									bg={"white"}
									color={"#e60000"}
									_hover={"none"}
								>
									get a quote
								</Button>
							</Link>
						</Flex>
					</Box>
					<Hide below="md">
						<Box w={{ base: "100%", lg: "50%" }}>
							<Image
								src={"/assets/softwareDevelopment/hero-img.png"}
								alt="hero image"
								width={483}
								height={300}
							/>
						</Box>
					</Hide>
				</Flex>

				{/* ===========Second layer- why Choose Tanta Innovative ============*/}
				<Flex gap={"5rem"} py={{ base: "2", lg: "10" }}>
					{/* Second layer- Left */}
					<Flex
						flexDir="column"
						boxShadow={"lg"}
						height={"fit-content"}
						top={"10rem"}
						pb={"1rem"}
						flex={1}
						minW={"300px"}
						borderBottom={"lg"}
						// width={{ base: "100%", lg: "35%" }}
						position={{ base: "", lg: "sticky" }}
						display={{ base: "none", lg: "flex" }}
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
										p={".5rem"}
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
												fontSize: "20px",
												fontWeight: "400",
												cursor: "pointer",
												width: "100%",
											}}
											cursor={"pointer"}
											w={"full"}
											textDecoration={"none"}
											href={item.link}
										>
											{item.title}
										</Link>
										<MdKeyboardArrowRight cursor={"pointer"}
															  size={"2rem"}
															  style={{ marginLeft: "47px" }} />
									</Flex>
								);
							})}
						</Box>
					</Flex>

					{/*=========== Second layer- Right============== */}
					<Box
						w={{ base: "100%", lg: "70%" }}
						scrollMarginTop={"150px"}
						id="whyTanta"
					>
						{isMobile ? (
							<WhyTantaMobile />
						) : (
							<Box paddingTop={{ base: "1rem", lg: "2rem" }}>
								<Text fontSize={{ base: "lg", lg: "3xl" }} fontWeight={"bold"}>
									Why Choose
									<span style={{ color: `${colors.primaryColor}` }}>
										{" "}
										Tanta Innovative
									</span>{" "}
								</Text>
								<Box
									w={"4rem"}
									height={".2rem"}
									bg={colors.primaryColor}
									mt={"2"}
								></Box>
								<Text
									textAlign="justify"
									my={"1.5rem"}
									marginRight={{ lg: "auto", base: "5%" }}
									marginLeft={{ lg: "auto", base: "5%" }}
								>
									At Tanta Innovative, our web design services encompass UI and
									UX design for web-based solutions. We approach each web design
									project with a meticulous balance of technology, visual
									aesthetics, and business goals. The result is fast-loading,
									impactful, and high-converting online experiences. Our primary
									objective is to create websites that not only boast an
									impressive appearance but also offer an exceptional user
									experience.
								</Text>
								<Box paddingLeft={"1.5rem"}>
									{sideBarList.map((item, index) => {
										return (
											<List
												key={index}
												listStyleType={"inherit"}
												lineHeight={"7"}
											>
												<ListItem>{item.title}</ListItem>
											</List>
										);
									})}
								</Box>
							</Box>
						)}
						<Hide below={"md"}>
							<ProductImg />
						</Hide>

						{/* ===============Advantages of Web Design============= */}
						{isMobile ? (
							<AdvantageOfTantaMobile />
						) : (
							<Box
								scrollMarginTop={"150px"}
								position={"relative"}
								bg={"#FFEFEF"}
								w={"fit-content"}
								height={"fit-content"}
								my={"3rem"}
								id="TantaAdvantage"
							>
								<Text
									fontSize={{ base: "lg", lg: "3xl" }}
									fontWeight={"bold"}
									textAlign={"center"}
									pt={"1.5rem"}
								>
									Advantages of Web Design with
									<span style={{ color: `${colors.primaryColor}` }}>
										{" "}
										Tanta
									</span>{" "}
								</Text>
								<Text
									fontSize={{ base: "lg", lg: "3xl" }}
									fontWeight={"bold"}
									textAlign={"center"}
									color={colors.primaryColor}
								>
									Innovative
								</Text>
								<Flex
									alignItems={"center"}
									justifyContent={"center"}
									position={"relative"}
								>
									<Text alignItems={"center"} py={"0.5rem"}>
										Our Advantages
									</Text>
									<Image
										src="/assets/ui_ux/Vector.png"
										alt="icon"
										position={"absolute"}
										right={"0"}
										width={100}
										height={50}
									></Image>
								</Flex>
								<Flex flexWrap={"wrap"} p={{ base: "1rem", lg: "3rem" }}>
									{advatagesOfTanta.map((item, index) => {
										return (
											<Box key={index} width={"388px"} padding={"0.5rem"}>
												<Text
													pb={"4"}
													textAlign={"center"}
													fontSize={"1rem"}
													fontWeight={"bold"}
												>
													{item.title}
												</Text>
												<Text>{item.discription}</Text>
											</Box>
										);
									})}
									<Box p={"2rem"}>
										<Image src="/assets/ui_ux/bro.png" alt="icon"></Image>
									</Box>
								</Flex>
								<Image
									position={"absolute"}
									bottom={"0"}
									src="/assets/ui_ux/Group.png"
									alt="icon"
								/>
							</Box>
						)}

						{/* ===========Client======== */}
						<Box scrollMarginTop={"150px"} id="ClientReview">
							<Text
								fontSize={{ base: "lg", lg: "3xl" }}
								fontWeight={"bold"}
								textAlign={"center"}
							>
								Our Happy
								<span style={{ color: `${colors.primaryColor}` }}>
									{" "}
									Clients
								</span>{" "}
							</Text>
						</Box>
						<Flex
							gap={{ base: "10px", lg: "30px" }}
							direction={{ base: "column", md: "row" }}
							borderTop={"1px solid rgba(0, 0, 0, 0.3);"}
							p={"1.5rem"}
						>
							<LogoMarquee colored={true} />
						</Flex>
						{/* ===========Banner ========= */}
						<Box
							width={"fit-content"}
							h={"fit-content"}
							bg={" #FDE6E7"}
							position={"relative"}
							my={"3rem"}
						>
							<Flex justifyContent={"space-between"} position={"relative"}>
								<Image src="/assets/ui_ux/Vector 8.png" alt="icon"></Image>
								<Box
									borderRadius={"full"}
									p={{ base: "1rem", lg: "2rem" }}
									bg={"#F2666E"}
									position={"absolute"}
									right={{ base: "30%", lg: "20%" }}
									top={"2rem"}
								></Box>
								<Box
									borderRadius={"full"}
									p={"1.5rem"}
									bg={"#F2666E"}
									position={"absolute"}
									right={"15%"}
									top={"1rem"}
								></Box>
								<Box
									borderRadius={"full"}
									p={"1rem"}
									bg={"#F2666E"}
									position={"absolute"}
									right={{ base: "5%", lg: "10%" }}
									top={"3rem"}
								></Box>
							</Flex>
							<Show below={"md"}>
								<Text pl={"1rem"} fontWeight={"bold"} fontSize={"lg"}>
									WANT TO EXPLORE IT
									<span style={{ color: "#F2666E", display: "inline-block" }}>
										INFASTRUCTURING SERVICE
									</span>
								</Text>
							</Show>

							<Flex pt={{ base: "2.5rem", lg: "5.4rem" }}>
								<Box>
									<Image
										position={"absolute"}
										bottom={"0"}
										src="/assets/ui_ux/Group.png"
										alt="icon"
										width={{ base: 100, lg: 200 }}
									></Image>

									<Box pl={{ base: "1rem", lg: "3rem" }}>
										<Show below={"768px"}>
											<Text
												fontSize={{ base: "sm", lg: "2xl" }}
												fontWeight={"bold"}
												opacity={"0.7"}
												textTransform={"capitalize"}
											>
												Tanta Innovative will help you build accurate and
												transparent analytics and reporting to eliminate the
												guesswork out of your business processes and identify
												new profit opportunities
											</Text>
										</Show>
										<Hide below={"768px"}>
											<Text
												fontSize={{ base: "sm", lg: "2xl" }}
												fontWeight={"bold"}
												opacity={"0.7"}
												textTransform={"capitalize"}
											>
												Get a web design that motivates visitors to stay engaged
												for an extended time, click more frequently, and make
												more purchases.
											</Text>
										</Hide>
										<Box
											w={"4rem"}
											height={".3rem"}
											bg={colors.primaryColor}
											mt={"2"}
											borderRadius={"lg"}
										></Box>
										<Link
											href={{
												pathname: appRoutes.contactUs,
												query: { service: "services/ui-ux" },
											}}
										>
											<Button
												px={{ base: "0.5rem", lg: "2.5rem" }}
												bg={"#F2666E"}
												_hover={"none"}
												my={{ base: "1rem", lg: "3rem" }}
												fontSize={{lg:"20px", base:"14px"}}
											>
												{isMobile
													? "Request IT Outsourcing Service"
													: "Request Here"}
											</Button>
										</Link>
									</Box>
								</Box>
								<Hide below={"sm"}>
									<Image
										w={{ base: 100, lg: 400 }}
										h={{ base: "150" }}
										src="/assets/ui_ux/banner.png"
										alt="icon"
									/>
								</Hide>

							</Flex>
						</Box>
						{/*=========goals===========*/}
						<Box scrollMarginTop={"150px"} id="Goal">
							<Box>
								<Text fontSize={{ base: "lg", lg: "3xl" }} fontWeight={"bold"}>
									Flexible
									<span style={{ color: `${colors.primaryColor}` }}>
										{" "}
										Web Design
									</span>{" "}
									<span> Services to Meet</span>{" "}
									<span style={{ color: `${colors.primaryColor}` }}>
										{" "}
										Your Goals
									</span>{" "}
								</Text>
								<Box
									w={"4rem"}
									height={"3px"}
									bg={colors.primaryColor}
									borderRadius={"lg"}
								></Box>
							</Box>
							<ServiceTabs />
						</Box>

						{/* ==========Experience=========== */}
						<Box
							scrollMarginTop={"150px"}
							p={{ base: "1rem", lg: "3rem" }}
							id="Experiences"
						>
							<Text fontSize={{ base: "lg", lg: "3xl" }} fontWeight={"bold"}>
								Trust Our Experience
								<span style={{ color: `${colors.primaryColor}` }}>
									{" "}
									Speaks Of Our Value
								</span>{" "}
							</Text>
							<Box
								w={"4rem"}
								height={".2rem"}
								bg={colors.primaryColor}
								mt={"2"}
							></Box>
							<Box
								p={{ base: "1rem", lg: "2rem" }}
								width={{ base: "", lg: "735px" }}
							>
								{sideBarList2.map((item, index) => {
									return (
										<List
											key={index}
											listStyleType={"inherit"}
											lineHeight={{lg:"10", base:"7"}}
										>
											<ListItem fontSize={{lg:"18px", base:"15px"}}>{item.title}</ListItem>
										</List>
									);
								})}
							</Box>
						</Box>
						{/* ===========Footer Banner======== */}
						<Hide below="md">
							<Box width={"fit-content"} bg={" #FDE6E7"} position={"relative"}>
								<Flex justifyContent={"space-between"} position={"relative"}>
									<Image src="/assets/ui_ux/Vector 8.png" alt="icon"></Image>
									<Box
										borderRadius={"full"}
										p={"2rem"}
										bg={"#F2666E"}
										position={"absolute"}
										right={"20%"}
										top={"2rem"}
									></Box>
									<Box
										borderRadius={"full"}
										p={"1.5rem"}
										bg={"#F2666E"}
										position={"absolute"}
										right={"15%"}
										top={"1rem"}
									></Box>
									<Box
										borderRadius={"full"}
										p={"1rem"}
										bg={"#F2666E"}
										position={"absolute"}
										right={"10%"}
										top={"3rem"}
									></Box>
								</Flex>
								<Flex pt={"5.4rem"}>
									<Box>
										<Hide below="md">
											<Image
												position={"absolute"}
												bottom={"0"}
												src="/assets/ui_ux/Group.png"
												alt="icon"
												width={{ base: 100, lg: 200 }}
											/>
										</Hide>
										<Box pl={"3rem"}>
											<Text
												fontSize={"2xl"}
												fontWeight={"bold"}
												opacity={"0.7"}
												textTransform={"capitalize"}
											>
												Get a web design that motivates visitors to stay engaged
												for an extended time, click more frequently, and make
												more purchases.
											</Text>
											<Box
												w={"4rem"}
												height={".3rem"}
												bg={colors.primaryColor}
												mt={"2"}
												borderRadius={"lg"}
											></Box>
											<Link
												href={{
													pathname: appRoutes.contactUs,
													query: { service: "services/ui-ux" },
												}}
											>
												<Button
													px={"2.5rem"}
													bg={"#F2666E"}
													color={"white"}
													_hover={"none"}
													m={"3rem"}
												>
													Request UI/UX Services
												</Button>
											</Link>
										</Box>
									</Box>
									<Image
										w={350}
										src="/assets/ui_ux/banner.png"
										alt="icon"
									/>
								</Flex>
							</Box>
						</Hide>
					</Box>
				</Flex>
			</Container>
		</>
	);
};
UiUxPages.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default UiUxPages;

