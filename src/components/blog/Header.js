import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";

import Link from "next/link";
import styled from "styled-components";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { colors } from "../../../styles/theme";
import { useSelector } from "react-redux";
function Header() {
	const { user } = useSelector((state) => state.user);
	return (
		<HeaderWrapper>
			{/* <Breadcrumb
				spacing="8px"
				separator={
					<MdOutlineKeyboardArrowRight color="gray" fontSize={"1.1rem"} />
				}
				bg="linear-gradient(90.82deg, rgba(0, 0, 0, 0.38) -60.45%, rgba(255, 255, 255, 0) 146.74%);"
				py={".5rem"}
				width={{ base: "30%", lg: "20%" }}
			>
				<BreadcrumbItem>
					<BreadcrumbLink as={Link} href={"/blog"} color={"white"}>
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink as={Link} href={"/blog"} color={"white"}>
						Blog
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb> */}
			<Flex
				justifyContent={"center"}
				alignItems={"center"}
				direction={"column"}
			>
				<Heading
					as={"h1"}
					fontWeight={"normal"}
					fontSize={{ base: "lg", lg: "3xl" }}
				>
					Tanta Blog
				</Heading>
				<Heading
					as={"h3"}
					fontWeight={"semibold"}
					fontSize={{ base: "lg", lg: "4xl" }}
				>
					Insights from IT Experts
				</Heading>
				<Button
					as={Link}
					variant="outline"
					colorScheme="red"
					leftIcon={<BsJournalBookmarkFill fontSize={"1.2rem"} />}
					fontSize={{ base: "sm", lg: "md" }}
					fontWeight={"normal"}
					px={{ base: "1rem", lg: "1rem" }}
					py={{ base: ".5rem", lg: "1rem" }}
					mt={"2rem"}
					_hover={{ bg: colors.primaryColor, color: "white" }}
					_active={{ bg: colors.primaryColor, color: "white" }}
					_focus={{ bg: colors.primaryColor, color: "white" }}
					href={user ? "/blog/edit" : "/auth/sign-in"}
				>
					{" "}
					Write
				</Button>
			</Flex>
		</HeaderWrapper>
	);
}

export default Header;
const HeaderWrapper = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
	padding-block: 4rem;
	padding-block-start: 2rem;
	padding-inline: 1rem;
	gap: 1rem;
	@media (max-width: 96rem) {
		padding-block-start: 2rem;
		padding-block-end: 0rem;
	}
`;
