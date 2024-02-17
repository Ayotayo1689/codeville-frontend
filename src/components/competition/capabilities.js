import React from "react";
import { Box, Image, List, Text, UnorderedList } from "@chakra-ui/react";
import styled from "styled-components";

const CapabilitiesList = [
	{
		id: 1,
		details: "Platform-based implementation",
	},
	{
		id: 2,
		details: "Custom development",
	},
	{
		id: 3,
		details: "Redesign of enterprise systems",
	},
	{
		id: 4,
		details: "Maintenance",
	},
	{
		id: 5,
		details: "Support",
	},
];

const Capabilities = () => {
	return (
		<Box p="20px" display={{ base: "block", md: "none" }}>
			<H2>
				Our <Red>Capabilities</Red>
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
				<Ul>
					{CapabilitiesList.map((item, key) => {
						return <Li key={key}>{item.details}</Li>;
					})}
				</Ul>
				<Text>
					These services are delivered by on-demand, scalable teams of ideators
					and practitioners who include business analysts, software consultants
					and engineers, graphic designers and quality assurance professionals.
				</Text>
				<Text>
					Our strategic relations with the technology leaders open extra
					opportunities for us and help to ease implementations for our
					customers.
				</Text>
			</Box>
		</Box>
	);
};

export default Capabilities;

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
