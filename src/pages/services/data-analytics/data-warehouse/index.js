import LandingLayout from "../../../../layouts/landing.layout";
import DataWarehouse from "../../../../components/dataAnalytics/dataWarehouse/index";
import axiosInstance from "../../../../utils/config";
import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

const DataWarehousePage = ({ portfolio1, testimonials }) => {
	return (
		<>
			<Head>
				<title> Analytics Warehouse - Tanta Innovative</title>
				<meta
					name="description"
					content="Harness the potential of data through our Data Warehouse as a Service offering. As a trusted
                IT company, we deliver scalable and secure solutions for streamlined data management, analysis,
                 and reporting. Empower your business with informed decision-making capabilities by leveraging our
                  efficient data services."
				/>
			</Head>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<DataWarehouse portfolio1={portfolio1} testimonials={testimonials} />
			</Box>
		</>
	);
};
DataWarehousePage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default DataWarehousePage;

export async function getStaticProps() {
	let portfolio1 = [];
	let testimonials = [];

	try {
		const portfolioRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/portfolio/"
		);
		portfolio1 = portfolioRes.data;

		const testimonialRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/testimonials/"
		);
		testimonials = testimonialRes.data;
	} catch (e) {}

	return {
		props: {
			portfolio1,
			testimonials,
		},
		revalidate: 10,
	};
}
