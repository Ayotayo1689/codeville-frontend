import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import OperationalAnalytics from "../../../../components/services/itConsulting/operationalAnalytics/index";
import { Box } from "@chakra-ui/react";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const operational_analytics = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>
					{" "}
					Operational Analytics Consulting- Tanta Innovative Limited
				</title>
				<meta
					name="description"
					content="For managers and operational staff, an operational analytics solution gathers data from various
            systems including operations management, supply chain, CRM, finance, and HR. Designed to enhance decision-making."
				/>
			</Head>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<OperationalAnalytics testimonials={testimonials} />
			</Box>
		</>
	);
};

operational_analytics.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default operational_analytics;
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
