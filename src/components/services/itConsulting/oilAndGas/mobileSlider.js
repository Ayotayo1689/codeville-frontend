import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";
import styled from "styled-components";
import { business } from "./data";
import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { BsFillSquareFill } from "react-icons/bs";

function MobileSlider() {
	return (
		<>
			<Box display={{ base: "block", md: "none", lg: "none" }}>
				<MobileWrapper>
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
						{business.map((item, index) => (
							<SwiperSlide
								key={index}
								display={"flex"}
								justifyContent={"center"}
							>
								<Box
									height={"27rem"}
									width={{ base: "100%", md: "25.938rem", lg: "25.938rem" }}
									bg={"rgba(255, 255, 255, 0.002);"}
									boxShadow={" 0px 2px 20px rgba(0, 0, 0, 0.05)"}
									border={"1px solid #DADFE3"}
									boxSizing={"border-box"}
									mb={"3rem"}
								>
									<Box
										height={"10px"}
										width={{ base: "100%", md: "25.938rem", lg: "25.938rem" }}
										mb={"1rem"}
										bg={" #E9000E"}
									></Box>
									<Box
										width={{ base: "45px", md: "94.818px", lg: "94.818px" }}
										height={{ base: "45px", md: "85.337px", lg: "85.337px" }}
										margin={"auto"}
										position={"relative"}
									>
										<Image src={item?.img} alt="icons" />
									</Box>
									<Text
										fontSize={{ base: "14px", md: "17px", lg: "17px" }}
										fontWeight={"700"}
										color={" #3B3C3D"}
										mt={"2rem"}
										textAlign={"center"}
										w={{ base: "17.938rem", md: "22.688rem", lg: "22.688rem" }}
									>
										{item?.title}
									</Text>

									<Text fontSize={"12px"} w={"21rem"} mt={" 1rem"} ml={"1rem"}>
										{item?.detail}
									</Text>

									<List
										mt={"1rem"}
										w={{ base: "17.938rem", md: "22.688rem", lg: "22.688rem" }}
									>
										{item.content.map((item) => {
											return (
												<ListItem pl={4} key={"index"}>
													<Flex flexGrow={"1"}>
														<ListIcon
															as={BsFillSquareFill}
															color="red"
															fontSize={"0.5rem"}
															mt={"0.3rem"}
														/>
														<Text
															fontSize={{
																base: "11px",
																md: "12.642px",
																lg: "12.642px",
															}}
														>
															{item}
														</Text>
													</Flex>
												</ListItem>
											);
										})}
									</List>
								</Box>
							</SwiperSlide>
						))}
					</Swiper>
				</MobileWrapper>
			</Box>
		</>
	);
}

export default MobileSlider;

const MobileWrapper = styled.div`
	padding: 2rem 0;
`;
