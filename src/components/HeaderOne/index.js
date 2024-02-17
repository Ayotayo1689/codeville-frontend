import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const HeaderOne = ({ heading, title }) => {
	return (
		<Box
			minHeight={{ base: "23vh", lg: "30vh" }}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			flexDirection={"column"}
			mb={{ base: "2rem", md: "0"}}
			backgroundImage={{
				base: "/assets/mobile-bg.png",
				lg: "/assets/headerbg.png",
			}}
			backgroundPosition={"center top"}
			backgroundRepeat={"no-repeat"}
			backgroundSize={"100%"}
			textAlign={{ base: "center" }}
		>
			<Text
				display={{ base: "none", lg: "block" }}
				textTransform={"uppercase"}
				fontSize={{ base: "18px",  lg: "22px" }}
				textAlign={{ base: "center" }}
			>
				{heading}
			</Text>
			<Heading
				as="h1"
				variant={"h5"}
				fontWeight={"bold"}
				textTransform={"uppercase"}
				fontSize={{ base: "18px", lg: "38px" }}
				px={{ base: "0.4rem" }}
			>
				{title}
			</Heading>
			<Text
				position={"relative"}
				top={{ base: "1rem", lg: "1.7rem" }}
				bgColor={"red"}
				width={"8rem"}
				height={".2rem"}
				textAlign={{ base: "center" }}
			></Text>
		</Box>
	);
};

export default HeaderOne;
