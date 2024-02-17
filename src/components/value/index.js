import React from "react";
import { Box, Button, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import leftArrow from "../../../public/assets/caseStudyNew/leftArrow.png";
import rightArrow from "../../../public/assets/caseStudyNew/rightArrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";
import { caseStudy } from "./data";
import appRoutes from "../../utils/appRoutes";

const Value = () => {
	return (
		<>
			<Box
				mt={{lg:"7rem", base:"0rem"}}
				mb={{lg:"7rem", base:"0rem"}}
				maxW={"7wl"}
				px={{ lg: "5rem", base: "0rem" }}
			>
				<Text
					display={{ lg: "none", base: "block" }}
					fontWeight="400"
					color={"#636363"}
					fontSize={{ md: "16px", base: "15px" }}
					my="20px"
					lineHeight={"22px"}
					letterSpacing="0.085em"
					textTransform="uppercase"
				>
					case studies
				</Text>
				<Heading
					display={{ lg: "none", base: "block" }}
					fontWeight="600"
					fontSize={{ md: "27px", base: "25px" }}
					textTransform="capitalize"
					color="#444444"
					lineHeight={"26px"}
					mb={"1.5rem"}
				>
					projects that makes us standout
				</Heading>
				<Flex justifyContent={"center"} alignItems={"center"} gap={"1rem"}>
					{/*<Box display={{lg:"block", base:"none"}} ml={"-5%"}>*/}
					{/*    <Image src={leftArrow} alt="left" />*/}
					{/*</Box>*/}
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
						{caseStudy.map((item, index) => (
							<SwiperSlide key={index}>
								<Flex
									flexDirection={{ lg: "row", base: "column-reverse" }}
									justifyContent={"center"}
									alignItems={"center"}
								>
									<Box
										display={"flex"}
										gap={"1rem"}
										justifyContent={{ lg: "center", base: "flex-start" }}
										alignItems={"flex-start"}
										padding={{
											lg: "30px 45px  30px 45px",
											base: "70px 40px 0 10px",
										}}
										flexDir={"column"}
										borderRadius={{
											lg: "20px 0px 0px 20px",
											base: "0px 0px 20px 20px",
										}}
										bg={"#fff"}
										height={
											index === 1
												? { lg: "443px", sm: "440px", base: "480px" }
												: { lg: "443px", sm: "440px", base: "350px" }
										}
									>
										<Text
											width={{ lg: "100%", base: "105%" }}
											mt={{ lg: "0", base: "-2rem" }}
											lineHeight={{ lg: "33.55px", base: "28px" }}
											fontSize={{ lg: "26px", md: "24px", base: "23px" }}
											fontWeight={700}
										>
											{item.heading}
										</Text>
										<Text
											width={
												index === 1
													? { lg: "100%", sm: "100%", base: "100%" }
													: { lg: "100%", sm: "100%", base: "100%" }
											}
											lineHeight={"20.4px"}
											fontSize={{
												lg: "16px",
												md: "16px",
												sm: "16px",
												base: "14px",
											}}
											fontWeight={100}
										>
											{item.content}
										</Text>
										<Text
											width={
												index === 1
													? { lg: "100%", sm: "100%", base: "100%" }
													: { lg: "100%", sm: "100%", base: "100%" }
											}
											fontSize={{
												lg: "15px",
												sm: "16px",
												md: "16px",
												base: "14px",
											}}
											lineHeight={"20.1px"}
											fontWeight={100}
										>
											<chakra.span fontWeight={700}>{item.span}</chakra.span>{" "}
											{item.subContent}
										</Text>
										<Link href={appRoutes.contactUs}>
											<Button
												color={"#fff"}
												padding={"0.4rem 1rem"}
												fontSize={{
													lg: "15px",
													sm: "16px",
													md: "16px",
													base: "14px",
												}}
												bg={" #AC2121"}
												borderRadius={0}
											>
												Talk to an expert
											</Button>
										</Link>
									</Box>
									<Image
										src={item.image}
										alt="CSimage"
										width={652}
										height={443}
									/>
								</Flex>
							</SwiperSlide>
						))}
					</Swiper>
					{/*<Box display={{lg:"block", base:"none"}}>*/}
					{/*    <Image src={rightArrow} alt="right" />*/}
					{/*</Box>*/}
				</Flex>
			</Box>
		</>
	);
};

export default Value;
