import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import Image from "next/image";
import React from "react";
import { Box, Card, Text } from "@chakra-ui/react";
import { management } from "./data";
import styled from "styled-components";

const ApplicationManagement = () => {
	function getSlidesPerView() {
		if (typeof window !== "undefined" && window.innerWidth <= 768) {
			return 1; // Adjust the number of slides per view for mobile devices
		} else {
			return 3; // Number of slides per view for larger screens
		}
	}

	return (
		<Container>
			<Box mb="4.5rem" w={"100%"} scrollMarginTop={"150px"} id="management">
				<Text
					fontWeight="700"
					fontSize={{ base: "20px", lg: "28px" }}
					lineHeight="70px"
				>
					Application Management
				</Text>
				<Text
					fontWeight="400"
					fontSize={{ base: "16px", lg: "20px" }}
					lineHeight="170%"
					my="15px"
				>
					We can take responsibility for the management of your applications
					ensuring its increased business flexibility and optimized IT costs.
					With latest process management practices, our team will maintain and
					monitor your application servers and databases taking care of their
					enhanced performance, sustainability, stability and keeping them in
					sync with current business needs.
				</Text>
				<Text
					fontWeight="400"
					fontSize={{ base: "16px", lg: "20px" }}
					lineHeight="170%"
					my="15px"
				>
					The list of our application management services includes but is not
					limited to:
				</Text>

				<Swiper
					modules={[Navigation, Pagination, A11y]}
					spaceBetween={1}
					slidesPerView={1}
					breakpoints={{
						450: {
							slidesPerView: 1,
							spaceBetween: 10,
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
					{management.map((item, index) => (
						<SwiperSlide key={index}>
							<Card
								p="20px 10px"
								m="9px 0 9px 9px"
								w={{ base: "100%", md: "100%", lg: "90%" }}
								textAlign={"center"}
								boxShadow="0px 10px 20px rgba(165, 163, 174, 0.4)"
								display="flex"
								justifyContent="center"
								alignItems={"start"}
								flexDir="column"
								mb={"3rem"}

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
		</Container>
	);
};

export default ApplicationManagement;

const Container = styled.div`
	.swiper-button-prev {
		color: #e9000e;
		//margin-right: 6rem;
	}

	.swiper-button-next {
		color: #e9000e;
	}
`;
