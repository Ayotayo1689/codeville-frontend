import React from "react";
import styled from "styled-components";
import { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Flex, Text } from "@chakra-ui/react";
import { logisticsProjects } from "../data";
import { breakpoints } from "../../../../../styles/theme";
import Image from "next/image";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { SectionHeading } from "./index";

const ProjectsSlider = () => {
	return (
		<Container>
			<Box w={{ base: "100%", lg: "100%", xl: "70%" }}>
				<SectionHeading
					heading={
						"Tanta's Selected Transportation \n" + "and Logistics Projects"
					}
				/>
			</Box>

			<Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				style={{
					"--swiper-pagination-color": "#E9000E",
					"--swiper-navigation-size": "30px",
					"--swiper-pagination-bullet-active-color": "#E9000E",
					"--swiper-pagination-bullet-inactive-color": "#D9D9D9",
					"--swiper-pagination-bullet-inactive-opacity": "1",
					"--swiper-pagination-bullet-size": "8px",
					"--swiper-pagination-bullet-spacing": "10px",
					"--swiper-pagination-bullet-border-radius": "0",
					"--swiper-pagination-bullet-horizontal-gap": "5px",
				}}
				className={"swiper"}
			>
				{logisticsProjects.map((item) => (
					<SwiperSlide key={item?.id}>
						<SlideCard>
							<InfoContainer>
								<ImageContainer>
									<Image
										src={item?.image}
										alt={"fleets"}
										width={"100%"}
										height={"100%"}
										className={"image"}
									/>
								</ImageContainer>
							</InfoContainer>

							<TestimonyContainer>
								<Text fontSize="1.3rem" fontWeight={700} lineHeight="170%">
									{item?.title}
								</Text>
								{item?.items.map((list, index) => (
									<Flex gap={2} key={index} mt={2}>
										<Box mt="10px">
											<RiCheckboxBlankFill color="red" size={10} />
										</Box>
										<Text fontSize="18px" lineHeight="170%" color="#333">
											{list}
										</Text>
									</Flex>
								))}
								<Text fontSize="18px" lineHeight="170%" mt={2}>
									{item?.benefit()}
								</Text>
							</TestimonyContainer>
						</SlideCard>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};
export default ProjectsSlider;

const Container = styled.div`
	margin-top: 4rem;
	width: 100%;

	${breakpoints.sm} {
		margin: 2rem 0;
	}

	.swiper-button-prev {
		color: #abb1b4;
	}

	.swiper-button-next {
		color: #abb1b4;
	}

	.summary {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;

		${breakpoints.sm} {
			margin-top: 2rem;
		}

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -0.5rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}
		}

		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;

			span {
				color: #e9000e;
			}

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}
		}
	}
`;

const SlideCard = styled.div`
	background-color: #fff;
	border: 1px solid #a7a7a7;
	padding: 2rem 1rem;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	width: 89%;
	margin: 0 auto 3rem auto;
	display: flex;
	gap: 1rem;
	flex-direction: row;

	@media (max-width: 1200px) {
		flex-direction: column-reverse;
		gap: 1rem;
		width: 85%;

		.image {
			width: 1000px;
			height: 100%;
		}
	}

	${breakpoints.sm} {
		padding: 1rem;
		width: 78%;
	}
`;

const TestimonyContainer = styled.div`
	margin-bottom: 1rem;
	width: 70%;

	@media (max-width: 1200px) {
		width: 100%;
	}

	${breakpoints.sm} {
		padding: 0;
	}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 1200px) { {
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
	margin-right: 0.2rem;
	@media (max-width: 1200px) {
		width: 100%;
	}
`;
