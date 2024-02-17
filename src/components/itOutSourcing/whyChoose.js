import React from "react";
import { colors } from "../../../styles/theme";
import {
	Box,
	Text,
	Image,
	Grid,
	List,
	ListItem,
	Flex,
} from "@chakra-ui/react";
import { RiCheckboxBlankFill } from "react-icons/ri";

const WhyChoose = () => {
	return (
		// <Box>
			<Box width={"100%"}>
				{" "}
				<Text fontSize={{lg:"3xl", base:"20px"}} fontWeight={"bold"}>
					Why Choose
					<span style={{ color: `${colors.primaryColor}` }}>
						{" "}
						Tanta Innovative
					</span>{" "}
				</Text>
				<Box
					w={"4rem"}
					height={".2rem"}
					bg={colors.primaryColor}
					mt={"2"}
				></Box>
				<Flex
					// templateColumns={{ base: "1fr 1fr 1fr ", lg: "1fr 1fr 1fr" }}
					flexDir={{lg:"row", base:"column"}}
					my={"6"}
					gap={"2rem"}
					alignItems={"center"}
				>
					<Image
						src="/assets/itOutSourcing/img1.svg"
						mt={{ base: "2", lg: "0" }}
						alt="img"
					></Image>
					<Image src="/assets/itOutSourcing/img2.svg" alt="img"></Image>
					<Image src="/assets/itOutSourcing/img3.svg" alt="img"></Image>
				</Flex>
				<Flex direction={{ base: "column", lg: "row" }} gap={"8"}>
					<List
						spacing={5}
						paddingBlock={"1rem"}
						fontFamily={"Roboto"}
						fontSize={{ lg: "1.3rem" }}
						textTransform={"capitalize"}
					>
						<ListItem>
							<Flex gap={2} fontSize={{lg:'1.12rem', base:'15px'}}>
								<RiCheckboxBlankFill color={`${colors.primaryColor}`}
													 style={{
														 minWidth: "10px",
														 maxWidth: "10px",
														 marginTop: "2px",
													 }}
								/>
								<Text>Full-scale{" "}
								<span style={{ fontWeight: "bold" }}>Project Management </span>{" "}
									Office to handle projects of any complexity. </Text>
							</Flex>
						</ListItem>
						<ListItem>
							<Flex gap={2} fontSize={{lg:'1.12rem', base:'15px'}}>
								<RiCheckboxBlankFill color={`${colors.primaryColor}`}
													 style={{
														 minWidth: "10px",
														 maxWidth: "10px",
														 marginTop: "2px",
													 }}
								/>
								<Text>
							15 years in help-desk on ITIL principles.
								</Text>
							</Flex>
						</ListItem>
						<ListItem>
							<Flex gap={2} fontSize={{lg:'1.12rem', base:'15px'}}>
								<RiCheckboxBlankFill color={`${colors.primaryColor}`}
													 style={{
														 minWidth: "10px",
														 maxWidth: "10px",
														 marginTop: "2px",
													 }}
								/>
								<Text>
							9 years in DevOps practices.
								</Text>
							</Flex>
						</ListItem>
						<ListItem>
							<Flex gap={2} fontSize={{lg:'1.12rem', base:'15px'}}>
								<RiCheckboxBlankFill color={`${colors.primaryColor}`}
													 style={{
														 minWidth: "10px",
														 maxWidth: "10px",
														 marginTop: "2px",
													 }}
								/>
								<Text>
							Mature{" "}
							<span style={{ fontWeight: "bold" }}>Quality Management </span>{" "}
							system proved with ISO 9001 certificate to deliver tangible
							service value and predictable results.
								</Text>
							</Flex>
						</ListItem>
						{/* You can also use custom icons from react-icons */}
					</List>
					<List
						spacing={5}
						paddingBlock={"1rem"}
						fontFamily={"Roboto"}
						fontSize={{ lg: "1.3rem" }}
						textTransform={"capitalize"}
					>
						<ListItem>
							<Flex gap={2} fontSize={{lg:'1.12rem', base:'15px'}}>
								<RiCheckboxBlankFill color={`${colors.primaryColor}`}
													 style={{
														 minWidth: "10px",
														 maxWidth: "10px",
														 marginTop: "2px",
													 }}
								/>
								<Text>
							Solid security{" "}
							<span style={{ fontWeight: "bold" }}>Management System</span>{" "}
							backed by ISO 27001 certification to protect the customers’ data
							we access.
								</Text>
							</Flex>
						</ListItem>
						<ListItem>
							<Flex gap={2} fontSize={{lg:'1.12rem', base:'15px'}}>
								<RiCheckboxBlankFill color={`${colors.primaryColor}`}
													 style={{
														 minWidth: "10px",
														 maxWidth: "10px",
														 marginTop: "2px",
													 }}
								/>
								<Text>
							<span style={{ fontWeight: "bold" }}>76% </span> of our revenue
							comes from 1+ year-long customers, such as eBay, IBM, Baxter, NASA
							JPL, Nielsen, and more.
								</Text>
							</Flex>
						</ListItem>
						<ListItem>
							<Flex gap={2} fontSize={{lg:'1.12rem', base:'15px'}}>
								<RiCheckboxBlankFill color={`${colors.primaryColor}`}
													 style={{
														 minWidth: "10px",
														 maxWidth: "10px",
														 marginTop: "2px",
													 }}
								/>
								<Text>
							<span style={{ fontWeight: "bold" }}>Consulting Expertise </span>{" "}
							in over 30 industries to bridge business and technology.
								</Text>
							</Flex>
						</ListItem>
						{/* You can also use custom icons from react-icons */}
					</List>
				</Flex>
			</Box>
		// </Box>
	);
};

export default WhyChoose;
