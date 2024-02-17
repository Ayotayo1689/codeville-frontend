import React from "react";
import { colors } from "../../../styles/theme";
import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { RiCheckboxBlankFill } from "react-icons/ri";

const WhyChoose = () => {
	const data = [
		"Possess over 15+ years of  experience  in IT solutions tailored for manufacturing industries",
		"Established partnerships with leading tech companies such as Microsoft, AWS, ServiceNow, Oracle, Adobe, and    Salesforce.",
		"Boasts a team of 15+ experienced UX and UI designers",
		"Features a  team of 30+ developers, with more than 80% of them being seasoned professionals.",
		"Has successfully completed over 70+ projects, including various enterprise-level solutions such as ERP, CRM, SCM, and more.",
		"Utilizes a mature quality management system certified by ISO 9001.",
		`Employs a robust security management system supported by ISO 27001`,
	];
	return (
		<Box>
			<Box>
				{" "}
				<Text fontSize={{lg:"3xl", base:"22px"}} fontWeight={"bold"}>
					Why We Are So <br />
					<span style={{ color: `${colors.primaryColor}` }}>
						{" "}
						Reliable
					</span>{" "}
				</Text>
				<Box
					w={"4rem"}
					height={".2rem"}
					bg={colors.primaryColor}
					mt={"2"}
				></Box>
				<Flex direction={{ base: "column", lg: "row" }}>
					<List
						spacing={5}
						paddingBlock={"1rem"}
						fontFamily={"Roboto"}
						fontSize={{lg:"lg", base:"16px"}}
					>
						{data.map((item, key) => {
							return (

								<ListItem key={key}>
									<Flex>
									<ListIcon mt={"0.2rem"}
										as={RiCheckboxBlankFill}
										color={`${colors.primaryColor}`}
									/>
									{item}
									</Flex>
								</ListItem>
							);
						})}
					</List>
				</Flex>
			</Box>
		</Box>
	);
};

export default WhyChoose;
