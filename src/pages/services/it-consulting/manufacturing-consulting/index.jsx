import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";
import ManufacturingConsulting from "../../../../components/services/itConsulting/manufacturing-consulting";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const ManufacturingConsultingPages = ({ testimonials }) => {
	return (
		<>
			<Box>
				<Head>
					<title>Manufacturing Consulting</title>
					<meta
						name="description"
						content="Tanta:Empowering manufacturing industries with expert consulting services, optimizing processes, implementing automation,and leveraging data analytics."
					/>
				</Head>
				<ManufacturingConsulting testimonials={testimonials} />
			</Box>
		</>
	);
};

ManufacturingConsultingPages.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default ManufacturingConsultingPages;

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
