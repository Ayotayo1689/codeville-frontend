import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../../styles/theme";

import Link from "next/link";
const NeedExpert = () => {
	return (
		<Box bg={"#FDE6E7"} py={"2rem"} rounded={"lg"}>
			{" "}
			<Box px={"2rem"}>
				<Text fontSize={{ base: "lg", lg: "3xl" }} fontWeight={"bold"}>
					Need Any Consulting IT <br /> Service
					{/* NEED AN
						<span style={{ color: `${colors.primaryColor}` }}> EXPERT</span>
						FOR YOUR IT <br /> OUTSOURCING{" "}
						<span style={{ color: `${colors.primaryColor}` }}>PROJECTS</span> */}
				</Text>
				<Box
					w={"4rem"}
					height={".2rem"}
					bg={colors.primaryColor}
					mt={"2"}
				></Box>
			</Box>
			<Flex
				justifyContent={"center"}
				direction={{ base: "column-reverse", lg: "row" }}
				alignItems={"center"}
			>
				<Flex
					flex={"1"}
					px={"2rem"}
					direction={"column"}
					justifyContent={"center"}
					gap={"2rem"}
				>
					<Text fontSize={{ base: "md", lg: "xl" }} fontWeight={"semibold"}>
						At Tanta Innovative, we will help you collect and properly analyze
						the data from physical objects to make transformative improvements
						to your business processes.
					</Text>
					<Button
						alignSelf={"center"}
						bg={"#F8B3B7"}
						filter=" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
						as={Link}
						href={{
							pathname: "/contact-us",
							query: {
								service: "Consultation-IT-Services",
							},
						}}
					>
						Request Consultation IT Services
					</Button>
				</Flex>
				<Box flex={"1"} w={{ base: "14rem" }}>
					<Image width={"100%"} src="/assets/itOutSourcing/img4.svg" alt="Expert avatar"/>
				</Box>
			</Flex>
		</Box>
	);
};

export default NeedExpert;
