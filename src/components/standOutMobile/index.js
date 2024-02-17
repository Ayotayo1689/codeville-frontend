import Link from "next/link";
import React, { useState } from "react";
import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@chakra-ui/react";
import appRoutes from "../../utils/appRoutes";
import Image from "next/image";
import arrow from "../../../public/assets/homepage/arrow.svg";
import NoSSR from "../dataAnalytics/NoSSR";

const StandOutMobile = ({ cases }) => {
	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	return (
		<NoSSR>
			<div>
				<Box>
					{/*<MobileWrapper>*/}
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
						{cases.map((offer, index) => (
							<SwiperSlide key={index}>
								<Flex
									flexDir={"column"}
									bg={"white"}
									gap={"15px"}
									p={"10px"}
									mb={"40px"}
									W={"100%"}
									h={"fit-content"}
									minH={"500px"}
									position={"relative"}
								>
									<Box
										bgImage={`url('${offer.image}')`}
										bgSize="cover"
										bgPosition="center"
										bgRepeat="no-repeat"
										w={"100%"}
										h={"40vh"}
									></Box>
									<Text color={"#444444"} fontWeight={"700"} fontSize={"20px"}>
										{offer.title}
									</Text>
									<Text
										pb={"15px"}
										mb={"30px"}
										fontSize={"16px"}
										color={"#444444"}
									>
										{offer.long_description.slice(0, 120).trim() + "..."}
									</Text>
									<Link
										href={`${appRoutes.caseStudies}${offer?.slug?.replace(
											/_/g,
											"-"
										)}/${offer.id}`}
									>
										<Button
											position={"absolute"}
											mt={"30px"}
											bottom={"20px"}
											p={"15px 25px"}
											left={"10px"}
											bg={"red"}
											color={"white"}
										>
											Learn more <Image src={arrow} alt={"arrow"} />
										</Button>
									</Link>
								</Flex>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</div>
		</NoSSR>
	);
};

export default StandOutMobile;
