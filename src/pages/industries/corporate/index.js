import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import CorporatePage from "../../../components/industries/corporate";
import axiosInstance from "../../../utils/config";
import Head from "next/head";

function Corporate({ testimonials }) {
	return (
		<>
			<Head>
				<title>IT Solutions for Corporate - Tanta Innovative</title>
				<meta
					name="description"
					content="With our tailored solutions and deep understanding of
                                    your business, we can assist you in reaching your goals and driving sustainable
                                    growth."
				/>
			</Head>
			<CorporatePage testimonials={testimonials} />
		</>
	);
}

Corporate.getLayout = (page) => {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Corporate;

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
