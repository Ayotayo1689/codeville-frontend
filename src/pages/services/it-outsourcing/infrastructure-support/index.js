import { Box } from "@chakra-ui/react";
import InfrastructureSupport from "../../../../components/itOutSourcing/infrastructureSupport";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";
import React from "react";
const InfrastructureSupportPage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>IT Outsourcing - Tanta Innovative</title>
				<meta
					name="description"
					content="Reach out to our dedicated team of IT consultants to discuss your project needs. Explore
                       innovative solutions and see your ideas transformed into reality."
				/>
			</Head>

			<Box minHeight={"100vh"} mt={"7rem"}>
				<InfrastructureSupport testimonials={testimonials} />
			</Box>
		</>
	);
};

InfrastructureSupportPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default InfrastructureSupportPage;

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
