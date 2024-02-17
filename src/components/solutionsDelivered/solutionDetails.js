import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ContactUsForm from "../contactUsPage/contactUsForm";
import tickIcon from "../../../public/assets/contactUs/tickIcon.png";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import appRoutes from "../../utils/appRoutes";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Container,
	Flex,
	Grid,
	Heading,
	Hide,
	Link,
	Show,
	Text,
} from "@chakra-ui/react";

import { MdFacebook, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { useState } from "react";

const SolutionDetailsPage = ({ data, projects }) => {
	const [caseStudy, setCaseStudy] = useState(data);

	const relatedProjects = projects?.filter((item) => {
		for (let sub of data?.related_projects) {
			if (Number(sub) === Number(item.id)) {
				return true;
			}
		}
	});

	return (
		<Section>
			<Header>
				<Hide below="md">
					<Breadcrumb
						spacing="8px"
						separator={
							<MdOutlineKeyboardArrowRight color="gray" fontSize={"1rem"} />
						}
						bg="linear-gradient(90.82deg, rgba(0, 0, 0, 0.38) -60.45%, rgba(255, 255, 255, 0) 146.74%);"
						py={".5rem"}
						width={"28%"}
					>
						<BreadcrumbItem>
							<BreadcrumbLink as={Link} href={"/"} color={"white"}>
								Home
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<BreadcrumbLink
								as={Link}
								href={appRoutes.solutions["solutions-solutions-we-deliver"]}
								color={"white"}
							>
								Solutions
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<BreadcrumbLink
								as={Link}
								href={appRoutes.solutions["solutions-solutions-we-deliver"]}
								color={"white"}
							>
								{caseStudy?.tags[0]?.name}
							</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
				</Hide>
				<Flex
					justifyContent={"center"}
					alignItems={"center"}
					direction={"column"}
					textAlign={"center"}
					pt={"2rem"}
				>
					<Heading
						as={"h3"}
						color={"white"}
						fontSize={{ base: "sm", lg: "xl" }}
						textTransform={"uppercase"}
					>
						{caseStudy?.title}
					</Heading>
					<Text color={"white"} fontSize={{ base: "md", lg: "xl" }}>
						Unlock growth potential with our retention strategies..
					</Text>
				</Flex>
			</Header>
			<Container maxW={"7xl"}>
				<Body>
					<div className="disIcons">
						<div className="lineview">
							<h4>Overview</h4>
							<div className="red-line_small"></div>
						</div>
						<Flex gap={"2rem"} justify={"end"}>
							<Link
								href="https://facebook.com/tantainnovatives"
								target="_blank"
							>
								<MdFacebook fontSize={"24px"} color="#404040" />
							</Link>
							<Link
								href="https://instagram.com/tantainnovative"
								target="_blank"
							>
								<RiInstagramFill fontSize={"24px"} color="#404040" />
							</Link>
							<Link
								href="https://www.linkedin.com/company/tantainnovative"
								target="_blank"
							>
								<RiLinkedinBoxFill fontSize={"24px"} color="#404040" />
							</Link>
						</Flex>
					</div>
					<div className="discri">
						<p>{caseStudy?.long_description}</p>
					</div>
					<Main>
						<div className="mainLeft">
							<div>
								<h3>Customer</h3>
								<p>{caseStudy?.customer}</p>
							</div>
							<div>
								<h3>Industry</h3>
								<p>{caseStudy?.industry}</p>
							</div>
							<div>
								<h3>Project Size</h3>
								<p>{caseStudy?.project_size}</p>
							</div>
							<div>
								<h3>Location</h3>
								<p>{caseStudy?.location}</p>
							</div>
						</div>
						<div className="mainRight">
							<Box>
								<Hide below="md">
									{/* {overviewTabs.map((index) => {
										return (
											<Box key={index}>
												<h3>{index.title}</h3>
												<Text pb={"1.5rem"}>{index.discription} </Text>
											</Box>
										);
									})} */}
									<Box mb={"2rem"}>
										<Image
											src={caseStudy?.project_logo}
											alt="Case study image"
											width={700}
											height={700}
										></Image>
									</Box>

									<Box>
										<h3>Requirements</h3>
										<Text pb={"1.5rem"}>{caseStudy?.requirements} </Text>
									</Box>
									<Box>
										<h3>Approach</h3>
										<Text pb={"1.5rem"}>{caseStudy?.approach} </Text>
									</Box>
									<Box>
										<h3>Our solution</h3>
										<Text pb={"1.5rem"}>{caseStudy?.our_solution} </Text>
									</Box>
									<Box>
										<h3>Results</h3>
										<Text pb={"1.5rem"}>{caseStudy?.result} </Text>
									</Box>
									<Box>
										<h3> Technologies and Tools </h3>
										<Text pb={"1.5rem"}>
											{/* Java 8, go, java, node, php, python, net, MySQL, MongoDB */}
										</Text>
									</Box>
								</Hide>
								<Show below="md">
									<Box mb={"2rem"}>
										<Image
											src={caseStudy?.project_logo}
											alt="Case study image"
											width={500}
											height={500}
										></Image>
									</Box>
									<Accordion defaultIndex={[0]} allowMultiple my={"2rem"}>
										{/* {overviewTabs.map((item, key) => {
											return (
												<AccordionItem key={key} my={"1rem"}>
													<AccordionButton>
														<Text
															fontSize={"2xl"}
															fontWeight={"bold"}
															flex="1"
															textAlign="left"
															color={"black"}
														>
															{item.title}
															<div className="red-line_small"></div>
														</Text>
														<AccordionIcon />
													</AccordionButton>
													<AccordionPanel pb={2}>
														{item.discription}
													</AccordionPanel>
												</AccordionItem>
											);
										})} */}
										<AccordionItem my={"1rem"}>
											<AccordionButton>
												<Text
													fontSize={"2xl"}
													fontWeight={"bold"}
													flex="1"
													textAlign="left"
													color={"black"}
												>
													Requirements
													<div className="red-line_small"></div>
												</Text>
												<AccordionIcon />
											</AccordionButton>
											<AccordionPanel pb={2}>
												{caseStudy?.requirements}
											</AccordionPanel>
										</AccordionItem>
										<AccordionItem my={"1rem"}>
											<AccordionButton>
												<Text
													fontSize={"2xl"}
													fontWeight={"bold"}
													flex="1"
													textAlign="left"
													color={"black"}
												>
													Approach
													<div className="red-line_small"></div>
												</Text>
												<AccordionIcon />
											</AccordionButton>
											<AccordionPanel pb={2}>
												{caseStudy?.approach}
											</AccordionPanel>
										</AccordionItem>
										<AccordionItem my={"1rem"}>
											<AccordionButton>
												<Text
													fontSize={"2xl"}
													fontWeight={"bold"}
													flex="1"
													textAlign="left"
													color={"black"}
												>
													Our solution
													<div className="red-line_small"></div>
												</Text>
												<AccordionIcon />
											</AccordionButton>
											<AccordionPanel pb={2}>
												{caseStudy?.our_solution}
											</AccordionPanel>
										</AccordionItem>
										<AccordionItem my={"1rem"}>
											<AccordionButton>
												<Text
													fontSize={"2xl"}
													fontWeight={"bold"}
													flex="1"
													textAlign="left"
													color={"black"}
												>
													Results
													<div className="red-line_small"></div>
												</Text>
												<AccordionIcon />
											</AccordionButton>
											<AccordionPanel pb={2}>
												{caseStudy?.result}
											</AccordionPanel>
										</AccordionItem>
									</Accordion>
									<Accordion defaultIndex={[0]} allowMultiple my={"2rem"}>
										<AccordionItem my={"1rem"}>
											<AccordionButton>
												<Text
													fontSize={"2xl"}
													fontWeight={"bold"}
													flex="1"
													textAlign="left"
													color={"black"}
												>
													Technologies and Tools
													<div className="red-line_small"></div>
												</Text>
												<AccordionIcon />
											</AccordionButton>
										</AccordionItem>
									</Accordion>
								</Show>
							</Box>
						</div>
					</Main>
				</Body>
				<Hide breakpoint="(max-width: 700px)">
					<Text fontSize={"30px"} fontWeight={"bold"} p={"20px 80px"}>
						Related Projects
					</Text>
					<Container maxW={"7xl"}>
						<Grid
							templateColumns={{
								base: "100%",
								md: "repeat(2, 1fr)",
								lg: "repeat(3, 1fr)",
							}}
							gap={"2.5rem"}
							mb={"8rem"}
						>
							{relatedProjects.slice(0, 3).map((props) => {
								return (
									<Flex
										key={props?.id}
										boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
										borderRadius={"10px"}
									>
										<Link
											href={
												`/solutions/solutions-detail/${props?.slug?.replace(
													/_/g,
													"-"
												)}/` + props.id
											}
											_hover={{ textDecoration: "none" }}
										>
											<Box width={"100%"} minH={"100px"}>
												<Image
													src={props?.image}
													alt="Case study image"
													width={350}
													height={350}
												/>
											</Box>
											<Flex direction={"column"} gap={"1rem"} p={"1rem"}>
												<Heading as={"h4"} fontSize={"22px"}>
													{props?.title}
												</Heading>
												<Text
													fontSize={"14px"}
													fontWeight={"300"}
													textTransform={"capitalize"}
													color={"#E9000E"}
												>
													{props?.tags[0].name}
												</Text>
												<Text
													fontStyle={"15px"}
													fontWeight={"400"}
													color={"#303030"}
												>
													{props?.short_description?.slice(0, 150)}...
												</Text>
												<Flex
													align={"center"}
													justify={"center"}
													gap={".8rem"}
													p={"1rem 0"}
												>
													<Text
														align={"center"}
														gap={"1rem"}
														fontSize={"1rem"}
														color={"#E9000E"}
														fontWeight={"500"}
													>
														View Case Study
													</Text>
													<BsArrowRight
														fontSize={"1rem"}
														color={"#E9000E"}
														fontWeight={"500"}
													/>
												</Flex>
											</Flex>
										</Link>
									</Flex>
								);
							})}
						</Grid>
					</Container>
				</Hide>
				<Contact>
					{/* ----------Get in touch---------- */}
					<Flex
						gap={"2rem"}
						direction={{ base: "column", lg: "row" }}
						w={"100%"}
						mb={{ lg: "2.5rem" }}
					>
						<Hide breakpoint="(max-width: 700px)">
							<Flex
								direction={"column"}
								p={{ lg: "0.2rem" }}
								borderRight={"10px solid #FFFFFF"}
							>
								<Box borderLeft={"2px solid #E9000E"} p={".5rem 2rem"}>
									<Text
										as="h2"
										fontSize={{ base: "24px", lg: "35px" }}
										w={"100%"}
										fontWeight={"700"}
										opacity={"0.7"}
									>
										Need a similar
										<Text>Project?</Text>
									</Text>
								</Box>
								<Box p={"1rem"}>
									<Flex alignItems={"center"} gap={"1rem"} mb={"1rem"}>
										<BsTelephone
											color={"#E9000E"}
											fontSize={"2rem"}
										></BsTelephone>
										<Grid>
											<Text
												fontSize={"md"}
												fontWeight={"normal"}
												textTransform={"capitalize"}
												mb={"4px"}
											>
												TALK TO A CONSULTANT
											</Text>
											<Text
												fontSize={"lg"}
												fontWeight={"normal"}
												textTransform={"capitalize"}
												color={"#E9000E"}
											>
												+234 1 453 6000
											</Text>
										</Grid>
									</Flex>
									<Flex alignItems={"center"} gap={"1rem"}>
										<BsTelephone
											color={"#E9000E"}
											fontSize={"2rem"}
										></BsTelephone>
										<Grid>
											<Text
												fontSize={"md"}
												fontWeight={"normal"}
												textTransform={"capitalize"}
												mb={"4px"}
											>
												CHAT WITH EXPERT
											</Text>
											<Text
												fontSize={"lg"}
												fontWeight={"normal"}
												textTransform={"capitalize"}
												color={"#E9000E"}
											>
												+234 1 453 6000
											</Text>
										</Grid>
									</Flex>
								</Box>
								<Box mt={"1.5rem"}>
									<Flex align={"center"} gap={"1rem"}>
										<Image src={tickIcon} alt="" />
										<Text>
											<span style={{ fontWeight: "bold" }}>13+ Years</span> in
											IT
										</Text>
									</Flex>
									<Flex align={"center"} gap={"1rem"} mt={"1.5rem"}>
										<Image src={tickIcon} alt="" />
										<Text>
											Over{" "}
											<span style={{ fontWeight: "bold" }}>
												21+ IT Professionals
											</span>{" "}
											on board
										</Text>
									</Flex>
								</Box>
							</Flex>
							<VerticalLine></VerticalLine>
						</Hide>
						{/* ----------Contact us Form---------- */}
						<Box>
							<Text
								as="h2"
								fontSize={"24px"}
								fontWeight={"700"}
								opacity={"0.7"}
								alignItems={"center"}
							>
								Need a similar project?
							</Text>
							<Text fontSize={"18px"}>
								Drop us a line, and our rep will contact you within 30 minutes
								to arrange an initial discussion.
							</Text>
							<ContactUsForm />
						</Box>
					</Flex>
				</Contact>
			</Container>
		</Section>
	);
};

export default SolutionDetailsPage;

const Section = styled.div`
	margin-top: 7rem;

	@media (max-width: 700px) {
		background: #f7f2fa;
	}
`;

const Header = styled.div`
	background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.6) 78.57%,
			rgba(0, 0, 0, 0) 103.85%
		),
		url(${"/assets/blog/blog1.png"});
	background-size: cover;
	background-repeat: no-repeat;
	padding-block: 4rem;
	padding-block-start: 2rem;
	padding-inline: 1rem;
	gap: 1rem;
	@media (max-width: 96rem) {
		padding-block-start: 2rem;
		padding-block-end: 2rem;
	}
`;

const Body = styled.div`
	padding: 40px 80px;

	@media (max-width: 900px) {
		padding: 30px 20px;
	}

	@media (max-width: 700px) {
		padding: 30px 5px;
	}

	.disIcons {
		display: flex;
		justify-content: space-between;

		@media (max-width: 700px) {
			padding: 0px 20px;
		}
	}

	h4 {
		font-weight: 700;
		font-size: 35px;
		line-height: 24px;
		padding-bottom: 20px;

		@media (max-width: 700px) {
			font-size: 20px;
			padding-bottom: 10px;
		}
	}

	p {
		font-weight: 400;
		font-size: 20px;
		line-height: 140%;
	}

	.red-line_small {
		width: 60px;
		height: 5px;
		background: #d80808;
		border-radius: 3px;
		margin-bottom: 1.4rem;

		@media (max-width: 700px) {
			width: 40px;
			margin-bottom: 1rem;
		}
	}

	.discription {
		width: 60%;

		p {
			font-weight: 400;
			font-size: 24px;
		}

		@media (max-width: 700px) {
			width: 100%;
			padding: 0 20px;

			p {
				font-size: 14.5px;
			}
		}
	}
`;

const Main = styled.div`
	display: flex;
	gap: 3%;
	padding-top: 40px;

	@media (max-width: 700px) {
		display: block;
		/* gap: 0; */
	}

	.mainLeft {
		width: 25%;
		display: flex;
		flex-direction: column;
		gap: 30px;

		@media (max-width: 700px) {
			width: 100%;
			flex-direction: row;
			flex-wrap: wrap;
			padding: 0 20px 20px 20px;
			gap: 20px;
		}
	}

	.mainRight {
		width: 75%;
		display: flex;
		flex-direction: column;
		gap: 30px;
		padding: 0 20px;

		@media (max-width: 700px) {
			width: 100%;
		}
	}

	p {
		font-weight: 400;
		font-size: 20px;
		line-height: 140%;

		@media (max-width: 700px) {
			font-size: 14.5px;
		}
	}

	h3 {
		font-weight: 700;
		font-size: 28px;
		line-height: 24px;
		padding-bottom: 15px;

		@media (max-width: 700px) {
			font-size: 20px;
			padding-bottom: 10px;
		}
	}
`;

const Contact = styled.div``;

const VerticalLine = styled.div`
	border: 4px solid white;
	height: 26rem;
	box-shadow: 11px 0px 29px rgba(0, 0, 0, 0.25);
	align-items: center;
`;
