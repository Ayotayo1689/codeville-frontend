import React from "react";
import {Box, Container, Flex} from "@chakra-ui/react";
import Link from "next/link";
import LandingLayout from "../../../layouts/landing.layout";
import styled from "styled-components";
import HeroImg from "../../../../public/assets/consulting/heroImg.svg";
import Image from "next/image";
import {about, experts, services, sideBarData, techniques,} from "./data";
import {BsArrowRightShort} from "react-icons/bs";
import {IoIosCheckmark} from "react-icons/io";
import {breakpoints} from "../../../../styles/theme";
import HeaderOne from "../../HeaderOne";
import TantaTestimonial from "../../tantaTestimonials";
import Card from "./portfolioCard";
import SolutionCards from "./solutionCards";
import TantaSummary from "./summary";
import AllItConsultingServices from "./allITConsulting";
import BusinessWeTransform from "./businessWeTransform";
import LogoMarquee from "../../logoMarquee";
import Sidebar from "./Sidebar";
import appRoutes from "../../../utils/appRoutes";


function ItConsulting({ cases, testimonials, portfolio }) {

	return (
		<>

			<Consulting>
				<HeaderOne heading={"SERVICES"} title={"IT Consulting"} />
				<Container maxW={"7xl"} px={{ lg: "5rem", sm:"2rem", base: "1rem"}}>
					<Wrapper>
						{/*<HeroHeader */}
						<HeroContent>
							<HeroText>
								<h1>Information Technology Consulting</h1>
								<p>
									Reach out to our dedicated team of IT consultants to discuss
									your project needs, explore innovative solutions, and discover
									how we can transform your ideas into reality, explore
									innovative solutions, and discover how we can transform your
									ideas into reality.
								</p>
								<CtaButtons>
									<Link
										href={{
                                            pathname: appRoutes.contactUs,
                                            query: {service: "services/it-consulting"},
                                        }}
										service="services/it_consulting"
										className="request-services"
									>
										{" "}
										<button className="request-services">
											Request IT CONSULTING services
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
								src={HeroImg}
								alt="hero image"
								width={400}
								height={400}
								className="hero-img"
							/>
						</HeroContent>

						<Box mb={"2rem"} mt={"4rem"}>
							<Flex gap={"2rem"} justify={"center"}>

								<Sidebar
									title={'IT CONSULTING'}
									items={sideBarData}
									height="480px"
								/>

								<Box width={{ base: "100%", lg: "65%" }} mx={{base:"1rem", lg:"0"}}>

									{/* ABOUT SECTION */}
									<Box id="about" scrollMarginTop={"150px"}>
										<About>
											<div>
												<h2>it consulting</h2>
												<h3>
													<span>Tanta Innovative</span> - Maturity, Passion, And
													A Strong Desire To Innovate
												</h3>
											</div>
											{about.map((item, index) => {
												return (
													<div className="details" key={index}>
														<Image
															src={item.img}
															alt="About Tanta"
															className="about-img"
														/>
														<div>
															<h5>{item.title}</h5>
															<p>{item.details}</p>
														</div>
													</div>
												);
											})}
										</About>
									</Box>

									{/* SERVICES  SECTION */}
									<Box id="services" scrollMarginTop={"60px"}>
										<Services>
											<div className="services">
												<h2>Our services</h2>
												<h3>Our IT consulting solutions </h3>
												<div></div>
												<p>
													Unlock your business's potential with our innovative
													IT consulting services. Our team of experts delivers
													personalized solutions to help you achieve your goals.
													We offer tailored solutions to help you achieve your
													goals and stay ahead of the competition.
												</p>
											</div>
											<CardContainer>
												{services.map((item, index) => {
													return (
														<SolutionCards
															key={index}
															title={item?.title}
															img={item?.img}
															details={item?.details}
															link={item?.link}
														/>
													);
												})}
											</CardContainer>
										</Services>
									</Box>

									{/* EXPERTISE  SECTION */}
									<Box id="expertise" scrollMarginTop={"150px"}>
										<Expertise>
											<div className="expertise">
												<h2>INDUSTRY EXPERTISE</h2>
												<h3>
													Empowering <span>Industry Leaders</span> through
													Digital Transformation
												</h3>
												<div></div>
												<p>
													Tanta Innovatives is a leading provider of IT
													consulting and software development services that has
													helped businesses across multiple industries succeed.
													Our team of experienced IT professionals is
													well-equipped to help clients navigate the
													complexities of the digital landscape, develop
													innovative solutions, and stay ahead of the
													competition.
												</p>
											</div>
											<ExpertCardContainer>
												{experts.map((item) => {
													return (
														<ExpertCard key={item.index}>
															<CardData>
																<div className="img-box">
																	<Image
																		src={item.img}
																		alt={item.heading}
																		className="service-img"
																	/>
																	<Link href={item.link}>
																		<button>
																			<BsArrowRightShort className="icon" />
																		</button>
																	</Link>
																</div>
																<h3>{item.heading}</h3>
															</CardData>
														</ExpertCard>
													);
												})}
											</ExpertCardContainer>
										</Expertise>
									</Box>

									{/* CUSTOMERS SECTION */}
									<Box id="customers" scrollMarginTop={"150px"}>
										<Customers>
											<div className="customers">
												<h2>OUR CUSTOMERS</h2>
												<h3>Valued Customer Base</h3>
												<div></div>
												<p>
													Tanta Innovatives is a leading provider of IT
													consulting and software development services that has
													helped businesses across multiple industries succeed.
												</p>
											</div>
											<Box py={3}>
											<LogoMarquee colored={true} />
											</Box>
										</Customers>
									</Box>

									{/* BUSINESS SECTION */}
									<Box id="business" scrollMarginTop={"150px"}>
										<BusinessWeTransform />
									</Box>

									{/* PORTFOLIO  SECTION */}
									<Box id="portfolio" scrollMarginTop={"150px"}>
										<Portfolio>
											<div className="portfolio">
												<h2>Portfolio</h2>
												<h3>Fusing an Insatiable Hunger for Innovation</h3>
												<div></div>
												<p>
													We empower our clients to thrive in a rapidly-changing
													world by embracing and leveraging technological
													advancements
												</p>
											</div>
											<Card />
										</Portfolio>
									</Box>

									{/* TECHNIQUES  SECTION WHICH IS A CHILD OF PORTFOLIO SECTION*/}
									<Box>
										<Techniques>
											<div className="techniques">
												<h3>
													We Rely on Trusted Consulting Techniques and Best
													Practices
												</h3>
												<div></div>
											</div>
											<TechContainer>
												{techniques.map((item) => {
													return (
														<TechCard className="tech-card" key={item.title}>
															<CardData>
																<h3 className="title">{item.title}</h3>
																<ul>
																	{item.items.map((nestedItem) => (
																		<li key={nestedItem.id}>
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
									</Box>

									{/* REVIEWS  SECTION */}
									<Box id="reviews" scrollMarginTop={"150px"}>
										<TantaTestimonial testimonials={testimonials} />
									</Box>

									{/* SUMMARY SECTION */}
									<Box id="summary" scrollMarginTop={"150px"}>
										<TantaSummary />
									</Box>

									{/* PROJECTS SECTION */}
									<Box id="projects" scrollMarginTop={"150px"}>
										<Projects>
											<div className="projects">
												<h2>CONSULTING PROJECTS</h2>
												<h3>
													Our Selected <span>IT Consulting</span> Services
													Projects
												</h3>
												<div></div>
											</div>
											<CasesContainer>
												{cases.map((item, index) => {
													return (
														<CasesCard className="services-card" key={index}>
															<Image
																src={item?.project_logo}
																alt={item?.title}
																width={500}
																height={400}
															/>
															<div>
																<h3>{item?.title}</h3>
																<h5>{item?.industry}</h5>
																<p>{item?.short_description}</p>
																<a href={item?.link}>
																	<button>
																		View Case Study
																		<BsArrowRightShort className="icon" />
																	</button>
																</a>
															</div>
														</CasesCard>
													);
												})}
											</CasesContainer>
										</Projects>
									</Box>

									{/* ALL IT-SERVICES  SECTION */}
									<Box id="allServices">
										<AllItConsultingServices />
									</Box>
								</Box>
							</Flex>
						</Box>
					</Wrapper>
				</Container>
			</Consulting>
		</>
	);
}

ItConsulting.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default ItConsulting;

const Consulting = styled.div`
	margin-top: 5rem;
`;

const Wrapper = styled.div`
	//margin: 0 2rem;

	@media (max-width: 820px) {
		.side-bar {
			display: none;
		}
	}

	${breakpoints.md} {
		.about-box {
			padding-left: 0;
		}
	}
`;

const HeroContent = styled.div`
	display: flex;
	gap: 1rem;

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

	${breakpoints.sm} {
		.hero-img {
			padding-top: 0;
			margin-top: -3rem;
		}
	}
`;

const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
	width: 50%;

	@media (max-width: 820px) {
		width: 100%;
	}

	${breakpoints.md} {
	}
	h1 {
		position: relative;
		box-sizing: border-box;
		margin-left: 2rem;
		font-size: 2rem;
		font-weight: 700;
		margin-top: 0;
		padding-top: 0;
		color: #0c0c0c;

		${breakpoints.lg} {
			font-size: 1.7rem;
		}

		@media (max-width: 820px) {
			font-size: 1.5rem;
			font-weight: 500;
		}

		${breakpoints.sm} {
			text-align: center;
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
		${breakpoints.sm} {
			&::before {
				left: -10px;
			}
			&::after {
				left: -10px;

			}
		}
	}
	p {
		font-size: 1rem;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;


		@media (max-width: 820px) {
			font-size: 1rem;
		}
		${breakpoints.sm} {
			text-align: center;
			font-weight: 500;
			line-height: 170%;
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
		//min-width: 190px;

		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		&:hover {
			opacity: 0.8;
		}

			${breakpoints.sm} {
			padding: 0.4rem 1.5rem;
			font-size: 0.5rem;
		}
	}
	.get-quote {
		background-color: #fff;
		color: #b10000;
		border: 1px solid #b10000;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		text-align: center;
		text-transform: uppercase;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
		//min-width: 100px;
		${breakpoints.lg} {
			font-size: 0.7rem;
			padding: 0.5rem 1.5rem;
		}

		${breakpoints.sm} {
			min-width: 190px;
			//padding: 0.6rem 0.5rem;
			text-align: center;
			display: flex;
			justify-content: center;
			//font-size: 0.5rem;
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
		margin-bottom: -1rem;

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
				font-size: 1.4rem;
				margin-bottom: 0.5rem;
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
			@media (max-width: 460px) {
				margin-top: -3rem;
			}
			@media (max-width: 580px) and (min-width: 461px) {
				margin-top: -1rem;
			}
		}

		h5 {
			font-size: 1.3rem;
			font-weight: 500;
			color: #0c0c0c;
			padding: 1rem 0 0.2rem 0;

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
				font-size: 1.4rem;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.5rem;
		}
		p {
			font-size: 20px;
			font-weight: 400;
			color: #2a2a2a;

			${breakpoints.lg} {
				margin-top: 0;
				font-size: 18px;
			}

			@media (max-width: 850px) {
				font-size: 1rem;
			}
		}
	}
`;

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
	margin-bottom: 2rem;

	${breakpoints.lg} {
		gap: 1rem;
	}

	${breakpoints.md} {
		gap: 0.5rem;
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
				font-size: 1.4rem;
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
		margin-bottom: 0;
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
		width: 45%;
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
		font-size: 0.8rem;
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
			${breakpoints.sm} {
				font-size: 1.4rem;
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
				margin-top: 0;
				font-size: 18px;
			}

			@media (max-width: 850px) {
				font-size: 1rem;
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
			${breakpoints.sm} {
				font-size: 1.4rem;
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
				margin-top: 0;
				font-size: 18px;
			}

			@media (max-width: 850px) {
				font-size: 1rem;
			}
		}
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
			${breakpoints.sm} {
				font-size: 1.4rem;
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
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
	margin-bottom: 1rem;
	padding-right: 0.2rem;
	padding-left: 0.2rem;
	border-radius: 8px;
	transition: all 0.2s ease-in-out;
	box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
		0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);

	@media (min-width: 700px) and (max-width: 929px) {
		margin: 0 auto;
	}

	@media (max-width: 600px) {
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
			${breakpoints.sm} {
				font-size: 1.4rem;
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
	box-shadow: 0 1.55172px 1.10345px rgba(0, 0, 0, 0.3),
		0 1.10345px 1.31034px 1.10345px rgba(0, 0, 0, 0.15);
	transition: all 0.2s ease-in-out;
	margin-bottom: 1rem;

	@media (min-width: 821px) and (max-width: 999px) {
		width: 90%;
		margin: 0.5rem auto;
	}

	@media (max-width: 700px) {
		width: 80%;
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
