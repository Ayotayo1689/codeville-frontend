import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import ItAssesment from "../../../../components/services/itConsulting/it_assesment";
import Head from "next/head";

const medicalSoftwarePage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>It Assesment Consulting</title>
				<meta
					name="description"
					content="Explore innovative solutions, and discover how we can transform your ideas into reality. "
				/>
			</Head>
			<ItAssesment testimonials={testimonials} />
		</>
	);
};
medicalSoftwarePage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default medicalSoftwarePage;

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
