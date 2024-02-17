import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import ItConsulting from "../../../components/services/itConsulting";
import axiosInstance from "../../../utils/config";
import Head from "next/head";

const Consulting = ({ cases, testimonials }) => {
	return (
		<>
			<Head>
				<title>IT Consulting Service - Tanta Innovative</title>

				<meta
					name="description"
					content="Get a competitive edge with our comprehensive IT consulting solutions. Our experienced team
                 provides strategic guidance, technology assessments, and tailored recommendations. Maximize your potential."
				/>
			</Head>
			<ItConsulting
				cases={cases}
				testimonials={testimonials}
			/>
			;
		</>
	);
};

Consulting.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default Consulting;

export async function getStaticProps() {
	let cases = [];
	let testimonials = [];
	let portfolio = [];

	try {
		const portfolioRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/portfolio/"
		);
		portfolio = portfolioRes.data;

		const testimonialRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/testimonials/"
		);
		testimonials = testimonialRes.data;

		const res = await axiosInstance(
			"/api/servicepage/itconsultingpage/casestudy/"
		);
		cases = res.data;
	} catch (error) {}

	return {
		props: {
			cases,
			testimonials,
			portfolio,
		},
		revalidate: 10,
	};
}
