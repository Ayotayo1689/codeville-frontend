import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import BigIntelligence from "../../../../components/services/itConsulting/bigIntelligence";
import { Box } from "@chakra-ui/react";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const BigIntelligencePage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title> Big Intelligence IT Consulting- Tanta Innovative</title>
				<meta
					name="description"
					content="Contact our dedicated team at Tanta Innovative for comprehensive Business Intelligence
                    (BI) consulting services. We specialize in efficient data organization, enabling informed
                    decision-making."
				/>
			</Head>
			<Box minHeight={"100vh"} mt={"8rem"}>
				<BigIntelligence testimonials={testimonials} />
			</Box>
		</>
	);
};

BigIntelligencePage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default BigIntelligencePage;

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
