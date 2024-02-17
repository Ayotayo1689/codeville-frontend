import React from "react";
import {
	Box,
	Card,
	Container,
	Flex,
	Grid,
	Text,
	Image,
} from "@chakra-ui/react";
import { cardData } from "./data";
// import Image from "next/image";
import Link from "next/link";

const Posts = ({ data }) => {
	return (
		<>
			<Box
				display={"flex"}
				flexDir="row"
				justifyContent={"space-between"}
				flexDirection={"column"}
				p={"2rem 1rem"}
			>
				<Container
					maxW={"7xl"}
					px={{ lg: "5rem", "2xl": "0.4rem" }}
					display={"flex"}
					justifyContent={"start"}
					flexDir={"column"}
				>
					<Text
						fontWeight="700"
						fontSize={{ base: "1.2rem", lg: "1.7rem" }}
						// lineHeight="70px"
						textTransform="uppercase"
					>
						Latest POSTs from {data.name}{" "}
					</Text>
					<div
						style={{
							width: "130px",
							height: "4px",
							marginTop: ".5rem",
							background: "#D80808",
						}}
					></div>
				</Container>
				{/* project cards goes here */}
				<Flex
					justifyContent={"center"}
					alignItems={"center"}
					background="#EBEBEB"
					flexDir={{ base: "column", md: "row" }}
					py="2.5rem"
					mt={"1rem"}
				>
					{/* first card */}
					<Grid
						templateColumns={{
							base: "100%",
							md: "repeat(2, 1fr)",
							lg: "repeat(3, 1fr)",
						}}
					>
						{data.all_blogs.map((item, index) => (
							<Card
								as={Link}
								// width="330px"
								borderBottom="3px solid #F50000"
								mt={"1.5rem"}
								mx="2rem"
								boxShadow="0px 10px 20px rgba(165, 163, 174, 0.4)"
								key={index}
								href={`/blog/${item?.id}/${item?.slug?.replace(/_/g, "-")}`}
							>
								<Image
									src={item?.image}
									height={"200px"}
									width={"100%"}
									style={{ alignSelf: "center" }}
									alt={item?.title}
								/>
								<Box p={"15px"} borderTop="1px solid #A5A5A5">
									<Text
										fontWeight="600"
										fontSize="18px"
										lineHeight="24px"
										textAlign="start"
									>
										{item?.title}
									</Text>
									<Text
										fontWeight="400"
										fontSize="15px"
										lineHeight="22px"
										textAlign="start"
										my="25px"
									>
										{item?.text}
									</Text>
									<Link
										href={`/blog/${item?.id}/${item?.slug?.replace(/_/g, "-")}`}
									>
										<Text
											textAlign="end"
											_hover={{ color: "red", cursor: "pointer" }}
											color={"#F50000"}
										>
											Read more{" "}
										</Text>
									</Link>
								</Box>
							</Card>
						))}
					</Grid>
				</Flex>
			</Box>
		</>
	);
};

export default Posts;
