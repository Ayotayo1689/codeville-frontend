import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import InfrastructurePage from "../../../components/infrastructure";
import axiosInstance from "../../../utils/config";
import Head from "next/head";

function Infrastructure({ stacks, testimonials }) {
	return (
		<>
			<Head>
				<title>Infrastructure - Tanta Innovative</title>
				<meta name="description"
					  content="Enhance your business operations with our expert services, tailored to optimize your infrastructure. "/>
			</Head>
			<InfrastructurePage stacks={stacks} testimonials={testimonials}/>
		</>
	);
}

Infrastructure.getLayout = (page) => {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Infrastructure;

export async function getStaticProps() {
	// Fetch data from an API or a database
	let stacks = [];
	let testimonials = [];

	try {
		const stacksResponse = await axiosInstance("/api/aboutuspage/stacks/");
		stacks = stacksResponse.data;

		const testimonialRes = await axiosInstance("/api/servicepage/itconsultingpage/testimonials/");
		testimonials = testimonialRes.data;


	} catch (error) {}

	// Return the fetched data as props
	return {
		props: {
			stacks,
			testimonials,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		// revalidate: 10,  In seconds
	};
}
