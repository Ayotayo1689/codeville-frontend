import React from "react";
import MedicalsoftwarePage from "../../../components/healthCare/medical_software_development";
import LandingLayout from "../../../layouts/landing.layout";
import axiosInstance from "../../../utils/config";
import Head from "next/head";

const medicalSoftwarePage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>Medical Software Development Services | Tanta Innovative </title>
				<meta
					name="description"
					content="Patient engagement solutions help interest patients in their health management and let health organizations qualify for Meaningful Use"
				/>
			</Head>
			<MedicalsoftwarePage testimonials={testimonials} />
		</>
	);
};
medicalSoftwarePage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default medicalSoftwarePage;

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

		const testimonialRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/testimonials/"
		);
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
