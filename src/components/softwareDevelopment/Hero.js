import {
	Box,
	Container,
	Flex,
	Grid,
	Image,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import appRoutes from "../../utils/appRoutes";

function Hero() {
	return (
		<Box>
			<Container maxW={"7xl"} margin={"0 auto"}>
				<Grid templateColumns={{ sm: "100%", lg: "1fr 1fr" }} gap={"2rem"}>
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
							<Text fontSize={"6rem"} color={"#A90909"} fontWeight={"800"}>
								20+
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
							<Text fontSize={"6rem"} color={"#A90909"} fontWeight={"800"}>
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
							With our software development services, it's like having your own
							dedicated team of experts. We'll take care of all your software
							engineering and support needs, building you a high-quality,
							scalable and secure software that is easy to maintain. The best
							part? You'll get all this without breaking the bank.
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
								bg={"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
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
	);
}

export default Hero;
