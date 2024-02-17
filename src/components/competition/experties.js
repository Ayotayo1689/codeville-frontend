import React from "react";
import { Box, Image, List, Text, UnorderedList } from "@chakra-ui/react";
import styled from "styled-components";
import { SmoothDevelopmentData } from "../softwareDevelopment/data";

const ExpertiesList = [
	{
		id: 1,
		details: "Supply chain collaboration platform for a 1,700-store retailer",
	},
	{
		id: 2,
		details: "Sales analysis system for a multinational FMCG corporation",
	},
	{
		id: 3,
		details: "Virtual 3D store",
	},
	{
		id: 4,
		details: "Vast expertise in ecommerce services",
	},
	{
		id: 5,
		details: "Your company and project may just be the next.",
	},
];

const Experties = () => {
	return (
		<Box p="20px" display={{ base: "block", md: "none" }}>
			<H2>
				OUR <Red>EXPERTISE</Red>
			</H2>
			<Box
				width="100px"
				height="2px"
				bg="red"
				bottom="-5px"
				left="0"
				mb="20px"
			></Box>
			<Box fontSize="12px">
				<Text>
					Since 2003, our portfolio for the retail industry has grown to
					include:
				</Text>
				<Ul>
					{ExpertiesList.map((item, key) => {
						return <Li key={key}>{item.details}</Li>;
					})}
				</Ul>
			</Box>
		</Box>
	);
};

export default Experties;

const Ul = styled.ul`
	padding: 10px 0px 10px 20px;
`;
const Li = styled.li`
	list-style-type: disc;
`;
const H2 = styled.div`
	font-size: 20px;
	font-weight: 700;
`;

const Red = styled.span`
	color: red;
`;
