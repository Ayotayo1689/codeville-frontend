import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import ApplicationService from "../../../components/application_service";
import axiosInstance from "../../../utils/config";
import Head from "next/head";

function Applications({ testimonials, cases }) {
	return (
		<>
			<Head>
				<title>Application Services - Tanta Innovative</title>
				<meta
					name="description"
					content="Experience enhanced efficiency and reliability with our comprehensive application services. From development to maintenance, our expert team delivers end-to-end solutions for seamless performance and exceptional user experiences. Discover how our tailored services can optimize your applications and drive business success."
				/>
			</Head>
			<ApplicationService testimonials={testimonials} cases={cases}/>
		</>
	);
}

Applications.getLayout = (page) => {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Applications;

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
			"/api/casestudy/"
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
