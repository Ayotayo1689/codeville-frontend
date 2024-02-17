import React from "react";
import {
	Container,
	Box,
	Flex,
	Text,
	PinInput,
	PinInputField,
	HStack,
	Image,
	Button, Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import appRoutes from "../../../utils/appRoutes";
import Footer from "@/components/authenticationPages/Footer";

function TwoStepVerification() {
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
												Two step verification
											</Heading>
											<Text mt={".5rem"} fontWeight={"700"} color={"#000"} textAlign={"center"}>
												to Tanta Innovative
											</Text>
										</Box>
									</Flex>

									{/*====================================form*=========================================*/}
									<Box mt={"1.5rem"}>
										<Box>
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
													// width={{ base: "15rem", md: "25rem", lg: "27rem" }}
													textAlign={{ base: "center", lg: "left", md: "left" }}
													margin={"auto"}
												>
													We sent a verification code to your mobile. Enter the code
													from the mobile in the field below.
												</Text>
												<Text
													textAlign={{ base: "center", lg: "left", md: "left" }}
													color={"#56585A"}
													fontWeight={"600"}
													fontSize={"15px"}
												>
													******9763
												</Text>
											</Box>

											<Text
												mt={"1rem"}
												color={"#808587"}
												fontWeight={"600"}
												fontSize={"15px"}
											>
												Type your 6 digit security code
											</Text>
											<HStack
												mt={"0.5rem"}
												direction={"row"}
												spacing={{ base: "0.5rem", md: "1.5rem", lg: "1.5rem" }}
											>
												<PinInput otp type="alphanumeric" mask size="lg">
													<PinInputField borderColor={"rgba(251, 204, 207, 1)"} />
													<PinInputField borderColor={"rgba(251, 204, 207, 1)"} />
													<PinInputField borderColor={"rgba(251, 204, 207, 1)"} />
													<PinInputField borderColor={"rgba(251, 204, 207, 1)"} />
													<PinInputField borderColor={"rgba(251, 204, 207, 1)"} />
													<PinInputField borderColor={"rgba(251, 204, 207, 1)"} />
												</PinInput>
											</HStack>

											<Box
												display={"flex"}
												justifyContent={{
													base: "center",
													lg: "flex-start",
													md: "flex-start",
												}}
											>
												<Button
													mt={{ base: "3rem", md: "1rem", lg: "1rem" }}
													width={{ base: "20rem", md: "26rem", lg: "27rem" }}
													height={"2.375rem"}
													bg={
														" linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"
													}
													color={"white"}
												>
													Verify my account
												</Button>
											</Box>
											<Text
												mt={"1rem"}
												color={"#808587"}
												fontSize={"15PX"}
												fontWeight={"400"}
												textAlign={"center"}
											>
												{" "}
												Didn't get the code?{" "}
												<Link href={appRoutes.auth.verifyYourEmail}>
													{" "}
													<Text as="span" color=" #E9000E">
														{" "}
														Resend
													</Text>
												</Link>
											</Text>
										</Box>
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

export default TwoStepVerification;
