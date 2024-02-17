import React, { useState } from "react";
import styled from "styled-components";
import { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { breakpoints } from "../../../../styles/theme";

const DataTestimonial = ({ testimonials }) => {
	const [showMore, setShowMore] = useState(false);

	const toggleShowMore = () => {
		setShowMore(!showMore);
	};

	const renderText = (text, maxLength) => {
		if (text.length <= maxLength || showMore) {
			return text;
		}

		return text.slice(0, maxLength) + "...";
	};

	return (
		<Container>
			<div className="summary">
				<h2>CUSTOMER REVIEWS</h2>
				<h3>See What our clients are saying</h3>
			</div>
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
					"--swiper-pagination-bullet-size": "10px",
					"--swiper-pagination-bullet-horizontal-gap": "5px",
				}}
				className={"swiper"}
			>
				{testimonials.map((slide, index) => (
					<SwiperSlide key={index}>
						<SlideCard>
							<TestimonyContainer>
								<TestimonyText>
									{renderText(slide?.comment, 450)}
									{slide?.comment.length > 450 && (
										<button
											onClick={toggleShowMore}
											style={{
												color: "#aa0000",
												fontWeight: "600",
												fontSize: "16px",
												lineHeight: "170%",
												letterSpacing: "0.085em",
												textTransform: "capitalize",
												cursor: "pointer",
												fontStyle: "italic",
												marginLeft: showMore ? "0.5rem" : "0",
											}}
										>
											{showMore ? "Show less" : "Read more"}
										</button>
									)}
								</TestimonyText>
							</TestimonyContainer>
							<Divider />
							<InfoContainer>
								<ImageContainer>
									<Image
										src={slide?.profile_image}
										alt={slide.name}
										width={"108px"}
										height={"108px"}
										borderRadius="50%"
									/>
								</ImageContainer>
								<div>
									<Name>{slide?.name}</Name>
									<Position>{slide?.company}</Position>
								</div>
							</InfoContainer>
						</SlideCard>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};
export default DataTestimonial;

const Container = styled.div`
	margin-top: 4rem;
	width: 100%;

	${breakpoints.sm} {
		margin: 2rem 0;
	}

	.swiper-button-prev {
		color: #e9000e;
	}

	.swiper-button-next {
		color: #e9000e;
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
	border-radius: 10px;
	padding: 2rem 1rem;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	width: 89%;
	margin: 2rem auto 4rem auto;
	display: flex;
	gap: 1rem;
	flex-direction: row;

	@media (max-width: 1200px) {
		flex-direction: column-reverse;
		gap: 1rem;
		width: 85%;
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

const TestimonyText = styled.p`
	font-size: 14px;
	font-weight: 400;
	color: #636363;
	font-style: italic;
`;

const Divider = styled.div`
	height: 100px;
	width: 0.596584px;
	background-color: rgba(0, 0, 0, 0.3);
	margin: 0.6rem 0 0 0;

	@media (max-width: 1200px) {
		display: none;
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
`;

const Image = styled.img`
	border-radius: 50%;
`;

const Name = styled.p`
	font-size: 15px;
	font-weight: 600;
	color: #444444;
	margin-bottom: 0.5rem;
`;

const Position = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 170%;
	color: #636363;
`;
