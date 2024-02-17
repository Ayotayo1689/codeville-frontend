import React from "react";
import Image from "next/image";

import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import { colors } from "../../../styles/theme";
const TechSackGrid = ({ stacks }) => {
	return (
		<Tabs
			display={{ base: "grid", lg: "block" }}
			gridTemplateColumns={"100px 1fr"}
			gap="7"
			my={"6"}
		>
			<TabList
				border={"none"}
				flexWrap={"wrap"}
				flexDir={{ base: "column", lg: "row" }}
				gap={"3"}
			>
				{stacks?.map((item, index) => {
					return (
						<Tab
							key={index}
							textTransform={"capitalize"}
							_selected={{
								backgroundColor: "#C71319",
								color: "white",
								border: `1px solid ${colors.primaryColor}`,
							}}
							fontSize={{ base: "sm", lg: "lg" }}
							bg={" #FFF6F6"}
						>
							{item.name}
						</Tab>
					);
				})}
			</TabList>

			<TabPanels
				mt={{ base: "0", lg: "2" }}
				p={{ base: "2", lg: "2rem" }}
				bg={"#F5F5F5"}
			>
				{stacks?.map((item, index) => {
					return (
						<TabPanel key={index}>
							<Grid
								templateColumns={{
									base: "1fr 1fr",
									lg: "1fr 1fr 1fr 1fr",
								}}
								gap={{ base: "4rem", lg: "5rem" }}
								alignItems={"center"}
								justifyItems={"center"}
							>
								{item?.stacks?.map((icon, index) => {
									return (
										<Image
											key={index}
											src={icon?.logos}
											alt={`icon${index}`}
											height={80}
											width={80}
										/>
									);
								})}
							</Grid>
						</TabPanel>
					);
				})}
			</TabPanels>
		</Tabs>
	);
};

export default TechSackGrid;
