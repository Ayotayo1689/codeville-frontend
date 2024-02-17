import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ItAssesmentData } from "./data";
import ListImg from "../../../../../public/assets/consulting/big_data/list.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";
import { OptionsCardData } from "../healthcare_it_support/data";
import OptionsCard from "../healthcare_it_support/OptionsCard";

const IncludeCard = () => {
	return (
		<Box>
			<Box display={{ base: "block", md: "none" }}>
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
					{ItAssesmentData.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<Flex
									m={"0 auto"}
									border={"1px solid rgba(218, 223, 227, 1)"}
									p={"30px 10px 20px 10px"}
									gap={"14px"}
									alignItems={"center"}
									flexDir={"column"}
									maxW={"400px"}
									minH={"420px"}
								>
									<Image src={item.img} alt={"image"} />
									<Text fontSize={"17px"} fontWeight={"700"}>
										{item.title}
									</Text>
									<Box>
										{item.details.map((text, num) => {
											return (
												<Flex key={num} alignItems={"start"}>
													{" "}
													<Image
														src={ListImg}
														alt={"hello"}
														style={{ margin: "8px 10px 0 0 " }}
													/>
													<Text mb={"10px"}>{text}</Text>
												</Flex>
											);
										})}
									</Box>
								</Flex>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Box>

			<Flex
				display={{ base: "none", md: "flex" }}
				w={{ base: "100%", md: "110%" }}
				flexWrap={"wrap"}
				gap={"30px"}
				mb={"40px"}
			>
				{ItAssesmentData.map((item, index) => {
					return (
						<Flex
							key={index}
							border={"1px solid rgba(218, 223, 227, 1)"}
							p={"30px 10px 20px 10px"}
							gap={"14px"}
							alignItems={"center"}
							flexDir={"column"}
							maxW={"400px"}
							minH={"200px"}
						>
							<Image src={item.img} alt={"image"} />
							<Text fontSize={"17px"} fontWeight={"700"}>
								{item.title}
							</Text>
							<Box>
								{item.details.map((text, num) => {
									return (
										<Flex key={num} alignItems={"start"}>
											{" "}
											<Image
												src={ListImg}
												alt={"hello"}
												style={{ margin: "8px 10px 0 0 " }}
											/>
											<Text mb={"10px"}>{text}</Text>
										</Flex>
									);
								})}
							</Box>
						</Flex>
					);
				})}
			</Flex>
		</Box>
	);
};

export default IncludeCard;
