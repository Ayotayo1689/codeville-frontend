import CrisisManagement from "../../../../components/itOutSourcing/crisisManagement/index";
import LandingLayout from "../../../../layouts/landing.layout";
import React from "react";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const CrisisManagementPage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title> Crisis Management Consulting - Tanta Innovative </title>
				<meta
					name="description"
					content="  Our IT Outsourcing services help your business navigate challenging times with strategic expertise and reliable support"
				/>
			</Head>
			<CrisisManagement testimonials={testimonials} />
		</>
	);
};
CrisisManagementPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default CrisisManagementPage;

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
