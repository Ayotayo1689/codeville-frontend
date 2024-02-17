import React from "react";
import { Container, Text, Box, Flex, Image } from "@chakra-ui/react";
import ContactUs from "../../contactUs";
import { formList } from "./data";
import { FaCheck } from "react-icons/fa";
import ContactUsForm from "../../contactUsPage/contactUsForm";
import { colors } from "../../../../styles/theme";

const HealthCareForms = () => {
	return (
		<Box>
			<Container maxW={"7xl"} justifyContent={"center"} py={"3rem"} pb={"2rem"}>
				<Text fontSize={{ base: "lg", lg: "4xl" }} fontWeight={"bold"}>
					{formList[0].title}
				</Text>
				<Box
					w={"4rem"}
					height={".2rem"}
					bg={colors.primaryColor}
					mb={"6"}
				></Box>
				<Flex
					bg={"#F6F8F8"}
					pb={"2rem"}
					display={{ base: "column", lg: "flex" }}
				>
					<Box
						p={"2rem"}
						bg={"white"}
						boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
					>
						<Text
							fontSize={{ base: "lg", lg: "2xl" }}
							fontWeight={"bold"}
							pb={"1rem"}
						>
							We Offer:
						</Text>
						{formList[0].items.map((item, index) => {
							return (
								<Flex key={index} alignItems={"center"} gap={"3"} pb={"1rem"}>
									<FaCheck color={"red"} />
									<Text fontSize={{ base: "0.8rem", lg: "18px" }}>
										{item.name}
									</Text>
								</Flex>
							);
						})}
					</Box>
					<Box p={{ base: "1rem", lg: "2rem 4rem" }}>
						<Flex>
							<Text fontSize={{ base: "0.8rem", lg: "18px" }} opacity={"0.5"}>
								Please fill in the form below, and our rep will get back to you
								in 30 minutes to discuss your support needs.
							</Text>
							<Box>
								<Image src={"/assets/healthcare/icon1.png"} alt={"icon"} />
							</Box>
						</Flex>
						<Box>
							<ContactUsForm
								placeholder="I’m interested in IT support team augmentation for my healthcare organization."
								submit="START A DIALOG"
							/>
						</Box>
					</Box>
				</Flex>
			</Container>
			<Box bg={"#FDE6E7"} w={"100%"}>
				<Flex
					alignItems={"center"}
					justifyContent={"center"}
					p={{ base: "1rem", lg: "3rem 1rem" }}
					gap={{ base: "1rem", lg: "2rem" }}
					flexWrap={"wrap"}
				>
					<Image
						src={"/assets/healthcare/icon3.png"}
						alt={"icon"}
						w={{ base: 100, lg: 200 }}
					/>
					<Image
						src={"/assets/healthcare/Link.png"}
						alt={"icon"}
						w={{ base: 100, lg: 150 }}
					/>
					<Image
						src={"/assets/healthcare/icon2.png"}
						alt={"icon"}
						w={{ base: 50, lg: 100 }}
					/>
					<Box>
						<Text
							fontWeight={"bold"}
							fontSize={{ base: "lg", lg: "2xl" }}
							pb={"4px"}
						>
							In the Spotlight of the IT Industry
						</Text>
						<Text fontSize={{ base: "0.7rem", lg: "lg" }}>
							Tanta’s commitment to service quality and clients’ success
							<span style={{ display: "block" }}>is highly praised.</span>
						</Text>
					</Box>
				</Flex>
			</Box>
			<ContactUs subtitle="We’re here to support" />
		</Box>
	);
};

export default HealthCareForms;
