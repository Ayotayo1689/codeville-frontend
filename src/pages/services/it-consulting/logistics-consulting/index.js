import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import LogisticsConsulting from "../../../../components/services/itConsulting/logisticsConsulting";
import Head from "next/head";
const LogisticsConsultingPage = ({ testimonials }) => {
	return (
		<div>
			<Head>
				<title>Logistics Consulting</title>
				<meta
					name="description"
					content="Tanta: Customized IT solutions and specialized services for transportation and logistics
                     (T&L) since 2008. Accelerating digital transformation across management and T&L operations."
				/>
			</Head>
			<LogisticsConsulting testimonials={testimonials} />
		</div>
	);
};
LogisticsConsultingPage.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};
export default LogisticsConsultingPage;

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
