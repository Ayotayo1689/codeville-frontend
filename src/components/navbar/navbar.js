import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillCaretDown, AiOutlineUserSwitch } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { colors } from "../../../styles/theme";
import {
	Bottom,
	Container,
	NavLinks,
	SignInButton,
	Top,
	Wrapper,
} from "./style";
import {
	Box,
	Button,
	Flex,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";
import {
	MdOutlineMailOutline,
	MdOutlineMenu,
	MdOutlinePeopleAlt,
	MdOutlinePhone,
	MdOutlineLogout,
} from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../features/user/userSlice";
import {SearchModal} from "@/components/searchBar/SearchComponent";
const Navbar = ({ toggleSideBar }) => {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logOutUser());
	};
	const companiesMenu = [
		{ label: "About Us", url: "/about" },
		{ label: "Contact Us", url: "/contact-us" },
		{ label: "Career Opportunities", url: "/career/career-opportunities" },
		{ label: "Leadership", url: "/leadership" },
		{ label: "Our Expert", url: "/expert/" },
		{ label: "Partner with us", url: "/partner-with-us" },
	];

	const servicesMenu = [
		{
			label: "Software Development",
			url: "/services/software-development-services",
		},
		{ label: "Testing & QA", url: "/services/qa-testings" },
		{ label: "Application Services", url: "/services/application-services" },
		{ label: "Cyber Security", url: "/services/cyber-security" },
		{ label: "IT Consulting", url: "/services/it-consulting" },
		{ label: "Data Analytics", url: "/services/data-analytics" },
		{ label: "IoT Services", url: "/services/iot-services" },
		{ label: "UX/UI Design", url: "/services/ui-ux" },
		{
			label: "Infrastructure Services",
			url: "/services/infrastructure-services",
		},
		{ label: "IT Outsourcing", url: "/services/it-outsourcing" },
	];

	const industryMenu = [
		{ label: "Health Care", url: "/industries/health-care" },
		{ label: "Retail", url: "/industries/retail" },
		{ label: "Corporate", url: "/industries/corporate" },
		{
			label: "Real Estate and Housing",
			url: "/industries/real-estate-and-housing",
		},
		{ label: "Education", url: "/industries/education" },
		{ label: "Banking", url: "/industries/banking" },
		{ label: "Manufacturing", url: "/industries/manufacturing" },
	];

	return (
		<Div>
			<Container>
				<Wrapper id="#navbar" className={"show"}>
					{/* the upper navigation */}
					<Top>
						<ul>
							<li>
								<Flex alignItems={"center"} gap={".1rem"}>
									<FaHandsHelping size={"1.2rem"} />
									<Text>Submit your idea</Text>
								</Flex>
							</li>
							<li>
								<Link
									href="https://www.youtube.com/watch?v=O1ZgaKA1hCc"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="A day in the life of Tanta on YouTube"
								>
									<Flex alignItems={"center"} gap={".1rem"}>
										<BiMoviePlay size={"1.2rem"} />
										<Text>A day in the life of Tanta</Text>
									</Flex>
								</Link>
							</li>

							<li>
								<a
									href="tel:+23414536000"
									itemProp="telephone"
									aria-label="Call us at 01-453-6000"
								>
									<Flex alignItems="center" gap=".1rem">
										<MdOutlinePhone size={"0.3rem"} />
										<Text>01-453-6000</Text>
									</Flex>
								</a>
							</li>
							<li>
								<a
									href="mailto:hello@tantainnovatives.com"
									itemProp="email"
									aria-label="Email us at hello@tantainnovatives.com"
								>
									<Flex alignItems="center" gap=".1rem">
										<MdOutlineMailOutline size="1.2rem" />
										<Text>hello@tantainnovatives.com</Text>
									</Flex>
								</a>
							</li>
						</ul>

						<ul style={{ marginLeft: "2rem" }}>
							<li>
								<Link href={"/partner-with-us"}>
									<Flex alignItems={"center"} gap={".1rem"}>
										<MdOutlinePeopleAlt size={"1.2rem"} />
										<Text>Become an Agent </Text>
									</Flex>
								</Link>
							</li>
							<li>
								{user ? (
									<Flex alignItems={"center"} gap={"1rem"}>
										<Button onClick={handleLogout} color="white">
											<AiOutlineUserSwitch size={"2rem"} />
											Logout
										</Button>
										{/* <Link to="/users-dashboard">
											<FiSettings size={"1.6rem"} color="#4688E4" />
										</Link> */}
									</Flex>
								) : (
									<Link href={"/auth/sign-in"}>
										<Flex alignItems={"center"} gap={".4rem"}>
											<MdOutlineLogout size={"1.2rem"} />
											<Text>Sign In</Text>
										</Flex>
									</Link>
								)}
							</li>
						</ul>
					</Top>

					{/* the lower navigation */}
					<Bottom>
						<Link href="/">
							<Image
								src="/assets/Logo.svg"
								width={"133"}
								height={"50"}
								alt="Tanta innovative"
								style={{ height: "50px" }}
							/>
						</Link>

						<NavLinks>
							<ul>
								<li>
									<Menu boxShadow="base" p="6" rounded="md">
										<MenuButton
											as={Button}
											rightIcon={<AiFillCaretDown />}
											fontWeight="bold"
										>
											Company
										</MenuButton>

										<MenuList borderRadius="md" borderWidth="1px">
											{companiesMenu.map((item, index) => (
												<MenuItem
													_focus={{
														bg: "radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)",
														color: "white",
													}}
													as={Link}
													href={item.url}
													_hover={{ bg: "gray.400" }}
													fontWeight="bold"
													key={index}
												>
													{item.label}
												</MenuItem>
											))}
										</MenuList>
									</Menu>
								</li>
								<li>
									<Menu>
										<MenuButton
											as={Button}
											fontWeight="bold"
											rightIcon={<AiFillCaretDown />}
										>
											Services
										</MenuButton>
										<MenuList borderRadius="md" borderWidth="1px">
											{servicesMenu.map((item, index) => (
												<MenuItem
													_focus={{
														bg: "radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)",
														color: "white",
													}}
													as={Link}
													href={item.url}
													_hover={{ bg: "gray.400" }}
													key={index}
												>
													{item.label}
												</MenuItem>
											))}
										</MenuList>
									</Menu>
								</li>
								<li>
									<Menu>
										<MenuButton
											as={Button}
											fontWeight="bold"
											rightIcon={<AiFillCaretDown />}
										>
											Industries
										</MenuButton>
										<MenuList bg={"white"} paddingInline={"1rem"}>
											{industryMenu.map((item, index) => (
												<MenuItem
													_focus={{
														bg: "radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)",
														color: "white",
													}}
													as={Link}
													href={item.url}
													key={index}
												>
													{item.label}
												</MenuItem>
											))}
										</MenuList>
									</Menu>
								</li>
								<li>
									<Menu>
										<MenuButton
											_focus={{
												color: "black",
											}}
											as={Link}
											href={"/solutions/solutions-we-deliver"}
										>
											Our Solutions
										</MenuButton>
									</Menu>
								</li>
								<li>
									<Menu>
										<MenuButton
											_focus={{
												color: "black",
											}}
											as={Link}
											href={"/case-studies"}
										>
											Case Studies
										</MenuButton>
									</Menu>
								</li>
								<li>
									<Menu>
										<MenuButton
											_focus={{
												color: "black",
											}}
											as={Link}
											href={"/blog"}
										>
											Blog
										</MenuButton>
									</Menu>
								</li>
								<SearchBox>
									<BsSearch className="search_icon" />
									{/*<Box position={"unset"}>*/}
									{/*	<form>*/}
									{/*		<SearchModal></SearchModal>*/}
									{/*	</form>*/}
									{/*</Box>*/}
									<Input variant="outline" />
								</SearchBox>
							</ul>
						</NavLinks>

						<SignInButton href="/contact-us">Lets Talk</SignInButton>
					</Bottom>
					<Box
						bg={colors.primaryColor}
						py={"1rem"}
						px={"2rem"}
						className="mobile-bottom"
					>
						<Flex justifyContent={"space-between"}>
							<Text color={"white"}>Making a Better Reality </Text>
							<MdOutlineMenu
								size={"1.4rem"}
								color="white"
								onClick={toggleSideBar}
							/>
						</Flex>
					</Box>
				</Wrapper>
			</Container>
		</Div>
	);
};

export default Navbar;

const Div = styled.div`
	background: none;
`;
const SearchBox = styled.div`
	display: flex;
	max-width: 200px;
	align-items: center;
	justify-content: start;
	margin-right: 0;
	@media (max-width: 1135px) {
		max-width: 10%;
		margin-right: 0;
	}

	.search_icon {
		position: absolute;
		z-index: -999;
		margin-left: 5px;
	}
	input {
		margin-left: 0;
		background: none;
		padding: 5px 0 5px 30px;
		border-radius: 20px;
		max-width: 200px;
		min-width: 100%;
		@media (max-width: 1200px) {
			max-width: 30%;
		}
	}
`;
