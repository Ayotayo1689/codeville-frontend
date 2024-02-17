import React from "react";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
const Technologies = ({ techImagesOne = [], techImagesTwo = [], title }) => {
	return (
		<Box>
			<Heading
				fontWeight="600"
				fontSize={{ base: "20px", lg: "30px" }}
				textTransform="capitalize"
				color="#444444"
				lineHeight={{ lg: "140%", base: "150%" }}
				mb={"0.5rem"}
			>
				{title ? title : "Technologies We Use for Healthcare IT Support"}
			</Heading>
			<Box
				width={{ lg: "60px", base: "50px" }}
				height={"3px"}
				bg={"#D80808"}
				mb={{ lg: "4", base: "1rem" }}
			></Box>
			<Box
				bgImage={"/assets/healthcare/service/bg1.png"}
				paddingInline={"2rem"}
				paddingBlock={"2rem"}
			>
				{techImagesOne.map((item, index) => {
					return (
						<Box key={index} my={2}>
							<Text color={"#004775"} fontSize={"2xl"} fontWeight={"semibold"}>
								{item.header}
							</Text>
							{item.text && <Text>{item.text} </Text>}
							<Flex gap={"1.5px"} my={1} flexWrap={"wrap"}>
								{item.images.map((img, index) => {
									return <Image key={index} src={img}></Image>;
								})}
							</Flex>
						</Box>
					);
				})}
			</Box>
			<Box bg={"#E8EEF1"} paddingInline={"2rem"} paddingBlock={"2rem"}>
				{techImagesTwo.map((item, index) => {
					return (
						<Box key={index} my={3}>
							<Text color={"#004775"} fontSize={"2xl"} fontWeight={"semibold"}>
								{item.header}
							</Text>
							{item.text && <Text>{item.text} </Text>}

							<Flex gap={"1.5px"} my={1} flexWrap={"wrap"}>
								{item.images.map((img, index) => {
									return <Image key={index} src={img} alt="Technologies"/>;
								})}
							</Flex>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default Technologies;
