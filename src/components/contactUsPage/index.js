import React from "react";
import LandingLayout from "../../layouts/landing.layout";
import HeaderOne from "../HeaderOne";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import FullForm from "./FullForm";
import ContactCard from "./contactCard";

const Contact = ({ service }) => {
	return (
		<>
			<Box mt={"5rem"} minHeight={"100vh"}>
				<HeaderOne
					heading={"contact us"}
					title={"start your way to digital success"}
				/>
				{/* --------- Section one --------- */}
				<Container maxW={"7xl"}>
					<FullForm service={service} />
				</Container>
				{/* ----------Contact Cards---------- */}

				<ContactCard />

				{/* ----------Looking for a partner to support--------- */}
				<Box>
					<Container maxW={"7xl"}>
						<Flex
							gap={"4rem"}
							//mt={"1rem"}
							direction={{ base: "column", md: "row" }}
							p={{ base: "1rem", lg: "0 80px" }}
						>
							<Flex
								direction={"column"}
								gap={"2rem"}
								w={{ base: "100%", md: "60%" }}
								pt={"2rem"}
							>
								<Flex direction={"column"} gap={"1rem"}>
									<Heading size={"lg"} color={"#565656"}>
										Looking for a Partner to Support Your
									</Heading>
									<Heading size={"lg"} color={"#565656"}>
									<span style={{ color: "#E9000E", paddingTop: '1rem' }}>
										Business Growth
									</span>{" "}
										or Monetize Your Idea?
									</Heading>
								</Flex>
								<Box borderTop={{ base: "1px solid gray" }} pt={"1rem"}>
									<Text fontSize={"19px"} fontWeight={"400"}>
										Tanta will help you improve your business operations with an
										optimal service or assist you in launching a product that
										would win customers fast.
									</Text>
								</Box>
							</Flex>
							<Flex justify={"center"} w={{ base: "100%", md: "40%" }}>
								<Image src="/assets/contactUs/brochure.png" maxW={"80%"} alt={'Tanta brochure'}/>
							</Flex>
						</Flex>
					</Container>
				</Box>
			</Box>
		</>

	);
};
Contact.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Contact;

