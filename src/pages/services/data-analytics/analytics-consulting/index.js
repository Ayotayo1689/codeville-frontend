import { Box } from "@chakra-ui/react";
import LandingLayout from "../../../../layouts/landing.layout";
import AnalyticsConsulting from "../../../../components/dataAnalytics/analyticsConsulting";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";
import React from "react";

function AnalyticsConsultingPages({ testimonials }) {
	return (
		<>
			<Head>
				<title> Analytics Consulting - Tanta Innovative</title>
				<meta
					name="description"
					content="Data analytics requires infrastructure for aggregation, analysis, and reporting.
                      An experienced provider, delivers tailored business analytics solutions for simple
                      and complex needs."
				/>
			</Head>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<AnalyticsConsulting testimonials={testimonials} />
			</Box>
		</>
	);
}

AnalyticsConsultingPages.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};
export default AnalyticsConsultingPages;

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
