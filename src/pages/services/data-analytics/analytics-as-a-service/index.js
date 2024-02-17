import { Box } from "@chakra-ui/react";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import AnalyticsService from "../../../../components/dataAnalytics/analytics_as_service";
import Head from "next/head";
import React from "react";

function AnalyticsConsultingPages({ testimonials, cases }) {
	return (
		<>
			<Head>
				<title>Analytics As A Service - Tanta Innovative</title>
				<meta
					name="description"
					content="Tanta Innovative: Trusted provider of tailored data analytics solutions. Establish
                    robust data infrastructures, achieve effective aggregation, analysis, and reporting capabilities.
                     Comprehensive services for simple and complex requirements."
				/>
			</Head>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<AnalyticsService testimonials={testimonials} cases={cases} />
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
	let cases = [];

	try {
		const testimonialRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/testimonials/"
		);
		testimonials = testimonialRes.data;

		const res = await axiosInstance("/api/casestudy/");
		cases = res.data;
	} catch (error) {}

	return {
		props: {
			testimonials,
			cases,
		},
		revalidate: 10,
	};
}
