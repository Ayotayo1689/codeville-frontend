import React from "react";
import {
	Box,
	Card,
	CardBody,
	Container,
	Divider,
	Flex,
	Grid,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import { colors } from "../../../styles/theme";
import IndustriesWeServe from "./IndustriesWeServe";
import StandOutProject from "../standOutProject";
import appRoutes from "../../utils/appRoutes";
import StandOutMobile from "../standOutMobile";
import NoSSR from "../dataAnalytics/NoSSR";
const ProofSection = ({ success, cases }) => {
	const [isMobileDevice] = useMediaQuery("(max-width: 992px)");

	return (
		<NoSSR>
			<Box mb={"6rem"}>
				<Box
					mb={"2rem"}
					paddingBlock={"3rem"}
					paddingInline={"2rem"}
					bg={
						"linear-gradient(180deg, #EAEAEA 0%, rgba(233, 233, 233, 0.5) 144.82%);"
					}
				>
					<Container px={{ base: "1rem", lg: "5rem" }} maxW={"7xl"}>
						<Box>
							<Text>PROOF OF SUCCESS</Text>
							<Text fontWeight={"semibold"} fontSize={"xl"} my={"3"}>
								Developing Solutions | Curating Experiences
							</Text>
							<Text width={{ lg: "90%" }} fontSize={"lg"}>
								Tanta Innovative's flexible engagements for both Clients and
								Talents, build strong relationships that last forever. We
								perform full analysis of the client’s project and collect
								information about the competitors to formulate a proper
								strategy.
							</Text>

							<Card
								padding={{ base: ".1rem", lg: "10" }}
								my={"6"}
								boxShadow={"none"}
								bg={
									"linear-gradient(180deg, #EAEAEA 0%, rgba(233, 233, 233, 0.5) 144.82%);"
								}
							>
								<CardBody>
									<Grid
										templateColumns={{
											base: "1fr 1fr",
											lg: "1fr 1fr 1fr",
										}}
										gap={{ base: ".2rem", lg: "6rem" }}
									>
										{success.map((item, key) => {
											return (
												<Box
													key={key}
													boxShadow={"lg"}
													textAlign={"center"}
													rounded={"lg"}
													paddingBlock={{ base: "1rem", lg: "3rem" }}
													paddingInline={{ base: ".5rem", lg: "1rem" }}
													bg={"white"}
												>
													<Text
														fontWeight={"semibold"}
														fontSize={{ base: "lg", lg: "3xl" }}
														color={colors.primaryColor}
													>
														{item?.title}
													</Text>
													<Text fontSize={{ base: "xs", lg: "md" }}>
														{item?.subtitle}
													</Text>
												</Box>
											);
										})}
									</Grid>
								</CardBody>
								{/*{isMobileDevice ? (*/}
								{/*	<Image*/}
								{/*		my={"10"}*/}
								{/*		src={"/assets/clients/home2.svg"}*/}
								{/*		alt="home"*/}
								{/*	></Image>*/}
								{/*) : (*/}
								{/*	<Image*/}
								{/*		my={"10"}*/}
								{/*		src={"/assets/clients/home1.svg"}*/}
								{/*		alt="home"*/}
								{/*	></Image>*/}
								{/*)}*/}
							</Card>
						</Box>
					</Container>
				</Box>

				<Container maxW={"7xl"}>
					<IndustriesWeServe />
				</Container>

				<Box
					bg={
						"linear-gradient(180deg, #EAEAEA 0%, rgba(233, 233, 233, 0.5) 144.82%);"
					}
					p={{ base: "20px 0", md: "20px 0", lg: "20px 9% 40px 9%" }}
				>
					<Container maxW={"7xl"}>
						<Text color={"#636363"} fontSize={"18px"}>
							CASE STUDIES
						</Text>
						<Text
							fontSize={"30px"}
							fontWeight={"600"}
							mb={{ base: "10px", md: "10px", lg: "30px" }}
						>
							Projects That Makes Us Standout
						</Text>
						<Flex
							display={{ base: "none", md: "none", lg: "flex" }}
							alignItems={"center"}
							flexDir={{ base: "column", lg: "row" }}
							gap={"30px"}
							h={""}
							w={"100%"}
						>
							{cases.map((data, index) => {
								return (
									<StandOutProject
										cases={cases}
										key={index}
										img={data.image}
										title={data.title}
										details={data.long_description.slice(0, 120).trim() + "..."}
										link={`${appRoutes.caseStudies}${data?.slug?.replace(
											/_/g,
											"-"
										)}/${data.id}`}
									/>
								);
							})}
						</Flex>
						<Box display={{ base: "block", lg: "none" }}>
							<StandOutMobile cases={cases} />
						</Box>
					</Container>
				</Box>

				{/*<StandOutMobile offers={cases}/>*/}

				<Box mb={"2rem"} paddingBlock={"3rem"} paddingInline={"2rem"}>
					<Container maxW={"7xl"}>
						<Text textTransform={"uppercase"}>It's not rocket science</Text>
						<Text fontWeight={"semibold"} fontSize={"1.6rem"} my={"2"} mb={"5"}>
							Here are three steps to how we work;
						</Text>
						<Box
							display={"flex"}
							flexDirection={{ base: "column", lg: "row" }}
							justifyContent={"space-between"}
							alignItems={"center"}
							gap={"2rem"}
						>
							<Box>
								<Box
									my={"2rem"}
									mx={"auto"}
									width={"20%"}
									minW={"70px"}
									boxShadow={"lg"}
									textAlign={"center"}
									rounded={"lg"}
									paddingBlock={"1rem"}
									paddingInline={"1rem"}
									outline={"1px dashed red"}
									outlineOffset={"1rem"}
									background={
										"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
									}
								>
									<Text
										fontWeight={"semibold"}
										fontSize={"2xl"}
										color={"white"}
									>
										01
									</Text>
								</Box>
								<Box textAlign={"center"}>
									<Text fontSize={"md"} fontWeight={"semibold"}>
										Give Us The Lowdown
									</Text>
									<Text>
										In this manner, we initiate the search for resources that
										precisely match your projects distinct requirements,
										ensuring an optimal alignment.
									</Text>
								</Box>
							</Box>

							{isMobileDevice ? (
								<Divider
									borderColor="red"
									orientation="vertical"
									my={"-1rem"}
									borderStyle="dashed"
									height={"60px"}
									borderWidth="1px"
								/>
							) : (
								<Divider
									borderColor="red"
									my={2}
									borderStyle="dashed"
									width={"200px"}
									borderWidth="1px"
									marginTop={"-6rem"}
								/>
							)}

							<Box>
								<Box
									my={"2rem"}
									mx={"auto"}
									width={"20%"}
									minW={"70px"}
									boxShadow={"lg"}
									textAlign={"center"}
									rounded={"lg"}
									paddingBlock={"1rem"}
									paddingInline={"1rem"}
									outline={"1px dashed red"}
									outlineOffset={"1rem"}
									background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
								>
									<Text
										fontWeight={"semibold"}
										fontSize={"2xl"}
										color={"white"}
									>
										02
									</Text>
								</Box>
								<Box textAlign={"center"}>
									<Text fontSize={"md"} fontWeight={"semibold"}>
										We Put Together Your Dream-Team
									</Text>
									<Text>
										We begin selecting the top talent for your dream team,
										complete it with a handpicked, dedicated project manager
										that will help you see your project to fruition.
									</Text>
								</Box>
							</Box>
							{isMobileDevice ? (
								<Divider
									borderColor="red"
									orientation="vertical"
									my={"-1rem"}
									borderStyle="dashed"
									border
									height={"60px"}
									borderWidth="1px"
								/>
							) : (
								<Divider
									borderColor="red"
									my={2}
									borderStyle="dashed"
									width={"200px"}
									borderWidth="1px"
									marginTop={"-6rem"}
								/>
							)}
							<Box>
								<Box
									my={"2rem"}
									mx={"auto"}
									width={"20%"}
									minW={"70px"}
									boxShadow={"lg"}
									textAlign={"center"}
									rounded={"lg"}
									paddingBlock={"1rem"}
									paddingInline={"1rem"}
									outline={"1px dashed red"}
									outlineOffset={"1rem"}
									background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
								>
									<Text
										fontWeight={"semibold"}
										fontSize={"2xl"}
										color={"white"}
									>
										03
									</Text>
								</Box>
								<Box textAlign={"center"}>
									<Text fontSize={"md"} fontWeight={"semibold"}>
										Project Kick-Off
									</Text>
									<Text>
										Having selected your dream team, it is time to move forward
										with your project, with the assurance that the best possible
										team is working with you.
									</Text>
								</Box>
							</Box>
						</Box>
					</Container>
				</Box>
			</Box>
		</NoSSR>
	);
};

export default ProofSection;
