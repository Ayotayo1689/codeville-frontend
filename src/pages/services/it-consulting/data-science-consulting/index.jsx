import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import DataScienceConsulting from "../../../../components/services/itConsulting/dataScienceConsulting";
import { Box } from "@chakra-ui/react";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const DataScienceConsultingPages = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>Data Science Consulting</title>
				<meta
					name="description"
					content="Data science consulting provides expert guidance to leverage advanced analytics and machine
                 learning. Solve complex problems, drive data-driven decision-making."
				/>
			</Head>
			<Box>
				<DataScienceConsulting testimonials={testimonials} />
			</Box>
		</>
	);
};

DataScienceConsultingPages.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default DataScienceConsultingPages;

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
