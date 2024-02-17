import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import DigitalTransformationConsultingPage from "../../../../components/services/itConsulting/digital_transformation_consulting";
import Head from "next/head";

const digitalTransformationConsultingPage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>
					Digital Transformation Consulting Services - Tanta Innovative{" "}
				</title>
				<meta
					name="description"
					content="Patient engagement solutions help interest patients in their health management and let health organizations qualify for Meaningful Use"
				/>
			</Head>
			<DigitalTransformationConsultingPage testimonials={testimonials} />
		</>
	);
};
digitalTransformationConsultingPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default digitalTransformationConsultingPage;

export async function getStaticProps() {
	let tech = [];
	let cases = [];
	let offers = [];
	let testimonials = [];
	let hero = [];
	let success = [];
	let faq = [];

	try {
		const faqRes = await axiosInstance("/api/homepage/faq/");
		faq = faqRes.data;

		const heroResp = await axiosInstance("/api/homepage/hero/");
		hero = heroResp.data;

		const response = await axiosInstance("/api/technologies/");
		tech = response.data;

		const res = await axiosInstance("/api/casestudy/");
		cases = res.data;

		const offersRes = await axiosInstance("/api/homepage/our-offerings/");
		offers = offersRes.data;

		const testimonialRes = await axiosInstance("/api/homepage/testimonials/");
		testimonials = testimonialRes.data;

		const successRes = await axiosInstance("/api/homepage/proof-of-success/");
		success = successRes.data;
	} catch (error) {}

	return {
		props: {
			tech,
			cases,
			offers,
			testimonials,
			hero,
			success,
			faq,
		},
		revalidate: 10,
	};
}
