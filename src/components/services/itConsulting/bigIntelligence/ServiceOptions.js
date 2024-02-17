import React from "react";
import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { BsArrowRight, BsFillSquareFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import appRoutes from "../../../../utils/appRoutes";

const ServiceOptions = ({ img, title, lists, btn, description }) => {
	return (
		<Flex
			flexDir={"column"}
			maxW={"380px"}
			justifyContent={"space-between"}
			boxShadow={" 0px 2px 20px 0px rgba(0, 0, 0, 0.05)"}
			border={"1px solid #DADFE3"}
			borderTop={"5px solid red"}
			p={"1rem"}
			background={"rgba(255, 255, 255, 0.00)"}
		>
			<Box>
				<Flex
					justifyContent={"center"}
					alignItems={"center"}
					flexDir={"column"}
				>
					<Image src={img} alt={title} width={100} height={50} />
					<Text fontSize={"1.5rem"} fontWeight={"700"} mt={"1.5rem"}>
						{title}
					</Text>
				</Flex>
				<Text fontSize={"0.8rem"} mt={"0.8rem"}>
					{description}
				</Text>
				<List spacing={2} mt={"1rem"}>
					{lists.map((item, index) => {
						return (
							<ListItem key={index}>
								<Flex flexGrow={"1"}>
									<ListIcon
										as={BsFillSquareFill}
										color="red"
										fontSize={"0.5rem"}
										mt={"0.5rem"}
									/>
									<Text fontSize={"0.8rem"}>{item}</Text>
								</Flex>
							</ListItem>
						);
					})}
				</List>
			</Box>
			<Flex justifyContent={"center"} alignItems={"center"}>
				<Link
					href={appRoutes.contactUs}
					style={{
						border: "2px solid red",
						borderRadius: "6px",
						marginTop: "1.5rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: "10px",
						width: "fit-content",
						height: "40px",
						color: "red",
						textAlign: "center",
					}}
				>
					{btn} <BsArrowRight style={{ color: "red", marginLeft: "6px" }} />
				</Link>
			</Flex>
		</Flex>
	);
};

export default ServiceOptions;
