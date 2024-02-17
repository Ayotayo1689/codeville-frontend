import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	List,
	ListIcon,
	ListItem,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { softwareProductList } from "./data";

function ServiceMap({ serviceMap }) {
	return (
		<Box>
			<Container maxW={"7xl"}>
				<Grid templateColumns={{ lg: "repeat(1, 1fr)" }} gap={"3rem"}>
					<Box>
						<Accordion defaultIndex={[0]} mt={"2rem"}>
							{serviceMap?.map((item) => {
								return (
									<AccordionItem
										key={item.id}
										mt={"1rem"}
										_hover={{ bgColor: "none" }}
									>
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
													{item?.name}
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>

										<AccordionPanel pb={4} pt={"1rem"}>
											<List spacing={3} mt={"1rem"}>
												{/* {item.listItems.map((listItem, index) => {
													return ( */}
												<ListItem fontSize={".99rem"}>
													<Flex align={"start"}>
														<ListIcon
															as={RiCheckboxBlankFill}
															color={"#E9000E"}
															fontSize={".9rem"}
															mt={".4rem"}
														/>
														{item?.description}
													</Flex>
												</ListItem>
												);
												{/* })} */}
											</List>
										</AccordionPanel>
									</AccordionItem>
								);
							})}
						</Accordion>
					</Box>
				</Grid>
			</Container>
		</Box>
	);
}

export default ServiceMap;
