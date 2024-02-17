import React, {useState} from "react";
import {Box, Button, chakra, Container, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import HeroIMG from "../../../public/assets/dataAnalytics/HeroIMG.png";
import styled from "styled-components";
import {insights, services, sideBarData, solutions} from "./data";
import Link from "next/link";
import {breakpoints} from "../../../styles/theme";
import {MdKeyboardArrowRight} from "react-icons/md";
import HeaderOne from "../HeaderOne";
import LogoMarquee from "../logoMarquee";
import {Associates} from "../../../styles/home.style";
import ContactUs from "../contactUs";
import {RxCaretRight} from "react-icons/rx";
import {HiOutlineArrowSmRight} from "react-icons/hi";
import FlexibleCards from "./flexibleCards";
import Head from "next/head";
import appRoutes from "../../utils/appRoutes";


const DataAnalytics = () => {

	const [activeLink, setActiveLink] = useState({});
	return (
		<>
            <Head>
                <title>Data Analytics Services - Tanta Innovative</title>
                <meta name="description"
                      content="Harness the power of data analytics for informed decision-making. Our experts deliver valuable insights and actionable recommendations to drive your business forward."/>
            </Head>
            <Box mt={"5rem"} minHeight={"100vh"}>
                <HeaderOne heading={"services"} title={"data analytics services"}/>
                <Container maxW={"7xl"} px={{lg: "5rem", base: "2rem"}}>
                    <HeroContent>
                        <HeroText>
                            <h1>
                                Even the Most Voluminous and High-Velocity Data Will Be
                                Organized
                            </h1>
                            <p>
                                Data analytics implies building an infrastructure for data
								aggregation, analysis, and reporting. An experienced provider of
								data analytics services, ScienceSoft delivers on simple and
								complex needs with tailored business analytics solutions.
							</p>
							<CtaButtons>
								<Link
									href={{
										pathname:  appRoutes.contactUs,
										query: { service: "services/data-analytics" },
									}}
									service="services/data_analytics"
									className="request-services"
								>
									{" "}
									<button className="request-services">
										Request data analytics services
									</button>
								</Link>
								<Link
									href={{
										pathname:  appRoutes.services["cost-calculator"],
										query: { service: "dataAnalytics-7" },
									}}
								>
									{" "}
									<button className="get-quote">get a quote</button>
								</Link>
							</CtaButtons>
						</HeroText>
						<Image
							src={HeroIMG}
							alt="hero image"
							width={400}
							height={400}
							className="hero-img"
						/>
					</HeroContent>
					<Box
                        width={"100%"}
                        display={"flex"}
                        justifyContent={{ lg: "flex-end", base: "center" }}
                        alignItems={"center"}
                        marginTop={{lg: "4rem", base: "2rem"}}
					>
						<Flex
							width={{ lg: "60%", base: "95%" }}
							paddingLeft={{ lg: "0", base: "2.5%" }}
							paddingRight={{ lg: "0", base: "2.5%" }}
							textAlign={"left"}
							flexDirection={"column"}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<Text
                                as="h2"
                                fontSize={{lg: "28px", md: "22px", base: "20px"}}
                                fontWeight={"700"}
                                textAlign={{lg: "right", base: "center"}}
                                mb={{lg: "1rem", base: "0"}}
                            >
                                Building Data
                                <span style={{color: "#B20000"}}> Analytics Solutions </span>
                                for Different Domains
                            </Text>
                            <Box
                                display={{lg: "none", base: "block"}}
                                width={"20%"}
                                height={"0"}
                                border={"2px solid #E9000E"}
                                mb={"2rem"}
                                mt={".9rem"}
                                // marginRight={"10%"}
                            />

                            <Text
                                textAlign={{lg: "right", base: "center"}}
                                fontSize={{lg: "17px", base: "16px"}}
                            >
                                A data analytics company, Tanta Innovative helps businesses from
                                30+ industries integrate, aggregate, and analyze various data
                                types from multiple data sources to address their most
                                deliberate needs at department and enterprise levels.
                            </Text>
                        </Flex>
                    </Box>
                    <Flex gap={"2rem"} justify={"center"} mb={"3rem"} mt={{lg: "7rem", base: "3rem"}}>
                        <Flex
                            display={{lg: "block", base: "none"}}
                            flexDir="column"
                            boxShadow={"lg"}
                            height={"fit-content"}
                            flex={1}
                            width={{base: "100%", lg: "30%"}}
                            position={{base: "", lg: "sticky"}}
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
								Data Analytics
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
						<Box
                            width={{base: "100%", lg: "70%"}}
                            mb={"2rem"}
						>
							<Box id="expert" scrollMarginTop={"150px"}>
								<ExpertContainer>
									{services.map((item) => {
										return (
											<ExpertCard className="services-card" key={item.index}>
												<ExpertData>
													<h3>{item.title}</h3>
													<Box
														width={"43px"}
														height={"0"}
														border={"2px solid #E9000E"}
														mb={"1rem"}
													/>
													<ul>
														{item.items.map((nestedItem) => (
															<>
																<Flex gap={"0.5rem"}>
																	<div
																		style={{
                                                                            backgroundColor: "#E9000E",
                                                                            width: "8px",
                                                                            minWidth: "8px",
                                                                            minHeight: "8px",
                                                                            height: "8px",
                                                                            marginTop: "0.5rem",
                                                                        }}
																	></div>
																	<li key={nestedItem.id}>{nestedItem.name}</li>
																</Flex>
															</>
														))}
													</ul>

                                                </ExpertData>
                                            </ExpertCard>
                                        );
                                    })}
                                </ExpertContainer>
                            </Box>
                            <Flex justifyContent={"center"} alignItems={"center"}>
                                <Link
                                    href={{
                                        pathname: appRoutes.contactUs,
                                        query: {service: "services/data-analytics"},
                                    }}
                                    service="services/data-analytics"
                                    className="request-services"
                                >
                                    <Button
                                        background={
                                            "linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%)"
                                        }
                                        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.3),
                            					0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
                                        borderRadius={"8px"}
                                        color={"#ffffff"}
                                        border={"none"}
                                        padding={{lg: "1.3rem 1rem", base: "0 1rem"}}
                                        fontSize={{lg: "1rem", base: "12px"}}
                                        fontWeight={"500"}
                                        textTransform={"uppercase"}

                                    >
                                        Request data analytics services
                                    </Button>
                                </Link>
                            </Flex>

                            <Box
                                id="service"
                                mt={"8rem"}
                                // pl={"3rem"}
                                scrollMarginTop={"150px"}
                            >
                                <Flex flexDir={"column"} alignItems={{lg: "flex-start", base: "center"}}>
                                    <Text
                                        as="h2"
                                        fontSize={{lg: "28px", base: "22px"}}
                                        fontWeight={"700"}
                                        color={"#414141"}
                                        mb={".5rem"}
                                    >
                                        Flexible Service{" "}
                                        <span style={{color: "#B20000"}}> Approaches</span>
                                    </Text>
                                    <Box
                                        width={{lg: "10%", base: "20%"}}
                                        height={"0"}
                                        border={"2px solid #E9000E"}
                                        mb={"1.5rem"}
                                    />
                                    <FlexibleCards/>
                                </Flex>

                            </Box>
                            <Box id="DHS" mt={"5rem"} scrollMarginTop={"150px"}>
                                <Flex flexDir={"column"} alignItems={{lg: "flex-start", base: "center"}}>
                                    <Text
                                        as="h2"
                                        fontSize={{lg: "28px", base: "22px"}}
                                        fontWeight={"700"}
                                        color={"#414141"}
                                        textAlign={{lg: "left", base: "center"}}
                                        mb={".5rem"}
                                    >
                                        Our Solutions - from Automation to Advanced
                                        <span style={{color: "#B20000"}}> Data Analytics </span>
                                    </Text>
                                    <Box
                                        width={{lg: "10%", base: "30%"}}
                                        height={"0"}
                                        border={"2px solid #E9000E"}
                                        mb={"1.5rem"}
                                    />
                                    <CardContainer>
                                        {solutions?.map((item, index) => {
                                            return (
                                                <ServicesCard className="services-card" key={item?.index}>
                                                    <CardData>
                                                        <h3>{item?.title()}</h3>
                                                        <Box
                                                            width={"43px"}
                                                            height={"0"}
                                                            border={"2px solid #E9000E"}
                                                            mb={"1rem"}
                                                        />
                                                        <ul>
                                                            {item?.items?.map((nestedItem) => (
                                                                <>
                                                                    <Flex gap={"0.5rem"}>
                                                                        <div
                                                                            style={{
                                                                                backgroundColor: "#E9000E",
                                                                                width: "8px",
                                                                                height: "8px",
                                                                                minHeight: "8px",
                                                                                minWidth: "8px",
                                                                                marginTop: "0.5rem",
                                                                            }}
                                                                        ></div>
                                                                        <li key={nestedItem?.id}>
                                                                            {nestedItem?.name}
                                                                        </li>
                                                                    </Flex>
                                                                </>
                                                            ))}
                                                        </ul>
                                                        {index === 3 ? (
                                                            <Link
                                                                href={item?.link}
                                                                style={{
                                                                    backgroundColor: "transparent",
                                                                    display: "flex",
                                                                    justifyContent: "flex-end",
                                                                    alignItems: "flex-end",
                                                                }}
                                                            >
                                                                <Flex
                                                                    border={"none"}
                                                                    color={"#e90002"}
                                                                    fontSize={{lg: "1rem", base: ".9rem"}}
                                                                    fontWeight={500}
                                                                    textTransform={"uppercase"}
                                                                    bgColor={"transparent"}
                                                                    _hover={{bgColor: "transparent"}}
                                                                >
                                                                    read more{" "}
                                                                    <RxCaretRight
                                                                        style={{
                                                                            color: "#E9000E",
                                                                            fontSize: "23px",
                                                                            transition: "all 0.2s ease-in-out",
                                                                        }}
                                                                    />
                                                                </Flex>
                                                            </Link>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </CardData>
                                                </ServicesCard>
                                            );
                                        })}
                                    </CardContainer>
                                </Flex>

                            </Box>

                            <Box
                                id="DAH"
                                width={"100%"}
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                                mt={"2rem"}
								paddingLeft={"10%"}
								paddingRight={"10%"}
								scrollMarginTop={"150px"}
							>
                                <Text
                                    as="h2"
                                    fontSize={{lg: "28px", base: "22px"}}
                                    fontWeight={"700"}
                                    textAlign={"center"}
                                    color={"#414141"}
                                    mb={".5rem"}
                                >
                                    About
                                    <br/>
                                    <chakra.span fontSize={{lg: "28px", base: "22px"}}
                                                 fontWeight={"700"}
                                                 color={"#E9000E"}
                                    >
                                        TANTA INNOVATIVE
                                    </chakra.span>
                                    <br/>& Data Analytics
                                    <br/>
                                </Text>

                                <Box
                                    width={{lg: "20%", base: "30%"}}
                                    height={"0"}
                                    border={"2px solid #E9000E"}
                                    mb={"1.5rem"}
                                />

                                <ul>
                                    <li>
                                        <Text
                                            color={"#565656"}
                                            fontSize={{lg: "20px", base: "16px"}}
                                            fontWeight={"700"}
                                        >
                                            <chakra.span fontSize={{lg: "32px", base: "24px"}}>13+</chakra.span>
                                            years in data
                                            analytics and data science.
                                        </Text>
									</li>
									<li>
                                        <Text
                                            color={"#565656"}
                                            fontSize={{lg: "20px", base: "16px"}}
                                            fontWeight={"700"}
                                        >
                                            <chakra.span fontSize={{lg: "32px", base: "24px"}}>10+</chakra.span>
                                            years in
                                            business intelligence and data warehouse services.
                                        </Text>
									</li>
									<li>
                                        <Text
                                            color={"#565656"}
                                            fontSize={{lg: "20px", base: "16px"}}
                                            fontWeight={"700"}
                                        >
                                            <chakra.span fontSize={{lg: "32px", base: "24px"}}>4+</chakra.span>
                                            span>years in big
                                            data.
                                        </Text>
									</li>
									<li>
                                        <Text
                                            color={"#565656"}
                                            fontSize={{lg: "20px", base: "16px"}}
                                            fontWeight={"700"}
                                        >
                                            <chakra.span fontSize={{lg: "32px", base: "24px"}}>4+</chakra.span>
                                            span>years in
                                            Microsoft Power BI services.
                                        </Text>
									</li>
								</ul>
							</Box>
							<Associates id="CAP" scrollMarginTop={"150px"}>
								<div className="wrapper">
									<div className="carousel">
										<div>
											<LogoMarquee />
										</div>
									</div>
								</div>
							</Associates>
							<Box
								backgroundColor={"#FDE6E7"}
								mt={"5rem"}
								display={"flex"}
								flexDirection={"column"}
								justifyContent={"center"}
								alignItems={"center"}
							>
                                <Text
                                    as="h2"
                                    fontSize={{lg: "24px", base: "18px"}}
                                    fontWeight={"700"}
                                    color={"#565656"}
                                    textAlign={"center"}
                                    paddingBlock={".5rem"}
                                >
                                    NEED AN <chakra.span style={{color: "#E9000E"}}>EXPERT</chakra.span> FOR
                                    YOUR DATA ANALYTIC
                                    <chakra.span style={{color: "#E9000E"}}> PROJECT?</chakra.span>
                                </Text>
                                <Box
                                    width={{lg: "20%", base: "30%"}}
                                    height={"0"}
                                    border={"2px solid #E9000E"}
                                    mb={"1.5rem"}
                                />
                                <Text
                                    fontSize={{lg: "17px", base: "15px"}}
                                    fontWeight={"600"}
                                    color={"#565656"}
                                    textAlign={"center"}
                                    paddingX={{lg: "5rem", base: "1rem"}}
                                    mb={"1.5rem"}
                                >
                                    Tanta Innovative will help you build accurate and transparent
                                    analytics and reporting to eliminate the guesswork out of your
                                    business processes and identify new profit opportunities
                                </Text>
                                <Link
                                    href={{
                                        pathname: appRoutes.contactUs,
                                        query: {service: "services/data-analytics"},
                                    }}
									service="services/data_analytics"
									className="request-services"
								>
									<Box
                                        display={"flex"}
                                        padding={"5px 10px"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        backgroundColor={"#F8B3B7"}
                                        border-radius={"10px"}
                                        fontSize={{lg: "16px", base: "15px"}}
                                        fontWeight={600}
                                        color={"#263238"}
                                        cursor={"pointer"}
                                        mb={"1rem"}
                                        boxShadow={" 0px 1px 2px rgba(0, 0, 0, 0.3)"}
                                    >
                                        Request Data Analytics Service
                                    </Box>
                                </Link>
                            </Box>
                            <Box id="DAI" mt={"5rem"} scrollMarginTop={"150px"}>
                                <Text
                                    as="h2"
                                    fontSize={{lg: "28px", base: "22px"}}
                                    fontWeight={"700"}
                                    color={"#414141"}
                                    mb={".5rem"}
                                >
                                    Data Analytics
                                    <chakra.span style={{color: "#B20000"}}> Insights</chakra.span>
                                </Text>
								<Box
                                    width={{lg: "10%", base: "30%"}}
                                    height={"0"}
                                    border={"2px solid #E9000E"}
                                    mb={"1.5rem"}
								/>
								<InsightContainer>
									{insights.map((item) => {
										return (
											<InsightCard key={item.index}>
												<InsightData>
													<Image
														src={item.img}
														alt={item.title}
														className="insight-img"
													/>
													<h3>{item.title}</h3>
													<Box
                                                        width={{lg: "10%", base: "30%"}}
                                                        height={"0"}
                                                        border={"2px solid #E9000E"}
                                                        mb={"2rem"}
													/>

													<p>{item.details}</p>
												</InsightData>
											</InsightCard>
										);
									})}
								</InsightContainer>
							</Box>
						</Box>
					</Flex>
				</Container>
			</Box>
			<Box>
				<ContactUs subtitle="For Your Data Analytics Projects" />
			</Box>
		</>
	);
};

export default DataAnalytics;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;

	width: 100%;

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
		background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
		border-radius: 8px;
		color: #fff;
		border: none;
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
		background-color: #fff;
		color: #b10000;
		border: 1px solid #b10000;
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

const ExpertContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
	flex-wrap: wrap;
	margin-bottom: 2rem;

	${breakpoints.lg} {
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	${breakpoints.md} {
		gap: 0.5rem;
	}
`;

const ExpertCard = styled.div`
	width: 47%;
	border-radius: 8px;
	box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
		0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);
	transition: all 0.2s ease-in-out;
	margin-bottom: 1rem;

	@media (max-width: 600px) {
		width: 90%;
	}

	&:hover {
		transform: scale(1.01);
	}
	.service-img {
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 0.5rem auto;

		${breakpoints.lg} {
			width: 40px;
			height: 40px;
		}
	}
	h3 {
		font-size: 22px;
		font-weight: 600;
		color: #0c0c0c;
		margin-bottom: 1rem;
		text-align: center;
		padding-top: 10px;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}

		${breakpoints.lg} {
			font-size: 1rem;
		}
	}
	p {
		font-size: 18px;
		font-weight: 400;
		color: #636363;
		margin-bottom: 2rem;
		text-align: center;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}
	}
`;

const ExpertData = styled.div`
	padding: 0.5rem 0.5rem 1rem 0.5rem;

	h3 {
		font-size: 22px;
		font-weight: 700;
		text-align: left;

		${breakpoints.lg} {
			font-size: 1rem;
		}

		${breakpoints.sm} {
			font-size: 1rem;
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 16px;
			font-weight: 400;
			color: #303030;
			margin-bottom: 0.5rem;
			word-break: break-word;

			.icon {
				color: #22ae16;
			}

			${breakpoints.sm} {
				font-size: .9rem;
			}
		}
	}
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 3rem;
	flex-wrap: wrap;
	justify-content: center;

	margin-bottom: 2rem;
	${breakpoints.lg} {
		gap: 1rem;
	}

	${breakpoints.md} {
		gap: 0.5rem;
	}
`;

const ServicesCard = styled.div`
	width: 45%;
	display: flex;
	flex-shrink: 2;
	flex-direction: column;
	justify-content: center;
	padding: 0 0.5rem;
	border-radius: 8px;
	box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
		0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);
	transition: all 0.2s ease-in-out;
	margin-bottom: 1rem;
	@media (min-width: 700px) and (max-width: 929px) {
		width: 90%;
		// margin: 0 auto;
	}

	@media (max-width: 600px) {
		width: 90%;
		// margin: 0 auto;
	}

	&:hover {
		transform: scale(1.01);
	}
	.service-img {
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 0.5rem auto;

		${breakpoints.lg} {
			width: 40px;
			height: 40px;
		}
	}
	h3 {
		font-size: 22px;
		font-weight: 600;
		color: #0c0c0c;
		margin-bottom: 1rem;
		text-align: center;
		padding-top: 10px;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}

		${breakpoints.lg} {
			font-size: 1rem;
		}
	}
	p {
		font-size: 20px;
		font-weight: 400;
		color: #636363;
		margin-bottom: 2rem;
		text-align: center;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}
	}
	button {
		background: #ffffff;
		box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
			0 1.55172px 4.65517px 1.55172px rgba(0, 0, 0, 0.15);
		border-radius: 12.4138px;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		color: #656565;
		padding: 0.3rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		transition: all 0.2s ease-in-out;
		margin: 0 auto;

		@media (max-width: 850px) {
			font-size: 0.8rem;
		}

		@media (max-width: 800px) {
			font-size: 0.4rem;
		}
		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		.icon {
			color: #fff;
			background-color: #dd0000;
			padding: 0.1rem;
			border-radius: 50%;
			font-size: 25px;

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}

			${breakpoints.lg} {
				font-size: 1rem;
			}
		}

		&:hover {
			opacity: 0.5;
		}
	}
`;

const CardData = styled.div`
	padding: 0.5rem 0.5rem 1rem 0.5rem;

	h3 {
		font-size: 24px;
		font-weight: 700;
		text-align: left;

		${breakpoints.lg} {
			font-size: 1.1rem;
		}

		${breakpoints.md} {
			font-size: 1.1rem;
		}

		${breakpoints.sm} {
			font-size: 1rem;
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 17px;
			font-weight: 400;
			color: #303030;
			margin-bottom: 0.5rem;
			text-align: left;

			.icon {
				color: #22ae16;
			}

			${breakpoints.sm} {
				font-size: .9rem;
			}
		}
	}
`;

export const InsightContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-bottom: 2rem;
	justify-content: center;
	align-items: center;

	${breakpoints.lg} {
		gap: 1rem;
	}

	${breakpoints.md} {
		gap: 0.5rem;
	}
`;

export const InsightCard = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	
	
	background-color: #fde6e7;
	padding: 0.5rem;
	border-radius: 8px;
	margin-bottom: 1rem;
	@media (min-width: 700px) and (max-width: 929px) {
		width: 90%;
		// margin: 0 auto;
	}

	@media (max-width: 600px) {
		width: 100%;
		// margin: 0 auto;
	}

	&:hover {
		transform: scale(1.01);
	}
	.insight-img {
		width: 60px;
		height: 58px;
		display: flex;
		margin-bottom: 1rem;

		${breakpoints.lg} {
			width: 60px;
			height: 58px;
		}
	}
	h3 {
		font-size: 22px;
		font-weight: 600;
		color: #0c0c0c;
		margin-bottom: 1rem;
		// text-align: center;
		padding-top: 10px;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}

		${breakpoints.lg} {
			font-size: 1rem;
		}
	}
	p {
		font-size: 18px;
		font-weight: 400;
		color: #636363;
		margin-bottom: 2rem;
		// text-align: center;

		@media (max-width: 1200px) {
			font-size: .9rem;
		}
	}
	button {
		background: #ffffff;
		box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
			0 1.55172px 4.65517px 1.55172px rgba(0, 0, 0, 0.15);
		border-radius: 12.4138px;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		color: #656565;
		padding: 0.3rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		transition: all 0.2s ease-in-out;
		margin: 0 auto;

		@media (max-width: 850px) {
			font-size: 0.8rem;
		}

		@media (max-width: 800px) {
			font-size: 0.4rem;
		}
		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		.icon {
			color: #fff;
			background-color: #e9000e;
			padding: 0.1rem;
			border-radius: 50%;
			font-size: 25px;

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}

			${breakpoints.lg} {
				font-size: 1rem;
			}
		}

		&:hover {
			opacity: 0.5;
		}
	}
`;

export const InsightData = styled.div`
	padding: 0.7rem 1rem;

	h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: #565656;
		// text-align: center;
		// text-transform: uppercase;

		${breakpoints.lg} {
			font-size: 1.1rem;
		}

		${breakpoints.md} {
			font-size: 1.3rem;
		}

		${breakpoints.sm} {
			font-size: 1rem;
		}
	}
`;
