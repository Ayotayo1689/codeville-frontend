import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import SolutionsMobile from "../../components/solutions/mobileViews";
import Solutions from "../../components/solutions";
import SolutionComponent from "../solutionsDelivered/solutionComponent";
import styled from "styled-components";

const SolutionsSection = ({ categories }) => {
	const [isMobileDevice] = useMediaQuery("(max-width: 700px)");

	return (
		<Box>
			<Box overflow={"hidden"}>
				{/* {isMobileDevice ? (
					<Box>
						<SolutionsMobile />
					</Box>
				) : (
					<Box>
						<Solutions />
					</Box>
				)} */}

				<Box>
					<SolutionsHeader>tanta solutions</SolutionsHeader>
					<SolutionsTitle>Solutions We Deliver</SolutionsTitle>
				</Box>
				<SolutionComponent solutions={categories} NoPadding={true} />
			</Box>
		</Box>
	);
};

export default SolutionsSection;

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
`;

const SolutionsTitle = styled.h2`
	font-size: 1.6rem;
	font-weight: 600;
	color: #444444;
`;
