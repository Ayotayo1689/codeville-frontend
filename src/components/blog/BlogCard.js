import React from "react";
import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	Avatar,
} from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";

import moment from "moment/moment";

import Link from "next/link";
import { MdArrowForward, MdCalendarToday } from "react-icons/md";
import { BiTagAlt, BiUser } from "react-icons/bi";
const BlogCards = ({ blogs }) => {
	return (
		<Stack spacing={"10"}>
			{blogs.map((item, index) => {
				return (
					<Card
						direction={{ base: "column", sm: "row-reverse" }}
						overflow="hidden"
						variant="outline"
						key={index}
						py={"8"}
						px={"4"}
						border={"none"}
						borderBottom={"1px solid #e2e8f0"}
						as={Link}
						href={`/blog/${item?.id}/${item?.slug?.replace(/_/g, "-")}`}
					>
						<Image
							objectFit="contain"
							maxW={{ base: "100%", sm: "200px" }}
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
											{" "}
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
		</Stack>
	);
};

export default BlogCards;
