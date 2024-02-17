import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import RealEstateHousing from "../../../components/industries/RealEstate";
import axiosInstance from "../../../utils/config";
import Head from "next/head";
function RealEstate({ stacks, testimonials }) {
	return (
		<>
			<Head>
				<title>Real Estate Housing- Tanta Innovative</title>
				<meta name="description"
					  content="Streamline your Real Estate Housing with our tailored solutions."/>
			</Head>
			<RealEstateHousing stacks={stacks} testimonials={testimonials} />
		</>
	);
}

RealEstate.getLayout = (page) => {
	return <LandingLayout>{page}</LandingLayout>;
};
export default RealEstate;
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
