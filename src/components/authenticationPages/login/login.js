import React, {useState} from "react";
import {
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	Flex, Heading,
	Text,
	Image,
} from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import LoginForm from "./loginForm";
import appRoutes from "../../../utils/appRoutes";
import SignUpForm from "@/components/authenticationPages/register/signUpForm";
import PasswordForm from "@/components/authenticationPages/login/PasswordForm";
import Footer from "@/components/authenticationPages/Footer";

function Login() {
	const [showPasswordField, setShowPasswordField] = useState(false)
	const handleShowPasswordField = () => {
		setShowPasswordField(true)
	}
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
												width={"135px"}
												height={"55px"}
											/>
										</Box>
										<Box>
											<Heading fontWeight={"700"} color={"#000"} textAlign={"center"}>
												Sign in
											</Heading>
											<Text mt={".5rem"} fontWeight={"700"} color={"#000"}>
												to Tanta Innovative
											</Text>
										</Box>
									</Flex>

									{/*====================================form*=========================================*/}
									<Box>

										{showPasswordField === true ? <PasswordForm/>  : <LoginForm handleShowPasswordField={handleShowPasswordField}/>}

										{/*{handleShowPasswordField && <PasswordForm showPasswordField={showPasswordField} setShowPasswordField/>}*/}
										<Flex direction={"column"} gap={".5rem"} mt={"2rem"}>
											<Link href={appRoutes.auth.forgotPassword}>
												{" "}
												<Text
													color={"#000"}
													fontSize={"14px"}
													fontWeight={"500"}
												>
													Forgot User ID?
												</Text>
											</Link>

											<Link href={appRoutes.auth.signUp}>
												{" "}
												<Text
													color={"#000"}
													fontSize={"14px"}
													fontWeight={"500"}
												>
													Don't have a user ID? Create one now
												</Text>
											</Link>
										</Flex>
									</Box>
								</Box>
							</Flex>
						</Flex>
					</Flex>
				</Flex>

				<Footer/>
			</Container>
		</Box>
	);
}

export default Login;
