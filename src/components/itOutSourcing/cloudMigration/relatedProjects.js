import React from "react";
import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { colors } from "../../../../styles/theme";
import { A11y, Pagination, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import coin from "../../../../public/assets/cloudMigration/coin.png";
import { Box, Flex } from "@chakra-ui/react";
import { RiCheckboxBlankFill } from "react-icons/ri";
import appRoutes from "../../../utils/appRoutes";

const tabItems = [
	{
		title: "Ecommerce Ecosystem Migration to Amazon Cloud",
		details: [
			{
				id: "1",
				text: "We moved several services (a web portal, statistics, payments, mailings, and more) running on 20 dedicated servers to AWS to ensure scalability of the Customer’s services.",
			},
			{
				id: "2",
				text: "Distributed the data used by one application among a number of external storages: Amazon S3, RDS and DynamoDB.",
			},
		],
		link: appRoutes.services["software-development-services/"],
	},
	{
		title: "Application Services",
		details: [
			{
				id: "1",
				text: "We moved several services (a web portal, statistics, payments, mailings, and more) running on 20 dedicated servers to AWS to ensure scalability of the Customer’s services.",
			},
			{
				id: "2",
				text: "Distributed the data used by one application among a number of external storages: Amazon S3, RDS and DynamoDB.",
			},
		],

		link: appRoutes.services["application-services"],
	},
	{
		title: "Cyber Security",
		details: [
			{
				id: "1",
				text: "We moved several services (a web portal, statistics, payments, mailings, and more) running on 20 dedicated servers to AWS to ensure scalability of the Customer’s services.",
			},
			{
				id: "2",
				text: "Distributed the data used by one application among a number of external storages: Amazon S3, RDS and DynamoDB.",
			},
		],

		link: appRoutes.services["cyber-security"],
	},
	{
		title: "IT Consulting",
		details: [
			{
				id: "1",
				text: "We moved several services (a web portal, statistics, payments, mailings, and more) running on 20 dedicated servers to AWS to ensure scalability of the Customer’s services.",
			},
			{
				id: "2",
				text: "Distributed the data used by one application among a number of external storages: Amazon S3, RDS and DynamoDB.",
			},
		],

		link: appRoutes.services["it-consulting"],
	},
];
const RelatedProjects = () => {
	const truncateText = (text, maxLength) => {
		if (text.length <= maxLength) {
			return text;
		}
		return text.slice(0, maxLength) + "...";
	};
	return (
		<MobileWrapper>
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
				{tabItems.map((offer, index) => (
					<SwiperSlide key={index}>
						<div
							style={{
								padding: "2rem 0",
							}}
						>
							<Card>
								<Image src={coin} alt="money" width={340} height={224} />
								<CardContent className="card">
									<h3>{offer.title}</h3>
									{/*<p>{truncateText(offer.details, 400)}</p>*/}
									{offer.details.map((nestedItem, index) => (
										<Flex
											key={nestedItem.id}
											gap={"1rem"}
											fontSize={{ lg: "16px", base: "15px" }}
											alignItems={"center"}
										>
											<Box marginBottom={"3.1rem"}>
												<RiCheckboxBlankFill
													style={{
														color: "#E9000E",
														width: "10px",
														height: "10px",
													}}
												/>
											</Box>
											{truncateText(nestedItem.text, 400)}
										</Flex>
									))}
									<LinkContainer>
										<Link href={""}>
											PROJECT DETAILS <BsArrowRight />
										</Link>
									</LinkContainer>
								</CardContent>
							</Card>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</MobileWrapper>
	);
};

export default RelatedProjects;

const LinkContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 2rem;
	margin-bottom: 1rem;
	align-self: end;

	a {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		gap: 0.5rem;
		font-size: 1rem;
		font-weight: 600;
		color: #005eb8;
		text-align: end;

		svg {
			font-size: 1.5rem;
			padding-top: 5px;
		}
	}
`;

const Card = styled.div`
	background: #fff;
	padding: 1.5rem 0.9rem;
	border-radius: 4px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	margin-bottom: 1rem;
	gap: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: row;

	img {
		width: 300px;
		height: 200px;
	}
`;
const CardContent = styled.div`
	padding: 1.5rem 0.9rem;

	h3 {
		font-size: 22px;
		font-weight: 700;
		color: #333;
		margin-bottom: 1rem;
	}
`;
const MobileWrapper = styled.div`
	//padding: 2rem 0;
	//margin: 2rem;

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
