import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import DataAnalyticsModernization from "../../../components/dataAnalytics/data_analytics_modernization";
import axiosInstance from "../../../utils/config";
import Head from "next/head";

const medicalSoftwarePage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title> Data Analytics Modernization - Tanta Innovative</title>
				<meta
					name="description"
					content="Tanta Innovative specializes in upgrading data analytics solutions for maximum ROI.
                         Address evolving requirements with our tailored business analytics expertise."
				/>
			</Head>
			<DataAnalyticsModernization testimonials={testimonials} />
		</>
	);
};
medicalSoftwarePage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default medicalSoftwarePage;

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
