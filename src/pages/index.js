import Head from "next/head";
import Image from "next/image";
import LandingLayout from "../layouts/landing.layout";
import Testimonial from "../components/testimonial";
import FAQ from "../components/faq";
import { BannerSection, Section, Wrapper1 } from "../../styles/home.style";
import { Box, Container, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { BsTelephoneFill } from "react-icons/bs";
import Arrow from "../../public/assets/solutions/curlyarrow.svg";
import Technologies from "../components/technologies";
import CalculatorBanner from "../components/calculatorBanner";
import Solutions from "../components/solutions";
import ContactUs from "../components/contactUs";
import ProofSection from "../components/proofSection";
import OurOffering from "../components/offerings";
import Hero from "../components/homeHero";
import axiosInstance from "../utils/config";
import Link from "next/link";
import React from "react";
import appRoutes from "../utils/appRoutes";
import Value from "../components/value";
import NoSSR from "../components/dataAnalytics/NoSSR";
import BlogPosts from "../components/blogPosts";

/**
 *
 * @description this is the Home page section
 * @returns {React.JSX.Element}
 */
const Home = ({
	tech,
	cases,
	offers,
	testimonials,
	hero,
	success,
	blogs,
	faq,
	categories,
}) => {
	const [isMobileDevice] = useMediaQuery("(max-width: 992px)");
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Head>
				<title>Tanta Innovative - IT Consulting and Software Company</title>
				<meta
					name="description"
					content="Discover Tanta's expert IT consulting and innovative software
                development services, tailored to elevate your business and drive digital transformation."
				/>

				<meta
					name="keywords"
					content="tanta innovative, Tanta, Tanta Innovative Limited, TRANSFORM YOUR BUSINESS, Mobile app, IT consulting, custom Software development,
          Custom software, Digital transformation, Cloud computing, Cybersecurity, Data analytics, Business intelligence,
          Project management, Web development, Mobile app development, UI/UX design, E-commerce, Enterprise solutions,
          IT support, Outsourcing, IT consulting services"
				/>
				<meta name="author" content="Tanta Innovative Limited" />
				<link rel="icon" href="/assets/favicon.ico" />
			</Head>

			<Hero hero={hero} />

			<Box>
				<OurOffering offers={offers} />
			</Box>

			<BannerSection>
				<Container maxW={"7xl"}>
					<Wrapper1>
						<div className="banner-details">
							<div className="details-container">
								<p className="details-title1">INDUSTRIES WE SERVE</p>
								<p className="details-title2">
									For your very specific industry, we have highly-tailored
								</p>
								<p className="details-title2">IT solutions.</p>
							</div>
							<div className="cta-wrapper">
								<Link href="tel:+234014536000" itemProp="telephone">
									<div className="cta-phone">
										<span>
											<BsTelephoneFill className="phone-icon" />
										</span>
										<p>+234 (01) 453 6000</p>
									</div>
								</Link>
								<Link
									href={{
										pathname: appRoutes.contactUs,
										query: { service: "/" },
									}}
								>
									<button>Let’s work together</button>
								</Link>
								<Image
									src={Arrow}
									alt="arrow"
									width={50}
									height={50}
									className="arrow"
								/>
							</div>
						</div>
					</Wrapper1>
				</Container>
			</BannerSection>

			<Container maxW={"7xl"} mb={"2rem"}>
				<Section>
					<Solutions solutions={categories} />
				</Section>
			</Container>

			<Box my={"3rem"}>
				<Container maxW={"7xl"}></Container>
				<Technologies tech={tech} />
			</Box>

			<NoSSR />
			<ProofSection cases={cases} success={success} />
			<NoSSR />

			<Box mb={"5rem"} bg={"#FAF7F7"} py={"3rem"}>
				<Container maxW={"7xl"}>
					<NoSSR />
					<Value />
					<NoSSR />
				</Container>
			</Box>

			<Container maxW={"7xl"} px={{ lg: "5rem", "2xl": "0.4rem" }} mb={"2rem"}>
				<BlogPosts blogs={blogs} />
			</Container>

			<Container maxW={"7xl"} px={{ lg: "5rem", "2xl": "0.4rem" }}>
				<Testimonial testimonial={testimonials} />
				<FAQ faq={faq} />
			</Container>

			<Box>
				<CalculatorBanner />
			</Box>
			<Box>
				<ContactUs subtitle="We’re here to support" />
			</Box>
		</>
	);
};
Home.getLayout = (page) => {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Home;

export async function getStaticProps() {
	let tech = [];
	let cases = [];
	let offers = [];
	let testimonials = [];
	let hero = [];
	let success = [];
	let faq = [];
	let blogs = [];
	let solutions = [];
	let categories = [];

	try {
		const faqRes = await axiosInstance("/api/homepage/faq/");
		faq = faqRes.data;

		const heroResp = await axiosInstance("/api/homepage/hero/");
		hero = heroResp.data;

		const response = await axiosInstance("/api/technologies/");
		tech = response.data;

		const res = await axiosInstance("/api/casestudy/");
		cases = res.data;

		const offersRes = await axiosInstance("/api/homepage/our-offerings/");
		offers = offersRes.data;

		const testimonialRes = await axiosInstance("/api/homepage/testimonials/");
		testimonials = testimonialRes.data;
		const solutionResponse = await axiosInstance("/api/solutioncategories/");
		categories = solutionResponse.data;
		const successRes = await axiosInstance("/api/homepage/proof-of-success/");
		success = successRes.data;
		const blogRes = await axiosInstance("/api/blog/");
		blogs = blogRes.data;
	} catch (error) {}

	return {
		props: {
			tech,
			cases,
			offers,
			testimonials,
			hero,
			blogs,
			success,
			faq,
			categories,
		},
		revalidate: 10,
	};
}
