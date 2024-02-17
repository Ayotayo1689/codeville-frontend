import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Image,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import appRoutes from "@/utils/appRoutes";

function Hero() {
	return (
		<Box>
			<Container maxW={"7xl"} margin={"0 auto"}>
				<Grid
					templateColumns={{ base: "100%", lg: "1fr 1fr" }}
					gap={"3rem"}
					alignItems={"center"}
				>
					<Flex direction={"column"} gap={"1.5rem"}>
						<Flex borderLeft={"2px solid #E9000E"} p={"1rem 1.5rem"}>
							<Heading fontSize={"2rem"} fontWeight={"700"} color={"#1F1F1F"}>
								Best Digital & Physical Sales IT Solutions for you
							</Heading>
						</Flex>
						<Text
							textAlign={"start"}
							fontSize={{ base: ".9rem", lg: "1.1rem" }}
							fontWeight={"600"}
						>
							Retail IT services focus on achieving higher efficiency in
							business operations and creating truly customer-centric experience
							for digital and physical sales channels. With over 15 years of
							domain experience, our retail IT consultants offer custom software
							solutions to the entire retail ecosystem.
						</Text>
						<Flex gap={"1rem"} justify={{ base: "center", lg: "start" }}>
							<ChakraLink
								as={Link}
								href={{
									pathname: "/contact-us",
									query: { service: "industries/retail" },
								}}
								service="industries/retail"
								className="request-services"
								_hover={{ textDecoration: "none" }}
								fontSize={{ base: ".7rem", md: "1rem" }}
								fontWeight={"700"}
								color={"#FFFFFF"}
								p={".7rem"}
								bg={"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
								borderRadius={"10px"}
								textTransform={"uppercase"}
							>
								Request Retail services
							</ChakraLink>
							<ChakraLink
								as={Link}
								href={{
									pathname: appRoutes.services["cost-calculator"],
									query: {service: "retail-11"},
								}}
								_hover={{ textDecoration: "none" }}
								fontSize={{ base: ".7rem", md: "1rem" }}
								p={".7rem"}
								color={"#B60E09"}
								border={"2px solid #B60E09"}
								borderRadius={"10px"}
								textTransform={"uppercase"}
							>
								get a quote
							</ChakraLink>
						</Flex>
					</Flex>
					<Box maxW={"30rem"}>
						<Image src="/assets/retail/amico.png" alt="Jewelry shop" />
					</Box>
				</Grid>
			</Container>
		</Box>
	);
}

export default Hero;
