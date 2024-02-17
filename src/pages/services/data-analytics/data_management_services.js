import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import axiosInstance from "../../../utils/config";
import DataManagementServices from "../../../components/dataAnalytics/data_management_services";
import Head from "next/head";

const DataManagementServicesPage = ({ testimonials }) => {
	return <DataManagementServices testimonials={testimonials} />;
};
DataManagementServicesPage.getLayout = function getLayout(page) {
	return (
		<>
			<Head>
				<title> Data Management Services- Tanta Innovative</title>
				<meta
					name="description"
					content="Tanta Innovative: Trusted provider of customized data analytics services. Establish robust
                        data infrastructures, perform thorough aggregation, analysis, and reporting."
				/>
			</Head>
			<LandingLayout>{page}</LandingLayout>
		</>
	);
};

export default DataManagementServicesPage;

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
