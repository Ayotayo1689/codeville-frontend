import React from "react";
import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	Text,
	Avatar,
} from "@chakra-ui/react";
import moment from "moment/moment";

import Link from "next/link";
import styled from "styled-components";
import { MdCalendarToday } from "react-icons/md";
import { BiUser } from "react-icons/bi";
function RelatedPosts({ blogs }) {
	return (
		<Box my={"2rem"}>
			<Text
				fontSize={"2xl"}
				fontWeight={"semibold"}
				textAlign={"center"}
				borderBottom={"1px solid #D9D9D9"}
				py={"2rem"}
				mb={"3rem"}
			>
				Related Articles
			</Text>
			<SimpleGrid
				templateColumns={{
					base: "1fr",
					lg: "repeat(3, minmax(100px, 400px))",
				}}
				gap={"2rem"}
			>
				{blogs?.slice(0, 3)?.map((item, index) => {
					return (
						<Card
							direction={{ base: "column", sm: "column" }}
							overflow="hidden"
							variant="outline"
							key={index}
							border={"none"}
							borderBottom={"1px solid #e2e8f0"}
							as={Link}
							href={`/blog/${item?.id}/${item?.slug?.replace(/_/g, "-")}`}
						>
							<Image
								objectFit="cover"
								maxW={{ base: "100%", sm: "100%" }}
								src={item?.featured_image}
								alt="Caffe Latte"
							/>

							<Stack>
								<CardBody>
									<Flex alignItems={"center"} gap={"5"} mb={"1"}>
										<Text fontSize={"xs"} textAlign={"center"} py={"1"}>
											10 min read
										</Text>
										<Flex alignItems={"center"} gap={4}>
											<Text fontWeight={"bold"} fontSize={"xs"}>
												Published
											</Text>
											<Text fontSize={"xs"}>
												{moment(item?.date_published).format("MMMM Do YYYY")}
											</Text>
										</Flex>
									</Flex>
									<Heading size="md">{item?.title}</Heading>

									<Text py="2" fontSize={"sm"}>
										{item?.title}
									</Text>

									<Flex alignItems={"center"} gap={"5"} mt={"3"}>
										<Text
											bg={"#D9D9D9"}
											borderRadius={"xl"}
											fontSize={"xs"}
											textAlign={"center"}
											px={"5"}
											py={"1"}
										>
											Technology
										</Text>
										<Flex alignItems={"center"} gap={4}>
											<Text fontWeight={"bold"} fontSize={"xs"}>
												Author
											</Text>
											<Avatar
												size={"sm"}
												src={item?.author_details?.profile_image}
											></Avatar>
											<Text fontSize={"xs"}>{item?.author_details?.name}</Text>
										</Flex>
									</Flex>
								</CardBody>
							</Stack>
						</Card>
					);
				})}
			</SimpleGrid>
		</Box>
	);
}

export default RelatedPosts;
