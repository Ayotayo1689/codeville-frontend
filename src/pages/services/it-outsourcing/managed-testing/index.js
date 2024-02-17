import { Box } from "@chakra-ui/react";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";
import React from "react";
import ManagedTesting from "../../../../components/itOutSourcing/managedTesting";
const ManagesTestingPage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>Iot Services - Tanta Innovative</title>
				<meta
					name="description"
					content="Managed testing services cover test planning, test case design, execution, reporting, and
                    QA process improvements. Optimize testing time and budget."
				/>
			</Head>
			<Box minHeight={"100vh"} mt={"7rem"}>
				<ManagedTesting testimonials={testimonials} />
			</Box>
		</>
	);
};

ManagesTestingPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default ManagesTestingPage;

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
