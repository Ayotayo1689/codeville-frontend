import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import ItConsulting from "../../../../components/healthCare/itConsultingAndAssessment/index";
import { Box } from "@chakra-ui/react";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const it_consulting_services = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>IT Consulting and Assessment - Tanta Innovative</title>
				<meta
					name="description"
					content="Tanta Innovative is a leading IT consulting company that provides IT consulting services to help you align your IT strategy with your business strategy."
				/>
			</Head>
			<Box minHeight={"100vh"} mt={"8rem"}>
				<ItConsulting testimonials={testimonials} />
			</Box>
		</>
	);
};

it_consulting_services.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default it_consulting_services;

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
