
import styled from "styled-components";

import Link from "next/link";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import appRoutes from "../../utils/appRoutes";

const SuccessCases = ({ cases }) => {
	return (
		<SolutionsContainer>
			<Flex direction={"column"}>
				<SolutionsHeader>CASE STUDIES </SolutionsHeader>
				<SolutionsTitle>Our Success Stories </SolutionsTitle>
			</Flex>
			<Grid
				justifyContent={"center"}
				templateColumns={{
					base: "1fr",
					lg: "repeat(3,1fr)",
				}}
				gap={{ base: "1rem", lg: "3rem" }}
				paddingInline={{ base: "1rem", lg: "7rem" }}
				my={"3rem"}
			>
				{cases?.map((item, key) => {
					return (
						// <Link key={key}  href={`/our-case-studies/${item.slug}`}>
						<Link key={key}  href={`${appRoutes.caseStudies}${item?.slug?.replace(/_/g, "-")}/${item.id}`}>
							<Box
								key={key}
								bg={`linear-gradient(0deg, rgba(1, 0, 43, 0.63) 0%, rgba(1, 0, 43, 0.63) 100%), url(${item?.image}), lightgray 50% / contain no-repeat`}
								textTransform={"capitalize"}
								fontSize={{ base: "md", lg: "lg" }}
								color={"white"}
								paddingBlock={{ base: "8", lg: "8" }}
								paddingInline={{ base: "6", lg: "10" }}
								paddingBlockStart={{ base: "13rem", lg: "12rem" }}
								rounded={"none"}
								boxShadow={" 2px 15px 15px 0px rgba(0, 0, 0, 0.20)"}
								fontWeight={"light"}
							>
								<Flex direction={"column"} gap={"3"}>
									<Text>{item?.title}</Text>
									<Box width={"30%"} height={"1px"} bg={"red"}></Box>
								</Flex>
							</Box>
						</Link>
					);
				})}
			</Grid>
		</SolutionsContainer>
	);
};

export default SuccessCases;

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
