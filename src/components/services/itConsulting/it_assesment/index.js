import React, { useState } from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import HeroIMG from "../../../../../public/assets/consulting/homehead.png";
import styled from "styled-components";
import { ItAssesmentData, sideBarData } from "./data";
import Link from "next/link";
import { breakpoints } from "../../../../../styles/theme";
import LogoMarquee from "../../../logoMarquee";
import { MdKeyboardArrowRight } from "react-icons/md";
import arrowLeft from "../../../../../public/assets/medicalSoftwarePage/arrowLeft.svg";
import arrowRight from "../../../../../public/assets/medicalSoftwarePage/arrowRight.svg";
import DataTestimonial from "../../../dataAnalytics/data_analytics_modernization/dataTestimonial";
import IncludeCard from "./includeCard";
import AllServices from "./allServices";
import Summary from "../../itConsulting/summary";
import appRoutes from "../../../../utils/appRoutes";

const ItAssesment = ({ testimonials }) => {
	const [activeLink, setActiveLink] = useState({});
	return (
		<>
			<Box
				id={"it_assessment"}
				scrollMarginTop={"130px"}
				mt={"5rem"}
				minHeight={"100vh"}
			>
				<Box
					minHeight={{ base: "23vh", lg: "35vh" }}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					flexDirection={"column"}
					mb={{ base: "2rem" }}
					backgroundImage={{
						base: "none",
						lg: "/assets/headerbg.png",
					}}
					backgroundPosition={"center top"}
					backgroundRepeat={"no-repeat"}
					backgroundSize={"100%"}
					textAlign={{ base: "center" }}
				>
					<Text
						display={{ base: "none", lg: "block" }}
						textTransform={"uppercase"}
						fontSize={{ base: "18px", lg: "24px" }}
						textAlign={{ base: "center" }}
					>
						SERVICES
					</Text>
					<Heading
						as={"h6"}
						variant={"h5"}
						fontWeight={"bold"}
						textTransform={"uppercase"}
						fontSize={{ base: "18px", lg: "43px" }}
						px={{ base: "0.4rem" }}
					>
						IT <Span>ASSESSMENT</Span>
					</Heading>
					<Text
						position={"relative"}
						top={{ base: "1rem", lg: "1.7rem" }}
						bgColor={"red"}
						width={"8rem"}
						height={".2rem"}
						textAlign={{ base: "center" }}
					></Text>
				</Box>
				<Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }}>
					<HeroContent>
						<HeroText>
							<h1>
								Information Technology <br /> Assessment
							</h1>
							<p>
								Reach out to our dedicated team of IT consultants to look for
								possibilities to lower the costs of your IT infrastructure while
								increasing the system's efficiency, security, and compliance.
								explore innovative solutions, and discover how we can transform
								your ideas into reality.{" "}
							</p>
							<CtaButtons>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: { service: "services/it-consulting/it-assesment" },
									}}
									service="services/data_analytics"
								>
									<button className="request-services">
										Schedule a meeting
									</button>
								</Link>
								<Link
									href={{
										pathname: appRoutes.services["cost-calculator"],
										query: { service: "itConsulting-6" },
									}}
								>
									{" "}
									<button className="get-quote">get a quote</button>
								</Link>
							</CtaButtons>
						</HeroText>
						<Image
							style={{ position: "relative", top: "13px" }}
							src={HeroIMG}
							alt="hero image"
							width={400}
							height={400}
							className="hero-img"
						/>
					</HeroContent>

					<Flex gap={"2rem"} justify={"center"} mb={"3rem"} mt={"7rem"}>
						<Flex
							display={{ lg: "block", base: "none" }}
							flexDir="column"
							boxShadow={"lg"}
							height={"fit-content"}
							flex={1}
							minW={"310px"}
							position="sticky"
							top="10rem"
							pb={"1rem"}
							borderBottom={"lg"}
						>
							<Text
								as="h2"
								fontSize={"2xl"}
								fontWeight={"semibold"}
								mb={"1rem"}
								color={"white"}
								textAlign={"center"}
								paddingBlock={".5rem"}
								borderTopRadius={"lg"}
								background={
									"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
								}
							>
								IT ASSESSMENT
							</Text>
							<Box px={"1rem"}>
								{sideBarData.map((item, index) => {
									return (
										<Flex
											paddingInline={".4rem"}
											justifyContent={"space-between"}
											alignItems={"center"}
											key={index}
											p={".3rem"}
										>
											<Link
												onClick={() => {
													setActiveLink({ [item.id]: true });
												}}
												style={{
													color: activeLink[item.id] ? "red" : "",
													fontSize: "18px",
													fontWeight: "400",
													cursor: "pointer",
													width: "100%",
												}}
												href={`#${item.id}`}
											>
												{item.title}
											</Link>

											<MdKeyboardArrowRight
												cursor={"pointer"}
												size={"2rem"}
												style={{ marginLeft: "47px" }}
											/>
										</Flex>
									);
								})}
							</Box>
						</Flex>

						<Box  w={{ base: "100%", lg: "70%" }}>
							<Box
								width={"100%"}
								flex={3}
								mb={"2rem"}
								display={"flex"}
								flexDirection={"column"}
								// justifyContent={"center"}
								// alignItems={"center"}
							>
								<Text
									id={"objective"}
									scrollMarginTop={"150px"}
									mb={"70px"}
									color={"#333333"}
									fontSize={"20px"}
								>
									Our objective in implementing new technologies is not solely
									to make your company appear "modern," look for possibilities
									to lower the costs of your IT infrastructure while increasing
									the system's efficiency, security, and compliance.{" "}
								</Text>
							</Box>

							<Box
								id={"included_packages"}
								scrollMarginTop={"150px"}
								mb={"20px"}
								w={"100%"}
							>
								<Text
									mb={"10px"}
									textAlign={"center"}
									fontWeight={"700"}
									fontSize={"29px"}
								>
									What the IT Assessment <Span>Includes</Span>
								</Text>
								<Box
									width={"60px"}
									bg={"red"}
									height={"3px"}
									m={"0 auto"}
								></Box>
							</Box>

							<Flex justifyContent={'center'} alignItems={'center'}>
								<Flex
									w={{ base: '100%', lg: "110%"}}
									flexWrap={"wrap"}
									gap={"10px"}
									justifyContent={"center"}
									alignItems={'center'}
									flexDir={{ base: 'column', md: 'row', lg: 'row' }}
								>
									{ItAssesmentData.map((item, index) => {
										return (
											<IncludeCard
												key={index}
												text={item.details}
												img={item.img}
												head={item.title}
											/>
										);
									})}
								</Flex>
							</Flex>


							<Box
								width={"100%"}
								flex={3}
								mb={"2rem"}
								display={"flex"}
								flexDirection={"column"}
								// justifyContent={"center"}
								// alignItems={"center"}
							>
								<Box
									w={"100%"}
									id={"reliable_partner"}
									scrollMarginTop={"150px"}
								>
									<Text fontWeight={"700"} fontSize={"29px"} maxWidth={"600px"}>
										What Makes <Span>Tanta Innovative</Span> a Reliable Partner
									</Text>
									<Box
										maxWidth={"60px"}
										bg={"red"}
										height={"3px"}
										mb={"20px"}
									></Box>
								</Box>
								<Text mb={"20px"} fontSize={"20px"}>
									Our belief is that with our technical expertise and IT
									Services, combined with your innovative vision, we can create
									tech systems that will help you scale up your business by
									making life easier for your audience.
								</Text>

								<Flex
									mt={"30px"}
									justifyContent={"center"}
									alignItems={"center"}
								>
									<Image src={arrowLeft} alt={"arrow left icon"} />
									<Box maxWidth={"1200px"} position={"relative"}>
										<Box whiteSpace={"nowrap"} overflow={"hidden"}>
											<div>
												<LogoMarquee colored={true} />
											</div>
										</Box>
									</Box>
									<Image src={arrowRight} alt={"arrow left icon"} />
								</Flex>

								<Box
									id={"customer_review"}
									scrollMarginTop={"150px"}
									maxW={"800px"}
								>
									<DataTestimonial testimonials={testimonials} />
								</Box>

								<Box id="summary" scrollMarginTop={"120px"} my={"1.5rem"}>
									<Summary />
								</Box>

								<Box id="consulting_services" scrollMarginTop={"150px"}>
									<AllServices />
								</Box>
							</Box>
						</Box>
					</Flex>
				</Container>
			</Box>
			{/*<Box>*/}
			{/*    <ContactUs subtitle='For Your Data Analytics Projects'/>*/}
			{/*</Box>*/}
		</>
	);
};

export default ItAssesment;

const Span = styled.span`
	color: red;
`;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;

	width: 100%;
	border-bottom: 1px solid rgba(217, 217, 217, 1);

	${breakpoints.lg} {
		.hero-img {
			width: 45%;
		}
	}
	@media (max-width: 820px) {
		flex-direction: column-reverse;
		gap: 0;

		.hero-img {
			width: 50%;
			height: 50%;
			margin: 0 auto;
			padding-top: 2rem;
		}
	}

	${breakpoints.md} {
		.heroImg {
			padding-top: 1rem;
		}
	}
`;

const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
	width: 60%;
	padding-left: 2.5%;
	padding-right: 2.5%;

	@media (max-width: 820px) {
		width: 95%;
		padding-left: 2.5%;
		padding-right: 2.5%;
		justify-content: center;
		align-items: center;
		margin-top: 1rem;
	}

	${breakpoints.md} {
	}
	h1 {
		position: relative;
		box-sizing: border-box;
		margin-left: 2rem;
		font-size: 32px;
		font-weight: 700;
		margin-top: 0;
		padding-top: 0;
		color: #0c0c0c;

		${breakpoints.lg} {
			font-size: 1.7rem;
			text-align: center;
			margin-top: 1rem;
		}

		${breakpoints.md} {
			font-size: 0.7rem;
			text-align: center;
			margin-top: 1rem;
		}

		@media (max-width: 820px) {
			font-size: 1.5rem;
			font-weight: 500;
		}

		&::before {
			position: absolute;
			content: "";
			top: -3px;
			left: -30px;
			height: 100%;
			width: 3px;
			background: linear-gradient(to bottom, red 30%, white, white);
		}
		&::after {
			position: absolute;
			content: "";
			top: -3px;
			left: -30px;
			height: 3px;
			width: 100%;
			background: linear-gradient(
				to right,
				red,
				white,
				white,
				white,
				white,
				white
			);
		}
	}
	p {
		font-size: 1.1rem;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		// color: #636363;

		@media (max-width: 820px) {
			font-size: 1rem;
			text-align: center;
		}
	}
`;

const CtaButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
	margin-bottom: 2rem;

	${breakpoints.sm} {
		flex-direction: column;
		gap: 1rem;
	}

	.request-services {
		background-color: #fff;
		color: #b10000;
		border-radius: 8px;
		border: 1px solid #b10000;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.2rem;
		cursor: pointer;
		text-transform: uppercase;
		min-width: 190px;

		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		&:hover {
			opacity: 0.8;
		}
	}
	.get-quote {
		background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
		border-radius: 8px;
		color: #fff;
		border: none;
		//background-color: #fff;
		//color: #b10000;
		//border: 1px solid #b10000;
		padding: 0.5rem 2rem;
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		text-align: center;
		text-transform: uppercase;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
		min-width: 100px;
		${breakpoints.lg} {
			font-size: 0.7rem;
			padding: 0.5rem 1.5rem;
		}

		${breakpoints.sm} {
			min-width: 190px;
			text-align: center;
			display: flex;
			justify-content: center;
		}

		&:hover {
			background-color: #b10000;
			color: #fff;
		}
	}
`;

const ListItems = styled.div`
	ul {
		list-style: none;
		padding: 0;
		margin-left: 1rem;
		margin-top: 1.5rem;

		${breakpoints.lg} {
			margin-left: 0;
		}

		li {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 1.12rem;
			font-weight: 400;
			color: #303030;
			margin-bottom: 0.5rem;
			text-align: left;

			${breakpoints.lg} {
				font-size: 1rem;
			}

			${breakpoints.md} {
				font-size: 0.85rem;
			}
		}
	}

	button {
		background: #e9000e;
		border-radius: 8px;
		border: none;
		padding: 0.5rem 2.5rem;
		font-size: 1rem;
		font-weight: 600;
		color: #fff;
		margin-top: 1rem;
	}
`;
