import React from "react";
import {
	Box,
	Container,
	Flex,
	Grid,
	GridItem,
	Text,
	Image,
} from "@chakra-ui/react";

import { go, java, net, node, php, python } from "../../../assets/clients";

const TechStack = ({ data }) => {
	return (
		<>
			<Box
				p={"2rem 1rem"}
				display={"flex"}
				justifyContent={"start"}
				flexDir={"column"}
			>
				<Text
					fontWeight="700"
					fontSize={{ base: "1.2rem", lg: "1.7rem" }}
					// lineHeight="70px"
					textTransform="uppercase"
					// ml={{base: '1rem'}}
				>
					{data.name}’s Tech STACK{" "}
				</Text>
				<Box w="130px" h="4px" mt={".5rem"} bg="#D80808"></Box>

				<Container
					maxW={"7xl"}
					px={{ lg: "5rem", "2xl": "0.4rem" }}
					mt={"3rem"}
				>
					<Grid
						templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
						rowGap={{ base: "2rem", lg: "6rem" }}
						columnGap={{ base: "2rem", lg: "1rem" }}
						mt={"1rem"}
						px={{ base: "1.5rem" }}
						alignItems={"start"}
					>
						{data?.stacks.map((item) => {
							return (
								<Box key={item.id}>
									<Image
										src={item.logos}
										maxW={{ base: "100px", lg: "214px" }}
										maxH={"106px"}
										alt={"language"}
									/>
								</Box>
							);
						})}
					</Grid>
				</Container>
			</Box>
		</>
	);
};
export default TechStack;
