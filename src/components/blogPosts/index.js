import React, { useEffect, useState } from "react";
import { Box, Card, Heading, Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import styled from "styled-components";
import { AiOutlineRightCircle } from "react-icons/ai";
import Link from "next/link";
import { blogA, blogB } from "../../../public/assets/blog";
import { breakpoints } from "../../../styles/theme";

const BlogPosts = ({ blogs }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const renderText = (text, maxLength) => {
		if (text.length <= maxLength) {
			return text;
		}

		return text.slice(0, maxLength) + "...";
	};

	return (
		<>
			<Container>
				<Text
					textTransform={"uppercase"}
					fontWeight={"400"}
					fontSize="1rem"
					color="#636363"
				>
					Blog Posts
				</Text>
				<Heading>Top Insights</Heading>

				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"start"}
					mt={"1.5rem"}
				>
					{isMounted && (
						<Swiper
							modules={[Pagination, Scrollbar, A11y]}
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
								"--swiper-pagination-bullet-inactive-color": "#D9D9D9",
								"--swiper-pagination-bullet-inactive-opacity": "1",
								"--swiper-pagination-bullet-size": "10px",
								" --swiper-pagination-bullet-width": "15px",
								"--swiper-pagination-bullet-height": "8px",
								"--swiper-pagination-bullet-horizontal-gap": "12px",
								"--swiper-pagination-bullet-vertical-gap": "10px",
								"--swiper-pagination-bullet-border-radius": "0px",
							}}
							className={"swiper"}
						>
							{blogs.slice(0, 3).map((item) => (
								<SwiperSlide key={item.id}>
									<Card
										m="9px"
										mb={"2rem"}
										h={{ base: "490px", lg: "530px" }}
										boxShadow="0px 10px 20px rgba(165, 163, 174, 0.4)"
										display="flex"
										justifyContent="start"
										alignItems={"start"}
										flexDir="column"
										as={Link}
										href={`/blog/${item?.id}/${item?.url_slug?.replace(
											/_/g,
											"-"
										)}`}
									>
										<Image
											src={item?.featured_image || blogA}
											alt="blog posts"
											className="blog-image"
										/>
										<Text
											fontSize={"xs"}
											px={"5"}
											pt={"1"}
											textAlign={"start"}
											mt={{ base: ".8rem", md: "0", lg: "0" }}
										>
											Technology
										</Text>
										<Text
											textAlign={"start"}
											fontWeight="700"
											fontSize={{ base: "15px", lg: "16px" }}
											lineHeight="30px"
											m={"10px"}
										>
											{item?.title}
										</Text>
										<Text
											fontWeight="400"
											fontSize={{ base: "12.6px", lg: "14px" }}
											lineHeight="170%"
											textAlign={"start"}
											color="#000000"
											mx={"1rem"}
										>
											{item?.title}
										</Text>
										<FooterIcon>
											<div />
											<AiOutlineRightCircle />
										</FooterIcon>
									</Card>
								</SwiperSlide>
							))}
						</Swiper>
					)}
				</Box>
			</Container>
		</>
	);
};

export default BlogPosts;

const Container = styled.div`
	padding: 0 0.6rem;
	margin-bottom: 2rem;

	.blog-image {
		width: 100%;
		height: 247px;
		border-radius: 12.47px;
		border: none;

		padding: 10px;

		${breakpoints.sm} {
			width: 100%;
			height: 200px;
			padding: 0;
		}
	}

	.swiper-button-prev {
		display: none;
	}

	.swiper-button-next {
		display: none;
	}
`;

const FooterIcon = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-block-end: 1.5rem;
	margin-top: 0.5rem;

	svg {
		font-size: 34px;
		position: absolute;

		bottom: 10px;
		right: 10px;

		${breakpoints.sm} {
			font-size: 30px;
		}
	}
`;
