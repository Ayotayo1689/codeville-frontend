import React from "react";
import {
	Box,
	Button,
	Card,
	Flex,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	Avatar,
	Grid,
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	List,
	ListIcon,
	ListItem,
} from "@chakra-ui/react";
import { categories } from "./data";
import { RiCheckboxBlankFill } from "react-icons/ri";

import { MdArrowForward, MdCalendarToday, MdSearch } from "react-icons/md";
import Link from "next/link";
import moment from "moment/moment";
import { FiPlusCircle } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
const RecentArticles = ({ blogs }) => {
	return (
		<Box
			mt={{ base: "1rem", lg: "2rem" }}
			order={{ base: "1", lg: "2" }}
			px={{ base: "1.5rem", lg: "0rem" }}
		>
			{/* <InputGroup>
				<Input placeholder="Search" pr="4.5rem" />
				<InputRightElement width="4.5rem">
					<MdSearch color="red" fontSize={"1.5rem"} />
				</InputRightElement>
			</InputGroup> */}
			<Text
				mb={{ base: "3rem", lg: "2rem" }}
				fontSize={"2xl"}
				fontWeight={"bold"}
				textAlign={{ base: "center", lg: "start" }}
			>
				Top Articles
			</Text>

			<Flex direction={"column"} gap={"10"}>
				{blogs?.slice(0, 3)?.map((item, index) => {
					return (
						<Box
							key={index}
							overflow="hidden"
							variant="outline"
							border={"none"}
							alignItems={"center"}
							direction={"row"}
							gap={"0.5rem"}
							as={Link}
							href={`/blog/${item?.id}/${item?.slug?.replace(/_/g, "-")}`}
						>
							<Flex justifyContent={"space-between"} mb={"4"}>
								<Flex alignItems={"center"} gap={1}>
									<Avatar src={item?.author_details?.profile_image}></Avatar>
									<Text>{item?.author_details?.name}</Text>
								</Flex>
								<Flex alignItems={"center"} justifyContent={"center"} gap={1}>
									<FiPlusCircle />
									<Text bg={"none"}>follow</Text>
								</Flex>
							</Flex>
							<Box>
								<Text fontWeight={"semibold"} mb={"2"}>
									{item?.title}
								</Text>
								<Text fontSize={"sm"}>{item?.title}</Text>
							</Box>
						</Box>
					);
				})}
			</Flex>
			<Flex
				flexDir="column"
				height={"fit-content"}
				pb={"1rem"}
				borderBottom={"lg"}
				my={"2rem"}
			>
				<Text
					as="h2"
					fontSize={"2xl"}
					fontWeight={"bold"}
					mb={"1rem"}
					paddingBlock={".5rem"}
					borderTopRadius={"lg"}
				>
					Recommended topics
				</Text>
				<Grid templateColumns={"1fr"} gap={"3"}>
					<Accordion mb={"2rem"} allowMultiple={false}>
						<AccordionItem mt={"1rem"} _hover={{ bgColor: "none" }}>
							<AccordionButton
								boxShadow={"md"}
								bg={"#FFFFFF"}
								// _expanded={{
								// 	bg: "#EB1A26",
								// 	color: "white",
								// }}
								borderTopRadius={"md"}
								_expanded={{
									background:
										"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)",
									color: "white",
								}}
							>
								<Box as="span" flex="1" textAlign="left">
									<Text
										fontSize={{ base: "1rem", md: "1.2rem" }}
										fontWeight={"500"}
										_expanded={{ color: "white" }}
									>
										Technology
									</Text>
								</Box>
								<AccordionIcon />
							</AccordionButton>

							<AccordionPanel pb={4} pt={"1rem"}>
								<List spacing={3} mt={"1rem"}>
									{/* {item.listItems.map((listItem, index) => {
													return ( */}
									{blogs?.slice(0, 3)?.map((item, index) => {
										return (
											<ListItem fontSize={".99rem"} key={index}>
												<Flex align={"start"}>
													<ListIcon
														as={RiCheckboxBlankFill}
														color={"#E9000E"}
														fontSize={".9rem"}
														mt={".4rem"}
													/>
													<Link
														href={`/blog/${item?.id}/${item?.slug?.replace(
															/_/g,
															"-"
														)}`}
													>
														{item?.title}
													</Link>
												</Flex>
											</ListItem>
										);
									})}
								</List>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem mt={"1rem"} _hover={{ bgColor: "none" }}>
							<AccordionButton
								boxShadow={"md"}
								bg={"#FFFFFF"}
								// _expanded={{
								// 	bg: "#EB1A26",
								// 	color: "white",
								// }}
								borderTopRadius={"md"}
								_expanded={{
									background:
										"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)",
									color: "white",
								}}
							>
								<Box as="span" flex="1" textAlign="left">
									<Text
										fontSize={{ base: "1rem", md: "1.2rem" }}
										fontWeight={"500"}
										_expanded={{ color: "white" }}
									>
										Healthcare
									</Text>
								</Box>
								<AccordionIcon />
							</AccordionButton>

							<AccordionPanel pb={4} pt={"1rem"}>
								<List spacing={3} mt={"1rem"}>
									{/* <ListItem fontSize={".99rem"}>
										<Flex align={"start"}>
											<ListIcon
												as={RiCheckboxBlankFill}
												color={"#E9000E"}
												fontSize={".9rem"}
												mt={".4rem"}
											/>
										</Flex>
									</ListItem> */}
								</List>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
					{/* {categories.map((item, index) => {
						return (
							<Grid
								templateColumns={"3fr 1fr"}
								alignItems={"center"}
								justifyContent={"space-around"}
								key={index}
								bg="#F2F2F2"
								pl={"4"}
								py={"2"}
							>
								<Text bg={"none"}>{item}</Text>
								<FiPlusCircle />
							</Grid>
						);
					})} */}
				</Grid>
			</Flex>
			<Text
				my={"1rem"}
				fontSize={"2xl"}
				fontWeight={"bold"}
				display={{ base: "none", lg: "block" }}
			>
				Top Creators
			</Text>

			<Flex
				direction={"column"}
				gap={"5rem"}
				display={{ base: "none", lg: "block" }}
			>
				{blogs
					?.filter(
						(item, index, self) =>
							self.findIndex(
								(i) => i?.author_details?.name === item?.author_details?.name
							) === index
					)
					?.slice(0, 3)
					?.map((item, index) => {
						return (
							<Grid
								key={index}
								overflow="hidden"
								variant="outline"
								border={"none"}
								direction={"row"}
								gap={"0.8rem"}
								as={Link}
								href={`/blog/${item?.id}/${item?.slug?.replace(/_/g, "-")}`}
								templateColumns={"1fr 3fr"}
								mb={{ base: "3", lg: "6" }}
							>
								<Image
									objectFit="contain"
									src={item?.author_details?.profile_image}
									alt={item?.author_details?.name}
									maxW={"100px"}
									rounded={"xl"}
								/>

								<Box justifyContent={"flex-start"}>
									<Flex justifyContent={"space-between"} mb={"1"}>
										<Flex alignItems={"center"} gap={1}>
											<Text>{item?.author_details?.name}</Text>
										</Flex>
										<Flex
											alignItems={"center"}
											justifyContent={"center"}
											gap={1}
										>
											<FiPlusCircle />
											<Text bg={"none"}>follow</Text>
										</Flex>
									</Flex>
									{/* <Flex alignItems={"center"} gap={"1"} mb={"4"} mt={"1"}>
										<IoEyeOutline />
										<Text>1m Views</Text>
									</Flex> */}

									<Box>
										<Text fontWeight={"semibold"} mb={"2"}>
											Top Article
										</Text>
										<Text fontSize={"sm"}>{item?.title}</Text>
									</Box>
								</Box>
							</Grid>
						);
					})}
			</Flex>
		</Box>
	);
};

export default RecentArticles;
