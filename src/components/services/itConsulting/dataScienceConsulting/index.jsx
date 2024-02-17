import HeaderOne from "../../../HeaderOne";
import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";
import Link from "next/link";
import Content from "./content";
import {breakpoints, colors} from "../../../../../styles/theme";
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from "react-icons/md";
import LogoMarquee from "../../../logoMarquee";
import TantaTestimonial from "../../../tantaTestimonials";
import styled from "styled-components";
import {benefits, summary} from "../data";
import {IoIosCheckmark} from "react-icons/io";
import IncludeCard from "../it_assesment/allServices"
import React from "react";
import {caseData, CooperationModels, DataScience} from "./data";
import ServiceOptions from "../bigIntelligence/ServiceOptions";
import appRoutes from "../../../../utils/appRoutes";


const DataScienceConsulting = ({testimonials}) => {
    return (
			<>
				<Box mt={{ base: "5rem", lg: "7rem" }}>
					<HeaderOne
						heading={"SERVICES"}
						title={
							<>
								Data analytics{" "}
								<span style={{ color: `${colors.primaryColor}` }}>
									Consulting
								</span>
							</>
						}
					/>
				</Box>
				<Container
					maxW={"7xl"}
					mb={"1rem"}
					bg={{ base: "#F7F2FA", lg: "white" }}
				>
					<Flex gap={"3rem"} display={{ base: "grid", lg: "flex" }}>
						<Box w={{ base: "100%", lg: "50%" }}>
							<HeroText>
								<h1>Data Science Consulting</h1>
							</HeroText>
							<Text
								p={{ base: "2", lg: "8" }}
								lineHeight={{ base: "6", lg: "8" }}
							>
								Reach out to our dedicated team of IT consultants to satisfy
								your most specific analytics needs, Tanta Innovatives provides
								data science consulting utilizing machine learning, artificial
								intelligence, and deep learning technologies.
							</Text>
							<Flex
								gap={"1rem"}
								textTransform={"uppercase"}
								paddingBottom={{ base: "2", lg: "8" }}
								flexWrap={"wrap"}
							>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: {
											service: "services/data-analytics/data-implementation",
										},
									}}
								>
									<Button
										px={{ base: "1rem", lg: "2.5rem" }}
										borderColor={"#e60000"}
										bg={"white"}
										border={"1px"}
										color={"#e60000"}
										textTransform="uppercase"
										_hover="none"
									>
										Schedule a meeting
									</Button>
								</Link>
								<Link
									href={{
										pathname: appRoutes.services["cost-calculator"],
										query: { service: "itConsulting-6" },
									}}
								>
									<Button
										background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
										px={{ base: "1rem", lg: "2.5rem" }}
										border={"2px"}
										textTransform="uppercase"
										color={"white"}
										_hover="none"
									>
										get a quote
									</Button>
								</Link>
							</Flex>
						</Box>
						<Image
							src={"/assets/itStrategyConsulting/rafiki.png"}
							alt="hero image"
							width={{ base: 300, lg: 500 }}
						/>
					</Flex>
					<Box
						borderBottom={"1px"}
						opacity={"0.2"}
						marginTop={"1.5rem"}
						shadow={"bold"}
					></Box>
					<Flex gap={"5rem"} py={{ base: "2", lg: "10" }}>
						<Content />
						<Box w={{ base: "100%", lg: "70%" }}>
							{/*==========Cases Tanta Covers With Data Science==========*/}

							<Box id={"Cases"} scrollMarginTop={"150px"} width={"100%"}>
								<Text
									fontWeight={"700"}
									fontSize={{ base: "lg", lg: "3xl" }}
									pb={"5px"}
									pl={"2rem"}
								>
									Cases Tanta Covers With{" "}
									<span style={{ color: `${colors.primaryColor}` }}> Data</span>
									<span
										style={{
											display: "block",
											color: `${colors.primaryColor}`,
										}}
									>
										{" "}
										Science{" "}
									</span>
								</Text>
								<Box
									bg={"red"}
									height={"3px"}
									mb={"20px"}
									w={"4rem"}
									ml={"2rem"}
								></Box>
								<Flex my={"2rem"} flexWrap={"wrap"} gap={"2rem"} align="center">
									{caseData.map((item, index) => (
										<Box
											borderTop={"7px solid #E9000E"}
											background="rgba(206, 205, 204, 0.11)"
											boxShadow={"lg"}
											key={index}
											p={"1rem"}
											mb="1.4rem"
											w={"350px"}
											h={"330px"}
										>
											<Flex
												justifyContent={"center"}
												alignItems={"center"}
												flexDir={"column"}
											>
												<Image
													src={item.img}
													alt="card image"
													width={100}
													mb={"1rem"}
												/>
												<Text
													fontWeight="700"
													fontSize={{ base: "0.8rem", lg: "lg" }}
													lineHeight="170%"
												>
													{item.title}
												</Text>
											</Flex>
											<Text
												fontWeight="400"
												fontSize={{ base: "0.8rem", lg: "1rem" }}
												lineHeight="170%"
												color="#2A2A2A"
												mt={"1rem"}
											>
												{item.details}
											</Text>
										</Box>
									))}
								</Flex>
							</Box>

							{/*==============What our Data Science Service Offers===========*/}
							<Box id={"Services"} scrollMarginTop={"150px"}>
								<Text
									fontWeight={"700"}
									fontSize={{ base: "lg", lg: "3xl" }}
									pb={"5px"}
								>
									What our{" "}
									<span style={{ color: `${colors.primaryColor}` }}>
										{" "}
										Data Science Service
									</span>
									<span style={{ display: "block" }}> Offers</span>
								</Text>
								<Box bg={"red"} height={"3px"} mb={"20px"} w={"4rem"}></Box>
								<Box>
									{DataScience.map((item, index) => (
										<Box
											position="relative"
											borderLeft="1px solid #DADFE3"
											pl="2.4rem"
											key={index}
										>
											<Text
												position="absolute"
												top="13px"
												left="-1rem"
												bg="white"
												py="6px"
												px="14px"
												border="1px solid #DADFE3"
											>
												{index + 1}
											</Text>
											<Text
												py={"1rem"}
												fontSize={{ base: "lg", lg: "xl" }}
												fontWeight={"600"}
											>
												{item.title}
											</Text>
											<Box>
												{item.lists.map((subItem, subIndex) => {
													return (
														<Flex
															key={subIndex}
															gap={3}
															pb={"10px"}
															pl={"10px"}
														>
															<div
																style={{
																	backgroundColor: "#E9000E",
																	width: "10px",
																	minWidth: "10px",
																	minHeight: "10px",
																	height: "10px",
																	marginTop: "0.5rem",
																}}
															></div>
															<Text fontSize={"15px"}>{subItem}</Text>
														</Flex>
													);
												})}
											</Box>
										</Box>
									))}
								</Box>
							</Box>

							{/*===============Cooperation Models We Offer==============*/}
							<Box
								ml={{ lg: "-4rem" }}
								justifyContent={"center"}
								id={"Models"}
								scrollMarginTop={"150px"}
								pt={"3rem"}
							>
								<Text
									fontWeight={"700"}
									fontSize={{ base: "lg", lg: "3xl" }}
									pb={"5px"}
								>
									Cooperation Models We Offer
								</Text>
								<Box bg={"red"} height={"3px"} mb={"20px"} w={"4rem"}></Box>
								<Grid
									gridTemplateColumns={{ lg: "repeat(2, 1fr)" }}
									gap={"2rem"}
									mt={"2rem"}
									flexWrap={"wrap"}
								>
									{CooperationModels.map((item, index) => (
										<ServiceOptions
											key={index}
											title={
												<span style={{ fontSize: "16px", textAlign: "center" }}>
													{item.title}
												</span>
											}
											img={item.img}
											lists={item.lists}
											btn={item.link}
										/>
									))}
								</Grid>
							</Box>
							{/*==================What Makes Tanta Innovative a Reliable Partner==============*/}

							<Box id={"Partner"} scrollMarginTop={"150px"} pt={"2rem"}>
								<Text
									fontWeight={"700"}
									fontSize={{ base: "lg", lg: "3xl" }}
									pb={"5px"}
								>
									What Makes{" "}
									<span style={{ color: `${colors.primaryColor}` }}>
										{" "}
										Tanta Innovative{" "}
									</span>{" "}
									a Reliable <span style={{ display: "block" }}> Partner </span>
								</Text>
								<Box bg={"red"} height={"3px"} mb={"20px"} w={"4rem"}></Box>
								<Text fontSize={"18px"}>
									Our belief is that with our technical expertise and IT
									Services, combined with your innovative vision, we can create
									tech systems that will help you scale up your business by
									making life easier for your audience.
								</Text>
							</Box>
							<Flex mt={"30px"} justifyContent={"center"} alignItems={"center"}>
								<Box maxWidth={"1200px"} position={"relative"}>
									<Flex
										whiteSpace={"nowrap"}
										overflow={"hidden"}
										alignItems={"center"}
										gap={3}
									>
										<MdOutlineArrowBackIosNew fontSize={"4rem"} />
										<div>
											<LogoMarquee colored={true} />
										</div>
										<MdOutlineArrowForwardIos fontSize={"4rem"} />
									</Flex>
								</Box>
							</Flex>
							<Box id="testimonials" maxW={"800px"} scrollMarginTop={"150px"}>
								<TantaTestimonial testimonials={testimonials} />
							</Box>
							<Box id="summary" scrollMarginTop={"120px"}>
								<Summary>
									<div className="summary">
										<h2>summary</h2>
										<h3>
											Take a Moment to Know <span>Tanta Innovative</span> Better
										</h3>
										<div></div>
									</div>
									<Box my={"1.5rem"}>
										<Tabs>
											<TabList
												justifyContent={"space-between"}
												gap={"1rem"}
												borderColor={"#B60E09"}
											>
												{summary.map((item, index) => {
													return (
														<Tab
															key={index}
															borderRadius={"0.5rem 0.5rem 0 0"}
															fontWeight={"semibold"}
															_selected={{
																backgroundColor: "#B60E09",
																color: "white",
															}}
															fontSize={{
																base: "0.8rem",
																sm: "0.8rem",
																md: "0.8rem",
																lg: "1.2rem",
															}}
														>
															{item}
														</Tab>
													);
												})}
											</TabList>
											<TabPanels>
												<TabPanel>
													<ListItems>
														<Text
															fontSize={{
																md: "1rem",
																lg: "1.2rem",
															}}
														>
															Leverage agile frameworks to provide a robust
															synopsis for high level overviews. Iterative
															approaches to corporate
														</Text>
														<ul>
															{benefits.map((benefit, index) => (
																<li key={index}>
																	<IoIosCheckmark className="icon" />
																	{benefit}
																</li>
															))}
														</ul>

														<Link href={"/"}>
															<button> Get Started</button>
														</Link>
													</ListItems>
												</TabPanel>
												<TabPanel>
													<ListItems>
														<Text
															fontSize={{
																md: "1rem",
																lg: "1.2rem",
															}}
														>
															Leverage agile frameworks to provide a robust
															synopsis for high level overviews. Iterative
															approaches to corporate
														</Text>

														<ul>
															{benefits.map((benefit, index) => (
																<li key={index}>
																	<IoIosCheckmark className="icon" />
																	{benefit}
																</li>
															))}
														</ul>

														<Link href={"/"}>
															<button> Get Started</button>
														</Link>
													</ListItems>
												</TabPanel>
												<TabPanel>
													<ListItems>
														<Text
															fontSize={{
																md: "1rem",
																lg: "1.2rem",
															}}
														>
															Leverage agile frameworks to provide a robust
															synopsis for high level overviews. Iterative
															approaches to corporate
														</Text>
														<ul>
															{benefits.map((benefit, index) => (
																<li key={index}>
																	<IoIosCheckmark className="icon" />
																	{benefit}
																</li>
															))}
														</ul>
														<Link href={"/"}>
															<button> Get Started</button>
														</Link>
													</ListItems>
												</TabPanel>
											</TabPanels>
										</Tabs>
									</Box>
								</Summary>
							</Box>
							<Box id={"Projects"} scrollMarginTop={"150px"}>
								<IncludeCard />
							</Box>
						</Box>
					</Flex>
				</Container>
			</>
		);
}
export default DataScienceConsulting;

const HeroText = styled.div`
	h1 {
		position: relative;
		box-sizing: border-box;
		margin-left: 2rem;
		font-size: 32px;
		font-weight: 700;
        margin-top: 1rem;
		color: #0c0c0c;

		@media (max-width: 520px) {
			font-size: 1.3rem;
		}

		&::before {
			position: absolute;
			content: "";
			top: -3px;
			left: -30px;
			height: 100%;
			width: 3px;
			background: linear-gradient(to bottom, red 30%, transparent, transparent);
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
                transparent,
                transparent,
                transparent,
                transparent,
                transparent
			);
		}
	}
	`
const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
 

  .summary {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0;

    h2 {
      font-size: 18px;
      font-weight: 400;
      color: #636363;
      text-transform: uppercase;
      margin-bottom: -1rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }
      @media (max-width: 850px) {
        font-size: 0.9rem;
      }
    }
    h3 {
      font-size: 30px;
      font-weight: 700;
      color: #414141;

      span {
        color: #e9000e;
      }

      ${breakpoints.lg} {
        font-size: 1.5rem;
      }

      @media (max-width: 850px) {
        font-size: 1.2rem;
      }
    }
    div {
      width: 55px;
      height: 3px;
      background-color: #e9000e;
      margin-bottom: 0.2rem;
    }
  }
`

const ListItems = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin-left: 1rem;
    margin-top: 1.5rem;

    ${breakpoints.lg} {
      margin-left: 0;
    }

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.12rem;
      font-weight: 400;
      color: #303030;
      margin-bottom: 0.5rem;
      text-align: left;

      ${breakpoints.lg} {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 0.85rem;
      }
    }
  }

  button {
    background: #e9000e;
    border-radius: 8px;
    border: none;
    padding: 0.5rem 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin-top: 1rem;
  }
`