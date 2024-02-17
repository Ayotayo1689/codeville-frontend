import React from "react";
import { Box, Flex, Heading, Highlight, Image, Text } from "@chakra-ui/react";

import Link from "next/link";

function BottomContactUs() {
	return (
		<Flex width={"100vw"} mx={"auto"} display={{ base: "block", md: "flex" }}>
			<Box
				bg=" #920B07"
				p={{ base: "1rem", lg: "3rem" }}
				flex={"1"}
				textAlign={"center"}
			>
				<Flex
					bg=" #920B07"
					transform="skewX(-25deg)"
					transformOrigin="top right"
					justifyContent={"center"}
					gap={"2rem"}
				>
					<Heading
						lineHeight="tall"
						transform="skewX(25deg)"
						color={"white"}
						fontSize={{ base: "xl", lg: "3xl" }}
					>
						<Highlight
							query="Great"
							styles={{ px: "2", py: "1", color: "red" }}
						>
							Let’s Start Something Great!
						</Highlight>
					</Heading>
					<Image src="/assets/blog/arrow.svg" alt="Arrow"/>
				</Flex>
			</Box>

			<Box bg={"#E9000E"} flex={"1"}>
				<Box
					bg={"#E9000E"}
					transform="skewX(-25deg)"
					transformOrigin="top right"
					height={"100%"}
				>
					<Flex
						px={"3rem"}
						py={{ base: "0.5rem", lg: "3rem" }}
						gap={"2rem"}
						transform="skewX(25deg)"
					>
						<Image src="/assets/blog/phone.svg" alt="phone"/>

						<Box color={"white"}>
							<Text>Call Us 24/7</Text>
							<Text fontWeight={"semibold"} fontSize={"xl"}>
								<Link
									href="tel:+23414536000"
									color="white"
									itemProp="telephone"
								>
									(+234) 1 453 6000
								</Link>
							</Text>
						</Box>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
}

export default BottomContactUs;
