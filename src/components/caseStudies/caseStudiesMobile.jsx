import React from "react";
import { cards, categories, categoryTabs } from "./data";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BsArrowRight } from "react-icons/bs";
import {
	Container,
	Grid,
	Flex,
	Heading,
	Text,
	Box,
	Link,
	Image,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Button,
} from "@chakra-ui/react";
import appRoutes from "../../utils/appRoutes";

export const CaseMobileCards = ({ FilteredProjects }) => {
	return (
		<Container>
			<Swiper
				modules={[Pagination, Scrollbar, A11y]}
				pagination={{ clickable: true }}
				slidesPerView={1}
				spaceBetween={10}
				style={{
					"--swiper-pagination-color": "#E9000E",
					"--swiper-pagination-bullet-inactive-color": "#D9D9D9",
					"--swiper-pagination-bullet-inactive-opacity": "1",
					"--swiper-pagination-bullet-size": "10px",
					" --swiper-pagination-bullet-width": "15px",
					"--swiper-pagination-bullet-height": "8px",
					"--swiper-pagination-bullet-horizontal-gap": "12px",
					"--swiper-pagination-bullet-vertical-gap": "20px",
					"--swiper-pagination-bullet-border-radius": "0px",
				}}
			>
				<Grid
					templateColumns={{
						base: "100%",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={"2.5rem"}
				>
					{FilteredProjects.map((props) => {
						return (
							<SwiperSlide key={props.id}>
								<Flex
									boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
									borderRadius={"10px"}
									marginBottom={"4rem"}
								>
									<Link
										href={`${appRoutes.caseStudies}/${
											props.id
										}/${props?.slug?.replace(/_/g, "-")}`}
										_hover={{ textDecoration: "none" }}
									>
										<Box w={"100%"} minH={"262px"}>
											<Image
												src={props?.image}
												alt="Case study image"
												w={"100%"}
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
							</SwiperSlide>
						);
					})}
				</Grid>
			</Swiper>
		</Container>
	);
};

export const ProjectTabs = () => {
	return (
		<Container>
			<Swiper
				modules={[Pagination, Scrollbar, A11y]}
				pagination={{ clickable: true }}
				slidesPerView={1}
				spaceBetween={10}
				style={{
					"--swiper-pagination-color": "#E9000E",
					"--swiper-pagination-bullet-inactive-color": "#D9D9D9",
					"--swiper-pagination-bullet-inactive-opacity": "1",
					"--swiper-pagination-bullet-size": "10px",
					" --swiper-pagination-bullet-width": "15px",
					"--swiper-pagination-bullet-height": "8px",
					"--swiper-pagination-bullet-horizontal-gap": "12px",
					"--swiper-pagination-bullet-vertical-gap": "20px",
					"--swiper-pagination-bullet-border-radius": "0px",
				}}
			>
				<Box>
					<Tabs mt="2rem">
						<TabList
							gap={{ base: "2%", lg: "10%" }}
							justifyContent={{ base: "space-around", lg: "center" }}
							fontSize={{ base: "sm", lg: "xl" }}
						>
							{categories.map((item, index) => {
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
										{item}
									</Tab>
								);
							})}
						</TabList>
						<TabPanels>
							{categoryTabs.map((item, index) => {
								return (
									<SwiperSlide key={index}>
										<TabPanel>
											<Flex
												gap={"10px"}
												textAlign={"center"}
												py={"20px"}
												overflow={{ base: "scroll", lg: "visible" }}
											>
												<Button
													p={"4rem"}
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
													{item}
												</Button>
											</Flex>
										</TabPanel>
									</SwiperSlide>
								);
							})}
						</TabPanels>
					</Tabs>
				</Box>
			</Swiper>
		</Container>
	);
};
