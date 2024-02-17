import React, { useState } from "react";
import HeaderOne from "../HeaderOne";
import Image from "next/image";
import Link from "next/link";
import HealthIMG from "../../../public/assets/healthcare/HealthIMG.png";
import { benefits, sideBarData, solutions, } from "./data";
import { MdKeyboardArrowRight } from "react-icons/md";
import {Box, Container, Text, Flex, Heading, chakra, Button} from "@chakra-ui/react";
import LogoMarquee from "../logoMarquee";
import ContactUs from "../contactUs";
import SolutionCard from "./solutionCard";
import TantaTestimonial from "../tantaTestimonials";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";
import appRoutes from "@/utils/appRoutes";

const HealthCare = ({ testimonials }) => {
	const [activeLink, setActiveLink] = useState({});

	return (
		<>
			<Box mt={"5rem"} minHeight={"100vh"}>
				<HeaderOne heading={"services"} title={"health care it services"} />
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }}>
					{/* Hero section */}
					<Flex
						flexDirection={"column"}
						justifyContent={"center"}
						alignItems={"center"}
						gap={"4rem"}
					>
						<Box
							width={{ lg: "100%", base: "70%" }}
							paddingTop={{ lg: "0", base: "1rem" }}
						>
							<Image
								src={HealthIMG}
								alt={"hero image"}
								width={1201}
								height={504}
							/>
						</Box>

						<Text
							fontSize={{ lg: "24px", base: "15px" }}
							textAlign={"center"}
							fontWeight={400}
							lineHeight={"170%"}
						>
							Tanta Innovative has been providing healthcare IT services for
							over a decade, including digitalizing care delivery, modernizing
							IT systems, migrating to the cloud, and providing IT support.
							Their comprehensive IT solutions enable medical organizations to
							harness the benefits of technology in healthcare without the need
							to expand their in-house IT team.
						</Text>
					</Flex>
					<Flex gap={"5rem"} justify={"center"} mb={"7rem"} mt={"4rem"}>
						<Flex
							display={{ lg: "block", base: "none" }}
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
						</Flex>
						<Box width={{ base: "100%", lg: "70%" }}>
							{/* specify your preference */}
							<Box
								width={{ base: "100%", lg: "100%" }}
								height={{ lg: "250px", base: "fit-content" }}
								boxShadow={
									"0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
								}
								padding={"1rem"}
							>
								<Flex
									justifyContent={"center"}
									borderRadius={"6px"}
									flexDir={"column"}
									w="100%"
								>
									<Heading
										fontSize={{ lg: "26px", base: "20px" }}
										lineHeight="150%"
										fontWeight="600"
										textTransform="capitalize"
										color="#444444"
										mb={"1rem"}
									>
										Need a Tech Partner for Your Healthcare Org?
									</Heading>
									<Box
										width={{ lg: "60px", base: "50px" }}
										height={"3px"}
										bg={"#D80808"}
									></Box>
									<Text
										fontWeight="400"
										fontSize={{ lg: "19px", base: "16px" }}
										my="20px"
									>
										Our team is ready to assess, design, build, modernize, and
										optimize your healthcare IT solutions and infrastructure to
										help you run daily IT operations.
									</Text>
									<Link href={{
										pathname: appRoutes.services["cost-calculator"],
										query: {service: "healthCare-0"},
									}}>
										<Button
											    display={"flex"}
												color={"#fff"}
												borderRadius={"8px"}
												fontSize={{lg:"16px", base:"14px"}}
												fontWeight={500}
												lineHeight={"24px"}
												bg={"#E9000E"}
												alignItems={"center"}
												justifyContent={"center"}>
											Specify your preferences
										</Button>
									</Link>
								</Flex>
							</Box>
							{/* About us section */}
							<Box mt={"4rem"} id="About_us" scrollMarginTop={"150px"}>
								<Text
									fontWeight="400"
									color={"#636363"}
									fontSize={{ lg: "18px", base: "16px" }}
									my="20px"
									lineHeight="24px"
									letterSpacing="0.085em"
									textTransform="uppercase"
								>
									ABOUT US
								</Text>
								<Heading
									fontWeight="600"
									fontSize={{ base: "20px", lg: "30px" }}
									textTransform="capitalize"
									color="#444444"
									lineHeight={{ lg: "140%", base: "150%" }}
									mb={"0.5rem"}
								>
									Why Choose Healthcare IT Services by{" "}
									<Text
										color={"#E9000E"}
										fontSize={{ base: "20px", lg: "30px" }}
									>
										{" "}
										Tanta Innovative
									</Text>
								</Heading>
								<ul>
									<Flex gap={"0.5rem"}>
										<Box
											width={{ lg: "10px", base: "9px" }}
											height={{ lg: "10px", base: "7px" }}
											bg={"#E9000E"}
											marginTop={"0.7rem"}
										></Box>
										<chakra.li
											color={"#303030"}
											fontSize={{ lg: "18px", base: "15px" }}
											lineHeight={{ lg: "170%", base: "170%" }}
											listStyleType={"none"}
										>
											Hands-on experience with HIPAA, HITECH, FDA, MDR, IVDR,
											GDPR, NCPDP, ONC regulatory requirements.
										</chakra.li>
									</Flex>
									<Flex gap={"0.5rem"}>
										<Box
											width={{ lg: "9px", base: "8px" }}
											height={{ lg: "10px", base: "7px" }}
											bg={"#E9000E"}
											marginTop={"0.7rem"}
										></Box>
										<chakra.li
											color={"#303030"}
											fontSize={{ lg: "18px", base: "15px" }}
											lineHeight={{ lg: "170%", base: "170%" }}
											listStyleType={"none"}
										>
											Quality management system for medical device software and
											software as a medical device.
										</chakra.li>
									</Flex>
									<Flex gap={"0.5rem"}>
										<Box
											width={{ lg: "12px", base: "10px" }}
											height={{ lg: "10px", base: "7px" }}
											bg={"#E9000E"}
											marginTop={"0.7rem"}
										></Box>
										<chakra.li
											color={"#303030"}
											fontSize={{ lg: "18px", base: "15px" }}
											lineHeight={{ lg: "170%", base: "170%" }}
											listStyleType={"none"}
										>
											Tanta Innovative Limited RPM solution won the Best
											Healthcare Technology Solution Award 2022 from Health Tech
											Digital.
										</chakra.li>
									</Flex>
									<Flex gap={"0.5rem"}>
										<Box
											width={{ lg: "11px", base: "10px" }}
											height={{ lg: "10px", base: "7px" }}
											bg={"#E9000E"}
											marginTop={"0.7rem"}
										></Box>
										<chakra.li
											color={"#303030"}
											fontSize={{ lg: "18px", base: "15px" }}
											lineHeight={{ lg: "170%", base: "170%" }}
											listStyleType={"none"}
										>
											Tanta Innovative Limited became a finalist of Health Tech
											Award 2022 with its laboratory diagnostics software.
										</chakra.li>
									</Flex>
								</ul>
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
							</Box>
							{/* Tanta solutions section */}
							<Box mt={"4rem"} id="SWE" scrollMarginTop={"150px"}>
								<Flex
									flexDirection={"column"}
									marginLeft={{ lg: "15px", base: "0" }}
								>
									<Text
										fontWeight="400"
										color={"#636363"}
										fontSize={{ lg: "18px", base: "16px" }}
										my="20px"
										lineHeight="24px"
										letterSpacing="0.085em"
										textTransform="uppercase"
									>
										TANTA SOLUTIONS
									</Text>
									<Heading
										fontWeight="600"
										fontSize={{ base: "20px", lg: "30px" }}
										textTransform="capitalize"
										color="#444444"
										lineHeight={{ lg: "140%", base: "150%" }}
										mb={"0.5rem"}
									>
										Healthcare IT Services{" "}
										<Text
											color={"#E9000E"}
											fontSize={{ base: "20px", lg: "30px" }}
											display={"inline"}
										>
											{" "}
											Tanta Innovative{" "}
										</Text>
										<br />
										Offers
									</Heading>
									<Text
										color={"#303030"}
										fontSize={{ lg: "19px", base: "16px" }}
										lineHeight={"170%"}
										display={"inline"}
									>
										We provide the following services separately or in
										combination.
									</Text>
								</Flex>
								<Box
									gap={{ lg: "3rem", base: "1rem" }}
									flexWrap={"wrap"}
									display={"flex"}
									marginBottom={"2rem"}
									mt={"2rem"}
									justifyContent={"center"}
									alignItems={"center"}
								>
									{solutions.map((item, index) => {
										return (
											<SolutionCard
												key={index}
												title={item?.title}
												img={item?.img}
												link={item?.link}
												items={item?.items}
											/>
										);
									})}
								</Box>
							</Box>
							{/* Testimonial Section */}
							<Box id="testimonials" scrollMarginTop={"150px"}>
								<TantaTestimonial testimonials={testimonials}/>
							</Box>
							{/* benefits of cooperation */}
							<Box id="BOS" mt={"3rem"} scrollMarginTop={"150px"}>
								<Flex
									flexDirection={"column"}
									marginLeft={{ lg: "15px", base: "0" }}
								>
									<Heading
										fontWeight="600"
										fontSize={{ base: "20px", lg: "30px" }}
										textTransform="capitalize"
										color="#444444"
										lineHeight={{ lg: "140%", base: "150%" }}
										mb={"0.5rem"}
									>
										Benefits of Cooperation with{" "}
										<Text
											color={"#E9000E"}
											fontSize={{ base: "20px", lg: "30px" }}
										>
											{" "}
											Tanta Innovative Limited
										</Text>
									</Heading>
									<Box
										width={{ lg: "60px", base: "50px" }}
										height={"3px"}
										bg={"#D80808"}
									></Box>
									<Box
										gap={{ lg: "4rem", base: "1rem" }}
										flexWrap={"wrap"}
										display={"flex"}
										marginBottom={"2rem"}
										mt={"2rem"}
										justifyContent={"center"}
										alignItems={"center"}
									>
										{benefits.map((item, index) => {
											return (
												<Flex
													key={index}
													width={{ lg: "45%", base: "90%" }}
													height={"fit-content"}
													flexDirection={"column"}
													justifyContent={"center"}
													alignItems={"center"}
													padding={"0.7rem"}
													borderRadius={"8px"}
													boxShadow=" 0px 1.55172px 3.10345px rgba(0, 0, 0, 0.3), 0px 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15)"
													marginBottom={"1rem"}
												>
													<Box
														padding={"0.5rem 0.5rem 1rem 0.5rem;"}
														gap={"0.9rem"}
														flexDirection={"column"}
														justifyContent={"center"}
														alignItems={"center"}
														display={"flex"}
													>
														<Image
															src={item.img}
															alt={item.title}
															width={54}
															height={54}
															display="flex"
															alignItems="center"
															justifyContent="center"
															marginBottom="1rem"
															margin="0 auto"
														/>
														<Text
															fontSize={{ lg: "18px", base: "18px" }}
															fontWeight={500}
															textAlign={"center"}
															lineHeight={"130%"}
														>
															{item.title}
														</Text>
														<Text textAlign={"center"} fontSize={"14px"}>
															{item.details}
														</Text>
													</Box>
												</Flex>
											);
										})}
									</Box>
								</Flex>
							</Box>
							<Box id={"CAP"} scrollMarginTop={"150px"} mt={"3rem"} mb="4.5rem" w={"100%"}>
								<HandpickedProject title={"CASE STUDIES"} heading={"Our Selected IT Consulting Services Projects"}/>
							</Box>

							{/* Investments section */}
							<Box id="invest" mt={"1rem"} scrollMarginTop={"150px"}>
								<Flex
									flexDirection={"column"}
									marginLeft={{ lg: "15px", base: "0" }}
								>
									<Heading
										fontWeight="600"
										fontSize={{ base: "20px", lg: "30px" }}
										textTransform="capitalize"
										color="#444444"
										lineHeight={{ lg: "140%", base: "150%" }}
										mb={"0.5rem"}
									>
										<chakra.span
											color="#E9000E"
											fontSize={{ base: "20px", lg: "30px" }}
										>
											Healthcare IT
										</chakra.span>{" "}
										Service Investments
									</Heading>
									<Box
										width={{ lg: "60px", base: "50px" }}
										height={"3px"}
										bg={"#D80808"}
										mb={{ lg: "0", base: "1rem" }}
									></Box>
									<Text
										color={"#303030"}
										fontSize={{ lg: "19px", base: "16px" }}
										lineHeight={"170%"}
									>
										Several factors affect the pricing of healthcare IT
										services, which may include:
									</Text>
									<ul>
										<Flex gap={"0.5rem"} mt={"1rem"}>
											<Box
												width={{ lg: "14px", base: "10px" }}
												height={{ lg: "10px", base: "7px" }}
												bg={"#E9000E"}
												marginTop={"0.7rem"}
											></Box>

											<chakra.li
												color={"#303030"}
												fontSize={{ lg: "18px", base: "15px" }}
												lineHeight={{ lg: "170%", base: "170%" }}
												listStyleType={"none"}
											>
												The complexity and type of healthcare IT infrastructure,
												whether on-premises or cloud-based, can impact the cost
												of IT services in healthcare.
											</chakra.li>
										</Flex>
										<Flex gap={"0.5rem"}>
											<Box
												width={{ lg: "24px", base: "20px" }}
												height={{ lg: "10px", base: "7px" }}
												bg={"#E9000E"}
												marginTop={"0.7rem"}
											></Box>
											<chakra.li
												color={"#303030"}
												fontSize={{ lg: "18px", base: "15px" }}
												lineHeight={{ lg: "170%", base: "170%" }}
												listStyleType={"none"}
											>
												The extent of healthcare IT infrastructure modernization
												requirements and care digitalization needs, such as
												telehealth applications for patients and digital
												therapeutics software, can also influence the cost of
												healthcare IT services.
											</chakra.li>
										</Flex>
										<Flex gap={"0.5rem"}>
											<Box
												width={{ lg: "10px", base: "8.5px" }}
												height={{ lg: "10px", base: "7px" }}
												bg={"#E9000E"}
												marginTop={"0.7rem"}
											></Box>
											<chakra.li
												color={"#303030"}
												fontSize={{ lg: "18px", base: "15px" }}
												lineHeight={{ lg: "170%", base: "170%" }}
												listStyleType={"none"}
											>
												Support package factors, such as time coverage and
												ticket quantity, impact healthcare IT service costs.
											</chakra.li>
										</Flex>
										<Flex gap={"0.5rem"}>
											<Box
												width={{ lg: "9px", base: "8px" }}
												height={{ lg: "10px", base: "7px" }}
												bg={"#E9000E"}
												marginTop={"0.7rem"}
											></Box>
											<chakra.li
												color={"#303030"}
												fontSize={{ lg: "18px", base: "15px" }}
												lineHeight={{ lg: "170%", base: "170%" }}
												listStyleType={"none"}
											>
												The objectives of service-level agreements can also
												influence healthcare IT service costs.
											</chakra.li>
										</Flex>
									</ul>
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
		</>
	);
};

export default HealthCare;
