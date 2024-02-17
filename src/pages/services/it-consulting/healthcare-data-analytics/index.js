import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import HealthcareDataAnalytics from "../../../../components/services/itConsulting/healthcareDataAnalytics";
import Head from "next/head";

const HealthcareDataAnalyticsPage = ({ testimonials }) => {
	return (
		<div>
			<Head>
				<title>Healthcare Analytics Consulting</title>
				<meta
					name="description"
					content="Tanta Innovatives, serving data analytics since 1989, started healthcare analytics in 2008.
                         Streamline clinical and operational procedures with our services."
				/>
			</Head>
			<HealthcareDataAnalytics testimonials={testimonials} />
		</div>
	);
};
HealthcareDataAnalyticsPage.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};
export default HealthcareDataAnalyticsPage;

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
