import LandingLayout from "../../../layouts/landing.layout";
import HealthCare from "../../../components/healthCare";
import React from "react";
import axiosInstance from "../../../utils/config";
import Head from "next/head";

const HealthCarePage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>Health Care IT Services - Tanta Innovative</title>
				<meta
					name="description"
					content="Tanta Innovative has been providing healthcare IT services for
           over a decade, including digitalizing care delivery, modernizing IT systems, migrating to the
            cloud, and providing IT support."
				/>
			</Head>
			<HealthCare testimonials={testimonials} />
		</>
	);
};
HealthCarePage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default HealthCarePage;

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
