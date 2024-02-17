import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import React from "react";
import appRoutes from "../../utils/appRoutes";

function OptimalPace() {
	return (
		<Box
			m={{ base: "1rem", lg: "10rem 1rem 5rem 3rem" }}
			display={{ base: "none", md: "block" }}
		>
			<Container maxW={"7xl"}>
				<Flex
					w={{ base: "100%", lg: "80%" }}
					gap={"2rem"}
					direction={{ base: "column", lg: "row" }}
				>
					<Flex
						direction={"column"}
						maxW={"417px"}
						justify={"start"}
						align={{ base: "center", lg: "start" }}
					>
						<Heading fontSize={"1.8rem"} fontWeight={"700"}>
							Optimal Pace for Your Project
						</Heading>
						<Box w={"121px"} border={"2px solid #E9000E"} m={"1.2rem 0"}>
							{""}
						</Box>
						<Box w={"417px"}>
							<Image
								src="/assets/softwareDevelopment/optimal-pace.png"
								alt="Optimal pace image"
								w={"100%"}
							/>
						</Box>
					</Flex>
					<Flex direction={"column"}>
						<Text fontSize={"1rem"} fontWeight={"400"} color={"#1E1E1E"}>
							Whether you're starting a product development project and need to
							validate your concept, tackling a midsize custom software project
							with fluid requirements, or initiating incremental development on
							large, intricate software that can be broken down into manageable
							parts, we're here to provide swift value. Our services cater to
							all scenarios, ensuring your idea is tested and your project gains
							momentum quickly.
						</Text>
						<Text
							fontSize={"1rem"}
							fontWeight={"400"}
							color={"#1E1E1E"}
							m={"2rem 0"}
						>
							Ready to transform your ideas into reality and accelerate your
							software development? request a quote to begin your software
							development journey with our expert team today!
						</Text>
						<Link
							href={appRoutes.services["cost-calculator"]}
							_hover={{ textDecoration: "none" }}
							fontSize={{ base: ".7rem", md: "1rem" }}
							p={".5rem 1.2rem"}
							color={"#263238"}
							border={"2px solid #263238"}
							borderRadius={"10px"}
							textTransform={"uppercase"}
							maxW={"12rem"}
						>
							get a quote
						</Link>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
}

export default OptimalPace;
