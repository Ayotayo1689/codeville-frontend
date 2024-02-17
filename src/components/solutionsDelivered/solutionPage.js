import React from "react";
import {
	Box,
	Tabs,
	TabList,
	TabPanel,
	TabPanels,
	Image,
	Grid,
	Tab,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";
import { BsArrowUpRightCircle, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSolutionIndex } from "@/features/healthcare";

const SolutionsDesktop = ({ stacks = [], categories, projects }) => {
	const dispatch = useDispatch();
	const { selectedSolutionIndex } = useSelector((state) => state.healthcare);
	return (
		<Flex justifyContent={"center"} mb={{ base: "8rem", lg: "14rem" }}>
			<Box>
				<Tabs gap="7" index={selectedSolutionIndex}>
					<Flex
						justifyContent={"center"}
						bg={
							"linear-gradient(180deg, #EAEAEA 0%, rgba(233, 233, 233, 0.5) 144.82%);"
						}
						width={"100vw"}
						paddingBlock={"14"}
						boxShadow={"md"}
					>
						<TabList border={"none"} gap={"3"}>
							<Grid templateColumns={"1fr 1fr 1fr 1fr"} gap={"2rem"}>
								{categories?.map((item, index) => {
									return (
										<>
											<Tab
												bg={"#C71319"}
												key={index}
												onClick={() =>
													dispatch(setSelectedSolutionIndex(index))
												}
												textTransform={"capitalize"}
												_selected={{
													backgroundColor: "black",
													color: "white",
													// border: `1px solid ${colors.primaryColor}`,
												}}
												fontSize={"lg"}
												color={"white"}
												paddingBlock={"6"}
												paddingInline={"8"}
											>
												{item?.name}
												<Box
													position={"relative"}
													top={"-0.8rem"}
													right={"-1rem"}
												>
													<BsArrowUpRightCircle mt={"4rem"} fontSize={"1rem"} />
												</Box>
											</Tab>
										</>
									);
								})}
							</Grid>
						</TabList>
					</Flex>

					<TabPanels mt={"2rem"}>
						{categories?.map((item, index) => {
							return (
								<TabPanel
									key={index}
									display={"flex"}
									justifyContent={"center"}
								>
									<Grid
										templateColumns={{
											base: "1fr 1fr",
											lg: "370px 370px 370px",
										}}
										gap={{ base: "1rem", lg: "5rem" }}
										justifyItems={"center"}
										maxW={"8xl"}
									>
										{item?.solution_projects?.map((item, key) => {
											return (
												<Flex
													key={item.id}
													boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
													borderRadius={"10px"}
												>
													<Link
														href={`/solutions/solutions-detail/${
															item?.id
														}/${item?.slug?.replace(/_/g, "-")}`}
														_hover={{ textDecoration: "none" }}
													>
														<Flex direction={"column"}>
															<Box w={"100%"} minH={"262px"} flex={"1"}>
																<Image
																	src={item.image}
																	alt="Case study image"
																	w={"100%"}
																	objectFit={"cover"}
																	borderTopRadius={"10px"}
																/>
															</Box>
															<Flex
																direction={"column"}
																gap={"1rem"}
																p={"1rem"}
																flex={"1"}
															>
																<Heading as={"h4"} fontSize={"22px"}>
																	{item?.title}
																</Heading>

																<Text
																	fontStyle={"15px"}
																	fontWeight={"400"}
																	color={"#303030"}
																>
																	{item?.short_description?.slice(0, 150)}...
																</Text>
																<Flex
																	align={"center"}
																	gap={".8rem"}
																	p={"1rem 0"}
																>
																	<Text
																		align={"center"}
																		gap={"1rem"}
																		fontSize={"1rem"}
																		fontWeight={"500"}
																	>
																		Read more
																	</Text>
																	<BsArrowRight
																		fontSize={"1rem"}
																		fontWeight={"500"}
																	/>
																</Flex>
															</Flex>
														</Flex>
													</Link>
												</Flex>
											);
										})}
									</Grid>
								</TabPanel>
							);
						})}
					</TabPanels>
				</Tabs>
			</Box>
		</Flex>
	);
};

export default SolutionsDesktop;
