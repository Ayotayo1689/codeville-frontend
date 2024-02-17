import Banking from "../../../../components/services/itConsulting/banking";
import LandingLayout from "../../../../layouts/landing.layout";
import React from "react";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const BankingPage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title> Banking - Tanta Innovative </title>
				<meta
					name="description"
					content="Transforming banking with innovative solutions, digital banking services, and advanced financial technology to enhance customer experiences and drive industry growth"
				/>
			</Head>
			<Banking testimonials={testimonials} />
		</>
	);
};

BankingPage.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default BankingPage;

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
