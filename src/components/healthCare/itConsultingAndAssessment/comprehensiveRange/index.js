import React from "react";
import {
	Text,
	Box,
	Grid,
	ListItem,
	ListIcon,
	List,
	Flex,
} from "@chakra-ui/react";
import { range } from "../data";
import { BsArrowRight, BsFillSquareFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";

function ComprehensiveRange() {
	return (
		<>
			<Box overflow={{ base: "hidden", md: "visible", lg: "visible" }}>
				<Text
					fontSize={{ base: "18px", md: "32px", lg: "32px" }}
					textAlign={{ base: "center", md: "left", lg: "left" }}
					fontWeight={"700"}
					mt={"3rem"}
					borderBottom={"1rem"}
					color={"#222222"}
					width={{ base: "100%", md: "575px", lg: "675px" }}
				>
					Our comprehensive range of healthcare IT service
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
				<Text
					width={{ base: "100%", md: "730px", lg: "730px" }}
					fontSize={{ base: "12px", md: "18px", lg: "18px" }}
					textAlign={{ base: "center", md: "left", lg: "left" }}
					fontWeight={"400"}
					color={"#2B2C2D"}
					mb={{ base: "1rem", md: "0", lg: "0" }}
				>
					Tanta provides healthcare IT services to optimize resource allocation,
					ensure data integrity, and enhance security. Our consultants
					specialize in advanced technologies like AI, IoT, and blockchain,
					enabling us to deliver innovative solutions tailored to your needs.
					Whether you need to implement new software or improve existing
					systems, we are here to support you in achieving your healthcare IT
					goals.
				</Text>

				<Box display={{ base: "block", md: "none", lg: "none" }}>
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
						{range.map((item, index) => (
							<SwiperSlide
								key={index}
								display={"flex"}
								justifyContent={"center"}
							>
								<Box
									height={"500px"}
									width={"300px"}
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

									<Box
										w={{ base: "60px", md: "90px", lg: "90px" }}
										height={"90px"}
										m={"auto"}
										position={"relative"}
										// top={"2rem"}
									>
										<Image src={item?.img} alt="icons" />
									</Box>
									<Text
										fontSize={"14px"}
										fontWeight={"700"}
										color={" #3B3C3D"}
										mt={"2rem"}
										textAlign={"center"}
										w
									>
										{item.title}
									</Text>

									<Text mt={"2rem"} pl={4} fontSize={"13px"}>
										{item.details}
									</Text>

									<List spacing={2} mt={"1rem"}>
										{item.content.map((item, index) => {
											return (
												<ListItem pl={4} key={"index"}>
													<Flex flexGrow={"1"}>
														<ListIcon
															as={BsFillSquareFill}
															color="red"
															fontSize={"0.5rem"}
															mt={"0.5rem"}
														/>
														<Text fontSize={"12px"} w={"80%"}>
															{item}
														</Text>
													</Flex>
												</ListItem>
											);
										})}
									</List>

									<Box
										position={"absolute"}
										height={"50px"}
										bottom={"-20px"}
										right={"20px"}
									>
										<Link href={item.link}>
											<Flex color={"#E9000E"}>
												<Text fontSize={"12px"} fontWeight={"600"}>
													{item.text}
												</Text>

												<Text
													marginLeft={"0.5rem"}
													fontSize={"1rem"}
													mt={"0.1rem"}
												>
													<BsArrowRight />
												</Text>
											</Flex>
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
					mt={"2rem"}
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
						{range.map((item, index) => {
							return (
								<Box
									key={"index"}
									height={{ base: "100%", md: "600px", lg: "550px" }}
									width={{ base: "100%", md: "350px", lg: "400px" }}
									bg={"rgba(255, 255, 255, 0.002);"}
									boxShadow={" 0px 2px 20px rgba(0, 0, 0, 0.05)"}
									border={"1px solid #DADFE3"}
									boxSizing={"border-box"}
									position={"relative"}
								>
									<Box
										height={"10px"}
										width={"100%"}
										mb={"1rem"}
										bg={" #E9000E"}
									></Box>

									<Box
										w={{ base: "60px", md: "70px", lg: "90px" }}
										height={"90px"}
										m={"auto"}
										position={"relative"}
									>
										<Image src={item?.img} alt="icons" />
									</Box>
									<Text
										fontSize={{ base: "17px", md: "15px", lg: "17px" }}
										fontWeight={"700"}
										color={" #3B3C3D"}
										mt={"2rem"}
										textAlign={"center"}
										w={{ base: "", md: "90%", lg: "" }}
									>
										{item.title}
									</Text>

									<Text mt={"2rem"} pl={4}>
										{item.details}
									</Text>

									<List
										spacing={2}
										mt={"1rem"}
										w={{ base: "", md: "90%", lg: "" }}
									>
										{item.content.map((item, index) => {
											return (
												<ListItem pl={4} key={"index"}>
													<Flex flexGrow={"1"}>
														<ListIcon
															as={BsFillSquareFill}
															color="red"
															fontSize={"0.5rem"}
															mt={"0.5rem"}
														/>
														<Text>{item}</Text>
													</Flex>
												</ListItem>
											);
										})}
									</List>

									<Box
										position={"absolute"}
										height={"50px"}
										bottom={"-20px"}
										right={"20px"}
									>
										<Link href={item.link}>
											<Flex color={"#E9000E"}>
												<Text fontSize={"12px"} fontWeight={"600"}>
													{item.text}
												</Text>

												<Text
													marginLeft={"0.5rem"}
													fontSize={"1rem"}
													mt={"0.1rem"}
												>
													<BsArrowRight />
												</Text>
											</Flex>
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
export default ComprehensiveRange;
