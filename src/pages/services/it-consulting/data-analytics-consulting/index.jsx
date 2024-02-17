import { Box } from "@chakra-ui/react";
import LandingLayout from "../../../../layouts/landing.layout";
import DataAnalyticsConsulting from "../../../../components/services/itConsulting/data-analytics-consulting";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";
import React from "react";

const DataAnalyticsPage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>Data Analytics Consulting</title>
				<meta
					name="description"
					content="Data analytics consulting involves providing expert guidance and services to organizations in order to help them leverage their data for valuable insights and informed decision-making. "
				/>
			</Head>
			<Box>
				<DataAnalyticsConsulting testimonials={testimonials} />
			</Box>
		</>
	);
};

DataAnalyticsPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default DataAnalyticsPage;

export async function getStaticProps() {
	let testimonials = [];

	try {
		const testimonialRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/testimonials/"
		);
		testimonials = testimonialRes.data;
	} catch (error) {}

	return {
		props: {
			testimonials,
		},
		revalidate: 10,
	};
}
