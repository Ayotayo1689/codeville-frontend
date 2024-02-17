import { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";
import { Image } from "@chakra-ui/image";

const TestimonialsSlider = () => {
	const slideData = [
		{
			img: "https://randomuser.me/api/portraits/women/30.jpg",
			name: "John Doe",
			testimony:
				"Tanta Innovative proved to be a professional service provider from the start, and we value their proactive approach and ability to suggest improvements to a prospective solution on both architectural and business levels. We know we can always rely on Tanta Innovative Limited's competencies when our clients require quality software to help them succeed in business..",
			position: "CFO, Tanta Innovatives",
		},
		{
			img: "https://randomuser.me/api/portraits/women/30.jpg",
			name: "Jane Smith",
			testimony:
				"Tanta Innovative proved to be a professional service provider from the start, and we value their proactive approach and ability to suggest improvements to a prospective solution on both architectural and business levels. We know we can always rely on Tanta Innovative Limited's competencies when our clients require quality software to help them succeed in business..",
			position: "CFO, Tanta Innovatives",
		},
	];
	return (
		<Wrapper>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				style={{
					"--swiper-pagination-color": "#E9000E",
					"--swiper-pagination-bullet-inactive-color": "#D9D9D9",
					"--swiper-pagination-bullet-inactive-opacity": "1",
					"--swiper-pagination-bullet-size": "10px",
					"--swiper-pagination-bullet-horizontal-gap": "5px",
				}}
			>
				{slideData.map((slide, index) => (
					<SwiperSlide key={index}>
						<SlideCard>
							<TestimonyContainer>
								<TestimonyText>{slide.testimony}</TestimonyText>
							</TestimonyContainer>
							<Divider />
							<InfoContainer>
								<ImageContainer>
									<Image
										src={slide.img}
										alt={slide.name}
										width={108}
										height={108}
										borderRadius="50%"
									/>
								</ImageContainer>
								<div>
									<Name>{slide.name}</Name>
									<Position>{slide.position}</Position>
								</div>
							</InfoContainer>
						</SlideCard>
					</SwiperSlide>
				))}
			</Swiper>
		</Wrapper>
	);
};

export default TestimonialsSlider;

const Wrapper = styled.div`
	padding: 2rem 0;
	margin-top: 1rem;
`;

const SlideCard = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem 2rem;
	background-color: #fff;
	margin-bottom: 2rem;
	//box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const TestimonyContainer = styled.div`
	flex: 2;
	margin: 0 3rem;
	width: 100%;
	height: 100%;
`;

const TestimonyText = styled.p`
	font-size: 0.8rem;
	font-weight: 400;
	font-style: italic;
`;

const Divider = styled.div`
	width: 1px;
	height: 80px;
	background-color: #ccc;
	margin: 0 1rem;
`;

const InfoContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex: 1;
	margin-right: 2rem;
`;

const ImageContainer = styled.div`
	flex-shrink: 0;
	margin-right: 1rem;
`;

const Name = styled.h3`
	font-size: 0.9rem;
	font-weight: 600;
	margin-bottom: 0.3rem;
`;

const Position = styled.p`
	font-size: 0.8rem;
	font-weight: 400;
`;
