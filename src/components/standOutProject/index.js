import React from "react";
import { Text, Button, Flex, Box, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../../public/assets/homepage/arrow.svg";
import styled from "styled-components";
import { colors } from "../../../styles/theme";
import axiosInstance from "../../utils/config";
import NoSSR from "../dataAnalytics/NoSSR";

const StandOutProject = ({ img, title, details, link }) => {
	return (
		<NoSSR>
			<Box>
				<Flex
					display={{ base: "none", md: "none", lg: "flex" }}
					gap={"15px"}
					flexDir={"column"}
					bg={"white"}
					p={"10px"}
					flex={"1"}
					maxW={"400px"}
					h={"fit-content"}
					minH={"500px"}
					position={"relative"}
				>
					<Box
						bgImage={`url('${img}')`}
						bgSize="cover"
						bgPosition="center"
						bgRepeat="no-repeat"
						w={"100%"}
						h={"200px"}
					></Box>
					<Text color={"#444444"} fontSize={"20px"}>
						{title}
					</Text>
					<Text pb={"15px"} mb={"30px"} fontSize={"16px"} color={"#444444"}>
						{details}
					</Text>
					<Link href={link}>
						<Button
							position={"absolute"}
							mt={"30px"}
							bottom={"20px"}
							p={"15px 25px"}
							right={"22px"}
							bg={"red"}
							color={"white"}
						>
							Learn more <Image src={arrow} alt={"arrow"} />
						</Button>
					</Link>
				</Flex>
			</Box>
		</NoSSR>
	);
};

export default StandOutProject;

export async function getStaticProps() {
	let cases = [];

	try {
		const res = await axiosInstance("/api/casestudy/");
		cases = res.data;
	} catch (error) {}

	return {
		props: {
			cases,
		},
		revalidate: 10,
	};
}
