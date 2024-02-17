import React from "react";
import {Container, Box, Flex, Text, Button, Heading, Image} from "@chakra-ui/react";
import Link from "next/link";
import appRoutes from "../../../utils/appRoutes";
import SignUpForm from "@/components/authenticationPages/register/signUpForm";
import Footer from "@/components/authenticationPages/Footer";

function VerifyYourEmail() {
	return (
		<Box
			// bgImg={{base: "none", lg: "/assets/authenticationPages/page-bg.png"}}
			// bgPosition={"top right"}
			// bgRepeat={"no-repeat"}

		>
			<Container maxW={"7xl"} p={{base: "1rem", lg: "2rem"}}>
				<Flex
					justifyContent={"center"}
					alignItems={"center"}
					w={"100%"}
					flexDir={{ base: "column", md: "row", lg: "row" }}
					gap={"3rem"}
					// minH={"100vh"}
				>
					{/*<Flex*/}
					{/*	align={"center"}*/}
					{/*	borderRadius={"20px"}*/}
					{/*	bg={"#F8F7FA"}*/}
					{/*	p={{base: "2rem", lg: "1rem"}}*/}
					{/*	w={{base: "100%", lg: "50%"}}*/}
					{/*	minH={{lg: "100vh"}}*/}
					{/*>*/}
					{/*	<Flex direction={"column"} align={"center"} jsutify={"center"}>*/}
					{/*		<Heading size={"lg"} textAlign={"center"} color={"#4B465C"}>*/}
					{/*			Welcome to Tanta innovative! 👋*/}
					{/*		</Heading>*/}
					{/*		<Text textAlign={"center"} color={"#4B465C"}>*/}
					{/*			Please sign in to your account and start the adventure*/}
					{/*		</Text>*/}
					{/*		<Box w={"80%"}>*/}
					{/*			<Image src={"/assets/authenticationPages/Welcome-sign-in.png"} alt={"People avatar with a welcome sign"}/>*/}
					{/*		</Box>*/}
					{/*	</Flex>*/}

					{/*</Flex>*/}

					<Flex
						w={{base: "100%", md: "70%", lg: "60%"}}
						// mt={"3rem"}
						direction={"column"}
						jutify={"center"}
						align={"center"}
					>

						<Flex
							direction={"column"}
							justify={"center"}
							align={"center"}
							w={"100%"}
							bgImg={{base: "none", lg: "/assets/authenticationPages/top-shape.png"}}
							bgRepeat={"no-repeat"}
							bgPosition={"top left"}
							pt={"6rem"}
						>
							<Flex
								direction={"column"}
								justify={"center"}
								align={"center"}
								w={"100%"}
								bgImg={{base: "none", lg: "/assets/authenticationPages/bottom-shape.png"}}
								bgRepeat={"no-repeat"}
								bgPosition={"bottom right"}
								pb={"6rem"}
							>
								<Box p={"2rem"} border={{base: "none", md: "1px solid #D0D0D0"}} borderRadius={"10px"} w={{base: "100%", lg: "60%"}} bg={"#FFF"}>
									<Flex direction={"column"} align={"center"} gap={"1.5rem"}>
										<Box>
											<Image
												src={"/assets/authenticationPages/Logo.svg"}
												alt="tanta logo"
												width={"133px"}
												height={"55px"}
											/>
										</Box>
										<Box>
											<Heading fontWeight={"700"} color={"#000"} textAlign={"center"}>
												Verify email
											</Heading>
											<Text mt={".5rem"} fontWeight={"700"} color={"#000"} textAlign={"center"}>
												to Tanta Innovative
											</Text>
										</Box>
									</Flex>

									{/*====================================form*=========================================*/}
									<Box mt={"1.5rem"}>
										<Box>
										 	<Text
												fontSize={{ base: "14px", md: "0.9rem" }}
												fontWeight={"400"}
												color={"#808587"}
												display={"flex"}
												justifyContent={{
													base: "center",
													lg: "flex-start",
													md: "flex-start",
												}}
												textAlign={{ base: "center", lg: "left", md: "left" }}
												width={{ base: "20rem", md: "25rem", lg: "20rem" }}
											>
												Account activation link sent to your email address:
												hello@example.com Please follow the link inside to continue.
											</Text>
										</Box>

										<Button
											mt={"1.5rem"}
											height={"2.375rem"}
											bg={
												" linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"
											}
											color={"white"}
											width={{ base: "20rem", md: "25rem", lg: "23rem" }}
										>
											Skip for now
										</Button>
									</Box>
								</Box>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
				{/*----------Footer----------*/}
				<Footer/>
			</Container>
		</Box>
	);
}

export default VerifyYourEmail;
