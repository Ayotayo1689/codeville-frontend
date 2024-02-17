import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import Image from "next/image";
import React from "react";
import { Box, Card, Text } from "@chakra-ui/react";
import { development } from "./data";
import styled from "styled-components";

const ApplicationDevelopment = () => {
	function getSlidesPerView() {
		if (typeof window !== "undefined" && window.innerWidth <= 768) {
			return 1; // Adjust the number of slides per view for mobile devices
		} else {
			return 3; // Number of slides per view for larger screens
		}
	}

	return (
		<Container>
			<Box mb="4.5rem" w={"100%"} scrollMarginTop={"150px"} id="development">
				<Text
					fontWeight="700"
					fontSize={{ base: "20px", lg: "28px" }}
					lineHeight="70px"
				>
					Application Development
				</Text>
				<Text
					fontWeight="400"
					fontSize={{ base: "16px", lg: "20px" }}
					lineHeight="170%"
					my="15px"
				>
					We design and deliver web, mobile and cloud business applications of
					different complexity and for various needs. In the process, we pay
					special attention to their flexibility, security, speed and
					integration potential.
				</Text>
				<Text
					fontWeight="400"
					fontSize={{ base: "16px", lg: "20px" }}
					lineHeight="170%"
					my="15px"
				>
					The success of our software comes from:
				</Text>
				<Box display={"flex"} justifyContent={"center"} alignItems={"start"}>
					<Swiper
						modules={[Navigation, Pagination, A11y]}
						spaceBetween={10}
						slidesPerView={1}
						breakpoints={{
							450: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 10,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 10,
							},
						}}
						navigation
						pagination={{ clickable: true }}
						style={{
							"--swiper-pagination-color": "#E9000E",
							"--swiper-navigation-size": "30px",
							"--swiper-pagination-bullet-active-color": "#E9000E",
							"--swiper-pagination-bullet-inactive-color": "#D9D9D9",
							"--swiper-pagination-bullet-inactive-opacity": "1",
							"--swiper-pagination-bullet-size": "10px",
							"--swiper-pagination-bullet-margin": "30px",
							"--swiper-pagination-bullet-horizontal-gap": "5px",
						}}
						className={"swiper"}
					>
						{development.map((item, index) => (
							<SwiperSlide key={index}>
								<Card
									p="20px 10px"
									m="9px"
									textAlign={"center"}
									boxShadow="0px 10px 20px rgba(165, 163, 174, 0.4)"
									display="flex"
									justifyContent="center"
									alignItems={"start"}
									flexDir="column"
								>
									<Image
										src={item?.image}
										alt="icons"
										style={{ alignSelf: "center" }}
									/>
									<Text
										fontWeight="700"
										fontSize="18px"
										lineHeight="30px"
										color={"#9F000A"}
										my={"10px"}
										textAlign="center"
									>
										{item?.title}
									</Text>
									<Text
										fontWeight="400"
										fontSize="14px"
										lineHeight="170%"
										textAlign="center"
										color="#000000"
									>
										{item?.text}
									</Text>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Box>
		</Container>
	);
};

export default ApplicationDevelopment;

const Container = styled.div`
	.swiper-button-prev {
		color: #e9000e;
	}

	.swiper-button-next {
		color: #e9000e;
	}
`;
