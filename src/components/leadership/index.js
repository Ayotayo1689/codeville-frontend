import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import React from "react";
// import Image from "next/image";
import LandingLayout from "../../layouts/landing.layout";
import HeaderOne from "../../components/HeaderOne";
import Head from "next/head";
import Link from "next/link";

function Leadership({ meetTheTeam }) {
	return (
		<>
			<Box mt={"5rem"}>
				<HeaderOne heading={"leadership"} title={"Letter from the Ceo"} />
				{/* ----------Letter from the CEO---------- */}
				<Container maxW={"7xl"} pb={"2rem"}>
					{meetTheTeam.map((user, key) => {
						if (user.name === "Abraham Esandayinze Tanta") {
							return (
								<Flex
									gap={"2rem"}
									pl={{ base: "0rem", lg: "100px" }}
									direction={{ base: "column", md: "row" }}
									m={"2rem 0"}
									key={key}
								>
									<Box minW={"235px"} mx={{ base: "auto", lg: "0" }}>
										<Image
											src={user.profile_image}
											width={244}
											height={250}
											alt={"Abraham"}
										/>
									</Box>
									<Box>
										<Text
											fontSize={{ base: "16px", lg: "18px" }}
											fontWeight={"400"}
											color={"#202020"}
											textAlign={"justify"}
										>
											Welcome to our website. As the CEO/founder of Tanta
											Innovative Limited, I am both humbled and proud to lead a
											team of dedicated professionals who are committed to
											providing outstanding IT consulting and software
											development services to our Nigerians and beyond. In our
											fast-paced world where technology keeps evolving, we
											understand the need to stay ahead and embrace new trends.
											Our team at Tanta Innovative is dedicated to delivering
											innovative and customized solutions that meet the unique
											needs of our valued clients. With a wide range of IT
											services like Software development, IT consulting, Managed
											IT services, Cybersecurity, Application Services, UI/UX
											Designs, and others, we are well-positioned to help
											Nigerian businesses excel in the digital age.
										</Text>
										<Text
											fontSize={{ base: "16px", lg: "18px" }}
											fontWeight={"400"}
											color={"#202020"}
											mt={"3rem"}
											textAlign={"justify"}
										>
											At Tanta Innovative, we cherish our people as our greatest
											resource. We have nurtured a diverse and inclusive
											atmosphere where teamwork and creativity flourish. Our
											organizational structure is adaptable and efficient,
											empowering every member of our team to contribute their
											ideas and skills. We are convinced that the combined
											knowledge of our team members is what sets us apart and
											drives our success in this competitive sector.
										</Text>
										<Text
											fontSize={{ base: "16px", lg: "18px" }}
											fontWeight={"400"}
											color={"#202020"}
											mt={"3rem"}
											textAlign={"justify"}
										>
											Our commitment to our clients goes beyond providing
											exceptional IT services. We take pride in building
											long-lasting relationships anchored in trust,
											transparency, and a deep understanding of our client's
											business objectives. We see ourselves as partners in our
											client's success, and we gauge our achievements by the
											positive impact we make on their growth and
											competitiveness.
										</Text>
										<Text
											fontSize={{ base: "16px", lg: "18px" }}
											fontWeight={"400"}
											color={"#202020"}
											mt={"3rem"}
											textAlign={"justify"}
										>
											As we look to the future, we are excited by the
											opportunities ahead. We will continue to broaden our
											services, delve into emerging technologies, and invest in
											our people to deliver the best possible solutions to our
											clients. We are deeply grateful for the trust and support
											of our clients, partners, and friends, and we remain
											steadfast in our commitment to delivering on our promise
											of excellence.
										</Text>
										<Text
											fontSize={{ base: "16px", lg: "18px" }}
											fontWeight={"400"}
											color={"#202020"}
											mt={"3rem"}
											textAlign={"justify"}
										>
											Thank you for taking the time to learn more about Tanta
											innovative Limited. I encourage you to explore our website
											further, discover our full range of services, and
											experience firsthand what sets us apart. Please don't
											hesitate to reach out to us with any questions or
											inquiries; we would be thrilled to discuss how we can help
											your business succeed in this digital era.
										</Text>
										<Text
											fontSize={{ base: "16px", lg: "18px" }}
											fontWeight={"400"}
											color={"#202020"}
											mt={"3rem"}
										>
											Sincerely,
											<br />
											<b>Abraham Esandayinze Tanta</b>
											<br />
											Chief Executive Officer
											<br />
											Tanta Innovative Limited
										</Text>
										{/*<Link href="/employee">*/}
										{/*	<Text*/}
										{/*		fontSize={{base: "20px", lg: "24px"}}*/}
										{/*		fontWeight={"700"}*/}
										{/*		color={"#565656"}*/}
										{/*		mt={"1rem"}*/}
										{/*	>*/}
										{/*		about A.E Tanta -&gt;*/}
										{/*	</Text>*/}
										{/*</Link>*/}
									</Box>
								</Flex>
							);
						}
					})}

					{/* ----------Selected representatives---------- */}
					<Flex
						direction={"column"}
						pl={{ base: "0rem", lg: "100px" }}
						gap={"3rem"}
						mt={"8rem"}
					>
						<Flex
							direction={"column"}
							gap={{ base: "0.5rem", lg: "1.5rem" }}
							pl={{ lg: "1.5rem" }}
						>
							<Heading
								size={{ base: "md", lg: "xl" }}
								fontWeight={"700"}
								color={"#565656"}
							>
								Selected Representatives
							</Heading>
							<Box w={"129px"} h={"4px"} bg={"#D80808"}></Box>
						</Flex>
						<Box>
							<Grid
								templateColumns={{
									base: "1fr 1fr",
									md: "repeat(3, 1fr)",
									lg: "repeat(4, 1fr)",
								}}
								gap={"1rem"}
								// alignItems={"start"}
							>
								{meetTheTeam.map((item, key) => {
									if (item.name !== "Abraham Esandayinze Tanta") {
										return (
											<Link href={`/leadership/${item.id}`} key={key}>
												<Flex
													direction={"column"}
													justify={"center"}
													gap={".5rem"}
												>
													{/*<Link href="/employee">*/}

													{/*<Link href={`/leadership/portfolio?data=${item.name}`} passHref>*/}
													<Flex
														justify={"center"}
														w={{ lg: "100%" }}
														h={{ lg: "10rem" }}
														maxH={"10rem"}
													>
														<Image
															src={item.profile_image}
															alt="Employee"
															width={{ base: "100%", lg: "60%" }}
															height={{ lg: "100%" }}
															objectFit={"contain"}
														/>
													</Flex>
													{/*</Link>*/}

													<Text
														textAlign={"center"}
														textTransform={"uppercase"}
														fontSize={{ base: "sm", lg: "lg" }}
													>
														{item.name}
													</Text>
													<Box
														w={"86px"}
														h={"2px"}
														bg={"#D80808"}
														m={"0 auto"}
													></Box>
													<Text
														textAlign={"center"}
														fontSize={{ base: "xs", lg: "lg" }}
													>
														{item.designation}
													</Text>
												</Flex>
											</Link>
										);
									}
								})}
							</Grid>
						</Box>
					</Flex>
				</Container>
			</Box>
		</>
	);
}

Leadership.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Leadership;
