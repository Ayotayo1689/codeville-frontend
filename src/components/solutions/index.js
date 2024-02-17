import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import SolutionComponent from "../solutionsDelivered/solutionComponent";

const Solutions = ({ solutions }) => {
	return (
		<SolutionsContainer>
			<Box>
				<SolutionsHeader>tanta solutions</SolutionsHeader>
				<SolutionsTitle> Solutions we Deliver</SolutionsTitle>
			</Box>
			<SolutionComponent solutions={solutions} />
		</SolutionsContainer>
	);
};

export default Solutions;

const SolutionsContainer = styled.div`
	background: white;
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
	padding-left: 4rem;

	@media (min-width: 992px) {
		padding-left: 4rem;
	}
`;