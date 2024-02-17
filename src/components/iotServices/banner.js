import React from "react";
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import appRoutes from "../../utils/appRoutes";

function Banner() {
	return (
		<>
			<Box scrollMarginTop={"150px"} id="requestiotservices" mt={"2rem"}>
				<Flex
					background={"#FDE6E7"}
					justifyContent={"space-around"}
					alignItems={{ base: "center", md: "start", lg: "start" }}
					flexDir={{ base: "column", md: "row", lg: "row" }}
					padding={{lg:"1.5rem", base:"2rem"}}
					borderRadius={"3px"}
					mb={"3rem"}
					height={{ base: "350px", md: "418px", lg: "432px" }}
				>
					<Image
						position={"relative"}
						top={"-1.5rem"}
						left={"-1.5rem"}
						display={{ base: "none", md: "flex", lg: "flex" }}
						src="/assets/ui_ux/Vector 8.png"
						alt="icon"
					></Image>
					<Box width={{ base: "100%", md: "50%", lg: "50%" }} mr={"1rem"}>
						<Text
							fontSize={{lg:"1.7rem", base:"1.3rem"}}
							fontWeight={"700"}
							mt={"1rem"}
							borderBottom={"1rem"}
							color={" #565656"}
						>
							Center Your IoT Solution
							<Text as="span" color="rgba(242, 102, 110, 1)">
								&nbsp; Around Explicit
							</Text>
							&nbsp;Value
						</Text>
						<div
							style={{
								width: "4rem",
								height: "5px",
								background: "rgba(242, 102, 110, 1)",
								marginTop: "0.5rem",
							}}
						></div>

						<Image
							position={"relative"}
							left={"-4.2rem"}
							zIndex="1"
							display={{ base: "none", md: "flex", lg: "flex" }}
							top={{ base: "", md: "2.5rem", lg: "3.5rem" }}
							bottom={"0"}
							src="/assets/ui_ux/Group.png"
							alt="icon "
						></Image>
						<Text
							fontWeight="600"
							fontSize={{ base: "15px", lg: "18px" }}
							color=" #565656"
							my={"1.5rem"}
							// width={"345px"}
							position={"relative"}
							top={{ base: "0", md: "-15rem", lg: "-15rem" }}
							textAlign={"justify"}
							css={{
								textJustify: "inter-word",
								wordSpacing: "-1px",
								hyphens: "auto",
							}}
						>
							At Tanta Innovative, we will help you collect and properly analyze
							the data from physical objects to make transformative improvements
							to your business processes.
						</Text>
						<Link
							href={{
								pathname: appRoutes.contactUs,
								query: { service: "services/iot-services" },
							}}
							service="services/iot_services"
							className="request-services"
						>
							<Button
								bg="#F2666E"
								color={"#fff"}
								borderRadius={"8px"}
								p={"15px 3rem"}
								mb={{ base: "2rem" }}
								zIndex={"2"}
								position={"relative"}
								top={{ base: "0", md: "-12.5rem", lg: "-11rem" }}
							>
								Request IoT Services
							</Button>
						</Link>
					</Box>
					<Box m={"auto"} width={"300px"}>
						<Flex
							width={"10%"}
							position={"relative"}
							top={"-3rem"}
							right={"-8rem"}
							display={{ base: "none", md: "flex", lg: "flex" }}
						>
							<Box
								borderRadius={"50%"}
								p={{ base: "1rem", lg: "1.5rem" }}
								bg={"#F2666E"}
								position={"relative"}
								top={"2rem"}
							>
								{" "}
							</Box>
							<Box
								borderRadius={"50%"}
								p={"1rem"}
								bg={"#F2666E"}
								position={"relative"}
								right={"15%"}
								top={"1rem"}
								width={"20px"}
								height={"20px"}
							></Box>
							<Box
								borderRadius={"50%"}
								p={"0.5rem"}
								bg={"#F2666E"}
								position={"relative"}
								right={{ base: "5%", lg: "10%" }}
								top={"3rem"}
								width={"5px"}
								height={"5px"}
							></Box>
						</Flex>

						<Image
							mb={"3rem"}
							display={{ base: "none", md: "flex", lg: "flex" }}
							w={700}
							src="/assets/iotServices/ManProgrammer.png"
							alt="icon"
						></Image>
					</Box>
				</Flex>
			</Box>
		</>
	);
}

export default Banner;
