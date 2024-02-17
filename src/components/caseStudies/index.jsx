import React from "react";
import styled from "styled-components";
import { SearchIcon } from "./Svg";
// import Link from "next/link";
// import Image from "next/image";
import LandingLayout from "../../layouts/landing.layout";
import { BsArrowRight } from "react-icons/bs";
import HeaderOne from "../HeaderOne";
import { cards, categories, categoryTabs } from "./data";
import {
	Image,
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Link,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import ContactUs from "../contactUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CaseMobileCards } from "./caseStudiesMobile";
import { useState } from "react";
import appRoutes from "../../utils/appRoutes";

// export const getStaticProps = async () => {
//   const res = await fetch(``);
//   const data = await res.json();

//   return {
//     props: data.props,
//   };
// };

const CaseStudy = ({ data, projects }) => {
	const [caseStudies, setCaseStudies] = useState(data);
	const [Allprojects, setAllProjects] = useState(projects);
	const [FilteredProjects, setFilteredProjects] = useState([...Allprojects]);
	const [filterText, setFilterText] = useState("");

	const [isMobileDevice] = useMediaQuery("(max-width: 560px)");

	return (
		<>
			<Box mt={"5rem"} minHeight={"100vh"}>
				<HeaderOne
					heading={"Case Studies"}
					title={"Projects that make us standout"}
				/>
				<Container maxW={"7xl"}>
					<Wrapper>
						<Header>
							<div className="searching">
								<button type="button">
									<SearchIcon />
								</button>
								<input type="search" placeholder="Search for any topic" />
							</div>
						</Header>
						<Tabs mt="2rem">
							<TabList
								gap={{ base: "2%", lg: "10%" }}
								justifyContent={{ base: "space-around", lg: "center" }}
								fontSize={{ base: "sm", lg: "xl" }}
							>
								{caseStudies?.map((item, index) => {
									return (
										<Tab
											key={index}
											bg="none"
											_selected={{
												color: " #e60000",
												borderBottom: "2px solid #e60000",
											}}
											fontSize={"lg"}
										>
											{item.name}
										</Tab>
									);
								})}
							</TabList>
							<TabPanels>
								{caseStudies?.map((item, index) => {
									return (
										<TabPanel key={index}>
											<Box
												display={{ base: "grid", md: "flex" }}
												textAlign={"center"}
												flexWrap={"wrap"}
												gap={"1rem"}
												justifyContent={"center"}
												gridTemplateColumns="1fr 1fr"
											>
												{item?.tags?.map((item, index) => {
													return (
														<Button
															key={index}
															bg={"#f7e7e7"}
															color={"#ee0000"}
															_hover={"#f7e7e7"}
															py={"5px"}
															_active={{
																bg: "#ee0000",
																color: "#f7e7e7",
																transform: "scale(0.80)",
															}}
														>
															{item.title}
														</Button>
													);
												})}
											</Box>
										</TabPanel>
									);
								})}
							</TabPanels>
						</Tabs>
					</Wrapper>
				</Container>
				{isMobileDevice ? (
					<CaseMobileCards FilteredProjects={FilteredProjects} />
				) : (
					<Container maxW={"7xl"}>
						<Grid
							templateColumns={{
								base: "100%",
								md: "repeat(2, 1fr)",
								lg: "repeat(3, 1fr)",
							}}
							gap={"2rem"}
						>
							{FilteredProjects?.map((props) => {
								return (
									<Flex
										key={props.id}
										boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
										borderRadius={"10px"}
									>
										<Link
											href={`${appRoutes.caseStudies}${
												props.id
											}/${props?.slug?.replace(/_/g, "-")}`}
											_hover={{ textDecoration: "none" }}
										>
											<Flex direction={"column"}>
												<Box w={"100%"} minH={"262px"} flex={"1"}>
													<Image
														src={props.image}
														alt="Case study image"
														width={"100%"}
														objectFit={"cover"}
													/>
												</Box>
												<Flex
													direction={"column"}
													gap={"1rem"}
													p={"1rem"}
													flex={"1"}
												>
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
											</Flex>
										</Link>
									</Flex>
								);
							})}
						</Grid>
					</Container>
				)}
				<Box>
					<ContactUs subtitle="We’re here to support" />
				</Box>
			</Box>
		</>
	);
};

export default CaseStudy;

const Wrapper = styled.div``;

const Header = styled.div`
	text-align: center;
	/* padding-top: 50px; */
	position: relative;
	text-transform: uppercase;

	.topbody {
		position: absolute;
		top: 35%;
		left: 20%;

		@media (max-width: 700px) {
			align-items: center;
			flex-wrap: wrap;
			left: 10%;
		}

		p {
			font-size: 18px;
			font-weight: 400;
			opacity: 0.7;

			@media (max-width: 700px) {
				display: none;
			}
		}

		h1 {
			font-size: 46px;
			font-weight: 700;

			@media (max-width: 700px) {
				font-size: 18px;
			}
		}
	}

	input {
		padding: 10px 10px 10px 50px;
		border-width: 2px;
		outline: none;
		width: 50%;
	}

	@media (max-width: 700px) {
	}

	.searching {
		position: relative;
	}

	button {
		position: absolute;
		top: 25%;
		padding-left: 18px;
	}
`;
