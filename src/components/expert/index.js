import React, {useState} from "react";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Container,
	Flex,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import {sideBarData} from "./data";
import {MdKeyboardArrowRight} from "react-icons/md";
import LandingLayout from "../../layouts/landing.layout";
import Link from "next/link";
import appRoutes from "../../utils/appRoutes";

function Expert({ expert }) {
	const [activeLink, setActiveLink] = useState({});
	const [isDesktop] = useMediaQuery("(min-width: 999px)");
	return (
		<>
			<Box mt={"3rem"}>
				<Container maxW={"7xl"} px={{ lg: "5rem", "2xl": "0.4rem" }}>
					<Container maxWidth={"100%"}>
						<Flex
							direction={{ lg: "row", base: "column" }}
							gap={"2rem"}
							justify={{ lg: "space-between", base: "center" }}
							alignItems={{ lg: "center", base: "center" }}
							mt={"10rem"}
						>
							<Box
								width={{ lg: "100%", base: "50%" }}
								paddingTop={{ lg: "0", base: "1rem" }}
							>
								<Image
									src="/assets/clients/expert/amico.png"
									alt="img"
									width={542}
									height={492.98}
								/>
							</Box>

							<Box>
                                <Text
                                    as="h2"
                                    fontSize={{lg: "40px", base: "20px"}}
                                    fontWeight={"600"}
                                    textAlign={{lg: "right", base: "center"}}
                                    lineHeight={"143.5%"}
                                >
                                    Do you have a tech question or would you like to schedule an
                                    interview?
                                </Text>
                                <Link href={appRoutes.contactUs}>
                                    <Flex justify={{lg: "right", base: "center"}}>
                                        <Button
                                            bg={"#CE0000"}
                                            color={"#FFFFFF"}
                                            mt={{lg: "4.5rem", base: "2rem"}}
                                            borderRadius={"10px"}
                                            width={{lg: "45%", base: "45%"}}
                                            height={{lg: "49px", base: "36px"}}
                                            background={
                                                "linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"
											}
											type="submit"
											fontSize={{ lg: "16px", base: "12px" }}
										>
											REQUEST AN EXPERT
										</Button>
									</Flex>
								</Link>
							</Box>
						</Flex>
					</Container>
					<Container maxW={"100%"} mt={{ lg: "4rem", base: "2rem" }}>
						<Flex
							gap={"15px"}
							alignItems={"flex-start"}
							justifyContent={"center"}
						>
							<Box
								borderLeft={{
									lg: "6px solid #B20000",
									base: "3px solid #B20000",
								}}
								px={"1rem"}
							>
								<Text
									fontSize={{ lg: "19px", base: "12px" }}
									textAlign="justify"
									lineHeight={{ lg: "170%", base: "170%" }}
								>
									Tanta Innovative is a globally recognized IT consulting and
									software development firm with a proven track record of
									success in a variety of industries. We specialize in IoT, big
									data, information security, mobile and web development,
									collaboration and knowledge management, and more.
								</Text>
								<br />
								<Text
									textAlign="justify"
									fontSize={{ lg: "19px", base: "12px" }}
									lineHeight={{ lg: "170%", base: "170%" }}
								>
									Our team of experts is dedicated to providing our clients with
									the best possible service. We work closely with our clients to
									understand their specific needs and develop customized
									solutions that meet those needs. We are also committed to
									sharing our knowledge and expertise with the IT community. We
									regularly speak at industry events, write blog posts, and
									contribute to other publications.
								</Text>
							</Box>
						</Flex>
					</Container>
					<Flex
						gap={"2rem"}
						justify={"center"}
						mb={"7rem"}
						mt={{ lg: "7rem", base: "3.5rem" }}
					>
						<Flex
							display={{ lg: "block", base: "none" }}
							flexDir="column"
							boxShadow={"lg"}
							height={"fit-content"}
							flex={1}
							minW={"300px"}
							position="sticky"
							top="10rem"
							pb={"1rem"}
							borderBottom={"lg"}
						>
							<Text
								as="h2"
								fontSize={"2xl"}
								fontWeight={"semibold"}
								mb={"1rem"}
								color={"white"}
								textAlign={"center"}
								paddingBlock={".5rem"}
								borderTopRadius={"lg"}
								background={
									"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
								}
							>
								CONTENTS
							</Text>
							<Box px={"1rem"}>
								{sideBarData.map((item, index) => {
									return (
										<Flex
											paddingInline={".4rem"}
											justifyContent={"space-between"}
											alignItems={"center"}
											key={index}
											p={".3rem"}
										>
											<Link
												onClick={() => {
													setActiveLink({ [item.id]: true });
												}}
												style={{
													color: activeLink[item.id] ? "red" : "",
													fontSize: "18px",
													fontWeight: "400",
													cursor: "pointer",
													width: "100%",
												}}
												href={`#${item.id}`}
											>
												{item.title}
											</Link>

											<MdKeyboardArrowRight
												cursor={"pointer"}
												size={"2rem"}
												style={{ marginLeft: "47px" }}
											/>
										</Flex>
									);
								})}
							</Box>
						</Flex>
						<Box width={"100%"}>
							<Text
								textAlign="justify"
								fontSize={{ lg: "19px", base: "14px" }}
								mb={"4rem"}
								marginRight={{ lg: "auto", base: "5%" }}
								marginLeft={{ lg: "auto", base: "5%" }}
								lineHeight={{ lg: "170%", base: "170%" }}
							>
								If you need technical or industry-specific information for your
								article, or if you would like to interview one of our experts,
								please contact us. We have a team of experts in a variety of
								fields, and we would be happy to connect you with the right
								person.
							</Text>
							{expert.map((item, index) => {
								if (item?.experts.length >= 1) {
									if (isDesktop) {
										return (
											// <Box maxHeight="fit-content">
											<Box
												scrollMarginTop={"150px"}
												key={index}
												marginBottom="4rem"
												width="95%"
												maxHeight={"fit-content"}
												marginLeft={{ lg: "23", base: "5%" }}
												marginRight={{ lg: "0", base: "5%" }}
												id={item.id}
											>
												<Box>
													<Text
														fontWeight={"700"}
														fontSize={"30px"}
														lineHeight={"170%"}
													>
														{item.name}
													</Text>
													<Box
														width={"43px"}
														height={"0"}
														border={"2px solid #E9000E"}
													/>

													<Text
														style={{ textAlign: "justify" }}
														fontSize={"19px"}
														mt={"1rem"}
														lineHeight={"170%"}
													>
														{item.description}
													</Text>
												</Box>
												<Box mt={"3rem"}>
													<Box width={"100%"} height={"fit-content"}>
														<Flex justify={"space-between"} flexWrap={"wrap"}>
															{item.experts.map((expert, index) => (
																<>
																	<Box
																		width={"50%"}
																		height={"108px"}
																		mb={"2rem"}
																		key={index}
																	>
                                                                        <Link href={`/leadership/${expert.id}`}>
                                                                            <Flex alignItems={"center"} gap={"1rem"}>
                                                                                <Image
                                                                                    src={expert.profile_image}
                                                                                    alt="profile_image"
                                                                                    width={108}
                                                                                    height={108}
                                                                                />
                                                                                <Flex flexDir={"column"} gap={"0.1rem"}>
                                                                                    <Text
                                                                                        fontWeight={"700"}
                                                                                        fontSize={"15px"}
                                                                                    >
                                                                                        {expert.name}
                                                                                    </Text>
                                                                                    <Text
                                                                                        fontWeight={"400"}
                                                                                        fontSize={"16px"}
                                                                                    >
                                                                                        {expert.role}
                                                                                    </Text>
                                                                                </Flex>
                                                                            </Flex>
                                                                        </Link>
																	</Box>
																</>
															))}
														</Flex>
													</Box>
												</Box>
											</Box>
											// </Box>
										);
									} else {
										return (
											<>
												<Accordion allowToggle>
													<AccordionItem margin={"0 5%"} width={"90%"}>
														<h2>
															<AccordionButton
																padding={"8px"}
																border={"1px solid black"}
																mt={"10px"}
																display={"flex"}
																justifyContent={"space-between"}
																bg={"#FFFFFF"}
															>
																<Flex flexDirection={"column"}>
																	<Box
																		as="span"
																		flex="1"
																		textAlign="left"
																		fontSize={"17px"}
																		fontWeight={"bold"}
																	>
																		{item.name}
																	</Box>
																	<Box
																		width={"25px"}
																		height={"0"}
																		border={"2px solid #E9000E"}
																	/>
																</Flex>

																<AccordionIcon />
															</AccordionButton>
														</h2>
														<AccordionPanel
															pb={4}
															fontSize={"12px"}
															textAlign="justify"
															mb={"8px"}
															bg={"#F3F3F3"}
															lineHeight={{
																lg: "160%",
																base: "170%",
															}}
														>
															{item.description}
														</AccordionPanel>
														<AccordionPanel pb={4}>
															<div
																style={{
																	display: "flex",
																	flexWrap: "wrap",
																	justifyContent: "space-between",
																}}
															>
																{item.experts.map((expert, index) => (
																	<>
																		<Flex
																			alignItems={"center"}
																			width={"46%"}
																			key={index}
																			mb={"1rem"}
																		>
																			<Box width={"50px"} height={"50px"}>
																				<Image
																					src={expert.profile_image}
																					alt="profile_image"
																					width={50}
																					height={50}
																				/>
																			</Box>

																			<Box>
																				<Text
																					fontSize={"9px"}
																					fontWeight={"bold"}
																					ml={"10px"}
																					w={"100%"}
																				>
																					{expert.name}
																				</Text>
																				<Text
																					fontSize={"9px"}
																					fontWeight={"400"}
																					ml={"10px"}
																					w={"100%"}
																				>
																					{expert.role}
																				</Text>
																			</Box>
																		</Flex>
																	</>
																))}
															</div>
														</AccordionPanel>
													</AccordionItem>
												</Accordion>
											</>
										);
									}
								}
							})}
						</Box>
					</Flex>
				</Container>
			</Box>
		</>
	);
}

Expert.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Expert;
