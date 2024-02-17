import React, { useState } from "react";
import LandingLayout from "../../layouts/landing.layout";
import Image from "next/image";
import LogoMarquee from "../logoMarquee";
import appRoutes from "../../utils/appRoutes";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import { colors } from "../../../styles/theme";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillChatLeftDotsFill, BsTelephone } from "react-icons/bs";
import { AiFillStar, AiOutlineDownload } from "react-icons/ai";

import {
	brandmovers,
	burtech,
	dcfoods,
	divichotel,
	finlab,
	nigerPolice,
	weather,
} from "../../../assets/clients";
import tanta from "../../../assets/aboutUs/tanta.png";
import overview from "../../../assets/aboutUs/overview.png";
import user from "../../../assets/aboutUs/user.png";
import HeaderOne from "../../components/HeaderOne";
import { sideBarData, WhoWeServe } from "./data";
import WhoWeAre from "./WhoWeAre";
import Link from "next/link";
import SolutionsSection from "./solutions";
import ServiceMap from "./ServiceMap";
import dynamic from "next/dynamic";

const DynamicIframe = dynamic(() => import("./Iframe"), { ssr: false });
const images = [
	brandmovers,
	burtech,
	dcfoods,
	divichotel,
	finlab,
	nigerPolice,
	weather,
];

// const DynamicIframe = dynamic(() => import("./Iframe"), { ssr: false });

const About = ({ serviceMap, stacks, aboutUsVideo, categories }) => {
	const [activeLink, setActiveLink] = useState({});
	// const LogoMarquee = ({ logos }) => {
	//   return (
	//     <Marquee gradient={false}>
	//       {logos?.map((image, index) => (
	//         <Box key={index} mr="1rem">
	//           <Image src={image} alt="Logo" width={100} height={50} />
	//         </Box>
	//       ))}
	//     </Marquee>
	//   );
	// };

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	return (
		<Box minHeight={"100vh"} mt={{ base: "5rem", lg: "5rem" }} px={"1rem"} mb={"7rem"}>
			<HeaderOne heading={"about us"} title={"who we are"} />
			<Container maxW={"1500px"} px={{ lg: "5rem", "2xl": "0.4rem" }}>
				<Text
					fontSize={"xl"}
					textAlign={"center"}
					px={{ lg: "10rem" }}
					mb={"3rem"}
				>
					Founded in 2008, Tanta Innovative Limited has been the vanguard of
					cutting-edge technology solutions, serving diverse industries
					worldwide. With our headquarters nestled in the heart of innovation
					and a team that spans across the globe, we are positioned to deliver
					excellence on a scale that matches your ambitions. We pride ourselves
					on being a complete IT consulting and software development company
					that offers a wide array of services, all aimed at helping businesses
					leverage technology to drive growth, improve efficiency, and secure
					their future.
				</Text>
				<Grid templateColumns={{ base: "1fr", lg: "350px 1fr" }} gap={"3rem"}>
					<Flex
						flexDir="column"
						boxShadow={"lg"}
						height={"fit-content"}
						pb={"1rem"}
						borderBottom={"lg"}
						display={{ base: "none", lg: "flex" }}
						position={"sticky"}
						top={"8rem"}
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
							background={
								"radial-gradient(50% 50% at 50% 50%, #C90303 0%, #981E13 100%)"
							}
						>
							About Us
						</Text>
						<Box px={"1rem"}>
							{sideBarData.map((item, index) => {
								return (
									<Flex
										paddingInline={".4rem"}
										justifyContent={"space-between"}
										key={index}
										p={".5rem"}
									>
										{/*<Text fontSize={"lg"} fontWeight={"normal"}>*/}
										{/*  {item}*/}
										{/*</Text>*/}

										<Link
											onClick={() => {
												setActiveLink({ [item.id]: true });
											}}
											sx={{
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

										<MdKeyboardArrowRight size={"2rem"} />
									</Flex>
								);
							})}
						</Box>
					</Flex>
					<Box>
						<Box scrollMarginTop={"130px"} id="about">
							<Text fontSize={"3xl"} fontWeight={"bold"} mb={"2rem"}>
								About Tanta Innovative -{" "}
								<span style={{ color: `${colors.primaryColor}` }}>
									Global IT Company
								</span>{" "}
							</Text>
							<Box
								w={"100%"}
								h={"400px"}
								mb={"30px"}
								bgImage="url('https://media.istockphoto.com/id/1353775192/photo/golden-youtube-play-icon-with-the-red-luxury-boxes-and-white-spheres-3d-illustration-of-lux.webp?b=1&s=170667a&w=0&k=20&c=uN2pqhwskQM-9ctJs_vKUZwBrEhoFdpxLAUKMxVEtoA=')"
								backgroundPosition={"center"}
								backgroundSize={"cover"}
								display={{ base: "none", lg: "block" }}
								marginRight="1rem"
								// border="2px solid rgba(255, 255, 255, 0.2)"
								filter="drop-shadow(0px 5px 20px rgba(15, 20, 34, 0.4))"
								// borderRadius="21px"
								_hover={{
									cursor: "pointer",
								}}
							>
								<DynamicIframe />
							</Box>
							<Text
								fontSize={"xl"}
								borderLeft={`6px solid ${colors.primaryColor}`}
								px={"1rem"}
								textAlign={"justify"}
								mt={"4rem"}
							>
								At Tanta Innovative, our mission is to empower businesses by
								providing innovative, reliable, and tailor-made technology
								solutions that transcend the norm. Our strength lies in our
								exceptional team of experts, each bringing a wealth of
								experience and a dedication to excellence that sets us apart. We
								are committed to delivering the best in a way that is unique to
								your business, helping you achieve your goals and secure your
								future.
								<br /> <br /> We are a team of highly skilled and experienced
								professionals, with a passion for technology and a dedication to
								excellence. We are committed to delivering the best in a way
								that is unique to your business, helping you achieve your goals
								and secure your future. We are Tanta Innovative, and we are here
								to help you grow.
								<br /> <br />
								From our seasoned software developers who craft bespoke software
								solutions, to our data analytics gurus who turn data into
								actionable insights, to our cybersecurity experts who safeguard
								your digital assets, each member of our team is committed to
								delivering exceptional value.
								<br /> <br />
								We understand that each business has unique needs, goals, and
								challenges. That's why we take the time to understand your
								business, your market, and your customers. We become an
								extension of your team, a technology partner that is invested in
								your success.
								<br /> <br />
								Join us on the journey to digital transformation. Discover the
								Tanta Innovative difference.
							</Text>
							{/* <Box
								width={{ base: "100%", lg: "100%" }}
								display={{ base: "none", lg: "flex" }}
								height="600px"
								marginRight="1rem"
								border="2px solid rgba(255, 255, 255, 0.2)"
								filter="drop-shadow(0px 5px 20px rgba(15, 20, 34, 0.4))"
								borderRadius="21px"
								_hover={{
									cursor: "pointer",
								}}
								my={"4rem"}
								justifyContent={"center"}
								alignItems={"center"}
							>
								<DynamicIframe />
							</Box> */}

							{/* <Flex
								direction={"column"}
								paddingInline={"2rem"}
								textAlign={"center"}
								gap={"2rem"}
								my={"4rem"}
							>
								<Image src={VideoImage} alt={"Tanta Innovative"}></Image>
							</Flex> */}
						</Box>
						<Accordion
							scrollMarginTop={"130px"}
							defaultIndex={[0]}
							allowMultiple
							id="WhoWeServe"
						>
							<Text
								textAlign={"center"}
								my={"1rem"}
								fontWeight={"medium"}
								fontSize={"xl"}
								mt={"3rem"}
							>
								Whom we Serve
							</Text>

							{WhoWeServe.map((item, key) => {
								return (
									<AccordionItem key={key}>
										<h2>
											<AccordionButton>
												<Text
													fontSize={"lg"}
													fontWeight={"medium"}
													flex="1"
													textAlign="left"
												>
													{item.title}
												</Text>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>{item.text}</AccordionPanel>
									</AccordionItem>
								);
							})}
						</Accordion>
						<Flex
							gap={"4rem"}
							direction={"column"}
							// w={{ base: "100%", lg: "80%" }}
							m={"2rem auto"}
							boxShadow={"lg"}
							align={"center"}
							id="WhoWeAre"
						>
							<Flex
								background={
									"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
								}
								justifyContent={"space-between"}
								alignSelf={"stretch"}
								alignItems={"center"}
								paddingInline={"2rem"}
								paddingBlock={".3rem"}
							>
								<Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
									WHO WE ARE
								</Text>
								<Image src={tanta} alt={"who is tanta innovative"}></Image>
							</Flex>
							<Text fontSize={{ base: "18px", lg: "20px" }}>
								Tanta Innovative is an international{" "}
								<span
									style={{
										color: `${colors.primaryColor}`,
									}}
								>
									IT Consulting Company
								</span>{" "}
								with HQ in Lagos Nigeria
							</Text>

							<WhoWeAre />
						</Flex>
						<Box scrollMarginTop={"140px"} mt={"5rem"} id="resources">
							<Text>RESOURCES</Text>
							<Text fontSize={"2xl"} fontWeight={"bold"} mb={"2rem"}>
								Get a Copy of our
								<span
									style={{
										color: `${colors.primaryColor}`,
										marginLeft: "0.5rem",
									}}
								>
									Company Overview
								</span>{" "}
							</Text>
							<Grid
								templateColumns={"1fr 1fr"}
								gap={{ base: "1rem", lg: "8rem" }}
								alignItems={"center"}
								justifyItems={"start"}
							>
								<Image src={overview} alt={"Tanta Company overview"}></Image>
								<Button
									color={"white"}
									bg={`${colors.primaryColor}`}
									leftIcon={<AiOutlineDownload />}
								>
									Download Now
								</Button>
							</Grid>
						</Box>
						<Box scrollMarginTop={"140px"} my={"2rem"} id="map">
							<Text
								scrollMarginTop={"-180px"}
								fontSize={"2xl"}
								mt={"2rem"}
								mb={".6rem"}
								id="solutions"
								fontWeight={"semibold"}
							>
								Tanta Innovative Service Map.
							</Text>
							{/* <Flex
								background={
									"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
								}
								justifyContent={"space-between"}
								alignSelf={"stretch"}
								alignItems={"center"}
								paddingInline={"1rem"}
								paddingBlock={".3rem"}
							>
								<Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
									IT Consulting
								</Text>
								<BsChevronRight
									color="white"
									size={"1.2rem"}
									fontWeight={"bold"}
								></BsChevronRight>
							</Flex>
							<List spacing={4} paddingBlock={"2rem"}>
								<ListItem>
									<ListIcon
										as={RiCheckboxBlankFill}
										color={`${colors.primaryColor}`}
									/>
									In-depth analysis of your IT needs, challenges, and the
									existing IT ecosystem.
								</ListItem>
								<ListItem>
									<ListIcon
										as={RiCheckboxBlankFill}
										color={`${colors.primaryColor}`}
									/>
									Expert assistance in achieving the goals of IT modernization,
									IT infrastructure optimization and ongoing management, cloud
									migration.
								</ListItem>
								<ListItem>
									<ListIcon
										as={RiCheckboxBlankFill}
										color={`${colors.primaryColor}`}
									/>
									Digital transformation of business workflows
								</ListItem>
							</List> */}
							<ServiceMap serviceMap={serviceMap} />
						</Box>
						{/* <Accordion
							defaultIndex={[0]}
							allowMultiple
							my={"2rem"}
							id="Service"
						>
							{ServicesData.map((item, key) => {
								return (
									<AccordionItem key={key} my={"1rem"}>
										<h2>
											<AccordionButton>
												<Text
													fontSize={"lg"}
													fontWeight={"bold"}
													flex="1"
													textAlign="left"
													color={"black"}
												>
													{item.title}
												</Text>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>{item.text}</AccordionPanel>
									</AccordionItem>
								);
							})}
						</Accordion> */}
						<Box
							scrollMarginTop={"00px"}
							mt={10}
							overflow={"hidden"}
							maxW={{ lg: "50rem", "2xl": "100rem" }}
						>
							{/* <Text textTransform={"uppercase"}>tanta solutions</Text>
							<Text fontSize={"2xl"} fontWeight={"bold"} mb={"arem"}>
								Solutions we Deliver
							</Text>
							<Box ml={{ lg: "-6" }}>
								<Image
									src={solutions}
									alt={"Tanta Innovatives solutions"}
								></Image>
							</Box> */}
							<SolutionsSection categories={categories} />
						</Box>

						<Box scrollMarginTop={"140px"} id="discover">
							<Text fontSize={"md"} mt={"3rem"} textTransform={"uppercase"}>
								discover our company
							</Text>

							<Text fontSize={"2xl"} fontWeight={"bold"} mb={".4rem"}>
								Our
								<span
									style={{
										color: `${colors.primaryColor}`,
										marginLeft: "0.5rem",
									}}
								>
									Capabilities
								</span>{" "}
								and Technological
								<span
									style={{
										color: `${colors.primaryColor}`,
										marginLeft: "0.5rem",
									}}
								>
									Expertise
								</span>{" "}
							</Text>
							<Text fontSize={"md"} fontWeight={"normal"}>
								With over 21 IT specialists on staff, 8 of whom are
								senior-level, who are experts in the following technology
							</Text>
						</Box>
						<Box my={"1.5rem"} id="capacity">
							<Tabs
								display={{ base: "grid", lg: "block" }}
								gridTemplateColumns={"100px 1fr"}
								gap="7"
							>
								<TabList
									border={"none"}
									flexWrap={"wrap"}
									flexDir={{ base: "column", lg: "row" }}
									gap={"3"}
								>
									{stacks?.map((item, index) => {
										return (
											<Tab
												key={index}
												textTransform={"capitalize"}
												_selected={{
													backgroundColor: "#C71319",
													color: "white",
													border: `1px solid ${colors.primaryColor}`,
												}}
												fontSize={{ base: "sm", lg: "lg" }}
												bg={" #FFF6F6"}
											>
												{item.name}
											</Tab>
										);
									})}
								</TabList>

								<TabPanels
									mt={{ base: "0", lg: "2" }}
									p={{ base: "2", lg: "2rem" }}
									bg={"#F5F5F5"}
								>
									{stacks?.map((item, index) => {
										return (
											<TabPanel key={index}>
												<Grid
													templateColumns={{
														base: "1fr 1fr",
														lg: "1fr 1fr 1fr 1fr",
													}}
													gap={{ base: "4rem", lg: "5rem" }}
													alignItems={"center"}
													justifyItems={"center"}
												>
													{item?.stacks?.map((icon, index) => {
														return (
															<Image
																key={index}
																src={icon?.logos}
																alt={`icon${index}`}
																height={80}
																width={80}
															/>
														);
													})}
												</Grid>
											</TabPanel>
										);
									})}
								</TabPanels>
							</Tabs>
						</Box>

						<Box scrollMarginTop={"140px"} id="clients">
							<Text fontSize={"2xl"} fontWeight={"bold"} mb={"1rem"}>
								Our
								<span
									style={{
										color: `${colors.primaryColor}`,
										marginLeft: "0.5rem",
									}}
								>
									Clients
								</span>{" "}
							</Text>
							{/*<Flex*/}
							{/*  gap={{ base: "10px", lg: "30px" }}*/}
							{/*  direction={{ base: "column", md: "row" }}*/}
							{/*  borderTop={"1px solid rgba(0, 0, 0, 0.3);"}*/}
							{/*  p={"1.5rem"}*/}
							{/*>*/}
							{/*  <LogoMarquee  />*/}
							{/*</Flex>*/}
							<Flex
								justifyContent={"center"}
								alignItems={"center"}
								flexDirection={"column"}
								// margin={{ lg: "3rem 0", base: "1.5rem 0.8rem" }}
								borderTop={"1px solid rgba(0, 0, 0, 0.3);"}
								p={"1.5rem"}
								gap={{ base: "10px", lg: "30px" }}
							>
								<Box maxWidth={"1200px"} position={"relative"}>
									<Box whiteSpace={"nowrap"} overflow={"hidden"}>
										<div>
											<LogoMarquee />
										</div>
									</Box>
								</Box>
							</Flex>
						</Box>
						<Flex gap={"2rem"} my={"2rem"} id="talk">
							<Box borderBottom={"1px solid gray"} pb={"1rem"} width={"70%"}>
								<Text fontSize={"xl"} fontWeight={"medium"}>
									Looking for a Partner to Support Your
								</Text>
								<Text fontSize={"xl"} fontWeight={"medium"}>
									<span
										style={{
											color: `${colors.primaryColor}`,
										}}
									>
										Business Growth
									</span>{" "}
									or Monetize Your idea?
								</Text>
							</Box>

							<Box width={"30%"}>
								<Link href={appRoutes.contactUs}>
									<Button
										color={"white"}
										bg={colors.primaryColor}
										width={"100%"}
										leftIcon={<BsFillChatLeftDotsFill />}
									>
										lets talk
									</Button>
								</Link>
							</Box>
						</Flex>
						<Box scrollMarginTop={"140px"} id="contact">
							<Grid
								templateColumns={"1fr 1fr"}
								display={{ base: "flex", lg: "grid" }}
								gap={"2rem"}
								flexDirection={"column-reverse"}
							>
								<Image src={user} alt={"Tanta Happy Customer"}></Image>
								<Flex
									direction={"column"}
									gap={"2rem"}
									alignItems={"center"}
									justifyContent={"center"}
								>
									<Text fontSize={"2xl"} fontWeight={"semibold"}>
										4.9/5.0
									</Text>
									<Flex mx={"auto"} mt={".3rem"}>
										<AiFillStar color="#FFBC0A" fontSize={"1.8rem"} />
										<AiFillStar color="#FFBC0A" fontSize={"1.8rem"} />
										<AiFillStar color="#FFBC0A" fontSize={"1.8rem"} />
										<AiFillStar color="#FFBC0A" fontSize={"1.8rem"} />
										<AiFillStar color="#FFBC0A" fontSize={"1.8rem"} />
									</Flex>
									<Text textAlign={"center"} fontWeight={"medium"}>
										Join happy customers around the world, and bring your ideas
										to life.
									</Text>
									<Flex alignItems={"center"} gap={"1rem"}>
										<BsTelephone
											color={colors.primaryColor}
											fontSize={"2rem"}
										></BsTelephone>
										<Text
											fontSize={"xl"}
											fontWeight={"normal"}
											textTransform={"capitalize"}
										>
											call for free consultation now!
										</Text>
									</Flex>
									<Text
										color={colors.primaryColor}
										fontWeight={"medium"}
										fontSize={"3xl"}
									>
										01-453-8515
									</Text>
								</Flex>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Container>
		</Box>
	);
};
About.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default About;
