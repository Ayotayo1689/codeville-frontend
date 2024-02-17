import React from "react";
import HeaderOne from "../HeaderOne";
import SoftwareService from "./SoftwareService";
import OptimalPace from "./OptimalPace";
import AffordableIT from "./AffordableIT";
import SoftwareDevelopmentSteps from "./SoftwareDevelopmentSteps";
import SoftwareServiceMobile from "./SoftwareServiceMobile";
import EnterpriseSoftware from "./EnterpriseSoftware";
import AdvancedBusinessTasks from "./AdvancedBusinessTasks";
import SmoothDevelopment from "./SmoothDevelopment";
import SmoothDevelopmentMobile from "./SmoothDevelopmentMobile";
import ProjectPace from "./ProjectPace";
import OptimalPricing from "./OptimalPricing";
import ContactUs from "../contactUs";
import {
	Box,
	Container,
	Flex,
	Grid,
	Image,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import appRoutes from "../../utils/appRoutes";

function softwareDevelopment() {
	return (
		<>
			<Box minHeight={"100vh"} mt={"5rem"} overflowX={"hidden"}>
				<HeaderOne heading={"services"} title={"software development"} />
				<Box px={{ lg: "5rem", md: "1rem", sm:"2rem", base: "1rem" }} >
					<Box>
						<Container maxW={"7xl"} margin={"0 auto"}>
							<Grid
								templateColumns={{ sm: "100%", lg: "1fr 1fr" }}
								gap={"2rem"}
							>
								<Box>
									<Image
										src="/assets/softwareDevelopment/hero-img.png"
										alt="Software development"
									/>
								</Box>
								<Flex direction={"column"} gap={"1.5rem"}>
									<Flex
										gap={"2rem"}
										display={{ base: "none", lg: "flex" }}
										justify={"end"}
									>
										<Text
											fontSize={"6rem"}
											color={"#A90909"}
											fontWeight={"800"}
										>
											40+
											<span
												style={{
													fontSize: "1.2rem",
													fontWeight: "500",
													color: "#263238",
												}}
											>
												Developers
											</span>
										</Text>
										<Text
											fontSize={"6rem"}
											color={"#A90909"}
											fontWeight={"800"}
										>
											29+
											<span
												style={{
													fontSize: "1.2rem",
													fontWeight: "500",
													color: "#263238",
												}}
											>
												Projects
											</span>
										</Text>
									</Flex>
									<Text
										textAlign={{ base: "center", lg: "left" }}
										fontSize={{ base: ".9rem", lg: "1.1rem" }}
										fontWeight={"600"}
									>
										Experience the power of our software development services
										with a dedicated team of experts by your side. We handle all
										aspects of software engineering and support, delivering
										high-quality, scalable, and secure solutions that are easy
										to maintain. The best part? Our services are
										budget-friendly, ensuring you get exceptional value without
										exceeding your budget.
									</Text>
									<Flex gap={"1rem"} justify={{ base: "center", lg: "end" }}>
										<ChakraLink
											as={Link}
											href={{
												pathname: appRoutes.contactUs,
												query: { service: "software-development-services" },
											}}
											service="software_development_services"
											className="request-services"
											_hover={{ textDecoration: "none" }}
											fontSize={{ base: ".7rem", md: "1rem" }}
											color={"#FFFFFF"}
											p={".7rem"}
											bg={
												"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"
											}
											borderRadius={"10px"}
											textTransform={"uppercase"}
										>
											Request software services
										</ChakraLink>
										<ChakraLink
											as={Link}
											href={{
												pathname: appRoutes.services["cost-calculator"],
												query: { service: "softwareDevelopment-5" },
											}}
											_hover={{ textDecoration: "none" }}
											fontSize={{ base: ".7rem", md: "1rem" }}
											p={".7rem"}
											color={"#263238"}
											border={"2px solid #263238"}
											borderRadius={"10px"}
											textTransform={"uppercase"}
										>
											get a quote
										</ChakraLink>
									</Flex>
								</Flex>
							</Grid>
						</Container>
					</Box>

					<SoftwareService />

					<OptimalPace />

					<AffordableIT />

					<SoftwareServiceMobile />

					<SoftwareDevelopmentSteps />

					<EnterpriseSoftware />

					<AdvancedBusinessTasks />

					<SmoothDevelopment />

					<SmoothDevelopmentMobile />

					<ProjectPace />
				</Box>

				<OptimalPricing />

				<ContactUs subtitle="We’re here to support" id="services-form" />
			</Box>
		</>
	);
}

export default softwareDevelopment;
