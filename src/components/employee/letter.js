import React from "react";
import { Box, Card, Spacer, Text, Image } from "@chakra-ui/react";
// import Image from "next/image";
import { pana } from "../../../assets/employee";
import Link from "next/link";

const EmployeeLetter = ({ data }) => {
	return (
		<>
			<Box
				display={"flex"}
				flexDir={{ base: "column", lg: "row" }}
				justifyContent={"space-between"}
				alignItems={{ base: "center", lg: "start" }}
				p={{ base: "2rem 1.9rem", lg: "4rem 4.9rem" }}
			>
				<Box pr={{ base: "0", lg: "3rem" }} width={{ base: "100%", lg: "69%" }}>
					<Text
						fontWeight="400"
						fontSize={{ base: "16px", lg: "18px" }}
						lineHeight={{ base: "24px", lg: "34px" }}
						letterSpacing="0.085rem"
						textAlign={"justify"}
					>
						{data.profile_summary}
					</Text>
					<br></br>
				</Box>
				<Spacer />

				{data?.most_rated_blog && (
					<Box
						display={"flex"}
						justifyContent={{ base: "start", lg: "center" }}
						alignItems={"center"}
						flexDir={"column"}
						px={{ base: "0", lg: "3rem" }}
						mt={{ base: "1rem" }}
					>
						<Text
							fontWeight="700"
							fontSize={{ base: "1.2rem", lg: "1.5rem" }}
							// lineHeight={{base: '34px', lg: "44px"}}
							textTransform={"uppercase"}
							textAlign={{ base: "center" }}
						>
							{data.name}’s top article
						</Text>
						<Box w="130px" h="4px" bg="#D80808"></Box>

						<Card
							width="330px"
							borderBottom="3px solid #F50000"
							mt={"1.5rem"}
							as={Link}
							href={`/blog/${
								data?.most_rated_blog?.id
							}/${data?.most_rated_blog?.slug?.replace(/_/g, "-")}`}
						>
							<Image
								src={data?.most_rated_blog?.image}
								height={"200px"}
								width={"100%"}
								style={{ alignSelf: "center" }}
								alt={"blog post"}
							/>
							<Box p={"15px"} borderTop={"1px solid #ccc"}>
								<Text
									fontWeight="600"
									fontSize="18px"
									lineHeight="24px"
									textAlign="start"
								>
									{data?.most_rated_blog?.title}
								</Text>
								<Text
									fontWeight="400"
									fontSize="15px"
									lineHeight="22px"
									textAlign="start"
									my="25px"
								>
									{data?.most_rated_blog?.title}
								</Text>

								<Link
									href={`/blog/${
										data?.most_rated_blog?.id
									}/${data?.most_rated_blog?.slug?.replace(/_/g, "-")}`}
								>
									<Text textAlign="end" color={"#F50000"}>
										Read more
									</Text>
								</Link>
							</Box>
						</Card>
					</Box>
				)}
			</Box>
		</>
	);
};

export default EmployeeLetter;
