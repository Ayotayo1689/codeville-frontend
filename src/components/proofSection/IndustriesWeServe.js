import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Grid, Button } from "@chakra-ui/react";
import { BsArrowUpRightCircle, BsArrowRight } from "react-icons/bs";
import SolutionComponent from "../solutionsDelivered/solutionComponent";
const data = [
	{
		img: "/assets/solutions/svg/healthcare.svg",
		label: "HealthCare",
		url: "/industries/health-care",
	},
	{
		img: "/assets/solutions/svg/retail.svg",
		label: "Retail",
		url: "/industries/retail",
	},
	{
		img: "/assets/solutions/svg/professional-services.svg",
		label: "Corporate",
		url: "/industries/corporate",
	},
	{
		img: "/assets/solutions/svg/public-sector.svg",
		label: "Real Estate",
		url: "/industries/real-estate-and-housing",
	},
	{
		img: "/assets/solutions/svg/manufacturing.svg",
		label: "Education",
		url: "/industries/education",
	},
	{
		img: "/assets/solutions/svg/banking.svg",
		label: "Banking",
		url: "/industries/banking",
	},

	{
		img: "/assets/solutions/svg/manufacturing.svg",
		label: "Manufacturing",
		url: "/industries/manufacturing",
	},
	{
		img: "/assets/solutions/svg/oil-and-gas.svg",
		label: "Oil and Gas",
		url: "/industries/manufacturing",
	},
];
const CustomIcon = ({ path }) => {
	return <Image height={50} width={50} src={path} alt="Icon" />;
};
const IndustriesWeServe = ({ cases, solutions }) => {
	return (
		<SolutionsContainer>
			<Box>
				<SolutionsHeader>tanta solutions</SolutionsHeader>
				<SolutionsTitle>Industries we Serve</SolutionsTitle>
			</Box>
			<Grid
				justifyContent={"center"}
				templateColumns={{
					base: "1fr 1fr",
					lg: "repeat(4,minmax(200px, 1fr))",
				}}
				gap={{ base: "1rem", lg: "3rem" }}
				paddingInline={{ base: "1rem", lg: "7rem" }}
				my={"3rem"}
			>
				{data?.map((item, key) => {
					return (
						<Link key={key} href={item.url}>
							<Button
								key={key}
								bg={"white"}
								textTransform={"capitalize"}
								fontSize={{ base: "md", lg: "xl" }}
								color={"black"}
								paddingBlock={{ base: "10", lg: "14" }}
								paddingInline={{ base: "6", lg: "10" }}
								rounded={"none"}
								sx={{ "&:hover": { bg: "#E9000E", color: "white" } }}
								boxShadow={"md"}
								borderTop={"5px solid #E9000E"}
								leftIcon={<CustomIcon path={item?.img} />}
								fontWeight={"bold"}
							>
								{item?.label}
								<Box
									position={"relative"}
									top={{ base: "-1rem", lg: "-1.7rem" }}
									right={{ base: "0.4rem", lg: "-0.5rem" }}
									visibility={{ base: "hidden", lg: "visible" }}
								>
									<BsArrowUpRightCircle
										mt={"4rem"}
										fontSize={"1rem"}
										color="red"
									/>
								</Box>
							</Button>
						</Link>
					);
				})}
			</Grid>
		</SolutionsContainer>
	);
};

export default IndustriesWeServe;

const SolutionsContainer = styled.div`
	background: white;
	margin-block: 6rem;
	display: flex;
	flex-direction: column;

	max-width: 1500px;
`;
const SolutionsHeader = styled.h1`
	font-size: 1rem;
	font-weight: 400;
	color: #636363;
	padding-top: 1rem;
	text-transform: uppercase;
	padding-left: 1rem;

	@media (min-width: 992px) {
		padding-left: 4rem;
	}
`;

const SolutionsTitle = styled.h2`
	font-size: 1.8rem;
	font-weight: 600;
	color: #444444;
	padding-left: 1rem;

	@media (min-width: 992px) {
		padding-left: 4rem;
	}
`;
