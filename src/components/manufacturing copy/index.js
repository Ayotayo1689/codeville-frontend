import React, {useEffect, useRef, useState} from "react";
import {Box, Container, Flex, Text,} from "@chakra-ui/react";
import Link from "next/link";
import LandingLayout from "../../layouts/landing.layout";
import BgImage from "../../../public/assets/consulting/bgimg.png";
import styled from "styled-components";
import Image from "next/image";
import {MdKeyboardArrowRight} from "react-icons/md";
import {approach, services, sideBarData,} from "./data";
import {breakpoints} from "../../../styles/theme";
import Marquee from "react-fast-marquee";
import {brandmovers, burtech, dcfoods, divichotel, finlab, nigerPolice, weather,} from "/assets/clients";
import WhyChoose from "./whyChoose";
import NeedExpert from "./NeedExpert";
import FullForm from "../contactUsPage/FullForm";

const images = [
    brandmovers,
    burtech,
    dcfoods,
    divichotel,
    finlab,
    nigerPolice,
    weather,
];

// The Testimonial slider is to be rendered on Line 440
//  It has been commented out for now

function ItConsulting() {
    const LogoMarquee = () => {
        return (
            <Marquee gradient={false}>
                {images.map((image, index) => (
                    <Box key={index} mr="10px">
                        <Image src={image} alt="Logo" width={100} height={50}/>
                    </Box>
                ))}
            </Marquee>
        );
    };

    const [activeLink, setActiveLink] = useState({});
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);

    useEffect(() => {
        if (activeLink.about && aboutRef.current) {
            aboutRef.current.scrollIntoView({behavior: "smooth"});
        }
        if (activeLink.services && servicesRef.current) {
            servicesRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [activeLink]);

    return (
        <>
            <Consulting>
                <Wrapper>
                    <TextContainer>
                        <p>Solutions</p>
                        <h3>Manufacturing </h3>
                        <div></div>
                    </TextContainer>
                    <Container maxW={"7xl"}>
                        <HeroContent>
                            <Image
                                src={"/assets/manufacturing/hero.svg"}
                                alt="hero image"
                                width={500}
                                height={500}
                                className="hero-img"
                            />
                            <HeroText>
                                <h1>Our Strong IT Services For Your Manufacturing Solutions</h1>
                                <p>
                                    With 33-year experience in developing software for the
                                    manufacturing industry, Tantain offers robust solutions and
                                    related services to support and modernize your enterprise’s
                                    operations and ensure increased efficiency of operations and
                                    optimized business costs, all without IT budget overruns.
                                </p>
                                <CtaButtons>
                                    <button className="request-services">
                                        Request Our Services
                                    </button>
                                    <button className="get-quote">get a quote</button>
                                </CtaButtons>
                            </HeroText>
                        </HeroContent>

                        <Box mb={"2rem"} mt={"4rem"}>
                            <Flex gap={"2rem"} justify={"center"}>
                                <Flex
                                    flexDir="column"
                                    boxShadow={"lg"}
                                    height="fit-content"
                                    flex={1}
                                    position="sticky"
                                    overflow={"hidden"}
                                    top="3rem"
                                    pb={"1rem"}
                                    borderBottom={"lg"}
                                    className="side-bar"
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
                                        background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
                                    >
                                        IT OUTSOURCING
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
                                                            setActiveLink({[item.goto]: true});
                                                            const sectionRef =
                                                                item.goto === "about" ? aboutRef : servicesRef;
                                                        }}
                                                        style={{
                                                            color: activeLink[item.goto] ? "red" : "",
                                                            fontSize: "18px",
                                                            fontWeight: "400",
                                                            cursor: "pointer",
                                                            width: "100%",
                                                        }}
                                                        href={item.goto}
                                                    >
                                                        {item.title}
                                                    </Link>

                                                    <MdKeyboardArrowRight
                                                        style={{marginLeft: "47px"}}
                                                        cursor={"pointer"}
                                                        size={"2rem"}
                                                    />
                                                </Flex>
                                            );
                                        })}
                                    </Box>
                                </Flex>
                                <Box flex={3} mb={"2rem"} pl={"2rem"} className="about-box">
                                    <WhyChoose/>
                                    <Box id="approach">
                                        <Services>
                                            <div className="services">
                                                <h3>
													<span>
														IT Solutions<div></div>
													</span>
                                                    for Manufacturing to Optimize Your Operations
                                                </h3>
                                            </div>
                                            <CardContainer>
                                                {approach.map((item) => {
                                                    return (
                                                        <ServicesCard
                                                            className="services-card"
                                                            key={item.index}
                                                        >
                                                            <CardData>
                                                                <Image
                                                                    src={item.img}
                                                                    alt={item.title}
                                                                    className="service-img"
                                                                />
                                                                <h3>{item.title}</h3>
                                                                <p>{item.details}</p>
                                                            </CardData>
                                                        </ServicesCard>
                                                    );
                                                })}
                                            </CardContainer>
                                        </Services>
                                    </Box>
                                    <Box id="outsourcing">
                                        <Services>
                                            <div className="services">
                                                <h3>Our Outsourcing Service Options</h3>

                                                <div></div>
                                            </div>
                                            <CardContainer>
                                                {services.map((item) => {
                                                    return (
                                                        <ServicesCard
                                                            className="services-card"
                                                            key={item.index}
                                                        >
                                                            <CardData>
                                                                <h3>{item.title}</h3>
                                                                <p>{item.details}</p>
                                                                <Link href={item.link}>
                                                                    <button>
                                                                        Go for this{" "}
                                                                        <MdKeyboardArrowRight className="icon"/>
                                                                    </button>
                                                                </Link>
                                                            </CardData>
                                                        </ServicesCard>
                                                    );
                                                })}
                                            </CardContainer>
                                        </Services>
                                    </Box>

                                    <Box id="approach">
                                        <Services>
                                            <div className="services">
                                                <h3>
                                                    <span>Choose Your </span> {""}Service Option
                                                </h3>
                                                <div></div>
                                            </div>
                                            <CardContainer>
                                                {approach.map((item) => {
                                                    return (
                                                        <ServicesCard
                                                            className="services-card"
                                                            key={item.index}
                                                        >
                                                            <CardData>
                                                                <Image
                                                                    src={item.img}
                                                                    alt={item.title}
                                                                    className="service-img"
                                                                />
                                                                <h3>{item.title}</h3>
                                                                <p>{item.details}</p>
                                                            </CardData>
                                                        </ServicesCard>
                                                    );
                                                })}
                                            </CardContainer>
                                        </Services>
                                    </Box>
                                    <Box>
                                        <NeedExpert/>
                                    </Box>

                                    {/* <Box id="kpi">
										<Techniques>
											<div className="techniques">
												<h3>
													KPIs we use to estimate the work in progress and
													results:
												</h3>
												<div></div>
											</div>
											<TechContainer>
												{techniques.map((item) => {
													return (
														<TechCard
															className="tech-card"
															key={item.title}
															style={{ background: "rgba(233, 0, 14, 0.1)" }}
														>
															<Flex
																bg={item.bg}
																py={".5rem"}
																justifyContent={"center"}
																alignItems={"center"}
															>
																<Image src={item.icon} alt="logo" />
																<Text color={"white"} fontSize={"lg"}>
																	{item.title}
																</Text>
															</Flex>

															<CardData>
																<ul>
																	{item.items.map((nestedItem) => (
																		<li
																			style={{ fontSize: "1rem" }}
																			key={nestedItem.id}
																		>
																			<IoIosCheckmark className="icon" />
																			{nestedItem.name}
																		</li>
																	))}
																</ul>
															</CardData>
														</TechCard>
													);
												})}
											</TechContainer>
										</Techniques>
									</Box> */}
                                </Box>
                            </Flex>
                        </Box>
                    </Container>
                    <Box>
                        <FullForm/>
                    </Box>
                </Wrapper>
            </Consulting>
        </>
    );
}

ItConsulting.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};
export default ItConsulting;

const Consulting = styled.div`
	background-image: url(${BgImage.src});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: relative;
	width: 100%;
	bottom: 3rem;
	margin-top: 6.5rem;
`;

const Wrapper = styled.div`
  margin: 2rem;

  ${breakpoints.md} {
    .side-bar {
      display: none;
    }

    .about-box {
      padding-left: 0;
    }
  }
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	margin-top: 5rem;
	margin-bottom: 5rem;

	${breakpoints.lg} {
		margin-top: 3rem;
		margin-bottom: 0rem;
	}
	p {
		font-size: 1rem;
		font-weight: 400;
		color: #636363;
		margin-top: 2rem;

		${breakpoints.lg} {
			margin-top: 1rem;
		}

		${breakpoints.md} {
			display: none;
		}
	}
	h3 {
		font-size: 1.8rem;
		font-weight: 700;
		color: #0c0c0c;
		text-transform: uppercase;

		${breakpoints.lg} {
			font-size: 1.2rem;
		}

		${breakpoints.md} {
			margin-top: 1.5rem;
			font-size: 1.4rem;
		}
	}
	div {
		width: 55px;
		height: 3px;
		background-color: #e9000e;
		margin-bottom: 0.5rem;
	}
`;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;
	display: flex;
	justify-content: space-between;

	width: 100%;
	border-bottom: 1px solid #e5e5e5;
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
		.hero-img {
			padding-top: 1rem;
		}
	}
`;

const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	gap: 1rem;
	width: 50%;
	text-align: right;

	@media (max-width: 820px) {
		width: 100%;
	}

	${breakpoints.md} {
	}
	h1 {
		position: relative;
		box-sizing: border-box;
		margin-left: 2rem;
		font-size: 2.4rem;
		font-weight: 700;
		margin-top: 0;
		padding-top: 0;
		color: #0c0c0c;
		border-right: 4px solid red;
		padding-inline-end: 1.4rem;
		${breakpoints.lg} {
			font-size: 1.7rem;
		}

		/* ${breakpoints.md} {
      font-size: 0.7rem;
    } */

		@media (max-width: 820px) {
			font-size: 1.5rem;
			font-weight: 500;
		}
	}
	p {
		font-size: 1.4rem;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		color: #636363;

		@media (max-width: 820px) {
			font-size: 0.9rem;
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
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
			0px 1px 3px 1px rgba(0, 0, 0, 0.15);
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

const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0;

  div {
    margin-block: 1rem;

    h2 {
      font-size: 18px;
      font-weight: 400;
      color: #636363;
      text-transform: uppercase;

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      color: #414141;
      width: 90%;

      span {
        color: #e9000e;
      }

      ${breakpoints.lg} {
        font-size: 1.2rem;
        width: 100%;
      }

      @media (max-width: 768px) {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 1.2rem;
      }

      ${breakpoints.sm} {
        font-size: 1rem;
      }
    }
  }

  .details {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;

    ${breakpoints.lg} {
      gap: 0.5rem;
    }

    .about-img {
      width: 50px;
      height: 50px;

      ${breakpoints.lg} {
        width: 40px;
        height: 40px;
      }

      @media (max-width: 768px) {
        display: none;
      }

      ${breakpoints.md} {
        display: flex;
      }
    }

    h5 {
      font-size: 1.3rem;
      font-weight: 500;
      color: #0c0c0c;
      padding: 0.2rem 0;
      padding-top: 1rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }

    p {
      font-size: 18px;
      font-weight: 400;
      color: #636363;

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }
  }
`;

const Services = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 7rem;
	margin-bottom: 1rem;

	${breakpoints.lg} {
		padding-top: 4rem;
	}

	.services {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;
		margin-bottom: 1rem;

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}
			@media (max-width: 850px) {
				font-size: 0.9rem;
			}
		}
		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;
			width: 90%;

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.5rem;
		}
		span {
			color: #e9000e;
		}
		p {
			font-size: 20px;
			font-weight: 400;
			color: #2a2a2a;

			${breakpoints.lg} {
				margin-top: 0rem;
				font-size: 18px;
			}

			@media (max-width: 850px) {
				font-size: 1rem;
			}
		}
	}
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 2rem;
	flex-wrap: wrap;
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
	padding: 0.5rem;
	border-radius: 8px;
	box-shadow: 0px 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
		0px 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);
	transition: all 0.2s ease-in-out;
	margin-bottom: 1rem;
	@media (min-width: 700px) and (max-width: 929px) {
		width: 90%;
		margin: 0 auto;
	}

	@media (max-width: 600px) {
		width: 90%;
		margin: 0 auto;
	}

	&:hover {
		transform: scale(1.01);
	}
	.service-img {
		width: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
		text-align: center;
		margin: 0 auto;

		${breakpoints.lg} {
			width: 40px;
			height: 40px;
		}
	}
	h3 {
		font-size: 20px;
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
	button {
		background: #ffffff;
		box-shadow: 0px 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
			0px 1.55172px 4.65517px 1.55172px rgba(0, 0, 0, 0.15);
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

const Expertise = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 1rem;
	margin-bottom: 4rem;

	.expertise {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;
		margin-bottom: 1rem;

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}

			${breakpoints.sm} {
				font-size: 0.8rem;
			}
		}
		h3 {
			font-size: 25px;
			font-weight: 600;
			color: #414141;

			${breakpoints.lg} {
				font-size: 1.2rem;
			}

			${breakpoints.sm} {
				font-size: 0.9rem;
			}

			span {
				color: #e9000e;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.5rem;
		}
		p {
			font-size: 18px;
			font-weight: 400;
			color: #2a2a2a;

			${breakpoints.lg} {
				font-size: 1rem;
			}
		}
	}
`;

const ExpertCardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	flex-wrap: wrap;
	margin-bottom: 2rem;
	width: 100%;

	${breakpoints.lg} {
		gap: 1rem;
	}
	${breakpoints.sm} {
		justify-content: space-between;
		margin-bottom: 0rem;
	}
`;
const ExpertCard = styled.div`
	background: #ffffff;
	border-bottom: 3px solid rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.02);
	}

	${breakpoints.lg} {
		width: 45%;
	}

	@media (min-width: 700px) and (max-width: 800px) {
		width: 70%;
		margin: 0 auto;
	}

	@media (min-width: 600px) and (max-width: 700px) {
		width: 30%;
	}

	${breakpoints.sm} {
		width: 35%;
	}
`;
const CardData = styled.div`
	padding: 0.5rem 0.5rem 1rem 0.5rem;

	.img-box {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.8rem;

		.icon {
			color: #151616;
			background-color: #d6dde1;
			padding: 0.1rem;
			margin-top: -3rem;
			border-radius: 50%;
			font-size: 25px;
			transition: all 0.2s ease-in-out;

			&:hover {
				background-color: #e9000e;
				color: #fff;
			}
		}
	}

	h3 {
		font-size: 1rem;
		font-weight: 700;
		text-align: center;
		text-transform: uppercase;

		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		${breakpoints.md} {
			font-size: 0.9rem;
		}

		${breakpoints.sm} {
			font-size: 0.6rem;
		}
	}
`;

const Customers = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 1rem;

	.customers {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}
			@media (max-width: 850px) {
				font-size: 0.9rem;
			}
		}
		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;
			width: 90%;

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.2rem;
		}
		p {
			font-size: 20px;
			font-weight: 400;
			color: #2a2a2a;

			${breakpoints.lg} {
				margin-top: 0rem;
				font-size: 18px;
			}

			@media (max-width: 850px) {
				font-size: 1rem;
			}
		}
	}
`;

const Business = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;

  .business {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0;
    margin-bottom: 1rem;

    h2 {
      font-size: 18px;
      font-weight: 400;
      color: #636363;
      text-transform: uppercase;
      margin-bottom: -1rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }

      @media (max-width: 850px) {
        font-size: 0.9rem;
      }
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 700;
      color: #414141;
      margin-bottom: 1rem;

      span {
        color: #e9000e;
      }

      ${breakpoints.lg} {
        font-size: 1.5rem;
      }

      @media (max-width: 850px) {
        font-size: 1.2rem;
      }

      ${breakpoints.sm} {
        margin-bottom: 0;
      }
    }

    div {
      width: 55px;
      height: 3px;
      background-color: #e9000e;
      margin-bottom: 0.2rem;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      color: #2a2a2a;

      ${breakpoints.lg} {
        margin-top: 0rem;
        font-size: 18px;
      }

      @media (max-width: 850px) {
        font-size: 1rem;
      }
    }
  }

  .business-details {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.5rem;

    ${breakpoints.lg} {
      gap: 0.5rem;
    }

    .business-img {
      width: 50px;
      height: 50px;
      margin-top: 1.2rem;

      ${breakpoints.lg} {
        width: 40px;
        height: 40px;
      }

      @media (max-width: 768px) {
        display: none;
      }

      ${breakpoints.md} {
        display: flex;
      }
    }

    h5 {
      font-size: 1.3rem;
      font-weight: 500;
      color: #0c0c0c;
      padding: 0.2rem 0;
      padding-top: 1rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }

    p {
      font-size: 18px;
      font-weight: 400;
      color: #636363;

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }
  }

  a {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    button {
      border: none;
      display: flex;
      color: #e9000e;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.2s ease-in-out;
      text-transform: uppercase;

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
        color: #e9000e;
        padding: 0.1rem;
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
  }
`;

const Portfolio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 6rem;

  ${breakpoints.lg} {
    margin-top: 4rem;
  }

  .portfolio {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0;
    margin-bottom: 1rem;

    h2 {
      font-size: 18px;
      font-weight: 400;
      color: #636363;
      text-transform: uppercase;
      margin-bottom: -1rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }

      @media (max-width: 850px) {
        font-size: 0.9rem;
      }
    }

    h3 {
      font-size: 30px;
      font-weight: 700;
      color: #414141;
      width: 90%;

      ${breakpoints.lg} {
        font-size: 1.5rem;
      }

      @media (max-width: 850px) {
        font-size: 1.2rem;
      }
    }

    div {
      width: 55px;
      height: 3px;
      background-color: #e9000e;
      margin-bottom: 0.2rem;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      color: #2a2a2a;

      ${breakpoints.lg} {
        margin-top: 0rem;
        font-size: 18px;
      }

      @media (max-width: 850px) {
        font-size: 1rem;
      }
    }
  }
`;

const PortfolioCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	flex-wrap: wrap;
	margin-bottom: 2rem;

	${breakpoints.lg} {
		gap: 1rem;
	}

	${breakpoints.md} {
		gap: 0.5rem;
	}

	${breakpoints.sm} {
		justify-content: space-between;
		margin-bottom: 0rem;
		width: 100%;
	}
`;

const PortfolioCard = styled.div`
  width: 30%;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  @media (min-width: 850px) and (max-width: 1000px) {
    width: 45%;
    margin: 0 auto;
  }
  @media (max-width: 849px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 700px) {
    width: 45%;
    margin: 0 auto;
  }

  ${breakpoints.sm} {
    width: 45%;
    margin: 0;
    padding: 0;
    padding-bottom: 1rem;
  }

  &:hover {
    transform: scale(1.01);
  }

  .portfolio-img {
    width: 100%;
  }
`;

const Techniques = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 3rem;
	margin-bottom: 1rem;

	${breakpoints.lg} {
		padding-top: 4rem;
	}

	.techniques {
		margin-bottom: 1rem;

		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.5rem;
		}
	}
`;

const TechContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 2rem;
	flex-wrap: wrap;
	margin-bottom: 2rem;

	${breakpoints.lg} {
		gap: 1rem;
	}

	${breakpoints.md} {
		gap: 0.5rem;
	}
`;

const TechCard = styled.div`
	width: 45%;
	margin-bottom: 1rem;

	transition: all 0.2s ease-in-out;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;

	@media (min-width: 700px) and (max-width: 929px) {
		width: 90%;
		margin: 0 auto;
	}

	@media (max-width: 600px) {
		width: 90%;
		margin: 0 auto;
	}

	${breakpoints.sm} {
		width: 100%;
	}

	&:hover {
		transform: scale(1.01);
	}

	.title {
		font-size: 1.1rem;
		font-weight: 400;
		color: #b60e09;
		margin-bottom: 1rem;
		text-decoration-line: underline;
		padding-top: 10px;
		text-transform: capitalize;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}

		${breakpoints.lg} {
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
			font-size: 14px;
			font-weight: 400;
			color: #303030;
			margin-bottom: 0.5rem;
			text-align: left;

			.icon {
				color: #22ae16;
			}
		}
	}
`;

const Reviews = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 4rem;

	${breakpoints.lg} {
		margin-top: 4rem;
	}

	.reviews {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;
		margin-bottom: 1rem;

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}
			@media (max-width: 850px) {
				font-size: 0.9rem;
			}
		}
		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;
			width: 90%;

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.2rem;
		}
	}
`;

const Summary = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 4rem;

	${breakpoints.lg} {
		margin-top: 4rem;
	}

	.summary {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;
		margin-bottom: 1rem;

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}
			@media (max-width: 850px) {
				font-size: 0.9rem;
			}
		}
		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;

			span {
				color: #e9000e;
			}

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.2rem;
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

const Projects = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 4rem;

	${breakpoints.lg} {
		margin-top: 4rem;
	}

	.projects {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;
		margin-bottom: 1rem;

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}

			@media (max-width: 850px) {
				font-size: 0.9rem;
			}
		}
		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;

			span {
				color: #e9000e;
			}

			${breakpoints.lg} {
				font-size: 1.5rem;
			}
			@media (min-width: 700px) and (max-width: 929px) {
				font-size: 1.2rem;
			}
			@media (max-width: 850px) {
				font-size: 1rem;
			}
			@media (max-width: 600px) {
				font-size: 1.2rem;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.2rem;
		}
	}
`;

const CasesContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 2rem;
	flex-wrap: wrap;
	margin-bottom: 2rem;

	${breakpoints.lg} {
		gap: 1rem;
	}

	${breakpoints.md} {
		gap: 0.5rem;
	}
`;

const CasesCard = styled.div`
	width: 47%;
	border-radius: 8px;
	box-shadow: 0px 1.55172px 1.10345px rgba(0, 0, 0, 0.3),
		0px 1.10345px 1.31034px 1.10345px rgba(0, 0, 0, 0.15);
	transition: all 0.2s ease-in-out;
	margin-bottom: 1rem;

	@media (min-width: 700px) and (max-width: 929px) {
		width: 75%;
		margin: 0.5rem auto;
	}

	@media (max-width: 600px) {
		width: 70%;
		margin: 0.5rem auto;
	}

	${breakpoints.sm} {
		width: 100%;
	}

	&:hover {
		transform: scale(1.01);
	}
	div {
		padding: 0 0.5rem;
		h3 {
			font-size: 1.1rem;
			font-weight: 600;
			color: #0c0c0c;
			padding-top: 10px;

			@media (max-width: 1200px) {
				font-size: 1rem;
			}

			${breakpoints.lg} {
				font-size: 1rem;
			}
		}
		h5 {
			text-transform: uppercase;
			color: #e9000e;
			font-weight: 300;
			font-size: 0.8rem;
			margin: 0.5rem 0;
		}
		p {
			font-size: 0.87rem;
			font-weight: 400;
			color: #303030;
			margin-bottom: 2rem;
		}
		button {
			background: #ffffff;
			border: none;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.3rem;
			color: #e9000e;
			padding-bottom: 1rem;
			font-size: 1rem;
			font-weight: 500;
			transition: all 0.2s ease-in-out;
			margin: 0 auto;

			.icon {
				color: #e9000e;
				font-size: 25px;
			}

			&:hover {
				opacity: 0.5;
			}
		}
	}
`;

const AllServices = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 4rem;

	${breakpoints.lg} {
		margin-top: 4rem;
	}

	.all-services {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;
		margin-bottom: 1rem;

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}
			@media (max-width: 850px) {
				font-size: 0.9rem;
			}
		}
		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;

			span {
				color: #e9000e;
			}

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.2rem;
		}
	}
`;

const AllServicesContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
	flex-wrap: wrap;
	margin-bottom: 2rem;

	${breakpoints.lg} {
		gap: 1rem;
	}

	${breakpoints.md} {
		gap: 0.5rem;
	}

	${breakpoints.sm} {
		justify-content: space-between;
		margin-bottom: 0rem;
		width: 100%;
	}
`;

const AllServicesCard = styled.div`
	width: 30%;

	@media (min-width: 850px) and (max-width: 1200px) {
		width: 45%;
	}
	@media (max-width: 849px) {
		width: 100%;
	}
	@media (max-width: 700px) {
		width: 45%;
	}

	${breakpoints.sm} {
		width: 100%;
		margin: 0;
		padding: 0;
		padding-bottom: 1rem;
	}
	div {
		.title {
			font-size: 1.35rem;
			font-weight: 500;
			padding-top: 10px;
			border-radius: 8px;
			padding-bottom: 0.5rem;

			@media (max-width: 1200px) {
				font-size: 1rem;
			}

			${breakpoints.lg} {
				font-size: 1rem;
			}
		}

		div {
			width: 70px;
			height: 2px;
			background-color: #f2666e;
			margin-bottom: 0.9rem;
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			font-size: 14px;
			font-weight: 400;
			color: #303030;
			margin-bottom: 0.5rem;
		}
	}
`;
