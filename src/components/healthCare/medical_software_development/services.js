import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import HeadingTwo from "./heading";
import {
	MedicalDeviceData,
	pharmaceuticalData,
	ServicesOfferCardData,
	servicesOffers,
} from "./data";
import Image from "next/image";
import Link from "next/link";
import BtnArrow from "../../../../public/assets/medicalSoftwarePage/buttonArrow.svg";
import ListIcon from "../../../../public/assets/medicalSoftwarePage/ListIcon.svg";
import ServicesOffersCard from "./servicesOffersCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";
import { ItAssesmentData } from "../../services/itConsulting/big_data/data";
import ListImg from "../../../../public/assets/consulting/big_data/list.svg";

function Services() {
	return (
		<>
			<HeadingTwo title={"Software Development Services Offers"} />

			<Text
				fontWeight="400"
				fontSize={{ lg: "23px", base: "16px" }}
				// my="20px"
				textAlign={{ base: "center", lg: "left" }}
				lineHeight={"36px"}
			>
				At Tanta, Healthcare software development is needed to create medical
				apps for care delivery and healthcare process optimization . We cover
				the full range of processes needed to deliver efficient medical
				solutions loved by patients and medical staff.
			</Text>

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
					{servicesOffers.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<Box
									mb={{ base: "30px", md: "0" }}
									bg={"#FFFDF5"}
									p={"10px 0px"}
									border={"0.93px solid #DADFE3"}
									display={"flex"}
									flexDir="column"
									alignItems={"center"}
									justifyContent={"space-between"}
									gap={"15px"}
									key={index}
									boxShadow={
										" rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;"
									}
								>
									<Image src={item.img} alt={"icons"} />
									<Text
										fontWeight={"Bold"}
										textAlign={"center"}
										fontSize={"16px"}
									>
										{item.heading}
									</Text>
									<Text p={"0 10px"} fontSize={"14px"} mb={"20px"}>
										{item.details}
									</Text>
									<Link
										href={{
											pathname: "/industries/health-care/health-care-forms",
											query: { id: item?.linkId },
										}}
									>
										<Button
											display={"flex"}
											gap={"10px"}
											colorScheme="red"
											variant="outline"
											fontSize={"13px"}
											borderRadius={"0"}
										>
											I’m interested <Image src={BtnArrow} alt={"arrow"} />
										</Button>
									</Link>
								</Box>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Box>

			<Flex display={{ base: "none", md: "flex" }} gap={"15px"} mt={"40px"}>
				{servicesOffers.map((item, index) => {
					return (
						<Box
							bg={"#FFFDF5"}
							p={"10px 0px"}
							border={"0.93px solid #DADFE3"}
							display={"flex"}
							flexDir="column"
							alignItems={"center"}
							justifyContent={"space-between"}
							gap={"15px"}
							key={index}
							boxShadow={
								" rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;"
							}
						>
							<Image src={item.img} alt={"icons"} />
							<Text fontWeight={"Bold"} textAlign={"center"} fontSize={"16px"}>
								{item.heading}
							</Text>
							<Text p={"0 10px"} fontSize={"14px"} mb={"20px"}>
								{item.details}
							</Text>
							<Link
								href={{
									pathname: "/industries/health-care/health-care-forms",
									query: { id: item?.linkId },
								}}
							>
								<Button
									display={"flex"}
									gap={"10px"}
									colorScheme="red"
									variant="outline"
									fontSize={"13px"}
									borderRadius={"0"}
								>
									I’m interested <Image src={BtnArrow} alt={"arrow"} />
								</Button>
							</Link>
						</Box>
					);
				})}
			</Flex>
			<HeadingTwo title={"Software Development Services Offers"} />

			<Text
				fontWeight="400"
				fontSize={{ lg: "23px", base: "16px" }}
				// my="20px"
				textAlign={{ base: "center", lg: "left" }}
				lineHeight={"36px"}
			>
				At Tanta, Healthcare software development is needed to create medical
				apps for care delivery and healthcare process optimization . We cover
				the full range of processes needed to deliver efficient medical
				solutions loved by patients and medical staff.
			</Text>

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
					{ServicesOfferCardData.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<Box display={"flex"} justifyContent={"center"} p={"0 auto"}>
									<ServicesOffersCard
										images={item.img}
										title={item.title}
										listTexts={item.details.map((detail, i) => {
											return (
												<Flex
													alignItems={"start"}
													key={i}
													p={"0 15px"}
													mb={"10px"}
												>
													<Image
														style={{ marginTop: "6px", marginRight: "10px" }}
														src={ListIcon}
														alt={"list icon"}
													/>
													<Text>{detail}</Text>
												</Flex>
											);
										})}
										key={"index"}
									/>
								</Box>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Box>

			<Flex
				display={{ base: "none", md: "flex" }}
				flexWrap={"wrap"}
				gap={"30px"}
				mt={"30px"}
			>
				{ServicesOfferCardData.map((item, index) => {
					return (
						<ServicesOffersCard
							images={item.img}
							title={item.title}
							listTexts={item.details.map((detail, i) => {
								return (
									<Flex alignItems={"start"} key={i} p={"0 15px"} mb={"10px"}>
										<Image
											style={{ marginTop: "6px", marginRight: "10px" }}
											src={ListIcon}
											alt={"list icon"}
										/>
										<Text>{detail}</Text>
									</Flex>
								);
							})}
							key={"index"}
						/>
					);
				})}
			</Flex>

			<HeadingTwo
				title={"For medical device manufacturers and SaMD companies "}
			/>

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
					{MedicalDeviceData.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<Box display={"flex"} justifyContent={"center"} p={"0 auto"}>
									<ServicesOffersCard
										images={item.img}
										title={item.title}
										listTexts={item.details.map((detail, i) => {
											return (
												<Flex
													alignItems={"start"}
													key={i}
													p={"0 15px"}
													mb={"10px"}
												>
													<Image
														style={{ marginTop: "6px", marginRight: "10px" }}
														src={ListIcon}
														alt={"list icon"}
													/>
													<Text>{detail}</Text>
												</Flex>
											);
										})}
										key={"index"}
									/>
								</Box>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Box>

			<Flex
				display={{ base: "none", md: "flex" }}
				flexWrap={"wrap"}
				gap={"30px"}
				mt={"30px"}
			>
				{MedicalDeviceData.map((item, index) => {
					return (
						<ServicesOffersCard
							images={item.img}
							title={item.title}
							listTexts={item.details.map((detail, i) => {
								return (
									<Flex alignItems={"start"} key={i} p={"0 15px"} mb={"10px"}>
										<Image
											style={{ marginTop: "6px", marginRight: "10px" }}
											src={ListIcon}
											alt={"list icon"}
										/>
										<Text>{detail}</Text>
									</Flex>
								);
							})}
							key={"index"}
						/>
					);
				})}
			</Flex>
			<HeadingTwo
				title={"For pharmaceutical, biotech, and life science companies "}
			/>

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
					{pharmaceuticalData.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<Box display={"flex"} justifyContent={"center"} p={"0 auto"}>
									<ServicesOffersCard
										images={item.img}
										title={item.title}
										listTexts={item.details.map((detail, i) => {
											return (
												<Flex
													alignItems={"start"}
													key={i}
													p={"0 15px"}
													mb={"10px"}
												>
													<Image
														style={{ marginTop: "6px", marginRight: "10px" }}
														src={ListIcon}
														alt={"list icon"}
													/>
													<Text>{detail}</Text>
												</Flex>
											);
										})}
										key={"index"}
									/>
								</Box>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Box>

			<Flex
				display={{ base: "none", md: "flex" }}
				flexWrap={"wrap"}
				gap={"30px"}
				mt={"30px"}
			>
				{pharmaceuticalData.map((item, index) => {
					return (
						<ServicesOffersCard
							images={item.img}
							title={item.title}
							listTexts={item.details.map((detail, i) => {
								return (
									<Flex alignItems={"start"} key={i} p={"0 15px"} mb={"10px"}>
										<Image
											style={{ marginTop: "6px", marginRight: "10px" }}
											src={ListIcon}
											alt={"list icon"}
										/>
										<Text>{detail}</Text>
									</Flex>
								);
							})}
							key={"index"}
						/>
					);
				})}
			</Flex>
		</>
	);
}

export default Services;
