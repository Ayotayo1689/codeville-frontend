import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";
import styled from "styled-components";
import { benefitsCard } from "./data";
import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";

function BenefitsMobile() {
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
						{benefitsCard.map((item, index) => (
							<SwiperSlide key={index}>
								<Box
									height={"291px"}
									width={{ base: " 100%", lg: "375px" }}
									background={"transparent"}
									mb={"3rem"}
									border={"1px solid rgba(0, 0, 0, 0.50)"}
									borderRadius={"8px"}
								>
									<Box ml={"1rem"} pt={"1rem"}>
										<Center>
											<Image
												src={item?.image}
												alt="icons"
												style={{
													width: "65px",
													height: "65px",
													marginTop: "1rem",
													marginBottom: "1rem",
												}}
											/>
										</Center>
										<Text
											color={"#303030"}
											fontSize={"20px"}
											fontWeight={"500"}
											ml={"auto"}
											mr={"auto"}
											textAlign={"center"}
										>
											{item.title}
										</Text>
										<Box>
											<Text
												color={" #3A393A"}
												fontSize={"15px"}
												mt={"1rem"}
												width={{ base: "300px", lg: "315px" }}
												textAlign={"center"}
												ml={"auto"}
												mr={"auto"}
											>
												{item.details}
											</Text>
										</Box>
									</Box>
								</Box>
							</SwiperSlide>
						))}
					</Swiper>
				</MobileWrapper>
			</Box>
		</>
	);
}
export default BenefitsMobile;

const MobileWrapper = styled.div`
	padding: 2rem 0;
`;
