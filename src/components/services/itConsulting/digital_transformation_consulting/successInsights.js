import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";
import { customerInsights } from "./data";
import Image from "next/image";

const SuccessInsights = () => {
	return (
		<>
			<Box
				mt={"3rem"}
				mb={"5rem"}
				border={"1px solid #DADFE3"}
				bg={"#fff"}
				py={6}
			>
				<Box>
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
							marginBottom: "-2rem",
						}}
					>
						{customerInsights.map((item, index) => (
							<SwiperSlide key={index}>
								<Flex
									flexDirection={{ lg: "row", base: "column-reverse" }}
									gap={4}
									mb={12}
								>
									<Flex flex={1}>
										<Image
											src={item.image}
											alt="CSimage"
											style={{ width: "100%", height: "100%" }}
										/>
									</Flex>
									<Flex
										flex={2}
										flexDir={"column"}
										textAlign={{
											base: "center",
											md: "left",
										}}
										px={{
											base: "1rem",
											md: "1rem",
											lg: "0",
										}}
									>
										<Heading
											as={"h2"}
											fontSize={{
												base: "1rem",
												md: "1.3rem",
											}}
										>
											{item.title}
										</Heading>
										<Box my={4}>
											<Text fontWeight={700}>
												{item.subtitle1}{" "}
												<Text fontWeight={"normal"} as={"span"}>
													{item.text1}
												</Text>
											</Text>
										</Box>
										<Box gap={1}>
											<Text fontWeight={700}>
												{item.subtitle2}{" "}
												<Text fontWeight={"normal"} as={"span"}>
													{item.text2}
												</Text>
											</Text>
										</Box>
									</Flex>
								</Flex>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Box>
		</>
	);
};

export default SuccessInsights;
