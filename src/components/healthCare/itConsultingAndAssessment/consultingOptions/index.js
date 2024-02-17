import React from "react";
import {
	Box,
	Button,
	Grid,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { consultingOption } from "../data";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";

function ConsultingOptions() {
	return (
		<>
			<Box>
				<Text
					fontSize={{ base: "18px", md: "32px", lg: "32px" }}
					textAlign={{ base: "center", md: "left", lg: "left" }}
					fontWeight={"700"}
					mt={"3rem"}
					borderBottom={"1rem"}
					color={"#222222"}
				>
					Choose Your consulting Options
				</Text>

				<Box
					w={{ base: "50%", md: "6rem", lg: "6rem" }}
					ml={{ base: "auto", md: "0", lg: "0" }}
					mr={{ base: "auto", md: "0", lg: "0" }}
					mt={{ base: "0.5rem", md: "0", lg: "0" }}
					style={{
						height: "4px",
						background: "#D80808",
						marginBottom: " 2rem ",
					}}
				></Box>

				<Box display={{ base: "block", md: "none", lg: "none" }}>
					<Swiper
						modules={[Pagination, Scrollbar, A11y]}
						pagination={{ clickable: true }}
						slidesPerView={1}
						// spaceBetween={10}
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
						{consultingOption.map((item, index) => (
							<SwiperSlide
								key={index}
								display={"flex"}
								justifyContent={"center"}
							>
								<Box
									height={"30rem"}
									width={"281px"}
									bg={"rgba(255, 255, 255, 0.002);"}
									boxShadow={" 0px 2px 20px rgba(0, 0, 0, 0.05)"}
									border={"1px solid #DADFE3"}
									boxSizing={"border-box"}
									position={"relative"}
									ml={"auto"}
									mr={"auto"}
									mb={"3rem"}
								>
									<Box
										height={"10px"}
										width={"100%"}
										mb={"1rem"}
										bg={" #E9000E"}
									></Box>
									<Text
										fontSize={"20px"}
										fontWeight={"700"}
										color={" #3B3C3D"}
										width={"238px"}
										m={"auto"}
										textAlign={"center"}
									>
										{item.title}
									</Text>

									<UnorderedList pl={4} spacing={2} paddingBlock={"1rem"}>
										{item.list.map((item, index) => {
											return (
												<ListItem key={index} fontSize={"16px"} w={"235px"}>
													{item}
												</ListItem>
											);
										})}
									</UnorderedList>

									<Box
										m={"auto"}
										width={"90%"}
										position={"absolute"}
										bottom={"15px"}
										right={"15px"}
									>
										<Link
											href={{
												pathname: "/industries/health-care/health-care-forms",
												query: { id: item?.linkId },
											}}
										>
											<Button
												color={"#E9000E"}
												bg={"transparent"}
												border={"1px solid #EB5046"}
												borderRadius={"none"}
												fontSize={"16px"}
												w={"250px"}
												height={"50px"}
											>
												{item.text}
												<Text
													marginLeft={"0.5rem"}
													fontSize={"1.5rem"}
													mt={"0.5rem"}
													color={
														"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"
													}
												>
													<BsArrowRight />
												</Text>
											</Button>
										</Link>
									</Box>
								</Box>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>

				{/**********************web design************************************/}

				<Box
					alignItems={"center"}
					display={{ base: "none", md: "block", lg: "block" }}
				>
					<Grid
						gridTemplateColumns={{
							base: "none",
							lg: "1fr 1fr",
							md: "1fr 1fr",
							sm: "none",
						}}
						justifyContent={"center"}
						flexDir={{ base: "column", lg: "row" }}
						gridGap={"1rem"}
						alignItems={"center"}
					>
						{consultingOption.map((item, index) => {
							return (
								<Box
									key={"index"}
									height={"30rem"}
									width={"281px"}
									bg={"rgba(255, 255, 255, 0.002);"}
									boxShadow={" 0px 2px 20px rgba(0, 0, 0, 0.05)"}
									border={"1px solid #DADFE3"}
									boxSizing={"border-box"}
									position={"relative"}
								>
									<Box
										height={"10px"}
										width={"281px"}
										mb={"1rem"}
										bg={" #E9000E"}
									></Box>
									<Text
										fontSize={"20px"}
										fontWeight={"700"}
										color={" #3B3C3D"}
										width={"238px"}
										m={"auto"}
										textAlign={"center"}
									>
										{item.title}
									</Text>

									<UnorderedList pl={4} spacing={2} paddingBlock={"1rem"}>
										{item.list.map((item, index) => {
											return <ListItem key={index}>{item}</ListItem>;
										})}
									</UnorderedList>

									<Box
										m={"auto"}
										width={"90%"}
										position={"absolute"}
										bottom={"15px"}
										right={"15px"}
									>
										<Link
											href={{
												pathname: "/industries/health-care/health-care-forms",
												query: { id: item?.linkId },
											}}
										>
											<Button
												color={"#E9000E"}
												bg={"transparent"}
												border={"1px solid #EB5046"}
												borderRadius={"none"}
												fontSize={"16px"}
												w={"250px"}
												height={"50px"}
											>
												{item.text}
												<Text
													marginLeft={"0.5rem"}
													fontSize={"1.5rem"}
													mt={"0.5rem"}
													color={
														"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"
													}
												>
													<BsArrowRight />
												</Text>
											</Button>
										</Link>
									</Box>
								</Box>
							);
						})}
					</Grid>
				</Box>
			</Box>
		</>
	);
}

export default ConsultingOptions;
