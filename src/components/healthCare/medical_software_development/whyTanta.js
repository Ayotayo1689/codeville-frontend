import React from "react";
import HeadingTwo from "./heading";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { customersThatBenefit, servicesOffers, starCardData } from "./data";
import Image from "next/image";
import StarCard from "./starCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";
import Link from "next/link";
import BtnArrow from "../../../../public/assets/medicalSoftwarePage/buttonArrow.svg";

function WhyTanta() {
	return (
		<>
			<Box w={"100%"} m={"0px 0 30px 0"}>
				<Text
					fontWeight={"700"}
					fontSize={{ base: "15px", md: "29px" }}
					maxWidth={"800px"}
				>
					Why Tanta medical software stand out
				</Text>
				<Box maxWidth={"120px"} bg={"red"} height={"4px"}></Box>
			</Box>

			<Box justifyContent={"center"} display={{ base: "flex", md: "none" }}>
				{/*<MobileWrapper>*/}
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
					{starCardData.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<Box w={"100%"}>
									<Box m={"0 auto"}>
										<StarCard
											key={index}
											title={item.title}
											text={item.texts}
										/>
									</Box>
								</Box>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Box>

			<Flex
				display={{ base: "none", md: "flex" }}
				h={"fit-content"}
				alignItems={"center"}
				gap={"20px"}
				flexWrap={"wrap"}
			>
				{starCardData.map((item, index) => {
					return <StarCard key={index} title={item.title} text={item.texts} />;
				})}
			</Flex>
		</>
	);
}

export default WhyTanta;
