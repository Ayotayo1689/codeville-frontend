import LandingLayout from "../../../../layouts/landing.layout";
import React from "react";
import HealthcareItSupport from "../../../../components/healthCare/HealthcareItSupport/healthcareItSupport";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const HealthCarePage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>Healthcare IT Support Services | Tanta Innovative</title>
				<meta
					name="description"
					content="Tanta Innovative: Leading healthcare IT support company. Align your IT strategy with
                      your business strategy through our healthcare IT support services. "
				/>
			</Head>
			<HealthcareItSupport testimonials={testimonials} />
		</>
	);
};
HealthCarePage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default HealthCarePage;

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
