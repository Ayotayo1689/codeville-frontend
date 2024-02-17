import React from "react";
import {Box, Container, Flex, Heading, Text, Image} from "@chakra-ui/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import ResetPasswordForm from "./resetPasswordForm";
import App from "next/app";
import appRoutes from "../../../utils/appRoutes";
import SignUpForm from "@/components/authenticationPages/register/signUpForm";
import Footer from "@/components/authenticationPages/Footer";

function ResetPassword() {
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
												Reset Password
											</Heading>
											<Text mt={".5rem"} fontWeight={"700"} color={"#000"} textAlign={"center"}>
												to Tanta Innovative
											</Text>
										</Box>
									</Flex>

									{/*====================================form*=========================================*/}
									<Box>
										<ResetPasswordForm/>
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

export default ResetPassword;
