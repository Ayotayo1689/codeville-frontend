import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import BigDataConsulting from "../../../../components/services/itConsulting/big_data";
import Head from "next/head";

const BigDataConsultingPage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>Big Data Consulting - Tanta Innovative</title>
				<meta
					name="description"
					content="Tanta Innovation offers expert big data consulting. Harness the power of data to drive insights, innovation, and business growth with our tailored solutions. "
				/>
			</Head>
			<BigDataConsulting testimonials={testimonials} />
		</>
	);
};
BigDataConsultingPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default BigDataConsultingPage;

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
