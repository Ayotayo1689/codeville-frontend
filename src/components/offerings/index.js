import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
	Details,
	OfferContainer,
	SearchForm,
	Section,
	Tabs,
	Wrapper,
} from "../../../styles/home.style";
import { Container, useMediaQuery } from "@chakra-ui/react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";
import { colors } from "../../../styles/theme";
import { Box } from "@chakra-ui/react";
import { SearchModal } from "../searchBar/SearchComponent";
import appRoutes from "../../utils/appRoutes";

const tabLinks = [
	appRoutes.services["it-consulting"],
	appRoutes.services["qa-testings/"],
	appRoutes.services["cyber-security"],
	appRoutes.services["data-analytics"],
	appRoutes.services["software-development-services/"],
	appRoutes.services["application-services"],
];

const OurOffering = ({ offers }) => {
	const [isMobileDevice] = useMediaQuery("(max-width: 700px)");
	const truncateText = (text, maxLength) => {
		if (text.length <= maxLength) {
			return text;
		}
		return text.slice(0, maxLength) + "...";
	};
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	return (
		<div>
			<Box display={{ base: "block", md: "none" }}>
				<MobileWrapper>
					<h2>Our Offering</h2>
					<div className="red-line_small"></div>
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
						{offers.map((offer, index) => (
							<SwiperSlide key={offer.id}>
								<div
									key={offer.index}
									style={{
										padding: "2rem 0",
									}}
								>
									<Card className="card">
										<h3>{offer.name}</h3>
										<p>{truncateText(offer.description, 400)}</p>
										<LinkContainer>
											<Link href={tabLinks[index]}>
												Learn more <BsArrowRight />
											</Link>
										</LinkContainer>
									</Card>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</MobileWrapper>
			</Box>
			<Box display={{ base: "none", md: "block" }}>
				<Container maxW={"7xl"}>
					<Section>
						<Wrapper>
							<OfferContainer>
								<Details>
									<SearchForm>
										<div className="search-box">
											<form>
												<SearchModal></SearchModal>
											</form>
										</div>
									</SearchForm>
									<div className="offer-details">
										<h3>{offers[activeTab]?.name}</h3>
										<div className="red-line_small"></div>
										<p>{offers[activeTab]?.description}</p>
										<Link href={tabLinks[activeTab]}>
											learn more <BsArrowRight />
										</Link>
									</div>
								</Details>
								<Tabs>
									<h3>Our Offering</h3>
									<div className="red-line_small"></div>
									<div className="tabs-container">
										<ul>
											{offers.map((offer, index) => (
												<li
													key={index}
													className={activeTab === index ? "active" : ""}
												>
													<button onClick={() => handleTabClick(index)}>
														{offer.name}
													</button>
												</li>
											))}
										</ul>
									</div>
								</Tabs>
							</OfferContainer>
						</Wrapper>
					</Section>
				</Container>
			</Box>
		</div>
	);
};

export default OurOffering;

const MobileWrapper = styled.div`
	padding: 2rem 0;
	margin: 2rem;

	h2 {
		font-weight: 600;
		font-size: 30px;
		line-height: 28px;
		text-align: start;
		color: ${colors.textColor};
		padding-bottom: 0.9rem;
		margin-top: 0.7rem;
		padding-left: 1rem;
	}

	.red-line_small {
		width: 60px;
		height: 5px;
		background: ${colors.primaryColor};
		border-radius: 3px;
		margin-left: 1rem;
	}
`;

const Card = styled.div`
	background: #fff;
	padding: 1.5rem 0.5rem;
	border-radius: 4px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	margin-bottom: 1rem;

	h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #444444;
		margin-bottom: 1rem;
	}

	p {
		font-size: 0.9rem;
		font-weight: 400;
		color: #636363;
	}
`;

const LinkContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2rem;
	margin-bottom: 1rem;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-size: 1rem;
		font-weight: 600;
		color: #e9000e;

		svg {
			font-size: 1.5rem;
			padding-top: 5px;
		}
	}
`;
