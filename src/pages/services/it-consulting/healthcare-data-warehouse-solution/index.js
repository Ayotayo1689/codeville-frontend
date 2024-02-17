import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import HealthCareDataWarehouseSolution from "../../../../components/services/itConsulting/healthcare_data_warehouse_solution";
import Head from "next/head";

const HealthCareDataWarehouseSolutionPage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>HealthCare Data Warehouse Solution</title>
				<meta
					name="description"
					content="A healthcare data warehouse is a centralized repository for storing, processing, and
                    organizing data from multiple organizations. It enables analytical querying, reporting, and
                     benefits like cost reduction and optimized clinical outcomes."
				/>
			</Head>
			<HealthCareDataWarehouseSolution testimonials={testimonials} />
		</>
	);
};
HealthCareDataWarehouseSolutionPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default HealthCareDataWarehouseSolutionPage;

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
